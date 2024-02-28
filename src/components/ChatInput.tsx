
import { FC, useState } from 'react'

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (message.trim() === '') return;
        onSendMessage(message);
        setMessage('');
    };


    return (
        <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 bg-gray-50 dark:bg-gray-900 p-4 md:ml-80">
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Type your message</label>
            <div className="relative">
                <input type="search" id="search" value={message} onChange={handleMessageChange} className="block w-full p-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your message..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
            </div>
        </form>
    );
}

export default ChatInput;