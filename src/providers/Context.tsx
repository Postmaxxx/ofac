import { createContext, useEffect, useState } from "react";
import { IAppState, IPerson, TTheme } from '../interfaces';;
export const AppContext = createContext<IAppState | undefined>(undefined)



export const Context = ({children}: {children: JSX.Element[] | JSX.Element}): JSX.Element => {

	useEffect(() => {
		loadCountries()
	}, [])


	const loadCountries = async () => { //get countries list from backend for autofilling
		try {
			const url = `${process.env.backend}/api/countries`
            const response: Response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                }
            })
			if (!response.ok) return
			const result = await response.json()
			setCountries(result.countries || [])
		} catch (error) {	
		}
	}

	
	const [countries, setCountries] = useState<string[]>([])
	const [modal, setModal] = useState<any>()
	const [theme, setTheme] = useState<TTheme>((localStorage.getItem('theme')) as TTheme || 'light')
	const [person, setPerson] = useState<IPerson>({
		transferStatus: 'idle',
		checkStatus: {dob: false, name: false, country: false},
		info: {name: '', dob: new Date(), country: ''}
	})

	
	const editPerson = (newData: Partial<IPerson>) => {
		setPerson(person => ({
			...person,
			...newData
		}))
	}

	const appState: IAppState = { theme, setTheme, person, editPerson, modal, setModal, countries }


	return (
		<AppContext.Provider value={appState}>
			{children}
		</AppContext.Provider>
	)

}



