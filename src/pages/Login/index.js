import React, { useState } from 'react';

import Card from 'Components/Card';
import Form from './styles';

export default function Login() {
  const [email, setEmail] = useState({ value: '', hasError: false, touched: false });
  const [password, setPassword] = useState({ value: '', hasError: false, touched: false });

  const handleEmail = ({ target: { value: emailValue } }) => {
    if (!emailValue && email.touched) {
      setEmail({
        ...email,
        value: emailValue,
        hasError: true
      });
    } else {
      setEmail({
        ...email,
        value: emailValue,
        hasError: false,
        touched: true
      });
    }
  };

  const handlePassword = ({ target: { value: passwordValue } }) => {
    if (!passwordValue && password.touched) {
      setPassword({
        ...password,
        value: passwordValue,
        hasError: true
      });
    } else {
      setPassword({
        ...password,
        value: passwordValue,
        hasError: false,
        touched: true
      });
    }
  };

  return (
    <Form>
      <Card>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleEmail}
          id="email"
          value={email.value}
        />
        {email.hasError && <p>E-mail obrigatório</p>}
        <input
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handlePassword}
          id="password"
          value={password.value}
          data-testid="password"
        />
        {password.hasError && <p>Senha obrigatória</p>}
        <button type="submit">Entrar</button>
      </Card>
    </Form>
  );
}
