import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth-selectors';
// Temp section
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { Section, Container, Box, Button } from 'components/common';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // Temp section
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => setShowModal(pshowModal => !pshowModal);
  // END OF Temp section

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {/* Temp section */}
      <Button
        type="button"
        onClick={() => {
          console.log('Button click');
          togleModal();
        }}
      >
        Modalochka ;)
      </Button>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {showModal && (
        <Modal togleModal={togleModal}>
          <Container>
            <h2>Modal window</h2>
          </Container>
        </Modal>
      )}
    </nav>
  );
};
