# Deploying Fake Back-End Server & DataBase Using JSON-SERVER, GitHub, and Heroku

In this article, we will create and host a fake server that we can deal with it as a normal Back-End Server and use all the CRUD Operations using HTTP requests.

# 1.Creating the Fake Server

> You can download the final result [HERE](https://github.com/YoussefZidan/fake-server), Or follow along with me.

- Create a folder and name it `fake-server`.
- Open the terminal and init npm, and make the entry point `server.js`

```
npm init
```

- install [json-server](https://www.npmjs.com/package/json-server).

```
npm i json-server
```

- Add a `start` script.

package.json

```
{
  "name": "fake-server",
  "version": "1.0.0",
  "description": "fake server with fake database",
  "main": "server.js",
  "scripts": {  // <===
    "start": "node server.js" // <===
  },
  "author": "Youssef Zidan",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.16.3"
  }
}
```

- create `.gitignore` file and add `node_modules`.
  .gitignore

```bash
node_modules
```

- Create `server.js` file and paste the following

```js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);
```

- init git and publish your repo to [GitHub](https://github.com/)

```bas
git init
git remote add origin https://github.com/<YourName>/<Repo-Name>.git
git add .
git push --set-upstream origin master
```

> Download the final Repo from [HERE](https://github.com/YoussefZidan/fake-server)

# 2. Creating the DataBase

- Create `db.json` file
- Fill in any data you like, I use [Mockaroo](https://www.mockaroo.com/) to generate dummy data.

db.json

```json
{
    "software": [{
            "id": 1,
            "name": "Apache Netbeans 12.2",
            "description": "NetBeans es un entorno de desarrollo integrado libre, hecho principalmente para el lenguaje de programaci??n Java.",
            "category": "ide",
            "os": [{
                    "type": "Windows",
                    "arch": "x64",
                    "download": "https://archive.apache.org/dist/netbeans/netbeans/12.2/Apache-NetBeans-12.2-bin-windows-x64.exe"
                },
                {
                    "type": "Linux",
                    "download": "https://archive.apache.org/dist/netbeans/netbeans/12.2/Apache-NetBeans-12.2-bin-linux-x64.sh"
                },
                {
                    "type": "macOS",
                    "download": "https://archive.apache.org/dist/netbeans/netbeans/12.2/Apache-NetBeans-12.2-bin-macosx.dmg"
                }
            ],
            "resources": [{
                    "name": "M??s informaci??n",
                    "website": "https://netbeans.apache.org/download/nb122/nb122.html"
                },
                {
                    "name": "Cygwin",
                    "website": "https://www.cygwin.com/"
                }
            ]
        },
        {
            "id": 2,
            "name": "Visual Studio Code",
            "description": "Visual Studio Code es un editor de c??digo fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuraci??n, control integrado de Git, resaltado de sintaxis, finalizaci??n inteligente de c??digo, fragmentos y refactorizaci??n de c??digo.",
            "category": "ide",
            "os": [{
                    "type": "Windows",
                    "arch": "x64 & x32",
                    "download": "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user"
                },
                {
                    "type": "macOS",
                    "download": "https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal"
                },
                {
                    "type": "Linux",
                    "download": "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
                }
            ],
            "resources": [{
                "name": "M??s informaci??n",
                "website": "https://code.visualstudio.com/docs"
            }]
        },
        {
            "id": 3,
            "name": "Postman",
            "description": "Postman es una aplicaci??n que nos permite realizar pruebas API. Es un cliente HTTP que nos da la posibilidad de testear 'HTTP requests' a trav??s de una interfaz gr??fica de usuario, por medio de la cual obtendremos diferentes tipos de respuesta que posteriormente deber??n ser validados.",
            "category": "other",
            "os": [{
                    "type": "Windows",
                    "arch": "x64",
                    "download": "https://dl.pstmn.io/download/latest/win64"
                },
                {
                    "type": "macOS",
                    "download": "https://dl.pstmn.io/download/latest/osx_arm64"
                },
                {
                    "type": "Linux",
                    "arch": "x64",
                    "download": "https://dl.pstmn.io/download/latest/linux64"
                }
            ],
            "resources": [{
                "name": "M??s informaci??n",
                "website": "https://learning.postman.com/docs/getting-started/introduction/"
            }]
        }
    ]
}
```

- Push your work

```bash
git add .
git commit -m "creating the database"
git push
```

# 3. Creating the server

- Create account on [Heroku](https://heroku.com)
- Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) on your computer
- Open the terminal and log in then follow the instructions

```bash
heroku login
```

- Create a project

```bash
heroku create fake-server
```

- Push your app to Heroku

```bash
git push heroku master
```

- Open your created app

```bash
heroku open
```

You will see something like this:

![Heroku App](https://dev-to-uploads.s3.amazonaws.com/i/iwmhzzeqrkd74nvu8v3g.JPG)

Now, You can access and modify resources via any HTTP method
`GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS`

# 4. Creating a Pipeline

A pipeline is simply a connection between your GitHub repo and your Heroku Project.
So, Whenever you update your `db.json` for example and push your changes to a specific branch Heroku will be listening to this branch and build your app with the updated database.

- Open your dashboard on Heroku and choose your app.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/i81x8oskjdhyj2oia2vh.JPG)

- Navigate to `Deploy` tap and create a pipeline, Connect your GitHub with the fake-server repo

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/0pxjlxo43599kcehx82h.JPG)

- Configure auto-deploy and choose the branch of the Pipeline

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ns96n32z0csv0027twzi.JPG)

Now whenever you push the changes to the **selected branch**, the database will be updated and can be accessed via the same base API.
