import React from 'react';

export default ({ page }) => (
  <div>
    <div>
      <h2>{'universal(props => import(`./${props.page}`))'}</h2>
      <h3>
        {"<UniversalComponent page='"}
        {page}
        {"' />"}
      </h3>
    </div>
  </div>
);
