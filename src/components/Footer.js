import '../css/footer.css';
import {SiGithub,SiFiverr,SiGmail} from 'react-icons/si'
export default function Footer(){
    return(
        <div className='footer'>
            <ul>
                <a href="https://github.com/APEREZB26"><li><SiGithub className='icons g'/>GitHub</li></a>
                <a href="https://es.fiverr.com/armandoperez813?public_mode=true"><li><SiFiverr className='icons f'/>Fiverr</li></a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><li><SiGmail className='icons gm'/>Gmail - a.d.p.belaonia@gmail.com<br/></li></a>
            </ul>
            
        </div>
    )
}