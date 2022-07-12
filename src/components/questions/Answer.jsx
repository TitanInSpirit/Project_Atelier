/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from  'date-fns';


/*==================== INTERNAL MODULES ====================*/


function Answer({answer, getUpdate}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;
  date = format(parseISO(date), 'MMMM d, yyyy');

  const [wasHelpful, setWasHelpful] = useState(false);
  const [wasReported, setWasReported] = useState(false);
  const [increaseHelpfulness, setIncreaseHelpfulness] = useState(helpfulness);

  /*----- EVENT HANDLER -----*/
  const handleReport = () => {
    setWasReported(true);
    axios.put(`http://localhost:3001/answers/report/${id}`)
    .then(response => getUpdate())
    .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }

  const handleHelpful = () => {
    setWasHelpful(true);
    setIncreaseHelpfulness(helpfulness + 1);
    axios.put(`http://localhost:3001/answers/helpful/${id}`)
      .then(response => getUpdate())
      .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
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
    if (wasReported) {
      return <button className="button-link">Reported</button>;
    }
    return <button className="button-link" onClick={handleReport} name={id}>Report</button>;
  }

  const renderHelp = () => {
    if (wasHelpful) {
      return <button className="button-link" name={id}>Yes</button>;
    }
    return <button className="button-link" onClick={handleHelpful} name={id}>Yes</button>;
  }

  /*----- RENDERER -----*/
  return (
    <div>
      <div>{body}</div>
      <div>{photos.map((photo) => <img src={photo} width="auto" height="100"/>)}</div>
      <div>by {renderName()} {`, ${date} | Helpful? `} {renderHelp()} {increaseHelpfulness} {` | `} {renderReport()}</div>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default Answer;