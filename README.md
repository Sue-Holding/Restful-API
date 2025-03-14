# Animal API

This is a RESTful API for managing animal data. It provides CRUD functionality to create, read, update, and delete animal records. Users must log in (without authentication) to interact with the API.
The data is stored in MongoDB and includes details such as location, diet, species, and name.

## 1. Object Modeling

The API uses the following data model for animals: <br>

{ <br>
  "_id": "ObjectId", <br>
  "name": "string", <br>
  "species": "string", <br>
  "diet": "string", <br>
  "location": "string", <br>
  "funFact": "string", <br>
  "createdAt": "Date", <br>
  "updatedAt": "Date" <br>
}

## 2. Resource URIs

| Resource        | Endpoint            | Description                |
|-----------------|---------------------|----------------------------|
| Animals         | `/api/animals`      | Get all animals            |
| Animal          | `/api/animals/:id`  | Get a specific animal      |
| Create Animal   | `/api/animals`      | Add a new animal           |
| Update Animal   | `/api/animals/:id`  | Update an animal           |
| Delete Animal   | `/api/animals/:id`  | Remove an animal           |
| Login           | `/api/login`        | Log in (not authenticated) |

## 3. Resource Representations

### Animal Representation (JSON)

{ <br>
  "_id": "60d5ec49f72e4e3d6c3a4b89", <br>
  "name": "African Elephant", <br>
  "species": "Loxodonta africana", <br>
  "diet": "Herbivore", <br>
  "location": "Savannah, Africa", <br>
  "funFact": "Elephants use their trunks to drink water", <br>
  "createdAt": "2025-03-13T12:00:00Z", <br>
  "updatedAt": "2025-03-13T12:00:00Z" <br>
}

## 4. HTTP Methods

| Method    |   Endpoint         |   Description              |
|-----------|--------------------|----------------------------|
| GET       | `/api/animals`     | Retrieve all animals       |
| GET       | `/api/animals/:id` | Retrieve a specific animal |
| POST      | `/api/animals`     | Create a new animal        |
| PUT       | `/api/animals/:id` | Update an existing animal  |
| DELETE    | `/api/animals/:id` | Remove an animal           |
| POST      | `/api/login`       | Log in (no authentication) |

### Getting Started

#### Prerequisites

- Node.js
- MongoDB
- npm

#### Installation

1. Clone the repository:

- git clone <https://github.com/yourusername/animal-api.git>
- cd animal-api

2. Install dependencies:

- npm install

3. Start the server:

- npm start

## Notes

- The login system is for session tracking and does not require authentication.

- The API provides a predefined list of about a dozen animals, but new ones can be added dynamically.
