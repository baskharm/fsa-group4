# fsa-group4
Project on location-based gaming App.

## Group Members
<table>
 
 <td align="center"><a href="https://github.com/Rajeshwari-Rudra"><img src="https://avatars1.githubusercontent.com/u/60014358?s=460&u=b6e1e1ffa7551e5140b5a565a73ba572c362addc&v=4" width="100px;" alt=""/><br /><sub><b>Rajeshwari Rudravaram</b></sub></a><br /><a href="https://github.com/Bhaskar2909/fsa-group4/commits?author=Rajeshwari-Rudra" title="Code">💻</a> <a attid="8742" href="https://www.linkedin.com/in/rajeshwari-rudravaram-52b53095/" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>
 
 <td align="center"><a href="https://github.com/Bhaskar2909"><img src="https://avatars2.githubusercontent.com/u/60013714?s=400&u=acd92b4e2b14cd3a5c6930878eadae21ccf74cb3&v=4" width="100px;" alt=""/><br /><sub><b>Bhaskar Reddy Minupuri</b></sub></a><br /><a href="https://github.com/Bhaskar2909/fsa-group4/commits?author=Bhaskar2909" title="Code">💻</a> <a attid="8742" href="" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>
 
 </table>

## Full Stack App
 - A touch-based app that checks our current location and determines the target, and if a user touches or clicks repeatedly on first color then the device compares the current location coordinates with the target and tells the user whether they are inside the treasure location or not.
 - If a user touches or clicks the first color of app then it provides a valid treasure location.
 - If a user is away from target location then, User will hear information to help me and see the clue to find the trasure location.
 - Finally, when user reaches the destination then the user will hear and see the confirmation of reaching the treasure location.

## Stack
* Platform: Node(Version - v15.1.0)
* Web Framework : Express
* View engine : EJS
* ORM(Object Relational Mapping) : Sequelize
* Data store: PostgreSQL
* API : Google Maps
* Coding standards : Enforce AirBnB/Prettier/ESlint

## CI/CD
- Auto-deploy from main repo is required.


## Prerequisites
- Node.js(comes with npm)
- GitHub
- TortoiseGit
- VS Code

## Development of App
- Data store for Development: PostgreSQL

# Hosted App Link: 
[Heroku hosted app link](https://fsagroup4.herokuapp.com/)

## Project
- [Project status on Kanban Board](https://github.com/Bhaskar2909/fsa-group4/projects/1)

## User Stories

1. [ ] As a player, I want to touch/click the first color to request a valid (treasure) location.
1. [ ] As a player, I want to hear confirmation that a location has been selected (so I can I can begin searching). 
1. [ ] As a player, I want to touch/click the second color:  If I am outside the treasure location, I want to hear information to help me find the treasure location (clue? how far away? what direction to walk?)
1. [ ] As a player, I want to touch/click the second color: If I am inside the treasure location, I want to hear and see confirmation that I have earned this treasure.
1. [ ] As a player, after confirmation that I have earned a location: I want the game to ask me if I would like to select another location. If I select yes, we reset and begin again.

## CRUD operations for Location
- User can enable all CRUD options (create, read, update, delete) on locations.
   * create.ejs
   * delete.ejs
   * details.ejs
   * edit.ejs
   * index.ejs
- Locations are based on circles.

## Guidelines to Contribute
* In order to get someone's repo into your local machine you should first fork it into repo then Clone it to your local machine.

### Step 1 - To get the fresh code

1. Everytime you should pull the fresh code from shared cloud repo and then add or modify the code then commit it by using git add and git push commands below line interface
1. Update your cloud repo by using git add and git push commands in command .

```Powershell
git clone "https://github.com/Bhaskar2909/fsa-group4"
git pull 
git add .
git push
```

### Step 2 - Make your contributions

You can test the code by formatting it with Prettier and lint (clean it up) with ESLint.
You can check the scripts in package.json.
- Add required dependencies by installing them.
1. While code is fresh, make your local edits.
2. Verify the app still runs & standarize your code.

```PowerShell
npm install
npm run start

npm run prettier
npm run lint
npm run lint-fix
```

Fix your code as suggested by the linter.

### Step 3 - To save and share your work

1. Git add & git commit locally.
2. Git push to the origin.
3. In your updated GitHub repo look for "Pull Request".
4. Follow instructions (click the green buttons) to prepare a "pull request" into the main repo.

### Step 4 - Refresh before making new contributions

1. Git pull from shared repo to your laptop
2. Git add by new files from root folder on down (git add .)
3. Git push to your origin repo (your forked repo in the cloud)

```Powershell
git pull "https://github.com/Bhaskar2909/fsa-group4.git"
git add .
git push
```

## Start Options

Start the app by running npm run start.
Until error handling is complete, a clean shutdown is better.
Once error handling is complete, use npm run dev to start with nodemon.

```PowerShell
npm run start
```

View the application locally at <http://localhost:3000/>

## To Publish an App
- [Heroku Login](https://id.heroku.com/login)
* Data store for production: PostgreSQL

## References
- [Web-app fall 2020 app](https://github.com/denisecase/web-app-2020-fall)
- [Talk2-group-7](https://github.com/KHARIKA17/talk-2-group-7)

## Remainders
- Avoid spaces in folders and file names.
- Don't work on stale code - ALWAYS pull first
- Don't work on your desktop - organize your repos either by class or under a common folder (e.g., github or other).
- Deploy as you work - if everything passes tests, do add / commit / push and deploy frequently (several times a week). 
- Do hard things early. Do not delay figuring out the hard questions.
