FROM node:18-alpine
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install
COPY . .

# Exposer le port
EXPOSE 3000
CMD ["node", "server.js"]
