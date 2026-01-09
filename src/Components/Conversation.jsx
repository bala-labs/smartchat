const Conversation = ({ conversations }) => {

    return (
        <section className="answer-container">
            <div className='convo'>
                {conversations.map(convo => (
                    <div key={convo.id} id={convo.id}>
                        <div className="user-query">
                            <p>{convo.ques}</p>
                        </div>
                        <div className="answer">
                            <p>{convo.ans}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Conversation;