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
  background-color: ${colors.primary[1]};
  transform: translate3D(0,0,0);
  width: 100%;
  z-index: 2;
  padding: ${rhythm(0.3)} ${rhythm(1)};
  display: flex;
  align-items: center;
  .filler {
    flex-grow: 1;
  }
  * + * {
    margin-left: 2em;
  }
  a {
    display: flex;
    color: #fff;
    font-size: 11pt;
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
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <a href="/resume/" target="_blank" rel="noopener">CV</a>
      <div className="filler"/>
      <div className={css({
        marginLeft: 7,
        display: 'flex',
      })}>
        <a href="https://twitter.com/ilyabo"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/ilyabo/"><FaLinkedin/></a>
        <a href="https://github.com/ilyabo"><FaGithub/></a>
      </div>
    </Outer>
  </Headroom>


export default Header
