import React, { useState } from 'react';

import Card from 'Components/Card';
import { Container } from './styles';

export default function Login() {
  const [user, setUserField] = useState({ name: '', password: '' });

  function handleField({ target: { name, value } }) {
    setUserField({ ...user, [name]: value });
  }

  return (
    <Container>
      <Card>
        <input type="email" name="email" onChange={handleField} id="email" />
        <input type="password" name="password" onChange={handleField} id="password" />
      </Card>
    </Container>
  );
}
