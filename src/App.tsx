import { MainPage, MessengerPage } from '@pages';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router';
import { ConfigProvider } from '@providers';
import { MainContextProvider } from '@context';
import { ProtectedRoute } from '@routes';

import styles from './styles.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <ConfigProvider>
        <MainContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/messenger' element={<MessengerPage />} />
              </Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        </MainContextProvider>
      </ConfigProvider>
    </main>
  );
};

export default App;
