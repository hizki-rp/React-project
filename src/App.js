import './App.css';   

import NavBar from './Components/NavBar';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
     
      <>
         
         <NavBar/>
         <Header/>
         <About/>
         <Skills/>
         <Projects/>
         <Contacts/>
         <Footer/>
         
      </>
          
  );
}

export default App;
