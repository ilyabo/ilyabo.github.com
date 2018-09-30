import React from 'react'
import styled from 'react-emotion'
import { rhythm } from '../utils/typography'
import Sidebar from './Sidebar'
import Header from './Header'

export const BREAK_POINT = 40
const SIDEBAR_WIDTH = 7

const Container = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  @media (min-width: ${rhythm(BREAK_POINT)}) {
    max-width: ${rhythm(80)};
    padding-left: ${rhythm(2)};
    padding-right: ${rhythm(2)};
  }
  @media (max-width: ${rhythm(BREAK_POINT)}) {
    flex-direction: ${props => props.isHome ? 'column' : 'column-reverse' };
    padding-bottom: ${props => props.isHome ? 0 : rhythm(2)};
    padding-left: ${rhythm(0.5)};
    padding-right: ${rhythm(0.5)};
  }
`

const SidebarContainer = styled('div')`
  display: flex;
  justify-content: center;
  padding-top: ${rhythm(1.5)};
  @media (min-width: ${rhythm(BREAK_POINT)}) {
    position: absolute;
    left: ${rhythm(1)}; 
    width: ${rhythm(SIDEBAR_WIDTH)};
    &:after {
      background: #eee;
      background: linear-gradient(to bottom, #fff 0%, #eee 20%, #eee 80%, #fff 100%);
      position: absolute;
      content: '';
      width: 1px;
      height: 100%;
      top: ${rhythm(1)};
      right: -${rhythm(1)};
      bottom: 0;
    }
  }
`

const ContentContainer = styled('div')`
  padding: ${rhythm(1.5)} ${rhythm(0.5)};
  @media (min-width: ${rhythm(BREAK_POINT)}) {
    padding: ${rhythm(1.5)} ${rhythm(5)};
  }
`


const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isHome = (location.pathname === rootPath)
  return (
    <React.Fragment>
      <Header/>
      <Container>
        {isHome &&
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>}
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </React.Fragment>
  )
}

export default Layout
