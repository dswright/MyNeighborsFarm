import React from 'react'

export default ({ page }) => (
  <div>
    <img
      src='https://cdn.reactlandia.com/faceyspacey-white-logo.png'
      alt='FaceySpacey'
    />

    <div>
      <h2>{'universal(props => import(`./${props.page}`))'}</h2>
      <h3>
        {"<UniversalComponent page='"}
        {page}
        {"' />"}
      </h3>
    </div>
  </div>
)
