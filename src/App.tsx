import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404';
import About from './pages/about';
import Account from './pages/account';
import NoAccount from './pages/no-account';
import HomePage from './pages/home';
import Pricing from './pages/pricing';
import SigninPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/premium" element={ <Pricing/> }/>
        <Route path="/no-account" element={<NoAccount /> }/>
        <Route path="/account" element={ <Account/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/signin" element={ <SigninPage/> }/>
        <Route path="*" element={ <NotFoundPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
