import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { FormStyled, Input } from './UserForm.styled';
import { FormError } from './FormError';
import { Button } from 'components/common';
import { logIn } from 'redux/auth-operations';

export const UserForm = () => {
  const dispatch = useDispatch();
  //Submit function
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
    return;

    //  alert(`${name} is already in contacts`);
  };
  const INITIAL_VALUES = {
    gender: '',
    name: '',
    email: '',
    password: '',
    newpass: '',
    repit: '',
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      // validationSchema={schema}
    >
      <FormStyled>
        <label htmlFor="name">Your name</label>
        <Input
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Enter your name"
          placeholder="Your name"
          required
        />
        <FormError name="name" />

        <label htmlFor="email">Email</label>
        <Input
          type="text"
          name="email"
          id="email"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Enter password"
          placeholder="Password"
          required
        />
        <FormError name="password" />

        <label htmlFor="new-pass">New password</label>
        <Input
          type="text"
          name="new-pass"
          id="new-pass"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Enter new password"
          placeholder="New password"
          required
        />
        <FormError name="new-pass" />

        <label htmlFor="repit">Password</label>
        <Input
          type="text"
          name="repit"
          id="repit"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Repit new password"
          placeholder="Repit password"
          required
        />
        <FormError name="repit" />

        <Button type="submit" mt={3}>
          Save
        </Button>
      </FormStyled>
    </Formik>
  );
};
