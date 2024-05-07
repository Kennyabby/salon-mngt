import './Navbar.css'
import { useContext} from 'react';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import ContextProvider from '../ContextProvider/ContextProvider';
import {motion, AnimatePresence} from 'framer-motion'

const Navbar = ()=>{
    const {viewNav, setViewNav} = useContext(ContextProvider)
    return(
        <>
            <div className='navcon navmobile'>
                <div className='navlogocover'>
                    <div className='navmobileview'>
                        <div className='navlogo'>
                            LOGO
                        </div>
                        <div  className='navicon' onClick={()=>{
                            setViewNav(!viewNav)
                        }}>
                            {viewNav ? <RiCloseFill/> : <RiMenu3Fill/>}
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div 
                        className={'navcontent navmobile'+ (viewNav ? '':' viewnav')}
                        initial={{y:-300}}
                        animate={{y:0, transition:{duration: .7, ease:'easeOut'}}}
                        exit={{y:-300, transition:{duration: .7, ease:'easeIn'}}}
                    >
                        <ul className='navbar navmobile'>
                            <li className='navitem' id='home'>HOME</li>
                            <li className='navitem' id='about-us'>ABOUT US</li>
                            <li className='navitem' id='services'>SERVICES</li>
                            <li className='navitem' id='pricing'>PRICING</li>
                            <li className='navitem' id='gallery'>GALLERY</li>
                            <li className='navitem' id='contacts'>CONTACTS</li>
                        </ul>
                        <div className='navbase'>
                            BOOK APPOINTMENT
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default Navbar