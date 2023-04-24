import { Camera } from './camera/Camera';
import { Light } from './light/Light';
import { PointMesh } from './point-mesh/PointMesh';

export const Scene = () => {
  return (
    <>
      <color args={[0,0,0]} attach='background' />
      <Camera /> 
      <Light />
      <PointMesh />
    </>
  );
};
