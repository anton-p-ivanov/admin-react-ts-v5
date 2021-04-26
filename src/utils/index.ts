import className from './className';
import useClickOutside from './useClickOutside';

const Utils = {
  className,
  useClickOutside,
  formatDate: (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth().toString().padStart(2, '0');
    const dd = date.getDay().toString().padStart(2, '0');
    const hh = date.getHours().toString().padStart(2, '0');
    const ii = date.getMinutes().toString().padStart(2, '0');

    return `${yyyy}-${mm}-${dd}T${hh}:${ii}`;
  },
};

export default Utils;
