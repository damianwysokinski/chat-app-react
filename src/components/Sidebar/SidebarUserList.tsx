import { FC } from 'react';
import { Chatroom } from '@/utils/dataUtils';
import SidebarUserItem from './SidebarUserItem';

interface UserListProps {
  users: Chatroom[];
}

const SidebarUserList: FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users?.map((user, index) => <SidebarUserItem key={index} user={user} />)}
    </ul>
  );
};

export default SidebarUserList;
