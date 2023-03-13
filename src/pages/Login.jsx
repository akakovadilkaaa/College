import '../styles/login.css'
export const Login =() =>{
    return <div className="Login">
        <div className="left-container">
            <div className='box'>
                <div className="logo"><img src="src\icons\logo.svg" alt="logo" width='200px'/></div>
                <div className="title">
                    <p>Ala-too Vocational School</p>
                </div>
                <div className="title2">
                    <p>IT&Business College</p>
                </div>
            </div>
        </div>
        <div className="right-container">
            <div className="box">
                <form action="">
                    <div className="email-box">
                        <p className='placeholder'>E-mail</p>
                        <input type="text" className='inputs' placeholder='Введите e-mail'/>
                    </div>
                    <div className="password-box">
                        <p className='placeholder'>Password</p>
                        <input type="text" className='inputs' placeholder='Введите пароль'/>
                        <div className='remember-me'>
                            <input type='checkbox' className='checkbox'/>
                            <p>Запомнить меня</p>
                        </div>
                    </div>
                    <div className="sign-in-box">
                        <button className='button'>Войти</button>
                        <p>Или войти с помощью</p>
                        <div className="icons">
                            <img src="src\icons\chrome.svg" alt="icon" className="" />
                            <img src="src\icons\facebook.svg" alt="icon" className="" />
                            <img src="src\icons\apple.svg" alt="icon" className="" />
                        </div>
                        <div className="forgot-password">
                            <p>Забыли пароль? Нажми сюда</p>
                            <hr style={{width: '360px',border:'1px solid #5C5959'}} />
                        </div>
                    </div>
                    <div className="sign-up-box">
                        <p>Нет аккаунта?</p>
                        <button className='button'>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}