import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

const About = ({ auth }) => (
  <BaseLayout {...auth}>
    <BasePage className="about-page" title="I am About Page">
    </BasePage>
  </BaseLayout>
)

export default About