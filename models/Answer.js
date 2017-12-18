import { Schema } from 'mongoose';

const AnswerSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  next: {
    id:{
      type: Schema.Types.ObjectId,
      required: true
    },
    text: {
      type: String,
      required: true
    }

  }
});

export default AnswerSchema;