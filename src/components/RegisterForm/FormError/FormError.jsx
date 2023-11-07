import { ErrorText } from '../RegisterFormStyled';
import { ErrorMessage } from 'formik';
//Validation Error function
export function FormError({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
}
