import { useEffect, useRef } from 'react';

export default function useOutsideClick(callback) {
  const refElement = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if(refElement.current && !refElement.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [refElement, callback]);

  return { refElement };
}
