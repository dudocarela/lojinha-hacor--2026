const produtos = [
    {
        nome: "Camiseta Nature",
        preco: "R$ 89,90",
        imagem: "https://via.placeholder.com/300"
    },
    {
        nome: "Moletom Hacoré",
        preco: "R$ 159,90",
        imagem: "https://via.placeholder.com/300"
    },
    {
        nome: "Calça Verde",
        preco: "R$ 129,90",
        imagem: "https://via.placeholder.com/300"
    },
    {
        nome: "Jaqueta Premium",
        preco: "R$ 199,90",
        imagem: "https://via.placeholder.com/300"
    }
];

const grid = document.querySelector(".grid");

produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${produto.imagem}" alt="">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <button>Comprar</button>
    `;

    grid.appendChild(card);
});

/* ANIMAÇÃO AO SCROLL */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 50){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});