import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
);

export default mongoose.model('Post', PostSchema);
