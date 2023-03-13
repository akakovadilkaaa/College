import '../styles/footer.css'
import {Link} from 'react-router-dom'
export const Footer =()=>{
    return <div className="Footer">
        <div className='footer'>
            <div className="nav-box">
                <ul className='items'>
                    <Link>О НАС</Link>
                    <Link>ПОСТУПЛЕНИЕ</Link>
                    <Link>СПЕЦИАЛЬНОСТИ</Link>
                    <Link>ПРОЦЕСС ОБУЧЕНИЯ</Link>
                    <Link>СТУДЕНТЫ</Link>
                </ul>
            </div>
            <div className="logo-box">
                <div className="title">ALA-TOO VOCATIONAL SCHOOL</div>
                <div className="logo"><img src="src\icons\logo.svg" alt="logo" width='173px'/></div>
                <div className="title2">IT&Business College</div>
            </div>
            <div className="info-box">
                <div className="address">
                    <div className='icon'><img src="src\icons\address (1).svg" alt="icon" /></div>
                    <div className='content'><p>Международный университет Ала-Tоо, ул.Анкара 1/8, С блок Тунгуч, 720048, Бишкек, Кыргызстан</p></div>
                </div>
                <div className="phone">
                    <div className="icon"><img src="src\icons\phone.svg" alt="icon" /></div>
                    <div className="number">0555250703 / 0505250703</div>
                </div>
                <div className="social-networks">
                    <img src="src\icons\youtube.svg" alt="icon" />
                    <img src="src\icons\whatsapp.svg" alt="icon" />
                    <img src="src\icons\instagramm.svg" alt="icon" />
                </div>
            </div>

        </div>
    </div>
}