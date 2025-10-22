import Header from "../componentes/comp";
import {useState,useEffect} from "react";

export default function Home(){
    const [searchTerm, setSearchTerm] = useState(""); 
  const [books, setBooks] = useState([]);           

  useEffect(() => {
    if (searchTerm.trim() === "") return;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => setBooks(data.items || []))
      .catch(err => console.error("Erro ao buscar livros:", err));
  }, [searchTerm]);

  return (
    <div style={{ padding: "20px" }}>
        <Header/>
      <h2>Pesquisar Livros</h2>

      <input
        type="text"
        placeholder="Digite o nome do livro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "300px", padding: "8px", marginRight: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {books.length === 0 && searchTerm !== "" && <p>Nenhum livro encontrado.</p>}
        {books.map((book) => (
          <div key={book.id} style={{ marginBottom: "20px" }}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ width: "128px", height: "auto" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}