import type { Message } from '@context';

import styles from './styles.module.scss';

export const MessageItem = ({ message }: { message: Message }) => {
  return (
    <div className={styles.messageItem}>
      <div className={`${styles.messageContainer} ${message.type === 'outcoming' ? styles.messageContainerOutcoming : ''}`}>
        <p>
          {message.text}
        </p>
      </div>
    </div>
  );
};
