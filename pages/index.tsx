import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
// import { David } from '../components/David'
import { Dav } from '../components/Dav'
import styles from './Index.module.css'

const estilos = {

  color: 'red',
  // margin:'11px 11px',
  // position: 'absolute'

}



const Home: NextPage = () => {
  return (
    <div style={{backgroundColor: '#f5f5f5', width:'90%'}}>
      {/* <div>
        <h1 style={{ position:'absolute'}}>Auxiliar Manipuladora</h1>
      </div> */}
      <div className={styles.container}>
        <h1 className={styles.titulo} style={estilos}>Auxiliar Manipuladora</h1>
      </div>
      <Canvas
        style={{ width: '90%', margin:'auto', height:'50vh'}}
        camera={{view: 
          {
            enabled: true,
            fullWidth: 100,
            fullHeight: 100,
            offsetX: 0,
            offsetY: -30,
            width: 100,
            height: 100,
          }
          ,  focus: 10, fov: 75 ,zoom: 6, position:[0, .5, 1.5]}} >
        {/* <focus-camera> */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        {/* <directionalLight position={[-1, 0.5, 0]} /> */}
        <Suspense fallback={null}>
        {/* <Environment far={10} files="/nieve.hdr" ground={{ height: 10, scale: 1 }} /> */}
          
            <Dav 
              // style={{backgroundColor:'green'}}
              // style={{ width:'100%', height:'60vh'}}
              // style={{ scale:'.5' }}
              scale={1}
              position={[0,0.15,0]}
              rotation={[Math.PI / 2, 0, 0]}
              // rotation={[0,1.5,0]}
            />
        
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1} />
        <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
      </Canvas>
    </div>

  )
}



export default Home
