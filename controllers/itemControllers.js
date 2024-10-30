const itemModel = require('../models/itemModel');

const postItem = async (req, res) => {
  const { name } = req.body;

  const item = await itemModel.create({ name });

  res.status(200).json(item);
};

const getItems = async (req, res) => {
  const items = await itemModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(items);
};
const getItem = async (req, res) => {
  const { id } = req.params;

  const item = await itemModel.findById({ _id: id });

  res.status(200).json(item);
};
const deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await itemModel.findOneAndDelete({ _id: id });

  res.status(200).json(item);
};
const updateItem = async (req, res) => {
  const { id } = req.params;

  const item = await itemModel.findOneAndUpdate({ _id: id }, { ...req.body });

  res.status(200).json(item);
};

module.exports = { postItem, getItems, getItem, deleteItem, updateItem };
