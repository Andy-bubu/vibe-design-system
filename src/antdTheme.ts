import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export const antdTheme: ThemeConfig = {
  algorithm: [theme.defaultAlgorithm],
  token: {
    colorPrimary: '#1677ff',
    colorSuccess: '#16a34a',
    colorWarning: '#d97706',
    colorError: '#dc2626',
    colorBgLayout: '#f4f7fb',
    colorBgContainer: '#ffffff',
    colorBorderSecondary: '#e2e8f0',
    colorText: '#0f172a',
    colorTextSecondary: '#475569',
    borderRadius: 18,
    borderRadiusLG: 24,
    boxShadowSecondary: '0 24px 80px rgba(15, 23, 42, 0.14)',
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans CJK SC', sans-serif",
  },
  components: {
    Layout: {
      headerBg: 'rgba(255,255,255,0.78)',
      siderBg: 'rgba(255,255,255,0.78)',
      bodyBg: 'transparent',
    },
    Card: {
      borderRadiusLG: 24,
      headerBg: 'transparent',
    },
    Menu: {
      itemBorderRadius: 14,
      itemSelectedBg: 'rgba(22,119,255,0.10)',
      itemSelectedColor: '#1677ff',
      itemHoverBg: 'rgba(15,23,42,0.04)',
      subMenuItemBorderRadius: 12,
    },
    Button: {
      borderRadius: 12,
      controlHeight: 42,
      fontWeight: 500,
    },
    Input: {
      borderRadius: 12,
      controlHeight: 44,
    },
    Select: {
      borderRadius: 12,
      controlHeight: 44,
    },
    Collapse: {
      headerBg: 'rgba(255,255,255,0.72)',
      contentBg: 'transparent',
      borderRadiusLG: 20,
    },
  },
};
