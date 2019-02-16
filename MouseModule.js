"use strict";

const mouse = function(){
  let _mouse = {
    current: { x: 0, y: 0 },     // current position on screen
    memory: { x: 0, y: 0 },      // save start mouse position on screen before start drag
    difference: { x: 0, y: 0 },  // difference between current and memory position
    inverse: { x: 0, y: 0 },     // handle negative distance
    dragging: false              // detect dragging state
  };


  // Capture the mouse current position when it's move
  document.body.addEventListener('mousemove', e => {
    // current position
    _mouse.current.x = e.pageX;
    _mouse.current.y = e.pageY;


    if(_mouse.dragging) {
      // calc the difference between memory and current
      _mouse.difference.x = _mouse.current.x - _mouse.memory.x;
      _mouse.difference.y = -_mouse.current.y - _mouse.memory.y;


      // calc inverses values
      if(_mouse.current.x < _mouse.memory.x)
        _mouse.inverse.x = _mouse.current.x;

      if(_mouse.current.y < _mouse.memory.y)
        _mouse.inverse.y = _mouse.current.y;
    }
  });


  return _mouse;
};

window.Mouse = Object.create(mouse());
