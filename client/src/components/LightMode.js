import React from 'react';
import useLightMode from '../hooks/useLightMode';

const LightMode = () => {
  const [lightMode, setLightMode] = useLightMode('light-mode', false);
  const toggleMode = event => {
    event.preventDefault();
    setLightMode(!lightMode);
  }

  return (
    <div className="light-mode__toggle">
        <div onClick={toggleMode} className={lightMode ? 'toggle toggled' : 'toggle'} />
    </div>
  )
}

export default LightMode;