const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createFlashcard, getFlashcards } = require('../controllers/flashcardController');

router.post('/', auth, createFlashcard);
router.get('/', auth, getFlashcards);

module.exports = router;