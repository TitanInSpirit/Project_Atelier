/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import {format, parseISO} from  'date-fns';


/*==================== INTERNAL MODULES ====================*/



function Answer({answer, handleHelpful, handleReport}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;
  date = format(parseISO(date), 'MMMM d, yyyy');

  const renderName = () => {
    if (answerer_name === 'Seller') {
      return <b>Seller</b>;
    } else {
      return answerer_name;
    }
  }

  const renderReport = () => {
    if (answer.reported === true) {
      return <button className="button-link">Reported</button>;
    }
    return <button className="button-link" onClick={handleReport}>Report</button>;
  }

  const renderHelp = () => {
    return <button className="button-link" onClick={handleHelpful}>Yes</button>;
  }

  return (
    <div>
      <div>{`A: ${body}`}</div>
      <div>{photos.map((photo) => <p>img</p>)}</div>
      <div>by {renderName()} {`, ${date} | Helpful? `} {renderHelp()} {helpfulness} {` | `} {renderReport()}</div>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default Answer;