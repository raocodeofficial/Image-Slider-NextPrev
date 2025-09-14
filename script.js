const cardList = document.querySelector(".card-list");
  const cards = document.querySelectorAll(".card-item");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let cardWidth = 420;
  let index = 0;

  // Duplicate full card list
  cardList.innerHTML += cardList.innerHTML;
  let totalCards = document.querySelectorAll(".card-item").length;

  function goNext() {
    index++;
    cardList.style.transition = "transform 0.5s ease-in-out";
    cardList.style.transform = `translateX(-${cardWidth * index}px)`;

    if (index >= totalCards / 2) {
      setTimeout(() => {
        cardList.style.transition = "none";
        index = 0;
        cardList.style.transform = `translateX(0px)`;
      }, 500);
    }
  }

  function goPrev() {
    if (index <= 0) {
      cardList.style.transition = "none";
      index = totalCards / 2;
      cardList.style.transform = `translateX(-${cardWidth * index}px)`;
      setTimeout(() => {
        index--;
        cardList.style.transition = "transform 0.5s ease-in-out";
        cardList.style.transform = `translateX(-${cardWidth * index}px)`;
      }, 20);
    } else {
      index--;
      cardList.style.transition = "transform 0.5s ease-in-out";
      cardList.style.transform = `translateX(-${cardWidth * index}px)`;
    }
  }

  nextBtn.addEventListener("click", goNext);
  prevBtn.addEventListener("click", goPrev);

  // 👉 Auto-slide every 3s
  let autoSlide = setInterval(goNext, 3000);

  // 👉 Pause on hover
  cardList.addEventListener("mouseenter", () => clearInterval(autoSlide));
  cardList.addEventListener("mouseleave", () => autoSlide = setInterval(goNext, 3000));