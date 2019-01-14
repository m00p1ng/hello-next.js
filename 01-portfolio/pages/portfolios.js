import React from 'react'
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

const renderPosts = (posts) => posts.map((post, index) => (
  <Col md="4" key={index}>
    <React.Fragment key={index}>
      <span>
        <Card className="portfolio-card">
          <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
          <CardBody>
            <p className="portfolio-card-city"> Some Location {index} </p>
            <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
            <CardText className="portfolio-card-text">Some Description {index}</CardText>
            <div className="readMore"> </div>
          </CardBody>
        </Card>
      </span>
    </React.Fragment>
  </Col>
))


const Portfolios = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage className="portfolio-page" title="I am Portfolios Page">
      <Row>
        {renderPosts(['', '', ''])}
      </Row>
    </BasePage>
  </BaseLayout>
)

export default Portfolios