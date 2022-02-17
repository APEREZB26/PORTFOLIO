import "./App.css";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Habilities from "./components/Habilities";
import Description from "./components/Description";
import Footer from "./components/Footer";
import animations from "./animations/animations";

function App() {

  window.addEventListener("scroll",function(){
    animations();
  })

  return (
    <div className="App">

      {/* HEADER */}
      <Header/>

      {/* PERFIL */}

      <Perfil/>
      {/* DESCRIPCION */}

      <Description/>

      {/* HABILITIES */}

      <Habilities/>
      
      {/* FOOTER */}

      <Footer/>
    </div>
  );
}

export default App;
