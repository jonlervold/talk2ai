import { useState } from 'react';

const useOptionsVisibility = () => {
  const [showOptionDescriptions, setShowOptionDescriptions] = useState(false);
  const handleShowOptionDescriptions = () => {
    setShowOptionDescriptions(!showOptionDescriptions);
  };
  const [showOptions, setShowOptions] = useState('options-hidden');
  const handleShowOptions = () => {
    if (showOptions === 'options-hidden') {
      setShowOptions('options-visible');
    } else setShowOptions('options-hidden');
  };

  return {
    showOptions,
    handleShowOptions,
    showOptionDescriptions,
    handleShowOptionDescriptions,
  };
};

export default useOptionsVisibility;
