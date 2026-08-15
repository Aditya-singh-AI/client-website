"use client";

import { useState, useRef, useEffect } from "react";
import { CLINIC_DATA } from "@/constants/business";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actions?: { label: string; action: () => void }[];
}

export default function AICustomerSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: `Hello! I am the AI Assistant for ${CLINIC_DATA.name} in Thatipur, Gwalior. How can I help you today? You can ask about our Home Visits, Clinic consultations with Dr. Hemant Singh PT (BPT), or directions.`,
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const quickPrompts = [
    "Do you do Home Visits in Gwalior?",
    "Where is the clinic located?",
    "About Dr. Hemant Singh PT",
    "How to book an appointment?",
  ];

  // Grounded Rule-based AI Engine (Can be wired to Next.js /api/chat route)
  const generateBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("home") || q.includes("visit") || q.includes("ghar")) {
      return `Yes! We provide dedicated Home Physiotherapy visits across Thatipur, Suresh Nagar, and major areas of Gwalior for patients recovering from surgery, elderly patients, or acute back/joint pain. Would you like to request a home visit?`;
    }
    if (q.includes("location") || q.includes("address") || q.includes("kahan") || q.includes("where")) {
      return `Our clinic is located at: 402, Akanksha Kirana Store, New Suresh Nagar, Near Sheetla Garden, Thatipur, Gwalior – 474011, MP. We also provide home visits across Gwalior!`;
    }
    if (q.includes("doctor") || q.includes("hemant") || q.includes("qualification") || q.includes("degree")) {
      return `Our primary physiotherapist is Dr. Hemant Singh PT. He holds a Bachelor of Physiotherapy (BPT) with clinical interest in Sports and Musculoskeletal Rehabilitation.`;
    }
    if (q.includes("fee") || q.includes("charge") || q.includes("cost") || q.includes("price")) {
      return `Consultation and home visit charges depend on the type of treatment (in-clinic vs. home visit) and session plan. Please call +91 82696 15097 or chat on WhatsApp for exact pricing confirmation.`;
    }
    if (q.includes("back") || q.includes("neck") || q.includes("knee") || q.includes("pain") || q.includes("shoulder")) {
      return `We provide tailored assessment and exercise rehabilitation for back pain, neck stiffness, knee osteoarthritis, and sports injuries. While I cannot provide a medical diagnosis online, Dr. Hemant can conduct a full physical assessment.`;
    }
    if (q.includes("phone") || q.includes("call") || q.includes("contact") || q.includes("whatsapp")) {
      return `You can reach us directly at ${CLINIC_DATA.contact.phone}. You can also click the WhatsApp button to message us directly!`;
    }
    return `Thank you for reaching out! For specific questions about treatment plans, home visit slots, or scheduling with Dr. Hemant Singh PT (BPT), feel free to call us at ${CLINIC_DATA.contact.phone} or book online.`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking and streaming
    setTimeout(() => {
      const replyText = generateBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Clinic Assistant"
          className="relative group flex items-center gap-2.5 bg-gradient-to-r from-teal-800 to-teal-950 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-teal-400/30"
        >
          <div className="relative">
            <span className="text-xl">🤖</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-75"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full"></span>
          </div>
          <span className="hidden sm:inline-block font-bold text-xs tracking-wide">
            {isOpen ? "Close Assistant" : "AI Clinic Support"}
          </span>
        </button>
      </div>

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 lg:bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-h-[580px] h-[78vh] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-teal-900 text-white p-4 flex items-center justify-between border-b border-teal-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-800 border border-teal-700 flex items-center justify-center text-lg">
                ⚕️
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none flex items-center gap-1.5">
                  Nitya AI Assistant
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-1.5 py-0.5 rounded">Online</span>
                </h3>
                <p className="text-[11px] text-teal-200 mt-0.5">Thatipur, Gwalior Clinic Help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-teal-200 hover:text-white p-1 rounded-md text-lg focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.sender === "user"
                      ? "bg-teal-800 text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none"
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">{m.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-2 rounded-2xl w-fit text-slate-500">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[10px] ml-1">AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap text-[11px] bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 transition shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form & Instant WhatsApp Handoff */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about home visits, location, services..."
              className="flex-1 text-xs border border-slate-300 rounded-full px-3.5 py-2.5 focus:outline-none focus:border-teal-700"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!inputMessage.trim()}
              className="bg-teal-800 hover:bg-teal-900 disabled:opacity-50 text-white rounded-full p-2.5 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Direct Human Fallback Strip */}
          <div className="bg-slate-100 px-3 py-1.5 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Need human assistance?</span>
            <a
              href={`https://wa.me/${CLINIC_DATA.contact.rawPhone}?text=Hello%20Dr.%20Hemant,%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline"
            >
              WhatsApp Dr. Hemant →
            </a>
          </div>
        </div>
      )}
    </>
  );
}