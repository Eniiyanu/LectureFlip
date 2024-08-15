const Flashcard = require('../models/Flashcard');

exports.createFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFlashcard = new Flashcard({
      user: req.user.id,
      question,
      answer,
    });
    const flashcard = await newFlashcard.save();
    res.json(flashcard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(flashcards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};