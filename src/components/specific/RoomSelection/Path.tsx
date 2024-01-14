import React from 'react';

type PathProps = {
  index: number;
  path: {
    path: string;
    id: string;
  };
  hoverLable:string;
  handlePathMouseEnter: (e: React.MouseEvent<SVGPathElement>, id: string) => void;
  handlePathMouseLeave: () => void;
};

const CustomPath: React.FC<PathProps> = ({
  index,
  path,
  hoverLable,
  handlePathMouseEnter,
  handlePathMouseLeave,
}: PathProps) => {
  return (
    <path
      onMouseEnter={(e) => handlePathMouseEnter(e, hoverLable)}
      onMouseLeave={handlePathMouseLeave}
      key={index}
      className={`cursor-not-allowed`}
      d={path.path}
      id={path.id}
      stroke="black"
      fill={hoverLable === "Sold" ? "#00000095" : "red"}
      strokeWidth="6"
    />
  );
};

export default CustomPath;
