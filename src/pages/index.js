import React from 'react'
import { injectGlobal } from 'react-emotion'

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Lato:300,700);
`
injectGlobal({
  'html,body': {
    fontFamily: 'Lato',
  }
})

export default () => <div>Hello world!</div>
