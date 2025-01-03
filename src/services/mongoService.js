// Question: Pourquoi créer des services séparés ?
// Réponse: 

const { ObjectId } = require('mongodb');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  return db.collection(collection).findOne({ _id: ObjectId(id) });
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};