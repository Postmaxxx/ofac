import './message.scss'


interface IMessage {
	text: string[] //text for message
	onClose: () => void //action for close button
	header: string //header text
	buttonText: string //text for button (Close, OK, ...)
	additionalData?: JSX.Element //additional children for more data to show
}


//message, used in modal window. Universal for different types of message
export const Message = ({text, header, buttonText, additionalData, onClose}: IMessage): JSX.Element => {
	return (
		<div className="container">
			<div className="message">
				<div className="message__header">
					<span className='message__header__text'>{header}</span>
				</div>
				<div className="message__content">
					{text.map(item => (<p key={item}>{item}</p>))}
					{additionalData}
					<button className='button button_message_close' onClick={onClose}>{buttonText}</button>
				</div>
			</div>
		</div>
	)
}