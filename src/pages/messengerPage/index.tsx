import { Layout } from 'antd';
import { MessengerSider, MessengerContent, MessengerHeader, MessengerFooter } from '@blocks';
import { MessengerContextProvider } from '@context';

import styles from './styles.module.scss';

const { Sider, Header, Content, Footer } = Layout;

export const MessengerPage = () => {
  return (
    <section className={styles.messengerPage}>
      <MessengerContextProvider>
        <Layout className={styles.layout}>
          <Sider className={styles.sider}>
            <MessengerSider />
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <MessengerHeader />
            </Header>
            <Content>
              <MessengerContent />
            </Content>
            <Footer>
              <MessengerFooter />
            </Footer>
          </Layout>
        </Layout>
      </MessengerContextProvider>
    </section>
  );
};
