/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import axios from 'axios';
import {format, parseISO} from  'date-fns';


/*==================== INTERNAL MODULES ====================*/



function Answer({answer, getUpdate}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;
  date = format(parseISO(date), 'MMMM d, yyyy');

  /*----- EVENT HANDLER -----*/
  const handleReport = () => {

  }

  const handleHelpful = () => {

  }

  /*----- RENDER FUNCTIONS -----*/
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
    return <button className="button-link" onClick={handleReport} name={id}>Report</button>;
  }

  const renderHelp = () => {
    return <button className="button-link" onClick={handleHelpful} name={id}>Yes</button>;
  }

  /*----- RENDERER -----*/
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