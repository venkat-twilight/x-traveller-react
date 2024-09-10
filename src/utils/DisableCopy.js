// src/utils/useDisableCopy.js
import { useEffect } from 'react';

const useDisableCopy = () => {
  useEffect(() => {
    const handleCopy = (event) => {
      if (event.target.closest('.table-cell')) {
        event.preventDefault();
        alert('Copying from this table is disabled.');
      }
    };

    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === 'c' || event.key === 'a')
      ) {
        event.preventDefault();
        alert('Copying from this table is disabled.');
      }
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useDisableCopy;
