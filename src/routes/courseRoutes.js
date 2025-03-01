// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Pour une meilleure organisation et maintenabilité du code.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Grouper les routes par fonctionnalité ou par ressource.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route pour les statistiques des cours
router.get('/stats', courseController.getCourseStats);
router.get('/delete', courseController.deletecourse);
// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);

module.exports = router;