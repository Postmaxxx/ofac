import './svgs.scss'

const svgs = (addClass? : string) => {
    return {
        iconPlus: <svg className={`svg icon_plus ${addClass}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                <path d="M990,500c0,56.3-45.6,101.9-101.9,101.9H601.9v286.2c0,56.3-45.6,101.9-101.9,101.9c-56.3,0-101.9-45.6-101.9-101.9V601.9H111.9C55.6,601.9,10,556.3,10,500c0-56.3,45.6-101.9,101.9-101.9h286.2V111.9C398.1,55.6,443.7,10,500,10c56.3,0,101.9,45.6,101.9,101.9v286.2h286.2C944.4,398.1,990,443.7,990,500z"/>
            </svg>,
        iconMinus: <svg className={`svg icon_minus ${addClass}`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                <path d="M867.5,377.5h-735C64.9,377.5,10,432.4,10,500s54.9,122.5,122.5,122.5h735c67.6,0,122.5-54.9,122.5-122.5S935.1,377.5,867.5,377.5z"/>
            </svg>,
        iconPro: <svg className={`svg icon_pro ${addClass}`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 452 452">
                <path d="M26.636 280.832l51.12-51.090 102.225 102.282-51.12 51.091-102.225-102.282z" />
                <path d="M179.996 331.976l254.25-254.25 51.12 51.12-254.25 254.25-51.12-51.12z" />
                <path d="M180.006 434.245l-51.141-51.141 51.12-51.12 51.141 51.141-51.119 51.12z" />
            </svg>,
        iconCon: <svg className={`svg icon_con ${addClass}`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 180 180">
                <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047 c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077 L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802 c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077 l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"/>
            </svg>,
        iconClose: <svg className={`svg icon_close ${addClass}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" stroke="#979797" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" strokeWidth="2"/>
                <path d="M9 9L24 24"  strokeWidth="2" strokeLinecap="square"/>
                <path d="M8.49512 23.4586L24.5049 9.54144"  strokeWidth="2" strokeLinecap="square"/>
            </svg>,
        iconExclamation: <svg className={`svg icon_exclamation ${addClass}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_167)">
                <path fillRule="evenodd" clipRule="evenodd" d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM13 14.3C12.285 14.3 11.7 13.715 11.7 13V7.8C11.7 7.085 12.285 6.5 13 6.5C13.715 6.5 14.3 7.085 14.3 7.8V13C14.3 13.715 13.715 14.3 13 14.3ZM14.3 19.5H11.7V16.9H14.3V19.5Z" fill="#D50404"/>
            </g>
            <defs>
                <clipPath id="clip0_2_167">
                    <rect width="26" height="26" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    }
}

export default svgs