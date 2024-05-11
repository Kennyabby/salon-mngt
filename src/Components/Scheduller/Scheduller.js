import './Scheduller.css'
import { useRef, useState, useEffect } from 'react';
import Barcode from 'react-barcode';
import { RiCloseFill } from 'react-icons/ri';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import logo from '../../assets/logo.png'

const Scheduller = ({
    InvoiceNumber, discount, 
    date, field, scheduledService, 
    setViewSchedule, resetField}) =>{
    const targetRef = useRef(null)
    const [openAirPopup, setAirPopup] = useState(false);

    const options = {
        // default is `save`
        // method: 'open',
        method: 'open',
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        // resolution: Resolution.HIGH,
        resoluton: Resolution.MEDIUM = 3,
        page: {
           // margin is in MM, default is Margin.NONE = 0
        //    margin: Margin.SMALL,
           margin: Margin.SMALL,
           // default is 'A4'
           format: 'A4',
           // default is 'portrait'
           orientation: 'portrait',
        },
        canvas: {
           // default is 'image/jpeg' for better size performance
           mimeType: 'image/jpeg',
           qualityRatio: 1
        },
        // Customize any value passed to the jsPDF instance and html2canvas
        // function. You probably will not need this and things can break, 
        // so use with caution.
        overrides: {
           // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
           pdf: {
              compress: true
           },
           // see https://html2canvas.hertzen.com/configuration for more options
           canvas: {
              useCORS: true
           }
        },
        filename: InvoiceNumber+'.pdf'
     };

    // const [Products, setProducts] = useState([]);

    const [Item, setItem] = useState('');
    const [Amount, setAmount] = useState(0);

    const [Discount, setDiscount] = useState(discount);

    // const [productName, setProductName] = useState('');
    // const [productAmout, setProductAmount] = useState(0);

    const [Total, setTotal ] = useState(0);

    const [List, setList] = useState([]);

    const addData = () => {
        List.push({
            product: Item,
            amount: Amount,
        })
        console.log(List);
        setItem('')
        setAmount('')
        setAirPopup(false);
    }

    let sum = 0;
    scheduledService.forEach(service => {
        sum += parseInt(service.price)
    })
    // setTotal(sum)
    console.log(`Sum is = ${sum}`);

    return (
        <>
            <div className='popcontainer'>
                <RiCloseFill className='popclose' onClick={()=>{
                    setViewSchedule(false)
                }}/>
                <div className="container" ref={targetRef} >
                    <div className="container">
                        <div className="row">
                            <div >
                                <div className="col-md-12">
                                    <div className="row">
                                       <div className='invhead'>
                                            <img src={logo} className='invlogo'/>
                                            <div className="billfrom">
                                                <h4 className='company' style={{ color: '#325aa8' }}><strong>CRAFT BEAUTY</strong></h4>
                                                <p className='billfromitem'>Contact: (+91) 1234567890</p>
                                                <p className='billfromitem'>Email: sales@craftbeauty.com</p>
                                                <p className='billfromitem'>Created Date: <b>{date}</b></p>
                                            </div>
                                       </div>
                                        <div>
                                        <div className="billto">
                                                <br />
                                                <p className='billtoitem'><b>{'Bill To: '+field.name}</b></p>
                                                <p className='billtoitem'><b>{'Email To: '+field.email}</b></p>
                                                <p className='billtoitem'><b>{'Contact: '+field.contactNumber}</b></p>
                                                <p className='billtoitem'><b>Scheduled For:</b> {field.date} </p>
                                                <p className='billtoitem'><b>{'Time: '+field.time}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div >
                                            <h2 className="col-md-12" style={{ color: '#325aa8' }} >INVOICE</h2>
                                            <div className='invnum'>
                                                <h5 className='col-md-0'> Id: {InvoiceNumber}</h5>
                                                <Barcode value={`4n%${InvoiceNumber}+ut%`} width={1} height={50} displayValue={false} />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th><h5>Service</h5></th>
                                                    <th><h5>Description</h5></th>
                                                    <th><h5>Price</h5></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    scheduledService.length?
                                                    scheduledService.map((items, index) => {
                                                        return (
                                                            <tr key={index} >
                                                                <td className="col-md-5">{items.title}</td>
                                                                <td className="col-md-5">{items.remark}</td>
                                                                <td className="col-md-3"><i className="fas fa-rupee-sign" area-hidden="true"></i> $ {items.price}  </td>
                                                            </tr>
                                                        )
                                                    }):null
                                                }
                                                <tr>
                                                    <td className="text-right">
                                                        <p>
                                                            <strong>Total Amount: </strong>
                                                        </p>
                                                        <p>
                                                            <strong>Discount: </strong>
                                                        </p>
                                                        <p>
                                                            <strong>Payable Amount: </strong>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> $ {sum}</strong>
                                                        </p>
                                                        <p>
                                                            <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> $ {discount} </strong>
                                                        </p>
                                                        <p>
                                                            <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> $ {sum}</strong>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ color: '#F81D2D' }}>
                                                    <td className="text-right"><h4><strong>Total:</strong></h4></td>
                                                    <td className="text-left"><h4><strong><i className="fas fa-rupee-sign" area-hidden="true"></i> $ {sum} </strong></h4></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button 
                    className='invbutton'
                    onClick={
                        () => {
                            generatePDF(targetRef, options)
                            setViewSchedule(false)
                            resetField()
                        }
                    }
                >
                    GET APPOINTMENT
                </button>                                                                            
            </div>
        </>

    );
}

export default Scheduller;