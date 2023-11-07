import { Formik } from 'formik';
import { FormStyled, Input } from './LoginFormStyled';
import { FormError } from './FormError';
import { Button } from 'components/common';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  //Submit function
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
    return;

    //  alert(`${name} is already in contacts`);
  };
  const INITIAL_VALUES = { email: '', password: '' };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      // validationSchema={schema}
    >
      <FormStyled>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          name="email"
          id="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Enter email"
          placeholder="Email"
          required
        />
        <FormError name="email" />

        <label htmlFor="password">Password</label>
        <Input
          type="text"
          name="password"
          id="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Enter password"
          placeholder="Password"
          required
        />
        <FormError name="password" />

        <Button type="submit" mt={3}>
          Login
        </Button>
      </FormStyled>
    </Formik>
  );
};
