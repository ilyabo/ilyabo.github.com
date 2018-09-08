import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Sidebar from './Sidebar'

export default class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: 'Montserrat, sans-serif',
    //         marginTop: 0,
    //         marginBottom: rhythm(-1),
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         Ilya Boyandin
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div>
        <Sidebar />

        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}
