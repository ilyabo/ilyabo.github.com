import { graphql, Link, StaticQuery } from 'gatsby'
import { css } from 'emotion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import React from 'react'
import Headroom from 'react-headroom'
import styled from 'react-emotion'
import * as colors from '../../colors'
import { rhythm } from '../utils/typography'

// const Logo = () => (
//   <StaticQuery
//     query={graphql`
//       query LogoQuery {
//         file(relativePath: { eq: "ibcaps.png" }) {
//           childImageSharp {
//             fixed(width: 25) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <a href="/" style={{ opacity: 1 }}>
//         <img
//           className={css({
//             marginBottom: 0,
//             marginRight: 10,
//           }).toString()}
//           src={data.file.childImageSharp.fixed.src}
//         />
//       </a>
//     )}
//   />
// )


const Outer = styled('div')`
  // box-shadow: 0px 0px 10px ${colors.primary[1]};
  background-color: ${colors.primary[1]};
  transform: translate3D(0,0,0);
  width: 100%;
  z-index: 2;
  padding: 0 ${rhythm(0)};
  display: flex;
  align-items: center;
  .filler {
    flex-grow: 1;
  }
  a {
    text-decoration: none;
    display: flex;
    color: #fff;
    padding: ${rhythm(0.3)} ${rhythm(1)};
    font-size: 11pt;
    cursor: pointer;
    transition: color 0.25s, background-color 0.25s; 
    &:hover {
      background-color: #ffffff80;
      color: ${colors.primary[0]} !important;
    }
  }
`

const activeLinkCss = css(`
  background-color: #ffffffb0 !important;
  color: ${colors.primary[0]} !important;
`)


const SocialLinksArea = styled('div')`
  display: flex;
  margin-right: ${rhythm(0.7)}; 
  a {
    padding: ${rhythm(0.3)} ${rhythm(0.3)} !important;
  }  
`

const Header = ({ data }) =>
  <Headroom
    className={css({
      '.headroom': {
        transition: 'opacity 0.5s',
      },
      '.headroom--scrolled': {
        opacity: 0.9,
      },
    })}
  >
    <Outer>
      {/*<Logo/>*/}
      <Link to="/" activeClassName={activeLinkCss}>Home</Link>
      <Link to="/about/" activeClassName={activeLinkCss}>About</Link>
      <a href="/resume/" target="_blank" rel="noopener">CV</a>
      <div className="filler"/>
      <SocialLinksArea>
        <a href="https://twitter.com/ilyabo" target="_blank" rel="noopener"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/ilyabo/" target="_blank" rel="noopener"><FaLinkedin/></a>
        <a href="https://github.com/ilyabo" target="_blank" rel="noopener"><FaGithub/></a>
      </SocialLinksArea>
    </Outer>
  </Headroom>


export default Header
