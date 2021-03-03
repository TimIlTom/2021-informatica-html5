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