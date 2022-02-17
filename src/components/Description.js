import program from "../assets/program.svg";
import student from "../assets/student.svg";
import "../css/description.css";
export default function Description() {

  return (
    <section>
      <h1>Descripción</h1>
      <div id="desc">
        <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={program} />
            <p>
            Soy un chico de 19 años , cursando la carrera de Ingeniería de
            Sistemas actualmente en el 5to ciclo dentro de la Universidad Autónoma de Perú.
            <br />
            ¡Un gusto de Presentarme!
          </p>
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={student} />
          <p>
            Practico progamando y maquetando paginas web desde los 15 años pero
            de manera laboral desde los 18 años, enfocandose en el diseño y
            experiencia atractiva para el usuario.
          </p>
        </div>
      </div>
    </section>
  );
}
