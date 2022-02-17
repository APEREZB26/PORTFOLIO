import perfil from '../assets/perfil.jpg'
import '../css/perfil.css'

export default function Perfil() {
  return (
    <div id="perfil">
      <div className="text">
        <p>
          <span>Diseñador y Maquetador Web</span>
        </p>
        <h3>¡Bienvenido a Mi portafolio!</h3>
        <small>By Armando Pérez</small>
      </div>
      <div className="image">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={perfil} />
      </div>
    </div>
  );
}
