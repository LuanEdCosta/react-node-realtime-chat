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
}
