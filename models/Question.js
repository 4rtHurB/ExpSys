import mongoose from 'mongoose';
import AnswerSchema from './Answer';

const QuestionSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  first: {
    type: Boolean,
    default: false
  },
  answers: [AnswerSchema]
});


const Question = mongoose.model('question', QuestionSchema);

export default Question;