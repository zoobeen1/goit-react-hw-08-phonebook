import { Container } from './Loader.styled';
import { Dna } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Container>
      <Dna visible={true} height="200" width="200" ariaLabel="dna-loading" />
    </Container>
  );
};
