import { useRouter } from "next/router";
import '@/styles/styles.scss'
import { motion, AnimatePresence } from "framer-motion";
// import Grid from "@/components/Grid";
// import { opacity, expand } from "@/components/Grid/anim";

const App = ({ Component, pageProps}) => {
  const router = useRouter();
//   const nbOfSquares = 5
//   const anim = (variants, custom=null) => {
//     return {
//         initial: "initial",
//         animate: "enter",
//         exit: "exit",
//         variants,
//         custom
//     }
// }

  return (
    <AnimatePresence mode="wait" initial={false}>
    <motion.div key={router.pathname}>
      <Component {...pageProps} /> 
    <motion.div 
    className="slide-in"
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 0 }}
    exit={{ scaleY: 1 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
    </motion.div>
    <motion.div className="slide-out"
    initial={{ scaleY: 1 }}
    animate={{ scaleY: 0 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>

    </motion.div>
    </motion.div>
    </AnimatePresence>
  )
};

export default App;