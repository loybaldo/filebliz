import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404';
import About from './pages/about';
import AccountPage from './pages/account';
import HomePage from './pages/home';
import PricingPage from './pages/pricing';
import SigninPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/premium" element={ <PricingPage/> }/>
        <Route path="/account" element={ <AccountPage/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/signin" element={ <SigninPage/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
