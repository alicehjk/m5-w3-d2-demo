# Book List App

A simple MERN-style CRUD application for managing a list of books.  
You can **Create, Read, Update, and Delete** books using MongoDB, Express, and React.

---

## Getting Started

### 1. Start MongoDB
Make sure MongoDB is running locally.

```bash
mongod
```

> On macOS with Homebrew:
> ```bash
> brew services start mongodb-community
> ```

---

### 2. Seed the Database
Import the sample data from `db.json` into your MongoDB database.

From inside the **`server/`** folder:

```bash
mongoimport --db booklist --collection books --file ../db.json --jsonArray
```

Verify the data was inserted:

```bash
mongosh
use booklist
db.books.find()
```

Expected output (sample):
```json
[
  { "_id": ObjectId(...), "title": "Da Vinci Code", "author": "Dan Brown" },
  { "_id": ObjectId(...), "title": "Lord of The Rings", "author": "J.R.R. Tolkien" },
  { "_id": ObjectId(...), "title": "The Alchemist", "author": "Paulo Coelho" },
  { "_id": ObjectId(...), "title": "A Tale of Two Cities", "author": "Charles Dickens" }
]
```

---

### 3. Run the Backend
Start the Express server:

```bash
cd server
npm install   # only needed first time
npm start
```

Server runs at: **http://localhost:4000**

Test it directly:
```bash
curl http://localhost:4000/api/books
```

---

### 4. Run the Frontend
Start the React client:

```bash
cd react-app
npm install   # only needed first time
npm start
```

Frontend runs at: **http://localhost:3000**

---

## Features
- View all books (Read)
- Add a new book (Create)
- Edit an existing book (Update)
- Delete a book (Delete)

---

## API Endpoints

Base URL: `http://localhost:4000/api/books`

### Get all books
```bash
curl http://localhost:4000/api/books
```

### Create a new book
```bash
curl -X POST http://localhost:4000/api/books   -H "Content-Type: application/json"   -d '{"title": "New Book", "author": "Alice Kim"}'
```

### Update a book
```bash
curl -X PUT http://localhost:4000/api/books/<id>   -H "Content-Type: application/json"   -d '{"title": "Updated Title", "author": "Updated Author"}'
```

### Delete a book
```bash
curl -X DELETE http://localhost:4000/api/books/<id>
```
