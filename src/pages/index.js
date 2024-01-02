import Page from "@/components/page";
import AnimatedTextWord from "@/components/AnimatedTextWord";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";

export default function Home() {
  return (
    <Page>
      {/* <div className="home_container">
        <AnimatedTextWord  text="Home is here" />
      </div> */}
      <div className="home_container">
        <AnimatedTextCharacter  text="Tomcatbuzz" />
      </div>
      
      {/* <motion.h1
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      >Home</motion.h1> */}
    </Page>
  )
}