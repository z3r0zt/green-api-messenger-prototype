import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, Input, Form, Button } from 'antd';
import AccountService from '../../services/account';
import { useMainContext } from '../../context/mainContext';
import { cookies } from '../../helpers';

import styles from './style.module.scss';

export const MainPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setCookie } = cookies;
  const { setIsAuthorized } = useMainContext();

  const idInstance = import.meta.env.VITE_ID_INSTANCE;
  const apiTokenInstance = import.meta.env.VITE_API_TOKEN_INSTANCE;

  const login = async () => {
    const { idInstance, apiTokenInstance } = form.getFieldsValue();
    setIsLoading(true);
    try {
      const { data } = await AccountService.getAccountInfo(idInstance, apiTokenInstance);
      if (data.stateInstance === "authorized") {
        setCookie('idInstance', idInstance);
        setCookie('apiTokenInstance', apiTokenInstance);
        setIsAuthorized(true);
        navigate('/messenger');
      } else {
        setError("Инстанс не авторизован");
      }
    } catch (error) {
      setError("Неверный ID Instance или API Token Instance");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.mainPage}>
      {idInstance &&
        <p>
          {idInstance}
        </p>
      }
      {apiTokenInstance &&
        <p>
          {apiTokenInstance}
        </p>
      }
      <Card classNames={{ body: styles.card }} rootClassName={styles.cardRoot}>
        <p className={styles.title}>Авторизуйтесь</p>
        {error &&
          <p className={styles.error}>
            {error}
          </p>
        }
        <Form className={styles.form} onFinish={login} form={form}>
          <Form.Item name="idInstance">
            <Input
              className={styles.input}
              name="idInstance"
              placeholder="ID Instance"
            />
          </Form.Item>
          <Form.Item name="apiTokenInstance">
            <Input
              className={styles.input}
              type="password"
              name="apiTokenInstance"
              placeholder="API Token Instance"
            />
          </Form.Item>
          <Button
            className={styles.button}
            type="primary"
            htmlType="submit"
            disabled={isLoading}
          >
            Войти
          </Button>
        </Form>
      </Card>
    </section>
  );
};
