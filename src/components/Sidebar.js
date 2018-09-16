import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import profilePic from '../assets/profile-pic.jpg'
import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const Container = styled('div')`
  display: flex;
`

const Content = styled('div')`
  text-align: center;
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
      <Link to="/">
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
      </Link>
      <div className={css({
        marginTop: 10,
      })}>
        <div><a href="mailto:ilya@boyandin.me">ilya@boyandin.me</a></div>
        <div><a href="/assets/thesis.pdf">Thesis</a></div>
        <div><Link to="/resume/">Resume</Link></div>
        <div className={css({
          padding: 20,
          '& > * + *': {
            marginLeft: 7,
          }
        })}>
          <a href="https://twitter.com/ilyabo"><FaTwitter/></a>
          <a href="https://www.linkedin.com/in/ilyabo/"><FaLinkedin/></a>
          <a href="https://github.com/ilyabo"><FaGithub/></a>
        </div>
      </div>
    </Content>
  </Container>

export default Sidebar
