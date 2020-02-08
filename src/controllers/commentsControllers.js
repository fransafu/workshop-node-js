import { commentService } from '../services';

const list = async (req, res) => {
  const comments = await commentService.list();
  return res.json(comments);
};

const find = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentService.find(id);
    return res.status(200).send(comment);
  } catch (err) {
    return res.status(500).send({ message: 'Error al encontrar el comentario' });
  }
};

const create = (req, res) => {
  const { contenido, postId } = req.body;

  return commentService.create(postId, contenido)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Comentario creado exitosamente!' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al crear el comentario' });
    });
};

const update = (req, res) => {
  const { id } = req.params;
  const { contenido } = req.body;

  return commentService.update(id, contenido)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Comentario actualizado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al actualizar el comentario' });
    });
};

const del = (req, res) => {
  const { id } = req.params;

  return commentService.del(id)
    .then((result) => {
      console.log(result);
      return res.status(200).send({ message: 'Comentario eliminado exitosamente' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: 'Error al eliminar el comentario' });
    });
};

export default {
  list,
  find,
  create,
  update,
  del,
};
