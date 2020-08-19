//fetch

fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
  .then(r => r.json())
  .then(jsonBody => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
  });

const data = {
  id: "carol",
  nome: "ca",
  email: "carol@carol.com",
  senha: "123456",
  cep: "001",
  rua: "Amelia",
  numero: "87",
  bairro: "Taquaral",
  cidade: "Campinas",
  estado: "São Paulo"
};

fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

// fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
//   .then(response => response.json())
//   .then(jsonResponse => {
//     document.querySelector("#app").innerText = jsonResponse[0].nome;
//   });

// const data = {
//   id: Math.random() + "andrerafa",
//   nome: "carol",
//   email: Math.random() + "carol@carol.com",
//   senha: "00",
//   cep: "00",
//   rua: "Amelia",
//   numero: "87",
//   bairro: "Taquas",
//   cidade: "sp",
//   estado: "sp"
// };
// fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// });
