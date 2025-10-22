import Header from "../componentes/comp";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [books, setBooks] = useState([]);           
  const [featured, setFeatured] = useState([]);    

  // efeito busca livro
  useEffect(() => {
    if (searchTerm.trim() === "") return;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`)
      .then(res => res.json())
      .then(data => setBooks(data.items || []))
      .catch(err => console.error("Erro ao buscar livros:", err));
  }, [searchTerm]);

  // efeito amostra livros
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=6")
      .then(res => res.json())
      .then(data => setFeatured(data.items || []))
      .catch(err => console.error("Erro ao carregar livros de amostra:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Header/>
      {/* busca */}
      <div style={{ marginTop: "20px", marginBottom: "40px",display: "grid",placeItems: "center" }}>
        <input
          type="text"
          placeholder="Digite o nome do livro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "300px",
            padding: "8px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />
      </div>

      {/* video */}
      <div style={{ marginTop: "60px",display: "grid",placeItems: "center"}}>
        <h3>🎬 Assista e inspire-se com o mundo da leitura</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BtFHTJZuOWE?si=WLcM2cTbt0bPUZNA"
          title="Vídeo sobre leitura e conhecimento"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px", marginTop: "10px" }}
        ></iframe>
      </div>

      <h3>Livros em destaque</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }}>
        {featured.map((book) => (
          <div key={book.id} style={{ width: "180px", textAlign: "center" }}>
            <h4>{book.volumeInfo.title}</h4>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ width: "100%", height: "auto" }}
              />
            )}
            {book.volumeInfo.infoLink && (
              <a
                href={book.volumeInfo.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  backgroundColor: "#1e90ff",
                  color: "white",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  textDecoration: "none"
                }}
              >
                Ver mais
              </a>
            )}
          </div>
        ))}
      </div>
      

      {/* Resultados da busca */}
      {searchTerm && (
        <>
          <h3>Resultados da busca:</h3>
          {books.length === 0 && <p>Nenhum livro encontrado.</p>}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {books.map((book) => (
              <div key={book.id} style={{ width: "180px", textAlign: "center" }}>
                <h4>{book.volumeInfo.title}</h4>
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
                {book.volumeInfo.infoLink && (
                  <a
                    href={book.volumeInfo.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "8px",
                      backgroundColor: "#1e90ff",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: "5px",
                      textDecoration: "none"
                    }}
                  >
                    Ler / Comprar
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      
    </div>
  );
}
