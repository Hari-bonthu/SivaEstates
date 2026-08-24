import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, PhoneCall, MapPin, CheckCircle2, Building2, Banknote, ShieldCheck, Car, RotateCcw } from 'lucide-react';

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const FAQS = [
  {
    id: 'plots',
    icon: <Building2 className="w-4 h-4" />,
    label: 'I want to buy a plot',
    response: "Great! We have open plots in Rajahmundry and Kakinada. Here are our current ventures:",
    type: 'ventures'
  },
  {
    id: 'pricing',
    icon: <Banknote className="w-4 h-4" />,
    label: 'Plot sizes & pricing',
    response: null,
    type: 'pricing'
  },
  {
    id: 'offices',
    icon: <MapPin className="w-4 h-4" />,
    label: 'Where are your offices?',
    response: null,
    type: 'offices'
  },
  {
    id: 'legal',
    icon: <ShieldCheck className="w-4 h-4" />,
    label: 'Is my title 100% legal?',
    response: null,
    type: 'legal'
  },
  {
    id: 'visit',
    icon: <Car className="w-4 h-4" />,
    label: 'Book a site visit',
    response: null,
    type: 'visit'
  },
  {
    id: 'director',
    icon: <PhoneCall className="w-4 h-4" />,
    label: 'Talk to Director directly',
    response: null,
    type: 'director'
  }
];

const VENTURES_DATA = [
  { name: 'Jetty Mayfair Luxury Villa Layout', location: 'Rajahmundry', price: '₹18,500 / Sq.Yd', status: 'Fast Selling' },
  { name: 'Seshadri Heights Gated Community', location: 'Rajahmundry', price: '₹16,800 / Sq.Yd', status: 'Newly Launched' },
  { name: 'Kakinada Port & Smart City Layout', location: 'Kakinada', price: '₹22,000 / Sq.Yd', status: 'Fast Selling' },
];

const PRICING_DATA = [
  { venture: 'Jetty Mayfair', sizes: '150–500 Sq.Yds', price: '₹18,500 / Sq.Yd', min: '~₹27.75 Lakhs' },
  { venture: 'Seshadri Heights', sizes: '160–450 Sq.Yds', price: '₹16,800 / Sq.Yd', min: '~₹26.88 Lakhs' },
  { venture: 'Kakinada Smart City', sizes: '200–600 Sq.Yds', price: '₹22,000 / Sq.Yd', min: '~₹44.00 Lakhs' },
];

// ─── Message Renderer ─────────────────────────────────────────────────────────
function BotMessage({ msg, onQuickReply }) {
  if (msg.type === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[82%] bg-[#1B1C1C] text-white text-xs sm:text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 font-sans">
          {msg.text}
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-text') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[82%] bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 font-sans leading-relaxed">
          {msg.text}
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-ventures') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[88%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5">
            Here are our active ventures:
          </div>
          {VENTURES_DATA.map((v, i) => (
            <div key={i} className="bg-white border border-[#E5E0D5] rounded-xl p-3 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1B1C1C] font-serif text-sm">{v.name}</span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${v.status === 'Fast Selling' ? 'bg-[#EAF0EC] text-[#334537]' : 'bg-blue-50 text-blue-700'}`}>
                  {v.status}
                </span>
              </div>
              <p className="text-[#636863]"><MapPin className="inline w-3 h-3 mr-0.5" />{v.location}</p>
              <p className="font-bold text-[#4A5D4E] font-mono">{v.price}</p>
            </div>
          ))}
          <button
            onClick={() => onQuickReply('Book a site visit', 'visit')}
            className="w-full py-2.5 rounded-xl bg-[#4A5D4E] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#334537] transition-all cursor-pointer"
          >
            Book a Free Site Visit →
          </button>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-pricing') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[88%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            Current pricing breakdown across locations:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl overflow-hidden">
            {PRICING_DATA.map((p, i) => (
              <div key={i} className={`p-3 text-xs ${i !== PRICING_DATA.length - 1 ? 'border-b border-[#E5E0D5]' : ''}`}>
                <p className="font-bold text-[#1B1C1C] font-serif">{p.venture}</p>
                <div className="flex justify-between mt-1 text-[#636863]">
                  <span>{p.sizes}</span>
                  <span className="font-bold text-[#4A5D4E] font-mono">{p.price}</span>
                </div>
                <p className="text-[#636863] mt-0.5">Min. investment: <strong>{p.min}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-offices') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[88%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            We have 2 direct offices:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl p-3.5 space-y-3 text-xs">
            <div>
              <p className="font-bold text-[#1B1C1C] font-serif text-sm">🏢 Rajahmundry Head Office</p>
              <p className="text-[#636863] mt-0.5">Main Road, Morampudi Junction, Rajahmundry AP.</p>
              <p className="text-[#4A5D4E] font-mono font-bold mt-0.5">Mon–Sun: 9:00 AM – 8:00 PM</p>
            </div>
            <div className="border-t border-[#E5E0D5] pt-3">
              <p className="font-bold text-[#1B1C1C] font-serif text-sm">🏢 Kakinada Branch</p>
              <p className="text-[#636863] mt-0.5">Ramanayyapeta Commercial Centre, Kakinada AP.</p>
              <p className="text-[#4A5D4E] font-mono font-bold mt-0.5">Mon–Sun: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-legal') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[88%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            Yes — 100% legal title guaranteed:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl p-3.5 space-y-2 text-xs">
            {[
              'DTCP / VMRDA Approved Layout Plan',
              'AP RERA Registered Project',
              'Encumbrance Certificate (EC) — 30 years',
              'Link Documents & Parent Deed Verified',
              'Spot Registration in Sub-Registrar Office',
              'Bank Loan Approved by All Major Banks',
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] shrink-0" />
                <span className="text-[#2D2D2D]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-visit') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[88%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            We provide a free AC car facility for site visits. Contact us to schedule:
          </div>
          <div className="space-y-2">
            <a
              href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20a%20free%20site%20visit.%20Please%20help%20me%20schedule."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#4A5D4E] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#334537] transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp to Book Visit</span>
            </a>
            <a
              href="tel:+919851633333"
              className="w-full py-3 rounded-xl bg-white border border-[#E5E0D5] text-[#1B1C1C] text-xs font-mono font-bold hover:bg-[#F9F7F2] transition-all text-center block"
            >
              Call +91 98516 33333
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-director') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
          <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[88%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            Direct contact with Founder &amp; MD:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl p-3.5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#E5E0D5]">
                <img src="./images/siva_yedida_professional.jpg" alt="Siva Yedida" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-bold text-[#1B1C1C] font-serif text-sm">Siva Yedida</p>
                <p className="text-[10px] text-[#636863] font-mono">Founder &amp; Managing Director</p>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="https://wa.me/919851633333?text=Hi%20Siva%20garu,%20I%20want%20to%20speak%20with%20you%20directly%20about%20a%20plot%20purchase."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#4A5D4E] text-white text-xs font-mono font-bold flex items-center justify-center space-x-2 hover:bg-[#334537] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Director</span>
              </a>
              <a
                href="tel:+919851633333"
                className="w-full py-2.5 rounded-lg bg-white border border-[#E5E0D5] text-[#1B1C1C] text-xs font-mono font-bold text-center block hover:bg-[#F9F7F2] transition-all"
              >
                Call: +91 98516 33333
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ─── Main SivaBot Component ───────────────────────────────────────────────────
export default function SivaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot-text',
      text: 'Hello! 👋 I\'m SivaBot, your real estate assistant for Siva Telugu Estates. Choose a question below or connect with us directly.'
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleFAQ = (faq) => {
    const userMsg = { id: Date.now(), type: 'user', text: faq.label };

    let botMsg;
    if (faq.type === 'ventures') {
      botMsg = { id: Date.now() + 1, type: 'bot-ventures' };
    } else if (faq.type === 'pricing') {
      botMsg = { id: Date.now() + 1, type: 'bot-pricing' };
    } else if (faq.type === 'offices') {
      botMsg = { id: Date.now() + 1, type: 'bot-offices' };
    } else if (faq.type === 'legal') {
      botMsg = { id: Date.now() + 1, type: 'bot-legal' };
    } else if (faq.type === 'visit') {
      botMsg = { id: Date.now() + 1, type: 'bot-visit' };
    } else if (faq.type === 'director') {
      botMsg = { id: Date.now() + 1, type: 'bot-director' };
    }

    setMessages(prev => [...prev, userMsg, botMsg]);
  };

  const handleQuickReply = (label, type) => {
    const faq = FAQS.find(f => f.type === type) || { label, type };
    handleFAQ(faq);
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        type: 'bot-text',
        text: 'Hello! 👋 I\'m SivaBot. How can I help you today? Pick a question below:'
      }
    ]);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] max-h-[75vh] bg-white rounded-3xl shadow-2xl border border-[#E5E0D5] flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-[#1B1C1C] text-white px-5 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-white/20 overflow-hidden">
                <img src="./images/logo/original_Logo_Siva.png" alt="SivaBot" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-sm font-serif">SivaBot</p>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span className="text-[10px] text-white/70 font-mono">Siva Telugu Estates</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={resetChat} 
                className="flex items-center space-x-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[10px] font-mono cursor-pointer transition-colors"
                title="Reset Conversation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>NEW CHAT</span>
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#FCFAF9]">
            {messages.map(msg => (
              <BotMessage key={msg.id} msg={msg} onQuickReply={handleQuickReply} />
            ))}

            {/* Quick Questions Grid ALWAYS appears in new conversation, after replies, and on reset */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center justify-center space-x-2 py-1">
                <div className="h-px w-6 bg-[#E5E0D5]"></div>
                <span className="text-[9px] font-mono font-bold text-[#636863] uppercase tracking-widest">
                  QUICK QUESTIONS
                </span>
                <div className="h-px w-6 bg-[#E5E0D5]"></div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {FAQS.map(faq => (
                  <button
                    key={faq.id}
                    onClick={() => handleFAQ(faq)}
                    className="p-2.5 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#4A5D4E] hover:shadow-xs text-left transition-all cursor-pointer group"
                  >
                    <div className="text-[#4A5D4E] mb-1 group-hover:scale-110 transition-transform">
                      {faq.icon}
                    </div>
                    <p className="text-xs font-medium text-[#1B1C1C] leading-tight">{faq.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#1B1C1C] text-white shadow-xl hover:bg-[#334537] hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
        title="Chat with SivaBot"
        aria-label="Open SivaBot chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* Unread indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white text-[8px] flex items-center justify-center text-white font-bold">
            1
          </span>
        )}
      </button>
    </>
  );
}
