/*==================== EXTERNAL MODULES ====================*/
import styled, {ThemeProvider} from 'styled-components';

/*==================== INTERNAL MODULES ====================*/

  /*----- TEXT -----*/



  /*----- BUTTONS -----*/
  const Submit = styled.button`
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

    const Button = styled.button`
      border: solid;
      border-width: thin;
      padding: 5px 20px;
      border: none;
      box-shadow: 0px 0px 4px rgb(0 0 0 / 30%);
      position: relative;
      right: -5px;
      cursor: pointer;
  `;

    const LinkButton = styled.button`
      background: none!important;
      border: none;
      padding: 0!important;
      color: black;
      text-decoration: underline;
      cursor: pointer;
    `;

  const CloseModal = styled.button`
    display: flex;
    align-content: center;
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

  /*----- DIVS -----*/
  const PhotoPreview = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    padding: 0.25em;
  `;

  const PhotoFrame = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 150px;
    height: 125px;
    margin-left: 10px;
  `;

  /*----- FORMS -----*/
  const Form = styled.form`

  `;


  /*----- INPUTS -----*/
  const Search = styled.input`
    border: solid;
    border-width: thin;
    width: 90%;
    height: 2em;
  `;

  /*----- IMAGES -----*/
  const Thumbnail = styled.img`
    width: 125px;
    height: 100px;
    align-self: center;
    object-fit: cover;
  `;

/*==================== EXPORTS ====================*/
export {
  Submit,
  Thumbnail,
  LinkButton,
  Button,
  PhotoPreview,
  PhotoFrame,
  CloseModal,
  Search,
}