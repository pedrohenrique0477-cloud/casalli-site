const app = document.getElementById("app");

const numeroWhatsApp = "5516994507580";

const categorias = {
  "video-game": {
    titulo: "Video Game",
    icone: "🎮",
    servicos: [
      {
        nome: "Limpeza Interna e Externa - PS4",
        descricao: "Serviço completo com desmontagem cuidadosa do console, remoção de poeira interna, limpeza do cooler, dissipador e saídas de ventilação. Também pode incluir troca da pasta térmica, auxiliando no controle de temperatura e na conservação do aparelho."
      },
      {
        nome: "Limpeza Interna e Externa - PS5",
        descricao: "Limpeza preventiva do console com desmontagem técnica, remoção de poeira acumulada, higienização das áreas de ventilação, cooler e dissipador. Serviço indicado para auxiliar na refrigeração, reduzir acúmulo de sujeira e ajudar na conservação do equipamento."
      },
      {
        nome: "Limpeza Interna e Externa - XBOX (todos os modelos)",
        descricao: "Serviço de limpeza interna e externa para consoles Xbox, com desmontagem do equipamento, remoção de poeira, limpeza do sistema de ventilação, cooler e dissipador. Quando aplicável, pode ser feita a troca da pasta térmica para auxiliar no controle de temperatura."
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
        descricao: "Limpeza completa do gabinete com abertura do computador, remoção de poeira, limpeza dos coolers, placas, entradas de ar e componentes internos. Também pode incluir organização básica dos cabos e troca da pasta térmica do processador para auxiliar na refrigeração."
      },
      {
        nome: "Formatação e Instalação do Sistema",
        descricao: "Formatação do computador com instalação do sistema operacional, drivers essenciais, atualizações básicas e ajustes iniciais. Serviço indicado para computadores lentos, com erros, travamentos ou necessidade de reinstalação limpa do Windows, auxiliando na organização e no uso do equipamento."
      }
    ]
  },

  notebook: {
    titulo: "Notebook",
    icone: "💻",
    servicos: [
      {
        nome: "Limpeza Interna (Completa)",
        descricao: "Desmontagem cuidadosa do notebook para remoção de poeira acumulada, limpeza do cooler, dissipador, entradas e saídas de ar. Também pode incluir troca da pasta térmica, auxiliando no controle de temperatura e na conservação do equipamento."
      },
      {
        nome: "Formatação Completa",
        descricao: "Formatação do notebook com instalação do sistema operacional, drivers, atualizações básicas e configurações iniciais. Serviço indicado para auxiliar no desempenho, organização do sistema, correção de falhas comuns e preparação do equipamento para uso."
      }
    ]
  },

  "pacote-office": {
    titulo: "Pacote Office",
    iconeImg: "office.png",
    servicos: [
      {
        nome: "Pacote Office Completo",
        descricao: "O pacote inclui os principais programas do Office, como <strong>Word, Excel, PowerPoint, Outlook, Access, Publisher</strong> e demais aplicativos disponíveis na versão instalada. A ativação é <strong>permanente</strong>, sem necessidade de renovação mensal ou anual. Após a instalação, também ofereço <strong>suporte caso seja necessário algum ajuste, configuração ou auxílio relacionado ao Office</strong>. Ideal para quem quer ter o pacote completo instalado e pronto para trabalhar, estudar ou usar no dia a dia."
      },
      {
        nome: "App Office Unitário",
        descricao: "Você pode escolher <strong>somente os aplicativos do Office que deseja instalar</strong>. Por exemplo, se utiliza apenas <strong>Word, Excel e PowerPoint</strong>, não é necessário instalar os demais programas. A instalação é feita de forma personalizada, de acordo com a sua necessidade. Os aplicativos escolhidos são instalados, configurados e entregues com <strong>ativação permanente</strong>, sem necessidade de renovação mensal ou anual. Assim, você fica apenas com os programas que realmente utiliza, evitando aplicativos desnecessários no computador."
      }
    ]
  },

  impressora: {
    titulo: "Impressora",
    icone: "🖨️",
    servicos: [
      {
        nome: "Limpeza de Cabeçote (Software)",
        descricao: "Procedimento de limpeza realizado pelo sistema da impressora para auxiliar na desobstrução dos bicos de impressão. Indicado para casos de falhas na impressão, linhas em branco, cores fracas ou impressão irregular, dependendo das condições do equipamento."
      },
      {
        nome: "Instalação e Configuração",
        descricao: "Instalação da impressora em computador, notebook ou celular, configuração inicial, conexão com a rede quando aplicável e realização de testes de impressão. Serviço indicado para impressoras novas ou reinstalação em novos dispositivos."
      },
      {
        nome: "Configuração de Rede Wi-Fi",
        descricao: "Configuração da impressora na rede sem fio para permitir impressão por computadores, notebooks e celulares compatíveis. Inclui verificação da conexão, ajustes básicos e testes para auxiliar na confirmação do funcionamento."
      },
      {
        nome: "Troca de Cartuchos ou Refil de Tinta",
        descricao: "Substituição de cartuchos ou orientação no procedimento de refil de tinta, seguida de testes de impressão. Serviço indicado para auxiliar no reconhecimento dos suprimentos e verificar se a impressora volta a imprimir adequadamente."
      },
      {
        nome: "Reset de Almofada (Ink Pad)",
        descricao: "Procedimento de reset do contador de almofada de tinta em modelos compatíveis. Indicado quando a impressora apresenta aviso relacionado à almofada ou ao limite de absorção, exigindo avaliação prévia do modelo e das condições do equipamento."
      }
    ]
  },

  sites: {
    titulo: "Sites",
    icone: "🌐",
    servicos: [
      {
        nome: "Site Profissional Simples",
        descricao: "Criação de site simples e profissional para apresentação de serviços, perfil profissional, contato, redes sociais e informações principais do negócio. Indicado para quem precisa de uma presença online organizada, bonita e direta."
      },
      {
        nome: "Site de Cursos",
        descricao: "Criação de site para organização e apresentação de cursos, módulos, aulas, materiais, informações dos alunos e páginas de acesso. Pode ser adaptado conforme a necessidade do projeto e o tipo de conteúdo que será disponibilizado."
      },
      {
        nome: "Site de Convite Digital",
        descricao: "Criação de convite digital personalizado para eventos como casamento, chá de casa nova, aniversário, formatura ou outras comemorações. Pode incluir data, local, mensagem, lista de presentes, QR Code, links e informações importantes para os convidados."
      },
      {
        nome: "Site de Controle Financeiro",
        descricao: "Criação de site personalizado para controle financeiro, com organização de entradas, despesas, categorias, resumo mensal e acompanhamento dos valores. Pode ser adaptado para uso pessoal, familiar ou pequenos controles do dia a dia."
      },
      {
        nome: "Site de Lista de Compras / Enxoval",
        descricao: "Criação de site para organizar lista de compras, enxoval, presentes ou itens de casamento. Pode incluir categorias, status dos itens, valores, observações e uma visualização simples para acompanhar o que já foi comprado e o que ainda falta."
      },
      {
        nome: "Site Personalizado Sob Pedido",
        descricao: "Criação de site conforme a ideia do cliente. A pessoa descreve o que precisa, quais informações quer mostrar e qual objetivo do site, e o projeto é avaliado para montar uma solução simples, funcional e personalizada."
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

function criarIconeCategoria(categoria, classe) {
  if (categoria.iconeImg) {
    return `<img src="${categoria.iconeImg}" alt="${categoria.titulo}" class="${classe}">`;
  }

  return `<span>${categoria.icone}</span>`;
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

        <button class="topico" onclick="abrirCategoria('pacote-office')">
          <img src="office.png" alt="Pacote Office" class="topico-img">
          Pacote Office
        </button>

        <button class="topico" onclick="abrirCategoria('impressora')">
          <span>🖨️</span>
          Impressora
        </button>

        <button class="topico" onclick="abrirCategoria('sites')">
          <span>🌐</span>
          Sites
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
        <span class="icone">
          ${criarIconeCategoria(categoria, "titulo-img")}
        </span>
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