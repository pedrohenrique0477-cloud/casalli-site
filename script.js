const app = document.getElementById("app");

const numeroWhatsApp = "5516994507580";

const categorias = {
  "video-game": {
    titulo: "Video Game",
    icone: "🎮",
    servicos: [
      {
        nome: "Limpeza Interna e Externa - PS4",
        descricao: "Serviço completo com desmontagem cuidadosa do console, remoção de poeira interna, limpeza do cooler, dissipador e saídas de ventilação. Também inclui troca da pasta térmica para auxiliar no controle de temperatura e auxiliar no desempenho."
      },
      {
        nome: "Limpeza Interna e Externa - PS5",
        descricao: "Limpeza preventiva do console com desmontagem técnica, remoção de poeira acumulada, higienização das áreas de ventilação, cooler e dissipador. Indicado para melhorar a refrigeração, reduzir ruídos e ajudar na conservação do equipamento."
      },
      {
        nome: "Limpeza Interna e Externa - XBOX (todos os modelos)",
        descricao: "Serviço de limpeza interna e externa para consoles Xbox, com desmontagem do equipamento, remoção de poeira, limpeza do sistema de ventilação, cooler e dissipador. Quando necessário, também pode ser realizada a troca da pasta térmica para melhor controle de temperatura."
      },
      {
        nome: "Conserto de Drift (Controle)",
        descricao: "Avaliação e manutenção do controle com foco em falhas de movimentação automática nos analógicos. O serviço pode incluir desmontagem parcial ou total, limpeza interna, limpeza dos analógicos, remoção de sujeira acumulada e testes de funcionamento após o procedimento."
      }
    ]
  },

  computador: {
    titulo: "Computador",
    icone: "🖥️",
    servicos: [
      {
        nome: "Limpeza Interna (Completa)",
        descricao: "Limpeza completa do gabinete com abertura do computador, remoção de poeira, limpeza dos coolers, placas, entradas de ar e componentes internos. Também pode incluir organização básica dos cabos e troca da pasta térmica do processador para melhorar a refrigeração."
      },
      {
        nome: "Formatação e Instalação do Sistema",
        descricao: "Formatação do computador com instalação do sistema operacional, drivers essenciais, atualizações básicas e ajustes de desempenho. Serviço indicado para computadores lentos, com erros, travamentos ou necessidade de reinstalação limpa do Windows."
      }
    ]
  },

  notebook: {
    titulo: "Notebook",
    icone: "💻",
    servicos: [
      {
        nome: "Limpeza Interna (Completa)",
        descricao: "Desmontagem cuidadosa do notebook para remoção de poeira acumulada, limpeza do cooler, dissipador, entradas e saídas de ar. Também pode incluir troca da pasta térmica, ajudando a reduzir aquecimento, ruídos e travamentos causados por superaquecimento."
      },
      {
        nome: "Formatação Completa",
        descricao: "Formatação do notebook com instalação do sistema operacional, drivers, atualizações básicas e configurações iniciais. Serviço indicado para melhorar desempenho, corrigir erros, remover arquivos desnecessários e deixar o equipamento pronto para uso."
      }
    ]
  },

  impressora: {
    titulo: "Impressora",
    icone: "🖨️",
    servicos: [
      {
        nome: "Limpeza de Cabeçote (Software)",
        descricao: "Procedimento de limpeza realizado pelo sistema da impressora para auxiliar na desobstrução dos bicos de impressão. Indicado para casos de falhas na impressão, linhas em branco, cores fracas ou impressão irregular."
      },
      {
        nome: "Instalação e Configuração",
        descricao: "Instalação da impressora em computador, notebook ou celular, configuração inicial, conexão com a rede quando aplicável e realização de testes de impressão. Serviço indicado para impressoras novas ou reinstalação em novos dispositivos."
      },
      {
        nome: "Configuração de Rede Wi-Fi",
        descricao: "Configuração da impressora na rede sem fio para permitir impressão por computadores, notebooks e celulares compatíveis. Inclui verificação da conexão, ajustes básicos e testes para confirmar o funcionamento."
      },
      {
        nome: "Troca de Cartuchos ou Refil de Tinta",
        descricao: "Substituição de cartuchos ou orientação no procedimento de refil de tinta, seguida de testes de impressão. Serviço indicado para garantir que a impressora reconheça corretamente os suprimentos e volte a imprimir de forma adequada."
      },
      {
        nome: "Reset de Almofada (Ink Pad)",
        descricao: "Procedimento de reset do contador de almofada de tinta em modelos compatíveis. Indicado quando a impressora apresenta aviso relacionado à almofada ou ao limite de absorção, exigindo avaliação prévia do modelo."
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

function criarLinkWhatsApp(nomeServico, categoria) {
  const mensagem = `Olá! Tenho interesse no serviço: ${nomeServico} - ${categoria}. Gostaria de mais informações e de um orçamento.`;
  const mensagemCodificada = encodeURIComponent(mensagem);

  return `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
}

function renderizarHome() {
  app.innerHTML = `
    <section class="home">
      <p class="chamada chamada-topo">Veja os Serviços Disponíveis!</p>

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
    </section>
  `;
}

function renderizarPagamento() {
  app.innerHTML = `
    <section class="pagina-servicos">
      <div class="titulo-categoria">
        <span class="icone">💰</span>
        <h2>Formas de Pagamento</h2>
      </div>

      <div class="servicos">
        <article class="card-servico pagamento-card">
          <h3>💵 Dinheiro / 📱 Pix</h3>
          <p>Pagamento em espécie no ato do serviço ou transferência instantânea via chave Pix.</p>
        </article>

        <article class="card-servico pagamento-card">
          <h3>💳 Cartão de Débito / Crédito (Aproximação)</h3>
          <p>Aceitamos as principais bandeiras no débito e crédito. Consulte previamente as condições disponíveis para o serviço solicitado.</p>
        </article>
      </div>
    </section>
  `;
}

function renderizarCategoria(nomeCategoria) {
  if (nomeCategoria === "pagamento") {
    renderizarPagamento();
    return;
  }

  const categoria = categorias[nomeCategoria];

  if (!categoria) {
    renderizarHome();
    return;
  }

  const cards = categoria.servicos.map(servico => {
    const linkWhatsApp = criarLinkWhatsApp(
      servico.nome,
      categoria.titulo
    );

    return `
      <article class="card-servico">
        <h3>${servico.nome}</h3>
        <p>${servico.descricao}</p>

        <div class="area-botao-servico">
          <a 
            href="${linkWhatsApp}" 
            target="_blank" 
            class="botao-solicitar"
          >
            Solicitar este serviço
          </a>
        </div>
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
