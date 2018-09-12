import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'react-emotion'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Fade bottom cascade>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '10px 10px',
          })}
        >
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div
              key={node.fields.slug}
              className={css({
                margin: '0px 5px 20px 5px',
                padding: '10px 5px',
                borderRadius: 5,
                '&:hover': {
                  boxShadow: '0px 0px 10px #419eda',
                },
              })}
            >

              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                <h4
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {title}
                </h4>
                <Img
                  className={css({
                    border: '1px solid #eef',
                    borderRadius: 5,
                    boxShadow: '0px 0px 5px #ccc',
                  })}
                  resolutions={
                    get(node, 'frontmatter.preview.childImageSharp.resolutions', {})
                  }
                />
              </Link>
            </div>
          )
        })}
          </div>
        </Fade>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            preview {
              childImageSharp {
                resolutions(width: 300, height: 200) {
                  ...GatsbyImageSharpResolutions 
                }
              }
            }
          }
        }
      }
    }
  }
`
