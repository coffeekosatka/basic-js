const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(place) {
    if (place > 0 && place <= this.links.length) {
      this.links.splice(place - 1, 1);
    } else {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.links = this.links.reverse();
    return this;
  },
  finishChain() {
    const finalResult = this.links.map(function (link) {
      return `( ${link} )`;
    }).join('~~');
    this.links = [];
    return finalResult;
  },
};

module.exports = {
  chainMaker
};
