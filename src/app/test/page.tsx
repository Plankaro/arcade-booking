"use client";
import React from 'react';
// import './YourComponent.css'; // Import your stylesheet

export default function YourComponent() {
  const [hover, setHover] = React.useState(false);
  return (
    <div className=" relative image-container h-screen w-screen ">
      <img
        src="/map.jpg"
        alt="Your Image"
        className="responsive-image"
        useMap="#treesMap"
      />
        <svg
          className=" absolute top-[13vh] left-[8vw] "
          viewBox="73.03323417355115 124.79781684679715 76.42508449117535 137.56515208411565"
          width="12vh"
          height="12vh"
        >
          <polygon
            points="73.03323417355115,262.3629689309128 149.4583186647265,260.66463371999777 149.4583186647265,232.64210273990017 148.60915105926898,216.50791823620756 131.62579895011893,217.35708584166508 132.47496655557643,186.78705204519494 111.24577641913882,186.78705204519494 111.24577641913882,125.64698445225466 73.03323417355115,124.79781684679715 "
          // Define points for the polygon
          // Handle other interactions or props as needed
          ></polygon>
        </svg>
      {/* <map name="treesMap">
        <div className=' bg-green-300'>
          <area
            shape="poly"
            className={` cursor-pointer ${hover ? 'bg-blue-500' : ''} `}
            coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147"
            onClick={(e) => console.log("area tag clicked", e)}
            onMouseMove={(e) => { console.log("hover"); setHover(true); }}

          />
        </div>
      </map> */}
    </div>
  );
}


const SvgComponent = () => {
  const handleHover = () => {
    // Handle hover interaction
  };

  const handleLeave = () => {
    // Handle leaving interaction
  };

  return (
    <svg
      className="imp-object-poly imp-object"
      viewBox="73.03323417355115 124.79781684679715 76.42508449117535 137.56515208411565"
    >
      <polygon
        points="73.03323417355115,262.3629689309128 149.4583186647265,260.66463371999777 149.4583186647265,232.64210273990017 148.60915105926898,216.50791823620756 131.62579895011893,217.35708584166508 132.47496655557643,186.78705204519494 111.24577641913882,186.78705204519494 111.24577641913882,125.64698445225466 73.03323417355115,124.79781684679715 "
      // Define points for the polygon
      // Handle other interactions or props as needed
      ></polygon>
    </svg>
  );
};
