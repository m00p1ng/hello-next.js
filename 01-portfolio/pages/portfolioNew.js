import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'

import { Row, Col } from 'reactstrap'

import withAuth from '../components/hoc/withAuth'

const savePortfolio = (values) => {
  alert(JSON.stringify(values, null, 2));
}

const PortfolioNew = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage
      className="portfolio-create-page"
      title="Create New Portfolio"
    >
      <Row>
        <Col md="6">
          <PortfolioCreateForm
            onSubmit={savePortfolio}
          />
        </Col>
      </Row>
    </BasePage>
  </BaseLayout>
)

export default withAuth('siteOwner')(PortfolioNew)