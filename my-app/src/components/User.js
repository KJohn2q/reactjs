import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

function User() {
  return (element);
}

export default User;
