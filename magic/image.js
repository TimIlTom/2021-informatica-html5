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

