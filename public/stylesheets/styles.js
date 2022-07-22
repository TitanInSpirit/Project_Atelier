/*==================== EXTERNAL MODULES ====================*/
import styled from 'styled-components';

/*==================== INTERNAL MODULES ====================*/



/*==================== EXPORTS ====================*/

/*
=====================================
                TEXT
=====================================
*/
export const H3Text = styled.h3`
  font-weight: bold;
  font-size: 1rem;
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 25px;
`;

export const Spacer = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px 0 10px;
`;


/*
=====================================
                BUTTONS
=====================================
*/
export const Submit = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 4px 20px;
  border: none;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.3);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  width: 60%;
  font-size: 12pt;
  &:hover {
    font-weight: bold;
    color: #fff;
    background-color: #212121;
  }
`;

export const ExpandButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 9pt;
  color: #212121;
  padding: 0;
  margin-top: 15px;
  &:hover {
    font-weight: bold;
  }
`
export const LinkButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: gray;
`;

export const HelpfulButton = styled(LinkButton)`
  color: ${({wasHelpful}) => wasHelpful ? '#81DBD8':'#212121'};
  cursor: pointer;
  transform: scale(${({wasHelpful}) => wasHelpful ? 1.25 : 1});
  margin-right: 3px;
  &:hover {
    transform: scale(1.25);
    color: ${({wasHelpful}) => wasHelpful ? '#81DBD8':'#212121'};
  }
`;

export const AnswerButton = styled(LinkButton)`
  margin-left: 10px;
`;


export const CloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: solid;
  border-width: thin;
  border-radius: 50%;
  /* background-color: rgba(0,0,0,0); */
  background: none!important;
  color: black;
  cursor: pointer;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

/*
=====================================
                DIVS
=====================================
*/
export const PhotoPreview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25em;
`;

export const PhotoFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  height: 125px;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

/*
=====================================
                FORMS
=====================================
*/
export const Form = styled.form`

`;


  /*
=====================================
                INPUTS
=====================================
*/
export const Search = styled.input`
  border: none;
  width: 90%;
  height: 2em;
  outline: none;
`;

/*
=====================================
                IMAGES
=====================================
*/
export const Thumbnail = styled.img`
  width: 125px;
  height: 100px;
  align-self: center;
  object-fit: cover;
`;