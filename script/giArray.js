const giArray = [
  { name: "jean", element: "anemo", weapon: "sword", rarity: "5", model: "adult_female", nation: "mondstadt", release: "1.0" },
  { name: "venti", element: "anemo", weapon: "bow", rarity: "5", model: "teen_male", nation: "mondstadt", release: "1.0" },
  { name: "qiqi", element: "cryo", weapon: "sword", rarity: "5", model: "child_female", nation: "liyue", release: "1.0" },
  { name: "keqing", element: "electro", weapon: "sword", rarity: "5", model: "teen_female", nation: "liyue", release: "1.0" },
  { name: "mona", element: "hydro", weapon: "catalyst", rarity: "5", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { name: "diluc", element: "pyro", weapon: "claymore", rarity: "5", model: "adult_male", nation: "mondstadt", release: "1.0" },
  { name: "klee", element: "pyro", weapon: "catalyst", rarity: "5", model: "child_female", nation: "mondstadt", release: "1.0" },
  { name: "sucrose", element: "anemo", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { name: "chongyun", element: "cryo", weapon: "claymore", rarity: "4", model: "teen_male", nation: "liyue", release: "1.0" },
  { name: "kaeya", element: "cryo", weapon: "sword", rarity: "4", model: "adult_male", nation: "mondstadt", release: "1.0" },
  { name: "beidou", element: "electro", weapon: "claymore", rarity: "4", model: "adult_female", nation: "liyue", release: "1.0" },
  { name: "fischl", element: "electro", weapon: "bow", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { name: "lisa", element: "electro", weapon: "catalyst", rarity: "4", model: "adult_female", nation: "mondstadt", release: "1.0" },
  { name: "razor", element: "electro", weapon: "claymore", rarity: "4", model: "teen_male", nation: "mondstadt", release: "1.0" },
  { name: "ningguang", element: "geo", weapon: "catalyst", rarity: "4", model: "adult_female", nation: "liyue", release: "1.0" },
  { name: "noelle", element: "geo", weapon: "claymore", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { name: "barbara", element: "hydro", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { name: "xingqiu", element: "hydro", weapon: "sword", rarity: "4", model: "teen_male", nation: "liyue", release: "1.0" },
  { name: "amber", element: "pyro", weapon: "bow", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { name: "bennett", element: "pyro", weapon: "sword", rarity: "4", model: "teen_male", nation: "mondstadt", release: "1.0" },
  { name: "xiangling", element: "pyro", weapon: "polearm", rarity: "4", model: "teen_female", nation: "liyue", release: "1.0" },
  { name: "zhongli", element: "geo", weapon: "polearm", rarity: "5", model: "adult_male", nation: "liyue", release: "1.1" },
  { name: "childe", element: "hydro", weapon: "bow", rarity: "5", model: "adult_male", nation: "snezhnaya", release: "1.1" },
  { name: "diona", element: "cryo", weapon: "bow", rarity: "4", model: "child_female", nation: "mondstadt", release: "1.1" },
  { name: "xinyan", element: "pyro", weapon: "claymore", rarity: "4", model: "teen_female", nation: "liyue", release: "1.1" },
  { name: "ganyu", element: "cryo", weapon: "bow", rarity: "5", model: "teen_female", nation: "liyue", release: "1.2" },
  { name: "albedo", element: "geo", weapon: "sword", rarity: "5", model: "teen_male", nation: "mondstadt", release: "1.2" },
  { name: "xiao", element: "anemo", weapon: "polearm", rarity: "5", model: "teen_male", nation: "liyue", release: "1.3" },
  { name: "hutao", element: "pyro", weapon: "polearm", rarity: "5", model: "teen_female", nation: "liyue", release: "1.3" },
  { name: "rosaria", element: "cryo", weapon: "polearm", rarity: "4", model: "adult_female", nation: "mondstadt", release: "1.4" },
  { name: "eula", element: "cryo", weapon: "claymore", rarity: "5", model: "adult_female", nation: "mondstadt", release: "1.5" },
  { name: "yanfei", element: "pyro", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "liyue", release: "1.5" },
  { name: "kazuha", element: "anemo", weapon: "sword", rarity: "5", model: "teen_male", nation: "inazuma", release: "1.6" },
  { name: "ayaka", element: "cryo", weapon: "sword", rarity: "5", model: "teen_female", nation: "inazuma", release: "2.0" },
  { name: "yoimiya", element: "pyro", weapon: "bow", rarity: "5", model: "teen_female", nation: "inazuma", release: "2.0" },
  { name: "sayu", element: "anemo", weapon: "claymore", rarity: "4", model: "child_female", nation: "inazuma", release: "2.0" },
  { name: "raiden", element: "electro", weapon: "polearm", rarity: "5", model: "adult_female", nation: "inazuma", release: "2.1" },
  { name: "kokomi", element: "hydro", weapon: "catalyst", rarity: "5", model: "teen_female", nation: "inazuma", release: "2.1" },
  { name: "sara", element: "electro", weapon: "bow", rarity: "4", model: "adult_female", nation: "inazuma", release: "2.1" },
  { name: "thoma", element: "pyro", weapon: "polearm", rarity: "4", model: "adult_male", nation: "inazuma", release: "2.2" },
  { name: "itto", element: "geo", weapon: "claymore", rarity: "5", model: "adult_male", nation: "inazuma", release: "2.3" },
  { name: "gorou", element: "geo", weapon: "bow", rarity: "4", model: "teen_male", nation: "inazuma", release: "2.3" },
  { name: "shenhe", element: "cryo", weapon: "polearm", rarity: "5", model: "adult_female", nation: "liyue", release: "2.4" },
  { name: "yunjin", element: "geo", weapon: "polearm", rarity: "4", model: "teen_female", nation: "liyue", release: "2.4" },
  { name: "yae_miko", element: "electro", weapon: "catalyst", rarity: "5", model: "adult_female", nation: "inazuma", release: "2.5" },
  { name: "ayato", element: "hydro", weapon: "sword", rarity: "5", model: "adult_male", nation: "inazuma", release: "2.6" },
  { name: "yelan", element: "hydro", weapon: "bow", rarity: "5", model: "adult_female", nation: "liyue", release: "2.7" },
  { name: "kuki", element: "electro", weapon: "sword", rarity: "4", model: "teen_female", nation: "inazuma", release: "2.7" },
  { name: "heizou", element: "anemo", weapon: "catalyst", rarity: "4", model: "teen_male", nation: "inazuma", release: "2.8" },
  { name: "tighnari", element: "dendro", weapon: "bow", rarity: "5", model: "teen_male", nation: "sumeru", release: "3.0" },
  { name: "dori", element: "electro", weapon: "claymore", rarity: "4", model: "child_female", nation: "sumeru", release: "3.0" },
  { name: "collei", element: "dendro", weapon: "bow", rarity: "4", model: "teen_female", nation: "sumeru", release: "3.0" },
  { name: "nilou", element: "hydro", weapon: "sword", rarity: "5", model: "teen_female", nation: "sumeru", release: "3.1" },
  { name: "cyno", element: "electro", weapon: "polearm", rarity: "5", model: "teen_male", nation: "sumeru", release: "3.1" },
  { name: "cadace", element: "hydro", weapon: "polearm", rarity: "4", model: "adult_female", nation: "sumeru", release: "3.1" },
  { name: "nahida", element: "dendro", weapon: "catalyst", rarity: "5", model: "child_female", nation: "sumeru", release: "3.2" },
  { name: "layla", element: "cryo", weapon: "sword", rarity: "4", model: "teen_female", nation: "sumeru", release: "3.2" },
  { name: "wanderer", element: "anemo", weapon: "catalyst", rarity: "5", model: "teen_male", nation: "sumeru", release: "3.3" },
  { name: "faruzan", element: "anemo", weapon: "bow", rarity: "4", model: "teen_female", nation: "sumeru", release: "3.3" },
  { name: "alhaitham", element: "dendro", weapon: "sword", rarity: "5", model: "adult_male", nation: "sumeru", release: "3.4" },
  { name: "yaoyao", element: "dendro", weapon: "polearm", rarity: "4", model: "child_female", nation: "liyue", release: "3.4" },
  { name: "dehya", element: "pyro", weapon: "claymore", rarity: "5", model: "adult_female", nation: "sumeru", release: "3.5" },
  { name: "mika", element: "cryo", weapon: "polearm", rarity: "4", model: "teen_male", nation: "mondstadt", release: "3.5" },
  { name: "baizhu", element: "dendro", weapon: "catalyst", rarity: "5", model: "adult_male", nation: "liyue", release: "3.6" },
  { name: "kaveh", element: "dendro", weapon: "claymore", rarity: "4", model: "adult_male", nation: "sumeru", release: "3.6" },
  { name: "kirara", element: "dendro", weapon: "sword", rarity: "4", model: "teen_female", nation: "inazuma", release: "3.7" },
  { name: "lyney", element: "pyro", weapon: "bow", rarity: "5", model: "teen_male", nation: "fontaine", release: "4.0" },
  { name: "lynette", element: "anemo", weapon: "sword", rarity: "4", model: "teen_female", nation: "fontaine", release: "4.0" },
  { name: "freminet", element: "cryo", weapon: "claymore", rarity: "4", model: "teen_male", nation: "fontaine", release: "4.0" },
]

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

  for (let i = 0; i < giArray.length; i++) {
    let row = table.insertRow();
    row.classList.add("pattern-table-updates");

    let nameCell = row.insertCell(0);
    let rarityCell = row.insertCell(1);
    let elementCell = row.insertCell(2);
    let weaponCell = row.insertCell(3);
    let modelCell = row.insertCell(4);
    let nationCell = row.insertCell(5);
    let releaseCell = row.insertCell(6);

    nameCell.innerHTML = characterListCapitalize(giArray[i].name);
    nameCell.classList.add("pattern-table-version");
    rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
    elementCell.innerHTML = characterListCapitalize(giArray[i].element);
    weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
    modelCell.innerHTML = characterListCapitalize(giArray[i].model);
    nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
    releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
  }
}

//ANEMO
function anemo_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "anemo") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//CRYO
function cryo_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "cryo") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//DENDRO
function dendro_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "dendro") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//ELECTRO
function electro_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "electro") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//GEO
function geo_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "geo") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//HYDRO
function hydro_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "hydro") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//PYRO
function pyro_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].element === "pyro") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//ADULT FEMALE
function adultFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].model === "adult_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//ADULT MALE
function adultMale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].model === "adult_male") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//CHILD FEMALE
function childFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].model === "child_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//TEEN FEMALE
function teenFemale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].model === "teen_female") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//TEEN MALE
function teenMale_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].model === "teen_male") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//FONTAINE
function fontaine_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "fontaine") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//INAZUMA
function inazuma_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "inazuma") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//LIYUE
function liyue_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "liyue") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//MONDSTADT
function mondstadt_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "mondstadt") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//NATLAN
function natlan_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "natlan") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//SNEZHNAYA
function snezhnaya_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "snezhnaya") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//SUMERU
function sumeru_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].nation === "sumeru") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//FOUR STAR
function four_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].rarity === "4") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//FIVE STAR
function five_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].rarity === "5") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//BOW
function bow_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].weapon === "bow") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//CATALYST
function catalyst_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].weapon === "catalyst") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//CLAYMORE
function claymore_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].weapon === "claymore") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//POLEARM
function polearm_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].weapon === "polearm") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

//SWORD
function sword_table_production() {
  let table = document.getElementById("characterListTable");

  for (let i = 0; i < giArray.length; i++) {
    if (giArray[i].weapon === "sword") {
      let row = table.insertRow();
      row.classList.add("pattern-table-updates");

      let nameCell = row.insertCell(0);
      let rarityCell = row.insertCell(1);
      let elementCell = row.insertCell(2);
      let weaponCell = row.insertCell(3);
      let modelCell = row.insertCell(4);
      let nationCell = row.insertCell(5);
      let releaseCell = row.insertCell(6);

      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      nameCell.classList.add("pattern-table-version");
      rarityCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      releaseCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

