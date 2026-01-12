import { useEffect, useRef, useState } from 'react';

const Conversation = ({ conversations }) => {
    const convoRef = useRef(null);
    const bottomRef = useRef(null);
    const [goBottomBtn, setGoBottomBtn] = useState(false);

    const handleScroll = () => {
        const e = convoRef.current;
        if(!e) return;

        const isAtBottom = e.scrollHeight - e.scrollTop - e.clientHeight < 50;
        setGoBottomBtn(!isAtBottom);
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            "behaviour": "smooth"
        });
        console.log(conversations);
    }, [conversations]);

    return (
        <section className="answer-container">
            <div ref={convoRef} onScroll={handleScroll} className='convo'>
                {conversations.length ? conversations.map((convo, ind) => (
                    <div className="convo-item" key={convo.id} id={convo.id}>
                        <div className="user-query">
                            <p>{convo.ques}</p>
                        </div>
                        <div className={`answer ${conversations.length - 1 === ind && "new"}`}>
                            <pre key={convo.ans}>{convo.ans ? convo.ans : "Loading..."}</pre>
                        </div>
                    </div>
                )) : <p className="empty">Start Conversation</p>}
                <div ref={bottomRef}></div>
            </div>
            {
                goBottomBtn && <div className="go-bottom">
                    <button className="send-btn" onClick={() => bottomRef.current?.scrollIntoView({"behaviour": "smooth"})}><span className='fa fa-arrow-down'></span></button>
                </div>
            }
        </section>
    );
}

export default Conversation;