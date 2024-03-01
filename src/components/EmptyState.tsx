import { FC } from 'react'

const EmptyState: FC = () => {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center">
            <div className="text-center flex items-center flex-col">
                Select a chat or start a new conversation
            </div>
        </div>
    );
}

export default EmptyState;