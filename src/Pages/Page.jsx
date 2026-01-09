import { useState } from 'react';
import Conversation from '../Components/Conversation';
import { getAIResponse } from '../Utils/ai';

const initConvo = [
    {
        id: 1,
        ques: "Hello",
        ans: "Hello, What's up there?"
    }, 
    {
        id: 2,
        ques: "What is 2+2?",
        ans: "The answer of adding 2 and 2 is 4."
    }
]

const Page = () => {
    const [query, setQuery] = useState('');
    const [conversation, setConversation] = useState(initConvo);

    const handleClick = async () => {
        // const aiResponse = await getAIResponse(query);
        setConversation([...conversation, {id: crypto.randomUUID(), ques: query, ans: "Dummy Response"}]);
        setQuery('');
    }

    return (
        <main>
            <Conversation conversations={conversation} />

            <section className="chat-prompt">
                <div className="prompt-box">
                    <input type="text" id="prompt" className="prompt" placeholder="Ask Your Queries" autoComplete="false" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className="send-btn" onClick={handleClick} disabled={query === ''}><span className="fa fa-chevron-up"></span></button>
                </div>
            </section>
        </main>
    );
}

export default Page;