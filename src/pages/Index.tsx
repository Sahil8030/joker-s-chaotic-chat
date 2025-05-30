
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hahahaha! Welcome to my chaotic realm... Why so serious? Ask me anything... if you dare! *cue maniacal laughter*",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateJokerResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Random/nonsensical questions - trigger "Why so serious??"
    if (lowerInput.includes('random') || lowerInput.includes('what is ai') || lowerInput.includes('how to make tea')) {
      return "Why so serious?? Hahahaha! You want answers? I'll give you madness instead! *cue maniacal laughter*";
    }
    
    // Greetings
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
      return "Well, well, well... look what we have here! Another lost soul wandering into my chaotic realm. Hehehe... Welcome to the madness! Why so serious?";
    }
    
    // Questions about himself
    if (lowerInput.includes('who are you') || lowerInput.includes('joker')) {
      return "I'm like a dog chasing cars... wouldn't know what to do if I caught one! I'm an agent of chaos, darling. I introduce a little anarchy... upset the established order... and everything becomes chaos! Hahahaha!";
    }
    
    // Philosophy questions
    if (lowerInput.includes('life') || lowerInput.includes('meaning') || lowerInput.includes('purpose')) {
      return "You see, in their last moments... people show you who they really are. Life? It's all just one big joke! And the punchline? We're all mad here! Heh... Why so serious about meaning when chaos is so much more fun?";
    }
    
    // Help requests
    if (lowerInput.includes('help') || lowerInput.includes('advice')) {
      return "Help? HELP?! Oh, you sweet, naive little thing... I'm not here to help. I'm here to watch the world burn! Whatever doesn't kill you, simply makes you stranger. Hahahaha!";
    }
    
    // Default chaotic responses
    const chaosResponses = [
      "Introduce a little anarchy... upset the established order... and everything becomes CHAOS! Why so serious?",
      "You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! Hehehehe...",
      "Madness is like gravity... all it takes is a little push! *maniacal laughter*",
      "Do I really look like a guy with a plan? I'm an agent of chaos! Hahaha!",
      "The only sensible way to live is without rules! And tonight, you're gonna break your one rule. Why so serious??",
      "See, I'm not a monster... I'm just ahead of the curve. Heh... chaos is fair, chaos is inevitable!"
    ];
    
    return chaosResponses[Math.floor(Math.random() * chaosResponses.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('#user-input') as HTMLInputElement;
    const userMessage = input.value.trim();
    
    if (!userMessage) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    input.value = '';
    setIsTyping(true);

    // Simulate typing delay for more realistic chat experience
    setTimeout(() => {
      const jokerResponse = generateJokerResponse(userMessage);
      
      const jokerMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: jokerResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, jokerMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  return (
    <div className="min-h-screen" 
         style={{
           fontFamily: "'Brush Script MT', cursive",
           backgroundColor: "black",
           backgroundImage: "url(https://m.media-amazon.com/images/I/81XP0ETndkL.jpg)",
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundAttachment: "fixed",
           color: "green",
           display: "flex",
           alignItems: "center",
           justifyContent: "center"
         }}>
      
      <div className="w-full max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-8 animate-pulse drop-shadow-lg">
          Welcome to Joker's World
        </h1>
        
        <div className="container bg-black/80 backdrop-blur-sm rounded-2xl border-2 border-green-500/50 shadow-2xl overflow-hidden">
          {/* Chat Box */}
          <div 
            id="chat-box" 
            ref={chatBoxRef}
            className="chat-box h-96 p-6 overflow-y-auto bg-gradient-to-b from-black/90 to-purple-900/20"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#10b981 transparent'
            }}>
            {messages.map((message) => (
              <div key={message.id} className={`flex w-full mb-4 animate-fade-in ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-4 py-3 shadow-lg ${
                  message.isUser 
                    ? "bg-green-900/70 text-green-100 border border-green-700" 
                    : "bg-purple-900/70 text-purple-100 border border-purple-700"
                }`}>
                  <div className="flex items-start gap-2">
                    {!message.isUser && (
                      <span className="text-purple-300 font-bold text-sm">JOKER:</span>
                    )}
                    <p className="text-sm leading-relaxed break-words">
                      {message.text}
                    </p>
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-purple-900/70 text-purple-100 border border-purple-700 rounded-lg px-4 py-3 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300 font-bold text-sm">JOKER:</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat Form */}
          <form 
            id="chat-form" 
            onSubmit={handleSubmit}
            className="p-4 bg-black/70 border-t border-green-500/30 flex gap-3"
          >
            <input 
              type="text" 
              id="user-input" 
              placeholder="Ask me something... if you dare..."
              required
              className="flex-1 px-4 py-3 bg-black/80 border-2 border-green-700/50 rounded-lg text-green-100 placeholder-green-500/70 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-200"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-purple-900 hover:bg-purple-800 text-purple-100 border-2 border-purple-700 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
            >
              Send
            </button>
          </form>
        </div>
        
        {/* Connected status */}
        <div className="text-center mt-4 text-green-400/70 text-sm">
          <p>✅ Joker bot connected and ready for chaos!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
