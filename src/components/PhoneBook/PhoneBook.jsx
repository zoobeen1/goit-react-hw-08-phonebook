import { Section, Container } from 'components/common';
import { InputForm } from './InputForm';

export function PhoneBook() {
  return (
    <Container>
      <Section title="Phonebook">
        <InputForm />
      </Section>
    </Container>
  );
}
