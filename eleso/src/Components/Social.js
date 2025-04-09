import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {faInstagram, faWhatsapp, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
	return (
        <div className="head-section">
            <div><FontAwesomeIcon icon={faEnvelope}/>eleso@gmail.com</div>
            <div>
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faWhatsapp} />
            </div>
        </div>
	)
}

export default Social;