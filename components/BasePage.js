import React from 'react'
import Proptypes from 'prop-types'
import { Container } from 'reactstrap'

const BasePage = ({ children, className }) => (
  <div className={`base-page ${className}`}>
    <Container>
      {children}
    </Container>
  </div>
)

BasePage.defaultProps = {
  className: '',
}

BasePage.propTypes = {
  className: Proptypes.any.isRequired,
}

export default BasePage