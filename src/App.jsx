import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import ContactsPage from "../src/pages/ContactsPage/ContactsPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import RegistrationPage from "../src/pages/RegistrationPage/RegistrationPage";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../src/redux/auth/selectors";
import { refreshUser } from "../src/redux/auth/operations";
// import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div>Refreshing user....</div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  );
}
