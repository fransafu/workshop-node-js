import { userService } from '../services';

const list = async (req, res) => {
  const users = await userService.list();
  return res.json(users);
};

const find = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.find(id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: 'Error al encontrar el usuario' });
  }
};

const create = (req, res) => {
  const { name, email } = req.body;

  return userService.create(name, email)
    .then((result) => {
      console.log(result);
      return res.status(201).send({ message: 'Usuario creado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al crear el usuario' });
    });
};

const update = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  return userService.update(id, name, email)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Usuario actualizado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al actualizar el usuario' });
    });
};

const del = (req, res) => {
  const { id } = req.params;

  return userService.del(id)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Usuario eliminado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al eliminar el usuario' });
    });
};

export default {
  list,
  find,
  create,
  update,
  del,
};
