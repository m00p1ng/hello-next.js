import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import withAuth from '../components/hoc/withAuth'

const Owner = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage>
      <h1>Welcome Owner Page</h1>
    </BasePage>
  </BaseLayout>
)

export default withAuth('siteOwner')(Owner)