<!-- <div style="display: flex; flex-direction: column; justify-content: center;"> -->
<div style="position: relative;">

<div style="align-self: flex-start;>
<h1 style="color: white"> Project Atelier | Sole Inc. </h1>

<div align="left">
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/react" />
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/webpack" />
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/axios"/>
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/nodemon"/>
<img src="https://img.shields.io/github/package-json/dependency-version/TitanInSpirit/Project_Atelier/dev/jest"/>
</div>
<br></br>
<div align="center">
  <img src="src/components/header/HeaderLogo.svg" width=200px>
</div>

 <h2 style="color:#81DBD8"> <img src="Assets/Favicon.svg" height=30px> &nbsp;&nbsp;About Project Atelier: </h2>

Our team was tasked with creating a complete redesign of an outadated client-facing retail web-portal including but not limited to branding, and website functionality. This project comprises a complete redesign of the retail portal intended to address the client's concerns and modernize the site. This document outlines the design and features our team implemented.

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<p align="center">
<a href="#overview" style="color: white">Overview</a> |
<a href="#questions--answers" style="color: white">Questions & Answers</a> |
<a href="#ratings--reviews" style="color: white">Ratings & Reviews</a> |
<a href="#-installation-" style="color: white">Installation</a> |
<a href="#-git-work-flow-" style="color: white">Git Work Flow</a> |
<a href="#-testing-" style="color: white">Testing</a>
</p>

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<h2 style="color:#81DBD8"> Components </h2>

This section provides a broad overview of just a few of the exciting functionalities our team implemented for the Sole incorpertated product detail page.

The product detail page shows relevant information for a single product in the catalog. One single product can be associated with many sizes and styles which each result in unique SKUs (stock keeping units). The product detail page presents items at the product level. Further breakdown by style or size is only reflected within the product detail page.

The same product detail page is shown for every product in the catalog. Upon navigating to the product detail page or selecting a new product to display, the contents of the page updates to show information relevant to the selected product.

The item detail page consists of three distinct modules.

- Overview
- Ratings & Reviews
- Questions & Answers

### Overview

The Overview module is the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:

- Image gallery
- Product information
- Style selector
- Add to cart

This component guides the customer through selecting a specific style and size to add to their cart.

#### Image Gallery | Expanding Product Carousel & Vertical Thumbnail Gallery

![Expanding Product Picture](https://media.giphy.com/media/kH68V5Oa389YjHJhOd/giphy.gif)

The largest piece of the Overview module is the photo gallery which shows images of the product. The photos presented in this gallery are specific to the currently selected product style. Each time a new style is chosen, the gallery updates to show photos corresponding to the new style. Each style has a set of images associated with it and the gallery allows customers to browse between and zoom in on these photos.

The gallery is viewable in two states. A default collapsed view, and an expanded view.

#### Product Information | Style Selector

![Style Selector](https://media.giphy.com/media/UTUQxOIuzmxGlWXmOZ/giphy.gif)

Below the product information panel, the user is presented with all the styles of the product and has the ability to toggle between them. Each style is displayed as an array of circular thumbnails.

All styles are displayed for the current product at all times. There is no limit to the number of styles a product can have. The thumbnails appear in rows of 4.

The current selection is indicated within the list by the overlay of a checkmark on top of the thumbnail for that style. Additionally, the title for that style appears typed out in full above the thumbnail list.

A user is able to change the selected style by clicking on the thumbnail displaying that style. Clicking on the thumbnail for the currently selected style has no impact.

By default, the style selected is first in the list and only one style can be selected at a time.

#### Product Information | Automatic Scrolling

![Automatic Scrolling](https://media.giphy.com/media/C0lNeCSlrrNMG4oek6/giphy.gif)

General information about the product is displayed at the top of the Overview component. The following information is shown:

- Star Rating (# of Reviews)
  - Each product has an average rating based on its reviews. The average rating of the product is represented by an array of solid or outlined stars, where the number of solid stars represents the review score. The number of stars filled in coresponds to the average score.
  - The visual for rating is representative of up to a quarter of a review point. For example, if the average is 3.8, this will display as 3¾ solid stars and 1¼ outlined stars.
- Next to the star rating, a link stating “Read all [#] reviews” is shown Clicking this link automatically scrolls the page to the Ratings & Reviews component

### Questions & Answers

The Questions & Answers component allows the end user to ask and answer questions for the product selected. The functionality contained within this module can be divided into several pieces:

 - View questions
 - Search for a question
 - Asking a question
 - Answering a question

This component extends the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.

#### Searching for a Question

![Searching Questions](https://media.giphy.com/media/1I0etZvRKYTz9iPTEu/giphy.gif)

The search bar that appears above the Questions List allows the end user to search the submitted questions and answers. The search function will begin to automatically filter the results within the component once three or more characters have been entered. The search filter will be automatically removed if the search bar is cleared or if the search term is less than three characters in length.

#### Asking and Answering a Question

![Answer a Question](https://media.giphy.com/media/If58DYGbd9Kaihc08X/giphy.gif)

If the end user is unable to find the answer they are looking for, they are able to submit their own questions by clicking on the "Add a Question +" button located on the bottom of the component. Clicking this button will open a modal form that will require the end user to submit their "nickname" (login) as well as an email address and their question. Upon clicking submit, the question will be added to the shown list of questions for other users to answer or interact with

Much like asking a question, users are also able to submit answers to the questions of other users by clicking on the "Add an Answer" button located in-line
with each question. Doing so will open a modal form that requires the same information as adding a question along with the ability to attach up to 5 photos.

#### Liking and Reporting

![Liking and Reporting](https://media.giphy.com/media/UcfLC679FHG8fzvkag/giphy.gif)

Once a Question or Answer is submitted, other users will be able to mark each answer as helpful by clicking on the the thumb located to the right of the question or below each answer. Clicking on this thumb will increass the "helpfullness" rating of the question or answer as well as changing the button to indicate the helpfulness. Questions and Answers with higher helpfullness ratings be shown higher up the list to all other users.

 If a user feels that an answer is unhelpful or offensive they are able to report the answer by clicking on the report button. On click the report button will change to indicate that answer was reported, which will remove the answer from future searches.

### Ratings & Reviews
The Ratings & Reviews module allows for the viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:
- Write new review
- Reviews List
- Sorting 
- Rating Breakdown
- Product Breakdown

This component extends the ability to write, read, and browse through reviews for the current product. 

The heart of the Ratings and Reviews module is the list of reviews available for the user to read. This list displays all the reviews that have been submitted for the product being viewed. 

#### Sorting Reviews | Rating Breakdown
## ![Star Filter](https://media.giphy.com/media/uuzVZLv4BWPzOIIUMl/giphy.gif)
Below the average rating, is a section “Rating Breakdown." Within this section, the rating distribution is broken down. 
5 bars appear; each representing the star ratings that a customer can give to a product. To the left of the bar, the star count is explicitly stated in the form “# Stars”. 

To the right of the bar, a label with the total number of reviews submitted with that particular rating is shown. Each rating breakdown, consisting of the label, the bar, and the count, acts as a filter. Clicking on the breakdown for a star count filters the reviews list so that only reviews of that rating display. Hovering over this breakdown changes the background color to indicate it is actionable.

These filters are additive. If the list has already been filtered for 1 star reviews, clicking on the “2 star” breakdown updates the reviews list such that 1 and 2 star reviews are displayed. 

The filters can also toggled on and off with each click. Clicking a second time on a rating breakdown will remove the filter for that rating type. If this action removes the last or only filter, then the list returns to its default state and all reviews should be shown. 

Once one or more filters are applied, a message appears below the “Rating Breakdown” title. It lists the filters that have been currently applied. It also includes a link to “Remove all filters”. Clicking on this link will remove any filters applied and return the list to the default state. 


#### Sorting Reviews | Newest, Relevent, Most Helpful
## ![Sorting Reviews 1](https://media.giphy.com/media/TF7l4P7CQjKTSMhtsb/giphy.gif)
Users are able to change the review ordering by means of a dropdown menue. The options within the sort drop down include 
- Helpful 
  - This sort order prioritizes reviews that have been found helpful.
- Newest
  - This is a straightforward sort based on the date the review was submitted. The most recent reviews appear first.
- Relevant
  - Relevance is determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received. This combination weighs the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful. Similarly, reviews that have been helpful appear near the top, but yield to more recent reviews if they are older.
  
By default, the reviews in the list appear in order of relevance. Upon selecting any of the other options, the dropdown updates to display the current selection, and the list refreshs to show the first results for that sort order.


#### Sorting Reviews | By Text
## ![Sorting Reviews 2](https://media.giphy.com/media/Rl71nHoTa4aE4gcfXH/giphy.gif)

Above the reviews list, a search bar allows the user to filter the reviews for any that contain text matching the search term.
After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text. The filter continues to update as the user adds or removes characters. 
If the user clears the search term, or removes characters so that less than 3 remain, the list returns to the state where it is not filtered to match text. 
The search filter works with any other filters or sorts that have been applied, and narrows the results further. Changes to the sort and rating filters do not remove the search term filter.


### Adding A Review
## ![Adding A Review](https://media.giphy.com/media/yJnzkrcnNTSKIDxMvi/giphy.gif)
At the bottom of the Ratings & Reviews module, a button appears allowing users to create new reviews for the product. This button is always available on any product page. 

Upon clicking the button a modal window opens, overlaying the product page and allowing users to submit their own review.

In this section users are able to give the product a rating from 1-5, recommend or not recommend the product, as well as to select multiple options about the products characteristics on a 5 point scale. Additionally, users can write a the text for their review as well as adding images which will appear with their review. All inputs are required, a warning will show up if it's not filled out.


<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<h2 style="color:#81DBD8"> Installation: </h2>

Getting your own copy of Project Atelier is easy!

- Fork and clone this repo to your local machine
- Run npm install to install dependencies
- Read about the following scripts to understand their functionality
- Enjoy!

### Scripts

The following scripts can be found in package.json

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

`npm run server-dev`

<i> Launches nodemon to watch the server path and serve static files </i>

`npm run dev`

<i> Launches webpack to bundle your webapp and watch for any changes </i>

`npm run start`

<i> Bundles your webpack in development mode </i>

`npm run build`

<i> Bundles your webpack in production mode </i>

`npm run test`

<i> Calls jest to run any user defined tests </i>

```
// in package.json

"scripts": {
    "server-dev": "npx nodemon --watch server server/server.js",
    "dev": "npx webpack --watch",
    "start": "Webpack --mode=development",
    "build": "webpack --mode=production",
    "test": "jest"
  },
```

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<h2 style="color:#81DBD8"> Git Work Flow </h2>

### Steps

1. Fork the repo
2. Clone the repo
3. Create a branch to work on

```jsx
git checkout -b some-new-branch
```

1. Before push. . .

```jsx
git status // checks the status of changes
git add --a // adds all the changes
// you can also specifiy the specific file rather than -a
git commit -a -m /* commits all the changes staged and adds the same
message to all of them, you can also be more specific without the -a */
```

2. Push to the branch you are working on

```jsx
git push origin some-new-branch
```

- Other useful branch commands

  ```jsx
  git remote -v // lists the branches available
  git branch // shows the current branch you are working on
  ```

3. Create a Pull Request from your branch on Github with a message asking for approval
4. If your master branch is behind

   - switch branch to master

   ```jsx
   git status // checks status of updates
   git checkout master // changes to the master branch
   git pull origin master /* pulls the changes from github to your local
   master branch */
   ```

5. For a new task, Create a new branch as before

```jsx
git checkout -b a-second-new-branch

// make changes //
// save //
git status // check status
git add --a // add all the changes
git commit -a -m // commit all changes and add message to all
git push origin a-second-new-branch // push to the feature branch you created
// create another pull request on github
```

1. Check on first pull request

   1. if any changes are requested
      1. create a new feature branch
      2. fix any changes requested
      3. save, add, commit push
   2. update will show automatically on Github in original pull request (as long as its still open)
      1. Make another comment on changes
   3. Once merge is approved

      1. if there are no merge conflicts
         1. confirm merge on github
         2. Good Practice: delete the branch after merge
      2. if there _are_ merge conflicts

         1. Fix the conflicts

         ```jsx
         git merge master  /* attempt to merge the master branch
         into the branch you are currently on. This will show you
         the conflicts you need to fix. */
         ```

         1. After conflicts are fixed
            1. add, commit (commit? push?)
            2. complete merge on github

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<h2 style="color:#81DBD8"> Testing: </h2>

Our team decided on Jest as our testing framework. Jest has a variety of testing solutions, some of which have also been installed for an easier testing experience. Links on how to get started have been included below.

- <a href="https://jestjs.io/docs/getting-started" style="color: white; text-decoration: underline;">Jest</a>
- <a href="https://mswjs.io/docs/getting-started/install" style="color: white; text-decoration: underline;">Mock Service Worker (MSW)</a>
- <a href="https://testing-library.com/docs/react-testing-library/intro" style="color: white; text-decoration: underline;">React Testing Library (RTL)</a>
  - <a href="https://www.robinwieruch.de/react-testing-library/" style="color: white; text-decoration: underline;">RTL Tutorial</a>
- <a href="https://jestjs.io/docs/puppeteer" style="color: white; text-decoration: underline;">Puppeteer</a>
- <a href="https://reactjs.org/docs/test-utils.html" style="color: white; text-decoration: underline;">Included React Test Utilities</a>

<hr style="background-color: #5c5c5c;height: 2.0px;"/>

<h2 style="color:#81DBD8"> Contributors </h2>

<table >
    <td align="center">
        <a href="https://github.com/mayliang021" style="color: white; text-decoration: none;">
            <img src="https://avatars.githubusercontent.com/u/97858299?v=4?s=100" width="100px;" alt=""/>
            <br />
            <sub>
                <b><span style="color: white"> May L.</span> | <span style="color: #81DBD8"> mayliang021</span></b>
            </sub>
        </a>
        <br /><br>
        <a href="https://github.com/TitanInSpirit/Project_Atelier/pulls?q=is%3Apr+is%3Aclosed+author%3Amayliang021" title="Commits">💻</a> &nbsp;
        <a href="https://github.com/TitanInSpirit/Project_Atelier/tree/main/src/components/ratingsAndReviews" title="Component">📖</a> &nbsp;
    </td>
    <td align="center">
        <a href="https://github.com/sbirvin1s" style="color: white; text-decoration: none;">
            <img src="https://avatars.githubusercontent.com/u/101069215?v=4?s=100" width="100px;" alt=""/>
            <br />
            <sub>
                <b><span style="color: white"> Sam I. </span> | <span style="color: #81DBD8">sbirvin1s</span></b>
            </sub>
        </a>
        <br /><br>
        <a href="https://github.com/TitanInSpirit/Project_Atelier/pulls?q=is%3Apr+is%3Aclosed+author%3Asbirvin1s" title="Commits">💻</a> &nbsp;
        <a href="https://github.com/TitanInSpirit/Project_Atelier/tree/main/src/components/questions" title="Component">📖</a> &nbsp;
    </td>
    <td align="center">
        <a href="https://github.com/Symphon-y" style="color: white; text-decoration: none;">
            <img src="https://avatars.githubusercontent.com/u/90964291?v=4?s=100" width="100px;" alt=""/>
            <br />
            <sub>
                <b><span style="color: white"> Travis R. </span> | <span style="color: #81DBD8"> Symphon-y </span></b>
            </sub>
        </a>
        <br /><br>
        <a href="https://github.com/TitanInSpirit/Project_Atelier/pulls?q=is%3Apr+is%3Aclosed+author%3ASymphon-y" title="Commits">💻</a> &nbsp;
        <a href="https://github.com/TitanInSpirit/Project_Atelier/tree/main/src/components/overview" title="Component">📖</a> &nbsp;
    </td>
<table>
</div>
    <div style="position: absolute; top: 150vw; left: -8vw; opacity: .04; background-image: url(Assets/leftFoot.svg); background-repeat: no-repeat; transform: scale(100);">
    &nbsp;
    </div>
        <div style="position: absolute; top: 400vw; margin-left: 90vw; opacity: .04; background-image: url(Assets/Favicon.svg); background-repeat: no-repeat; transform: scale(100);">
    &nbsp;
    </div>
        <div style="position: absolute; top: 850vw; left: -8vw; opacity: .04; background-image: url(Assets/leftFoot.svg); background-repeat: no-repeat; transform: scale(100);">
    &nbsp;
    </div>
</div>
