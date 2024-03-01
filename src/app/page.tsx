import { FC } from 'react';

import ChatLayout from '@/components/ChatLayout';
import EmptyState from '@/components/EmptyState';

const HomePage: FC = () => {
  return (
    <>
      <ChatLayout>
        <EmptyState />
      </ChatLayout>
    </>
  );
};

export default HomePage;
