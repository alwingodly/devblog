import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserAuthFormPage from "./pages/UserAuthFormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="login" element={<UserAuthFormPage type="login" />} />
        <Route path="register" element={<UserAuthFormPage type="register" />} />
      </Route>
    </Routes>
  );
};

export default App;
