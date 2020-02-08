import { postService } from '../services';

const list = async (req, res) => {
  const posts = await postService.list();
  return res.json(posts);
};

const find = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.find(id);
    return res.status(200).send(post);
  } catch (err) {
    return res.status(500).send({ message: 'Error al encontrar el post' });
  }
};

const create = (req, res) => {
  const { titulo, contenido } = req.body;

  return postService.create(titulo, contenido)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Post creado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al crear el post' });
    });
};

const update = (req, res) => {
  const { id } = req.params;
  const { titulo, contenido } = req.body;

  return postService.update(id, titulo, contenido)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Post actualizado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al actualizar el post' });
    });
};

const del = (req, res) => {
  const { id } = req.params;

  return postService.del(id)
    .then((result) => {
      console.log(result);
      return res.send({ message: 'Post eliminado exitosamente' });
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
