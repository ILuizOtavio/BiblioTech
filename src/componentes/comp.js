// import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
    <header style={{ padding: "15px", background: "#062647ff", color: "white" }}>
      <h1>📚 Bibliotech</h1>
      <nav>
        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
          Início
        </Link>
      </nav>
    </header>
  );
}



// export default function Info(){
//     return(
//     <div style={{textAlign:"center"}}>
//     <div>
//      <h1>Bibliotech</h1>
//      </div>
//     </div>
//     );
// }

// export default function Pesquisa(){
//     useEffect(() => {
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
//     .then(res => res.json())
//     .then(data => setBooks(data.items || []));
// }, [searchTerm]);
// }

// export default function Footer(){
//     return(
//     <div style={{textAlign:"center"}}>
//     <div>
//      <h1>Bibliotech</h1>
//      </div>
//     </div>
//     );
// }