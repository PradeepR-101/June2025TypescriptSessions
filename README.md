
project setup
=================

node jsand vs code should be installed in our machine
npm packages comes in node js itself

npm install -g typescript    - windows  .. -g menas globaly installing in system
sudo npm install -g typescript  - mac  .. sudo means admin user

npm init -y     --> -y means in current project folder initialize the npm
this command will create package.json

npm install -D typescript   --> -D means dev dependency install type script only for this project locally instead of global but this command is optional if you install first command globally
safer side execute this command as well

to check typescript comiler installed in our machine use
npx tsc -v      --> here npx menas node runner

npx tsc --init
this command will create tsconfig.json file

add "type":"module" in package.json


then create src folder and then add ts files like index.ts
then run npx tsc src/index.ts

you can install coderunner in vs code extension ie .run
and directly we can run through that top code runner icon
but we need to add "typescript":"npx tsx" in settings.json file under coderunner.executorMap
go to settings --> search for coderunner.executorMap --> edit settings in settings.json file

if we get error
npm install tsx --save-dev

if we run onlt tsc command then all ts files inside the src converted into js files in dist folder


if you provide "moduleResolution": "bundler" in tsconfig.json file then you no need to add the js extensions while importing the file
