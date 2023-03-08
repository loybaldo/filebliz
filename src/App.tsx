import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404";
import InternalServerErrorPage from "./pages/500";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/internal-server-error" element={ <InternalServerErrorPage/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
