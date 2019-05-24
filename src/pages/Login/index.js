import React, { useState } from 'react';

import Card from 'Components/Card';
import Container from './styles';

export default function Login() {
  const [user, setUserField] = useState({ email: '', password: '' });

  function handleField({ target: { name: fieldName, value } }) {
    console.log('chamou');
    setUserField({ ...user, [fieldName]: value });
  }

  return (
    <Container>
      <Card test="wagner">
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleField}
          id="email"
          value={user.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleField}
          id="password"
          value={user.password}
        />
      </Card>
    </Container>
  );
}
