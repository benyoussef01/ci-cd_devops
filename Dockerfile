# Étape de construction
FROM node:16 AS builder
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
RUN npm install

# Copier tout le projet
COPY . .

# Pas besoin de build si aucune étape spécifique n'est requise
# RUN npm run build

# Étape d'exécution
FROM node:16-alpine
WORKDIR /app

# Copier les fichiers depuis l'étape builder
COPY --from=builder /app .

# Exposer le port et démarrer l'application
EXPOSE 3000
CMD ["node", "app.js"]

