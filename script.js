const CATEGORIAS = {
    cordas: {nome:"Cordas", icone:"🎸", anuncios:"1.240", busca:"violão", faixas:[500,1500], specs:["Tampo em spruce maciço","Cordas de aço incluídas","Acabamento fosco","Acompanha capa"], loja:"Loja Harmonia", pos:99, reviews:["Som lindo e acabamento impecável. Chegou bem embalado.","Ótimo custo-benefício para quem está começando."]},
    teclas: {nome:"Teclas", icone:"🎹", anuncios:"620", busca:"teclado", faixas:[1000,3000], specs:["61 teclas de tamanho padrão","Seleção de timbres e ritmos","Saída para fones de ouvido","Ideal para estudo e prática"], loja:"Loja Melodia", pos:98, reviews:["Teclado muito prático para estudar. Os timbres são ótimos.","Bom custo-benefício. Chegou bem embalado e no prazo."]},
    percussao: {nome:"Percussão", icone:"🥁", anuncios:"480", busca:"bateria", faixas:[1500,5000], specs:["Conjunto acústico de 5 peças","Bumbo, caixa e três tons","Peles com afinação ajustável","Acabamento laqueado"], loja:"Loja Ritmo", pos:99, reviews:["Som encorpado e montagem tranquila.","Ótima bateria para os ensaios. Gostei do acabamento. Chegou tudo bem protegido."]},
    sopro: {nome:"Sopro", icone:"🎺", anuncios:"310", busca:"trompete", faixas:[500,1500], specs:["Afinação em Si bemol (Bb)","Acabamento dourado","Sistema de três pistões","Bocal para trompete incluído"], loja:"Loja Sopro Musical", pos:98, reviews:["Boa sonoridade e pistões suaves. Chegou muito bem embalado.","Ótimo instrumento para começar os estudos de sopro."]},
    audio: {nome:"Áudio", icone:"🎤", anuncios:"540", busca:"microfone", faixas:[300,1000], specs:["Captação dinâmica cardioide","Conexão XLR de 3 pinos","Corpo metálico resistente","Acompanha suporte e estojo"], loja:"Loja Som & Cia", pos:99, reviews:["Voz clara e boa rejeição de ruído. Funcionou muito bem no palco.","Construção firme e ótimo custo-benefício para ensaios."]},
    acessorios: {nome:"Acessórios", icone:"🎧", anuncios:"890", busca:"fone de ouvido", faixas:[100,500], specs:["Design fechado over-ear","Conector estéreo de 3,5 mm","Adaptador de 6,35 mm incluído","Arco ajustável e almofadas macias"], loja:"Loja Acorde", pos:98, reviews:["Confortável para estudar por horas. O som é bem definido.","Gostei do isolamento e do adaptador para ligar no teclado."]}
};

const PRODUTOS = [
    {id:"cordas-1",cat:"cordas",nome:"Violão Folk Aço",preco:899,antigo:1059,nota:4.8,aval:214,img:"folk",marca:"Giannini",cond:"Novo",vendidos:320,estoque:12,desc:"Violão Folk Aço. Instrumento de cordas com acabamento cuidadoso, afinação estável e ótimo som para estudo, ensaios e apresentações."},
    {id:"cordas-2",cat:"cordas",nome:"Violão Clássico Nylon",preco:649,antigo:null,nota:4.4,aval:120,img:"nylon",marca:"Tagima",cond:"Novo",vendidos:180,estoque:5,desc:"Violão Clássico Nylon. Instrumento de cordas com acabamento cuidadoso, afinação estável e ótimo som para estudo, ensaios e apresentações."},
    {id:"cordas-3",cat:"cordas",nome:"Violão Eletroacústico",preco:1390,antigo:null,nota:4.8,aval:76,img:"folk",marca:"Yamaha",cond:"Novo",vendidos:114,estoque:6,desc:"Violão Eletroacústico. Instrumento de cordas com acabamento cuidadoso, afinação estável e ótimo som para estudo, ensaios e apresentações."},
    {id:"cordas-4",cat:"cordas",nome:"Violão Infantil 3/4",preco:520,antigo:null,nota:4.4,aval:44,img:"nylon",marca:"Giannini",cond:"Novo",vendidos:66,estoque:19,desc:"Violão Infantil 3/4. Instrumento de cordas com acabamento cuidadoso, afinação estável e ótimo som para estudo, ensaios e apresentações."},
    {id:"cordas-5",cat:"cordas",nome:"Violão Jumbo Aço",preco:1050,antigo:null,nota:4.8,aval:63,img:"folk",marca:"Tagima",cond:"Novo",vendidos:94,estoque:8,desc:"Violão Jumbo Aço. Instrumento de cordas com acabamento cuidadoso, afinação estável e ótimo som para estudo, ensaios e apresentações."},
    {id:"cordas-6",cat:"cordas",nome:"Violão 12 Cordas",preco:1480,antigo:null,nota:4.4,aval:29,img:"folk",marca:"Yamaha",cond:"Usado",vendidos:44,estoque:19,desc:"Violão 12 Cordas. Instrumento de cordas com acabamento cuidadoso, afinação estável e ótimo som para estudo, ensaios e apresentações."},
    {id:"teclas-1",cat:"teclas",nome:"Teclado 61 Teclas",preco:1290,antigo:1432,nota:4.4,aval:98,img:"teclado",marca:"Yamaha",cond:"Novo",vendidos:156,estoque:9,desc:"Teclado 61 Teclas. Teclado musical com timbres e ritmos variados, ideal para estudo, prática e pequenas apresentações."},
    {id:"teclas-2",cat:"teclas",nome:"Teclado Arranjador",preco:1890,antigo:null,nota:4.8,aval:72,img:"teclado",marca:"Casio",cond:"Novo",vendidos:108,estoque:17,desc:"Teclado Arranjador. Teclado musical com timbres e ritmos variados, ideal para estudo, prática e pequenas apresentações."},
    {id:"teclas-3",cat:"teclas",nome:"Teclado 76 Teclas",preco:2490,antigo:null,nota:4.8,aval:46,img:"teclado",marca:"Roland",cond:"Novo",vendidos:69,estoque:6,desc:"Teclado 76 Teclas. Teclado musical com timbres e ritmos variados, ideal para estudo, prática e pequenas apresentações."},
    {id:"teclas-4",cat:"teclas",nome:"Teclado Portátil 61 Ritmos",preco:1090,antigo:null,nota:4.4,aval:64,img:"teclado",marca:"Yamaha",cond:"Novo",vendidos:96,estoque:9,desc:"Teclado Portátil 61 Ritmos. Teclado musical com timbres e ritmos variados, ideal para estudo, prática e pequenas apresentações."},
    {id:"teclas-5",cat:"teclas",nome:"Teclado Controlador",preco:1590,antigo:null,nota:4.8,aval:38,img:"teclado",marca:"Casio",cond:"Novo",vendidos:57,estoque:13,desc:"Teclado Controlador. Teclado musical com timbres e ritmos variados, ideal para estudo, prática e pequenas apresentações."},
    {id:"teclas-6",cat:"teclas",nome:"Teclado Compacto",preco:2790,antigo:null,nota:4.4,aval:25,img:"teclado",marca:"Roland",cond:"Usado",vendidos:38,estoque:15,desc:"Teclado Compacto. Teclado musical com timbres e ritmos variados, ideal para estudo, prática e pequenas apresentações."},
    {id:"percussao-1",cat:"percussao",nome:"Bateria Acústica 5 Peças",preco:3490,antigo:3965,nota:4.8,aval:57,img:"bateria",marca:"Pearl",cond:"Novo",vendidos:89,estoque:5,desc:"Bateria Acústica 5 Peças. Instrumento de percussão com construção resistente e som encorpado, perfeito para ensaios e shows."},
    {id:"percussao-2",cat:"percussao",nome:"Bateria Compacta 4 Peças",preco:2190,antigo:null,nota:4.4,aval:34,img:"bateria",marca:"Odery",cond:"Novo",vendidos:51,estoque:9,desc:"Bateria Compacta 4 Peças. Instrumento de percussão com construção resistente e som encorpado, perfeito para ensaios e shows."},
    {id:"percussao-3",cat:"percussao",nome:"Bateria Acústica Jazz",preco:4290,antigo:null,nota:4.8,aval:28,img:"bateria",marca:"Michael",cond:"Novo",vendidos:42,estoque:18,desc:"Bateria Acústica Jazz. Instrumento de percussão com construção resistente e som encorpado, perfeito para ensaios e shows."},
    {id:"percussao-4",cat:"percussao",nome:"Bateria Infantil 3 Peças",preco:1690,antigo:null,nota:4.4,aval:42,img:"bateria",marca:"Pearl",cond:"Novo",vendidos:63,estoque:17,desc:"Bateria Infantil 3 Peças. Instrumento de percussão com construção resistente e som encorpado, perfeito para ensaios e shows."},
    {id:"percussao-5",cat:"percussao",nome:"Bateria Acústica Rock",preco:4790,antigo:null,nota:4.8,aval:17,img:"bateria",marca:"Odery",cond:"Novo",vendidos:26,estoque:7,desc:"Bateria Acústica Rock. Instrumento de percussão com construção resistente e som encorpado, perfeito para ensaios e shows."},
    {id:"percussao-6",cat:"percussao",nome:"Bateria de Estudo",preco:2890,antigo:null,nota:4.4,aval:36,img:"bateria",marca:"Michael",cond:"Usado",vendidos:54,estoque:11,desc:"Bateria de Estudo. Instrumento de percussão com construção resistente e som encorpado, perfeito para ensaios e shows."},
    {id:"sopro-1",cat:"sopro",nome:"Trompete Bb Dourado",preco:1150,antigo:1250,nota:4.3,aval:31,img:"trompete",marca:"Eagle",cond:"Novo",vendidos:63,estoque:7,desc:"Trompete Bb Dourado. Instrumento de sopro com afinação precisa e resposta suave, indicado para estudantes e músicos."},
    {id:"sopro-2",cat:"sopro",nome:"Trompete Bb Prateado",preco:1390,antigo:null,nota:4.8,aval:24,img:"trompete",marca:"Michael",cond:"Novo",vendidos:36,estoque:14,desc:"Trompete Bb Prateado. Instrumento de sopro com afinação precisa e resposta suave, indicado para estudantes e músicos."},
    {id:"sopro-3",cat:"sopro",nome:"Trompete de Estudo",preco:890,antigo:null,nota:4.4,aval:48,img:"trompete",marca:"Shelter",cond:"Novo",vendidos:72,estoque:8,desc:"Trompete de Estudo. Instrumento de sopro com afinação precisa e resposta suave, indicado para estudantes e músicos."},
    {id:"sopro-4",cat:"sopro",nome:"Trompete Bb Laqueado",preco:1290,antigo:null,nota:4.8,aval:17,img:"trompete",marca:"Eagle",cond:"Novo",vendidos:26,estoque:7,desc:"Trompete Bb Laqueado. Instrumento de sopro com afinação precisa e resposta suave, indicado para estudantes e músicos."},
    {id:"sopro-5",cat:"sopro",nome:"Trompete Pocket Bb",preco:1450,antigo:null,nota:4.4,aval:22,img:"trompete",marca:"Michael",cond:"Novo",vendidos:33,estoque:12,desc:"Trompete Pocket Bb. Instrumento de sopro com afinação precisa e resposta suave, indicado para estudantes e músicos."},
    {id:"sopro-6",cat:"sopro",nome:"Trompete Bb Standard",preco:1050,antigo:null,nota:4.4,aval:35,img:"trompete",marca:"Shelter",cond:"Usado",vendidos:52,estoque:10,desc:"Trompete Bb Standard. Instrumento de sopro com afinação precisa e resposta suave, indicado para estudantes e músicos."},
    {id:"audio-1",cat:"audio",nome:"Microfone Dinâmico Vocal",preco:499,antigo:599,nota:4.8,aval:86,img:"microfone",marca:"Shure",cond:"Novo",vendidos:142,estoque:18,desc:"Microfone Dinâmico Vocal. Equipamento de áudio com captação clara e construção firme, ótimo para palco, estúdio e gravações."},
    {id:"audio-2",cat:"audio",nome:"Microfone Condensador",preco:799,antigo:null,nota:4.8,aval:53,img:"microfone",marca:"Behringer",cond:"Novo",vendidos:80,estoque:13,desc:"Microfone Condensador. Equipamento de áudio com captação clara e construção firme, ótimo para palco, estúdio e gravações."},
    {id:"audio-3",cat:"audio",nome:"Microfone USB Estúdio",preco:649,antigo:null,nota:4.4,aval:76,img:"microfone",marca:"Audio-Technica",cond:"Novo",vendidos:114,estoque:6,desc:"Microfone USB Estúdio. Equipamento de áudio com captação clara e construção firme, ótimo para palco, estúdio e gravações."},
    {id:"audio-4",cat:"audio",nome:"Microfone Sem Fio",preco:899,antigo:null,nota:4.4,aval:41,img:"microfone",marca:"Shure",cond:"Novo",vendidos:62,estoque:16,desc:"Microfone Sem Fio. Equipamento de áudio com captação clara e construção firme, ótimo para palco, estúdio e gravações."},
    {id:"audio-5",cat:"audio",nome:"Microfone para Podcast",preco:579,antigo:null,nota:4.8,aval:32,img:"microfone",marca:"Behringer",cond:"Novo",vendidos:48,estoque:7,desc:"Microfone para Podcast. Equipamento de áudio com captação clara e construção firme, ótimo para palco, estúdio e gravações."},
    {id:"audio-6",cat:"audio",nome:"Microfone de Palco",preco:349,antigo:null,nota:4.4,aval:59,img:"microfone",marca:"Audio-Technica",cond:"Usado",vendidos:88,estoque:19,desc:"Microfone de Palco. Equipamento de áudio com captação clara e construção firme, ótimo para palco, estúdio e gravações."},
    {id:"acessorios-1",cat:"acessorios",nome:"Fone de Ouvido Estéreo",preco:249,antigo:299,nota:4.7,aval:112,img:"fone",marca:"AKG",cond:"Novo",vendidos:208,estoque:24,desc:"Fone de Ouvido Estéreo. Acessório musical com conforto e durabilidade para o dia a dia de quem toca e estuda."},
    {id:"acessorios-2",cat:"acessorios",nome:"Fone Monitor de Estúdio",preco:449,antigo:null,nota:4.8,aval:78,img:"fone",marca:"Behringer",cond:"Novo",vendidos:117,estoque:8,desc:"Fone Monitor de Estúdio. Acessório musical com conforto e durabilidade para o dia a dia de quem toca e estuda."},
    {id:"acessorios-3",cat:"acessorios",nome:"Fone Fechado Dobrável",preco:329,antigo:null,nota:4.4,aval:45,img:"fone",marca:"Audio-Technica",cond:"Novo",vendidos:68,estoque:5,desc:"Fone Fechado Dobrável. Acessório musical com conforto e durabilidade para o dia a dia de quem toca e estuda."},
    {id:"acessorios-4",cat:"acessorios",nome:"Fone para Teclado",preco:159,antigo:null,nota:4.4,aval:62,img:"fone",marca:"AKG",cond:"Novo",vendidos:93,estoque:7,desc:"Fone para Teclado. Acessório musical com conforto e durabilidade para o dia a dia de quem toca e estuda."},
    {id:"acessorios-5",cat:"acessorios",nome:"Fone Over-ear Pro",preco:399,antigo:null,nota:4.8,aval:36,img:"fone",marca:"Behringer",cond:"Novo",vendidos:54,estoque:11,desc:"Fone Over-ear Pro. Acessório musical com conforto e durabilidade para o dia a dia de quem toca e estuda."},
    {id:"acessorios-6",cat:"acessorios",nome:"Fone de Estudo",preco:129,antigo:null,nota:4.4,aval:84,img:"fone",marca:"Audio-Technica",cond:"Usado",vendidos:126,estoque:14,desc:"Fone de Estudo. Acessório musical com conforto e durabilidade para o dia a dia de quem toca e estuda."}
];

const brl = v => v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search);
const pagina = document.body.dataset.pagina;

const Carrinho = {
    ler() {
        return JSON.parse(localStorage.getItem('sonora_carrinho') || '[]');
    },
    salvar(lista) {
        localStorage.setItem('sonora_carrinho', JSON.stringify(lista));
        document.dispatchEvent(new Event('carrinho'));
    },
    adicionar(id, qtd = 1) {
        let lista = this.ler();
        let item = lista.find(p => p.id === id);
        if (item) item.qtd = Math.min(item.qtd + qtd, 99);
        else lista.push({id, qtd});
        this.salvar(lista);
    },
    alterar(id, qtd) {
        let lista = this.ler();
        let item = lista.find(p => p.id === id);
        if (item) item.qtd = Math.max(1, Math.min(qtd, 99));
        this.salvar(lista);
    },
    remover(id) {
        this.salvar(this.ler().filter(p => p.id !== id));
    },
    limpar() {
        this.salvar([]);
        localStorage.removeItem('sonora_cupom');
    },
    itens() {
    return this.ler()
        .map(p => {
            const produto = PRODUTOS.find(x => x.id === p.id);
            return produto ? {...produto, qtd:p.qtd} : null;
        })
        .filter(Boolean);
    },
    quantidade() {
    return this.ler().reduce((s, p) => s + p.qtd, 0);
    },
    
    subtotal() {
        return this.itens().reduce((s, p) => s + p.preco * p.qtd, 0);
    },
    cupom() {
        return localStorage.getItem('sonora_cupom') || '';
    },
    aplicarCupom(codigo) {
        if (codigo.trim().toUpperCase() !== 'SONORA10') return false;
        localStorage.setItem('sonora_cupom', 'SONORA10');
        return true;
    },
    desconto() {
        return this.cupom() === 'SONORA10' ? this.subtotal() * 0.1 : 0;
    },
    total() {
        return this.subtotal() - this.desconto();
    }
};

function aviso(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(aviso.tempo);
    aviso.tempo = setTimeout(() => t.classList.remove('on'), 2000);
}

function iniciar() {
    document.documentElement.dataset.tema = localStorage.getItem('sonora_tema') || 'escuro';

    const ativo = pagina === 'home' ? 'home' : params.get('cat');
    const links = Object.keys(CATEGORIAS).map(k =>
        `<a href="produtos.html?cat=${k}" class="${k === ativo ? 'on' : ''}">${CATEGORIAS[k].nome}</a>`
    ).join('');

    const topo = `
        <header class="topo">
            <div class="wrap">
                <a class="logo" href="index.html">♪ Sonora</a>
                <form class="busca" action="produtos.html">
                    <input name="q" placeholder="Busque instrumentos..." value="${params.get('q') || ''}">
                    <button>Buscar</button>
                </form>
                <div class="icos">
                    <a href="#" id="tema">🌙</a>
                    <a href="entrar.html">👤</a>
                    <a href="carrinho.html" class="cart">🛒<span class="badge" id="badge"></span></a>
                </div>
            </div>
        </header>
        <nav class="menu">
            <div class="wrap">
                <a href="index.html" class="${pagina === 'home' ? 'on' : ''}">Início</a>
                ${links}
                <a href="produtos.html?ofertas=1">Ofertas</a>
            </div>
        </nav>`;

    const abas = [
        ['index.html', '🏠', 'Início', 'home'],
        ['produtos.html', '🔍', 'Categorias', 'catalogo'],
        ['carrinho.html', '🛒', 'Carrinho', 'carrinho'],
        ['entrar.html', '👤', 'Conta', 'entrar']
    ];

    document.body.insertAdjacentHTML('afterbegin', topo);
    document.body.insertAdjacentHTML('beforeend', `
        <footer class="rodape">Sonora - Compra protegida, vendedores avaliados e entrega para todo o Brasil</footer>
        <nav class="tabs">${abas.map(a => `<a href="${a[0]}" class="${a[3] === pagina ? 'on' : ''}"><span>${a[1]}</span>${a[2]}</a>`).join('')}</nav>
        <div class="toast" id="toast"></div>
    `);

    $('tema').onclick = e => {
        e.preventDefault();
        const tema = document.documentElement.dataset.tema === 'claro' ? 'escuro' : 'claro';
        document.documentElement.dataset.tema = tema;
        localStorage.setItem('sonora_tema', tema);
        $('tema').textContent = tema === 'claro' ? '☀️' : '🌙';
    };

    function atualizarCarrinho() {
        $('badge').textContent = Carrinho.quantidade();
        $('badge').style.display = Carrinho.quantidade() ? 'grid' : 'none';
    }

    document.addEventListener('carrinho', atualizarCarrinho);
    atualizarCarrinho();
}

const normalizar = texto => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const estrelas = nota => '★'.repeat(Math.round(nota)) + '☆'.repeat(5 - Math.round(nota));
const desconto = p => p.antigo ? Math.round((1 - p.preco / p.antigo) * 100) : 0;

function card(p) {
    return `
        <div class="card">
            <a href="produto.html?id=${p.id}">
                ${p.antigo ? `<span class="tag">-${desconto(p)}%</span>` : ''}
                <div class="foto"><img src="${p.img}.jpg" alt="${p.nome}"></div>
                <h3>${p.nome}</h3>
                <div class="estrelas">${estrelas(p.nota)} <small>(${p.aval})</small></div>
                <p class="desc">${p.desc}</p>
                ${p.antigo ? `<div class="antes">${brl(p.antigo)}</div>` : ''}
                <div class="preco">${brl(p.preco)}</div>
                <span class="frete">Frete grátis</span>
            </a>
            <button class="btn add" data-add="${p.id}">Adicionar ao carrinho</button>
        </div>`;
}

document.addEventListener('click', e => {
    const botao = e.target.closest('[data-add]');
    if (botao) {
        Carrinho.adicionar(botao.dataset.add);
        aviso('Produto adicionado ao carrinho');
    }
});

function home() {
    $('categorias').innerHTML = Object.keys(CATEGORIAS).slice(0, 4).map(k => `
        <a class="cat" href="produtos.html?cat=${k}">
            <span>${CATEGORIAS[k].icone}</span>
            ${CATEGORIAS[k].nome}
            <small>${CATEGORIAS[k].anuncios} anúncios</small>
        </a>
    `).join('');

    $('ofertas').innerHTML = PRODUTOS.filter(p => p.antigo).slice(0, 4).map(card).join('');
}
function catalogo() {
    const cat = params.get('cat');
    const busca = params.get('q') || '';
    const ofertas = params.get('ofertas');
    const palavras = normalizar(busca).split(' ').filter(p => p.length > 2);

    const produtos = PRODUTOS.filter(p => {
        const texto = normalizar(p.nome + ' ' + p.marca + ' ' + CATEGORIAS[p.cat].nome + ' ' + CATEGORIAS[p.cat].busca);
        return (!cat || p.cat === cat) && (!ofertas || p.antigo) && palavras.every(palavra => texto.includes(palavra));
    });

    const faixa = cat ? CATEGORIAS[cat].faixas : [500, 2000];
    const marcas = [...new Set(produtos.map(p => p.marca))];

    function checkbox(grupo, valor, nome) {
        return `<label><input type="checkbox" data-g="${grupo}" value="${valor}"> ${nome}</label>`;
    }

    $('filtros').innerHTML = `
        <h2>Filtros</h2>
        <h3>Condição</h3>
        ${checkbox('cond', 'Novo', 'Novo')}
        ${checkbox('cond', 'Usado', 'Usado')}
        <h3>Faixa de preço</h3>
        ${checkbox('faixa', 0, `Até R$ ${faixa[0]}`)}
        ${checkbox('faixa', 1, `R$ ${faixa[0]} a R$ ${faixa[1]}`)}
        ${checkbox('faixa', 2, `Acima de R$ ${faixa[1]}`)}
        <h3>Marca</h3>
        ${marcas.map(m => checkbox('marca', m, m)).join('')}
    `;

    function aplicarFiltros() {
        const selecionados = grupo => [...document.querySelectorAll(`[data-g="${grupo}"]:checked`)].map(c => c.value);
        const condicoes = selecionados('cond');
        const faixas = selecionados('faixa');
        const marcasEscolhidas = selecionados('marca');

        let lista = produtos.filter(p => {
            const f = p.preco <= faixa[0] ? '0' : p.preco <= faixa[1] ? '1' : '2';

            return (!condicoes.length || condicoes.includes(p.cond)) &&
                   (!faixas.length || faixas.includes(f)) &&
                   (!marcasEscolhidas.length || marcasEscolhidas.includes(p.marca));
        });

        const ordem = $('ordem').value;

        if (ordem === 'menor') lista.sort((a, b) => a.preco - b.preco);
        if (ordem === 'maior') lista.sort((a, b) => b.preco - a.preco);
        if (ordem === 'nota') lista.sort((a, b) => b.nota - a.nota);

        $('contagem').textContent = `${lista.length} resultado(s)`;
        $('lista').innerHTML = lista.length ? lista.map(card).join('') :
            '<div class="vazio">Nenhum produto encontrado com esses filtros.</div>';
    }

    $('filtros').onchange = aplicarFiltros;
    $('ordem').onchange = aplicarFiltros;
    aplicarFiltros();
}

function produto() {
    const p = PRODUTOS.find(x => x.id === params.get('id'));

    if (!p) {
        $('detalhe').innerHTML = '<div class="vazio">Produto não encontrado.<br><a class="btn" href="produtos.html">Ver produtos</a></div>';
        return;
    }

    const c = CATEGORIAS[p.cat];

    $('detalhe').innerHTML = `
        <p class="caminho"><a href="index.html">Início</a> &gt; <a href="produtos.html?cat=${p.cat}">${c.nome}</a> &gt; ${p.nome}</p>
        <div class="produto">
            <div class="gal">
                <div class="foto"><img src="${p.img}.jpg" alt="${p.nome}"></div>
            </div>
            <div class="info">
                <span class="frete">${p.cond} | ${p.vendidos} vendidos</span>
                <h1>${p.nome}</h1>
                <div class="estrelas">${estrelas(p.nota)} ${p.nota} <small>(${p.aval} avaliações)</small></div>
                <p class="descp">${p.desc}</p>
                <ul>${c.specs.map(s => `<li>${s}</li>`).join('')}</ul>
                <div class="vend">
                    <span>${c.loja[0]}</span>
                    <div>${c.loja}<small>${c.pos}% de avaliações positivas</small></div>
                </div>
            </div>
            <aside class="compra">
                ${p.antigo ? `<div class="antes">${brl(p.antigo)}</div>` : ''}
                <div class="preco">${brl(p.preco)}</div>
                <p>em até 10x de ${brl(p.preco / 10)} sem juros</p>
                <span class="frete">Frete grátis</span>
                <p>Estoque: ${p.estoque} disponíveis</p>
                <div class="ctl">
                    <button data-q="-1">−</button>
                    <span id="qv">1</span>
                    <button data-q="1">+</button>
                </div>
                <button class="btn" id="add">Adicionar ao carrinho</button>
                <button class="btn btn-sec" id="comprar">Comprar agora</button>
                <p>Compra protegida: devolução grátis em 30 dias</p>
            </aside>
        </div>
        <div class="aval">
            <h2>Avaliações de quem comprou</h2>
            ${c.reviews.map(r => `<div><div class="estrelas">★★★★★</div><p>${r}</p></div>`).join('')}
        </div>
        <h2 class="t">Veja também</h2>
        <div class="grade g3">
            ${PRODUTOS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 3).map(card).join('')}
        </div>
    `;

    let quantidade = 1;

    document.querySelectorAll('[data-q]').forEach(b => {
        b.onclick = () => {
            quantidade = Math.max(1, Math.min(p.estoque, quantidade + Number(b.dataset.q)));
            $('qv').textContent = quantidade;
        };
    });

    $('add').onclick = () => {
        Carrinho.adicionar(p.id, quantidade);
        aviso('Produto adicionado ao carrinho');
    };

    $('comprar').onclick = () => {
        Carrinho.adicionar(p.id, quantidade);
        location.href = 'carrinho.html';
    };
}

function carrinhoPag() {
    const el = $('carrinho');

    function desenhar() {
        const itens = Carrinho.itens();

        if (!itens.length) {
            el.innerHTML = '<div class="vazio">Seu carrinho está vazio.<br><a class="btn" href="produtos.html">Ver instrumentos</a></div>';
            return;
        }

        el.innerHTML = `
            <div class="duas">
                <div>
                    ${itens.map(p => `
                        <div class="linha">
                            <div class="foto"><img src="${p.img}.jpg" alt="${p.nome}"></div>
                            <div class="dados">
                                <b>${p.nome}</b>
                                Vendido por ${CATEGORIAS[p.cat].loja}<br>
                                <span class="frete">Frete grátis</span><br>
                                <button class="rem" data-rem="${p.id}">Remover</button>
                            </div>
                            <div class="ctl">
                                <button data-menos="${p.id}">−</button>
                                <span>${p.qtd}</span>
                                <button data-mais="${p.id}">+</button>
                            </div>
                            <div class="preco">${brl(p.preco * p.qtd)}</div>
                        </div>
                    `).join('')}
                    <a class="link" href="produtos.html">← Continuar comprando</a>
                </div>
                <div class="resumo">
                    <h3>Resumo da compra</h3>
                    <p><span>Produtos (${Carrinho.quantidade()})</span><span>${brl(Carrinho.subtotal())}</span></p>
                    <p><span>Frete</span><span>Grátis</span></p>
                    <div class="cupom">
                        <input id="cupom" placeholder="Cupom (use SONORA10)" value="${Carrinho.cupom()}">
                        <button id="aplicar">Aplicar</button>
                    </div>
                    ${Carrinho.desconto() ? `<p><span>Desconto (10%)</span><span>- ${brl(Carrinho.desconto())}</span></p>` : ''}
                    <p class="total"><span>Total</span><span>${brl(Carrinho.total())}</span></p>
                    <a class="btn" href="checkout.html">Continuar compra</a>
                </div>
            </div>
        `;
    }

    el.onclick = e => {
        const b = e.target;
        const id = b.dataset.rem || b.dataset.menos || b.dataset.mais;
        const item = Carrinho.ler().find(p => p.id === id);

        if (b.dataset.rem) Carrinho.remover(id);
        if (b.dataset.menos && item) Carrinho.alterar(id, item.qtd - 1);
        if (b.dataset.mais && item) Carrinho.alterar(id, item.qtd + 1);

        if (b.id === 'aplicar') {
            aviso(Carrinho.aplicarCupom($('cupom').value) ? 'Cupom aplicado' : 'Cupom inválido');
        }

        desenhar();
    };

    desenhar();
}

const soNumeros = v => v.replace(/\D/g, '');

function cpfValido(valor) {
    const cpf = soNumeros(valor);

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    for (let n = 9; n <= 10; n++) {
        let soma = 0;

        for (let i = 0; i < n; i++) {
            soma += Number(cpf[i]) * (n + 1 - i);
        }

        if ((soma * 10 % 11) % 10 !== Number(cpf[n])) return false;
    }

    return true;
}

function validadeValida(valor) {
    const partes = valor.split('/');

    if (partes.length !== 2) return false;

    const mes = Number(partes[0]);
    const ano = Number(partes[1]);
    const hoje = new Date();

    return mes >= 1 && mes <= 12 &&
        (ano > hoje.getFullYear() % 100 ||
        (ano === hoje.getFullYear() % 100 && mes >= hoje.getMonth() + 1));
}

const mascaras = {
    cpf: v => soNumeros(v).slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2'),
    telefone: v => soNumeros(v).slice(0, 11).replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2'),
    cep: v => soNumeros(v).slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2'),
    cartao: v => soNumeros(v).slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 '),
    validade: v => soNumeros(v).slice(0, 4).replace(/(\d{2})(\d)/, '$1/$2'),
    cvv: v => soNumeros(v).slice(0, 4)
};

function aplicarMascaras() {
    Object.keys(mascaras).forEach(id => {
        if ($(id)) $(id).oninput = () => $(id).value = mascaras[id]($(id).value);
    });
}

function validar(form, regras) {
    let valido = true;

    for (const id in regras) {
        const campo = $(id);
        if (!campo) continue;

        const resultado = regras[id](campo.value);
        const erro = form.querySelector(`[data-erro="${id}"]`);

        if (erro) erro.textContent = resultado === true ? '' : resultado;
        if (resultado !== true) valido = false;
    }

    return valido;
}
function checkout() {
    const itens = Carrinho.itens();

    if (!itens.length) {
        location.href = 'carrinho.html';
        return;
    }

    $('itens').innerHTML = itens.map(p =>
        `<div class="item"><span>${p.qtd}x ${p.nome}</span><span>${brl(p.preco * p.qtd)}</span></div>`
    ).join('');

    $('sub').textContent = brl(Carrinho.subtotal());
    $('desc').textContent = '- ' + brl(Carrinho.desconto());
    $('total').textContent = brl(Carrinho.total());

    const total = Carrinho.total();

    $('parcelas').innerHTML = Array.from({length: 10}, (_, i) =>
        `<option value="${i + 1}">${i + 1}x de ${brl(total / (i + 1))} sem juros</option>`
    ).join('');

    const codigo = '00020126SONORA' + Math.random().toString(36).slice(2, 12).toUpperCase() + '5204000053039865802BR';

    $('pixcod').value = codigo;

    let qr = '';

    for (let i = 0; i < 441; i++) {
        qr += `<i class="${Math.random() > 0.5 ? 'p' : ''}"></i>`;
    }

    $('qr').innerHTML = qr;

    function forma() {
        return document.querySelector('[name=pgto]:checked').value;
    }

    function trocarPagamento() {
        const f = forma();

        $('p-cartao').hidden = f === 'pix';
        $('p-parc').hidden = f !== 'credito';
        $('p-pix').hidden = f !== 'pix';
    }

    document.querySelectorAll('[name=pgto]').forEach(r => {
        r.onchange = trocarPagamento;
    });

    trocarPagamento();

    $('copiar').onclick = () => {
        if (navigator.clipboard) navigator.clipboard.writeText(codigo);
        aviso('Código PIX copiado');
    };

    aplicarMascaras();

    const dados = ['nome', 'email', 'cpf', 'telefone', 'cep', 'endereco', 'numero', 'bairro', 'cidade', 'estado'];

    $('form').onsubmit = e => {
        e.preventDefault();

        const textoObrigatorio = mensagem => v => v.trim().length > 1 || mensagem;

        const regras = {
            nome: v => v.trim().split(/\s+/).length >= 2 || 'Informe nome e sobrenome',
            email: v => /^\S+@\S+\.\S+$/.test(v) || 'E-mail inválido',
            cpf: v => cpfValido(v) || 'CPF inválido',
            telefone: v => soNumeros(v).length >= 10 || 'Telefone inválido',
            cep: v => soNumeros(v).length === 8 || 'CEP inválido',
            endereco: textoObrigatorio('Informe o endereço'),
            numero: v => v.trim() !== '' || 'Informe o número',
            bairro: textoObrigatorio('Informe o bairro'),
            cidade: textoObrigatorio('Informe a cidade'),
            estado: v => /^[A-Za-z]{2}$/.test(v.trim()) || 'Use a sigla (ex: RS)'
        };

        if (forma() !== 'pix') {
            regras.cartao = v => soNumeros(v).length === 16 || 'Número do cartão inválido';
            regras.cartaonome = textoObrigatorio('Informe o nome impresso');
            regras.validade = v => validadeValida(v) || 'Validade inválida';
            regras.cvv = v => /^\d{3,4}$/.test(v) || 'CVV inválido';
        }

        if (!validar($('form'), regras)) {
            aviso('Corrija os campos destacados');
            return;
        }

        const pagamento = forma();

        const pedido = {
            numero: 'SON-' + Math.floor(10000 + Math.random() * 90000),
            data: new Date().toLocaleString('pt-BR'),
            itens: itens.map(p => ({
                nome: p.nome,
                qtd: p.qtd,
                preco: p.preco
            })),
            total: Carrinho.total(),
            forma: pagamento,
            parcelas: pagamento === 'credito' ? Number($('parcelas').value) : 1,
            pix: pagamento === 'pix' ? codigo : '',
            cliente: Object.fromEntries(dados.map(id => [id, $(id).value]))
        };

        localStorage.setItem('sonora_pedido', JSON.stringify(pedido));

        Carrinho.limpar();

        location.href = 'confirmacao.html';
    };
}

function confirmacao() {
    const p = JSON.parse(localStorage.getItem('sonora_pedido') || 'null');

    if (!p) {
        $('confirmacao').innerHTML = '<div class="vazio">Nenhum pedido encontrado.<br><a class="btn" href="index.html">Voltar à loja</a></div>';
        return;
    }

    const nomes = {
        credito: 'Cartão de crédito',
        debito: 'Cartão de débito',
        pix: 'PIX'
    };

    const pagamento = nomes[p.forma] + (
        p.forma === 'credito'
            ? ` em ${p.parcelas}x de ${brl(p.total / p.parcelas)} sem juros`
            : ''
    );

    $('confirmacao').innerHTML = `
        <div class="passos">
            <div class="feito">1. Carrinho</div>
            <div class="feito">2. Entrega e pagamento</div>
            <div class="feito">3. Confirmação</div>
        </div>

        <div class="centro">
            <div class="icone">✓</div>

            <h2>Compra realizada com sucesso!</h2>

            <p>
                Pedido nº ${p.numero} em ${p.data}.<br>
                Obrigado, ${p.cliente.nome.split(' ')[0]}!
                Enviamos os detalhes para ${p.cliente.email}.
            </p>

            <div class="resumo">
                ${p.itens.map(i => `
                    <p>
                        <span>${i.qtd}x ${i.nome}</span>
                        <span>${brl(i.preco * i.qtd)}</span>
                    </p>
                `).join('')}

                <p><span>Pagamento</span><span>${pagamento}</span></p>

                <p>
                    <span>Entrega em</span>
                    <span>${p.cliente.endereco}, ${p.cliente.numero} - ${p.cliente.cidade}/${p.cliente.estado.toUpperCase()}</span>
                </p>

                <p class="total">
                    <span>Total</span>
                    <span>${brl(p.total)}</span>
                </p>
            </div>

            ${p.forma === 'pix' ? `
                <div class="form">
                    <h3>Código PIX (simulação)</h3>
                    <p style="word-break:break-all">${p.pix}</p>
                </div>
            ` : ''}

            <a class="btn" href="index.html">Voltar à loja</a>
            <a class="btn btn-sec" href="produtos.html">Ver mais instrumentos</a>
        </div>
    `;
}

function conta(modo) {
    const usuarios = () => JSON.parse(localStorage.getItem('sonora_usuarios') || '[]');

    const usuario = usuarios().find(u =>
        u.email === localStorage.getItem('sonora_sessao')
    );

    if (modo === 'entrar' && usuario) {
        $('form').innerHTML = `
            <h3>Olá, ${usuario.nome.split(' ')[0]}!</h3>
            <p>Você já está conectado como ${usuario.email}.</p>
            <button class="btn" type="button" id="sair">Sair</button>
            <a class="btn btn-sec" href="index.html">Ir para a loja</a>
        `;

        $('sair').onclick = () => {
            localStorage.removeItem('sonora_sessao');
            location.reload();
        };

        return;
    }

    aplicarMascaras();

    $('form').onsubmit = e => {
        e.preventDefault();

        const regras = {
            email: v => /^\S+@\S+\.\S+$/.test(v) || 'E-mail inválido',
            senha: v => v.length >= 6 || 'Mínimo de 6 caracteres'
        };

        if (modo === 'criar') {
            regras.nome = v => v.trim().split(/\s+/).length >= 2 || 'Informe nome e sobrenome';
            regras.senha2 = v => v === $('senha').value || 'As senhas não conferem';
            regras.endereco = v => v.trim().length > 3 || 'Informe o endereço';
            regras.cep = v => soNumeros(v).length === 8 || 'CEP inválido';
        }

        if (!validar($('form'), regras)) return;

        const email = $('email').value.trim().toLowerCase();

        if (modo === 'entrar') {
            const usuario = usuarios().find(u =>
                u.email === email && u.senha === $('senha').value
            );

            if (!usuario) {
                $('form').querySelector('[data-erro=senha]').textContent = 'E-mail ou senha incorretos';
                return;
            }
        } else {
            if (usuarios().some(u => u.email === email)) {
                $('form').querySelector('[data-erro=email]').textContent = 'E-mail já cadastrado';
                return;
            }

            usuarios().push({
                nome: $('nome').value,
                email,
                senha: $('senha').value,
                endereco: $('endereco').value,
                cep: $('cep').value
            });

            localStorage.setItem('sonora_usuarios', JSON.stringify(usuarios()));
        }

        localStorage.setItem('sonora_sessao', email);

        location.href = 'index.html';
    };
}

iniciar();

const paginas = {
    home,
    catalogo,
    produto,
    carrinho: carrinhoPag,
    checkout,
    confirmacao,
    entrar: () => conta('entrar'),
    criar: () => conta('criar')
};

if (paginas[pagina]) paginas[pagina]();
