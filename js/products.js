const electricGuitarJson =
`
[
  {
      "id": "1",
      "title": "Raven Bee RB500 Exotic Style Guitar",
      "image": "img/electric-guitars-imgs/raven-bee-rb500-exotic-style-guitar.jpg",
      "link": "product-pages/electric-guitars/raven-bee-rb500-exotic-style-guitar.html",
      "price": 450.00
  },
  {
      "id": "2",
      "title": "Dickson Studio ER100 Electric Guitar",
      "image": "img/electric-guitars-imgs/dickson-studio-er100-electric-guitar.jpg",
      "link": "product-pages/electric-guitars/raven-bee-rb500-exotic-style-guitar.html",
      "price": 180.00
  },
  {
      "id": "3",
      "title": "Dean Doe TRO4506 Electric Guitar",
      "image": "img/electric-guitars-imgs/doeguitar.jpeg",
      "link": "product-pages/electric-guitars/raven-bee-rb500-exotic-style-guitar.html",
      "price": 220.00
  },
  {
      "id": "4",
      "title": "Raven Classic RT45 Electric Guitar",
      "image": "img/electric-guitars-imgs/classicguitar.jpeg",
      "link": "product-pages/electric-guitars/raven-bee-rb500-exotic-style-guitar.html",
      "price": 300.00
  }
]`;
const acousticGuitarJson =
`
[
  {
      "id": "1",
      "title": "Deanson VV02 Acoustic Guitar",
      "image": "img/acoustic-guitars-imgs/deanson-vv02-acoustic-guitar.jpeg",
      "link": "product-pages/acoustic-guitars/deanson-VV02-acoustic-guitar.html",
      "price": 112.00
  },
  {
      "id": "2",
      "title": "Kuro Music Studio S-35 Acoustic Guitar",
      "image": "img/acoustic-guitars-imgs/kuro-music-studio-s-35-acoustic-guitar.jpeg",
      "link": "product-pages/acoustic-guitars/kuro-music-studio-acoustic-guitar.html",
      "price": 105.00
  },
  {
      "id": "3",
      "title": "Raven RT1 Acoustic-Electric Guitar",
      "image": "img/acoustic-guitars-imgs/raven-rt1-acoustic-electric-guitar.jpeg",
      "link": "product-pages/acoustic-guitars/raven-acoustic-electric-guitar.html",
      "price": 110.00
  },
  {
      "id": "4",
      "title": "Fogue RA-090 Acoustic Guitar",
      "image": "img/acoustic-guitars-imgs/fogue-ra-090-acoustic-guitar.jpeg",
      "link": "product-pages/acoustic-guitars/fogue-ra-acoustic-guitar.html",
      "price": 110.00
  }
]`;
const drumsJson =
`
[
  {
      "id": "1",
      "title": "BlueWater BWL1000 Ultimate Snare Drum",
      "image": "img/drums-imgs/blueWaterDrum.jpeg",
      "link": "",
      "price": 145.00
  },
  {
      "id": "2",
      "title": "Ericson Black &White Snare Drum",
      "image": "img/drums-imgs/ericsonBlackDrum.jpeg",
      "link": "",
      "price": 115.00
  },
  {
      "id": "3",
      "title": "Ericson White Crystal Snare Drum",
      "image": "img/drums-imgs/ericsonWhiteDrum.jpeg",
      "link": "",
      "price": 115.00
  },
  {
      "id": "4",
      "title": "Ericson Beech Wood Snare Drum",
      "image": "img/drums-imgs/ericsonBeechDrum.jpeg",
      "link": "",
      "price": 115.00
  }
]`;

const orchesticJson =
`
[
  {
      "id": "1",
      "title": "Donny Stavanger SRT12 Alto Saxophone",
      "image": "img/orchestric-imgs/donnyAltoSaxophone.jpeg",
      "link": "product-pages/best-selling/donny-stavanger-srt12-alto-saxophone.html",
      "price": 460.00
  },
  {
      "id": "2",
      "title": "Simona SR-V Professional Violin",
      "image": "img/orchestric-imgs/simonaViolin.jpeg",
      "link": "",
      "price": 700.00
  },
  {
      "id": "3",
      "title": "AER B-Flat Professional Bass Horn",
      "image": "img/orchestric-imgs/AERBassHorn.jpeg",
      "link": "",
      "price": 300.00
  },
  {
      "id": "4",
      "title": "Muratti Professional MB Oboe",
      "image": "img/orchestric-imgs/murattiOboe.jpeg",
      "link": "",
      "price": 900.00
  }
]`;

const otherJson =
`
[
  {
      "id": "1",
      "title": "Jiwa Studio JWL100 Single Row Tambourine",
      "image": "img/other-imgs/jiwaTambourine.jpeg",
      "link": "jiwa-studio-jwl100-single-row-tambourine.html",
      "price": 50.00
  },
  {
      "id": "2",
      "title": "Kurumba KK400 Bongo Drum in Green",
      "image": "img/other-imgs/kurumbaDrumGreen.jpeg",
      "link": "kurumba-kk-bongo-drum-in-green.html",
      "price": 89.00
  },
  {
      "id": "3",
      "title": "Bosner AT1 Accordion in Gold",
      "image": "img/other-imgs/bosnerAccordionGold.jpeg",
      "link": "",
      "price": 160.00
  },
  {
      "id": "4",
      "title": "Hohner Silver Star ERX3 Harmonica",
      "image": "img/other-imgs/hohnerSilverHarmonica.jpeg",
      "link": "",
      "price": 67.00
  }
]`;
function renderProducts(products){

  const electricGuitarContainer = document.querySelector('.product-best-prices');
  const acousticGuitarContainer = document.querySelector('.product-best-prices');
  const drumsContainer = document.querySelector('.product-best-prices');
  const orchesticContainer = document.querySelector('.product-best-prices');
  const otherContainer = document.querySelector('.product-best-prices');
  
  let html = '';
  for(const product of products)
  {
    html += `<artical>
             <a href="${product.link}">
             <img src="${product.image}" alt="${product.title}">
             </a>
             <p>
                <a href="${product.link}">${product.title}</a>
             </p>
             <p class="orange-prices">$${product.price}USD</p>
             <div class="button-add-to-cart">
               <button>Add to Cart</button>
             </div>
         </artical>`
}
electricGuitarContainer.innerHTML=html;
acousticGuitarContainer.innerHTML=html;
drumsContainer.innerHTML=html;
orchesticContainer.innerHTML=html;
otherContainer.innerHTML=html;
}

renderProducts(JSON.parse(electricGuitarJson));

  let eg=document.getElementById('eg')
eg.addEventListener('click',function(){
  renderProducts(JSON.parse(electricGuitarJson));});
  let ag=document.getElementById('ag')
ag.addEventListener('click',function(){
  renderProducts(JSON.parse(acousticGuitarJson));});
  let dr=document.getElementById('dr')
dr.addEventListener('click',function(){
  renderProducts(JSON.parse(drumsJson));});
  let orch=document.getElementById('orch')
orch.addEventListener('click',function(){
  renderProducts(JSON.parse(orchesticJson));});
  let oth=document.getElementById('oth')
oth.addEventListener('click',function(){
  renderProducts(JSON.parse(otherJson));})
