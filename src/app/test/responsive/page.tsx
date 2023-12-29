"use client";
import { useEffect } from "react";

function setup() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const image = new Image();
  image.src = '/home.jpg';

  image.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const importantAreaInImage = {
      x: 374,
      y: 242,
      width: 1184,
      height: 850,
    };

    const imageAspectRatio = image.width / image.height;
    const canvasAspectRatio = canvas.width / canvas.height;

    let displayWidth = importantAreaInImage.width;
    let displayHeight = importantAreaInImage.height;

    if (imageAspectRatio > canvasAspectRatio) {
      displayHeight = importantAreaInImage.height * (canvas.width / importantAreaInImage.width);
      displayWidth = canvas.width;
    } else {
      displayWidth = importantAreaInImage.width * (canvas.height / importantAreaInImage.height);
      displayHeight = canvas.height;
    }

    const sourceX = importantAreaInImage.x + (importantAreaInImage.width - displayWidth) / 2;
    const sourceY = importantAreaInImage.y + (importantAreaInImage.height - displayHeight) / 2;

    ctx.drawImage(
      image,
      sourceX,
      sourceY,
      displayWidth,
      displayHeight,
      0,
      0,
      canvas.width,
      canvas.height
    );
  };
}




const getCoords = (e: MouseEvent) => {
  console.log({ x: e.clientX, y: e.clientY });
}

export default function Canvas() {
  useEffect(() => {
    setup();
    window.addEventListener('resize', setup);
    window.addEventListener('click', getCoords);
    return () => {
      window.removeEventListener('resize', setup);
      window.removeEventListener('click', getCoords);
    }
  }, []);
  return (
    <canvas id="canvas" />
  );
}