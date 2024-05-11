import './Navbar.css'
import { useContext, useEffect, useRef, useState} from 'react';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import ContextProvider from '../ContextProvider/ContextProvider';
import {motion, AnimatePresence} from 'framer-motion'
import logo from '../assets/logo.png'

const Navbar = ()=>{
    const {viewNav, setViewNav} = useContext(ContextProvider)
    const navRef = useRef(null)
    const [pageUrl, setPageUrl] = useState(window.location.href) 
    
    const getPageUrl = ()=>{
        setPageUrl(window.location.href)
    }

    useEffect(()=>{
        window.addEventListener('popstate', getPageUrl)
        return (()=>{
            window.removeEventListener('popstate', getPageUrl)
        })
    },[pageUrl])
    
    useEffect(()=>{
        const currentPage = window.location.href.slice(pageUrl.indexOf('#')+1,)
        const navlinks = navRef.current.childNodes
        navlinks.forEach((link)=>{
            link.childNodes[0].classList.remove('active')
            const href = link.childNodes[0].getAttribute('href').slice(1,)
            
            if (href === currentPage){
                link.childNodes[0].classList.add('active')
                window.location.href=pageUrl.slice(0,pageUrl.indexOf('#')+1)+href
                setViewNav(false)
            }
        })
    },[pageUrl])
    
    const handleNavClick = (e) => {
        setViewNav(false)
    }

    return(
        <>
            <div className='navcon navmobile'>
                <div className='navlogocover'>
                    <div className='navmobileview'>
                        <div className='navlogo'>
                            <img src={logo} className='logo'/>
                            {/* <div className='logotext'>CRAFT BEAUTY</div> */}
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
                        
                        <ul 
                            className='navbar navmobile' 
                            ref={navRef}
                        >
                            <li className='navitem'><a name='navitem' href='#home'>HOME</a></li>
                            <li className='navitem'><a name='navitem' href='#about'>ABOUT US</a></li>
                            <li className='navitem'><a name='navitem' href='#services'>SERVICES</a></li>
                            <li className='navitem'><a name='navitem' href='#pricing'>PRICING</a></li>
                            <li className='navitem'><a name='navitem' href='#gallery'>GALLERY</a></li>
                            <li className='navitem'><a name='navitem' href='#contacts'>CONTACT US</a></li>
                        </ul>
                        <div className='navbase' onClick={handleNavClick}>
                            <a href='#appointment' name='appointment'>
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