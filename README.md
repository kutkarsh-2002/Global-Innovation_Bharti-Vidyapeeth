## Theme
Fintech
## Tech-Stack Used
HTML, CSS, Javascript, React.js, jquery, Bootstrap, Owl Carousel, Figma!
## Purpose of the Project
This is a Fintech based platform is basically categorized in three levels.

1. Connecting startups with Incubation Centre from all across the country.
2. Providing top-class mentors individually for startups which have passed the incubation period.
3. Lastly, raising funds from Venture Capitalist and Angel Investors to provide the startup to grow sky-high.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# How to contibute :scroll:

### 0. Star The Repo :star2:

Star the repo by pressing the topmost-right button to start your wonderful journey.

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [Global-Innovation_Bharti-Vidyapeeth](https://github.com/kutkarsh-2002/Global-Innovation_Bharti-Vidyapeeth) by using the **Fork** button on top-right of your screen.

### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone (download) it to local machine using

```sh
$ git clone https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git
```
> This makes a local copy of the repository in your machine.

Once you have cloned the `Global-Innovation_Bharti-Vidyapeeth` repository in Github, move to that folder first using change directory command on Linux, Mac, and Windows(PowerShell to be used).

```sh
# This will change directory to a folder Hacktoberfest-21
$ cd Global-Innovation_Bharti-Vidyapeeth
```
ove to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git (fetch)
origin  https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git (push)
```
Now, let's add a reference to the original [Global-Innovation_Bharti-Vidyapeeth](https://github.com/kutkarsh-2002/Global-Innovation_Bharti-Vidyapeeth) repository using

```sh
$ git remote add upstream https://github.com/kutkarsh-2002/Global-Innovation_Bharti-Vidyapeeth.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git (fetch)
origin    https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git (push)
upstream  https://github.com/Remote_Username/Global-Innovation_Bharti-Vidyapeeth.git (fetch)
upstream  https://github.com/Remote_Username/Global-Innovation_Bharti-Vidyapeeth.git (push)
```
`In your case, you will see`
```sh
$ git remote -V
origin    https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git (fetch)
origin    https://github.com/Your_Username/Global-Innovation_Bharti-Vidyapeeth.git (push)
upstream  https://github.com/kutkarsh-2002/Global-Innovation_Bharti-Vidyapeeth.git (fetch)
upstream  https://github.com/kutkarsh-2002/Global-Innovation_Bharti-Vidyapeeth.git (push)
```
### 4. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `master` branch
$ git checkout master

# Reset local `master` branch to match the `upstream` repository's `master` branch
$ git reset --hard upstream/master

# Push changes to your forked `Hacktoberfest-21` repo
$ git push origin master
```
### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/kutkarsh-2002/Global-Innovation_Bharti-Vidyapeeth/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout BranchName
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

Finally, go to your repository in the browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effort.