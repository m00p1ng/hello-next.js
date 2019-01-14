import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'

import withAuth from '../components/hoc/withAuth'

const PortfolioNew = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage className="portfolio-create-page">
      <PortfolioCreateForm />
    </BasePage>
  </BaseLayout>
)

export default withAuth('siteOwner')(PortfolioNew)