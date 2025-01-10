// Question: Pourquoi créer des services séparés ?
// Réponse: La création de services séparés permet de mieux organiser le code, de le rendre 
// plus modulaire et réutilisable. Cela facilite également les tests unitaires et la maintenance 
// du code en isolant les différentes responsabilités dans des modules distincts.

const { db } = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  return await db.collection(collection).findOne({ _id: new ObjectId(id) })
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
};