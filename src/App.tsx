import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404";
import InternalServerErrorPage from "./pages/500";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import UploadPage from "./pages/upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/signin" element={ <LoginPage/> }/>
        <Route path="/upload" element={ <UploadPage/> }/>
        <Route path="/internal-server-error" element={ <InternalServerErrorPage/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
