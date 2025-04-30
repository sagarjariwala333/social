FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

COPY src ./src

COPY keys ./keys

RUN npm run build

WORKDIR /app

RUN npm install

CMD ["node", "dist/app.js"]
# # Stage 1: Build
# FROM node:18-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY tsconfig.json ./
# COPY src ./src

# COPY  keys H:\Freelancing\social-media\keys

# RUN npm run build

# # Stage 2: Run
# FROM node:18-alpine
# WORKDIR /app

# # ❗ Only copy the built files and needed artifacts
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package*.json ./

# RUN npm install --omit=dev

# CMD ["node", "dist/app.js"]
