const giArray = [
  { icon: "/img/gi/char_icon/jean.webp", name: "jean", element: "anemo", weapon: "sword", rarity: "5", model: "adult_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/venti.webp", name: "venti", element: "anemo", weapon: "bow", rarity: "5", model: "teen_male", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/qiqi.webp", name: "qiqi", element: "cryo", weapon: "sword", rarity: "5", model: "child_female", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/keqing.webp", name: "keqing", element: "electro", weapon: "sword", rarity: "5", model: "teen_female", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/mona.webp", name: "mona", element: "hydro", weapon: "catalyst", rarity: "5", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/diluc.webp", name: "diluc", element: "pyro", weapon: "claymore", rarity: "5", model: "adult_male", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/klee.webp", name: "klee", element: "pyro", weapon: "catalyst", rarity: "5", model: "child_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/sucrose.webp", name: "sucrose", element: "anemo", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/chongyun.webp", name: "chongyun", element: "cryo", weapon: "claymore", rarity: "4", model: "teen_male", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/kaeya.webp", name: "kaeya", element: "cryo", weapon: "sword", rarity: "4", model: "adult_male", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/beidou.webp", name: "beidou", element: "electro", weapon: "claymore", rarity: "4", model: "adult_female", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/fischl.webp", name: "fischl", element: "electro", weapon: "bow", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/lisa.webp", name: "lisa", element: "electro", weapon: "catalyst", rarity: "4", model: "adult_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/razor.webp", name: "razor", element: "electro", weapon: "claymore", rarity: "4", model: "teen_male", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/ningguang.webp", name: "ningguang", element: "geo", weapon: "catalyst", rarity: "4", model: "adult_female", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/noelle.webp", name: "noelle", element: "geo", weapon: "claymore", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/barbara.webp", name: "barbara", element: "hydro", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/xingqiu.webp", name: "xingqiu", element: "hydro", weapon: "sword", rarity: "4", model: "teen_male", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/amber.webp", name: "amber", element: "pyro", weapon: "bow", rarity: "4", model: "teen_female", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/bennett.webp", name: "bennett", element: "pyro", weapon: "sword", rarity: "4", model: "teen_male", nation: "mondstadt", release: "1.0" },
  { icon: "/img/gi/char_icon/xiangling.webp", name: "xiangling", element: "pyro", weapon: "polearm", rarity: "4", model: "teen_female", nation: "liyue", release: "1.0" },
  { icon: "/img/gi/char_icon/zhongli.webp", name: "zhongli", element: "geo", weapon: "polearm", rarity: "5", model: "adult_male", nation: "liyue", release: "1.1" },
  { icon: "/img/gi/char_icon/childe.webp", name: "childe", element: "hydro", weapon: "bow", rarity: "5", model: "adult_male", nation: "snezhnaya", release: "1.1" },
  { icon: "/img/gi/char_icon/diona.webp", name: "diona", element: "cryo", weapon: "bow", rarity: "4", model: "child_female", nation: "mondstadt", release: "1.1" },
  { icon: "/img/gi/char_icon/xinyan.webp", name: "xinyan", element: "pyro", weapon: "claymore", rarity: "4", model: "teen_female", nation: "liyue", release: "1.1" },
  { icon: "/img/gi/char_icon/ganyu.webp", name: "ganyu", element: "cryo", weapon: "bow", rarity: "5", model: "teen_female", nation: "liyue", release: "1.2" },
  { icon: "/img/gi/char_icon/albedo.webp", name: "albedo", element: "geo", weapon: "sword", rarity: "5", model: "teen_male", nation: "mondstadt", release: "1.2" },
  { icon: "/img/gi/char_icon/xiao.webp", name: "xiao", element: "anemo", weapon: "polearm", rarity: "5", model: "teen_male", nation: "liyue", release: "1.3" },
  { icon: "/img/gi/char_icon/hutao.webp", name: "hutao", element: "pyro", weapon: "polearm", rarity: "5", model: "teen_female", nation: "liyue", release: "1.3" },
  { icon: "/img/gi/char_icon/rosaria.webp", name: "rosaria", element: "cryo", weapon: "polearm", rarity: "4", model: "adult_female", nation: "mondstadt", release: "1.4" },
  { icon: "/img/gi/char_icon/eula.webp", name: "eula", element: "cryo", weapon: "claymore", rarity: "5", model: "adult_female", nation: "mondstadt", release: "1.5" },
  { icon: "/img/gi/char_icon/yanfei.webp", name: "yanfei", element: "pyro", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "liyue", release: "1.5" },
  { icon: "/img/gi/char_icon/kazuha.webp", name: "kazuha", element: "anemo", weapon: "sword", rarity: "5", model: "teen_male", nation: "inazuma", release: "1.6" },
  { icon: "/img/gi/char_icon/ayaka.webp", name: "ayaka", element: "cryo", weapon: "sword", rarity: "5", model: "teen_female", nation: "inazuma", release: "2.0" },
  { icon: "/img/gi/char_icon/yoimiya.webp", name: "yoimiya", element: "pyro", weapon: "bow", rarity: "5", model: "teen_female", nation: "inazuma", release: "2.0" },
  { icon: "/img/gi/char_icon/sayu.webp", name: "sayu", element: "anemo", weapon: "claymore", rarity: "4", model: "child_female", nation: "inazuma", release: "2.0" },
  { icon: "/img/gi/char_icon/raiden.webp", name: "raiden", element: "electro", weapon: "polearm", rarity: "5", model: "adult_female", nation: "inazuma", release: "2.1" },
  { icon: "/img/gi/char_icon/kokomi.webp", name: "kokomi", element: "hydro", weapon: "catalyst", rarity: "5", model: "teen_female", nation: "inazuma", release: "2.1" },
  { icon: "/img/gi/char_icon/sara.webp", name: "sara", element: "electro", weapon: "bow", rarity: "4", model: "adult_female", nation: "inazuma", release: "2.1" },
  { icon: "/img/gi/char_icon/thoma.webp", name: "thoma", element: "pyro", weapon: "polearm", rarity: "4", model: "adult_male", nation: "inazuma", release: "2.2" },
  { icon: "/img/gi/char_icon/itto.webp", name: "itto", element: "geo", weapon: "claymore", rarity: "5", model: "adult_male", nation: "inazuma", release: "2.3" },
  { icon: "/img/gi/char_icon/gorou.webp", name: "gorou", element: "geo", weapon: "bow", rarity: "4", model: "teen_male", nation: "inazuma", release: "2.3" },
  { icon: "/img/gi/char_icon/shenhe.webp", name: "shenhe", element: "cryo", weapon: "polearm", rarity: "5", model: "adult_female", nation: "liyue", release: "2.4" },
  { icon: "/img/gi/char_icon/yunjin.webp", name: "yunjin", element: "geo", weapon: "polearm", rarity: "4", model: "teen_female", nation: "liyue", release: "2.4" },
  { icon: "/img/gi/char_icon/yae_miko.webp", name: "yae_miko", element: "electro", weapon: "catalyst", rarity: "5", model: "adult_female", nation: "inazuma", release: "2.5" },
  { icon: "/img/gi/char_icon/ayato.webp", name: "ayato", element: "hydro", weapon: "sword", rarity: "5", model: "adult_male", nation: "inazuma", release: "2.6" },
  { icon: "/img/gi/char_icon/yelan.webp", name: "yelan", element: "hydro", weapon: "bow", rarity: "5", model: "adult_female", nation: "liyue", release: "2.7" },
  { icon: "/img/gi/char_icon/kuki.webp", name: "kuki", element: "electro", weapon: "sword", rarity: "4", model: "teen_female", nation: "inazuma", release: "2.7" },
  { icon: "/img/gi/char_icon/heizou.webp", name: "heizou", element: "anemo", weapon: "catalyst", rarity: "4", model: "teen_male", nation: "inazuma", release: "2.8" },
  { icon: "/img/gi/char_icon/tighnari.webp", name: "tighnari", element: "dendro", weapon: "bow", rarity: "5", model: "teen_male", nation: "sumeru", release: "3.0" },
  { icon: "/img/gi/char_icon/dori.webp", name: "dori", element: "electro", weapon: "claymore", rarity: "4", model: "child_female", nation: "sumeru", release: "3.0" },
  { icon: "/img/gi/char_icon/collei.webp", name: "collei", element: "dendro", weapon: "bow", rarity: "4", model: "teen_female", nation: "sumeru", release: "3.0" },
  { icon: "/img/gi/char_icon/nilou.webp", name: "nilou", element: "hydro", weapon: "sword", rarity: "5", model: "teen_female", nation: "sumeru", release: "3.1" },
  { icon: "/img/gi/char_icon/cyno.webp", name: "cyno", element: "electro", weapon: "polearm", rarity: "5", model: "teen_male", nation: "sumeru", release: "3.1" },
  { icon: "/img/gi/char_icon/candace.webp", name: "candace", element: "hydro", weapon: "polearm", rarity: "4", model: "adult_female", nation: "sumeru", release: "3.1" },
  { icon: "/img/gi/char_icon/nahida.webp", name: "nahida", element: "dendro", weapon: "catalyst", rarity: "5", model: "child_female", nation: "sumeru", release: "3.2" },
  { icon: "/img/gi/char_icon/layla.webp", name: "layla", element: "cryo", weapon: "sword", rarity: "4", model: "teen_female", nation: "sumeru", release: "3.2" },
  { icon: "/img/gi/char_icon/wanderer.webp", name: "wanderer", element: "anemo", weapon: "catalyst", rarity: "5", model: "teen_male", nation: "sumeru", release: "3.3" },
  { icon: "/img/gi/char_icon/faruzan.webp", name: "faruzan", element: "anemo", weapon: "bow", rarity: "4", model: "teen_female", nation: "sumeru", release: "3.3" },
  { icon: "/img/gi/char_icon/alhaitham.webp", name: "alhaitham", element: "dendro", weapon: "sword", rarity: "5", model: "adult_male", nation: "sumeru", release: "3.4" },
  { icon: "/img/gi/char_icon/yaoyao.webp", name: "yaoyao", element: "dendro", weapon: "polearm", rarity: "4", model: "child_female", nation: "liyue", release: "3.4" },
  { icon: "/img/gi/char_icon/dehya.webp", name: "dehya", element: "pyro", weapon: "claymore", rarity: "5", model: "adult_female", nation: "sumeru", release: "3.5" },
  { icon: "/img/gi/char_icon/mika.webp", name: "mika", element: "cryo", weapon: "polearm", rarity: "4", model: "teen_male", nation: "mondstadt", release: "3.5" },
  { icon: "/img/gi/char_icon/baizhu.webp", name: "baizhu", element: "dendro", weapon: "catalyst", rarity: "5", model: "adult_male", nation: "liyue", release: "3.6" },
  { icon: "/img/gi/char_icon/kaveh.webp", name: "kaveh", element: "dendro", weapon: "claymore", rarity: "4", model: "adult_male", nation: "sumeru", release: "3.6" },
  { icon: "/img/gi/char_icon/kirara.webp", name: "kirara", element: "dendro", weapon: "sword", rarity: "4", model: "teen_female", nation: "inazuma", release: "3.7" },
  { icon: "/img/gi/char_icon/lyney.webp", name: "lyney", element: "pyro", weapon: "bow", rarity: "5", model: "teen_male", nation: "fontaine", release: "4.0" },
  { icon: "/img/gi/char_icon/lynette.webp", name: "lynette", element: "anemo", weapon: "sword", rarity: "4", model: "teen_female", nation: "fontaine", release: "4.0" },
  { icon: "/img/gi/char_icon/freminet.webp", name: "freminet", element: "cryo", weapon: "claymore", rarity: "4", model: "teen_male", nation: "fontaine", release: "4.0" },
  { icon: "/img/gi/char_icon/neuvillette.webp", name: "neuvillette", element: "hydro", weapon: "catalyst", rarity: "5", model: "adult_male", nation: "fontaine", release: "4.1" },
  { icon: "/img/gi/char_icon/wriothesley.webp", name: "wriothesley", element: "cryo", weapon: "catalyst", rarity: "5", model: "adult_male", nation: "fontaine", release: "4.1" },
  { icon: "/img/gi/char_icon/charlotte.webp", name: "charlotte", element: "cryo", weapon: "catalyst", rarity: "4", model: "teen_female", nation: "fontaine", release: "4.2" },
  { icon: "/img/gi/char_icon/furina.webp", name: "furina", element: "hydro", weapon: "sword", rarity: "5", model: "teen_female", nation: "fontaine", release: "4.2" },
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

    let iconCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let rarityCell = row.insertCell(2);
    let elementCell = row.insertCell(3);
    let weaponCell = row.insertCell(4);
    let modelCell = row.insertCell(5);
    let nationCell = row.insertCell(6);
    let releaseCell = row.insertCell(7);

    iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
    iconCell.classList.add("character_icon");
    iconCell.classList.add("pattern-table-version");
    nameCell.innerHTML = characterListCapitalize(giArray[i].name);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
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

      let iconCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let starCell = row.insertCell(2);
      let elementCell = row.insertCell(3);
      let weaponCell = row.insertCell(4);
      let modelCell = row.insertCell(5);
      let nationCell = row.insertCell(6);
      let patchCell = row.insertCell(7);
  
      iconCell.innerHTML = '<img src="' + giArray[i].icon + '">';
      iconCell.classList.add("character_icon");
      iconCell.classList.add("pattern-table-version");
      nameCell.innerHTML = characterListCapitalize(giArray[i].name);
      starCell.innerHTML = characterListCapitalize(giArray[i].rarity);
      elementCell.innerHTML = characterListCapitalize(giArray[i].element);
      weaponCell.innerHTML = characterListCapitalize(giArray[i].weapon);
      modelCell.innerHTML = characterListCapitalize(giArray[i].model);
      nationCell.innerHTML = characterListCapitalize(giArray[i].nation);
      patchCell.innerHTML = characterListCapitalize(giArray[i].release);
    }
  }
}

