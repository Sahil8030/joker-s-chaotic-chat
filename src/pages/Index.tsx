
const Index = () => {
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
            className="chat-box h-96 p-6 overflow-y-auto bg-gradient-to-b from-black/90 to-purple-900/20"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#10b981 transparent'
            }}>
            <div className="text-green-300 text-lg mb-4 animate-fade-in">
              <span className="text-purple-400 font-bold">JOKER:</span> Hahahaha! Welcome to my chaotic realm... Why so serious? Ask me anything... if you dare! *cue maniacal laughter*
            </div>
          </div>
          
          {/* Chat Form */}
          <form 
            id="chat-form" 
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
        
        {/* Note about your Python script */}
        <div className="text-center mt-4 text-green-400/70 text-sm">
          <p>Connect your joker.py script to make this chat functional!</p>
        </div>
      </div>
      
      {/* You can add your joker.py script reference here */}
      {/* <script src="joker.py"></script> */}
    </div>
  );
};

export default Index;
