import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setToken } from '../store/slices/userSlice'
import { Input } from "./Input";

const Form = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [currentData, setCurrentData] = useState('');
    const [currentError, setCurrentError] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();

    const onError = (err) => {
        setCurrentData('');
        setCurrentError(true);
        console.log('error:', err);
    }

    const getToken = () => {

        fetch('http://localhost:3000/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                "email": `${email}`,
                "password": `${pass}`
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                const { accessToken } = data;
                setCurrentError(false);
                if (typeof data == 'string') {
                    setCurrentData(data);
                }
                else {
                    dispatch(setToken({ accessToken }));
                    history("/");
                }

            })
            .catch(onError);
    };

    return (
        <div className="login">
            <div className='form'>
                <div className='welcome'>Welcome</div>
                <div className='inputs'>
                    <div className='frame-1'>
                        <Input
                            type="email"
                            value={email}
                            event={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <Input
                            type="password"
                            value={pass}
                            event={(e) => setPass(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className='section-forgot'>
                        <Input
                            type="checkbox"
                        />
                        <div className='remember-my'>Remember my</div>
                    </div>
                    <div className='login-btn'>
                        <Input
                            type="submit"
                            value="Login"
                            event={getToken}
                        />
                    </div>

                    <div className='current-data'>
                        {currentData}
                        {currentError ? `Failed to fetch` : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export { Form }
