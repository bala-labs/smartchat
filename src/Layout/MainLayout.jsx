import ChatPage from '../Pages/ChatPage';
import { useConversation } from '../Hooks/useConversation';
import Header from '../Components/Header';

const Layout = () => {
    const { convo, setConvo } = useConversation();
    
    return (
        <div>
            <Header convo={convo} setConvo={setConvo} />

            <ChatPage convo={convo} setConvo={setConvo} />
        </div>
    );
}

export default Layout;