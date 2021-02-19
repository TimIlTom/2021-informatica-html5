const characters = {
    'obi-wan-kenobi': 'HELLO THERE',
    'cristiano-ronaldo': 'SIUUUM',
    'voldemort': 'AVADAKEDAVRA',
};

function updateView() {
    const keys = Object.keys(characters);
    const character = keys[keys.length * Math.random() << 0];

    $('#text').text(characters[character]);
    $('#body').css(
        'background-image',
        `url('seethemagic/assets/${character}.jpg')`
    );
}

$(_ => $('#magic').on('click', updateView));