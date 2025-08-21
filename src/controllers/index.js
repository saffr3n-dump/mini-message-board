import { getAllMessages, getOneMessage, createMessage } from '../db.js';
import formatDate from '../utils/formatDate.js';

export const home = async (_req, res) => {
  const messages = (await getAllMessages()).map((msg) => {
    msg.added = formatDate(msg.added);
    return msg;
  });
  res.render('template', {
    title: 'Mini Message Board',
    body: 'index',
    messages,
  });
};

export const createGet = (_req, res) => {
  res.render('template', {
    title: 'New Message',
    body: 'form',
  });
};

export const createPost = async (req, res) => {
  const { name, message } = req.body;
  await createMessage(message, name, new Date());
  res.redirect('/');
};

export const message = async (req, res) => {
  const message = await getOneMessage(req.params.id);
  message.added = formatDate(message.added);
  res.render('template', {
    title: 'Message Info',
    body: 'message',
    message,
  });
};
