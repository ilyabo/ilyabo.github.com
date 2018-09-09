import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from '../assets/profile-pic.jpg'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'

const Container = styled('div')`
  display: flex;
`

const Content = styled('div')`
  text-align: center;
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
  <div className={css(`
    margin-bottom: 20px;
  `)}>
    <h1
      className={css({
        ...scale(0.75),
        marginBottom: 0,
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
    <div className={css({
      fontSize: 16,
    })}>
      Data Visualization Engineer
    </div>
  </div>


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
