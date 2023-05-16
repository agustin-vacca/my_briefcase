import NavBar from "./components/NavBar/NavBar"; 
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Proyects from "./views/Proyects/Proyects";
import Skills from "./views/Skills/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
