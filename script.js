const app = document.getElementById("app");

const categorias = {
  "video-game": {
    titulo: "Video Game",
    icone: "🎮",
    servicos: [
      {
        nome: "Limpeza Interna e Externa - PS4",
        descricao: "Desmontagem do console, limpeza do cooler, dissipador, remoção de poeira e troca da pasta térmica.",
        preco: "R$ 100"
      },
      {
        nome: "Limpeza Interna e Externa - PS5",
        descricao: "Desmontagem do console, limpeza do cooler, dissipador e remoção de poeira.",
        preco: "R$ 120"
      },
      {
        nome: "Limpeza Interna e Externa - XBOX (todos os modelos)",
        descricao: "Desmontagem do console, limpeza do cooler, dissipador, remoção de poeira e troca da pasta térmica.",
        preco: "R$ 120"
      },
      {
        nome: "Conserto de Drift (Controle)",
        descricao: "Desmonta total ou parcial do controle, limpeza externa na carcaça e limpeza interna nos analógicos.",
        preco: "R$ 25"
      }
    ]
  },

  computador: {
    titulo: "Computador",
    icone: "🖥️",
    servicos: [
      {
        nome: "Limpeza Interna (Completa)",
        descricao: "Abertura do gabinete, remoção de poeira, limpeza dos coolers, organização dos cabos e troca da pasta térmica do processador.",
        preco: "R$ 120"
      },
      {
        nome: "Formatação e Instalação do Sistema",
        descricao: "Formatação e instalação do Windows com drivers atualizados e otimização.",
        preco: "R$ 80"
      }
    ]
  },

  notebook: {
    titulo: "Notebook",
    icone: "💻",
    servicos: [
      {
        nome: "Limpeza Interna (Completa)",
        descricao: "Desmontagem do notebook para remoção de poeira acumulada, limpeza do sistema de ventilação, cooler e troca da pasta térmica.",
        preco: "R$ 120"
      },
      {
        nome: "Formatação Completa",
        descricao: "Formatação, instalação do Windows, drivers e otimização.",
        preco: "R$ 80"
      }
    ]
  },

  impressora: {
    titulo: "Impressora",
    icone: "🖨️",
    servicos: [
      {
        nome: "Limpeza de Cabeçote (Software)",
        descricao: "Procedimento de limpeza pelo sistema da impressora para desobstrução dos bicos.",
        preco: "R$ 20"
      },
      {
        nome: "Instalação e Configuração",
        descricao: "Instalação da impressora em computador ou celular, configuração de Wi-Fi e testes.",
        preco: "R$ 45"
      },
      {
        nome: "Configuração de Rede Wi-Fi",
        descricao: "Conexão da impressora à rede sem fio e dispositivos.",
        preco: "R$ 25"
      },
      {
        nome: "Troca de Cartuchos ou Refil de Tinta",
        descricao: "Instalação e testes após substituição.",
        preco: "R$ 25"
      },
      {
        nome: "Reset de Almofada (Ink Pad)",
        descricao: "Procedimento de reset para impressoras compatíveis.",
        preco: "R$ 60"
      }
    ]
  }
};

function pegarCategoriaDaURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get("categoria");
}

function abrirCategoria(categoria) {
  window.location.href = `index.html?categoria=${categoria}`;
}

function renderizarHome() {
  app.innerHTML = `
    <section class="home">
      <div class="logo-central">
  <img src="logo.png" alt="Casalli Technology" class="logo-img-central">

  <div class="logo-textos">
    <h1>CASALLI</h1>
    <p>TECHNOLOGY</p>
  </div>
</div>

      <div class="lista-topicos">
        <button class="topico" onclick="abrirCategoria('video-game')">
          <span>🎮</span>
          Video Game
        </button>

        <button class="topico" onclick="abrirCategoria('computador')">
          <span>🖥️</span>
          Computador
        </button>

        <button class="topico" onclick="abrirCategoria('notebook')">
          <span>💻</span>
          Notebook
        </button>

        <button class="topico" onclick="abrirCategoria('impressora')">
          <span>🖨️</span>
          Impressora
        </button>
      </div>

      <p class="chamada">Veja os Serviços Disponíveis!</p>
    </section>
  `;
}

function renderizarCategoria(nomeCategoria) {
  const categoria = categorias[nomeCategoria];

  if (!categoria) {
    renderizarHome();
    return;
  }

  const cards = categoria.servicos.map(servico => {
    return `
      <article class="card-servico">
        <h3>${servico.nome}</h3>
        <p>${servico.descricao}</p>
        <div class="preco">Preço: ${servico.preco}</div>
      </article>
    `;
  }).join("");

  app.innerHTML = `
    <section class="pagina-servicos">
      <a href="index.html" class="botao-voltar">← Voltar para o início</a>

      <div class="titulo-categoria">
        <span class="icone">${categoria.icone}</span>
        <h2>${categoria.titulo}</h2>
      </div>

      <div class="servicos">
        ${cards}
      </div>
    </section>
  `;
}

const categoriaAtual = pegarCategoriaDaURL();

if (categoriaAtual) {
  renderizarCategoria(categoriaAtual);
} else {
  renderizarHome();
}