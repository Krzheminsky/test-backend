import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/HomePage";
import Main from 'pages/main/Main';

function App() {
  return (
    <Routes >
      <Route exact path="*" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/home" element={<Main />} />
    </Routes >
  );
}

export default App;
