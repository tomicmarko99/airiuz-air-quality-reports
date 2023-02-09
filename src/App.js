import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Station from "./routes/Station";
import JumpToTop from "./components/JumpToTop";
import Footer from "./components/Footer";
import PageLoading from "./components/PageLoading";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Rankings from "./pages/Rankings";

const App = () => {
  const hereUrl =
    "https://api.waqi.info/feed/here/?token=fe7f80903a47cd16d31da36d7bee8aa8d5eee45f";
  const [currentCity, setCurrentCity] = useState([]);
  useEffect(() => {
    Axios.get(hereUrl).then((response) => {
      setCurrentCity(response.data);
    });
  }, []);

  const woffUrl = "https://waqi.info/rtdata/ranking/index2.json";
  const [woff, setWoff] = useState([]);
  useEffect(() => {
    Axios.get(woffUrl).then((response) => {
      setWoff(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <PageLoading />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home currentCity={currentCity} woff={woff.cities} />}
        />
        <Route path="/city" element={<Station />}>
          <Route path=":cityName" element={<Station />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/rankings" element={<Rankings woff={woff.cities} />} />
      </Routes>
      <JumpToTop />
      <Footer />
    </>
  );
};

export default App;
