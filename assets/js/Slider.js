"use strict";

class Slider {
  constructor(images, currentIndex = 0) {
    this._images = images; //array
    this._currentIndex = currentIndex;
  }
  get images() {
    return this._images;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (typeof value < 0 || Number.isInteger(value) === false) {
      throw new RangeError("must be +integer");
    }
    this._currentIndex = value;
  }
  get currentSlide() {
    return this._images[this._currentIndex]; //array[0]
  }
  next() {
    return this._currentIndex + 1;
  }
  prev() {
    return this._currentIndex - 1;
  }
}
