import { Form, Input } from 'antd';
import { useMessengerContext } from '@context';

import styles from './styles.module.scss';

export const MessengerFooter = () => {
  const { selectedChat } = useMessengerContext();
  const [form] = Form.useForm();

  if (!selectedChat.chatId) return null;

  const handleSendMessege = ({ messege }: { messege: string }) => {
    console.log(messege);
    form.resetFields();
  }

  return (
    <div className={styles.messengerFooter}>
      <Form form={form} onFinish={handleSendMessege}>
        <Form.Item name='messege'>
          <Input
            name='messege'
            className={styles.input}
            placeholder='Сообщение'
            onPressEnter={() => form.submit()}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
