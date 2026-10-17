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
            colorBorder: 'transparent',
            hoverBorderColor: 'transparent',
            activeBorderColor: 'transparent',
            activeShadow: 'none',
            borderRadius: 20,
            fontSize: 17
          },
          Button: {
            defaultBg: 'var(--button-color)',
            defaultHoverBg: 'var(--button-color)',
            defaultHoverColor: 'var(--text-white)',
            defaultColor: 'var(--text-white)',
            defaultActiveColor: 'var(--text-white)',
            defaultActiveBg: 'var(--button-color)',
            defaultBgDisabled: 'var(--background-secondary)',
            colorTextDisabled: 'var(--text-muted)',
            defaultBorderColor: 'transparrent',
            defaultHoverBorderColor: 'transparent',
            defaultActiveBorderColor: 'transparent',
            motionDurationMid: '0s',
            fontSize: 17,
          },
          Layout: {
            bodyBg: 'transparrent',
            siderBg: 'var(--background-primary)',
            headerBg: 'var(--background-primary)',
            footerBg: 'transparrent'
          },
          Modal: {
            contentBg: 'var(--background-primary)',
            borderRadiusLG: 16,
            ...({ contentPadding: 0 } as Record<string, number>),
          }
        }
      }}
    >
      {children}
    </AntdConfigProvider>
  )
}