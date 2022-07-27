/*****************************links ohne a tags xd */

const backpackSection = document.querySelector(".backpackSection");

backpackSection.addEventListener("click", (event) => {
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

const bookSection = document.querySelector(".bookSection");

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
});

/*******************ja is bissl zu lange aber dafür ohne die a Tags */

/******************************************burger menu */

let cheeseburgerButton = document.querySelector(".button_menu");
let menu = document.querySelector(".menu_menu");

cheeseburgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  cheeseburgerButton.classList.toggle("active");
});
