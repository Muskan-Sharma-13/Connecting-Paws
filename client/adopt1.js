// // Fetch data from backend and populate cards
// window.onload = async () => {
//   const response = await fetch('http://localhost:5000/adoptAnimals');
//   const data = await response.json();

//   for (let i of data) {
//       let card = document.createElement("div");
//       // Create card structure...

//       // Title
//       let name = document.createElement("h5");
//       name.classList.add("product-name");
//       name.innerText = i.title.toUpperCase();
//       container.appendChild(name);

//       // NGO Link
//       let ngoLink = document.createElement("a");
//       ngoLink.innerText = "NGO: " + i.ngolink;
//       ngoLink.setAttribute("href", i.ngolink);
//       ngoLink.setAttribute("target", "_blank");
//       container.appendChild(ngoLink);

//       // Append card to products container
//       document.getElementById("products").appendChild(card);
//   }
// };
document.getElementById("loadButton").addEventListener("click", async () => {
  try {
      const response = await fetch('http://localhost:5000/adoptAnimals');
      const data = await response.json();
      console.log(data)
      // Clear existing cards if any
      document.getElementById("products").innerHTML = "";

      for (let i of data) {
          let card = document.createElement("div");
          card.classList.add("card");

          let imgContainer = document.createElement("div");
          imgContainer.classList.add("image-container");
          let image = document.createElement("img");
          image.setAttribute("src", i.image);
          imgContainer.appendChild(image);
          card.appendChild(imgContainer);

          let container = document.createElement("div");
          container.classList.add("container");
          let name = document.createElement("h5");
          name.classList.add("product-name");
          name.innerText = i.productName.toUpperCase();
          container.appendChild(name);

          let category = document.createElement("p");
          category.innerText = "Category: " + i.category;
          container.appendChild(category);

          let ngoLink = document.createElement("a");
          ngoLink.innerText = "NGO: " + i.ngo;
          ngoLink.setAttribute("href", i.ngo);
          ngoLink.setAttribute("target", "_blank");
          container.appendChild(ngoLink);

          card.appendChild(container);
          document.getElementById("products").appendChild(card);
      }
  } catch (error) {
      console.error('Error fetching and displaying data:', error);
  }
});


// Filter and search functions...

let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

// var swiper = new Swiper(".gallery-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     spaceBetween:20,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0:{
//             slidesPerView:1,
//         },
//         700:{
//             slidesPerView:2,
//         },
//     }
// })
// let products = {
//     data: [
//       {
//         productName: "Poodle -Dog",
//         category: "Dog",
//         ngo: "Animal Matter To Me (AMTM) - Animal Hospital",
//         image: "imagepet/poodle.png",
//       },
//       {
//         productName: "Street cat",
//         category: "Cats",
//         ngo: "Animal Matter To Me (AMTM) - Animal Hospital",
//         image: "imagepet/streetcat.png",
//       },
//       {
//         productName: "Indian Ringneck Parakeet(Parrot) -Bird",
//         category: "Birds",
//         ngo: "MAA (Medical Aid For Animals Birds)",
//         image: "imagepet/parrot.png",
//       },
//       {
//         productName: "Bombay Cat",
//         category: "Cats",
//         ngo: "Animal kingdom Welfare Foundation",
//         image: "imagepet/bcat.png",
//       },
//       {
//         productName: "Netherland Dwarf Rabbit",
//         category: "Rabbits",
//         ngo: "Helping Hands Animal Welfare Foundation",
//         image: "imagepet/rabbit.png",
//       },
//       {
//         productName: "Street Dog",
//         category: "Dogs",
//         ngo: "Universal Animal Welfare Society l Dog NGO in Malad",
//         image: "imagepet/streetdog.png",
//       },
//       {
//         productName: "House Sparrow - Bird",
//         category: "Birds",
//         ngo: "Birds Animals Serpents Saviours Org",
//         image: "imagepet/sparrow.png",
//       },
//       {
//         productName: "German Shepherd -Dog",
//         category: "Dogs",
//         ngo: "Raksha Animal Welfare Center",
//         image: "imagepet/dog.png",
//       },
//     ],
//   };
//   for (let i of products.data) {
//     //Create Card
//     let card = document.createElement("div");
//     //Card should have category and should stay hidden initially
//     card.classList.add("card", i.category, "hide");
//     //image div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement("div");
//     container.classList.add("container");
//     //product name
//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
    
//         //price
//         // let price = document.createElement("h6");
//         // price.innerText = "$" + i.price;
//         // container.appendChild(price);
//         // card.appendChild(container);
//         // document.getElementById("products").appendChild(card);
      
// // NGO
// // let ngoLink = document.createElement("a");
// // ngoLink.classList.add("ngo-link");
// // ngoLink.innerText = "NGO: " + i.ngo;
// // ngoLink.setAttribute("href", "https://www.google.com/search?q=" + encodeURI(i.ngo));
// // ngoLink.setAttribute("target", "_blank"); // Open link in a new tab
// // container.appendChild(ngoLink);
// // NGO
// let ngoLink = document.createElement("a");
// ngoLink.innerText = "NGO: " + i.ngo;
// ngoLink.setAttribute("href", "https://www.google.com/search?q=" + encodeURI(i.ngo));
// ngoLink.setAttribute("target", "_blank"); // Open link in a new tab
// container.appendChild(ngoLink);
// card.appendChild(container);
// document.getElementById("products").appendChild(card);
  


//   }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };