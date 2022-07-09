/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/



function Answer({answer}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;

  return (
    <div>
      <div>{`A: ${body}`}</div>
      {photos.map((photo) => <p>img</p>)}
      <div>{`${answerer_name}, ${date} | Helpful? Yes (${helpfulness}) | Report`}</div>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default Answer;