import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Components
import Nav from './components/Nav';
// import Footer from './components/Footer';
const Footer = lazy(() => import("./components/Footer"));
import Transition from './components/Transition';
const Cart = lazy(() => import('./components/Cart'));
const Overlay = lazy(() => import('./components/Overlay'));
// import Overlay from './components/Overlay';
const MenuSidebar = lazy(() => import('./components/MenuSidebar'));
// import MenuSidebar from './components/MenuSidebar';

// Pages
import Home from './pages/Home';
const ProductPage = lazy(() => import('./pages/ProductPage'));
// import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
    <Suspense fallback={<p>Loading</p>}>
      <Overlay />
    </Suspense>

    <Suspense fallback={<p>Loading</p>}>
      <Transition />
    </Suspense>

      <Router>
        <ScrollToTop />
        <Suspense fallback={<p>Loading</p>}>
          <MenuSidebar />
        </Suspense>
        <Suspense fallback={<p>Loading</p>}>
          <Cart />
        </Suspense>
        <Nav />
        <Routes>
          <Route path='/'>
            <Route path='' element={<Home />} />
            <Route path='product/:productId' element={<Suspense fallback={<p>Loading</p>}><ProductPage /></Suspense>} />
          </Route>
        </Routes>
      </Router>
      <Suspense fallback={<p>Loading Footer</p>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
