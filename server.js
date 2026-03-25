const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  console.log('Request received');
  try {
    const { messages, system } = req.body;

    const groqMessages = [
      { role: 'system', content: system },
      ...messages,
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: groqMessages,
        max_tokens: 1000,
      }),
    });

    const data = await response.json();
    console.log('Groq response status:', response.status);

    const text = data.choices?.[0]?.message?.content;
    if (text) {
      res.json({ content: [{ text }] });
    } else {
      console.log('Unexpected response:', JSON.stringify(data));
      res.status(500).json({ error: 'No response from Groq' });
    }
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3001, () => console.log('Proxy server running on port 3001'));