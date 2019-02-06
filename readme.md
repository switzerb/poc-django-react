
# Django & React integration

Local personal proof-of-concept to explore integration approaches to integration of React components with an existing Django installation.

### Requirements

* Docker
* docker-compose
* node greater than 6.0
* npm

### Local Development

To spin up the container and development environment
```
  $ git clone https://github.com/switzerb/poc-django-react.git
  $ cd poc-django-react
  $ docker-compose up
```
To compile the React components for integration
```
  $ cd react-nfp
  $ npm install
  $ npm run build
```
