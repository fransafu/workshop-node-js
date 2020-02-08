import mongoose from 'mongoose';
import User from './user';
import Comment from './comment';
import Post from './post';

mongoose.set('debug', true);

export {
  User,
  Post,
  Comment,
};
