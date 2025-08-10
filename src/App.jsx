import "./App.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import ServicesPage from "./Components/ServicesPage";
import AboutPage from "./Components/AboutPage";
import StatsPage from "./Components/StatsPage";
import WorkPage from "./Components/WorkPage";
import ModulesPage from "./Components/ModulesPage";
import FeedbacksPage from "./Components/FeedbacksPage";
import FaqPages from "./Components/FaqPages";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <div id="services">
        <ServicesPage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="stats">
        <StatsPage />
      </div>
      <div style={{ paddingTop: "100px" }}></div>
      <div id="work">
        <WorkPage />
      </div>
      <div id="modules">
        <ModulesPage />
      </div>
      <div id="feedbacks">
        <FeedbacksPage />
      </div>
      <div style={{ paddingTop: "100px" }}></div>
      <div id="faqs">
        <FaqPages />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}

export default App;
