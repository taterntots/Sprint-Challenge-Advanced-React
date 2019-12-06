import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useLightMode = () => {
    const [lightMode, setLightMode] = useLocalStorage('light-mode', false);

    useEffect(() => {
        if (lightMode === true) {
            document.body.classList.add('light-mode');
        }else{
            document.body.classList.remove('light-mode');
        }
    }, [lightMode])

    return [lightMode, setLightMode]
}

export default useLightMode;