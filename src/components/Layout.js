import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import { rhythm, scale } from '../utils/typography'
import Sidebar from './Sidebar'

const breakPoint = 26
const SIDEBAR_WIDTH = 9

const Container = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)}; 
  @media (min-width: ${rhythm(breakPoint)}) {
    max-width: ${rhythm(80)}; 
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};
  }
  @media (max-width: ${rhythm(breakPoint)}) {
    display: ${props => props.isHome ? 'block' : 'flex' };
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
  @media (min-width: ${rhythm(breakPoint)}) {
    position: fixed;
    width: ${rhythm(SIDEBAR_WIDTH)};
    &:after {
      background: #eee;
      background: linear-gradient(to bottom, #fff 0%, #eee 20%, #eee 80%, #fff 100%);
      position: absolute;
      content: '';
      width: 1px;
      height: 100%;
      right: -${rhythm(0.5)};
      bottom: 0;
    }
  }
`

const ContentContainer = styled('div')`
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  @media (min-width: ${rhythm(breakPoint)}) {
    margin-left: ${rhythm(SIDEBAR_WIDTH + 1)};
  }
`

export default class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isHome = (location.pathname === rootPath)
    return (
      <Container isHome={isHome}>
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
