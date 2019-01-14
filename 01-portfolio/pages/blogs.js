import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

const Blog = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage>
      <h1>Welcome Blog Page</h1>
    </BasePage>
  </BaseLayout>
)

export default Blog