let recipes = {
    data: [
      {
        recipeName: "salisbuty steak",
        category: "breakfast",
        
        image: "./media/images/image1.jpg",
      },
      {
        recipeName: "chipotle chicken",
        category: "breakfast",
        
        image: "./media/images/image2.jpg",
      },
      {
        recipeName: "chicken nuggets",
        category: "dinner",
        
        image: "./media/images/image3.jpg",
      },
      {
        recipeName: "meat balls",
        category: "lunch",
        
        image: "./media/images/image4.jpg",
      },
      {
        recipeName: "spanish salad",
        category: "lunch",
        
        image: "./media/images/image5.jpg",
      },
      {
        recipeName: "cottage cheese pasta",
        category: "breakfast",
        
        image: "./media/images/image6.jpg",
      },
      {
        recipeName: "cottage cheese pasta",
        category: "dinner",
        
        image: "./media/images/image7.jpg",
      },
      {
        recipeName: "fried chicken",
        category: "snack",
        
        image: "./media/images/image8.jpg",
      },
      {
        recipeName: "bashamel pasta",
        category: "snack",
        
        image: "./media/images/image9.jpg",
      },
      {
        recipeName: "tuscan chicken recipe",
        category: "snack",
        
        image: "./media/images/image10.jpg",
      },
      {
        recipeName: "masala pasta",
        category: "snack",
        
        image: "./media/images/image11.jpg",
      },
      {
        recipeName: "red pasta",
        category: "snack",
        
        image: "./media/images/image12.jpg",
      },
    ],
  };
  
  for (let i of recipes.data) {
  
    let card = document.createElement("div");
  
    card.classList.add("card", i.category, "hide");
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let name = document.createElement("h5");
    name.classList.add("recipe-name");
    name.innerText = i.recipeName.toUpperCase();
    container.appendChild(name);
    
    
  
    card.appendChild(container);
    document.getElementById("recipes").appendChild(card);
  }
  
  
  function filterRecipe(value) {
  
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
   
    let elements = document.querySelectorAll(".card");
   
    elements.forEach((element) => {
      
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        
        if (element.classList.contains(value)) {
  
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  
  document.getElementById("search").addEventListener("click", () => {
  
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".recipe-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
      
      if (element.innerText.includes(searchInput.toUpperCase())) {
        
        cards[index].classList.remove("hide");
      } else {
        
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  window.onload = () => {
    filterRecipe("all");
  };