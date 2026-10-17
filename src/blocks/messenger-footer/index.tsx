import { Button, Form, Input } from 'antd';
import { useMessengerContext } from '@context';
import { ArrowUpOutlined } from '@ant-design/icons';
import { MessagesService } from '@services';
import { getErrorMessage } from '@helpers';

import styles from './styles.module.scss';

export const MessengerFooter = () => {
  const { selectedChat, setMessages } = useMessengerContext();
  const [form] = Form.useForm();
  const message = Form.useWatch('message', form) ?? '';

  if (!selectedChat.chatId) return null;

  const handleSendMessege = async ({ message }: { message: string }) => {
    if (!message.trim()) return;

    try {
      const { data } = await MessagesService.sendMessage(message, selectedChat.chatId);
      if (data) {
        setMessages(prev => [...prev, { id: data.idMessage, text: message, type: 'outcoming' }]);
      } else {
        form.setFields([{ name: 'message', errors: ['Не удалось отправить сообщение'] }])
      }
    } catch (e) {
      form.setFields([{ name: 'message', errors: [getErrorMessage(e)] }])
    }
    
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
