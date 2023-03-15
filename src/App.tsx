import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404';
import About from './pages/about';
import Account from './pages/account';
import HomePage from './pages/home';
import Pricing from './pages/pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/premium" element={ <Pricing/> }/>
        <Route path="/account" element={ <Account/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
