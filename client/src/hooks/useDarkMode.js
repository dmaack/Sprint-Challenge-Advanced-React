import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = () => {
    const [darkmode, setDarkMode] = useLocalStorage('dark', false);

    useEffect(() => {

        const dark = document.querySelector('body');
        darkmode === true ? dark.classList.add('dark-mode') : dark.classList.remove('dark-mode')
    }, [darkmode]) //effect dependency

    return [darkmode, setDarkMode]
}