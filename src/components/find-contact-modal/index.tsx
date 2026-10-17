import { Modal, Input, Button, Form } from 'antd';
import { useMessengerContext } from '@context';
import { ChatsService } from '@services';
import { formatPhone, getErrorMessage } from '@helpers';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const FindContactModal = ({ isOpen, setIsOpen }: Props) => {
  const [form] = Form.useForm();
  const phone = Form.useWatch('phone', form);
  const { setChats, isLoading, setIsLoading } = useMessengerContext();

  const findContact = async () => {
    const { phone } = form.getFieldsValue();

    try {
      setIsLoading(true);
      const { data } = await ChatsService.getChatInfo('7' + phone);
      if (data) {
        setChats(prev => [...prev, data])
        setIsOpen(false);
      } else {
        form.setFields([{ name: 'phone', errors: ['Контакт не найден'] }])
      }
    } catch (e) {
      form.setFields([{ name: 'phone', errors: [getErrorMessage(e)] }])
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      className={styles.findContactModal}
      classNames={{ body: styles.findContactModalBody, container: styles.findContactModalContainer }}
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      centered
      closeIcon={null}
    >
      <div className={styles.findContactModalContent}>
        <p className={styles.title}>Найти по номеру</p>
        <Form onFinish={findContact} form={form}>
          <Form.Item
            name='phone'
            normalize={(value: string) => (value ?? '').replace(/\D/g, '').slice(0, 10)}
            getValueProps={(value?: string) => ({ value: formatPhone(value ?? '') })}
          >
            <Input
              className={styles.input}
              name='phone'
              placeholder='123 456 78 90'
              inputMode='numeric'
              prefix='+7'
              maxLength={13}
              onChange={e =>
                form.setFieldValue('phone', e.target.value.replace(/\D/g, ''))
              }
            />
          </Form.Item>
          <Button
            className={styles.button}
            htmlType='submit'
            disabled={(phone?.length ?? 0) < 10}
            loading={isLoading}
          >
            Найти
          </Button>
        </Form>
      </div>
    </Modal>
  );
};
