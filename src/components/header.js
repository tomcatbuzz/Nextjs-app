import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import { useState } from "react";
import { motion } from "framer-motion";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
}


export default function Header() {
// const Header = () => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  return (
  <header>
  <div className="logo">
    <Link href="/">Tomcatbuzz</Link>
  </div>
  <div className="header-items" >
    <div className={`${router.pathname == "/" ? "active" : ""} header-item`}>
      <Link href="/">Home</Link>
    </div>
    <div className={`${router.pathname == "/about" ? "active" : ""} header-item`}>
      <Link href="/about">About</Link>
    </div>
    <div className={`${router.pathname == "/contact" ? "active" : ""} header-item`}>
      <Link href="/contact">Contact</Link>
    </div>
    
    <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
  </div>
  <motion.div
      className="menu"
      variants={menu}
      animate={isActive ? "open" : "closed"}
      initial="closed">
      </motion.div>
  </header>
  )
}

// export default Header;