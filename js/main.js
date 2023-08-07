// bu yerda HTMLdan elementlarni class nomi boyicha JSga olib kelib o'zgaruvchilarga tenglab qoydik.
const elForm = document.querySelector(".form-box");
const elInputName = elForm.querySelector(".form-box__input-name");
const elInputWeight = elForm.querySelector(".form-box__input-weight");
const elInputHeight = elForm.querySelector(".form-box__input-height");
const elInputEggs = elForm.querySelector(".form-box__input-eggs");
const elInputID = elForm.querySelector(".form-box__input-ID");
const elList = document.querySelector(".list");

// bu yerda render pokemons funktsiyasi pokemonlarni ekranga chiqarib chizib beryabdi.
renderPokemons(pokemons);

// bu renderPokemons asosiy funksiya. buni ichida HTMLda yangi elementlar yaratiladi va ularning classlistga classlar qoshilyabdi va textcontentiga pokemons arrayini iteretor(aylanib) qilib ekranga pokemonlarni chiqaryabdi.  
function renderPokemons(arr) {
  arr.forEach(function(item,index,array) {
    let liElement = document.createElement("li");
    let titleElement = document.createElement("h3");
    let imgElement = document.createElement("img"); 
    let topWrapper = document.createElement("div");
    let heightElement = document.createElement("span");
    let weightElement = document.createElement("span");
    let bottomWrapper = document.createElement("div");
    let egssElement = document.createElement("span");
    let spawnElement = document.createElement("time");
    let weaknessesElement = document.createElement("p");
    let IDelement = document.createElement("span");
    // bu yerda yaratilgan elementlarga class qoshilyabdi.
    liElement.classList.add("item");
    titleElement.classList.add("list__title");
    imgElement.classList.add("list__img");
    topWrapper.classList.add("list__weight-box");
    bottomWrapper.classList.add("list__eggs-box");
    heightElement.classList.add("list__height");
    weightElement.classList.add("list__weight");
    egssElement.classList.add("list__eggs");
    spawnElement.classList.add("list__spawn-time");
    weaknessesElement.classList.add("list__weaknesses");
    IDelement.classList.add("list__pok-id");
    // bu yerda yaratilgan elementlarning textcontentiga pokemons arrayning ichidagi ma'lumotlar o'zlashtirilyabdi. 
    titleElement.textContent = item.name;
    imgElement.setAttribute("src",item.img);
    imgElement.setAttribute("alt",item.name);
    heightElement.textContent = `Height: ${item.height}`;
    weightElement.textContent = `Weight: ${item.weight}`;
    egssElement.textContent = `Eggs: ${item.egg}`;
    spawnElement.textContent = `Spawn_T: ${item.spawn_time}`;
    spawnElement.setAttribute("datetime","2023-08-07");
    weaknessesElement.textContent = item.weaknesses;
    IDelement.textContent = `ID: ${item.id}`;
    // bu joyda elementlar bir biriga append(qoshilyabdi) qilinyabdi.
    topWrapper.append(heightElement,weightElement);
    bottomWrapper.append(egssElement,spawnElement);
    liElement.append(IDelement,titleElement,imgElement,topWrapper,bottomWrapper,weaknessesElement);
    elList.appendChild(liElement);
  })
}
// bu functioni pokemonlarning namelari filter qilyabdi.
elInputName.addEventListener("keyup", function() {
  elList.innerHTML = "";
  
  let inputPokName = elInputName.value.trim().toLowerCase();
  
  let filterPokemeon = pokemons.filter(function (item) {
    let pokName = item.name.toLowerCase();
    return pokName.includes(inputPokName);
  })
  // bu yerda renderPokemons() function filter qilingan pokemonni ekranga chiqarib beryabdi.
  renderPokemons(filterPokemeon);
});
// bu functioni pokemonlarning heightlarini(bo'yi) filter qilyabdi.
elInputHeight.addEventListener("keyup", function() {
  elList.innerHTML = "";
  
  let inputHeight = elInputHeight.value.trim();
  
  let filterHeight = pokemons.filter(function (item) {
    let pokHeight = String(item.height);
    return pokHeight.includes(inputHeight);
  })
  // bu yerda renderPokemons() function filter qilingan pokemonni ekranga chiqarib beryabdi.
  renderPokemons(filterHeight);
});
// bu functioni pokemonlarning weightlarini(vazn) filter qilyabdi.
elInputWeight.addEventListener("keyup",function() {
  elList.innerHTML = "";
  
  let filterWeight = pokemons.filter(function(item) {
    let inputWeight = elInputWeight.value.trim();
    console.log(typeof inputWeight);
    
    let pokWeight = String(item.weight);
    return pokWeight.includes(inputWeight);
  })
  // bu yerda renderPokemons() function filter qilingan pokemonni ekranga chiqarib beryabdi.
  renderPokemons(filterWeight);
});
// bu functioni pokemonlarning eggslari(tuxumlari) filter qilyabdi.
elInputEggs.addEventListener("keyup", function() {
  elList.innerHTML = "";
  
  let inputEggs = elInputEggs.value.trim();
  
  let filterEggs = pokemons.filter(function(item,index,array) {
    let pokEggs = item.egg;
    return pokEggs.includes(inputEggs);
  })
  // bu yerda renderPokemons() function filter qilingan pokemonni ekranga chiqarib beryabdi.
  renderPokemons(filterEggs);
});
// bu functioni pokemonlarning ID raqamlarini filter qilyabdi.
elInputID.addEventListener("keyup", function() {
  elList.innerHTML = "";
  let inputID = elInputID.value.trim();
  
  let filterID = pokemons.filter(function (item) {
    let pokID = item.id;
    return pokID == inputID;
  })
  // bu yerda renderPokemons() function filter qilingan pokemonni ekranga chiqarib beryabdi.
  renderPokemons(filterID);
});



