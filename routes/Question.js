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
  Question.findOne( ObjectId(req.params.id) ).then(question => {
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
  const my = {
    "text": "Yes",
    "next": {
      "id": "5a061d3205abb91e7b199e7f",
      "text": "Test Question1"
    }
  };

  const createAnswer = {
    $push: { 'answers': my }
  };

  console.log(createAnswer);
  Question.findOneAndUpdate({ '_id': req.params.id }, createAnswer).then(() => {
    console.log(ObjectId(req.params.id));
    Question.findOne( ObjectId(req.params.id) ).then(question => {
      res.send(201, question);
    });
  });
});

router.delete('/questions/:idQuest/answers/:idAnsw', (req, res) => {
  const removeAnswer = {
    '$pull': { 'answers': { '_id': ObjectId(req.params.idAnsw) } }
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
    'answers._id': ObjectId(req.params.id)
  };

  Question.findOneAndUpdate(searchAnswer, updateAnswer).then(() => {
    Question.findOne(searchAnswer).then(question => {
      res.send(200, question);
    });
  });
});

export default router;