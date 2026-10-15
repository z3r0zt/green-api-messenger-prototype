import { ConfigProvider as AntdConfigProvider } from 'antd';

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdConfigProvider
      theme={{
        components: {
          Card: {
            colorBgContainer: 'var(--background-primary)',
            borderRadiusLG: 28,
          },
          Input: {
            colorBgContainer: 'var(--background-secondary)',
            colorText: '#FFF',
            colorTextPlaceholder: 'var(--text-muted)',
          },
          Button: {
            colorBgContainerDisabled: 'var(--button-disabled-bg)',
            colorTextDisabled: 'var(--button-disabled-text-color)',
          }
        }
      }}
    >
      {children}
    </AntdConfigProvider>
  )
}