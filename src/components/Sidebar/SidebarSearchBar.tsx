import { FC } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SidebarSearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarSearchBar: FC<SidebarSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <form action="#" method="GET" className="mb-2">
      <label htmlFor="sidebar-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          name="search"
          id="sidebar-search"
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SidebarSearchBar;
