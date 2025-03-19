# Animal API

This is a RESTful API for managing animal data. It provides CRUD functionality to create, read, update, and delete animal records.
Users must log in to interact with the API. I have added authMiddleware which will prevent access to the routes without a succesful log in session, but no password in required.
The data is stored in MongoDB and includes details such as name, diet, habitat, diet and a fun fact related to the animal.
It is aimed for toddler learning so it uses simple facts stored in the database.

## 1. Object Modeling

The API uses the following data models for **animals** and **users**:

```
const animalSchema 
{
  "_id": "ObjectId",
  "name": "string",
  "diet": "string",
  "habitat": "string",
  "funFact": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

```
const userSchema
 {
    name: { type: String, required: true },
  },
```

## 2. Resource URIs

| Resource                         | Endpoint                          | Description                      |
|----------------------------------|-----------------------------------|----------------------------------|
| Create user                      | `/api/users/create`               | Create user                      |
| Login user                       | `/api/users/login`                | Login user                       |
| Logout user                      | `/api/users/logout`               | Logout user                      |
| Animals                          | `/api/animals`                    | Get all animals                  |
| Animal                           | `/api/animals/:id`                | Get a specific animal            |
| Create Animal                    | `/api/animals`                    | Add a new animal                 |
| Update Animal                    | `/api/animals/:id`                | Update an animal                 |
| Delete Animal                    | `/api/animals/:id`                | Remove an animal                 |
| Add bulk animals                 | `/api/animals/bulk`               | Add animals by bulk              |
| Retrieve animals by diet         | `/api/animals/diet/:diet`         | Retrieve animals by diet         |
| Retrieve animals by habitat      | `/api/animals/habitat/:habitat`   | Retrieve animals by habitat      |
| Game to guess animal by fun fact | `/api/animals/game/guess-funfact` | Game to guess animal by fun fact |
| Check the fun fact guess game    | `/api/animals/game/check-guess`   | Check the fun fact guess game    |

## 3. Resource Representations

### JSON Representation

**Animal**

```
{ 
  "_id": "60d5ec49f72e4e3d6c3a4b89",
  "name": "Elephant", 
  "diet": "Herbivore", 
  "habitat": "Forest", 
  "funFact": "Elephants use their trunks to drink water",
  "createdAt": "2025-03-13T12:00:00Z", 
  "updatedAt": "2025-03-13T12:00:00Z"
}
```

**User**
```
{
	"message": "Welcome, Sue! Let's learn about animals!"
}
```

```
{
	"message": " Sue Logged out successfully "
}
```

## 4. HTTP Methods

| Method    |   Endpoint                        |   Description                    |
|-----------|-----------------------------------|----------------------------------|
| POST      | `/api/users/create`               | Create user                      |
| POST      | `/api/users/login`                | Login user                       |
| POST      | `/api/users/logout`               | Logout user                      |
| GET       | `/api/animals`                    | Retrieve all animals             |
| GET       | `/api/animals/:id`                | Retrieve a specific animal       |
| POST      | `/api/animals`                    | Create a new animal              |
| PUT       | `/api/animals/:id`                | Update an existing animal        |
| DELETE    | `/api/animals/:id`                | Remove an animal                 |
| POST      | `/api/animals/bulk`               | Add animals by bulk              |
| GET       | `/api/animals/diet/:diet`         | Retrieve animals by diet         |
| GET       | `/api/animals/habitat/:habitat`   | Retrieve animals by habitat      |
| GET       | `/api/animals/game/guess-funfact` | Game to guess animal by fun fact |
| POST      | `/api/animals/game/check-guess`   | Check the fun fact guess game    |

### Getting Started

#### Prerequisites

- Node.js
- MongoDB
- npm

#### Installation

1. Clone the repository:

- git clone <https://github.com/Sue-Holding/Restful-API.git>

2. Install dependencies:

- npm install

3. Start the server:

- npm run dev

#### Testing

This application can be tested with Insomnia with the HTTP Methods above as well as using cURL commands

- `curl -v http://localhost:3000` To view all animals
- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Tiger", "diet": "Carnivore", "habitat": "Jungle", "funFact": "Tigers are strong swimmers."}' http://localhost:3000/animals/add` Add a new animal
- `curl -X PUT -H "Content-Type: application/json" -d '{"diet": "Omnivore"}' http://localhost:3000/animals/update/<animal_id>` To update animal
- `curl -X DELETE http://localhost:3000/animals/delete/<animal_id>` To delete animal
- `curl -X GET http://localhost:3000/animals/diet/Herbivore` To filter animal by diet
- `curl -X GET http://localhost:3000/animals/habitat/forest` To filter animal by habitat
- `curl -X GET http://localhost:3000/animals/guess` To play the Fun Fact guessing game



## Notes

- The login system is for session tracking. It does require authentication but no password needs to be provided.

- The API provides a predefined list of about a dozen animals, but new ones can be added dynamically.
