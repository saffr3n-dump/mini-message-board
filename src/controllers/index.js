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
