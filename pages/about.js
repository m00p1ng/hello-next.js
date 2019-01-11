import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

const About = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage>
      <h1>Welcome About Page</h1>
    </BasePage>
  </BaseLayout>
)

export default About