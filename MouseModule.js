"use strict";

const mouse = function(){
  let _mouse = {
    current: { x: 0, y: 0 },
    memory: { x: 0, y: 0 },
    difference: { x: 0, y: 0 },
    inverse: { x: 0, y: 0 },
    dragging: false
  };

  return _mouse;
};

window.Mouse = Object.create(mouse());

console.log(Mouse.current);
