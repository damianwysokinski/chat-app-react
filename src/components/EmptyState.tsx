import { FC } from 'react';

const EmptyState: FC = () => {
  return (
    <div className="flex h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        Select a chat or start a new conversation
      </div>
    </div>
  );
};

export default EmptyState;
