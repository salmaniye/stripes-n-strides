import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HistoryPageView from "./presentation/HistoryPage/pages/HistoryPageView";
import HomePageView from "./presentation/HomePage/pages/HomePageView";
import LandingPage from "./presentation/LandingPage/pages/LandingPage";
import PlanPage from "./presentation/PlanPage/pages/PlanPage";
import UserPage from "./presentation/UserPage/pages/UserPage";
import PageNotFound from "./common/components/PageNotFound/PageNotFoundView";

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
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LandingPage />} />
            <Route path="/register" element={<LandingPage />} />
            <Route path="/home" element={<HomePageView />} />
            <Route path="/plans" element={<PlanPage />} />
            <Route path="/history" element={<HistoryPageView />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
};

export default App;
