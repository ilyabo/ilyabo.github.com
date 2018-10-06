import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'
import * as colors from '../../colors'
import { injectGlobal } from 'emotion'

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: colors.primary[2],
  },
  'a:hover': {
    color: colors.primary[3],
  },
})

injectGlobal(`
  @import url(https://fonts.googleapis.com/css?family=Lato:300italic,700italic,300,700);
`)

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
