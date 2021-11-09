const db = require("../modelo/db");
const Livro = db.livro;
const Op = db.sequelize.Op;

const NOME_OBJETO = "Livro";

exports.create = (req, res) => {
   console.log(req.body);
   if (!req.body) {
      res.status(400).send({
         mensagem: "Conteudo vazio",
      });
      return;
   }

   if (!req.body.titulo) {
      res.status(412).send({
         mensagem: `O campo titulo não pode ser vazio`,
      });
   } else if (!req.body.autor) {
      res.status(412).send({
         mensagem: `O campo autor não pode ser vazio`,
      });
   } else if (!req.body.editora) {
      res.status(412).send({
         mensagem: `O campo editora não pode ser vazio`,
      });
   } else if (!req.body.anoLancamento) {
      res.status(412).send({
         mensagem: `O campo anoLancamento não pode ser vazio`,
      });
   }

   let livro = {
      titulo: req.body.titulo,
      autor: req.body.autor,
      editora: req.body.editora,
      anoLancamento: req.body.anoLancamento,
   };

   Livro.create(livro)
      .then((data) => {
         res.status(201).send(data);
      })
      .catch((err) => {
         res.status(500).send({
            mensagem:
               err.message || `Aconteceu um erro ao criar o ${NOME_OBJETO}`,
         });
      });
};

exports.findAll = (req, res) => {
   const descricao = req.query.descricao;
   let condicao = descricao
      ? { descricao: { [Op.like]: `%${descricao}%` } }
      : null;
   Livro.findAll({ where: condicao })
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         res.status(500).send({
            mensagem:
               err.message || `Aconteceu um erro ao criar o ${NOME_OBJETO}`,
         });
      });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   Livro.findByPk(id)
      .then((data) => {
         if (data) {
            res.send(data);
         } else {
            res.status(412).send({
               message: `Não foi possível encontrar um ${NOME_OBJETO} com o id = ${id}`,
            });
         }
      })
      .catch((err) => {
         res.status(500).send({
            mensagem:
               err.message || `Aconteceu um erro ao criar o ${NOME_OBJETO}`,
         });
      });
};

exports.update = (req, res) => {
   const id = req.params.id;

   Livro.update(req.body, {
      where: { id: id },
   }).then((num) => {
      if (num == 1) {
         res.send({
            mensagem: `${NOME_OBJETO} foi atualizado com sucesso`,
         });
      } else {
         res.status(404).send({
            mensagem: `Não foi possível atualizar o ${NOME_OBJETO} com o id = ${id}. Talvez o ${NOME_OBJETO} não tenha sido encontrado ou o objeto enviado está vazio!`,
         });
      }
   });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   Livro.destroy({
      where: { id: id },
   }).then((num) => {
      if (num == 1) {
         res.send({
            mensagem: `${NOME_OBJETO} foi deletado com sucesso`,
         });
      } else {
         res.status(404).send({
            message: `Não foi possível deletar o ${NOME_OBJETO} com o id = ${id}. Talvez o ${NOME_OBJETO} não tenha sido encontrado!`,
         });
      }
   });
};
