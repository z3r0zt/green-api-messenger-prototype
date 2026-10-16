import { MainLayout } from './layouts';
import { MainPage, MessengerPage } from './pages';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router';
import { ConfigProvider } from './providers/ConfigProvider';
import { MainContextProvider } from './context/mainContext';
import { ProtectedRoute } from './routes/protectedRoute';

import styles from './styles.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <ConfigProvider>
        <MainContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<MainPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/messenger" element={<MessengerPage />} />
                </Route>
              </Route>
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </MainContextProvider>
      </ConfigProvider>
    </main>
  );
};

export default App;
