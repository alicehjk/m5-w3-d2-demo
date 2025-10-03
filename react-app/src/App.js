import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateList from "./components/CreateList";
import DeleteList from "./components/DeleteList";
import EditList from "./components/EditList";

function App() {
  const [books, setBooks] = useState([]);
  const [singledata, setSingleData] = useState({ title: "", author: "" });

  useEffect(() => {
    fetch("http://localhost:4000/api/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleData({ ...singledata, [name]: value });
  };

  const createBook = () => {
    fetch("http://localhost:4000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(singledata),
    })
    .then(res => res.json())
    .then(newBook => setBooks([...books, newBook]));
  };

  const updateBook = (id, updatedData) => {
    fetch(`http://localhost:4000/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
    .then(res => res.json())
    .then(updatedBook => {
      setBooks(books.map(b => (b._id === id ? updatedBook : b)));
    });
  };

  const deleteBook = (id) => {
    fetch(`http://localhost:4000/api/books/${id}`, { method: "DELETE" })
      .then(() => setBooks(books.filter(b => b._id !== id)));
  };

  return (
    <div className="container mt-4">
      <CreateList singledata={singledata} handleChange={handleChange} CreateList={createBook} />
      <h2 className="my-3">Book List</h2>

      <ul className="list-group mt-3">
        {books.map((book) => (
          <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
            {book.title} - {book.author}
            <DeleteList elementId={book._id} singledata={book} deleteList={() => deleteBook(book._id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
