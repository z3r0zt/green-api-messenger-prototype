import { MainLayout } from './layouts';
import { MainPage, MessangerPage } from './pages';
import { Route, Routes, BrowserRouter } from 'react-router';
import { ConfigProvider } from './providers/ConfigProvider';

import styles from './styles.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <ConfigProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />} />
              <Route path="/messanger" element={<MessangerPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </main>
  );
};

export default App;
