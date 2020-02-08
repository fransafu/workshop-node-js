import { User } from '../models';

const list = async () => {
  const users = await User.find({}, { __v: 0 }).exec();
  return users;
};

const find = async (id) => {
  const user = await User.findOne({ _id: id }, { __v: 0 }).exec();
  return user;
};

const create = (name, email) => {
  const user = new User({ name, email });

  return user.save()
    .then((data) => {
      console.log(data);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

const update = async (id, name, email) => {
  try {
    const user = await User.findOne({ _id: id }, { _id: 0, __v: 0 });

    if (!user) {
      return false;
    }

    const oldUser = user.toJSON();
    const result = await User.updateOne({
      _id: id,
    }, {
      ...oldUser,
      ...{ name, email },
    });

    return result;
  } catch (err) {
    return err;
  }
};

// delete is a keyword, use 'del'
const del = (id) => User.findOneAndRemove({ _id: id })
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
