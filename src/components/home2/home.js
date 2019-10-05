// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <Helmet
      title="Home"
      meta={[{ name: 'description', content: 'Welcome to Reactivity' }]}
    />
    <h1>What is it really?</h1>
    <p>
      A <b>universally rendered 2</b>
    </p>

    <p>
      Take a look at our <Link to="/examples">Examples Page</Link> to see parts
      of this in action.
    </p>
  </div>
)

export default Home
