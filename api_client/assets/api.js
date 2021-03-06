// fetch("http://localhost:8000/banks", {
//   headers: {
//     "content-type": "application/json",
//     accept: "application/json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//     let list = document.querySelector("#bankList");
//     console.log(list);
//     list.textContent = json;
//   })
//   .catch((err) => {});

const myApp = {
  data() {
    return {
      title: "Mes banques",
      banks: [],
    };
  },
  mounted() {
    fetch("http://localhost:8000/banks", {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.banks = json;
      });
  },
};

Vue.createApp(myApp).mount("#patate");
