## ListLink

Welcome to [**ListLink**](http://okenso.com:3000/)! ListLink allows you to create highly customizable lists and share them with your friends and colleagues, making it the perfect tool for everything from shopping lists to project planning!

* Track your progress with built-in checklist functionality
* Leave comments on lists both you own and those you have access to
* Control who gets to see what parts of your list tree
* Google and GitHub integration make it easy to join ListLink now!

### Joining ListLink

Joining is as simple as 1, 2, 3!

1. Visit the [ListLink](http://okenso.com:3000/) website
2. Sign in with either your Google or your GitHub account
3. Once you have allowed ListLink to access your credentials, you can begin creating lists!

### Deploying ListLink

ListLink was built with [MEAN.js](https://meanjs.org/), so installing a local copy is a breeze.

After cloning the repository, you'll need to install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.org/).

Once you have installed Node.js, ensure you have a recent copy of [npm](https://www.npmjs.com/) installed. Then, run the following command:

```bash
$ npm install
```

This will install all the dependencies specified in the `package.json` file. Once this is complete, run:

```bash
$ node server
```

Navigate to `http://localhost:3000/` in your browser to verify that it is working. If all goes well, congratulations, you are now an official ListLink Ninja!

#### Notes

If you do intend to deploy ListLink, please note the following:

* ListLink is based on the MEAN stack. We are using MongoDB, Express.js, Angular.js, and Node.js.
* MongoDB handles all the data storage based on NoSQL. This allows us to pass data freely to the server, since there is no equivilent to "SQL Injection" as experienced by relational databases.
* Bootstrap handles much of the styling. The [Swig](http://paularmstrong.github.io/swig/) template engine was used to display the contents; it was the default template engine used in MEAN.js, and we stuck with it because it works nicely with default HTML markup, and its system of [tags](http://paularmstrong.github.io/swig/docs/tags/) was a nice alternative to excessive use of JavaScript
