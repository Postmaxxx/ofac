import { useRef } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { IInputFunctions, Input } from '../Input/Input'
import './checker.scss'
import { Message } from '../Message/Message'
import { IPersonBE } from 'src/interfaces'
import { Result } from '../Result/Result'



export const Checker = (): JSX.Element => {
	const { editPerson, person, modal, countries }  = useAppContext()
	const _name = useRef<IInputFunctions>(null)
	const _dob = useRef<IInputFunctions>(null)
	const _country = useRef<IInputFunctions>(null)
	

	const closeModal = () => {
		modal.current?.closeCurrent()
	}

	
	const onSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault()
		editPerson({transferStatus: 'loading'})

		//check all fields
		const errors = [_name, _dob, _country]
			.map(input => input.current?.getError())
			.filter(input => input !== null) as {errorText: string, name: string}[]


		if (errors.length > 0) {
			modal.current?.openModal({
				name: 'errorsInForm',
				onClose: closeModal,
				children: <Message
					onClose={closeModal}
					header='Errors in form'
					buttonText='Close'
					text={errors.map(err => (err.errorText))}
					/>
			})
			editPerson({transferStatus: 'idle'})
			return
		}

		const personToSend = {
			fullName: _name.current?.getValue() || '',
			dob: _dob.current?.getValue() || '',
			country: _country.current?.getValue() || '',
		}


		try {
			const url = `${process.env.backend}/api/person`
            const response: Response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
				body:  JSON.stringify(personToSend)
            })
			
			if (!response.ok) {
				const result: {message: string} = await response.json()
				modal.current?.openModal({
					onClose: closeModal,
					children: <Message 
						text={[result.message]}
						onClose={closeModal}
						header='Errors on server'
						buttonText='Close'
						/>
				})
				editPerson({transferStatus: 'idle'})
				return
			}

			const { person }: {person: IPersonBE} = await response.json()
			const hit: boolean = person.statuses.some(val => val.status)
			const result = hit ? 
				['Our screening process has identified a match against the OFAC Specially Designated Nationals (SDN) list based on the information provided. Please review the details below for a better understanding what kind of the information is compare']
					: 
				['Great news! According to our screening process, the information you provided does not match any entries on the OFAC Specially Designated Nationals (SDN) list. You are cleared and can proceed with confidence.'] 
			modal.current?.openModal({
				onClose: closeModal,
				children: <Message 
					header={`Check result: ${hit ? 'Hit!' : 'Clear'}`}
					buttonText='Close'
					text={result}
					onClose={closeModal}
					additionalData={<Result result={person.statuses} />}
					/>
			})
			editPerson({transferStatus: 'idle'})
		} catch (error) {
			modal.current?.openModal({
				onClose: closeModal,
				children: <Message 
					text={['Error on server.', error as string]} 
					onClose={closeModal}
					header='Error, please try again'
					buttonText='Close'/>
			})
			editPerson({transferStatus: 'idle'})
		}
	}


	return (
		<section className='check-form'>
			<div className="container">
				<div className="checker">
					<form className="form_check" onSubmit={(e) => onSubmit(e)}>
						<div className="form__header">
							<span>OFAC SDN Screening Form</span>
						</div>
						<div className="form__content-wrapper">
							<Input 
								ref={_name}
								labelText='Full name'
								id='name'
								name='Name'
								type='name'
								required={true}
								inputType='text'/>
							<Input 
								ref={_country}
								labelText='Country'
								id='country'
								name='Country'
								type='country'
								required={true}
								inputType='text'
								datalist={countries}/>
							<Input 
								ref={_dob}
								labelText='Date of birth'
								id='dob'
								name='Date of birth'
								type='date'
								inputType='date'
								required={true}/>
							
							<button className="button button_submit" disabled={person.transferStatus === 'loading'}>Check</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}