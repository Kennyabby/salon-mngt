import './LandingPage.css'
import hairstyle from '../../assets/headerpic.png'
import aboutimg from '../../assets/aboutimg.jpg'
import { useState, useEffect } from 'react';
import Scheduller from '../Scheduller/Scheduller'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail, MdSwitchAccessShortcut } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiOfficeChair, GiBoxCutter, GiCrosscutSaw, GiMirrorMirror, GiBeard } from "react-icons/gi";
import staff1 from '../../assets/staff1.jpg'
import staff2 from '../../assets/staff2.jpg'
import staff3 from '../../assets/staff3.jpg'
import appointement from '../../assets/appointementimg.jpg'
import { motion } from 'framer-motion'
import { RiCloseFill } from 'react-icons/ri';

const LandingPage = ()=>{

    const [selectedServices, setSelectedServices] = useState([])
    const [field, setField] = useState((field)=> {return {...field,
        name: "",
        contactNumber: "",
        email: "",
        selectedServices: selectedServices,
        date: "",
        time: "",
    }})
    const [formValidated, setFormValidated] = useState(true)
    const [scheduledService, setScheduledService] = useState([])
    const [services, setServices] = useState(["Classic Haircut", 'Beard Trim', 'Hair Color', 
    'Deluxe Haircut', 'Hot Towel Shave', 'Face Facial', 'Buzz Haircut',
    'Beard Trim Razor', 'Neck Trim', 'Kids Haircut', 'Mustache Trim',
    'Hair Wash', 'Soon To Be Man', 'Body Massage', 'Brow Wax' ])

    const [viewSchedule, setViewSchedule] = useState(false)
    const getDate = () =>{
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        return date
    }
    const getInvoiceNumber = () =>{
        const invdate = Date.now()
        return "INV_CraftBeauty"+invdate
    }
    const pricemenu = [
        {
            title: "Classic Haircut",
            price: "25",
            remark: "Clasic Haircut for Men and Kids"
        },
        {
            title: "Beard Trim",
            price: "15",
            remark: "Keep your Beard in Shape"
        },
        {
            title: "Hair Color",
            price: '25',
            remark: "Classic Style Hair Color with Brush"
        },
        {
            title: "Deluxe Haircut",
            price: "35",
            remark:"Delux Haircut for Men and Kids"
        },
        {
            title: "Hot Towel Shave",
            price: "35",
            remark: "Hot Towel Shave with Theraphy"
        },
        {
            title: "Face Facial",
            price: "35",
            remark: "Facial and Hot Towel Treatment"
        },
        {
            title: "Buzz Haircut",
            price: "15",
            remark: "Buzz Haircut for Men and Kids"
        },
        {
            title: "Beard Trim Razor",
            price: "15",
            remark: "Old Fashioned Shave with Razor"
        },
        {
            title: "Neck Trim",
            price: "10",
            remark: "Back Neck Hair Trim with Razor"
        },
        {
            title: "Kids Haircut",
            price: "20",
            remark: "Kids Haircut for 10 or Younger"
        },
        {
            title: "Mustache Trim",
            price: "15",
            remark: "Keep Mustache in Good Shape"
        },
        {
            title: "Hair Wash",
            price: "10",
            remark: "Wash and Hot Towel Treatment"
        },
        {
            title: "Soon To Be Man",
            price: "25",
            remark: "Style cut, hairline tidy up $ hot towel finish"
        },
        {
            title: "Body Massage",
            price: "30",
            remark: "Make your Body Feel Good"
        },
        {
            title: "Brow Wax",
            price: "17",
            remark: "Eyebrow wash, trim and tidy up"
        },
    ]

    useEffect(()=>{
        setField((field=>{
            return {...field,selectedServices}
        }))
    },[selectedServices])

    const addService = (e) => {
        const selectedValue = e.target.value
        if (selectedValue){
            setSelectedServices((selectedServices)=>{
                return [...selectedServices, selectedValue]
            })
            
            e.target.value = ''
        }
    }

    const handleInputChange = (e)=>{
        const name = e.target.getAttribute('name')
        const value = e.target.value

        if (name!=='services'){                
            setField((field)=>{
                return {...field, [name]:value}
            })
        }else{
            addService(e)
        }
        setFormValidated(true)
    }

    const removeService = (e)=>{
        const removedService = e.target.getAttribute('name')
      
        const filteredService = selectedServices.filter((service)=>{
            return service!==removedService
        })

        setSelectedServices(filteredService)
    }

    const scheduleAppointment = () => {        
        const scheduledService = []
        field.selectedServices.forEach((service)=>{
            scheduledService.push(
                pricemenu.filter((price)=>{
                    return price.title === service
                })[0]
            )
        })

        setScheduledService(scheduledService)
        let count = 0
        const fieldKeys = Object.keys(field)
        fieldKeys.forEach((key)=>{
            if (field[key].length){
                count+=1
            }
        })
        if (fieldKeys.length === count){
            setFormValidated(true)
            setViewSchedule(true)
        }else{
            setFormValidated(false)
        }
    }

    return(
        <>
            <header className='headercover' id='home'>
                <div className='header'>
                    <motion.div 
                        className='headerimg'
                        initial = {{opacity:0}}
                        animate = {{opacity:1, transition:{duration: 1, ease:'easeIn'}}}
                    >
                        <img className='hairstyle' src={hairstyle} />
                    </motion.div>
                    <div className='headercontent'>
                        <motion.div 
                            className='headeritem1'
                            initial = {{opacity:0}}
                            animate = {{opacity:1, transition:{duration: 1, ease:'easeIn'}}}
                        >
                            We Create The Latest Hair Style Trends
                        </motion.div>
                        <motion.div 
                            className='headerimg  mobile'
                            initial = {{opacity:0}}
                            animate = {{opacity:1, transition:{duration: 1, ease:'easeIn'}}}
                        >
                            <img className='hairstyle' src={hairstyle} />
                        </motion.div>
                        <div className='headeritem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur.</div>
                        <motion.div 
                            className='headerbutton'
                            initial = {{x:50}}
                            animate = {{x:0, transition:{duration:0.5, ease:'easeOut'}}}
                        >
                            <a href='#appointment'>Book Now</a>
                        </motion.div>
                    </div>
                </div>
            </header>
            <main className='main'>
                <div className='aboutcover' id='about'>
                    <div className='about-us'>
                        <div className='aboutcontent'>
                            <div className='sectiontitle aboutitems'>ABOUT US</div>
                            <div className='sectionmiddle aboutitems'>BEST EXPERIENCE EVER </div>
                            <div className='aboutitems'>Our main focus is on quality and hygene. Our Parlour is well equipped with advanced technology equipments and provides best quality serevices.
                            Our staffs are well trained and expereinced, offering advanced sesrvices in Skin, Hair and Body Shaping that will provide you with a luxurious expereince that leave you feeling 
                            relaxed and stress free. The specialities in the parlour are, apart from regular bleachings and Facials, many types of hairstyles, Bridial and cine make-up and different types of Facials & Fashion hair colourings.</div>
                            <div className='aboutbutton'>Read More..</div>
                        </div>                  
                        <div className='aboutimgdiv'>
                            <img className='aboutimg' src={aboutimg}/>
                        </div>
                    </div>
                </div>
                <div className='servicescover' id='services'>
                    <div className='services'>
                        <div className='sectiontitle'>OUR SERVICES</div>
                        <div className='sectionmiddle'>OUR BRAND OFFERS PREMIUM SERVICES</div>
                        <div className='servicescontent'>
                            <div className='servicediv'>
                                <div className='servicedivicon'>
                                    <GiOfficeChair/>
                                </div>
                                <div className='servicedivtitle'>Hair Cut</div>
                                <div className='servicedivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                            </div>
                            <div className='servicediv'>
                                <div className='servicedivicon'>
                                    <MdSwitchAccessShortcut/>
                                </div>
                                <div className='servicedivtitle'>Moustache Trim</div>
                                <div className='servicedivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                            </div>
                            <div className='servicediv'>
                                <div className='servicedivicon'>
                                    <GiCrosscutSaw/>
                                </div>
                                <div className='servicedivtitle'>Face Shave</div>
                                <div className='servicedivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                            </div>
                            <div className='servicediv'>
                                <div className='servicedivicon'>
                                    <GiBeard/>
                                </div>
                                <div className='servicedivtitle'>Beard Trim</div>
                                <div className='servicedivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                            </div>
                            <div className='servicediv'>
                                <div className='servicedivicon'>
                                    <GiBoxCutter/>
                                </div>
                                <div className='servicedivtitle'>Clipper Cut</div>
                                <div className='servicedivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                            </div>
                            <div className='servicediv'>
                                <div className='servicedivicon'>
                                    <GiMirrorMirror/>
                                </div>
                                <div className='servicedivtitle'>Facial Massage</div>
                                <div className='servicedivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='runningfigures'>
                    <div className='figures'>
                        <div className='figuresdiv'>
                            <div className='figuresdivvalue'>231+</div>
                            <div className='figuresdivtitle'>Healthy and Happy Customers</div>
                            <div className='figuresdivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className='figuresdiv'>
                            <div className='figuresdivvalue'>8+</div>
                            <div className='figuresdivtitle'>Professional Barber Specialists</div>
                            <div className='figuresdivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className='figuresdiv'>
                            <div className='figuresdivvalue'>190+</div>
                            <div className='figuresdivtitle'>Achievements of Our Barbershop</div>
                            <div className='figuresdivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className='figuresdiv'>
                            <div className='figuresdivvalue'>20+</div>
                            <div className='figuresdivtitle'>Years of Impeccable and Successful Work</div>
                            <div className='figuresdivcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                </div>
                <div className='pricescover' id='pricing'>
                    <div className='prices'>
                        <div className='sectiontitle'>PACKAGE PRICE MENU</div>
                        <div className='sectionmiddle'>OUR PACKAGE MENU FAIR PRICE GUARANTEE</div>
                        <div className='pricescontent'>
                            {
                                pricemenu.map((menu, id)=>{
                                    return <div className='pricediv' key = {id}>
                                        <div className='menu'>
                                            <div className='menutitle'>{menu.title}</div>
                                            <div className='menuprice'>{'$'+menu.price}</div>
                                        </div>
                                        <div className='menuremark'>{menu.remark}</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='teamscover'>
                    <div className='teams'>
                        <div className='sectiontitle'>OUR TEAM MEMBERS</div>
                        <div className='sectionmiddle'>MEET OUR EXPERIENCED BARBER MASTERS</div>
                        <div className='teamscontent'>
                            <div className='teammember'>
                                <img className='teammemberimg' src={staff1}/>
                                <div className='teammemberdetails'>
                                    <div className='teammembername'>Smith Olden</div>
                                    <div className='teammemberrole'>Barber</div>
                                </div>
                            </div>
                            <div className='teammember'>
                                <img className='teammemberimg' src={staff2}/>
                                <div className='teammemberdetails'>
                                    <div className='teammembername'>Gregor Andrews</div>
                                    <div className='teammemberrole'>Barber</div>
                                </div>
                            </div>
                            <div className='teammember'>
                                <img className='teammemberimg' src={staff3}/>
                                <div className='teammemberdetails'>
                                    <div className='teammembername'>Rickson Small</div>
                                    <div className='teammemberrole'>Barber</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='imagegallerycover'  id='gallery'>
                    <div className='imagegallery'>
                        <div className='sectionmiddle sectionstyle'>STYLE TRENDS GALLERY</div>
                        <div className='galleryfirstcover'>                            
                            <div className='gallerycover'>
                                {["","","","","","","","","",""].map((image, id)=>{
                                    return (
                                        <div className='galleryimage' key={id}>LATEST STYLE TREND FOR MEN AND KIDS</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='appointmentcover' id='appointment'>
                    <div className='appointment'>
                        <div className='appointmentimgcover'>
                            <img className='appointmentimg' src={appointement}/>
                        </div>
                                
                        <div className='appointmentcontent'>
                            <div className={viewSchedule? 'viewschedule':'closeschedule'}>
                                <Scheduller                                 
                                    date = {getDate()} 
                                    InvoiceNumber = {getInvoiceNumber()} 
                                    discount = {0} 
                                    field = {field}
                                    scheduledService = {scheduledService}
                                    setViewSchedule = {setViewSchedule}
                                    resetField={()=>{
                                        setField({
                                            name:"",
                                            contactNumber:"",
                                            email:"",
                                            selectedServices:[],
                                            date:"",
                                            time:""
                                        })
                                        setSelectedServices([])
                                    }}
                                />
                            </div>
                            
                            <div className='sectiontitle'>BOOK YOUR SERVICE</div>
                            <div className='sectionmiddle'>Make An Appoinment</div>
                            <div className='appointmentservices'> 
                                {selectedServices.length ? selectedServices.map((service, id)=>{
                                    return (
                                        <div key={id} name={service} className='selectedservice'>
                                            {service} 
                                            <div 
                                                name={service}
                                                onClick={removeService}
                                                >                                                
                                                <RiCloseFill
                                                    className='cancelservice'   
                                                    name={service}                                                                                                                                                         
                                                />
                                            </div>
                                        </div>
                                    )
                                }) : null}
                            </div>
                            <div className='appointmentform' onChange={handleInputChange}>
                                <div className='inpcover'>
                                    <div className='inplabel' for='name'>Full Name</div>
                                    <input 
                                        type='text' 
                                        name='name'
                                        className='inp'
                                        defaultValue={field.name}
                                        value={field.name}
                                        placeholder='Enter Your Name'                                      
                                    />
                                </div>
                                <div className='inpcover'>
                                    <div className='inplabel' for='contactnumber'>Contact Number</div>
                                    <input 
                                        type='text' 
                                        name='contactNumber'
                                        className='inp'
                                        defaultValue={field.contactNumber}
                                        value={field.contactNumber}
                                        placeholder='Enter Your Contact Number'                                      
                                    />
                                </div>
                                <div className='inpcover'>
                                    <div className='inplabel' for='email'>Enter Your Email Address</div>
                                    <input 
                                        type='email' 
                                        name='email'
                                        className='inp'
                                        defaultValue={field.email}
                                        value={field.email}
                                        placeholder='Enter Your Email Address'                                      
                                    />
                                </div>
                                <div className='inpcover'>
                                    <div className='inplabel' for='request'>What Do You Want?</div>
                                    <select 
                                        type='text' 
                                        name='services'
                                        className='inp'
                                        placeholder='Select Services'                                                                                    
                                    >
                                        <option value=''>Select Services</option>
                                        {
                                            services.filter((service)=>{return !selectedServices.includes(service)}).map((service, id)=>{                                                
                                                return(
                                                    <option key={id} value={service}>
                                                        {service}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='inpcover'>
                                    <div className='inplabel' for='date'>Choose Appoinment Date</div>
                                    <input 
                                        type='date' 
                                        name='date'
                                        className='inp'
                                        defaultValue={field.date}
                                        value={field.date}
                                        placeholder='Choose Appointment Date'                                      
                                    />
                                </div>
                                <div className='inpcover'>
                                    <div className='inplabel' for='time'>At What Time?</div>
                                    <input 
                                        type='time' 
                                        name='time'
                                        className='inp'
                                        defaultValue={field.time}
                                        value={field.time}
                                        placeholder='At What Time?'                                      
                                    />
                                </div>
                            </div>
                            <div className={formValidated?'removeformerror':'formerror'}>All fields are required!</div>
                            <div className='formbutton' onClick={scheduleAppointment}>SCHEDULE APPOINTMENT</div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footercover' id='contacts'>
                <div className='footer'>
                    <div className='footer1'>
                        <div className='footeritem footertitle'>LOGO</div>
                        <div className='footeritem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur.</div>
                    </div>
                    <div className='footer2'>
                        <div className='footeritem footertitle'>CONTACTS</div>
                        <div className='footeritem footerlink'>
                            <div className='footeritem'><FaLocationDot className='footericon'/> <div className='footeritem'>13/A Maraindo Halim City, Tower NYC 112424, US</div></div>
                        </div>
                        <div className='footeritem footerlink'>
                            <div className='footeritem'><MdCall className='footericon'/> <div className='footeritem'>{'(+1) 212 946 2707'}</div></div>
                        </div>
                        <div className='footeritem footerlink'>
                            <div className='footeritem'><MdEmail className='footericon'/> <div className='footeritem'>{'info@salonmanagement.com'}</div></div>
                        </div>
                    </div>
                    <div className='footer3'>
                        <div className='footeritem footertitle'>QUICK LINKS</div>
                        <div className='footeritem quicklinks'><a href='#about'>About</a></div>
                        <div className='footeritem quicklinks'><a href='#services'>Services</a></div>
                        <div className='footeritem quicklinks'><a href='#pricing'>Pricing</a></div>
                        <div className='footeritem quicklinks'><a href='#gallery'>Gallery</a></div>
                        <div className='footeritem quicklinks'><a href='#appointment'>Appointment</a></div>
                    </div>
                    <div className='footer4'>
                        <div className='footeritem footertitle'>FOLLOW US</div>
                        <div className='footeritem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className='footeritem'><FaFacebookSquare className='footericon quicklinks'/><FaInstagram className='footericon quicklinks'/><FaYoutube className='footericon quicklinks'/><FaXTwitter className='footericon quicklinks'/></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LandingPage