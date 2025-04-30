#Dùng node base Image
FROM node:18-alpine AS deps

#Tao thu muc app
WORKDIR /app

# Cai dependencies
COPY package.json package-lock.json ./
RUN npm install

#Build ung dung
FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Chay ung dung voi Next js
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=developer

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "dev"]