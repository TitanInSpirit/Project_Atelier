/*==================== EXTERNAL MODULES ====================*/
import styled, {ThemeProvider} from 'styled-components';

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

  // const Button = styled.button`
  //   background-color: #fff;
  //   border-radius: 5px;
  //   padding: 5px 20px;
  //   border: none;
  //   box-shadow: 0px 0px 4px rgb(0 0 0 / 30%);
  //   position: relative;
  //   right: -5px;
  //   cursor: pointer;
  // `;

  export const Button = styled.button`
      border: solid;
      border-width: thin;
      background-color: #fff;
      padding: 5px;
      cursor: pointer;
  `;

  export const LinkButton = styled.button`
      background: none!important;
      border: none;
      padding: 0!important;
      color: black;
      text-decoration: underline;
      cursor: pointer;
    `;

  export const HelpfulButton = styled(LinkButton)`
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