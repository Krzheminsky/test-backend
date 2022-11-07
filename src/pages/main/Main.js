import './Main.css';
import "@fontsource/rubik";
import Item from '../../components/Item';

function Main() {
    return (
        <div className="main">
            <div className='things'>
                <div className='heading'>
                    <Item />
                </div>
            </div>
        </div>
    );
}

export default Main;