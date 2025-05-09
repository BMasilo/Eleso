import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {faInstagram, faWhatsapp, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
	return (
        <div className="head-section">
            <div><FontAwesomeIcon className='icn' icon={faEnvelope}/>eleso@gmail.com</div>
            <div>
            <FontAwesomeIcon className='icn' icon={faXTwitter}/>
            <FontAwesomeIcon className='icn' icon={faInstagram} />
            <FontAwesomeIcon className='icn' icon={faYoutube} style={{color:"#ff0000",}} />
            <FontAwesomeIcon className='icn' icon={faWhatsapp} style={{color:"#25d366",}} />
            </div>
        </div>
	)
}

export default Social;