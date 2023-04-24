
export const Light = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight color='#ffffff' intensity={0.9} position={[-4, 15, 4]} />
    </>
  );
};
