const srArray = [
  { name: "trailblazer", path: "destruction", element: "physical", rarity: "5", model: "adult_female", faction: "nameless", release: "1.0"},
  { name: "trailblazer", path: "preservation", element: "fire", rarity: "5", model: "adult_female", faction: "nameless", release: "1.0"},
  { name: "himeko", path: "erudition", element: "fire", rarity: "5", model: "adult_female", faction: "nameless", release: "1.0" },
  { name: "jing_yuan", path: "erudition", element: "lightning", rarity: "5", model: "adult_male", faction: "xianzhou", release: "1.0" },
  { name: "qingque", path: "erudition", element: "quantum", rarity: "4", model: "short_female", faction: "xianzhou", release: "1.0" },
  { name: "serval", path: "erudition", element: "lightning", rarity: "4", model: "adult_female", faction: "jarilo_VI", release: "1.0" },
  { name: "herta", path: "erudition", element: "ice", rarity: "4", model: "short_female", faction: "herta_station", release: "1.0" },
  { name: "sampo", path: "nihility", element: "wind", rarity: "4", model: "adult_male", faction: "jarilo_VI", release: "1.0" },
  { name: "welt", path: "nihility", element: "imaginary", rarity: "5", model: "adult_male", faction: "nameless", release: "1.0" },
  { name: "pela", path: "nihility", element: "ice", rarity: "4", model: "short_female", faction: "jarilo_VI", release: "1.0" },
  { name: "bailu", path: "abundance", element: "lightning", rarity: "5", model: "child_female", faction: "xianzhou", release: "1.0" },
  { name: "natasha", path: "abundance", element: "physical", rarity: "4", model: "adult_female", faction: "jarilo_VI", release: "1.0" },
  { name: "gepard", path: "preservation", element: "ice", rarity: "5", model: "adult_male", faction: "jarilo_VI", release: "1.0" },
  { name: "march_7th", path: "preservation", element: "ice", rarity: "4", model: "tall_female", faction: "nameless", release: "1.0" },
  { name: "dan_heng", path: "hunt", element: "wind", rarity: "4", model: "tall_male", faction: "nameless", release: "1.0" },
  { name: "seele", path: "hunt", element: "quantum", rarity: "5", model: "tall_female", faction: "jarilo_VI", release: "1.0" },
  { name: "sushang", path: "hunt", element: "physical", rarity: "4", model: "tall_female", faction: "xianzhou", release: "1.0" },
  { name: "yangqing", path: "hunt", element: "ice", rarity: "5", model: "short_male", faction: "xianzhou", release: "1.0" },
  { name: "bronya", path: "harmony", element: "wind", rarity: "5", model: "adult_female", faction: "jarilo_VI", release: "1.0" },
  { name: "tingyun", path: "harmony", element: "lightning", rarity: "4", model: "adult_female", faction: "xianzhou", release: "1.0" },
  { name: "asta", path: "harmony", element: "fire", rarity: "4", model: "tall_female", faction: "herta_station", release: "1.0" },
  { name: "arlan", path: "destruction", element: "lightning", rarity: "4", model: "short_male", faction: "herta_station", release: "1.0" },
  { name: "clara", path: "destruction", element: "physical", rarity: "5", model: "short_female", faction: "jarilo_VI", release: "1.0" },
  { name: "hook", path: "destruction", element: "fire", rarity: "4", model: "child_female", faction: "jarilo_VI", release: "1.0" },
  { name: "silver_wolf", path: "nihility", element: "quantum", rarity: "5", model: "short_female", faction: "stellaron_hunters", release: "1.1"},
  { name: "luocha", path: "abundance", element: "imaginary", rarity: "5", model: "adult_male", faction: "xianzhou", release: "1.1"},
  { name: "yukong", path: "harmony", element: "imaginary", rarity: "4", model: "adult_female", faction: "xianzhou", release: "1.1"},
  { name: "blade", path: "destruction", element: "wind", rarity: "5", model: "adult_male", faction: "stellaron_hunters", release: "1.2"},
  { name: "kafka", path: "nihility", element: "lightning", rarity: "5", model: "adult_female", faction: "stellaron_hunters", release: "1.2"},
  { name: "luka", path: "nihility", element: "physical", rarity: "4", model: "tall_male", faction: "jarilo_VI", release: "1.2"},
  { name: "lynx", path: "abundance", element: "quantum", rarity: "4", model: "short_female", faction: "jarilo_VI", release: "1.3"},
  { name: "dan_heng_~_imbibitor_lunae", path: "destruction", element: "imaginary", rarity: "5", model: "tall_male", faction: "nameless", release: "1.3"},
  { name: "fu_xuan", path: "preservation", element: "quantum", rarity: "5", model: "short_female", faction: "xianzhou", release: "1.3"},
];

//Give gray background to cells = 0
function tdZero() {
  const tds = document.getElementsByTagName('td');
  for (let i = 0; i < tds.length; i++) {
    if (tds[i].innerHTML.includes('0')) {
      tds[i].style.backgroundColor = 'rgb(221, 221, 221)';
    }
    if (tds[i].innerHTML.includes('1.0') || tds[i].innerHTML.includes('2.0') || tds[i].innerHTML.includes('3.0') || tds[i].innerHTML.includes('4.0') || tds[i].innerHTML.includes('5.0') || tds[i].innerHTML.includes('6.0') || tds[i].innerHTML.includes('7.0') || tds[i].innerHTML.includes('8.0') || tds[i].innerHTML.includes('10') || tds[i].innerHTML.includes('20') || tds[i].innerHTML.includes('20') || tds[i].innerHTML.includes('30') || tds[i].innerHTML.includes('40') || tds[i].innerHTML.includes('50') || tds[i].innerHTML.includes('60') || tds[i].innerHTML.includes('70') || tds[i].innerHTML.includes('80') || tds[i].innerHTML.includes('90')) {
      tds[i].style.backgroundColor = '#f5f5f5';
    }
    if (tds[i].className.includes('share-value')) {
      tds[i].style.backgroundColor = '';
    }
  }
}

//CHARACTER LISTS START

//Capitalize first letter in character list tables
function characterListCapitalize(str) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
}

//ALL
function allCharacter_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    let row = table.insertRow();
    row.classList.add("pattern-table-updates");

    let nameCell = row.insertCell(0);
    let rarityCell = row.insertCell(1);
    let elementCell = row.insertCell(2);
    let pathCell = row.insertCell(3);
    let modelCell = row.insertCell(4);
    let factionCell = row.insertCell(5);
    let releaseCell = row.insertCell(6);

    nameCell.innerHTML = characterListCapitalize(srArray[i].name);
    nameCell.classList.add("pattern-table-version");
    rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
    elementCell.innerHTML = characterListCapitalize(srArray[i].element);
    pathCell.innerHTML = characterListCapitalize(srArray[i].path);
    modelCell.innerHTML = characterListCapitalize(srArray[i].model);
    factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
    releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
  }
}

//FIRE
function fire_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "fire") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//ICE
function ice_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "ice") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//IMAGINARY
function imaginary_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "imaginary") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//LIGHTNING
function lightning_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "lightning") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//PHYSICAL
function physical_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "physical") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//QUANTUM
function quantum_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "quantum") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//WIND
function wind_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].element === "wind") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//ADULT FEMALE
function adultFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "adult_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//ADULT MALE
function adultMale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "adult_male") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//CHILD FEMALE
function childFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "child_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//SHORT FEMALE
function shortFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "short_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//SHORT MALE
function shortMale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "short_male") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//TALL FEMALE
function tallFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "tall_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//TALL MALE
function tallMale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].model === "tall_male") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//HERTA
function herta_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].faction === "herta_station") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//JARILO VI
function jarilo_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].faction === "jarilo_VI") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//NAMELESS
function nameless_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].faction === "nameless") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//STELLARON
function stellaron_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].faction === "stellaron_hunters") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//XIANZHOU
function xianzhou_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].faction === "xianzhou") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//FOUR STAR
function four_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].rarity === "4") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//FIVE STAR
function five_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].rarity === "5") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//ABUNDANCE
function abundance_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "abundance") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//DESTRUCTION
function destruction_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "destruction") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//ERUDITION
function erudition_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "erudition") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//HARMONY
function harmony_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "harmony") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//HUNT
function hunt_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "hunt") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//NIHILITY
function nihility_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "nihility") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

//PRESERVATION
function preservation_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < srArray.length; i++) {
    if (srArray[i].path === "preservation") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let pathCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let factionCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(srArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(srArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(srArray[i].element);
      pathCell.innerHTML = characterListCapitalize(srArray[i].path);
      modelCell.innerHTML = characterListCapitalize(srArray[i].model);
      factionCell.innerHTML = characterListCapitalize(srArray[i].faction);
      releaseCell.innerHTML = characterListCapitalize(srArray[i].release);
    }
  }
}

