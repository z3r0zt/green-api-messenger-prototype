import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { Spin } from 'antd';
import { useMainContext } from "../context/mainContext";

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

  if (!checked) return <Spin size="large" />

  return isAuthorized ? <Outlet /> : <Navigate to="/" replace />;
}