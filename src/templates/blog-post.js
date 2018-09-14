import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

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
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
                marginLeft: 0,
              }}
            >
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="prev">
                    ← {next.frontmatter.title}
                  </Link>
                )}
              </li>

              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="next">
                    {previous.frontmatter.title} →
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
