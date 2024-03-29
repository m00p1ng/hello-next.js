import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

const CV = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage>
      <h1>Welcome CV Page</h1>
    </BasePage>
  </BaseLayout>
)

export default CV