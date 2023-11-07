import React, { useEffect } from 'react';
import { Box, Container } from '../common';
import { List, ListItem, Number } from './Contacts.styled';
import { Section } from '../common';
import { Filter } from 'components/Filter';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectVisibleContats } from 'redux/contacts-selectors';
//Redux-actions
import { deleteContact, fetchContacts } from 'redux/contacts-operations';
import { setFilter } from 'redux/contacts-slice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  //
  //Возвращает массив контактов по фильтру
  const visibleContacts = useSelector(selectVisibleContats);

  //Управляет фильтром - контроллируемый элемент
  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <Section title="Contacts">
        <Filter filter={filter} onChange={changeFilter} />
        <Box mt="10px" pt="20px">
          {visibleContacts.map(contact => {
            return (
              <List key={contact.id}>
                <ListItem>
                  {`${contact.name}:`}
                  <Number> {contact.number} </Number>
                  <button onClick={() => dispatch(deleteContact(contact.id))}>
                    Delete
                  </button>
                </ListItem>
              </List>
            );
          })}
        </Box>
      </Section>
    </Container>
  );
};
