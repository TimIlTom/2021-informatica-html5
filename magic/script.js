const characters = {
  'obi-wan-kenobi': 'HELLO THERE',
  'cristiano-ronaldo': 'SIUUUM',
  'voldemort': 'AVADAKEDAVRA',
};

let current;

function pickCharacter() {
  const keys = Object
    .keys(characters)
    .filter(character => character !== current); 

  const character = keys[keys.length * Math.random() << 0];
  current = character;

  return character;
}

function updateView() {
  const character = pickCharacter();

  $('#text').text(characters[character]);
  $('#body').css(
    'background-image',
    `url('magic/assets/${character}.jpg')`
  );
}

$(_ => $('#magic').on('click', updateView));