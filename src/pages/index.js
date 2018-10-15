import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
  <header>
<div>
        <input id="search-input" placeholder="Search for resources"/>
        <div id="tags"></div>
      </div>

    </header>
    <main>
      <div id="hits"></div>
      <div id="pagination"></div>
    </main>
algolia powered search below

  </Layout>
)

export default IndexPage
