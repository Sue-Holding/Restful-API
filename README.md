# Animal API

This is a RESTful API for managing animal data. It provides CRUD functionality to create, read, update, and delete animal records.
Users must log in to interact with the API. I have added authMiddleware which will prevent access to the routes without a succesful log in session, but no password in required.

The data is stored in MongoDB and includes details such as name, diet, habitat, diet and a fun fact related to the animal.
It is aimed for toddler learning so it uses simple facts stored in the database.

## 1. Object Modeling

The API uses the following data models for **animals** and **users**.
Only name is required for both models.

### Animal Schema

```
const animalSchema = {
  name: {
    type: String,
    required: true,
  },
  diet: String,
  habitat: String,
  funFact: String,
};
```

### User Schema

```
const userSchema = {
  name: { 
    type: String, 
    required: true 
  },
},
```

## 2. Resource URIs

| Resource                         | Endpoint                          | Description                      |
|----------------------------------|-----------------------------------|----------------------------------|
| Create user                      | `/api/users/create`               | Create user                      |
| Login user                       | `/api/users/login`                | Login user                       |
| Logout user                      | `/api/users/logout`               | Logout user                      |
| Animals                          | `/api/animals/getall`             | Get all animals                  |
| Animal                           | `/api/animals/get/:id`            | Get a specific animal            |
| Create Animal                    | `/api/animals/add`                | Add a new animal                 |
| Update Animal                    | `/api/animals/update/:id`         | Update an animal                 |
| Delete Animal                    | `/api/animals/delete/:id`         | Remove an animal                 |
| Add bulk animals                 | `/api/animals/addbulk`            | Add animals by bulk              |
| Retrieve animals by diet         | `/api/animals/diet/:diet`         | Retrieve animals by diet         |
| Retrieve animals by habitat      | `/api/animals/habitat/:habitat`   | Retrieve animals by habitat      |
| Game to guess animal by fun fact | `/api/animals/game/guess-funfact` | Game to guess animal by fun fact |
| Check the fun fact guess game    | `/api/animals/game/check-guess`   | Check the fun fact guess game    |

## 3. Resource Representations

### Example: Animal JSON Representation

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

### Example: User JSON Representation

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

Base URL: `https://restful-api-animals.onrender.com`

| Method    |   Endpoint                        |   Description                    |
|-----------|-----------------------------------|----------------------------------|
| POST      | `/api/users/create`               | Create user                      |
| POST      | `/api/users/login`                | Login user                       |
| POST      | `/api/users/logout`               | Logout user                      |
| GET       | `/api/animals/getall`             | Retrieve all animals             |
| GET       | `/api/animals/get/:id`            | Retrieve a specific animal       |
| POST      | `/api/animals/add`                | Create a new animal              |
| PUT       | `/api/animals/update/:id`         | Update an existing animal        |
| DELETE    | `/api/animals/delete/:id`         | Remove an animal                 |
| POST      | `/api/animals/addbulk`            | Add animals by bulk              |
| GET       | `/api/animals/diet/:diet`         | Retrieve animals by diet         |
| GET       | `/api/animals/habitat/:habitat`   | Retrieve animals by habitat      |
| GET       | `/api/animals/game/guess-funfact` | Game to guess animal by fun fact |
| POST      | `/api/animals/game/check-guess`   | Check the fun fact guess game    |

## 5. Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository:

- git clone <https://github.com/Sue-Holding/Restful-API.git>

2. Install dependencies:

- npm install
- npm run build
- npm start

3. Start the server:

- npm run dev

## 6. Testing

This API can be tested using Insomnia or cURL.

### Example cURL Commands

#### Base URL: `https://restful-api-animals.onrender.com`

Create a user:

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Jo"}' -c cookies.txt https://restful-api-animals.onrender.com/api/users/create`

Login user:

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Sue"}' -c cookies.txt https://restful-api-animals.onrender.com/api/users/login`

Logout user:

- `curl -X POST -H "Content-Type: application/json" -b cookies.txt -c cookies.txt https://restful-api-animals.onrender.com/api/users/logout`

Get all animals:

- `curl -X GET -b cookies.txt https://restful-api-animals.onrender.com/api/animals/getall`

Get animal bu ID:

- `curl -X GET -b cookies.txt https://restful-api-animals.onrender.com/api/animals/get/:id`

Add new animal:

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Tiger", "diet": "Carnivore", "habitat": "Jungle", "funFact": "This animal is a strong swimmer."}' -b cookies.txt https://restful-api-animals.onrender.com/api/animals/add`

Update animal:

- `curl -X PUT -H "Content-Type: application/json" -d '{"diet": "Omnivore"}' -b cookies.txt https://restful-api-animals.onrender.com/api/animals/update/:id`

Delete animal:

- `curl -X DELETE -b cookies.txt https://restful-api-animals.onrender.com/api/animals/delete/:id`

Filter animals by diet:

- `curl -X GET -b cokies.txt https://restful-api-animals.onrender.com/api/animals/diet/Herbivore`

Filer animals by habitat:

- `curl -X GET -b cookies.txt https://restful-api-animals.onrender.com/api/animals/habitat/forest`

Play the Fun Fact animal guessing game:

- `curl -X GET -b cookies.txt https://restful-api-animals.onrender.com/api/animals/game/guess-funfact`

#### Local URL: `http://localhost:3000`

Create a user:

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Jo"}' -c cookies.txt http://localhost:3000/api/users/create`

Login user:

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Sue"}' -c cookies.txt http://localhost:3000/api/users/login`

Logout user:

- `curl -X POST -H "Content-Type: application/json" -b cookies.txt -c cookies.txt http://localhost:3000/api/users/logout`

Get all animals:

- `curl -X GET -b cookies.txt http://localhost:3000/api/animals/getall`

Get animal by ID:

- `curl -X GET -b cookies.txt http://localhost:3000/api/animals/get/:id`

Add animal:

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "Tiger", "diet": "Carnivore", "habitat": "Jungle", "funFact": "This animal is a strong swimmer."}' -b cookies.txt http://localhost:3000/api/animals/add`

Update animal:

- `curl -X PUT -H "Content-Type: application/json" -d '{"diet": "Omnivore"}' -b cookies.txt http://localhost:3000/api/animals/update/:id`

Delete animal:

- `curl -X DELETE -b cookies.txt http://localhost:3000/api/animals/delete/:id`

Filter animals by diet:

- `curl -X GET -b cokies.txt http://localhost:3000/api/animals/diet/Herbivore`

Filter animals by habitat:

- `curl -X GET -b cookies.txt http://localhost:3000/api/animals/habitat/forest`

Play animal Fun Fact guessing game:

- `curl -X GET -b cookies.txt http://localhost:3000/api/animals/game/guess-funfact`

## Notes

- The login system is for session tracking. It does require authentication but no password needs to be provided.

- The API provides a predefined list of about a dozen animals, but new ones can be added dynamically.
