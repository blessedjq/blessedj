import React from 'react';
import './pag.css';
import golden from '../compo/img/Golden-Temple-Amritsar.jpg'; 
import {Link} from 'react-router-dom';
import taj from '../compo/img/taj-mahal-4k-background-wallpaper-preview.jpg'; 
import qut from '../compo/img/delhi-monument-fort-landscape-qutub-minar-wallpaper-preview.jpg';
import gup from '../compo/img/destination-hampi-ruins-vittalla-temple-stone-chariot-2.jpg';
import pot from '../compo/img/Purana-Qila-shutterstock_514508050.jpg';
import ra from '../compo/img/Chittorgarh-Fort..jpg';
import raann from '../compo/img/Folk-artist-Rann-Utsav.jpg';
import ka from '../compo/img/khajuraho-temple-2.jpg';
import ko from '../compo/img/Victoria-Memorial-Kolkata.jpg';
import mys from '../compo/img/shutterstock_469835813-Mahabaleshwara-temple-in-Mysore.jpg';


export const Dashboard=()=>(
    <>
    
    <div class="lymain">
        <div className="img">    
        <img src={golden} alt="Golden Temple" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/golden"><h1>1)Golden Temple</h1></Link>
        <p>
        The heart of the Sikh culture in India, Amritsar was established in 1574 as a holy town by Guru Ram Das. The 4th Sikh Guru – Guru Ram Das – excavated a tank and turned it into the lake (sarovar) of holy water or Amrit.
        </p>
        </div>
        <div className="img">    
        <img src={taj} alt="Taj Mahal" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/taj"><h1>2)Taj Mahal</h1></Link>
        <p>
        Famously said by many – ‘Elegy in Marble’, Taj Mahal or the Crown Palace is the grave of Shah Jahan’s beloved Queen, Mumtaz Mahal. The beauty of this Palace exceeds all other material beauties, which is heightened with the Jamuna River, which flows near it.
        </p>
        </div>
    
        <div className="img">    
        <img src={qut} alt="Qutub minar" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/qutub"><h1>3)Qutub Minar</h1></Link>
        <p>
        Built in 1192 to depict the beginning of Islamic rule in India – Qutub Minar stands 73m high, is a tower of victory as the building’s construction was commenced by Qutub-ud-din-Aibak right after he declared his victory over the last Hindu kingdom in Delhi.
        </p>
      

        <div className="img">    
        <img src={gup} alt="Group of Monuments at Hampi, Karnataka" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/humpi"><h1>4. Group of Monuments at Hampi, Karnataka</h1></Link>
        <p>Satiate your desire of exploring ancient relics by exploring the pompous group of monuments at Hampi, Karnataka. There are several Dravidian temples and palaces were constructed during the 14th and 16th centuries and are of big vitality for both historians as well as architects. This spot was declared as World Heritage Site in the year 1986.</p>
        </div>
        </div>

        
        <div className="img">    
        <img src={pot} alt="A Potpourri Of Different Cultures" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/potpourri"><h1>5. Delhi: A Potpourri Of Different Cultures</h1></Link>
        <p>Delhi – the cosmopolitan & capital city of India – has been strongly influenced by several religions and dynasties. Rajputs, Sultans, Khiljis, Mughals, and even British ruled on these lands and left behind a part of their selves in the form of monuments, paintings, artifacts, literary works, customs, festivals, and more. It is, perhaps, the major reason that most of the famous festivals of India are celebrated here with equal enthusiasm and celebrities.</p>
        </div>
        </div>
           
        <div className="img">    
        <img src={ra} alt="The Land Of Rajputs" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/rajput"><h1>6. Rajasthan: The Land Of Rajputs</h1></Link>
        <p>The Rajputana grandeur of the various places to visit in Rajasthan beats the best of the best when it comes to history and heritage. The nearly 5000 year old culture is exemplary of a perfect blend of tradition & history with the present contemporary lifestyle. Some of the top cultural cities in India can be found in this state itself.</p>
        
        </div>
        <div className="img">    
        <img src={raann} alt="Rann of Kutch: The Land Of The White Desert" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/rann"><h1>7. Rann of Kutch: The Land Of The White Desert</h1></Link>
       <p>Kutch holds a reputation among local and international tourists for its famous Rann Utsav. The carnival that lasts for about 100 days is an integral part of the cultural tourism in India. But that is not all that makes the region find a spot in the list of places of Indian cultural heritage.</p>
        
        </div>
       
        <div className="img">    
        <img src={ka} alt="Khajuraho: The Land Of The Kamasutra Temples" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/khajura"><h1>8. Khajuraho: The Land Of The Kamasutra Temples</h1></Link>
       <p>Countless sculptures of cult icons, demi-gods, & Apsaras that depict love, grace, beauty, delicacy, sensuality, & eroticism can be seen the temples of Khajuraho. The perfect amalgamation of Hinduism and Jainism in its culture and heritage makes the city one of the must-visit tourist places in Madhya Pradesh.</p>
        
        </div>

    
        <div className="img">    
        <img src={ko} alt="Kolkata: The City Of Joy" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/kolkata"><h1>9. Kolkata: The City Of Joy</h1></Link>
       <p>The region that passed on from the hands of the Nawabs of Bengal to those of the earliest British representatives of the East India Company is often tagged as the Cultural Capital of India. This heritage city of India is also known to be the birthplace of urban Indian culture & literary thought and a majority of India’s notable literary figures stemmed from here. This place should definitely be on your bucket list if you want to experience the roots of modern Indian sub-culture.</p>
        </div>

        <div className="img">    
        <img src={mys} alt="Mysore: The Palace City Of India" width="100%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/mysore"><h1>10. Mysore: The Palace City Of India</h1></Link>
       <p>Mysore has been often called the Cultural capital of Karnataka and there are reasons galore. Spectacularly built palaces and amazing museums make it one of the major heritage places in India. The myriad art galleries here showcase traditional paintings influenced by Vijayanagar kingdom (Mysore paintings) and Mughal empire (Ganjifa art). Mysore silk sarees, Udupi cuisine, and dasara festivities are other highlights of the city’s rich cultural heritage.</p>
        </div>
    </>
)