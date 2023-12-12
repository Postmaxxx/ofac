import { useState } from 'react'
import './disclaimer.scss'


//information about privacy
export const Disclaimer = (): JSX.Element => {

	const [show, setShow] = useState<boolean>(false) //show privacy info or not

	const onPrivacyClick = (): void => {
		setShow(show => !show)
	}

	return (
		<section className="disclaimer">
				<div className="container">
				<p className='disclaimer__text'>Dear User, <br/><br/>
				Thank you for using our OFAC SDN Screening Form. This form is designed to ensure compliance with regulatory requirements by screening individuals against the publicly available OFAC Specially Designated Nationals (SDN) list. The screening helps us maintain a secure environment and adhere to legal obligations related to financial and business transactions.</p>
				<div className={`disclaimer__privacy${show ? ' show' : ''}`}>
					<button className='button_transparent button__privacy' onClick={onPrivacyClick} aria-label='Click to open or close Privacy and Security information'>Your Privacy and Security</button>
					<div className='privacy__text-wrapper'>
						<div>
							<p className='privacy__text'>We understand the sensitivity of the information you provide, and we want to assure you that the security of your data is our top priority. All information submitted through this form is encrypted and securely processed. We employ industry-standard security measures to safeguard your personal details, and we strictly adhere to privacy regulations to ensure the confidentiality and integrity of your data.
							<br />Your trust is important to us, and we are committed to maintaining the highest standards of data protection throughout the screening process. If you have any concerns or questions regarding the security of your information, please feel free to reach out to our support team.
							<br />Thank you for your cooperation.</p>
						</div>
					</div>
				</div>
		</div>
			</section>
	)
}