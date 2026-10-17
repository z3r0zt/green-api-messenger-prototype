import { Button, Form, Input } from 'antd';
import { useMessengerContext } from '@context';
import { ArrowUpOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

export const MessengerFooter = () => {
  const { selectedChat, setMessages } = useMessengerContext();
  const [form] = Form.useForm();
  const message = Form.useWatch('message', form) ?? '';

  if (!selectedChat.chatId) return null;

  const handleSendMessege = ({ message }: { message: string }) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { id: '1', text: message, type: 'outcoming' }]);
    console.log(message)
    form.setFieldValue('message', '');
  }

  return (
    <div className={styles.messengerFooter}>
      <Form form={form} onFinish={handleSendMessege}>
        <Form.Item name='message'>
          <Input
            name='message'
            className={styles.input}
            placeholder='Сообщение'
            onPressEnter={() => form.submit()}
            suffix={
              <Button
                className={styles.inputButton}
                onClick={() => form.submit()}
                icon={<ArrowUpOutlined />}
                disabled={!message.trim()}
              />
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};
