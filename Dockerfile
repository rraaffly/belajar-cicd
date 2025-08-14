FROM oven/bun:1 AS base

# working directory
WORKDIR /app

# stage 1
FROM base AS deps
COPY bun.lock* package.json ./
RUN bun install --frozen-lockfile

# stage 2
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# stage 3
FROM base AS runner
COPY --from=builder /app/dist/main ./dist/main
RUN chmod +x ./dist/main
CMD ["./dist/main"]