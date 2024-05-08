import './Navbar.css'
import { useContext} from 'react';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import ContextProvider from '../ContextProvider/ContextProvider';
import {motion, AnimatePresence} from 'framer-motion'

const Navbar = ()=>{
    const {viewNav, setViewNav} = useContext(ContextProvider)

    const handleNavClick = (e) => {
        const name = e.target.getAttribute('name')
        console.log(name)
        if (name === 'navitem'){
            setViewNav(false)
        }
    }
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
                        <ul className='navbar navmobile' onClick={handleNavClick}>
                            <li className='navitem'><a name='navitem' href='#home'>HOME</a></li>
                            <li className='navitem'><a name='navitem' href='#about'>ABOUT US</a></li>
                            <li className='navitem'><a name='navitem' href='#services'>SERVICES</a></li>
                            <li className='navitem'><a name='navitem' href='#pricing'>PRICING</a></li>
                            <li className='navitem'><a name='navitem' href='#gallery'>GALLERY</a></li>
                            <li className='navitem'><a name='navitem' href='#contacts'>CONTACT US</a></li>
                        </ul>
                        <div className='navbase'>
                            <a href='#appointment'>
                                BOOK APPOINTMENT
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default Navbar