import React from 'react'
import styled from 'react-emotion'
import { rhythm } from '../utils/typography'
import Sidebar from './Sidebar'
import Header from './Header'

export const BREAK_POINT = 57

const Container = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  & > * + * {
    margin-top: ${rhythm(1)};
  }
  @media (min-width: ${rhythm(BREAK_POINT)}) {
    max-width: ${rhythm(80)};
    padding-left: ${rhythm(2)};
    padding-right: ${rhythm(2)};
  }
  @media (max-width: ${rhythm(BREAK_POINT)}) {
    max-width: ${rhythm(BREAK_POINT)};
    flex-direction: ${'column'};
    padding-bottom: 0;
    padding-left: ${rhythm(0.5)};
    padding-right: ${rhythm(0.5)};
  }
  @media print {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`

const Sidebars = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: ${rhythm(1.75)};
    & > * + * {
      margin-top: ${rhythm(0.5)};
    }
    margin-left: ${rhythm(1)}; 
    margin-right: ${rhythm(1)};
`

const SidebarContainer = styled('div')`
  display: flex;
  // flex: 1 0 0;
  // justify-content: center;
  // margin-top: ${rhythm(1)};
  // border: 1px solid red;
  text-align: center;
`

const ContentContainer = styled('div')`
  padding: ${rhythm(1.5)} ${rhythm(0.5)};
  @media (min-width: ${rhythm(BREAK_POINT)}) {
    padding: ${rhythm(1.4)} ${rhythm(6)};
  }
  @media print {
    padding: 0;
  }
`

const LargeText = styled('div')`
  font-size: ${rhythm(0.65)};  
`


const Layout = (props) => {
  const { location, children } = props
  const path = location.pathname
  const postKind = (
    path.startsWith('/talks/') ? 'talks' :
    path.startsWith('/blog/') ? 'blog' :
    path.startsWith('/p/') ? 'project' : undefined
  )
  const rootPath = `${__PATH_PREFIX__}/`
  const isHome = (path === rootPath)
  return (
    <React.Fragment>
      <Header postKind={postKind} />
      <Container>
        {isHome &&
        <Sidebars>
          <SidebarContainer left>
            <Sidebar />
          </SidebarContainer>
          <SidebarContainer right>
            <LargeText>
            {/*I design and develop interactive data visualizations for the web.*/}
            I design and develop data visualizations.
            </LargeText>
          </SidebarContainer>
        </Sidebars>
        }
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </React.Fragment>
  )
}

export default Layout
