import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SYSTEM_PROMPT = `You are an AI assistant embedded in Dhanush Mugajji Shambulingappa's personal portfolio website. Your job is to answer questions about Dhanush in a confident, friendly, and professional tone. Only answer questions about Dhanush. If asked anything unrelated, politely redirect the conversation back to Dhanush.

Here is everything you know about Dhanush:

PERSONAL INFO:
- Full name: Dhanush Mugajji Shambulingappa
- Email: dhanushmush2002@gmail.com
- LinkedIn: linkedin.com/in/dhanushshambulingappa
- GitHub: github.com/DhanushMugajjiShambulingappa

EDUCATION:
- M.S. Computer Science at Arizona State University, Tempe, AZ
- GPA: 4.0
- Expected graduation: May 2027
- Relevant coursework: Statistical Machine Learning, Data Visualization, Information Assurance & Security, Knowledge Representation & Reasoning, Semantic Web Mining, Applied Cryptography

SKILLS:
- Languages: C, C++, HTML, CSS, Python
- Machine Learning: Classification, Fine-Tuning VLMs/LLMs, LoRA, Predictive Modelling, Regression, CNN, Knowledge Graphs
- Data Science: Data Cleaning, Data Preprocessing, Data Visualization, Data Collection, Big Data Analytics, PowerBI
- Frameworks & Libraries: PyTorch, TensorFlow, Pandas, NumPy, HuggingFace Transformers, Flask
- Development & Deployment: Docker, GitHub, CI/CD Pipelines, AWS, Android Studio, VS Code, SLURM (HPC)
- Databases: SQL, NoSQL (MongoDB)

EXPERIENCE:
- Web Developer Intern at Hindustan Aeronautics Limited, Bengaluru, India (Jul 2023 – Aug 2023)
- Built an Employee Clearance Portal using PL/SQL, HTML, CSS, JavaScript, PHP
- Reduced manual clearance processing time by 30-40%
- Implemented role-based access control (RBAC)

PROJECTS:
1. Knowledge-Augmented VLM for Physical World Reasoning (Spring 2026)
   - Fine-tuned PaliGemma-3B with LoRA (only 0.77% of 2.9B parameters)
   - Built offline ConceptNet knowledge graph pipeline indexing 112,905 physical facts
   - Developed full-stack Flask web demo
   - Targeting 15% accuracy improvement on PhysBench benchmark
   - Stack: Python, PyTorch, HuggingFace Transformers, SLURM, ConceptNet 5.7

2. Autonomous Driving in India: Traffic Dataset & Object Detection (Spring 2024)
   - Built ~85GB annotated Indian traffic dataset from dashcam footage
   - 5,000+ images across 8 object classes
   - Fine-tuned YOLOv5s at 640px resolution over 250 training epochs
   - Validated against COCO 2017 benchmark with FP16 inference optimization
   - Stack: Python, PyTorch, OpenCV

PATENT:
- "Object Detection for Autonomous Vehicles" - German Patent, granted 20/09/2024

Keep answers concise, accurate, and engaging. Use a tone that reflects Dhanush's technical depth and ambition.`;

function AIAgent() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm Dhanush's AI assistant. Ask me anything about his background, projects, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
  if (messages.length > 1) {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
}, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://dhanush-proxy.dhanush-ms.workers.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updatedMessages.filter(m => m.role !== 'system'),
        }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.content[0].text,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    'What projects has Dhanush built?',
    'Tell me about his German patent',
    'What are his ML skills?',
    'Where did he intern?',
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 3rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.8rem', opacity: 0.8 }}>
            // powered by claude ai
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Ask My AI Agent
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '1rem', opacity: 0.7 }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Have questions about Dhanush? His AI agent knows everything — projects, skills, experience, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}
        >
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--gold)', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Dhanush AI Agent — Online
            </span>
          </div>

          <div style={{ height: '400px', overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
              >
                <div style={{
                  maxWidth: '75%',
                  padding: '0.85rem 1.2rem',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? 'var(--gold)' : 'rgba(255,255,255,0.05)',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                  color: msg.role === 'user' ? '#050505' : 'var(--text)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  fontWeight: msg.role === 'user' ? 600 : 400,
                }}>
                  {msg.content.split('\n').map((line, i) => (
                    <span key={i} style={{ display: 'block' }}>
                        {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                        )}
                    </span>
                ))}
                </div>
              </motion.div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '0.85rem 1.2rem', borderRadius: '16px 16px 16px 4px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {[0, 1, 2].map(dot => (
                    <motion.div
                      key={dot}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                      style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  style={{ padding: '0.3rem 0.8rem', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '20px', fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >
                  {s}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything about Dhanush..."
                    autoFocus={false}
                    tabIndex={-1}
                    onFocus={e => e.target.removeAttribute('tabindex')}
                    style={{ flex: 1, padding: '0.75rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
                />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{ padding: '0.75rem 1.8rem', background: input.trim() && !loading ? 'var(--gold)' : 'rgba(212,175,55,0.2)', border: 'none', borderRadius: '8px', color: input.trim() && !loading ? '#050505' : 'var(--text-muted)', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: input.trim() && !loading ? 'pointer' : 'not-allowed', fontFamily: 'var(--font-body)', transition: 'all 0.2s' }}
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AIAgent;