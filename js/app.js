// fetch("https://fakestoreapi.com/products").then((response) => {
//   console.log(
//     response
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   );
// });

async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

// async function createData() {
//   const data = await getData();

//   product.forEach((product) => {
//     const containerEL = document.createElement("div");
//     const titeEL = document.createElement("span");
//     const imagEL = document.createElement("img");

//     titeEL.textContent = product.tite;
//     imagEL.src = product.img;
//     containerEL.append(titeEL, imagEL);
//     document.body.append(containerEL);
//   });
// }
const container = document.querySelector(".card");
async function gatData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function careatProducts() {
  const prodoucts = await gatData();
  console.log(prodoucts);

  let cardHTML = "";
  prodoucts.forEach((prodouct) => {
    cardHTML = `
             <div class="card">
        <img src="${prodouct.image}" alt="image" />
        <div class="titel">
          <p>${prodouct.title}</p>
          <p>$25</p>
        </div>
        <div>
          <img src="${prodouct.img}" alt="" />
          <button style="margin-left: 85px">Buy</button>
        </div>
      </div>    
    `;
    container.innerHTML += cardHTML;
  });
}

careatProducts();
