import { RegisterForm } from 'components/RegisterForm';
import { AppBar } from 'components/AppBar';
import { Container, Section } from 'components/common';

export const Register = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Section title="Register form">
          <RegisterForm />
        </Section>
      </Container>
    </>
  );
};
