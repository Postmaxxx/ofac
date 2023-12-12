import './message.scss'


interface IMessage {
	text: string[]
	onClose: () => void
	header: string
	buttonText: string
	additionalData?: JSX.Element
}

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