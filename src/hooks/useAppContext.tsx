import { useContext } from "react";
import { AppContext } from '../providers/Context'
import { IAppState } from "../interfaces";


export const useAppContext = (): IAppState => {
    const state = useContext(AppContext)

    if (!state) {
        throw new Error('State is undefined in useAppContext')
    }

    return state
}