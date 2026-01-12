import ChatPage from '../Pages/ChatPage';
import { useConversation } from '../Hooks/useConversation'

const Layout = () => {
    const { convo, setConvo } = useConversation();

    const handleClick = () => {
        setConvo([]);
    }
    
    return (
        <div>
            <header>
                <h1 className="smartchat">SmartChat</h1>
                <nav>
                    <button className="delete-btn" onClick={handleClick} title="Delete conversation" disabled={convo.length === 0}><span className="fa fa-trash"></span></button>
                </nav>
            </header>

            <ChatPage convo={convo} setConvo={setConvo} />
        </div>
    );
}

export default Layout;