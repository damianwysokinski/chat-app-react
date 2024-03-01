import { FC } from 'react';
import Link from 'next/link';
import {
  BellIcon,
  Bars3CenterLeftIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggleDrawer }) => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-2.5 py-2.5 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
            onClick={toggleDrawer}
          >
            <Bars3CenterLeftIcon className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <Link href="/" className="mr-4 flex items-center justify-between">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              ChatApp
            </span>
          </Link>
        </div>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            data-dropdown-toggle="apps-dropdown"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            <Squares2X2Icon className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:mr-0 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <span className="absolute left-6 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
