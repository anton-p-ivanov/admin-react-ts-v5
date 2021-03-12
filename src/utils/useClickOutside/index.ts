import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TUseClickOutside = any;

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (initialState: boolean): TUseClickOutside => {
  const [isVisible, setIsVisible] = useState<boolean>(initialState);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const { current } = ref;

    if (current && !current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  });

  return [ref, isVisible, setIsVisible];
};

export default useClickOutside;
