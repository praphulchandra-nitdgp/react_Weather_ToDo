
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return(
        <>
    <footer class="footer">
        <div className='follow'>
            
              <div id='social'>
                  <a href='https://www.facebook.com/manichandra.ganapathri?mibextid=ZbWKwL'><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href='https://www.instagram.com/praphul_chandra_370?igsh=d21yN2psb2FzeTh0'><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href='#\https://twitter.com/i/flow/login?redirect_after_login=%2Faarohan_nitdgp'><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
        </div>
        <div class="rights">
            <h4 class="text-white">
              @designed by G.Praphul Chandra
            </h4>
        </div>
    </footer>
        </>
    );
    
};
export default Footer;