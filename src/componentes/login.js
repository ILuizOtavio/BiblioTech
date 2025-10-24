import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
import "./login.css";

export default function Login() {
  const [init, setInit] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  // Inicializa as partículas uma vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario && senha) {
      alert(`Bem-vindo, ${usuario}!`);
      navigate("/home");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      {/* Fundo de partículas */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: { value: "#111" },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                outModes: { default: "bounce" },
              },
              number: { value: 60, density: { enable: true, area: 800 } },
              opacity: { value: 0.6 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      {/* Conteúdo do login */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login Bibliotech</h2>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "250px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>

          <Link
            to="/cadastro"
            style={{
              textAlign: "center",
              color: "lightblue",
              marginTop: "5px",
            }}
          >
            Cadastre-se
          </Link>
        </form>
      </div>
    </div>
  );
}