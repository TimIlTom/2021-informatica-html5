function progressive(character, callback) {
  load(`magic/assets/min/${character}.png`)
  .then(image => {
    callback(image);

    load(`magic/assets/${character}.jpeg`)
    .then(secondImage => callback(secondImage));
  });
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
  progressive(character, image => 
    $('body').css(
      'background-image',
      `url('${image}')`
    )
  );
}

$(_ => $('#magic').on('click', draw));