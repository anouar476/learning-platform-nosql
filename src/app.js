// Question: Comment organiser le point d'entrée de l'application ?
// Réponse: Organisez le point d'entrée de l'application en séparant les routes, les contrôleurs, les services,
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Réponse: La meilleure façon de gérer le démarrage de l'application est de décomposer le processus en étapes distinctes, 
// telles que l'initialisation des connexions aux bases de données, la configuration des middlewares Express, 
// le montage des routes et le démarrage du serveur.


const express = require('express');
const { connectMongo, connectRedis, closeConnections } = require('./config/db');
const config = require('./config/env');
const courseRoutes = require('./routes/courseRoutes');



const app = express();
app.use(express.json());
// Routes
app.use('/courses', courseRoutes);

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    // TODO: Configurer les middlewares Express
    // TODO: Monter les routes
    // TODO: Démarrer le serveur
    await connectMongo();
    await connectRedis();

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
  console.log('Shutting down server...');
  await closeConnections();
  process.exit(0);
});

startServer();