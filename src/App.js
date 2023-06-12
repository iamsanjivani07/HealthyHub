import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Activities from './Pages/Activities/activities';
import HealthSign from './Pages/HealthSign/healthsign';
import StatusData from './Pages/StatusData/statusdata';

import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
             <>     
             
      <BrowserRouter> 
      <NavBar />     
  <Home />  
      <Routes>        
          <Route path="/Home" exact component={Home} element={<Home />} />
          <Route path="/Activities" component={Activities} element={<Activities/>}/>
          <Route path="/HealthSign" component={HealthSign} element={<HealthSign/>}/>
          <Route path="/StatusData" component={StatusData} element={<StatusData/>}/>
        
        </Routes> 

<Footer />
      

      </BrowserRouter>
    </>
     
  );
}

export default App;
