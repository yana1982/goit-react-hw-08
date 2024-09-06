import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import ContactsPage from "../src/pages/ContactsPage/ContactsPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import RegistrationPage from "../src/pages/RegistrationPage/RegistrationPage";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout/Layout";
// import "./App.css";

export default function App() {
  return (
    <div>
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
    </div>
  );
}
