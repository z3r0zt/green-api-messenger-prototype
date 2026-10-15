import { Outlet } from 'react-router';

import styles from './styles.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Outlet />
    </div>
  );
};
