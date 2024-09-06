import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { refreshUser } from "../src/redux/auth/operations";
import { selectIsRefreshing } from "../src/redux/auth/selectors";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../src/pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../src/pages/RegistrationPage/RegistrationPage")
);
// import "./App.css";

export default function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  // return isRefreshing ? (
  //   <div>Updating the user</div>
  // ) : (

  <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  </Suspense>;
}
