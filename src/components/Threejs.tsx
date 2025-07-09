import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Threejs() {
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <group>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="red" transparent opacity={0.7} />
          </mesh>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="red" wireframe />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}

export default Threejs;
