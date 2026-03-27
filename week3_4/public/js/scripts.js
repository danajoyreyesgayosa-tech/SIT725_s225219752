console.log("JS loaded ✅");

const cardList = [
  {
    title: "Pasta",
    image: "images/pasta.jpg",
    link: "About Pasta",
    description: "Creamy pasta made with rich sauce and cheese."
  },
  {
    title: "Curry",
    image: "images/curry.jpg",
    link: "About Curry",
    description: "Spicy and flavorful curry cooked with herbs and spices."
  },
  {
    title: "Pancakes",
    image: "images/pancakes.jpg",
    link: "About Pancakes",
    description: "Soft fluffy pancakes served with syrup."
  }
];

// ALERT (like your example clickMe)
const clickMe = () => {
  alert("Thanks for clicking About Me! 😊");
};

const addCards = (items) => {
  items.forEach(item => {

    let card = `
      <div class="col s4 center-align">
        <div class="card medium">

          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>

          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>

          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>

        </div>
      </div>
    `;

    $("#card-section").append(card);
  });
};

$(document).ready(function () {

  $('.modal').modal();
  $('.materialboxed').materialbox();

  addCards(cardList);

  // 👉 ABOUT ME CLICK FIX
  $("a:contains('About Me')").click(function () {
    clickMe();
  });

});