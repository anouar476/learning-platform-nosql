// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Pour éviter les erreurs d'exécution dues à des configurations manquantes ou incorrectes.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : L'application peut ne pas fonctionner correctement, ou même échouer à démarrer.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = [
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'REDIS_URI'
];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME
  },
  redis: {
    uri: process.env.REDIS_URI
  },
  port: process.env.PORT || 3000
};