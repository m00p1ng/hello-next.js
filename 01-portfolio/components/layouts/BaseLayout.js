import React from 'react'
import Header from '../shared/Header'

const BaseLayout = ({
  children,
  className,
  isAuthenticated,
  user,
  headerType,
}) => (
    <div className="layout-container" >
      <Header
        className={`port-nav-${headerType}`}
        isAuthenticated={isAuthenticated}
        user={user}
      />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )

BaseLayout.defaultProps = {
  headerType: 'default'
}

export default BaseLayout