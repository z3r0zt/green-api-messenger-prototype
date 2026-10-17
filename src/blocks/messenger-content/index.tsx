import { MessageItem } from '@components';
import { useMessengerContext } from '@context';

import styles from './styles.module.scss';

export const MessengerContent = () => {
  const { selectedChat, messages } = useMessengerContext();

  if (!selectedChat.chatId) return null;

  return (
    <div className={styles.messengerContent}>
      <div className={styles.messages}>
        {messages.map(message =>
          <MessageItem message={message} />
        )}
      </div>
    </div>
  );
};
