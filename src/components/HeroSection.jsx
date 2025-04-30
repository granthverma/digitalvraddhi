import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function HeroSection() {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Digital Vraddhi 🚀</h1>
      <p className="text-lg mb-4 max-w-xl text-center">Empowering your brand's digital journey with websites, marketing, SEO & more.</p>
      
      <div className="w-full h-[400px] mt-10">
        <Canvas>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom={false} />
          <Box>
            <meshStandardMaterial attach="material" color="hotpink" />
          </Box>
        </Canvas>
      </div>
    </section>
  );
}

export default HeroSection;
