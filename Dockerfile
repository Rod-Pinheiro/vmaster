# Dockerfile para aplicação V-Master (Next.js)
FROM node:20-alpine AS base

# Instalar dependências apenas para produção
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

# Stage de build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Definir variável de ambiente para build de produção
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Fazer build da aplicação
RUN npm run build

# Stage de produção
FROM base AS runner
WORKDIR /app

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários do stage de build
COPY --from=builder /app/public ./public

# Copiar arquivos do build otimizado
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mudar para usuário não-root
USER nextjs

# Expor porta 6000
EXPOSE 6000

# Definir variável de ambiente para porta
ENV PORT=6000
ENV NEXT_TELEMETRY_DISABLED=1

# Comando para iniciar a aplicação
CMD ["node", "server.js"]

# Stage de desenvolvimento
FROM base AS dev
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar código fonte
COPY . .

# Expor porta 6000
EXPOSE 6000

# Definir variável de ambiente
ENV NEXT_TELEMETRY_DISABLED=1

# Comando para desenvolvimento
CMD ["npm", "run", "dev"]