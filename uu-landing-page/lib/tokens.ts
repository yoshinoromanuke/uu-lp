export const tokens = {
  colors: {
    primary: { 
      DEFAULT: '#0F172A', 
      light: '#1E293B', 
      dark: '#0A0F1F' 
    },
    secondary: { 
      DEFAULT: '#3B82F6', 
      light: '#60A5FA', 
      dark: '#2563EB' 
    },
    accent: { 
      DEFAULT: '#10B981', 
      light: '#34D399', 
      dark: '#059669' 
    },
    gray: { 
      50: '#F8FAFC', 
      100: '#F1F5F9', 
      500: '#64748B', 
      900: '#0F172A' 
    },
    semantic: { 
      error: '#EF4444', 
      warning: '#F59E0B', 
      success: '#10B981' 
    }
  },
  spacing: { 
    xs: '8px', 
    sm: '16px', 
    md: '24px', 
    lg: '32px', 
    xl: '64px' 
  },
  typography: {
    heading: { 
      size: '2.0rem', 
      weight: 700, 
      lineHeight: 1.2 
    },
    body: { 
      size: '1.1rem', 
      weight: 400, 
      lineHeight: 1.7 
    },
    small: { 
      size: '0.95rem', 
      weight: 400, 
      lineHeight: 1.5 
    }
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)'
  },
  animation: {
    duration: { 
      fast: '0.2s', 
      normal: '0.5s', 
      slow: '0.8s' 
    },
    easing: { 
      default: 'ease-out', 
      bounce: 'cubic-bezier(0.68,-0.55,0.265,1.55)' 
    }
  }
} as const

export type Tokens = typeof tokens