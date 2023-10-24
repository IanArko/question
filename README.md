# Sample App
- Minute 10: I had chosen the rough tech stack
- Minute 20: Project structure + rough model definitions
- Minute 30: Fighting migrations
- Minute 40: Figured out how to make migrations!
- Minute 50: Added my migrations + getting started docs.
- Minute 60: Basic API + service design. Trying to get them working together.
- Minute 70: Same.
- Minute 80: weird error has been killing me.
```
TypeError: createAuthors is not a function
    at /Users/ianarko/Desktop/question/app/app.js:22:9
    at Layer.handle [as handle_request] (/Users/ianarko/Desktop/question/app/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/ianarko/Desktop/question/app/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/Users/ianarko/Desktop/question/app/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/Users/ianarko/Desktop/question/app/node_modules/express/lib/router/layer.js:95:5)
    at /Users/ianarko/Desktop/question/app/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/Users/ianarko/Desktop/question/app/node_modules/express/lib/router/index.js:346:12)
    at next (/Users/ianarko/Desktop/question/app/node_modules/express/lib/router/index.js:280:10)
    at /Users/ianarko/Desktop/question/app/node_modules/body-parser/lib/read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:206:9)
```
- Minute 90: 

# Getting Started
- Setup settings to connect to your db in the config.json

Sample:
```
{
  "local": {
    "username": "ianarko",
    "password": "password",
    "database": "local_app",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}
```
- `npx sequelize-cli db:migrate --env local`
- `cd ./app`
- `node app.js`