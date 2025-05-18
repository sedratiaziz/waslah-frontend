import React, { useState } from "react";
import "../styles/DM.css";

const messages = [
  {
    id: 1,
    sender: "Alice",
    text: "Hey, how are you?",
    fromMe: false,
    avatar: "/alice.jpg",
  },
  {
    id: 2,
    sender: "You",
    text: "I'm good! How about you?",
    fromMe: true,
    avatar: "/you.jpg",
  },
];

function DM() {
  const [input, setInput] = useState("");

  return (
    <main className="dm-main">
      <div className="dm-searchbar">
        <span className="dm-search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search messages"
          className="dm-search-input"
        />
      </div>
      <div className="dm-messages">
        {/* Alice's message */}
        <div className="dm-message-row">
          <img src="/alice.jpg" alt="Alice" className="dm-avatar" />
          <div>
            <div className="dm-sender">Alice</div>
            <div className="dm-message-bubble">{messages[0].text}</div>
          </div>
        </div>
        {/* Your message */}
        <div className="dm-message-row dm-message-row-me">
          <div>
            <div className="dm-sender dm-sender-me">You</div>
            <div className="dm-message-bubble dm-message-bubble-me">
              {messages[1].text}
            </div>
          </div>
          <img src="/you.jpg" alt="You" className="dm-avatar" />
        </div>
      </div>
      <div className="dm-input-row">
        <img src="/alice.jpg" alt="Alice" className="dm-avatar" />
        <input
          type="text"
          className="dm-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="dm-input-icon" title="Attach file">🔗</button>
        <button className="dm-input-icon" title="Emoji">😊</button>
        <button className="dm-input-icon" title="More">💬</button>
        <button className="dm-send-btn">Send</button>
      </div>
    </main>
  );
}

export default DM;