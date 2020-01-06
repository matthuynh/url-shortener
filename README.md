<p align="center">
  <a href="" rel="noopener">
 <img width=300 height=100 src="https://user-images.githubusercontent.com/19757152/71739910-c06a8f80-2e28-11ea-9d3a-0a72175bf8c4.png" alt="Project logo"></a>
</p>

<p align="center"> A URL shortener</p>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![License](https://img.shields.io/badge/license-GPL-blue.svg)](/LICENSE)

</div>

---

<!-- <p align="center"> Try out a live version <a href="https://google.com">here! </a>
    <br> 
</p> -->

## 📝 Table of Contents
- [Screenshots](#screenshots)
- [About](#about)
- [Getting Started](#getting_started)
<!-- - [Deployment](#deployment) -->
<!-- - [Tests](#tests) -->
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 📷 Screenshots <a name="screenshots"></a>
You can click on each screenshot to expand them.
<img src="https://user-images.githubusercontent.com/19757152/71788253-9662ca00-2fee-11ea-8dd1-76225284cd82.png" width="900">
<img src="https://user-images.githubusercontent.com/19757152/71788251-88ad4480-2fee-11ea-9160-273b49d33199.png" width="900">
<img src="https://user-images.githubusercontent.com/19757152/71788259-a8dd0380-2fee-11ea-9d17-57202a1db321.png" width="900">
<img src="https://user-images.githubusercontent.com/19757152/71788262-b72b1f80-2fee-11ea-924e-c2cdf36f2e2d.png" width="900">

## 🧐 About <a name = "about"></a>
Shrinkly is a URL shortener service. Users can input a long URL into Shrinkly and the service will provide a randomly generated shortened version of that URL. Users may also choose to create their own custom shortened URL.

<!-- Try out a live version [here!](https://google.com) </a> -->

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

#### Step 1: Ensure that you have fulfilled the following prerequisites
- `$ npm -v`
    - `6.13.4`
- `$ node -v`
    - `v10.16.0`

#### Step 2: Clone this repo
- `$ git clone https://github.com/matthuynh/url-shortener.git`

#### Step 3: Install node module dependencies for the server and client
- `$ cd url-shortener/server`
- `$ npm install`

- `$ cd ../client`
- `$ npm install`

#### Step 4: Initialize the Mongo server
- Start up an instance of Mongo on localhost:27017. Be sure to leave this server up.
- `$ mongod`

#### Step 5: Set-up environment variables
- `$ cd url-shortener/config`
- `$ vi default.json`
- Inside this JSON file, fill out the two environment variables `mongoURI` and `baseUrl`
    - Example: ```{
    "mongoURI": "mongodb://localhost:27017/url_shortener",
    "baseUrl": "http://localhost:5000"
}```

#### Step 6: Run the application
- `$ cd url-shortener`
- `$ npm run dev`
    - This starts the servers on the client and server side
    - The client should start on your localhost on port 3000. To view in your browser, navigate to `http://localhost:3000`


<!-- ## 🔧 Running the tests <a name = "tests"></a>
- FINISH THIS
This application has a suite of automated tests that provide smoke testing and sanity checks.
To run these tests, do `$ npm test` in the root directory of the project -->

<!-- ## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system. -->

## ⛏️ Built Using <a name = "built_using"></a>
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@matthuynh](https://github.com/matthuynh)
- [@omardahir99](https://github.com/omardahir99)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Original Node code base was adapted and expanded upon from Brad Traversy's [tutorial](https://www.youtube.com/watch?v=Z57566JBaZQ)
- README format provided by [Kyle Lobo](https://github.com/kylelobo/The-Documentation-Compendium)