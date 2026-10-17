import { useState } from 'react';
import { Button } from 'antd';
import { useMessengerContext } from '@context';
import { FindContactModal } from '@components';
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
      <div>
        {chats.map(chat =>
          <div key={chat.chatId}>
            {chat.contactName}
          </div>
        )}
      </div>
    </div>
  );
};
