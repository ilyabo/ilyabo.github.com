import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography(moragaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

const { rhythm, scale } = typography
export { rhythm, scale, typography as default }
