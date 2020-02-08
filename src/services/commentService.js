import { Comment } from '../models';

const list = async () => {
  const comments = await Comment.find({}, { __v: 0 }).exec();
  return comments;
};

const find = async (id) => {
  const comment = await Comment.findOne({ _id: id }, { __v: 0 }).exec();
  return comment;
};

const create = (postId, content) => {
  const comment = new Comment({ postId, content });

  return comment.save()
    .then((data) => {
      console.log(data);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

const update = async (id, content) => {
  const comment = await Comment.findOne({ _id: id }, { _id: 0, __v: 0 });

  if (!comment) {
    return Promise.reject(false);
  }

  const oldContent = comment.toJSON();
  return Comment.updateOne({
    _id: id,
  }, {
    ...oldContent,
    ...{ content },
  })
    .then((result) => {
      console.log(result);
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

// delete is a keyword, use 'del'
const del = (id) => Comment.findOneAndRemove({ _id: id })
  .then((result) => {
    console.log(result);
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  });


export default {
  list,
  find,
  create,
  update,
  del,
};
