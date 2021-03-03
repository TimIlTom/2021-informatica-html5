function draw() {
  const characters = {
    'obi-wan-kenobi': 'HELLO THERE',
    'cristiano-ronaldo': 'SIUUUM',
    'voldemort': 'AVADAKEDAVRA',
  };

  const character = random.nextChoice(characters);

  $('#text').text(characters[character]);
  $('#text').addClass('padding');

  progressive([
      `magic/assets/min/${character}.png`,
      `magic/assets/${character}.jpeg`
    ], image => 
      $('body').css(
        'background-image',
        `url('${image}')`
      )
  );
}

$(_ => $('#magic').on('click', draw));