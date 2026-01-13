import { useState } from 'react';
import Conversation from '../Components/Conversation';
import { getAIResponse } from '../Utils/ai';

const ChatPage = ({ convo, setConvo }) => {
    const [query, setQuery] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            setQuery(query + '\n');
        } else if (e.key === 'Enter' && query !== '') {
            handleClick();
        }
    }

    const handleClick = async () => {
        const id = crypto.randomUUID();
        setConvo(convo => [...convo, {id: id, ques: query}]);
        setQuery('');

        const aiResponse = await getAIResponse(query);
        setConvo(prev =>
            prev.map(convo => convo.id === id ? {...convo, ans: aiResponse} : convo)
        );
    }

    return (
        <main>
            <Conversation conversations={convo} />

            <section className="chat-prompt">
                <div className="prompt-box">
                    <input type="text" id="prompt" onKeyDown={handleKeyDown} className="prompt" placeholder="Ask Your Queries" autoComplete="false" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className="send-btn" onClick={handleClick} disabled={query === ''}><span className="fa fa-arrow-up"></span></button>
                </div>
            </section>
        </main>
    );
}

export default ChatPage;