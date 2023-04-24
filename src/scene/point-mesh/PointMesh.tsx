import { useEffect, useState } from 'react';
import { Point, PointProps } from './point/Point';

export const PointMesh = () => {
  const COUNT_X = 80;
  const COUNT_Z = 70;
  const POINT_DISTANCE = 0.3;
  const [coords, setCoords] = useState<PointProps[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < COUNT_Z; i++) {
      for (let j = 0; j < COUNT_X; j++) {
        const x = POINT_DISTANCE * j;
        const y = 0;
        const z = -POINT_DISTANCE * i;
        arr.push({ x: x, y: y, z: z });
      }
    }
    setCoords(arr);
  }, []);

  useEffect(() => {
    console.log(coords);
  }, [coords]);

  return (
    <group position={[-(POINT_DISTANCE * COUNT_X) / 2, 0, (POINT_DISTANCE * COUNT_Z) / 2]}>
      {coords.map((c) => (
        <Point key={JSON.stringify(c)} x={c.x} y={c.y} z={c.z} />
      ))}
    </group>
  );
};
