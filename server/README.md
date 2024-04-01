# RESTful services

## Install

    root > npm install

## Run the app

    root > npm start

# REST API example application

The REST API to the example app is described below.

## Get root

### Request

`GET /`

    curl -i -H 'Accept: application/json' http://localhost:3000

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    { "message": "RESTful services it's working!" }

## Get a Book List

### Request

`GET /api/books`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/books

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    [ { ... }, { ... }, { ... } ]

## Get a specific Book

### Request

`GET /api/books/660adcc629cdc201eca6f073`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/books/660adcc629cdc201eca6f073

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    { ... }

## Get a non-existent Book

### Request

`GET /api/books/blabla`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/books/blabla

### Response

    HTTP/1.1 404 Not Found
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json

    { "message": "Book not found" }

## Create another new Book

### Request

`POST /api/books`

    curl -i -H 'Accept: application/json, X-Authorization: {token}' -d { ... } http://localhost:3000/api/books

### Response

    HTTP/1.1 200 OK
    Status: 201 OK
    Connection: close
    Content-Type: application/json

    { ... }

## Change a Book's state

### Request

`PUT /api/books/660adcc629cdc201eca6f073`

    curl -i -H 'Accept: application/json, X-Authorization: {token}' -d {...} -X PUT http://localhost:3000/api/books/660adcc629cdc201eca6f073

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    { ... }

## Delete a Book

### Request

`DELETE /api/books/660adcc629cdc201eca6f073`

    curl -i -H 'Accept: application/json, X-Authorization: {token}' -X DELETE http://localhost:3000/api/books/660adcc629cdc201eca6f073

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    { ... }

## Create a User

### Request

`POST /api/users/register`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/users/register

### Response

    HTTP/1.1 200 OK
    Status: 201 OK
    Connection: close
    Content-Type: application/json

    { ... }

## Login a User

### Request

`POST /api/users/login`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/users/login

### Response

    HTTP/1.1 200 OK
    Status: 201 OK
    Connection: close
    Content-Type: application/json

    { ... }
