import { FC } from 'react'
import { User } from '@/utils/dataUtils';
import SidebarUserItem from './SidebarUserItem';

interface UserListProps {
    users: User[];
}

const SidebarUserList: FC<UserListProps> = ({ users }) => {
    return (
        <ul>
            {users?.map(user => (
                <SidebarUserItem key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default SidebarUserList;