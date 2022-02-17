import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import '../css/header.css'

export default function Header() {
  window.addEventListener('scroll', ()=>{
    const headerMin = document.getElementById("header");
    headerMin.classList.toggle('stycki',window.scrollY > 50)
  })
  return (
    <div>
      <div className="logo">
        <FontAwesomeIcon icon={faLeaf} className="fa-2xl" />
      </div>
      <header id="header" name="header">
        <nav>
          <a href="#desc">
            <li>Descripción</li>
          </a>
          <a href="#hab">
            <li>Habilidades</li>
          </a>
          <a href="#perfil">
            <li>Redes Sociales</li>
          </a>
        </nav>
        <a href="#perfil" className="perf">
          <li>Armando</li>
        </a>
      </header>
    </div>
  );
}
