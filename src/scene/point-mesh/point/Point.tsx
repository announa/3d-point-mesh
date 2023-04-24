import { useEffect } from "react";

export interface PointProps {
  x: number;
  y?: number;
  z: number;
}

export const Point = ({ x, y = 0, z }: PointProps) => {
  
  useEffect(() => {
    console.log(x, y, z)

  }, [])
  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[0.05, 16, 32]} />
      <meshStandardMaterial color='white'/>
    </mesh>
  );
};
