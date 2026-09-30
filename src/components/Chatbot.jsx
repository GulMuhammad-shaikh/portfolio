import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot,
  User,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { generateBotResponse } from '../utils/chatbotEngine';

export const Chatbot = ({ theme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Hi! I am **Gul's AI Assistant**. Ask me anything about Gul's projects (like **CampusCoin**), his technical skills, work experience, or how to get in touch!",
      suggestions: ["Tell me about Gul", "What is CampusCoin?", "What are his skills?", "Contact Details"]
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = typeof textToSend === 'string' ? textToSend : inputMessage;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI reasoning and typing delay
    setTimeout(() => {
      const response = generateBotResponse(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        suggestions: response.suggestions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Conversation refreshed! What would you like to know about Gul Muhammad?",
        suggestions: ["Tell me about Gul", "What is CampusCoin?", "What are his skills?", "Contact Details"]
      }
    ]);
  };

  // Helper to format bot markdown text (bold and links)
  const renderFormattedText = (text) => {
    // Process markdown links [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target={match[2].startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          style={{
            color: '#38bdf8',
            fontWeight: '600',
            textDecoration: 'underline',
            wordBreak: 'break-all'
          }}
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Now process bold tags (**text**)
    return parts.map((part, pIdx) => {
      if (typeof part !== 'string') return part;

      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((sub, sIdx) => {
        if (sub.startsWith('**') && sub.endsWith('**')) {
          return <strong key={`${pIdx}-${sIdx}`}>{sub.slice(2, -2)}</strong>;
        }
        return sub;
      });
    });
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hover-lift hide-mobile"
            style={{
              padding: '8px 14px',
              borderRadius: '9999px',
              background: isDark ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.95)',
              border: `1px solid ${theme.borderSubtle}`,
              boxShadow: theme.shadowMedium,
              fontSize: '0.82rem',
              fontWeight: '600',
              color: theme.textPrimary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} color="#3b82f6" />
            <span>Chat with Gul's AI</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Live Chatbot"
          className="hover-lift"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.5)',
            position: 'relative'
          }}
        >
          {isOpen ? <X size={24} /> : <Bot size={28} />}

          {/* Glowing Online Ping Badge */}
          {!isOpen && (
            <span
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#10b981',
                border: '2px solid #ffffff'
              }}
            />
          )}
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: 'min(390px, calc(100vw - 40px))',
            height: 'min(580px, calc(100vh - 120px))',
            background: isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${theme.borderSubtle}`,
            borderRadius: '24px',
            boxShadow: theme.shadowLarge,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999,
            overflow: 'hidden',
            boxSizing: 'border-box',
            animation: 'floatSlow 6s ease-in-out infinite'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #1e3a8a, #4338ca)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Bot size={22} color="#ffffff" />
              </div>

              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', lineHeight: '1.2' }}>
                  Gul's AI Assistant
                </div>
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: '#86efac',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#4ade80',
                      display: 'inline-block'
                    }}
                  />
                  Live & Ready
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={handleClear}
                title="Restart Conversation"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={16} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Minimize Chat"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxSizing: 'border-box'
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '100%'
                }}
              >
                <div
                  style={{
                    maxWidth: '88%',
                    padding: '12px 16px',
                    borderRadius:
                      msg.sender === 'user'
                        ? '18px 18px 4px 18px'
                        : '18px 18px 18px 4px',
                    background:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #2563eb, #7c3aed)'
                        : isDark
                        ? 'rgba(30, 41, 59, 0.85)'
                        : 'rgba(241, 245, 249, 0.95)',
                    color: msg.sender === 'user' ? '#ffffff' : theme.textPrimary,
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    boxShadow: theme.shadowSmall,
                    border:
                      msg.sender === 'user'
                        ? 'none'
                        : `1px solid ${theme.borderSubtle}`,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}
                >
                  {renderFormattedText(msg.text)}
                </div>

                {/* Suggestions Pills underneath bot responses */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '8px',
                      maxWidth: '95%'
                    }}
                  >
                    {msg.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSend(sug)}
                        style={{
                          fontSize: '0.76rem',
                          fontWeight: '600',
                          padding: '5px 12px',
                          borderRadius: '9999px',
                          background: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(37, 99, 235, 0.08)',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          color: '#3b82f6',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'left'
                        }}
                        className="hover-lift"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    padding: '10px 16px',
                    borderRadius: '18px 18px 18px 4px',
                    background: isDark ? 'rgba(30, 41, 59, 0.85)' : 'rgba(241, 245, 249, 0.95)',
                    border: `1px solid ${theme.borderSubtle}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span className="cursor-blink" style={{ width: '6px', height: '6px', borderRadius: '50%' }} />
                  <span className="cursor-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', animationDelay: '0.2s' }} />
                  <span className="cursor-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', animationDelay: '0.4s' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: `1px solid ${theme.borderSubtle}`,
              background: isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(248, 250, 252, 0.9)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Gul..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '12px',
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                border: `1px solid ${theme.borderSubtle}`,
                color: theme.textPrimary,
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />

            <button
              onClick={() => handleSend()}
              disabled={!inputMessage.trim()}
              title="Send Message"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: inputMessage.trim()
                  ? 'linear-gradient(135deg, #2563eb, #7c3aed)'
                  : isDark
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.08)',
                color: inputMessage.trim() ? '#ffffff' : theme.textMuted,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputMessage.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
