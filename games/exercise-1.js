let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

  const divGrid = document.querySelector('.b-grid')

  const pintarTablero = () => {
    divGrid.innerHTML = ''
    for (const card of cardArray) {
        const imgCard = document.createElement('img')
        imgCard.src = "public/exercise-1/universe.svg"
        imgCard.style.cursor = "pointer"
        divGrid.appendChild(imgCard)
        validarClick(card, imgCard)
    }
  }
  let planetas = []
  const validarClick = (card, imgCard) => {
    imgCard.addEventListener("click", () => {
      imgCard.src = card.img
      planetas.push(card)
      console.log(planetas)
      if(planetas.length === 2){
        if (planetas[1].id === planetas[0].id) {
          alert("Jugada no válida")
          //sumar score y demás
          imgCard.src = "public/exercise-1/universe.svg"      
        }
        else if (planetas[1].id !== planetas[0].id && planetas[1].name !== planetas[0].name) {
          alert("Jugada no válida")
          imgCard.src = "public/exercise-1/universe.svg" 
        }
        else if(planetas[1].id !== planetas[0].id && planetas[1].name === planetas[0].name){
          alert("Toma ya, acertaste!!")

        }
              planetas = []
      }

    });
    //PARA CUANDO LA PAREJA ES CORRECTA
    //imgCard.src = "public/exercise-1/tick.svg"
  };

  pintarTablero()