import formatDate from '../utils/formatDate.js';

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

export const home = (_req, res) => {
  const msgs = messages.slice().map((msg) => {
    msg.added = formatDate(msg.added);
    return msg;
  });
  res.render('template', {
    title: 'Mini Message Board',
    body: 'index',
    messages: msgs,
  });
};

export const createGet = (_req, res) => {
  res.render('template', {
    title: 'New Message',
    body: 'form',
  });
};

export const createPost = (req, res) => {
  const { name, message } = req.body;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
  });
  res.redirect('/');
};

export const message = (req, res) => {
  const original = messages[req.params.id];
  const formatted = { ...original, added: formatDate(original.added) };
  res.render('template', {
    title: 'Message Info',
    body: 'message',
    message: formatted,
  });
};
