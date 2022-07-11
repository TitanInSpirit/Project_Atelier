/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import {format, parseISO} from  'date-fns';


/*==================== INTERNAL MODULES ====================*/



function Answer({answer, handleHelpful}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;
  date = format(parseISO(date), 'MMMM d, yyyy');

  const renderName = () => {
    if (answerer_name === 'Seller') {
      return <b>Seller</b>;
    } else {
      return answerer_name;
    }
  }

  return (
    <div>
      <div>{`A: ${body}`}</div>
      <div>{photos.map((photo) => <p>img</p>)}</div>
      <div>by {renderName()} {`, ${date} | Helpful? Yes (${helpfulness}) | Report`}</div>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default Answer;