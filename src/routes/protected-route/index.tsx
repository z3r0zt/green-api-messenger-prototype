import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useMainContext } from '@context';
import { Spinner } from '@components';

export const ProtectedRoute = () => {
  const { checkAccount, isAuthorized } = useMainContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isAuthorized) {
      setChecked(true);
      return;
    }
    checkAccount().finally(() => setChecked(true));
  }, []);

  if (!checked) return <Spinner fontSize={75} />

  return isAuthorized ? <Outlet /> : <Navigate to='/' replace />;
}