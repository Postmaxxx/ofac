import { memo, useEffect, useRef } from 'react';
import './assets/css/base.scss'
import { Checker } from './components/Checker/Checker';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Modal, { IModalFunctions } from "./components/Modal/Modal";
import { useAppContext } from './hooks/useAppContext';
import { Disclaimer } from './components/Disclaimer/Disclaimer';
import './app.scss'
const ModalMemo = memo(Modal)


function App() {
	const { setModal }  = useAppContext()

	const _modal = useRef<IModalFunctions>(null)


	useEffect(() => {
		if (_modal.current) {
			setModal(_modal)	
		}
	}, [_modal.current])



	return (
		<div className="app">
			<Header />
			<div className="content_main">
				<Disclaimer />
				<Checker />
			</div>
			<Footer />
			<ModalMemo ref={_modal}></ModalMemo>
		</div>
	);
}

export default App;
