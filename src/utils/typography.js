import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'
import * as colors from '../../colors'

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: colors.primary[2],
  },
  'a:hover': {
    color: colors.primary[3],
  },
})

const typography = new Typography({
  ...moragaTheme,
  headerFontFamily: ['Lato', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Lato', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

const { rhythm, scale } = typography
export { rhythm, scale, typography as default }
