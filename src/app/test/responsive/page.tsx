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

    const middleOfImportantArea = {
      x: importantAreaInImage.x + importantAreaInImage.width / 2,
      y: importantAreaInImage.y + importantAreaInImage.height / 2,
    };

    const centerOfCanvas = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    }

    const sourceImageStart = 

    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height
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