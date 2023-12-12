import { inputChecker } from "../../assets/js/processors"; 
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import './input.scss'
import svgs from '../additions/svgs'

interface IInput {
	labelText: string
	name: string
	type: "name" | "country" | "date"
	id: string
	inputType?: 'text' | 'date'
	required?: boolean
	datalist?: string[]
}

export interface IInputFunctions {
    getValue: () => string | undefined
    setValue: (value: string) => void
    getError: () => {
		errorText: string
		name: string
	} | null
}

export const Input = forwardRef<IInputFunctions, IInput>(({labelText, datalist, name, id, inputType="text", required, type }, ref) => {
    useImperativeHandle(ref, () => ({
        getValue() {
            return _input.current?.value 
        },
		setValue(value) {
			_input.current && (_input.current.value = value);
        },
		getError() {
			if (!_input.current) return {name: 'System Error', errorText: 'Error while checking errors. Please, contact us'}
			let errorText : string | null = checkOnErrors(_input?.current?.value)
			if (errorText === null) return null
			return {errorText, name}
		},
    }));

	const [error, setError] = useState<string | null>(null)
	const _input = useRef<HTMLInputElement | null>(null)


    const onChangeText: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e): void => {
		setError(null)
    }

	const checkOnErrors = (value: string): string | null => {
		const errText = inputChecker({value, type})
		setError(errText)
		return errText
	}


    const onBlurInput: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e): void => {
		checkOnErrors(e.target.value)
    }

	const onKeyPressed = (e: React.KeyboardEvent) => {
		if (e.code === 'Enter') {
			e.preventDefault()
		}
	}

	return (
		<div className={`block_input ${error ? "incorrect-value" : ""}`} data-selector="input-block">
			<label htmlFor={id}>{labelText}{required && <span aria-label="required field"> *</span>}</label>
			<div className="input-wrapper">
				<input 
					ref={_input}
					data-selector="input"
					aria-describedby={`${id}_error`}
					className="input-element" 
					id={id} 
					type={inputType} 
					onChange={onChangeText}
					onBlur={onBlurInput} 
					list={`${id}-datalist`}
					onKeyPress={onKeyPressed}
					/>
				{datalist && datalist.length > 0 && 
					<datalist id={`${id}-datalist`}>
						{datalist.map(item => (<option key={item} value={item} />))}
					</datalist>}
				{svgs(error ? 'show' : '').iconExclamation}
			</div>
			{error && <span id={`${id}_error`} aria-description='Error text' data-content="errorText">{`${error}`}</span>}	
		</div>
	)
})
