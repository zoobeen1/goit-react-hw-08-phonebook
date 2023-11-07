import { Contacts } from 'components/Contacts';
import { AppBar } from 'components/AppBar';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';

export const ContactsPage = () => {
  return (
    <>
      <AppBar />
      <PhoneBook />
      <Contacts />
    </>
  );
};
