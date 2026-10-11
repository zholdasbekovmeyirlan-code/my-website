# Бәрі: one container serves the API and all four web apps.
FROM node:22-alpine
WORKDIR /app
COPY bari ./bari
COPY server ./server
WORKDIR /app/server
ENV NODE_ENV=production \
    PORT=3000 \
    DB_PATH=/data/bari.db
VOLUME ["/data"]
EXPOSE 3000
CMD ["node", "--disable-warning=ExperimentalWarning", "index.js"]
