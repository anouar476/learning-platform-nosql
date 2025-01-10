# Projet de fin de module NoSQL
## Course Management System

### Réalisé par Anouar Moudad

Ce projet est une application backend pour la gestion des cours, offrant des fonctionnalités de création, mise à jour, suppression et récupération de données.

## Comment lancer le projet

### Configurer Redis et MongoDB avec Docker

Pour configurer Redis et MongoDB, suivez les étapes ci-dessous :

1. **Télécharger les images Docker** :
   Téléchargez les images de Redis et MongoDB depuis le registre Docker.
   ![Pull Redis](<pull redis.png>)
   ![Pull MongoDB](<pull mongodb.png>)
   ![run MongoDB](runMongoDb.png) 
   ![run Redis](runRedis.png)
2. **Démarrer les conteneurs** :
   Lancez les conteneurs Redis et MongoDB.

3. **Vérifier l'état des conteneurs** :
   Assurez-vous que les conteneurs fonctionnent correctement.
   ![Statut des conteneurs](<conteneur stats.png>)

### Démarrer l'application

Pour démarrer l'application, utilisez la commande suivante :
```bash
npm start
```
   ![Démarrer l'application](<run App.png>)

### Fonctionnalités de l'application

- **Ajout de cours** :
  Ajoutez quelques cours à notre collection en utilisant mongosh.
  ![Insertion de données de cours](<inster data to couses.png>)
- **Recherche de cours** :
  Recherchez des cours dans la base de données.
  ![Recherche de cours](<find course .png>)
- **Statistiques des cours** :
  Consultez les statistiques des cours.
  ![Statistiques des cours](image.png)