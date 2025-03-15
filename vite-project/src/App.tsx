import "./App.css"

import {Route, Routes} from 'react-router-dom'

import Contact from "./Pages/Contact";
import Essence from './Pages/Essence';
import Footer from "./Components/Footer"
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Pinnacles from './Pages/Pinnacles'
import StoryPage from "./Pages/StoryPage";

const App: React.FC = () =>{
  return (
    <div className = "App">
      <Navbar/>
      <div className = 'Routers'>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Pages/Essence.tsx" element = {<Essence />} />
          <Route path = "/Pages/Pinnacles.tsx" element = {<Pinnacles />} />
          <Route path = "/Pages/Contact.tsx" element = {<Contact />} />
          <Route path = "/Pages/StoryPage.tsx" element = {<StoryPage />} />
        </Routes>
      </div>
      <Footer />
    </ div>
  );
}

export default App;