From Udemy react course. Requires node and npm. Modification of firebase.temp.js component in src/firebase required prior to deployment (see below).  

# Dev Server  
yarn run dev-server  

# Prod Server  
yarn run build:prod  
node server/server.js  

# Firebase Setup  
1. Create new Firebase project at https://console.firebase.google.com  
2. Database - Copy and paste Rules from database_rules.json in src/firebase  
3. Authentication - Choose sign-in method (Google, Facebook, etc.)  
4. From Project Overview, choose "Add Firebase to your web app", copy config to src/firebase/firebase.temp.js  
5. Rename firebase.temp.js to firebase.js  
Don't forget to whitelist any local or public domains in firebase console