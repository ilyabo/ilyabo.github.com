import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { css } from 'react-emotion'

const styles = {
  nav: css({
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
    marginLeft: 0,
    '& > li': {
      display: 'flex',
      flex: '1 0 0',
      '&.right': {
        justifyContent: 'flex-end',
        textAlign: 'right',
      },
      '&.home': {
        justifyContent: 'center',
      },
    },
    '& .item': {
      display: 'flex',
      '& > * + *': {
        marginLeft: rhythm(0.25),
      },
    },
  }),
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
          <div>
            <ul className={styles.nav}>
              <li className="left">
                {next && (
                  <Link to={next.fields.slug} rel="prev">
                    <div className="item left">
                      <div>←</div> <div>{next.frontmatter.title}</div>
                    </div>
                  </Link>
                )}
              </li>

              <li className="home">
                <Link to="/" rel="next">
                  <div className="item">
                     <div>Home</div>
                  </div>
                </Link>
              </li>

              <li className="right">
                {previous && (
                  <Link to={previous.fields.slug} rel="next">
                    <div className="item">
                       <div>{previous.frontmatter.title}</div> <div>→</div>
                    </div>
                  </Link>
                )}
              </li>
            </ul>
            <h1
              style={{
                marginBottom: rhythm(1.5),
              }}
            >{post.frontmatter.title}</h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-1),
              }}
            >
              {post.frontmatter.date}
            </p>



            <div dangerouslySetInnerHTML={{ __html: post.html }} />


          </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
      }
    }
  }
`
