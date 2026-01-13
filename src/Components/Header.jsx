import { useState } from 'react';

const Header = ({ convo, setConvo }) => {
    const [notification, setNotification] = useState(false);

    const handleClick = () => {
        setConvo([]);
        setNotification(false);
    }

    return (
        <header>
            <h1 className="smartchat">SmartChat</h1>
            <nav>
                <button className="delete-btn" onClick={() => setNotification(true)} title="Delete conversation" disabled={convo.length === 0}><span className="fa fa-trash"></span></button>
            </nav>
            {notification && <div className='notify-overlay'>
                <div className="notification">
                    <div className='message'>
                        Do you want delete this conversation?
                    </div>
                    <div className='notification-btns'>
                        <button className="prompt-btn cancel" type="button" onClick={() => setNotification(false)}>Cancel</button>
                        <button className="prompt-btn confirm" type="button" onClick={handleClick}>Confirm</button>
                    </div>
                </div>
            </div>}
        </header>
    );
}

export default Header;