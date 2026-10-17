import { useState } from 'react';
import { Button } from 'antd';
import { useMessengerContext } from '@context';
import { FindContactModal, ChatItem } from '@components';
import { PlusOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

export const MessengerSider = () => {
  const { chats } = useMessengerContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.messengerSider}>
      <FindContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className={styles.siderTop}>
        <p>Чаты</p>
        <Button
          className={styles.findButton}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined />
        </Button>
      </div>
      <div className={styles.chats}>
        {chats.map(chat =>
          <ChatItem key={chat.chatId} chat={chat} />
        )}
      </div>
    </div>
  );
};
