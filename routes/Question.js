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
  } else Question.find({ 'first': true }).then(question => {
    res.send(200, question);
  });
});

router.delete('/questions/:id', (req, res) => {
  Question.findOneAndRemove( ObjectId(req.params.id) ).then(question => {
    res.send(200, question);
  });
});

router.put('/questions/:id', (req, res) => {
  Question.findOneAndUpdate( ObjectId(req.params.id), req.body).then(() => {
    Question.findOne( ObjectId(req.params.id) ).then(question => {
      res.send(200, question);
    });
  });
});

router.post('/questions/:id/answer', (req, res) => {
  const createAnswer = {
    '$push': { 'answers': req.body }
  };

  Question.findOneAndUpdate( ObjectId(req.params.id), createAnswer).then(() => {
    Question.findOne( ObjectId(req.params.id) ).then(question => {
      res.send(201, question);
    });
  });
});

router.delete('/questions/:idQuest/answers/:idAnsw', (req, res) => {
  const removeAnswer = {
    '$pull': { 'answers': { '_id': req.params.idAnswgi } }
  };

  Question.findOneAndUpdate( ObjectId(req.params.idQuest), removeAnswer).then(() => {
    Question.findOne( ObjectId(req.params.idQuest) ).then(question => {
      res.send(200, question);
    });
  });
});

router.put('/questions/:idQuest/answers/:idAnsw', (req, res) => {
  const updateAnswer = {
    '$set' : { 'answers.$' : req.body }
  };
  const searchAnswer = {
    'answers._id': req.params.idAnsw
  };

  Question.findOneAndUpdate(searchAnswer, updateAnswer).then(() => {
    Question.findOne( ObjectId(req.params.idQuest) ).then(question => {
      res.send(200, question);
    });
  });
});

export default router;