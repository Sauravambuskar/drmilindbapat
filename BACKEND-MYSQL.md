# 🗄️ MySQL Backend Setup Guide — Dr. Milind Bapat Website

A step-by-step guide to set up a **Node.js + Express + MySQL** backend API for the website.

---

## 📋 Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Project Structure](#2-project-structure)
3. [MySQL Database Setup](#3-mysql-database-setup)
4. [Backend API Setup](#4-backend-api-setup)
5. [API Endpoints](#5-api-endpoints)
6. [Connect Frontend to Backend](#6-connect-frontend-to-backend)
7. [Deploy Backend on Hostinger VPS](#7-deploy-backend-on-hostinger-vps)
8. [Deploy Backend on AWS EC2](#8-deploy-backend-on-aws-ec2)
9. [Security Best Practices](#9-security-best-practices)

---

## 1. Prerequisites

- **Node.js** >= 18
- **MySQL** >= 8.0
- **npm** or **yarn**
- A server (Hostinger VPS, AWS EC2, or any Linux server)

---

## 2. Project Structure

Create a separate folder for the backend (outside the frontend repo or in a `backend/` directory):

```
backend/
├── package.json
├── .env
├── server.js
├── config/
│   └── db.js
├── routes/
│   ├── appointments.js
│   ├── contacts.js
│   └── blog.js
├── middleware/
│   └── auth.js
└── models/
    ├── appointment.js
    ├── contact.js
    └── blog.js
```

---

## 3. MySQL Database Setup

### 3.1 Install MySQL (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install mysql-server -y
sudo mysql_secure_installation
```

### 3.2 Create Database and User

```sql
-- Login to MySQL
sudo mysql -u root -p

-- Create database
CREATE DATABASE drmilindbapat_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create user
CREATE USER 'drmbapat_user'@'localhost' IDENTIFIED BY 'YOUR_STRONG_PASSWORD_HERE';

-- Grant privileges
GRANT ALL PRIVILEGES ON drmilindbapat_db.* TO 'drmbapat_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3.3 Create Tables

```sql
USE drmilindbapat_db;

-- Appointments table
CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(100),
  preferred_date DATE,
  preferred_time TIME,
  message TEXT,
  status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact form submissions
CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  subject VARCHAR(200),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts (dynamic, managed from admin)
CREATE TABLE blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(200) UNIQUE NOT NULL,
  title VARCHAR(300) NOT NULL,
  excerpt TEXT,
  content LONGTEXT NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100),
  read_time VARCHAR(20),
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonials
CREATE TABLE testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(100) NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery images
CREATE TABLE gallery_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(500) NOT NULL,
  caption VARCHAR(300),
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. Backend API Setup

### 4.1 Initialize Project

```bash
mkdir backend && cd backend
npm init -y
npm install express mysql2 cors dotenv helmet express-rate-limit
npm install -D nodemon
```

### 4.2 Environment Variables (`.env`)

```env
PORT=5000
DB_HOST=localhost
DB_USER=drmbapat_user
DB_PASSWORD=YOUR_STRONG_PASSWORD_HERE
DB_NAME=drmilindbapat_db
CORS_ORIGIN=https://drmilindbapat.in
API_KEY=YOUR_SECRET_API_KEY
```

> ⚠️ **Never commit `.env` to Git.** Add it to `.gitignore`.

### 4.3 Database Connection (`config/db.js`)

```js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
```

### 4.4 Main Server (`server.js`)

```js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use('/api/', limiter);

// Routes
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/blog', require('./routes/blog'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

### 4.5 Routes — Appointments (`routes/appointments.js`)

```js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/appointments — Create appointment
router.post('/', async (req, res) => {
  try {
    const { patient_name, phone, email, preferred_date, preferred_time, message } = req.body;

    if (!patient_name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    const [result] = await db.execute(
      'INSERT INTO appointments (patient_name, phone, email, preferred_date, preferred_time, message) VALUES (?, ?, ?, ?, ?, ?)',
      [patient_name, phone, email, preferred_date, preferred_time, message]
    );

    res.status(201).json({ id: result.insertId, message: 'Appointment request received' });
  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/appointments — List all (admin)
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM appointments ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
```

### 4.6 Routes — Contact (`routes/contacts.js`)

```js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/contacts — Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const [result] = await db.execute(
      'INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, subject, message]
    );

    res.status(201).json({ id: result.insertId, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
```

### 4.7 Routes — Blog (`routes/blog.js`)

```js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/blog — List published posts
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT id, slug, title, excerpt, image_url, category, read_time, created_at FROM blog_posts WHERE is_published = TRUE ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/blog/:slug — Single post
router.get('/:slug', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM blog_posts WHERE slug = ? AND is_published = TRUE',
      [req.params.slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
```

### 4.8 Add Scripts to `package.json`

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### 4.9 Run Locally

```bash
npm run dev
```

Test: `http://localhost:5000/health`

---

## 5. API Endpoints

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | `/health`              | Health check             |
| POST   | `/api/appointments`    | Book appointment         |
| GET    | `/api/appointments`    | List appointments (admin)|
| POST   | `/api/contacts`        | Submit contact form      |
| GET    | `/api/blog`            | List blog posts          |
| GET    | `/api/blog/:slug`      | Get single blog post     |

---

## 6. Connect Frontend to Backend

In the React frontend, create an API utility:

### `src/lib/api.ts`

```ts
const API_BASE = import.meta.env.VITE_API_URL || 'https://api.drmilindbapat.in';

export async function submitAppointment(data: {
  patient_name: string;
  phone: string;
  email?: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
}) {
  const res = await fetch(`${API_BASE}/api/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit appointment');
  return res.json();
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE}/api/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
}

export async function fetchBlogPosts() {
  const res = await fetch(`${API_BASE}/api/blog`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function fetchBlogPost(slug: string) {
  const res = await fetch(`${API_BASE}/api/blog/${slug}`);
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}
```

Add to your `.env` (frontend):
```env
VITE_API_URL=http://localhost:5000
```

---

## 7. Deploy Backend on Hostinger VPS

### 7.1 SSH into Your VPS

```bash
ssh root@YOUR_VPS_IP
```

### 7.2 Install Node.js & MySQL

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs mysql-server
```

### 7.3 Set Up MySQL

Follow [Section 3](#3-mysql-database-setup) to create the database and tables.

### 7.4 Clone & Configure Backend

```bash
cd /opt
git clone YOUR_BACKEND_REPO drmilindbapat-api
cd drmilindbapat-api
npm install --production
cp .env.example .env
nano .env   # Fill in your MySQL credentials
```

### 7.5 Run with PM2 (Process Manager)

```bash
npm install -g pm2
pm2 start server.js --name drmilindbapat-api
pm2 save
pm2 startup
```

### 7.6 Nginx Reverse Proxy for API

Add to your Nginx config (`/etc/nginx/sites-available/api.drmilindbapat.in`):

```nginx
server {
    listen 80;
    server_name api.drmilindbapat.in;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/api.drmilindbapat.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7.7 SSL for API Subdomain

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d api.drmilindbapat.in
```

---

## 8. Deploy Backend on AWS EC2

If using the Terraform-provisioned EC2 instance:

### 8.1 SSH into EC2

```bash
ssh -i drmilindbapat-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

### 8.2 Install MySQL

```bash
sudo apt update
sudo apt install mysql-server -y
sudo mysql_secure_installation
```

### 8.3 Follow Steps 3–4 Above

Create database, tables, clone repo, configure `.env`, run with PM2.

### 8.4 Update Security Group

Ensure port **5000** (or your API port) is open in the AWS Security Group, or use Nginx reverse proxy on port 80.

---

## 9. Security Best Practices

| Practice | Details |
|----------|---------|
| **Environment Variables** | Never hardcode credentials. Use `.env` files |
| **CORS** | Restrict to your domain only |
| **Rate Limiting** | Already configured (100 req/15min) |
| **Helmet** | Security headers enabled |
| **Input Validation** | Validate all inputs before DB queries |
| **Prepared Statements** | `mysql2` uses parameterized queries (prevents SQL injection) |
| **HTTPS** | Always use SSL in production |
| **API Key** | Add API key middleware for admin routes |
| **Backups** | Schedule daily MySQL dumps |

### MySQL Backup Script

```bash
#!/bin/bash
# Save as /opt/scripts/backup-db.sh
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mysqldump -u drmbapat_user -p'YOUR_PASSWORD' drmilindbapat_db > /opt/backups/db_$TIMESTAMP.sql
find /opt/backups -type f -mtime +7 -delete  # Keep last 7 days
```

```bash
chmod +x /opt/scripts/backup-db.sh
# Add to crontab (daily at 2 AM)
crontab -e
0 2 * * * /opt/scripts/backup-db.sh
```

---

## 🎯 Quick Start Summary

```bash
# 1. Set up MySQL database
sudo mysql < create-tables.sql

# 2. Clone and configure backend
git clone YOUR_REPO backend && cd backend
npm install
cp .env.example .env && nano .env

# 3. Start development
npm run dev

# 4. Deploy with PM2
pm2 start server.js --name drmilindbapat-api

# 5. Update frontend VITE_API_URL
# Set to https://api.drmilindbapat.in
```

---

**Need help?** This backend can be extended with:
- 📧 Email notifications (Nodemailer)
- 🔐 Admin panel authentication (JWT)
- 📊 Analytics dashboard
- 📱 SMS notifications (Twilio)
