export interface AppTheme {
  id: string
  background: string
  snow: string
  snowDark: string
  primaryText: string
  secondaryText: string
  accent: string
  accentDark: string
  border: string
  placeholder: string
  disabled: string
  hover: string
  contrastHover: string
  scrollBarThumb: string
  scrollBarTrack: string
  accentRgba: {
    rgba10: string
    rgba20: string
    rgba30: string
    rgba40: string
    rgba50: string
    rgba60: string
    rgba70: string
    rgba80: string
    rgba90: string
  }
}

export const LIGHT_THEME: AppTheme = {
  id: 'light',
  background: '#ffffff',
  snow: '#f2f2f2',
  snowDark: '#e7e7e7',
  primaryText: '#444444',
  secondaryText: '#666666',
  accent: '#ff3399',
  accentDark: '#ff1a8c',
  border: '#d9d9d9',
  placeholder: 'rgba(0, 0, 0, 0.4)',
  disabled: '#cccccc',
  hover: 'rgba(0, 0, 0, 0.05)',
  contrastHover: 'rgba(255, 255, 255, 0.1)',
  scrollBarThumb: '#dddddd',
  scrollBarTrack: '#f2f2f2',
  accentRgba: {
    rgba10: 'rgba(255, 51, 153, 0.1)',
    rgba20: 'rgba(255, 51, 153, 0.2)',
    rgba30: 'rgba(255, 51, 153, 0.3)',
    rgba40: 'rgba(255, 51, 153, 0.4)',
    rgba50: 'rgba(255, 51, 153, 0.5)',
    rgba60: 'rgba(255, 51, 153, 0.6)',
    rgba70: 'rgba(255, 51, 153, 0.7)',
    rgba80: 'rgba(255, 51, 153, 0.8)',
    rgba90: 'rgba(255, 51, 153, 0.9)',
  },
}
