const btnMarvel = document.getElementById("btnCategoryMarvel");
const btnDc = document.getElementById("btnCategoryDc");
const listarCard = document.getElementById("listarCard");

btnMarvel.addEventListener("click", () => {
  getData("http://localhost:4000/marvel");
});

btnDc.addEventListener("click", () => {
  getData("http://localhost:4000/dc");
});

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);

  listarCard.innerHTML = "";

  data.forEach((movie) => {
    const { name, description, category, image } = movie;
    listarCard.innerHTML += `
        <div class="card mt-5" style="width: 18rem;">
            <img class="card-img-top" src="${image}" alt="Card image cap" width="100" height="auto">
            <div class="card-body">
                <h4 class="card-text">${name}</h4>
                <p class="card-text">${description}</p>
                <p class="card-text">${category}</p>
            </div>
        </div>
    `;
  });
};
