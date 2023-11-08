import { ContactsPage } from 'pages/ContactsPage';
import { GlobalStyle } from 'GlobalStyle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { refreshSession } from 'redux/auth-operations';
import { selectIsLoggedIn } from 'redux/auth-selectors';

export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshSession());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/contacts" />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contacts"
          element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* <ToastContainer autoClose={1000} /> */}
    </>
  );
}
