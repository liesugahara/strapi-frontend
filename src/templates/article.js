import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>by <Link to={`/users/User_${data.strapiArticle.user.id}`}>{data.strapiArticle.user.username}</Link></p>
    <p>{data.strapiArticle.content}</p>
    <br></br>
    <iframe src={data.strapiArticle.link} className="embed-link"></iframe>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      link
      user {
        id
        username
      }
    }
  }
`