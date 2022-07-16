/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from  'date-fns';


/*==================== INTERNAL MODULES ====================*/
import {Submit, Thumbnail, LinkButton} from '../../../public/stylesheets/styles.js';


function Answer({answer, getUpdate}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;

  const [wasHelpful, setWasHelpful] = useState(false);
  const [wasReported, setWasReported] = useState(false);
  const [increaseHelpfulness, setIncreaseHelpfulness] = useState(helpfulness);

  date = format(parseISO(date), 'MMMM d, yyyy');

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
      return <LinkButton className="helpfulAndReport">Reported</LinkButton>;
    }
    return <LinkButton className="helpfulAndReport" onClick={handleReport} name={id}>Report</LinkButton>;
  }

  const renderHelp = () => {
    if (wasHelpful) {
      return <LinkButton className="helpfulAndReport" name={id}>Yes</LinkButton>;
    }
    return <LinkButton className="helpfulAndReport" onClick={handleHelpful} name={id}>Yes</LinkButton>;
  }

  const renderPhotos = () => {
    console.log(photos);
    photos.map((photo) => <Thumbnail src={photo} key={`P-${photo}-${id}`}/>)
  }

  /*----- RENDERER -----*/
  return (
    <div>
      <div className="answer-body">{body}</div>
      {renderPhotos()}
      <div>by {renderName()} {`, ${date} | Helpful? `} {renderHelp()} {` (`} {increaseHelpfulness} {`) | `} {renderReport()}</div>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default Answer;