import Page from "@/components/page";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Page>
      
      <motion.h1
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ x: 100 }}>Home</motion.h1>
    </Page>
  )
}