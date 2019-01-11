import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

const Portfolio = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage>
      <h1>Welcome Page</h1>
    </BasePage>
  </BaseLayout>
)

export default Portfolio