function load(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener(
      'load', 
      _ => resolve(image.src)
    );

    image.src = src;
  });
}

async function progressive(images, callback) {
  for (const image of images) 
    await load(image).then(src => callback(src));
}