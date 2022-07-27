/*const backpack = document.querySelector(".LinkNumber1");

backpack.addEventListener("click", (event) => {
  console.log("click");
  window.location.href =
    "https://www.amazon.com/Fjallraven-Kanken-Laptop-Summer-Landscape/dp/B07HPDF1N2/ref=as_li_ss_tl?_encoding=UTF8&pd_rd_i=B07HPCLX39&pd_rd_r=645b8bce-15e4-498c-b663-8c5968a0b1af&pd_rd_w=9U72T&pd_rd_wg=FOm3S&pf_rd_p=588939de-d3f8-42f1-a3d8-d556eae5797d&pf_rd_r=JY6T0VZKSKK13EXAE1WJ&refRID=JY6T0VZKSKK13EXAE1WJ&th=1&linkCode=sl1&tag=thedsgnshop-20&linkId=e46380d11d72bdbaa7800c18512d508f&language=en_US";
});*/

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
