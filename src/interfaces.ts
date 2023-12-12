import { IModalFunctions } from "./components/Modal/Modal"

export type TTransferStatus = 'idle' | "loading" | "success" | "error"
export type TTheme = 'dark' | 'light'

export interface IPersonStatus {
	name: boolean
	dob: boolean
	country: boolean
}

export interface IPerson {
	transferStatus: TTransferStatus
	checkStatus: IPersonStatus
	info: {
		name: string
		dob: Date
		country: string
	}
}

export interface IPersonBE {
	fullName: string
	dob: Date
	country: string
	statuses: {fieldName: string, status: boolean}[]
}


export interface IAppState {
	theme: TTheme
	setTheme: (newTheme: TTheme) => void
	person: IPerson
	editPerson: (newPerson: Partial<IPerson>) => void
	modal: React.RefObject<IModalFunctions>
	setModal: (newModal: React.RefObject<IModalFunctions>) => void
	countries: string[]
}

