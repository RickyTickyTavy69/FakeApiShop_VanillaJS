/*****************************links ohne a tags xd */

/****************************************States***************************************/

/*backpackSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("Link")) {
    const linkNumber = String(event.target.classList)[
      String(event.target.classList).length - 1
    ];
    switch (linkNumber) {
      case "1":
        window.location.href = "https://amzn.to/32MmHgL";
        break;
      case "2":
        window.location.href = "https://amzn.to/2WX7vtD";
        break;
      case "3":
        window.location.href = "https://amzn.to/2I3WvXM";
        break;
      case "4":
        window.location.href = "https://amzn.to/2YX3043";
        break;
      case "5":
        window.location.href = "https://amzn.to/2KfP3ee";
        break;
      case "6":
        window.location.href = "https://amzn.to/2FYB3zT";
        break;
      case "7":
        window.location.href =
          "https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991";
        break;
    }
  }
});

/*const bookSection = document.querySelector(".bookSection");

bookSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("Link")) {
    const linkNumber = String(event.target.classList)[
      String(event.target.classList).length - 1
    ];
    switch (linkNumber) {
      case "1":
        window.location.href = "https://amzn.to/2YQLnCV";
        break;
      case "2":
        window.location.href = "https://amzn.to/2I3lbQ7";
        break;
      case "3":
        window.location.href = "https://amzn.to/2IifSvA";
        break;
      case "4":
        window.location.href = "https://amzn.to/2G84CiT";
        break;
      case "5":
        window.location.href = "https://amzn.to/2YWPz3N";
        break;
      case "6":
        window.location.href = "https://amzn.to/2KhwTsz";
        break;
      case "7":
        window.location.href =
          "https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991";
        break;
    }
  }
});

const lampSection = document.querySelector(".lampSection");

lampSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("Link")) {
    const linkNumber = String(event.target.classList)[
      String(event.target.classList).length - 1
    ];
    switch (linkNumber) {
      case "1":
        window.location.href = "http://www.grupaproducts.com/arigato/";
        break;
      case "2":
        window.location.href = "https://amzn.to/2CZiPxO";
        break;
      case "3":
        window.location.href =
          "https://heyshop.es/collections/home/products/h-hey";
        break;
      case "4":
        window.location.href = "https://amzn.to/2UGLHEQ";
        break;
      case "5":
        window.location.href = "https://amzn.to/2UFjEWp";
        break;
      case "6":
        window.location.href = "https://amzn.to/2OTHEQg";
        break;
      case "7":
        window.location.href = "https://amzn.to/2UFHfGt";
        break;
    }
  }
});

const magazinSection = document.querySelector(".magazinSection");

magazinSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("Link")) {
    const linkNumber = String(event.target.classList)[
      String(event.target.classList).length - 1
    ];
    switch (linkNumber) {
      case "1":
        window.location.href = "https://amzn.to/2Ij1IKA";
        break;
      case "2":
        window.location.href = "https://amzn.to/2UxtLww";
        break;
      case "3":
        window.location.href = "https://amzn.to/2I5vxiq";
        break;
      case "4":
        window.location.href =
          "https://goodfuckingdesignadvice.com/products/classic-advice-print";
        break;
      case "5":
        window.location.href = "https://amzn.to/2D3yZWX";
        break;
      case "6":
        window.location.href = "https://amzn.to/2WTbsPL";
        break;
      case "7":
        window.location.href = "https://amzn.to/2GbCf4A";
        break;
    }
  }
});

const bottleSection = document.querySelector(".bottlesSection");

bottleSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("Link")) {
    const linkNumber = String(event.target.classList)[
      String(event.target.classList).length - 1
    ];
    switch (linkNumber) {
      case "1":
        window.location.href = "https://amzn.to/2WMJbdy";
        break;
      case "2":
        window.location.href = "https://amzn.to/2JLtxvk";
        break;
      case "3":
        window.location.href = "https://amzn.to/2YdSBPy";
        break;
      case "4":
        window.location.href = "https://amzn.to/2LCEfGP";
        break;
    }
  }
});*/

/*******************ja is bissl zu lange aber dafür ohne die a Tags */

/******************************************burger menu */

let cheeseburgerButton = document.querySelector(".button_menu");
let menu = document.querySelector(".menu_menu");

cheeseburgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  cheeseburgerButton.classList.toggle("active");
});


/********************************************API_Request*************************************/


const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log("data", data);

  let dataHTML = data.map((hamburger, pommes) => {

      if(pommes === 0 || pommes === 7 || pommes === 14) {

          return `<article class="product_container main_container">
                     <p class="hover_image">See this fake product</p>
                     <img
                        class="product_img"
                        src="${hamburger.image}"
                        alt="backPack"
                     />
                     <div class="price_name">
                        <p class="title">Fake ${hamburger.title}</p>
                        <p class="price">${hamburger.price}€</p>
                     </div>
                   </article>`

      } else{
          return`
          <article class="product_container small_container">
                    <p class="hover_image">See this fake product</p>
                     <img
                        class="product_img"
                        src= "${hamburger.image}"
                        alt="backPack"
                     />
                     <div class="price_name">
                        <p class="title">Fake ${hamburger.title}</p>
                        <p class="price">${hamburger.price} €</p>
                     </div>
          </article>`}
  })

    console.log("dataHTML", dataHTML);
    const main = document.querySelector(".main");
    main.innerHTML = dataHTML.join("")

    /*********************************************Add Links to the Products***************************/


    const images = document.querySelectorAll(".product_img")
    console.log("images", images);

    images.forEach((ketchup) => {
        ketchup.addEventListener("click", (event) => {
            console.log("click on img");
        })
    })

    images.forEach( (mayo) => {
        mayo.addEventListener( "mouseover", (event) => {
            event.target.parentElement.children[0].classList.add("active");
            console.log("children", event.target.parentElement.children);
        })

        mayo.addEventListener( "mouseout", (event) => {
            event.target.parentElement.children[0].classList.remove("active");
            console.log("children", event.target.parentElement.children);
        })
    })
}

getData();



/************************************************Links_Redirect****************************************/
