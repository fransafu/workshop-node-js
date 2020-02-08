import { Post } from '../models';

const list = async () => {
  const posts = await Post.find({}, { __v: 0 }).exec();
  return posts;
};

const find = async (id) => {
  const post = await Post.findOne({ _id: id }, { __v: 0 }).exec();
  return post;
};

const create = (title, content) => {
  const post = new Post({ title, content });

  return post.save()
    .then((data) => {
      console.log(data);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

const update = async (id, title, content) => {
  const post = await Post.findOne({ _id: id }, { _id: 0, __v: 0 });

  if (!post) {
    return false;
  }

  const oldContent = post.toJSON();
  return Post.updateOne({
    _id: id,
  }, {
    ...oldContent,
    ...{ title, content },
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
const del = (id) => Post.findOneAndRemove({ _id: id })
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
