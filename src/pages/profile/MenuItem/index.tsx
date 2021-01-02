import clsx from 'clsx';
import { Icon } from '@mdi/react';

type MenuItemProps = {
  active: boolean;
  icon: string;
  label: string;

  onClick(): void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  active,
  icon,
  label,
  onClick,
}) => (
  <li
    className={clsx(
      `mb-2 font-semibold text-gray-300 transition duration-300 ease-in-out hover:bg-gray-700 border-l-2`,
      active ? `border-gray-300` : `border-transparent`,
    )}
  >
    <button
      type="button"
      onClick={onClick}
      className="w-full py-2 pl-8 transition duration-500 ease-in-out focus:outline-none"
    >
      <span className="flex items-center">
        <Icon className="w-4 h-4" size={1} path={icon} />
        <span className="ml-4 capitalize">{label}</span>
      </span>
    </button>
  </li>
);

export default MenuItem;
