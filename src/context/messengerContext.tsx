import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react';
import type { ChatInfoResponse, IChatInfo } from '../services/chats';

export type Message = {
  id: string;
  text: string;
  type: 'incoming' | 'outcoming';
}

type MessengerContextValues = {
  chats: ChatInfoResponse;
  setChats: Dispatch<SetStateAction<ChatInfoResponse>>
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  selectedChat: IChatInfo;
  setSelectedChat: Dispatch<SetStateAction<IChatInfo>>;
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

const MessengerContext = createContext<MessengerContextValues | null>(null);

export const MessengerContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<ChatInfoResponse>([]);
  const [selectedChat, setSelectedChat] = useState<IChatInfo>({} as IChatInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  return <MessengerContext.Provider
    value={{
      chats,
      setChats,
      isLoading,
      setIsLoading,
      selectedChat,
      setSelectedChat,
      messages,
      setMessages
    }}>
    {children}
  </MessengerContext.Provider>
}

export const useMessengerContext = () => {
  const context = useContext(MessengerContext);

  if (!context) {
    throw new Error('useMessengerContext must be used inside MessengerContextProvider');
  }

  return context;
}
