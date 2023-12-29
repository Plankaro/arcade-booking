"use client";

import { useCallback, useEffect } from "react";

interface Point {
  x: number;
  y: number;
}


function pointInPolygon(point: Point, polygon: Point[]) {
  const x = point.x;
  const y = point.y;

  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;

    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}

const shape: Point[] = [
  { x: 656, y: 1040 },
  { x: 1616, y: 556 },
  { x: 1880, y: 452 },
  { x: 2088, y: 580 },
  { x: 2100, y: 772 },
  { x: 2272, y: 720 },
  { x: 2500, y: 1176 },
  { x: 2480, y: 2016 },
  { x: 1632, y: 2076 },
  { x: 628, y: 2064 },
  { x: 668, y: 1092 },
];

const drawImage = (src: string, drawAbove?: any) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const image = new Image();
  image.src = src;
  // image.onload = () => {
  //   ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  // };
  drawAbove();
};

const mouseMove = (e: MouseEvent) => {
  const { clientX, clientY } = e;
  console.log(clientX, clientY);
};

const resize = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawImage('/home.jpg');
};


const drawShape = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const draw = () => {
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 50; // Adjust line width as needed
    ctx.fillStyle = '#00000050';
    ctx.beginPath();
    for (let i = 0; i < shape.length; i++) {
      const { x, y } = shape[i];
      if (i === 0) {
        ctx.moveTo(x, y); // Move to the first point
      } else {
        ctx.lineTo(x, y); // Draw line to subsequent points
      }
    }
    ctx.closePath(); // Close the shape
    ctx.stroke();
    ctx.fill(); // Fill the shape

    // window.requestAnimationFrame(draw);
  };
  drawImage('/home.jpg', draw);
  // draw();
};

const drawFadedShape = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.globalAlpha = 0.5; // Set a lower opacity for the faded effect
  ctx.strokeStyle = '#ffffff40';
  ctx.lineWidth = 10; // Adjust line width as needed
  ctx.fillStyle = '#00000050';
  ctx.beginPath();
  for (let i = 0; i < shape.length; i++) {
    const { x, y } = shape[i];
    if (i === 0) {
      ctx.moveTo(x, y); // Move to the first point
    } else {
      ctx.lineTo(x, y); // Draw line to subsequent points
    }
  }
  ctx.closePath(); // Close the shape
  ctx.stroke();
  ctx.fill(); // Fill the shape

  ctx.globalAlpha = 1; // Reset the global alpha for other drawings
};


const drawActiveShape = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.strokeStyle = '#ffffff'; // Change stroke style for active shape
  ctx.lineWidth = 15; // Adjust line width for increased contrast
  ctx.fillStyle = '#00000040'; // Change fill style for active shape
  ctx.beginPath();
  for (let i = 0; i < shape.length; i++) {
    const { x, y } = shape[i];
    if (i === 0) {
      ctx.moveTo(x, y); // Move to the first point
    } else {
      ctx.lineTo(x, y); // Draw line to subsequent points
    }
  }
  ctx.closePath(); // Close the shape
  ctx.stroke();
  ctx.fill(); // Fill the shape
};


const debounce = (func: any, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function Canvas() {

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawImage('/home.jpg', drawFadedShape);

    const handleMouseMove = debounce((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const isInside = pointInPolygon({ x: clientX, y: clientY }, shape);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isInside) {
        drawImage('/home.jpg', drawActiveShape);
      } else {
        drawImage('/home.jpg', drawFadedShape);
      }
    }, 1);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      handleMouseMove({ clientX: 0, clientY: 0 } as MouseEvent);
    });

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleMouseMove);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <div className=" fixed inset-0 bg-[url('/home.jpg')] bg-no-repeat bg-cover bg-center" >
      <canvas className=" bg-transparent" id="canvas"></canvas>
    </div>
  );
}