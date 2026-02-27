# Dr. Milind Bapat Website — Deployment Plan

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Prerequisites](#prerequisites)
3. [Local Development](#local-development)
4. [Docker Deployment](#docker-deployment)
5. [AWS Infrastructure (Terraform)](#aws-infrastructure-terraform)
6. [Kubernetes Deployment](#kubernetes-deployment)
7. [CI/CD Pipelines](#cicd-pipelines)
8. [SSL/TLS Setup](#ssltls-setup)
9. [Domain Configuration](#domain-configuration)
10. [Monitoring & Maintenance](#monitoring--maintenance)
11. [Rollback Procedures](#rollback-procedures)
12. [Security Checklist](#security-checklist)

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────┐
│                    INTERNET                          │
│                  drmilindbapat.in                     │
└─────────────────────┬────────────────────────────────┘
                      │
              ┌───────▼───────┐
              │  CloudFlare / │
              │  Route 53 DNS │
              └───────┬───────┘
                      │
         ┌────────────▼────────────┐
         │    AWS EC2 / K8s        │
         │  ┌──────────────────┐   │
         │  │   Nginx Reverse  │   │
         │  │     Proxy        │   │
         │  │   (SSL + Gzip)   │   │
         │  └────────┬─────────┘   │
         │           │             │
         │  ┌────────▼─────────┐   │
         │  │  React SPA       │   │
         │  │  (Static Files)  │   │
         │  └──────────────────┘   │
         └─────────────────────────┘
```

**Tech Stack:**
- **Frontend:** React 18 + Vite + TypeScript + Tailwind CSS
- **Web Server:** Nginx (Alpine)
- **Container:** Docker + Docker Compose
- **Infrastructure:** Terraform (AWS)
- **Orchestration:** Kubernetes (optional)
- **CI/CD:** Jenkins + GitHub Actions
- **Domain:** drmilindbapat.in

---

## Prerequisites

| Tool               | Version   | Purpose                    |
|--------------------|-----------|----------------------------|
| Node.js            | >= 20.x   | Build the React app        |
| npm / bun          | Latest    | Package manager            |
| Docker             | >= 24.x   | Containerization           |
| Docker Compose     | >= 2.20   | Multi-container orchestration |
| Terraform          | >= 1.5    | Infrastructure as Code     |
| kubectl            | >= 1.28   | Kubernetes CLI             |
| AWS CLI            | >= 2.x    | AWS management             |
| Certbot            | Latest    | SSL certificate generation |

---

## Local Development

### Step 1: Clone & Install
```bash
git clone https://github.com/your-org/drmilindbapat-website.git
cd drmilindbapat-website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
App runs at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```
Output in `dist/` folder.

### Step 4: Preview Production Build
```bash
npm run preview
```

---

## Docker Deployment

### Option A: Quick Start (Single Command)
```bash
docker-compose up -d --build
```
Site available at `http://localhost:80`

### Option B: Production Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### Option C: Manual Docker Build
```bash
# Build the image
docker build -t drmilindbapat/website:latest .

# Run the container
docker run -d \
  --name drmilindbapat-web \
  -p 80:80 \
  --restart unless-stopped \
  drmilindbapat/website:latest
```

### Verify Docker Deployment
```bash
# Check container status
docker ps

# Check health
curl http://localhost/health

# View logs
docker logs drmilindbapat-web -f
```

---

## AWS Infrastructure (Terraform)

### Step 1: Configure AWS Credentials
```bash
aws configure
# Region: ap-south-1 (Mumbai)
```

### Step 2: Create S3 Backend (One-Time)
```bash
aws s3 mb s3://drmilindbapat-terraform-state --region ap-south-1
aws dynamodb create-table \
  --table-name terraform-lock \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region ap-south-1
```

### Step 3: Create Key Pair
```bash
aws ec2 create-key-pair \
  --key-name drmilindbapat-key \
  --query 'KeyMaterial' \
  --output text > drmilindbapat-key.pem
chmod 400 drmilindbapat-key.pem
```

### Step 4: Initialize & Apply Terraform
```bash
cd devops/terraform

# Initialize
terraform init

# Preview changes
terraform plan

# Apply infrastructure
terraform apply

# Note the output IP address
terraform output instance_public_ip
```

### Step 5: Deploy Application to EC2
```bash
# SSH into server
ssh -i drmilindbapat-key.pem ubuntu@<PUBLIC_IP>

# Clone repo and deploy
cd /opt/drmilindbapat
git clone https://github.com/your-org/drmilindbapat-website.git .
docker-compose -f docker-compose.prod.yml up -d --build
```

---

## Kubernetes Deployment

### Step 1: Apply Namespace
```bash
kubectl apply -f devops/k8s/namespace.yaml
```

### Step 2: Deploy Application
```bash
kubectl apply -f devops/k8s/deployment.yaml
kubectl apply -f devops/k8s/service.yaml
kubectl apply -f devops/k8s/ingress.yaml
kubectl apply -f devops/k8s/hpa.yaml
```

### Step 3: Verify
```bash
kubectl get pods -n drmilindbapat
kubectl get svc -n drmilindbapat
kubectl get ingress -n drmilindbapat
```

### Step 4: Monitor
```bash
# Watch pods
kubectl get pods -n drmilindbapat -w

# Check logs
kubectl logs -f deployment/drmilindbapat-web -n drmilindbapat

# Check HPA
kubectl get hpa -n drmilindbapat
```

---

## CI/CD Pipelines

### GitHub Actions (Recommended)
Pipeline at `.github/workflows/ci-cd.yml` runs automatically:

1. **On PR to main** → Lint + Type Check + Test + Build
2. **On push to main** → Above + Docker Build/Push + Production Deploy

**Required GitHub Secrets:**
| Secret              | Description                     |
|---------------------|---------------------------------|
| `DOCKER_USERNAME`   | Docker Hub username             |
| `DOCKER_PASSWORD`   | Docker Hub password/token       |
| `PRODUCTION_HOST`   | Production server IP            |
| `STAGING_HOST`      | Staging server IP               |
| `DEPLOY_USER`       | SSH user (e.g., `deploy`)       |
| `SSH_PRIVATE_KEY`   | SSH private key for deployment  |

### Jenkins
Pipeline defined in `Jenkinsfile`:

**Required Jenkins Credentials:**
- `docker-hub-credentials` — Docker Hub username/password

**Setup:**
1. Create Jenkins pipeline job pointing to your repo
2. Add credentials in Jenkins → Manage Credentials
3. Pipeline auto-triggers on push to `main`/`develop`

---

## SSL/TLS Setup

### Option A: Certbot (EC2)
```bash
# Install certbot
sudo apt install certbot -y

# Generate certificate
sudo certbot certonly --standalone \
  -d drmilindbapat.in \
  -d www.drmilindbapat.in \
  --agree-tos \
  --email your-email@example.com

# Certificates stored at:
# /etc/letsencrypt/live/drmilindbapat.in/fullchain.pem
# /etc/letsencrypt/live/drmilindbapat.in/privkey.pem

# Copy to nginx ssl directory
sudo cp /etc/letsencrypt/live/drmilindbapat.in/fullchain.pem devops/nginx/ssl/
sudo cp /etc/letsencrypt/live/drmilindbapat.in/privkey.pem devops/nginx/ssl/

# Auto-renewal (add to crontab)
echo "0 3 * * * certbot renew --quiet --post-hook 'docker restart drmilindbapat-web'" | sudo crontab -
```

### Option B: cert-manager (Kubernetes)
Already configured in `devops/k8s/ingress.yaml` with Let's Encrypt.

---

## Domain Configuration

### DNS Records for drmilindbapat.in

| Type | Name  | Value                  | TTL  |
|------|-------|------------------------|------|
| A    | @     | `<EC2_PUBLIC_IP>`      | 300  |
| A    | www   | `<EC2_PUBLIC_IP>`      | 300  |
| TXT  | @     | `v=spf1 ~all`         | 3600 |

### Using Lovable (Current Setup)
If using Lovable's built-in hosting:
- A records point to `185.158.133.1`
- Add TXT record `_lovable` with verification value

---

## Monitoring & Maintenance

### Health Checks
```bash
# HTTP health check
curl -s http://drmilindbapat.in/health | jq

# Docker health
docker inspect --format='{{.State.Health.Status}}' drmilindbapat-web
```

### Log Management
```bash
# Docker logs
docker logs drmilindbapat-web --since 1h -f

# Nginx access logs (inside container)
docker exec drmilindbapat-web tail -f /var/log/nginx/access.log
```

### Updates
```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose -f docker-compose.prod.yml up -d --build

# Verify
curl http://localhost/health
```

---

## Rollback Procedures

### Docker Rollback
```bash
# List available images
docker images drmilindbapat/website

# Rollback to previous tag
docker-compose -f docker-compose.prod.yml down
docker tag drmilindbapat/website:<previous-tag> drmilindbapat/website:latest
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes Rollback
```bash
# View rollout history
kubectl rollout history deployment/drmilindbapat-web -n drmilindbapat

# Rollback to previous version
kubectl rollout undo deployment/drmilindbapat-web -n drmilindbapat

# Rollback to specific revision
kubectl rollout undo deployment/drmilindbapat-web -n drmilindbapat --to-revision=2
```

### Terraform Rollback
```bash
cd devops/terraform

# Check state
terraform state list

# Revert specific resource
terraform apply -target=aws_instance.web
```

---

## Security Checklist

- [x] Nginx security headers (X-Frame-Options, CSP, XSS Protection)
- [x] Docker health checks
- [x] Resource limits in Docker Compose and Kubernetes
- [x] Non-root container execution (Nginx Alpine)
- [x] SSL/TLS encryption
- [x] Gzip compression enabled
- [x] Static asset caching (1 year for hashed assets)
- [x] Hidden files access denied
- [ ] Restrict SSH to specific IPs (update Security Group)
- [ ] Enable AWS CloudTrail for audit logging
- [ ] Set up AWS CloudWatch alarms
- [ ] Configure rate limiting in Nginx
- [ ] Set up fail2ban on EC2

---

## File Structure (DevOps)

```
├── Dockerfile                    # Multi-stage Docker build
├── .dockerignore                 # Docker build exclusions
├── docker-compose.yml            # Development compose
├── docker-compose.prod.yml       # Production compose
├── Jenkinsfile                   # Jenkins CI/CD pipeline
├── .github/
│   └── workflows/
│       └── ci-cd.yml             # GitHub Actions pipeline
├── devops/
│   ├── nginx/
│   │   ├── nginx.conf            # Nginx main config
│   │   ├── default.conf          # Site server block
│   │   └── ssl/                  # SSL certificates (gitignored)
│   ├── terraform/
│   │   ├── main.tf               # Provider & backend config
│   │   ├── variables.tf          # Input variables
│   │   ├── terraform.tfvars      # Variable values
│   │   ├── infrastructure.tf     # VPC, EC2, Security Groups
│   │   └── outputs.tf            # Output values
│   └── k8s/
│       ├── namespace.yaml        # Kubernetes namespace
│       ├── deployment.yaml       # Pod deployment
│       ├── service.yaml          # ClusterIP service
│       ├── ingress.yaml          # Ingress with TLS
│       └── hpa.yaml              # Horizontal Pod Autoscaler
└── DEPLOYMENT.md                 # This file
```

---

## Support & Contact

- **Website:** https://drmilindbapat.in
- **WhatsApp:** +91 9822032496
- **Phone:** +91 8042757407
