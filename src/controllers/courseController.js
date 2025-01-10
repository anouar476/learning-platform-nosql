// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Un contrôleur gère la logique métier et les interactions avec la base de données, tandis qu'une route définit 
// les points d'entrée de l'API et les associe aux contrôleurs.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de rendre le code plus modulaire, maintenable et réutilisable.

const { getDb } = require('../config/db');
const { ObjectId } = require('mongodb');

async function createCourse(req, res) {
  try {
    const db = getDb();
    if (!db) {
      console.error('MongoDB connection not established');
      return res.status(500).json({ error: 'MongoDB connection not established' });
    }

    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    console.log('Inserting course with title:', title, 'and description:', description);
    const result = await db.collection('courses').insertOne({ title, description });
    console.log('Course inserted:', result);

    const insertedCourse = await db.collection('courses').findOne({ _id: result.insertedId });
    console.log('Inserted Course:', insertedCourse); 

    res.status(201).json(insertedCourse);
  } catch (err) {
    console.error('Error creating course:', err);
    res.status(500).json({ error: 'Failed to create course' });
  }
}

async function getCourse(req, res) {
  try {
    const db = getDb();
    if (!db) {
      console.error('MongoDB connection not established');
      return res.status(500).json({ error: 'MongoDB connection not established' });
    }
    const { id } = req.params;
    console.log('Fetching course with id:', id);
    const course = await db.collection('courses').findOne({ _id: new ObjectId(id) });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (err) {
    console.error('Error fetching course:', err);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
}

async function getCourseStats(req, res) {
  try {
    const db = getDb();
    const coursesCount = await db.collection('courses').countDocuments();
    res.status(200).json({ coursesCount });
  } catch (err) {
    console.error('Error fetching course stats:', err);
    res.status(500).json({ error: 'Failed to fetch course stats' });
  }
}

module.exports = {
  createCourse,
  getCourse,
  getCourseStats,
};
