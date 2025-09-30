import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage.jsx';
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const SignupPage = lazy(() => import('./pages/SignupPage.jsx'));

// Lazy-loaded sections
const Hero = lazy(() => import('./components/Hero'));
const CategoryBanners = lazy(() => import('./components/CategoryBanners'));
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<div className="container py-5 text-center">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <>
                    <Hero />
                    <CategoryBanners />
                    <About />
                    <ProductGrid />
                    <CallToAction />
                    <Testimonials />
                    <Contact />
                    <Newsletter />
                  </>
                </ErrorBoundary>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Suspense>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
