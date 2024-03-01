import { FC } from 'react'
import Link from 'next/link'
import { BellIcon, Bars3CenterLeftIcon, Squares2X2Icon } from '@heroicons/react/24/solid'

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggleDrawer }) => {
  return (
      <nav className="bg-white border-b border-gray-200 px-2.5 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleDrawer}
            >
              <Bars3CenterLeftIcon className="w-6 h-6" />
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link href="/" className="flex items-center justify-between mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ChatApp</span>
            </Link>
          </div>
          <div className="flex items-center lg:order-2">      
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-6 h-6" />
            </button>

            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              <Squares2X2Icon className="w-6 h-6" />
            </button>

            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;