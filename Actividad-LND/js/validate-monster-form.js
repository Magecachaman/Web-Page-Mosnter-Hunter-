let monsters = [
  {
    name: "uragaan",
    type: "wyvern bruto",
    weakness: "agua",
    element: "nitro"
  },
  {
    name: "nergigante",
    type: "wyvern bruto",
    weakness: "rayo",
    element: "ninguno"
  },
  {
    name: "astalos",
    type: "wyvern pajaro",
    weakness: "rayo y veneno",
    element: "rayo"
  }
];

function listenToEvents() {
  let customMonstersForm = document.getElementById("form-custom-monster");
  customMonstersForm.addEventListener("submit", validateCustomMonstersForm);
}

function validateCustomMonstersForm(event) {
  let monsterName = event.target['monster-name'].value;
  let monsterType = event.target['monster-type'].value;
  let monsterWeakness = event.target['monster-weakness'].value;
  let monsterElement = event.target['monster-element'].value;


  let error = false;

  if (monsterName == "") {
    error = true;

    const MONSTER_NAME_REQUIRED_ERROR = document.getElementById("monster-name-required-error");
    MONSTER_NAME_REQUIRED_ERROR.style.visibility = "visible"
  }

  if (monsterType == "") {
    error = true;

    const MONSTER_TYPE_REQUIRED_ERROR = document.getElementById("monster-type-required-error");
    MONSTER_TYPE_REQUIRED_ERROR.style.visibility = "visible"
  }
  if (monsterWeakness == "") {
    error = true;

    const MONSTER_WEAKNESS_REQUIRED_ERROR = document.getElementById("monster-weakness-required-error");
    MONSTER_WEAKNESS_REQUIRED_ERROR.style.visibility = "visible"
  }
  if (monsterElement == "") {
    error = true;

    const MONSTER_ELEMENT_REQUIRED_ERROR = document.getElementById("monster-element-required-error");
    MONSTER_ELEMENT_REQUIRED_ERROR.style.visibility = "visible"
  }

  if (error) {
    console.log("ocurrió un error")
    event.preventDefault();
  } else {
    addToMonsters(event);
  }

}
function addToMonsters(event) {
  event.preventDefault();
  let monsterName = event.target["monster-name"].value;
  let monsterType = event.target["monster-type"].value;
  let monsterWeakness = event.target["monster-weakness"].value;
  let monsterElement = event.target["monster-element"].value;


  let newMonster = {
    name: monsterName,
    type: monsterType,
    weakness: monsterWeakness,
    element: monsterElement
  }
  monsters.push(newMonster);

  showMonstersList();
}

function showMonstersList() {
  let monsterList = "";
  for (let i = 0; i < monsters.length; i++) {
    monsterList += `<li> Nombre: ${monsters[i].name}, Tipo: ${monsters[i].type}, Debilidad: ${monsters[i].weakness}, Elemento: ${monsters[i].element}</li>`;
  }

  document.getElementById("monsters-list").innerHTML = monsterList;
}

showMonstersList();
listenToEvents();