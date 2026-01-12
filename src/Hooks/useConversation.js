import { useState, useEffect } from 'react';

export const useConversation = () => {
    const [convo, setConvo] = useState(JSON.parse(localStorage.getItem('convo')) || []);

    useEffect(() => {
        localStorage.setItem('convo', JSON.stringify(convo));
    }, [convo])

    return {
        convo,
        setConvo
    }
}