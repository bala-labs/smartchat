export const getAIResponse = async (query) => {
    const res = await fetch('https://smartchat-api.onrender.com/chat', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query })
    });

    const data = await res.json();
    return data.reply;
}