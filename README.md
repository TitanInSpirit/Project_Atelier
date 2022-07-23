# Project Atelier

## Overview:

Our team was tasked with creating a complete redesign of an outadated client-facing retail web-portal including but not limited to branding, and website functionality. This project comprises a complete redesign of the retail portal intended to address this concern and modernize the site. This document outlines the design and features our team implemented.

---

## Table of Contents:

- ### Components
  - #### Overview
  - #### Questions & Answers
  - #### Ratings & Reviews
- ### Git Work Flow
- ### Installation
  - #### Dependencies
- ### Testing

---

## Components

### Overview

#### Expanding Product Image

![Expanding Product Picture](https://media.giphy.com/media/kH68V5Oa389YjHJhOd/giphy.gif)

- talk about things here

#### Style Selector

![Style Selector](https://media.giphy.com/media/UTUQxOIuzmxGlWXmOZ/giphy.gif)

- talk about things here

#### Automatic Scrolling

![Automatic Scrolling](https://media.giphy.com/media/C0lNeCSlrrNMG4oek6/giphy.gif)

- talk about things here

### Questions & Answers

### Ratings & Reviews

## ![Star Filter](https://media.giphy.com/media/uuzVZLv4BWPzOIIUMl/giphy.gif)

## Git Work Flow

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

1. Push to the branch you are working on

```jsx
git push origin some-new-branch
```

- Other useful branch commands

  ```jsx
  git remote -v // lists the branches available
  git branch // shows the current branch you are working on
  ```

1. Create a Pull Request from your branch on Github with a message asking for approval
2. If your master branch is behind

   1. switch branch to master

   ```jsx
   git status // checks status of updates
   git checkout master // changes to the master branch
   git pull origin master /* pulls the changes from github to your local
   master branch */
   ```

3. For a new task, Create a new branch as before

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

---

## Installation:

How can another developer get your project up and running on their own? What dependencies are required? Are there environmental requirements? Be specific, and outline steps to take in order to get the project running.

- Run npm install

- Dependencies:
  - nodemon
  - Babel
  - React
  - Webpack

</br>

- ### React Dependencies:
  - React for UI component librabry
  - ReactDOM for connecting the UI component library to the DOM

```jsx
npm install react react-dom
```

</br>

- ### Webpack Dependencies:
  - webpack for bundling our code
  - webpack-cli for terminal commands around bundling our code
  - webpack-dev-server for hot reloading functionality.

```jsx
npm install webpack-cli webpack-dev-server --dev
```

</br>

- ### Babel Dependencies:
  - @babel/core for translations between js versions.
  - @babel/preset-env for latest support of js versions along with polyfils for browser support.
  - @babel/preset-react for react support that includes jsx.

```jsx
npm install @babel/core @babel/preset-env @babel/preset-react --dev
```

---

## Testing:

We have decided to use Jest as our testing framework. Jest has a variety of testing solutions, some of which have also been installed for an easier testing experience. Links on how to get started have been included below.

- ### [Jest](https://jestjs.io/docs/getting-started)
- ### [Mock Service Worker (MSW)](https://mswjs.io/docs/getting-started/install)
- ### [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro)
  - #### [RTL Tutorial](https://www.robinwieruch.de/react-testing-library/)
- ### [Puppeteer](https://jestjs.io/docs/puppeteer)
- ### [Included React Test Utilities](https://reactjs.org/docs/test-utils.html)

---

## Contributors

<table>
    <td align="center">
        <a href="https://github.com/mayliang021">
            <img src="https://avatars.githubusercontent.com/u/97858299?v=4?s=100" width="100px;" alt=""/>
            <br />
            <sub>
                <b>May L. | mayliang021</b>
            </sub>
        </a>
        <br /><br>
        <a href="https://github.com/TitanInSpirit/Project_Atelier/pulls?q=is%3Apr+is%3Aclosed+author%3Amayliang021" title="Commits">💻</a> &nbsp;
        <a href="https://github.com/TitanInSpirit/Project_Atelier/tree/main/src/components/ratingsAndReviews" title="Component">📖</a> &nbsp;
    </td>
    <td align="center">
        <a href="https://github.com/sbirvin1s">
            <img src="https://avatars.githubusercontent.com/u/101069215?v=4?s=100" width="100px;" alt=""/>
            <br />
            <sub>
                <b>Sam I. | sbirvin1s</b>
            </sub>
        </a>
        <br /><br>
        <a href="https://github.com/TitanInSpirit/Project_Atelier/pulls?q=is%3Apr+is%3Aclosed+author%3Asbirvin1s" title="Commits">💻</a> &nbsp;
        <a href="https://github.com/TitanInSpirit/Project_Atelier/tree/main/src/components/questions" title="Component">📖</a> &nbsp;
    </td>
    <td align="center">
        <a href="https://github.com/Symphon-y">
            <img src="https://avatars.githubusercontent.com/u/90964291?v=4?s=100" width="100px;" alt=""/>
            <br />
            <sub>
                <b>Travis R. | Symphon-y</b>
            </sub>
        </a>
        <br /><br>
        <a href="https://github.com/TitanInSpirit/Project_Atelier/pulls?q=is%3Apr+is%3Aclosed+author%3ASymphon-y" title="Commits">💻</a> &nbsp;
        <a href="https://github.com/TitanInSpirit/Project_Atelier/tree/main/src/components/overview" title="Component">📖</a> &nbsp;
    </td>
<table>
