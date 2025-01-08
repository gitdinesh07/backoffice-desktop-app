import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ProjectPage from "./Pages/ProjectPage";
// import MEPServicePage from "./Pages/MEPServicePage";
// import EngineeringDesign from "./Pages/EngineeringDesign";
import BIMServices from "./Pages/BIMServices";
import ElectricPage from "./Pages/MEPServices/ElectricPage";
import HVACPage from "./Pages/MEPServices/HVACPage";
import PlumbingPage from "./Pages/MEPServices/PlumbingPage";
import FireFightingPage from "./Pages/MEPServices/FireFightingPage";
import SolutionPage from "./Pages/BIMServices/SolutionPage";
import ManpowerPage from "./Pages/BIMServices/ManpowerPage";
import TrainingPage from "./Pages/BIMServices/TrainingPage";
import ELearingPage from "./Pages/BIMServices/E-LearingPage";
import CadToRevitPage from "./Pages/BIMServices/CadToRevitPage";
import RevitPlugins from "./Pages/BIMServices/RevitPlugins";
// import PrivateRoute from "./Utils/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/bim-services" element={<BIMServices />} />
        <Route path="/mep/electrical" element={<ElectricPage />} />
        <Route path="/mep/hvac" element={<HVACPage />} />
        <Route path="/mep/fire-fighting" element={<FireFightingPage />} />
        <Route path="/mep/plumbing" element={<PlumbingPage />} />
        <Route path="/bim/solution" element={<SolutionPage />} />
        <Route path="/bim/manpower" element={<ManpowerPage />} />
        <Route path="/bim/training" element={<TrainingPage />} />
        <Route path="/bim/e-learning" element={<ELearingPage />} />
        <Route path="/bim/cad-to-revit" element={<CadToRevitPage />} />
        <Route path="/bim/revit-plugins" element={<RevitPlugins />} />
        {/* <Route path="/" element={<PrivateRoute />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
