import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    postId: String,
    content: String,
  },
);

export default mongoose.model('Comment', CommentSchema);
