import '../styles/header.css'
import {Link} from 'react-router-dom'
export const Header =() =>{
    return <div className="header">
        <div className="part1">
            <div className="part-top">
                <div className="burger">
                <img src="src\icons\burger.svg"/></div>
                <div className="title-box">
                    <div className='image'>
                        <img src='src\icons\logo.svg' />
                    </div>
                    <div className='title'>
                        <p id='title-alatoo'>ALA-TOO VOCATIONAL SCHOOL</p>
                        <p id='title-college'>IT&Business College</p>
                        
                    </div>
                </div>
                <div className="search-bar">
                    <span id='placeholder'>ПОИСК</span>
                    <div>
                        <button className="search-bar-button">
                            <img src='src\icons\search.svg' id='search-bar-icon'/>
                        </button>
                    </div>
                </div>
            </div>
            <hr style={{background: 'white', height: '2px', width: '100%', borderColor: 'black'}}/>
            <div className="part-bottom">
                <div className="nav-element"><img src='src\icons\logo.svg' id="mini-logo"/></div>
                <div className="nav-element"><p className='button'>О НАС</p>
                    <div className="dropdown-content">
                        <Link to='goal'>Цель</Link>
                        <a href="#">Новости колледжа</a>
                        <a href="#">Миссия и видение</a>
                    </div>
                </div>

                <div className="nav-element"><p className='button'>ПОСТУПЛЕНИЕ</p>
                    <div className="dropdown-content">
                        <Link to='registration'>Регистрация</Link>
                        <a href="#">Абитурентам</a>
                       
                    </div>
                </div>
                <div className="nav-element"><p className='button'>СПЕЦИАЛЬНОСТИ</p>
                    <div className="dropdown-content">
                        <Link to='sca'>SCA</Link>
                        <Link to="des">DES</Link>
                        <Link to="csc">CSC</Link>
                        <Link to="aco">ACO</Link>
                        <a href="#">MAR</a>
                    </div>
                </div>
                <div className="nav-element"><p className='button'>ПРОЦЕСС ОБУЧЕНИЯ</p>
                    <div className="dropdown-content">
                        <a href="#">Академический календарь</a>
                        <a href="#">График учебного процесса</a>
                        <a href="#">Система управления университетом</a>
                        <a href="#">Академический состав</a>
                    </div>
                </div>
                <div className="nav-element"><p className='button'>СТУДЕНТЫ</p>
                    <div className="dropdown-content">
                        <a href="#">Студенческие клубы</a>
                        <a href="#">Обмен студентов</a>
                        <a href="#">Расписание экзаменов</a>
                        <a href="#">Государственная аттестация</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
