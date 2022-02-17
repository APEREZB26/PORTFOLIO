import '../css/habilities.css';
import {BsBootstrapFill} from 'react-icons/bs';
import {SiHtml5, SiCss3,SiReact,SiJavascript,SiTailwindcss} from 'react-icons/si'
export default function Habilities() {
  return (
    <div>
      <h1 className="title">Habilidades</h1>
      <div id="hab">
        <div>
        <BsBootstrapFill className='icon b'/>
          <p>Bootstrap</p>
        </div>
        <div>
          <SiHtml5 className='icon h'/>
          <p>Html5</p>
        </div>
        <div>
          <SiCss3 className='icon c'/>
          <p>Css3</p>
        </div>
        <div>
          <SiReact className='icon r'/>
          <p>React</p>
        </div>
        <div>
          <SiJavascript className='icon j'/>
          <p>Javascript</p>
        </div>
        <div>
          <SiTailwindcss className='icon t'/>
          <p>Tailwind-css</p>
        </div>
      </div>
    </div>
  );
}
