/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/fish.js */ \"./src/script/fish.js\");\n/* harmony import */ var _script_gameView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/gameView.js */ \"./src/script/gameView.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 500;\n  canvas.width = 880; // const img = new Image();\n  // img.src = \"./image/backround.jpg\"\n  // img.onload = function(){\n  //   layout.drawImage(img, 100, 100, 500, 880)\n  // }\n\n  const gameview = new _script_gameView_js__WEBPACK_IMPORTED_MODULE_1__.GameView(ctx);\n  gameview.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBQ0FILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQjtFQUNBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmLENBSmtELENBTWxEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlULHlEQUFKLENBQWFLLEdBQWIsQ0FBakI7RUFDQUksUUFBUSxDQUFDQyxLQUFUO0FBQ0QsQ0FiRCIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXNofSBmcm9tIFwiLi9zY3JpcHQvZmlzaC5qc1wiO1xuXG5pbXBvcnQge0dhbWVWaWV3fSBmcm9tIFwiLi9zY3JpcHQvZ2FtZVZpZXcuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJylcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgXG4gIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gIGNhbnZhcy53aWR0aCA9IDg4MDtcbiAgXG4gIC8vIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAvLyBpbWcuc3JjID0gXCIuL2ltYWdlL2JhY2tyb3VuZC5qcGdcIlxuICAvLyBpbWcub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgLy8gICBsYXlvdXQuZHJhd0ltYWdlKGltZywgMTAwLCAxMDAsIDUwMCwgODgwKVxuICAvLyB9XG4gIGNvbnN0IGdhbWV2aWV3ID0gbmV3IEdhbWVWaWV3KGN0eClcbiAgZ2FtZXZpZXcuc3RhcnQoKTtcbn0pO1xuXG4iXSwibmFtZXMiOlsiRmlzaCIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJnYW1ldmlldyIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/script/fish.js":
/*!****************************!*\
  !*** ./src/script/fish.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fish\": function() { return /* binding */ Fish; }\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/script/util.js\");\n\n\nclass Fish {\n  constructor(pos) {\n    this.pos = pos;\n    this.vel = _util_js__WEBPACK_IMPORTED_MODULE_0__.Util.randomVec(5);\n    this.radius = 10; // this.color = options.color;\n    // this.game = Game();\n  }\n\n  draw(ctx) {\n    const nemo = new Image();\n    nemo.src = 'src/image/clownFish.png'; // debugger\n    // ctx.fillStyle = 'orange';\n    // ctx.beginPath();\n    // ctx.arc(\n    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    // );\n    // ctx.fill();\n\n    ctx.drawImage(nemo, this.pos[0], this.pos[1]);\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    if (this.pos[0] - 10 < 0 && this.vel[0] < 0) {\n      this.vel[0] = -this.vel[0];\n    }\n\n    if (this.pos[0] + 10 > 880 && this.vel[0] > 0) {\n      this.vel[0] = -this.vel[0];\n    }\n\n    if (this.pos[1] - 10 < 0 && this.vel[1] < 0) {\n      this.vel[1] = -this.vel[1];\n    }\n\n    if (this.pos[1] + 10 > 500 && this.vel[1] > 0) {\n      this.vel[1] = -this.vel[1];\n    }\n  }\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2Zpc2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxJQUFOLENBQVc7RUFDVEMsV0FBVyxDQUFFQyxHQUFGLEVBQU07SUFDZixLQUFLQSxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxHQUFMLEdBQVdKLG9EQUFBLENBQWUsQ0FBZixDQUFYO0lBQ0EsS0FBS00sTUFBTCxHQUFjLEVBQWQsQ0FIZSxDQUlmO0lBQ0E7RUFDRDs7RUFFREMsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDUixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsS0FBSixFQUFiO0lBQ0FELElBQUksQ0FBQ0UsR0FBTCxHQUFXLHlCQUFYLENBRlEsQ0FHUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQUgsR0FBRyxDQUFDSSxTQUFKLENBQWNILElBQWQsRUFBb0IsS0FBS04sR0FBTCxDQUFTLENBQVQsQ0FBcEIsRUFBaUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBakM7RUFFRDs7RUFHRFUsSUFBSSxHQUFHO0lBQ0wsS0FBS1YsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUFmO0lBQ0EsS0FBS0QsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUFmOztJQUNBLElBQUksS0FBS0QsR0FBTCxDQUFTLENBQVQsSUFBYyxFQUFkLEdBQW1CLENBQW5CLElBQXdCLEtBQUtDLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBMUMsRUFBNkM7TUFDM0MsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBZSxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQWhCO0lBQ0Q7O0lBQ0QsSUFBSSxLQUFLRCxHQUFMLENBQVMsQ0FBVCxJQUFjLEVBQWQsR0FBbUIsR0FBbkIsSUFBMEIsS0FBS0MsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUE1QyxFQUErQztNQUM3QyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFlLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBaEI7SUFDRDs7SUFDRCxJQUFJLEtBQUtELEdBQUwsQ0FBUyxDQUFULElBQWMsRUFBZCxHQUFtQixDQUFuQixJQUF3QixLQUFLQyxHQUFMLENBQVMsQ0FBVCxJQUFjLENBQTFDLEVBQTZDO01BQzNDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWUsQ0FBQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFoQjtJQUNEOztJQUNELElBQUksS0FBS0QsR0FBTCxDQUFTLENBQVQsSUFBYyxFQUFkLEdBQW1CLEdBQW5CLElBQTBCLEtBQUtDLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBNUMsRUFBK0M7TUFDN0MsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBZSxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQWhCO0lBQ0Q7RUFDRjs7QUF2Q1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHQvZmlzaC5qcz9lYTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vdXRpbC5qc1wiXG5cbmNsYXNzIEZpc2gge1xuICBjb25zdHJ1Y3RvciAocG9zKXtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDUpO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgLy8gdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgLy8gdGhpcy5nYW1lID0gR2FtZSgpO1xuICB9XG4gIFxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IG5lbW8gPSBuZXcgSW1hZ2UoKTtcbiAgICBuZW1vLnNyYyA9ICdzcmMvaW1hZ2UvY2xvd25GaXNoLnBuZydcbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnb3JhbmdlJztcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LmFyYyhcbiAgICAvLyAgIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCB0cnVlXG4gICAgLy8gKTtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIGN0eC5kcmF3SW1hZ2UobmVtbywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdKVxuXG4gIH07XG5cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdXG4gICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV1cbiAgICBpZiAodGhpcy5wb3NbMF0gLSAxMCA8IDAgJiYgdGhpcy52ZWxbMF0gPCAwICl7XG4gICAgICB0aGlzLnZlbFswXSA9ICgtdGhpcy52ZWxbMF0pO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zWzBdICsgMTAgPiA4ODAgJiYgdGhpcy52ZWxbMF0gPiAwKSB7XG4gICAgICB0aGlzLnZlbFswXSA9ICgtdGhpcy52ZWxbMF0pO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zWzFdIC0gMTAgPCAwICYmIHRoaXMudmVsWzFdIDwgMCkge1xuICAgICAgdGhpcy52ZWxbMV0gPSAoLXRoaXMudmVsWzFdKTtcbiAgICB9IFxuICAgIGlmICh0aGlzLnBvc1sxXSArIDEwID4gNTAwICYmIHRoaXMudmVsWzFdID4gMCkge1xuICAgICAgdGhpcy52ZWxbMV0gPSAoLXRoaXMudmVsWzFdKTtcbiAgICB9XG4gIH07XG4gIFxufVxuXG5leHBvcnQge0Zpc2h9XG5cbiJdLCJuYW1lcyI6WyJVdGlsIiwiRmlzaCIsImNvbnN0cnVjdG9yIiwicG9zIiwidmVsIiwicmFuZG9tVmVjIiwicmFkaXVzIiwiZHJhdyIsImN0eCIsIm5lbW8iLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script/fish.js\n");

/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish.js */ \"./src/script/fish.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//handles functionality of what my clicks would be doing\n\n\nclass Game {\n  constructor() {\n    this.fish = [];\n    this.canvas = document.getElementById('canvas');\n    this.createFish = this.createFish.bind(this);\n    this.canvas.addEventListener('click', this.createFish);\n  }\n\n  createFish(e) {\n    console.log('hello');\n    let fishX = e.clientX - 50;\n    let fishY = e.clientY - 40;\n    let pos = [fishX, fishY];\n\n    if (!this.isOutOfBounds(pos) && this.fish.length < Game.NUM_FISH) {\n      this.addFish(pos);\n    }\n  }\n\n  addFish(pos) {\n    const fish = new _fish_js__WEBPACK_IMPORTED_MODULE_0__.Fish(pos);\n    this.fish.push(fish);\n  }\n\n  randomPosition() {\n    let x = Math.floor(Math.random() * (Game.DIM_X + 1));\n    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));\n    return [x, y];\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.fish.forEach(el => {\n      el.draw(ctx);\n    }); // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  }\n\n  moveObjects() {\n    this.fish.forEach(el => {\n      el.move();\n    });\n  }\n\n  isOutOfBounds(pos) {\n    return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;\n  }\n\n}\n\n_defineProperty(Game, \"DIM_X\", 880);\n\n_defineProperty(Game, \"DIM_Y\", 500);\n\n_defineProperty(Game, \"NUM_FISH\", 10);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBTixDQUFVO0VBRVJDLFdBQVcsR0FBRTtJQUNYLEtBQUtDLElBQUwsR0FBWSxFQUFaO0lBQ0EsS0FBS0MsTUFBTCxHQUFlQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7SUFDQSxLQUFLSixNQUFMLENBQVlLLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLEtBQUtGLFVBQTNDO0VBRUQ7O0VBTURBLFVBQVUsQ0FBRUcsQ0FBRixFQUFLO0lBQ1hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7SUFDQSxJQUFJQyxLQUFLLEdBQUdILENBQUMsQ0FBQ0ksT0FBRixHQUFZLEVBQXhCO0lBQ0EsSUFBSUMsS0FBSyxHQUFHTCxDQUFDLENBQUNNLE9BQUYsR0FBWSxFQUF4QjtJQUNBLElBQUlDLEdBQUcsR0FBRyxDQUFDSixLQUFELEVBQU9FLEtBQVAsQ0FBVjs7SUFFQSxJQUFJLENBQUMsS0FBS0csYUFBTCxDQUFtQkQsR0FBbkIsQ0FBRCxJQUE0QixLQUFLZCxJQUFMLENBQVVnQixNQUFWLEdBQW1CbEIsSUFBSSxDQUFDbUIsUUFBeEQsRUFBaUU7TUFDL0QsS0FBS0MsT0FBTCxDQUFhSixHQUFiO0lBQ0Q7RUFDRjs7RUFLSEksT0FBTyxDQUFFSixHQUFGLEVBQU87SUFDWixNQUFNZCxJQUFJLEdBQUcsSUFBSUgsMENBQUosQ0FBU2lCLEdBQVQsQ0FBYjtJQUNBLEtBQUtkLElBQUwsQ0FBVW1CLElBQVYsQ0FBZW5CLElBQWY7RUFDRDs7RUFFRG9CLGNBQWMsR0FBRztJQUNmLElBQUlDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQjFCLElBQUksQ0FBQzJCLEtBQUwsR0FBYSxDQUE5QixDQUFYLENBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIxQixJQUFJLENBQUM2QixLQUFMLEdBQWEsQ0FBOUIsQ0FBWCxDQUFSO0lBQ0EsT0FBTyxDQUFDTixDQUFELEVBQUlLLENBQUosQ0FBUDtFQUNEOztFQUVERSxJQUFJLENBQUVDLEdBQUYsRUFBTztJQUNUQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CaEMsSUFBSSxDQUFDMkIsS0FBekIsRUFBZ0MzQixJQUFJLENBQUM2QixLQUFyQztJQUNBLEtBQUszQixJQUFMLENBQVUrQixPQUFWLENBQW1CQyxFQUFELElBQVE7TUFDeEJBLEVBQUUsQ0FBQ0osSUFBSCxDQUFRQyxHQUFSO0lBQ0QsQ0FGRCxFQUZTLENBS1Q7RUFFRDs7RUFFREksV0FBVyxHQUFHO0lBQ1osS0FBS2pDLElBQUwsQ0FBVStCLE9BQVYsQ0FBbUJDLEVBQUQsSUFBUTtNQUN4QkEsRUFBRSxDQUFDRSxJQUFIO0lBQ0QsQ0FGRDtFQUdEOztFQUVEbkIsYUFBYSxDQUFDRCxHQUFELEVBQU07SUFDakIsT0FBUUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVYsSUFBaUJBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUExQixJQUNKQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNoQixJQUFJLENBQUMyQixLQURWLElBQ3FCWCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNoQixJQUFJLENBQUM2QixLQUQxQztFQUVEOztBQXpETzs7Z0JBQUo3QixlQVVXOztnQkFWWEEsZUFXVzs7Z0JBWFhBLGtCQVljIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHByb2plY3QvLi9zcmMvc2NyaXB0L2dhbWUuanM/ZjIwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2hhbmRsZXMgZnVuY3Rpb25hbGl0eSBvZiB3aGF0IG15IGNsaWNrcyB3b3VsZCBiZSBkb2luZ1xuaW1wb3J0IHtGaXNofSBmcm9tIFwiLi9maXNoLmpzXCJcblxuY2xhc3MgR2FtZXtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZmlzaCA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICB0aGlzLmNyZWF0ZUZpc2ggPSB0aGlzLmNyZWF0ZUZpc2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlRmlzaClcblxuICB9XG5cbiAgc3RhdGljIERJTV9YID0gODgwO1xuICBzdGF0aWMgRElNX1kgPSA1MDA7XG4gIHN0YXRpYyBOVU1fRklTSCA9IDEwO1xuXG4gIGNyZWF0ZUZpc2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gICAgICBsZXQgZmlzaFggPSBlLmNsaWVudFggLSA1MDtcbiAgICAgIGxldCBmaXNoWSA9IGUuY2xpZW50WSAtIDQwO1xuICAgICAgbGV0IHBvcyA9IFtmaXNoWCxmaXNoWV07XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5pc091dE9mQm91bmRzKHBvcykgJiYgdGhpcy5maXNoLmxlbmd0aCA8IEdhbWUuTlVNX0ZJU0gpe1xuICAgICAgICB0aGlzLmFkZEZpc2gocG9zKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuXG5cblxuICBhZGRGaXNoIChwb3MpIHtcbiAgICBjb25zdCBmaXNoID0gbmV3IEZpc2gocG9zKVxuICAgIHRoaXMuZmlzaC5wdXNoKGZpc2gpO1xuICB9XG5cbiAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoR2FtZS5ESU1fWCArIDEpKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChHYW1lLkRJTV9ZICsgMSkpO1xuICAgIHJldHVybiBbeCwgeV1cbiAgfVxuXG4gIGRyYXcgKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG4gICAgdGhpcy5maXNoLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gIH1cblxuICBtb3ZlT2JqZWN0cyAoKXtcbiAgICB0aGlzLmZpc2guZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLm1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzT3V0T2ZCb3VuZHMocG9zKSB7XG4gICAgcmV0dXJuIChwb3NbMF0gPCAwKSB8fCAocG9zWzFdIDwgMCkgfHxcbiAgICAgIChwb3NbMF0gPiBHYW1lLkRJTV9YKSB8fCAocG9zWzFdID4gR2FtZS5ESU1fWSk7XG4gIH07XG5cbn1cblxuZXhwb3J0IHtHYW1lfTsiXSwibmFtZXMiOlsiRmlzaCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImZpc2giLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRmlzaCIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJmaXNoWCIsImNsaWVudFgiLCJmaXNoWSIsImNsaWVudFkiLCJwb3MiLCJpc091dE9mQm91bmRzIiwibGVuZ3RoIiwiTlVNX0ZJU0giLCJhZGRGaXNoIiwicHVzaCIsInJhbmRvbVBvc2l0aW9uIiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRJTV9YIiwieSIsIkRJTV9ZIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImZvckVhY2giLCJlbCIsIm1vdmVPYmplY3RzIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/game.js\n");

/***/ }),

/***/ "./src/script/gameView.js":
/*!********************************!*\
  !*** ./src/script/gameView.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameView\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/script/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Game();\n  }\n\n  start() {\n    setInterval(() => {\n      this.game.moveObjects();\n      this.game.draw(this.ctx);\n    }, 50);\n  }\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2dhbWVWaWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBRUEsTUFBTUMsUUFBTixDQUFlO0VBQ2JDLFdBQVcsQ0FBQ0MsR0FBRCxFQUFLO0lBQ2hCLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLElBQUwsR0FBWSxJQUFJSiwwQ0FBSixFQUFaO0VBQ0M7O0VBRURLLEtBQUssR0FBSTtJQUNQQyxXQUFXLENBQUMsTUFBTTtNQUNoQixLQUFLRixJQUFMLENBQVVHLFdBQVY7TUFDQSxLQUFLSCxJQUFMLENBQVVJLElBQVYsQ0FBZSxLQUFLTCxHQUFwQjtJQUNELENBSFUsRUFHUixFQUhRLENBQVg7RUFJRDs7QUFYWSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdC9nYW1lVmlldy5qcz8wYmE0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUuanMnXG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSwgNTApO1xuICB9XG59XG5cbmV4cG9ydCB7R2FtZVZpZXd9OyJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImN0eCIsImdhbWUiLCJzdGFydCIsInNldEludGVydmFsIiwibW92ZU9iamVjdHMiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/script/gameView.js\n");

/***/ }),

/***/ "./src/script/util.js":
/*!****************************!*\
  !*** ./src/script/util.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Util\": function() { return /* binding */ Util; }\n/* harmony export */ });\nconst Util = {\n  randomVec(length) {\n    const degX = 2 * Math.PI * Math.random();\n    const degY = Math.random() * (0.5 - -0.5) + 0.5;\n    console.log(degY);\n    return Util.scale([Math.sin(degX), degY], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1]];\n  }\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L3V0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLElBQUksR0FBRztFQUNYQyxTQUFTLENBQUNDLE1BQUQsRUFBUztJQUNoQixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWNELElBQUksQ0FBQ0UsTUFBTCxFQUEzQjtJQUNBLE1BQU1DLElBQUksR0FBSUgsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLE1BQU0sQ0FBQyxHQUF4QixJQUFnQyxHQUE5QztJQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtJQUdBLE9BQU9QLElBQUksQ0FBQ1UsS0FBTCxDQUFXLENBQUNOLElBQUksQ0FBQ08sR0FBTCxDQUFTUixJQUFULENBQUQsRUFBaUJJLElBQWpCLENBQVgsRUFBbUNMLE1BQW5DLENBQVA7RUFDRCxDQVJVOztFQVVYUSxLQUFLLENBQUNFLEdBQUQsRUFBTUMsQ0FBTixFQUFTO0lBQ1osT0FBTyxDQUFDRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNDLENBQVYsRUFBYUQsR0FBRyxDQUFDLENBQUQsQ0FBaEIsQ0FBUDtFQUNEOztBQVpVLENBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHQvdXRpbC5qcz80YjViIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWwgPSB7XG4gIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICBjb25zdCBkZWdYID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpOyBcbiAgICBjb25zdCBkZWdZID0gKE1hdGgucmFuZG9tKCkgKiAoMC41LSAoLTAuNSkpICsgMC41KTtcbiAgICBjb25zb2xlLmxvZyhkZWdZKVxuICBcbiAgXG4gICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZ1gpLCBkZWdZXSwgbGVuZ3RoKTtcbiAgfSxcblxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXV07XG4gIH0sXG5cblxufVxuXG5cbmV4cG9ydCB7VXRpbH07Il0sIm5hbWVzIjpbIlV0aWwiLCJyYW5kb21WZWMiLCJsZW5ndGgiLCJkZWdYIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwiZGVnWSIsImNvbnNvbGUiLCJsb2ciLCJzY2FsZSIsInNpbiIsInZlYyIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;