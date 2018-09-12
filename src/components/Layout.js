import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import { rhythm, scale } from '../utils/typography'
import Sidebar from './Sidebar'

const breakPoint = 30

const Container = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)}; 
  padding-left: ${rhythm(1.5)};
  padding-right: ${rhythm(1.5)};
  @media (min-width: ${rhythm(breakPoint)}) {
    max-width: ${rhythm(55)}; 
  }
`

const SidebarContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: ${rhythm(1.0)};
  padding-top: ${rhythm(0.5)};
  @media (min-width: ${rhythm(breakPoint)}) {
    position: fixed;
    width: ${rhythm(9)};
  }
`

const ContentContainer = styled('div')`
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  @media (min-width: ${rhythm(breakPoint)}) {
    margin-left: ${rhythm(11)};
  }
`

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
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    )
  }
}
