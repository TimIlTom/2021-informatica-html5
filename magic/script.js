random = {
  current: '',

  nextChoice(dictionary) {
    const keys = Object
      .keys(dictionary)
      .filter(key => key != this.current);
  
    return this.current = keys[
      Math.floor(keys.length * Math.random())
    ];
  }
}

function draw() {
  const characters = {
    'obi-wan-kenobi': 'HELLO THERE',
    'cristiano-ronaldo': 'SIUUUM',
    'voldemort': 'AVADAKEDAVRA',
  };

  const character = random.nextChoice(characters);

  $('#text').text(characters[character]);
  $('#text').addClass('padding');
  $('body').css(
    'background-image',
    `url('magic/assets/${character}.jpg')`
  );
}

$(_ => $('#magic').on('click', draw));