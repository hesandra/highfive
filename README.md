# Project Name: HIFIVE

HIFIVE is a platform for technical recruitment of software engineers. Companies can create jobposts with interviews, review applications and provide instant feedback. Applicants are presented with open positions that match their filter criteria. 

## Team: HIFIVE

 - __Product Owner__: Sandra Jayasingha
 - __Scrum Master__: Josh Hickman
 - __Development Team Members__: Andrew Yi

## Table of Contents

1. [Usage](#Usage)

2. [Requirements](#requirements)

3. [Development](#development)
 
## Usage

# Company
 1.[Login/Signup] >> Enter email address and password to create or login to an existing account. 
 
 2.[Edit Profile] >> Edit Profile and provide industry and location, as well as upload picture that represents culture
 
 3.[Jobposts] >> Click on jobposts for the category junior, mid or senior to find all jobposts or delete them. Create new will create a jobpost in the respective category and bring user to the interview section where questions with the respective difficulty level can be chosen. By clicking save, the interview will be attached to the new jobpost. 
 
 4.[Submissions] >> By clicking on 'see submissions' in jobpost view, all submissions will be shown for that specific jobpost. Clicking on watch applicatin will show all videos and code by the applicant. After the review comments and status can be updated. Save will inform the applicant about the decision.

 # Applicant
 1. [Login/Signup] >> Authenticate via Github Auth0 provider strategy
 2. [Edit Profile] >> Add location, and select industries of interest
 3. [Jobposts] >> Explore suggested jobpost matched to you via our state-of-the-art matching algorithim :)
 4. [Interview] >> Take interviews from companies and wait to hear back
 5. [Submissions] >> Watch previous interviews and see where you could of improved in certain areas, you may also recieve feedback from the company here.  
 
## Requirements
- Node version v7.7.4
- Knex installed globally,

## Development
1. npm run "buid_dev" starts webpack development compiler
2. npm run "sass" starts sass file watching
3. npm run "start_dev" starts node server listening on port : 3000

### Installing Dependencies
1. npm install -g knex - knex is needed to run seed & migration files
2. npm install - installs project's dependencies

## How to build project for Production
1. npm run "build_prod" compiles minified bundle for production
2. npm start starts node server listening on port 3000 in production mode.


