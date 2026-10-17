import { useMessengerContext } from '@context';
import { Avatar, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import type { IChatInfo } from '@services';

import styles from './styles.module.scss';

export const MessengerHeader = () => {
  const { selectedChat, setSelectedChat } = useMessengerContext();

  if (!selectedChat.chatId) return null;

  return (
    <div className={styles.messengerHeader}>
      <Button
        type='text'
        icon={<ArrowLeftOutlined className={styles.icon} />}
        onClick={() => setSelectedChat({} as IChatInfo)}
      />
      <div className={styles.chatInfo}>
        <Avatar className={styles.avatar} src={selectedChat.avatar} />
        <p>{selectedChat.name}</p>
      </div>
    </div >
  );
};
