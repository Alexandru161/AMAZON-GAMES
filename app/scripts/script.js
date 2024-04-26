/* ? slider */
let d = document;
const slider = d.querySelector('.slider');
const slides = d.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const searchBtnDots = d.querySelectorAll('li[data-active]');
let pos = 0;
searchBtnDots.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    searchBtnDots.forEach((currBtn) => {
      if (currBtn !== btn) {
        currBtn.setAttribute('data-active', 'false');
      }
    })

    btn.setAttribute('data-active', 'true');
    const slidePage = btn.getAttribute('data-page');
    showSlide(parseInt(slidePage))
  })
})
function updateSearchBtns() {
  const currentSlide = slides[pos].getAttribute('data-page');
  searchBtnDots.forEach((btn) => {
    const btnPage = btn.getAttribute('data-page');
    if (btnPage === currentSlide) {
      btn.setAttribute('data-active', 'true');
    } else {
      btn.setAttribute('data-active', 'false');
    }
  })
}
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}
function goToNextSlide() {
  pos++;
  if (pos >= slides.length) {
    pos = 0;
  }
  updateSearchBtns();
  showSlide(pos);
}
function goToPreviousSlide() {
  pos--;
  if (pos < 0) {
    pos = slides.length - 1;
  } 
  updateSearchBtns();
  showSlide(pos);
}

nextBtn && nextBtn.addEventListener('click', goToNextSlide);
prevBtn && prevBtn.addEventListener('click', goToPreviousSlide);
showSlide(pos);

/* ? questions */
const faqItems = d.querySelectorAll('.faq');
let canClick = true;
faqItems.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (canClick) {
      question.classList.toggle('active');
      canClick = false;
      setTimeout(() => {
        canClick = true;
      }, 300);
    }
  })
})

/* ? LS games */
const filters = document.querySelectorAll('li[data-filter="filters"]');
const gamesContainer = document.querySelector('.games-containerCards');
const showInfoBtn = document.querySelector('.showInfoBtn');
const optionSelectGenre = document.querySelector('#genre');
let selectedValue = 'defaultSort';
const gamesList = [
  {
    imgurl: "https://www.rpgnuke.ru/wp-content/uploads/2023/09/CYBERPUNK_2077_2394783904833244239423423432234233.jpg",
    name: "CYBERPUNK 2077",
    downloads: 5000,
    rating: 8.2,
    year: 2018,
    genre: "Adventure",
    personalID: 1,
    price: '4.99$',
    description: 'A good game with amazing graphics, and many bugs, But we all love it so, gg.'
  },
  {
    imgurl: "https://cdn.akamai.steamstatic.com/steam/apps/462780/capsule_616x353.jpg?t=1696421895",
    name: "DARKSIDERS WARMASTERED EDITION",
    downloads: 3000,
    rating: 9.1,
    year: 2021,
    genre: "Rpg",
    personalID: 2,
    price: '10.99$',
    description: 'Some kind of game that i\'ve never played, good to see new games.'
  },
  {
    imgurl: "https://pbs.twimg.com/profile_images/1196787454981943296/TwfSb1cX_400x400.jpg",
    name: "DETROIT: BECOME HUMAN",
    downloads: 7000,
    rating: 7.5,
    year: 2019,
    genre: "Shooter",
    personalID: 3,
    price: '99.99$',
    description: 'Make your own decision, that is all about DETROIT.'
  },
  {
    imgurl: "https://upload.wikimedia.org/wikipedia/en/0/0e/Euro_Truck_Simulator_2_cover.jpg",
    name: "EURO TRUCK SIMULATOR",
    downloads: 2500,
    rating: 6.8,
    year: 2017,
    genre: "Adventure",
    personalID: 4,
    price: '13.00$',
    description: 'It\'s something inside you, it\'s hard to explain.'
  },
  {
    imgurl: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/SbTOirUJUZ3oNQG0eGDZAuCr.png",
    name: "MORTAL KOMBAT 11 - ULTIMATE EDITION",
    downloads: 4500,
    rating: 8.0,
    year: 2020,
    genre: "Shooter",
    personalID: 5,
    price: '45.05$',
    description: 'Very action game with all good animations and graphics that human eye needs.'
  },
  {
    imgurl: "https://m.media-amazon.com/images/M/MV5BYTg4OGFmZjgtNjY3MS00MjJiLWJkMDItM2JjNTcxYjY4MzI1XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_FMjpg_UX1000_.jpg",
    name: "Clash Royale",
    downloads: 10000,
    rating: 7.9,
    year: 2018,
    genre: "Action",
    personalID: 6,
    price: '14.88$',
    description: 'The game that will never left you with the feeling that your oponent is gay.'
  },
  {
    imgurl: "https://upload.wikimedia.org/wikipedia/en/1/1f/Alan_Wake_Game_Cover.jpg",
    name: "ALAN WAKE",
    downloads: 2500,
    rating: 6.8,
    year: 2017,
    genre: "Pixel",
    personalID: 7,
    price: '9.00$',
    description: 'Don\'t know what type of game this is but still gud.'
  },
  {
    imgurl: "https://cdn7.idcgames.com/storage/image/1235/game_home_video_bg_embebed/default.jpg",
    name: "HENTAI MOSAIQUE FIX-IT SHOPPE",
    downloads: 4500,
    rating: 8.0,
    year: 2020,
    genre: "Shooter",
    personalID: 8,
    price: '1.99$',
    description: 'I don\'t know why is this game here but someone just put it there.'
  },
  {
    imgurl: "https://image.api.playstation.com/vulcan/img/rnd/202106/2515/YVf1JI1nbgetajw8Plz6z3wC.png",
    name: "METRO EXODUS GOLD EDITION",
    downloads: 10000,
    rating: 7.9,
    year: 2018,
    genre: "Action",
    personalID: 9,
    price: '6.00$',
    description: 'Again, do now.'
  },
  {
    imgurl: "https://m.media-amazon.com/images/M/MV5BODY1ZjUxM2UtOGQwYS00ZGU0LWIwODEtMjA0MTlkZDdjMTRhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    name: "POSTAL 2",
    downloads: 4000,
    rating: 7.2,
    year: 2016,
    genre: "Horor",
    personalID: 10,
    price: '45.85$',
    description: 'I guess.'
  },
  {
    imgurl: "https://qph.cf2.quoracdn.net/main-qimg-66c63a0ad5327d98a0a727e20dac60fa.webp",
    name: "Adolf Hitler Humiliation Simulator",
    downloads: 600000,
    rating: 10,
    year: 1939,
    genre: "Adventure",
    personalID: 11,
    price: '20.00$',
    description: 'A. Golem makes this website looks pretty nice and peaceful.'
  },
  {
    imgurl: "https://cdn1.epicgames.com/107bd7324f39429ca4e7e9e44765d8cf/offer/Diesel_productv2_mafia-ii-definitive-edition_home_EGS_MafiaIIDefinitiveEdition_RedKiteGames_S2-1200x1600-4cbc94d86b3b82ef8a532fa96a2f28145dae0713-1200x1600-f2cdf5d42079674921f4a36e0254e088.jpg",
    name: "MAFIA II: DEFINITIVE EDITION",
    downloads: 3000,
    rating: 9.1,
    year: 2021,
    genre: "Rpg",
    personalID: 12,
    price: '1.00$',
    description: 'Aidono.'
  },
  {
    imgurl: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/XCOM_2_cover_art.jpg/274px-XCOM_2_cover_art.jpg",
    name: "XOr 2",
    downloads: 7000,
    rating: 7.5,
    year: 2019,
    genre: "Shooter",
    personalID: 13,
    price: '4$',
    description: 'Tf is this game. Never heared.'
  },
  {
    imgurl: "https://gaming-cdn.com/images/products/1857/orig/tom-clancy-s-rainbow-six-siege-ultimate-edition-ultimate-edition-pc-game-ubisoft-connect-europe-cover.jpg?v=1692644697",
    name: "TOM CLANCY'S RAINBOW SIX SIEGE",
    downloads: 2500,
    rating: 6.8,
    year: 2017,
    genre: "Pixel",
    personalID: 14,
    price: '4$',
    description: 'DILIT'
  },
  {
    imgurl: "https://s.cafebazaar.ir/images/icons/org.tlauncher.tlauncherpe-26e94145-e7a0-484b-b0d3-af8fd17fd46b_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize",
    name: "TLauncher",
    downloads: 2000,
    rating: 6.5,
    year: 2015,
    genre: "Rpg",
    personalID: 15,
    price: '69.69.69.69$',
    description: 'Finally some good games, ahh men, this game is so nice, indeed, it\'s giving you some little nice vibes every time you play.'
  },
];
const savedItems = [];

function displayItems(filteredGamesList = gamesList) {
  let html = filteredGamesList
    .map(
      (item) => `<div class="gamesCard" value="${item.personalID}">
      <img src="${item.imgurl}" data-description="${item.description}" title="${item.name}">
      <button class="addToFav">Add Game &#128190;</button>
      <div class="gamesCard-body">
        <p class="game-name">${item.name}</p>
        <div class="gamesInfo">
          <p class="game-download">Download: ${item.downloads}</p>
          <p class="game-rate">Rating: ${item.rating}</p>
          <p class="game-date">Date: ${item.year}</p>
          <p class="game-genre">Genre: ${item.genre}</p>
        </div>
        <p class="game-price">${item.price}</p>
        </div>
      </div>`
    )
    .join('');

    if (gamesContainer) {
      gamesContainer.innerHTML = html
    }
    filteredGamesList.map((item) => savedItems.push(item));
}
function selectedFilter(e) {
  const currFilter = document.getElementById(`${e.currentTarget.id}`);
  filters.forEach((itemRem) => {
    if (e.currentTarget === itemRem) {
      if (itemRem.classList.contains('active')) {
        itemRem.classList.remove('active');
        sortByDefault();
      } else {
        itemRem.classList.add('active');
        filterIt(currFilter);
      }
    } else {
      itemRem.classList.remove('active')
      filterIt(currFilter);
    }
  })
}
function filterIt(currFil) {
  currFil.id === 'download' && sortByDownload();
  currFil.id === 'rate' && sortByRate();
  currFil.id === 'date' && sortByDate();
  currFil.id === 'price' && sortByPrice();
}
function sortByDownload() {
  console.log('Sorting by download');
  gamesList.sort((a, b) => b.downloads - a.downloads);
  displayItems();
}
function sortByRate() {
  console.log('Sorting by rate'); 
  gamesList.sort((a, b) => b.rating - a.rating);
  displayItems();
}
function sortByDate() {
  console.log('Sorting by date');
  gamesList.sort((a, b) => b.year - a.year);
  displayItems();
}
function sortByPrice() {
  console.log('Sorting by price');
  gamesList.sort((a, b) => {
    const priceA = parseFloat(a.price.split('$')[0]);
    const priceB = parseFloat(b.price.split('$')[0]);
    return priceB - priceA;
  })
  displayItems();
}
function sortByDefault() {
  console.log('sorting by default');
  gamesList.sort((a, b) => b.personalID - a.personalID);
  displayItems();
}
function sortByGenre(genre) {
  let filteredGames;

  if (genre.toLowerCase() === 'none') {
    filteredGames = gamesList;
  } else {
    // Otherwise, filter the gamesList array based on the selected genre
    let capitalizeGenre = genre.slice(0, 1).toUpperCase() + genre.slice(1);
    filteredGames = gamesList.filter(game => game.genre === capitalizeGenre);
  }
  displayItems(filteredGames);
}
optionSelectGenre && optionSelectGenre.addEventListener('change', () => {
  const selectedOption = optionSelectGenre.options[optionSelectGenre.selectedIndex];
  selectedValue = selectedOption.value;
  sortByGenre(selectedValue);
})
filters.forEach((filter) => {
  filter.addEventListener('click', selectedFilter)
})
let canClickInfo = true;
showInfoBtn && showInfoBtn.addEventListener('click', () => {
  if (canClickInfo) {
    gamesContainer.classList.toggle('active');
    canClickInfo = false;
    setTimeout(() => {
      canClickInfo = true;
    }, 300);
  }
})

const toggleGamesInterface = document.querySelectorAll('.showhideGames');
const count = document.querySelectorAll('.count')
const savedGamesList = document.querySelector('.gamesFavorite-body');
const addToFavButtons = document.querySelectorAll('.addToFav');
const countOfGamesStored = document.querySelectorAll('.favoriteGameCount');
const showGamesListBtns = document.querySelectorAll('.showGamesList');
const modal = document.querySelector('.modalGame');
let gameListFromLS; 
let storedFavoriteGames = [];
gamesContainer && gamesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('addToFav')) {
    addToFavorites(e.target.parentElement);
    console.log('add:', e.target.parentElement);
  } else if (e.target.classList.contains('gamesCard')) {
    console.log('click:', e.target);
    showModal(e.target);
  } else {
    console.info('Wrong click');
  }
})
savedGamesList && savedGamesList.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeFromFav')) {
    removeFromFavorites(e.target.parentElement);
    console.log('remove:', e.target.parentElement);
  } else if (e.target.classList.contains('gamesCard')) {
    console.log('click:', e.target);
    showModal(e.target);
  } else {
    console.info('Wrong click');
  }
})
toggleGamesInterface && toggleGamesInterface.forEach((button) => {
  button.addEventListener('click', (e) => {
    document.querySelector('main').classList.toggle('active');
  })
})
modal && modal.addEventListener('click', handleClickingOutside);
window.addEventListener('keyup', handleKeyUp);


function showModal(el) {
  if (!el) {
    throw Error('No such element here.');
  }

  const innerModal = modal.querySelector('.modalGame-inner');
  console.log('choosen element:', el);
  
  innerModal.querySelector('img').src = el.firstElementChild.src;
  innerModal.querySelector('figcaption p').textContent = el.firstElementChild.getAttribute('data-description');
  innerModal.querySelector('figcaption h3').textContent = el.firstElementChild.title;
  

  modal.classList.add('open');
  
}
function closeModal() {
  modal.classList.remove('open');
}
function handleClickingOutside(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
function handleKeyUp(e) {
  if (e.key === 'Escape') return closeModal();
}
function addToFavorites(gameCard) {
  const gameId = gameCard.getAttribute('value');
  
  let existingGameIds = JSON.parse(localStorage.getItem('gameList'));

  if (!Array.isArray(existingGameIds)) {
    existingGameIds = [];
  }
  console.log(typeof existingGameIds);
  existingGameIds.push(gameId);
  const uniqueGameIds = existingGameIds.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  mirrorToLocalStorage(uniqueGameIds);
}
function removeFromFavorites(gameCard) {
  const gameRemoveId = gameCard.getAttribute('value');
  let itemFromLS = localStorage.getItem('gameList');
  let itemObj = JSON.parse(itemFromLS);

  itemObj.forEach((item, index) => {
    if (gameRemoveId === item) {
      itemObj.splice(index, 1);
    }
  })
  mirrorToLocalStorage(itemObj);
  const filterGameCount = itemObj.filter((v) => {
    return v !== null;
  })
  console.log('filterGameCount:',filterGameCount.length)
  if (filterGameCount.length > 0) {
    showGamesListBtns && showGamesListBtns.forEach((btn) => {
      btn.classList.add('act');
    })
  } else {
    showGamesListBtns && showGamesListBtns.forEach((btn) => {
      btn.classList.remove('act');
    })
  }
  countOfGamesStored.forEach((item) => {
    item.textContent = filterGameCount.length;
  })

  if (filterGameCount.length < 1) {
    savedGamesList.textContent = 'Здесь нечего смотреть.'
  }
}
function mirrorToLocalStorage(objToMirror) {
  localStorage.setItem('gameList', JSON.stringify(objToMirror));
  getDataFromLocalStorage();
}
function getDataFromLocalStorage() {
  gameListFromLS = JSON.parse(localStorage.getItem('gameList')) || {};
  console.log(gameListFromLS);

  if (typeof gameListFromLS === 'object' && Object.keys(gameListFromLS).length > 0) {
    storedFavoriteGames = [];
    Object.values(gameListFromLS).forEach((gameId) => {
      const htmlFav = gamesList.find(game => game.personalID === parseInt(gameId));
      if (htmlFav) {
        const itemHtml = `
          <div class="gamesCard" value="${htmlFav.personalID}">
            <img src="${htmlFav.imgurl}" data-description="${htmlFav.description}" title="${htmlFav.name}">
            <button class="removeFromFav">Remove Game <span style="font-size: 20px; color: white; vertical-align: baseline;">&#128465;</span></button>
            <div class="gamesCard-body">
              <p class="game-name">${htmlFav.name}</p>
              <div class="gamesInfo">
                <p class="game-download">Download: ${htmlFav.downloads}</p>
                <p class="game-rate">Rating: ${htmlFav.rating}</p>
                <p class="game-date">Date: ${htmlFav.year}</p>
                <p class="game-genre">Genre: ${htmlFav.genre}</p>
              </div>
              <p class="game-price">${htmlFav.price}</p>
            </div>
          </div>`;
        storedFavoriteGames.push(itemHtml);
      }
    });

    if (countOfGamesStored) {
      if (gameListFromLS.length > 0) {
        showGamesListBtns && showGamesListBtns.forEach((btn) => {
          btn.classList.add('act');
        })
      } else {
        showGamesListBtns && showGamesListBtns.forEach((btn) => {
          btn.classList.remove('act');
        })
      }
      countOfGamesStored.forEach((item) => {
        item.textContent = gameListFromLS.length;
      })
    }
    if (savedGamesList) {
      savedGamesList.innerHTML = storedFavoriteGames.join('');
    }
  } else {
    console.error('Error on \'getDataFromLocalStorage() function\': Something bad or empty data retrieved from local storage.');
  }
}

getDataFromLocalStorage();
displayItems();


