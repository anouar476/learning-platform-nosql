// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Créer un module séparé pour les connexions aux bases de données permet de centraliser 
// et de réutiliser le code de connexion, de gérer les erreurs et les retries de manière cohérente, et de faciliter la maintenance et les tests du code.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Implémenter des fonctions de nettoyage qui ferment les connexions aux bases de données 
// lors de la terminaison de l'application ou d'une erreur critique, en écoutant les événements de processus 
// comme 'SIGINT'  ou 'SIGTERM' et en appelant les méthodes de fermeture appropriées sur les clients de base de données.

import { MongoClient } from 'mongodb';
import redis from 'redis';
import config from './env';

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri);
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log(`Connected to MongoDB database: ${config.mongodb.dbName}`);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  try {
    redisClient = redis.createClient({ url: config.redis.uri });
    redisClient.on('error', (err) => console.error('Redis Client Error', err));
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
    process.exit(1);
  }
}
async function closeConnections() {
  if (mongoClient) await mongoClient.close();
  if (redisClient) await redisClient.disconnect();
}
// Export des fonctions et clients
export {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  closeConnections,
  getDb,
  getRedisClient,
};