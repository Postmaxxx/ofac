import { IModalFunctions } from "./components/Modal/Modal"

export type TTransferStatus = 'idle' | "loading" //status for person checking
export type TTheme = 'dark' | 'light' //app theme

export interface IPersonStatus { //status of fields of a person, true - in OFAC (hit), false - clear
	name: boolean
	dob: boolean //date of birth
	country: boolean
}

export interface IPerson { 
	transferStatus: TTransferStatus
	checkStatus: IPersonStatus
	info: { //entered info about person
		name: string
		dob: Date
		country: string
	}
}

export interface IPersonBE { //data got from backend about the person
	fullName: string
	dob: Date
	country: string
	statuses: {fieldName: string, status: boolean}[]
}


export interface IAppState { //all the state of the app
	theme: TTheme
	setTheme: (newTheme: TTheme) => void
	person: IPerson
	editPerson: (newPerson: Partial<IPerson>) => void
	modal: React.RefObject<IModalFunctions> //access to modal window
	setModal: (newModal: React.RefObject<IModalFunctions>) => void //set new modal window
	countries: string[] //list of countries for auto-filling
}

