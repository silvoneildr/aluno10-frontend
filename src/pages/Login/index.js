import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from 'Components/Card';
import Button from 'Components/Button';
import Input from 'Components/Input';
import LabelError from 'Components/Label/Error';
import Container, { Form } from './styles';

import { getMessagesByLocale } from '../../locale';

export default function Login() {
  const [email, setEmail] = useState({ value: '', hasError: false, touched: false });
  const [password, setPassword] = useState({ value: '', hasError: false, touched: false });
  const locale = useSelector(state => state.locale);

  console.log(locale);
  console.log(getMessagesByLocale('en-US'));

  function handleEmail({ target: { value: emailValue } }) {
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
  }

  function handlePassword({ target: { value: passwordValue } }) {
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.value || !password.value) {
      return;
    }
    alert('Foi');
  }
  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={handleEmail}
            value={email.value}
            hasError={email.hasError}
          />
          {email.hasError && <LabelError>E-mail obrigatório</LabelError>}
          <Input
            placeholder="Senha"
            type="password"
            name="password"
            onChange={handlePassword}
            value={password.value}
            hasError={password.hasError}
          />
          {password.hasError && <LabelError>Senha obrigatória</LabelError>}
          <Button type="submit" onClick={handleSubmit} color="primary">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
