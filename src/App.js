import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HistoryPage from "./presentation/HistoryPage/pages/HistoryPage";
import HomePage from "./presentation/HomePage/pages/HomePage";
import LandingPage from "./presentation/LandingPage/pages/LandingPage";
import PlanPage from "./presentation/PlanPage/pages/PlanPage";
import UserPage from "./presentation/UserPage/pages/UserPage";
// import PageNotFound from "./presentation/_AuthenticatedLayout/pages/PageNotFound/PageNotFound";

import { GlobalProvider } from "./contexts/GlobalContext";
import Header from "./common/components/Header/Header";
import Footer from "./common/components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="*" element={<PageNotFound />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LandingPage />} />
            <Route path="/register" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/plans" element={<PlanPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
};

export default App;
