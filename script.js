const produtos = [
    { nome: "Ecobag Brim", preco: "R$ 45,00", imagem: "images/ecobag.png" },
    { nome: "Boné Brim", preco: "R$ 50,00", imagem: "images/bone.png" },
    { nome: "Corta-vento Hacoré", preco: "R$ 120,00", imagem: "images/corta-vento.png" },
    { nome: "Tirante + Borracha", preco: "R$ 15,00", imagem: "images/tirante.png" },
    { nome: "Camisa Edição 2022", preco: "R$ 50,00", imagem: "images/camisa.png" },
    { nome: "Moletom Edição 2022 e Calça Moletom", preco: "R$ 135,00 e R$ 110,00", imagem: "images/moletom.png" }
];

const grid = document.querySelector(".grid");

// Renderizar Produtos com classe Reveal
produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card", "reveal");

    card.innerHTML = `
        <img src="${produto.imagem}" class="produto-img">
        <div class="card-content">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <button>Comprar Agora</button>
        </div>
    `;
    grid.appendChild(card);
});

// Efeito de Scroll no Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Revelação Suave (Scroll Reveal)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Gerador de Faíscas de Fogueira
function criarFaiscas() {
    const container = document.getElementById('faiscas-container');
    const quantidade = 40;

    for (let i = 0; i < quantidade; i++) {
        const faisca = document.createElement('div');
        faisca.className = 'faisca';
        
        const tamanho = Math.random() * 3 + 2 + 'px';
        faisca.style.width = tamanho;
        faisca.style.height = tamanho;
        
        faisca.style.left = Math.random() * 100 + '%';
        faisca.style.animationDelay = Math.random() * 5 + 's';
        faisca.style.opacity = Math.random() * 0.6;
        
        container.appendChild(faisca);
    }
}
criarFaiscas();

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const fechar = document.querySelector(".fechar");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("produto-img")) {
        modal.style.display = "block";
        modalImg.src = e.target.src;
    }
});

fechar.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };