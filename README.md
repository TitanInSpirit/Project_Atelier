# Project Atelier

## Overview:
Our outdated client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. This new project comprises a complete redesign of the retail portal designed to address this concern and modernize the site. This document outlines the features to be implemented as part of the project in its initial release. The following requirements define the new user interface required for customers to browse items in our retail catalog.

---
## Table of Contents:
 - Git Work Flow
 - Installation
  - Dependencies
 - Usage

---
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
        2. if there *are* merge conflicts
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
    - Babel
    - React
    - Webpack
    - Jest

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

</br>

 - ### [Jest Dependencies:](https://jestjs.io/docs/tutorial-react)
   - babel
   - [Enzyme](https://jestjs.io/docs/tutorial-react#enzyme)

```jsx
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

</br>

 - ### [Enzyme Dependencies:](https://jestjs.io/docs/tutorial-react#enzyme)
   - [Enzyme]

```jsx
npm install --save-dev enzyme
```