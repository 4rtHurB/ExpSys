import express from 'express';
import { Schema } from 'mongoose';
import Question from '../models/Question';

const { ObjectId } = Schema;
const router = express.Router();

router.post('/question', (req, res) => {
  Question.create(req.body).then(question => {
    res.send(201, question);
  });
});

router.get('/questions', (req, res) => {
  Question.find().then(questions => {
    res.send(200, questions);
  });
});

router.get('/questions/:id', (req, res) => {
  const { id } = req.params;

  if (id !== 'first') {
    console.log(id);
    Question.findOne({ '_id': id }).then(question => {
      res.send(200, question);
    });
  } else Question.findOne({ 'first': true }).then(question => {
    res.send(200, question);
  });
});

router.delete('/questions/:id', (req, res) => {
  const { id } = req.params;

  Question.findOneAndRemove({ '_id': id }).then(question => {
    res.send(200, question);
  });
});

router.put('/questions/:id', (req, res) => {
  const { id } = req.params;

  Question.findOneAndUpdate({ '_id': id }, req.body).then(() => {
    Question.findOne({ '_id': id }).then(question => {
      res.send(200, question);
    });
  });
});

router.post('/questions/:id/answer', (req, res) => {
  const createAnswer = {
    '$push': { 'answers': req.body }
  };

  Question.findOneAndUpdate({ '_id': req.params.id }, createAnswer).then(() => {
    Question.findOne({ '_id': req.params.id }).then(question => {
      res.send(201,
        question.answers.splice(question.answers.length-1)[0]);
    });
  });
});

router.delete('/questions/:idQuestion/answers/:idAnswer', (req, res) => {
  const { idAnswer, idQuestion } = req.params;
  const searchQuestion = {
    '_id': idQuestion
  };
  const removeAnswer = {
    '$pull': { 'answers': { '_id': idAnswer } }
  };

  Question.findOneAndUpdate(searchQuestion, removeAnswer).then(() => {
    Question.findOne(searchQuestion).then(question => {
      res.send(200, question);
    });
  });
});

router.put('/questions/:idQuestion/answers/:idAnswer', (req, res) => {
  const { idQuestion, idAnswer } = req.params;
  const updateAnswer = {
    '$set' : { 'answers.$' : req.body }
  };
  const searchAnswer = {
    'answers._id': idAnswer
  };

  Question.findOneAndUpdate(searchAnswer, updateAnswer).then(() => {
    Question.findOne({ '_id': idQuestion }).then(question => {
      res.send(200, question);
    });
  });
});

export default router;