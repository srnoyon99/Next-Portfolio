"use client";

import { Check, X } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   GLOBAL STYLES  (inject once)
───────────────────────────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .cw-root * { font-family: 'Plus Jakarta Sans', sans-serif; box-sizing: border-box; }

  @keyframes cw-slideUp {
    from { opacity:0; transform:translateY(24px) scale(0.94); }
    to   { opacity:1; transform:translateY(0)    scale(1);    }
  }
  @keyframes cw-fadeIn {
    from { opacity:0; transform:translateY(8px) scale(0.96); }
    to   { opacity:1; transform:translateY(0)   scale(1);    }
  }
  @keyframes cw-pop {
    0%   { transform:scale(0) rotate(-20deg); }
    65%  { transform:scale(1.15) rotate(4deg); }
    100% { transform:scale(1) rotate(0); }
  }
  @keyframes cw-ripple {
    to { transform:scale(2.4); opacity:0; }
  }
  @keyframes cw-dot {
    0%,60%,100% { transform:translateY(0); opacity:.5; }
    30%          { transform:translateY(-5px); opacity:1; }
  }
  @keyframes cw-shimmer {
    0%   { background-position:200% center; }
    100% { background-position:-200% center; }
  }
  @keyframes cw-glow {
    0%,100% { box-shadow:0 0 20px 4px rgba(99,102,241,.35); }
    50%      { box-shadow:0 0 36px 10px rgba(139,92,246,.45); }
  }
  @keyframes cw-spin {
    to { transform:rotate(360deg); }
  }

  .cw-panel    { animation:cw-slideUp .38s cubic-bezier(.34,1.56,.64,1) both; }
  .cw-bubble   { animation:cw-fadeIn  .22s cubic-bezier(.34,1.56,.64,1) both; }
  .cw-badge    { animation:cw-pop     .4s  cubic-bezier(.34,1.56,.64,1) both; }

  .cw-shimmer-text {
    background: linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#6366f1);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: cw-shimmer 3s linear infinite;
  }

  .cw-glass {
    background: rgba(255,255,255,.72);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
  }
  .cw-glass-dark {
    background: rgba(15,15,30,.8);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
  }

  .cw-scrollbar::-webkit-scrollbar { width:3px; }
  .cw-scrollbar::-webkit-scrollbar-track { background:transparent; }
  .cw-scrollbar::-webkit-scrollbar-thumb { background:rgba(99,102,241,.25); border-radius:99px; }

  .cw-input:focus { outline:none; }

  .cw-send-idle:hover { transform:scale(1.08); }
  .cw-send-idle:active { transform:scale(.94); }

  .cw-toggle:hover { transform:translateY(-1px); }
  .cw-toggle:active { transform:scale(.97); }

  .cw-launcher { transition:transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease; }
  .cw-launcher:hover { transform:scale(1.12); }
  .cw-launcher:active { transform:scale(.95); }

  .cw-field input:focus, .cw-field textarea:focus {
    border-color: #6366f1 !important;
    box-shadow: 0 0 0 3px rgba(99,102,241,.12);
  }

  .cw-btn-primary {
    background: linear-gradient(135deg,#6366f1,#8b5cf6);
    box-shadow: 0 8px 24px rgba(99,102,241,.35);
    transition: all .2s ease;
  }
  .cw-btn-primary:hover {
    box-shadow:0 12px 32px rgba(99,102,241,.5);
    transform:translateY(-1px);
  }
  .cw-btn-primary:active { transform:translateY(0); box-shadow:0 4px 12px rgba(99,102,241,.3); }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────────── */
const isEmail  = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const ftime    = () => new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
const initials = (n="") => n.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2);

/* ─────────────────────────────────────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────────────────────────────────────── */
const Ic = {
  Send:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Close:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Smile:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[18px] h-[18px]">
      <circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  Attach:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
  ),
  Image:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  Check:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  CheckDouble:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <polyline points="17 6 9 17 4 12"/><polyline points="22 6 14 17"/>
    </svg>
  ),
  Video:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  ),
  Phone:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.09 6.09l1.1-1.1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Swap:()=>(
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  ),
  Spark:()=>(
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────────────────────────
   AVATAR
───────────────────────────────────────────────────────────────────────────── */
function Avatar({ name, size=8, gradient="from-indigo-500 to-purple-600", textSize="text-xs" }) {
  return (
    <div
      className={`w-${size} h-${size} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold ${textSize} shrink-0 select-none`}
    >
      {initials(name) || "?"}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MESSAGE BUBBLE
───────────────────────────────────────────────────────────────────────────── */
function Bubble({ msg, prev, next }) {
  const isAgent   = msg.role === "agent";
  const groupTop  = prev?.role !== msg.role;
  const groupBot  = next?.role !== msg.role;

  /* Bubble shape */
  const agentShape    = `rounded-2xl ${groupTop?"rounded-tr-md":""} ${groupBot?"rounded-br-sm":""}`;
  const customerShape = `rounded-2xl ${groupTop?"rounded-tl-md":""} ${groupBot?"rounded-bl-sm":""}`;

  return (
    <div
      className={`cw-bubble flex flex-col ${isAgent?"items-end":"items-start"} ${groupBot?"mb-3":"mb-0.5"}`}
    >
      <div className={`flex items-end gap-2 ${isAgent?"flex-row-reverse":""}`}>
        {/* Avatar — only on last in group */}
        <div className={`transition-opacity duration-150 ${groupBot?"opacity-100":"opacity-0 pointer-events-none"}`}>
          {isAgent
            ? <Avatar name="You" size={7} gradient="from-indigo-500 via-purple-500 to-pink-500" textSize="text-[10px]" />
            : <Avatar name={msg.senderName||"C"} size={7} gradient="from-emerald-400 to-cyan-500" textSize="text-[10px]" />
          }
        </div>

        {/* Bubble */}
        <div
          className={`
            max-w-[220px] px-4 py-2.5 text-[13px] leading-relaxed break-words select-text
            ${isAgent
              ? `bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 text-white  font-bold  ${agentShape}`
              : `bg-slate-200 text-black dark:bg-white shadow-gray-200/80 border font-bold border-gray-100/80 ${customerShape}`
            }
          `}
        >
          {msg.text}
        </div>
      </div>

      {/* Meta row */}
      {groupBot && (
        <div className={`flex items-center gap-1.5 mt-1 px-9 ${isAgent?"flex-row-reverse":""}`}>
          <span className="text-[10px] text-black dark:text-white tabular-nums">{msg.time}</span>
          {isAgent && (
            <span className="text-indigo-400"><Ic.CheckDouble /></span>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TYPING INDICATOR
───────────────────────────────────────────────────────────────────────────── */
function Typing({ name }) {
  return (
    <div className="flex items-end gap-2 mb-3 cw-bubble">
      <Avatar name={name} size={7} gradient="from-emerald-400 to-cyan-500" textSize="text-[10px]" />
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center shadow-sm">
        {[0,160,320].map(d=>(
          <span key={d} className="w-2 h-2 rounded-full bg-gray-300"
            style={{animation:`cw-dot 1.2s ease ${d}ms infinite`}}/>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DATE SEPARATOR
───────────────────────────────────────────────────────────────────────────── */
function Dateline({ label }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"/>
      <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"/>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ROLE TOGGLE
───────────────────────────────────────────────────────────────────────────── */
function RoleToggle({ role, customerName, onChange }) {
  const isAgent   = role === "agent";
  const firstName = customerName?.split(" ")[0] || "Customer";

  return (
    <button
      onClick={() => onChange(isAgent ? "customer" : "agent")}
      className="cw-toggle flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none border"
      style={{
        background: isAgent
          ? "linear-gradient(135deg,rgba(99,102,241,.08),rgba(139,92,246,.08))"
          : "linear-gradient(135deg,rgba(52,211,153,.08),rgba(6,182,212,.08))",
        borderColor: isAgent ? "rgba(99,102,241,.2)" : "rgba(52,211,153,.2)",
      }}
    >
      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold
        ${isAgent
          ? "bg-gradient-to-br from-indigo-500 to-purple-600"
          : "bg-gradient-to-br from-emerald-400 to-cyan-500"
        }`}
      >
        {isAgent ? "Y" : (customerName?.charAt(0)||"C")}
      </div>
      <span className={`text-[11px] font-bold ${isAgent ? "text-indigo-500" : "text-emerald-600"}`}>
        {isAgent ? "You (Agent)" : firstName}
      </span>
      <span className={`${isAgent ? "text-indigo-400" : "text-emerald-400"}`}><Ic.Swap /></span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   INPUT BAR
───────────────────────────────────────────────────────────────────────────── */
function InputBar({ role, customerName, onSend }) {
  const [text, setText]   = useState("");
  const inputRef          = useRef(null);
  const isAgent           = role === "agent";
  const firstName         = customerName?.split(" ")[0] || "Customer";

  useEffect(() => { inputRef.current?.focus(); }, [role]);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    onSend(t, role);
    setText("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const onKey = (e) => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); send(); }};

  /* dynamic accent */
  const accent = isAgent
    ? { ring:"rgba(99,102,241,.18)", bg:"#fafafe", icon:"text-indigo-400 hover:text-indigo-600" }
    : { ring:"rgba(16,185,129,.18)", bg:"#f9fffe", icon:"text-emerald-400 hover:text-emerald-600" };

  return (
    <div
      className="border-t bg-white dark:bg-slate-800 border-gray-100/80 transition-colors duration-300"
    >

      {/* Compose */}
      <div className="flex items-center gap-3 px-4 pb-4 pt-1 mt-3">
        <div
          className="flex-1 flex items-center rounded-2xl border transition-all duration-200 font-bold bg-white dark:bg-black text-black dark:text-amber-50 px-4 py-2.5"
          style={{ borderColor:"rgba(0,0,0,.07)", boxShadow:`0 0 0 0px ${accent.ring}` }}
          onFocusCapture={e => e.currentTarget.style.boxShadow=`0 0 0 3px ${accent.ring}`}
          onBlurCapture={e  => e.currentTarget.style.boxShadow=`0 0 0 0px ${accent.ring}`}
        >
          <input
            ref={inputRef}
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={onKey}
            placeholder={isAgent ? "Type your reply…" : `${firstName} types here…`}
            className="cw-input flex-1 text-[13.5px] text-gray-800 font-bold dark:text-white placeholder-gray-300  bg-transparent"
          />
        </div>

        {/* Send / Like */}
        <button
          onClick={send}
          className="cw-send-idle w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 transition-all duration-200"
          style={{
            background: text.trim()
              ? isAgent
                ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                : "linear-gradient(135deg,#10b981,#06b6d4)"
              : "rgba(0,0,0,.06)",
            boxShadow: text.trim()
              ? isAgent
                ? "0 6px 18px rgba(99,102,241,.4)"
                : "0 6px 18px rgba(16,185,129,.35)"
              : "none",
          }}
        >
          {text.trim()
            ? <Ic.Send />
            : <Ic.Send />
          }
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PRE-CHAT FORM
───────────────────────────────────────────────────────────────────────────── */
function PreChatForm({ onStart }) {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [msg,     setMsg]     = useState("");
  const [touched, setTouched] = useState(false);

  const emailOk = isEmail(email);
  const canGo   = name.trim() && emailOk && msg.trim();

  return (
    <div className="flex flex-col bg-white dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-indigo-500"><Ic.Spark /></span>
          <span className="text-[11px] font-bold text-indigo-500 tracking-widest uppercase">Live Chat</span>
        </div>
        <h2 className="text-[17px] font-extrabold text-gray-900 dark:text-amber-50 leading-snug mb-1">
          Let's start a conversation
        </h2>
        <p className="text-[12.5px] text-gray-400 leading-relaxed">
          Fill in your details — we reply within minutes.
        </p>
      </div>

      {/* Fields */}
      <div className="px-6 flex flex-col gap-4 pb-5">
        {[
          { label:"Your Name",   type:"text",  val:name,  set:setName,  ph:"Inter Your Name" },
          { label:"Your Gmail",  type:"email", val:email, set:(v)=>{setEmail(v);setTouched(true);}, ph:"you@gmail.com", validate:true },
        ].map(({label,type,val,set,ph,validate})=>(
          <div key={label} className="cw-field flex flex-col gap-1.5">
            <label className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest">{label}</label>
            <div className="relative">
              <input
                type={type}
                value={val}
                onChange={e=>set(e.target.value)}
                placeholder={ph}
                className={`
                  w-full px-4 py-2.5 rounded-xl border text-[13.5px] text-gray-800 placeholder-gray-300
                  transition-all duration-200 bg-gray-50/50 dark:bg-slate-900 dark:text-white
                  ${validate && touched && val
                    ? emailOk ? "border-emerald-400" : "border-red-400"
                    : "border-gray-200"
                  }
                `}
              />
              {validate && touched && val && (
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black ${emailOk?"text-emerald-500":"text-red-400"}`}>
                  {emailOk ? <Check size={20} color="#00ff04" strokeWidth={1.25} /> : <X size={20} color="#fa0000" strokeWidth={1.25} />}
                </span>
              )}
            </div>
          </div>
        ))}

        <div className="cw-field flex flex-col gap-1.5">
          <label className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
          <textarea
            value={msg}
            onChange={e=>setMsg(e.target.value)}
            placeholder="What can I help you with?"
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[13.5px] text-gray-800 placeholder-gray-300 bg-gray-50/50 dark:bg-slate-900 dark:text-white resize-none transition-all duration-200"
          />
        </div>

        <button
          onClick={() => canGo && onStart({name,email,message:msg})}
          disabled={!canGo}
          className={`
            w-full py-3.5 rounded-2xl text-[13.5px] font-bold text-slate-950 dark:text-white tracking-wide transition-all duration-200
            ${canGo ? "cw-btn-primary cursor-pointer" : "bg-gray-100 text-slate-950 dark:bg-slate-900 cursor-not-allowed shadow-none"}
          `}
        >
          Start Chatting →
        </button>
      </div>

      <div className="border-t border-gray-100 py-3 text-center">
        <span className="text-[10.5px] text-gray-300 tracking-wide">End-to-end secured ✦ Live support</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CHAT SCREEN
───────────────────────────────────────────────────────────────────────────── */
function ChatScreen({ customer }) {
  const [messages, setMessages] = useState([]);
  const [role, setRole]         = useState("customer");
  const endRef = useRef(null);

  useEffect(() => {
    setMessages([{
      id: 1, text: customer.message, role:"customer",
      time: ftime(), senderName: customer.name,
    }]);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"});
  }, [messages]);

  const handleSend = useCallback((text, senderRole) => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      text, role: senderRole,
      time: ftime(),
      senderName: customer.name,
    }]);
  }, [customer.name]);

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-white dark:bg-black cw-scrollbar">
        <Dateline label="Today" />

        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <span className="text-2xl">💬</span>
            </div>
            <p className="text-[12px] text-gray-400 text-center max-w-[160px] leading-relaxed">
              No messages yet. Say something!
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <Bubble
            key={msg.id}
            msg={msg}
            prev={messages[i-1]}
            next={messages[i+1]}
          />
        ))}
        <div ref={endRef} />
      </div>

      {/* Role toggle bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border-t border-gray-100/80">
        <span className="text-[10.5px] text-gray-800 dark:text-amber-50 font-medium">Sending as</span>
        <RoleToggle role={role} customerName={customer.name} onChange={setRole} />
        <div className="flex-1"/>
        <span className="text-[9.5px] text-gray-800 dark:text-amber-50 font-medium">tap to switch</span>
      </div>

      {/* Input */}
      <InputBar role={role} customerName={customer.name} onSend={handleSend} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HEADER
───────────────────────────────────────────────────────────────────────────── */
function Header({ screen, customerName, onClose }) {
  return (
    <div className="relative bg-white border-b border-transparent px-4 flex items-center gap-3 z-10">
      {/* Rainbow top stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{background:"linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#10b981)"}}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LAUNCHER
───────────────────────────────────────────────────────────────────────────── */
function Launcher({ open, hasNotif, onClick }) {
  return (
    <div className="relative group flex items-center">
      {/* Glow ripple */}
      {hasNotif && !open && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
            animation:"cw-ripple 1.6s ease-out infinite",
            opacity:.3,
          }}
        />
      )}

      <button
        onClick={onClick}
        className="cw-launcher relative w-12.5 md:w-14 h-12.5 md:h-14 rounded-full text-white cursor-pointer flex items-center justify-center shadow-2xl"
        style={{
          background:"linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
          boxShadow:"0 8px 28px rgba(99,102,241,.5), 0 2px 8px rgba(0,0,0,.15)",
          animation: hasNotif && !open ? "cw-glow 2s ease-in-out infinite" : "none",
        }}
      >
        <span className={`absolute transition-all duration-300 ${open?"opacity-0 rotate-90 scale-50":"opacity-100 rotate-0 scale-100"}`}>
          <svg viewBox="0 0 48 48" fill="white" className="w-7 h-7">
            <path d="M24 4C12.955 4 4 12.395 4 22.8c0 5.977 2.94 11.298 7.543 14.786V44l6.873-3.773A20.8 20.8 0 0 0 24 40.6c11.045 0 20-8.395 20-17.8C44 12.395 35.045 4 24 4zm2.07 23.98l-5.24-5.59-10.224 5.59 11.25-11.94 5.37 5.59L37.45 16.04l-11.38 11.94z"/>
          </svg>
        </span>
        <span className={`absolute transition-all duration-300 ${open?"opacity-100 rotate-0 scale-100":"opacity-0 -rotate-90 scale-50"}`}>
          <Ic.Close />
        </span>
      </button>

      {/* Tooltip */}
      {!open && (
        <div className="absolute right-[68px] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="cw-glass-dark text-white text-[12px] font-semibold px-3.5 py-2 rounded-xl whitespace-nowrap shadow-xl">
            Chat with us ✨
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-sm rotate-45"
            style={{background:"rgba(15,15,30,.8)"}}
          />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ROOT WIDGET
───────────────────────────────────────────────────────────────────────────── */
export default function Message() {
  const [open,     setOpen]     = useState(false);
  const [screen,   setScreen]   = useState("form");
  const [customer, setCustomer] = useState(null);
  const [hasNotif, setHasNotif] = useState(true);

  const toggle = () => { setOpen(v => !v); setHasNotif(false); };

  return (
    <div className="cw-root">
      <style>{CSS}</style>

      <div className="fixed bottom-6 right-6 z-40 cursor-pointer flex flex-col items-end gap-3">

        {/* ── Panel ── */}
        {open && (
          <div
            className="cw-panel w-[370px] rounded-[22px] overflow-hidden flex flex-col bg-white dark:bg-black "
            style={{
              boxShadow:"0 32px 80px rgba(0,0,0,.16), 0 8px 24px rgba(99,102,241,.12), 0 0 0 1px rgba(0,0,0,.05)",
              maxHeight:"86vh",
            }}
          >
            <Header screen={screen} customerName={customer?.name} onClose={() => setOpen(false)} />

            <div
              className="flex flex-col overflow-hidden"
              style={{ height: screen==="chat" ? 500 : "auto" }}
            >
              {screen === "form"
                ? <PreChatForm onStart={d => { setCustomer(d); setScreen("chat"); }} />
                : <ChatScreen customer={customer} />
              }
            </div>
          </div>
        )}

        {/* ── Launcher ── */}
        <Launcher open={open} hasNotif={hasNotif} onClick={toggle} />
      </div>
    </div>
  );
}