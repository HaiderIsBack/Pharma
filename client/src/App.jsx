import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Transition from './components/Transition';
import Cart from './components/Cart';
import Overlay from './components/Overlay';
import MenuSidebar from './components/MenuSidebar';

// Pages
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Overlay />

      <Transition />

      
      <Router>
        <ScrollToTop />
        <MenuSidebar />
        <Cart />
        <Nav />
        <Routes>
          <Route path='/'>
            <Route path='' element={<Home />} />
            <Route path='product/:productId' element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
