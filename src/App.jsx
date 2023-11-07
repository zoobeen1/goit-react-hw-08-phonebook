// import { PhoneBook } from 'components/PhoneBook/PhoneBook';
// import { Container } from 'components/common';
import { ContactsPage } from 'pages/ContactsPage';
import { GlobalStyle } from './components/GlobalStyle';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';
//imports of pages
import HomePage from 'pages/HomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { refreshSession } from 'redux/auth-operations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshSession());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* <ToastContainer autoClose={1000} /> */}
    </>
  );
}
