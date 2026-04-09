import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion} from "framer-motion";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import RouteProgress from "./Components/RouteProgress";
import { Suspense, lazy } from "react";



const Home = lazy(() => import("./Pages/Home"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage"));
const TrainingPage = lazy(() => import("./Pages/TrainingPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function PageWrapper({ children }) {
  return (
    <Motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <RouteProgress />
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper>
                  <ServicesPage />
                </PageWrapper>
              }
            />
            <Route
              path="/training"
              element={
                <PageWrapper>
                  <TrainingPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <ContactPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
