// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Utilisez des TTL appropriés et invalidez les caches obsolètes.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utilisez des noms de clés descriptifs et évitez les clés trop longues.
// Fonctions utilitaires pour Redis
const redis = require('redis');
const redisClient = redis.createClient();

async function cacheData(key, data, ttl) {
    await redisClient.set(key, JSON.stringify(data), 'EX', ttl);
}
  
async function getData(key) {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
}
  
module.exports = {
    cacheData,
    getData,
};