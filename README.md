# Data Manager

This project implement a service od import and export data in Dojot project.


## Getting Started

To get start with the project, you have two alternatives:
* 1 - Run it on your machine;
* 2 - Run this project with docker-compose. (Together Dojot.)

### 1 - Running on your machine

Firt of all, we need to install Node.js. For this, you can see the steps on [Node web site](https://nodejs.org/en/).

Installing node, you automatically install npm. So go the project and run

```
npm install
```

After that, you will get the IP addres of Flowbroker service and Device manager server in dojot and export a environment variables with data.

This command maybe will help you to get a IP address.

```
docker container inspec <<container_name>>
```

```
export FLOW_BROKER_URL=<ip_address>
export DEVICE_MANAGER_URL=<ip_address>
```


After, you need to run.

```
npm run startTest
```

With that, all the projet already is up.

To use the API call's, you can see the api documentation:


### 2 - Running this project on docker-compose.

After dojot is up, you can only call the API.

See the API documentation:


## Built With

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) - Dependency Management
* [Express](https://expressjs.com/) - The web framework used


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
