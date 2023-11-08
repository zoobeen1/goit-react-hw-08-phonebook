import { LoginForm } from 'components/LoginForm/LoginForm';
import { AppBar } from 'components/AppBar';
import { Container, Section } from 'components/common';

export const Login = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Section title="Login form">
          <LoginForm />
        </Section>
      </Container>
    </>
  );
};
