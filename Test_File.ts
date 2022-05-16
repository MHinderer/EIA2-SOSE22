window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.querySelector(".canvas")
  );
  let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>(
    canvas.getContext("2d")
  );
  crc2.fillStyle = "#FF0000";
  crc2.fillRect(0, 0, 200, 200);

  crc2.beginPath();
  crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
  crc2.closePath();
  crc2.stroke();
}
