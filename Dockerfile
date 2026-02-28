# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.25-alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY devops/nginx/nginx.conf /etc/nginx/nginx.conf
COPY devops/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
