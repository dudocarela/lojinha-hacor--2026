const produtos = [
    { nome: "Ecobag Brim", preco: "R$ 45,00", imagem: "images/ecobag.png" },
    { nome: "Boné Brim", preco: "R$ 50,00", imagem: "images/bone.png" },
    { nome: "Corta-vento Hacoré", preco: "R$ 120,00", imagem: "images/corta-vento.png" },
    { nome: "Tirante + Borracha", preco: "R$ 15,00", imagem: "images/tirante.png" },
    { nome: "Camisa Edição 2022", preco: "R$ 50,00", imagem: "images/camisa.png" },
    { nome: "Moletom Edição 2022", preco: "R$ 130,00", imagem: "images/moletom.png" }
];

const grid = document.querySelector(".grid");

produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${produto.imagem}">
        <div class="card-content">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <button>Comprar</button>
        </div>
    `;

    grid.appendChild(card);
});

/* ANIMAÇÃO */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const pos = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (pos < screen - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

/* MENU MOBILE */
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});