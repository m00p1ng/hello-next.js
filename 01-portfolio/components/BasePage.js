import React from 'react'
import Proptypes from 'prop-types'
import { Container } from 'reactstrap'

const BasePage = ({ children, className, title }) => (
  <div className={`base-page ${className}`}>
    <Container>
      {title && (
        <div className="page-header">
          <h1 className="page-header-title">{title}</h1>
        </div>
      )}
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