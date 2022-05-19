"use strict";
var Beachday;
(function (Beachday) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    /* interface Vector {
      x: number;
      y: number;
    } */
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawSky();
        /* drawSun();
        drawSea();
        drawBeach();
        drawCloud();
        drawPerson();
        drawGull(); */
    }
    function drawSky() {
        crc2.rect(0, 0, canvas.width, canvas.height);
        let gradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.63, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.restore();
    }
    /* function drawSun(_position: Vector, _size: Vector): void {}
  
    function drawSea(_position: Vector, _size: Vector): void {}
  
    function drawBeach(_position: Vector, _size: Vector): void {}
  
    function drawCloud(_position: Vector, _size: Vector): void {}
  
    function drawPerson(_position: Vector, _size: Vector): void {}
  
    function drawGull(_position: Vector, _size: Vector): void {} */
})(Beachday || (Beachday = {}));
//# sourceMappingURL=Test_File.js.map