import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'

const Container = styled('div')`
  display: flex;
  margin-top: ${rhythm(1.0)};
  padding-top: ${rhythm(0.5)};
  padding-left: ${rhythm(1.5)};
	position: fixed;
`

const Content = styled('div')`
  &:after {
    background: #eee;
    background: linear-gradient(to bottom, #fff 0%, #eee 20%, #eee 80%, #fff 100%);
    position: absolute;
    content: '';
    width: 1px;
    height: 100%;
    right: -30px;
    bottom: 0;
  }
`

const Header = () =>
  <h1
    className={css({
      ...scale(0.75),
    })}
  >
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
      to={'/'}
    >
      Ilya Boyandin
    </Link>
  </h1>


const Sidebar = () =>
  <Container>
    <Content>
      <Header/>
      <img
        src={profilePic}
        alt="Ilya Boyandin"
        className={css({
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(4),
          height: rhythm(4),
          borderRadius: '50%',
        })}
      />
      <p>
        <a href="https://twitter.com/ilyabo">Follow me on Twitter</a>
      </p>
    </Content>
  </Container>

export default Sidebar
