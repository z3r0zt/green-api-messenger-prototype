import { Avatar } from 'antd';
import type { IChatInfo } from '@services';
import { useMessengerContext } from '@context';

import styles from './styles.module.scss';

export const ChatItem = ({ chat }: { chat: IChatInfo }) => {
  const { setSelectedChat } = useMessengerContext();

  return (
    <div
      className={styles.chatItem}
      onClick={() => setSelectedChat(chat)}
    >
      <Avatar src={chat.avatar} />
      <p className={styles.name}>
        {chat.name}
      </p>
    </div>
  );
};
