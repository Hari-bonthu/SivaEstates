import React, { useState } from 'react';
import { X, MessageCircle, Phone, ChevronDown, ArrowRight, MapPin, CheckCircle2, Home, Building2, Calculator, Shield, Calendar } from 'lucide-react';

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const FAQS = [
  {
    id: 'plots',
    icon: <Home className="w-4 h-4" />,
    label: 'I want to buy a plot',
    response: "Great! We have open plots in Rajahmundry and Kakinada. Here are our current ventures:",
    type: 'ventures'
  },
  {
    id: 'pricing',
    icon: <Calculator className="w-4 h-4" />,
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
    icon: <Shield className="w-4 h-4" />,
    label: 'Is my title 100% legal?',
    response: null,
    type: 'legal'
  },
  {
    id: 'visit',
    icon: <Calendar className="w-4 h-4" />,
    label: 'Book a site visit',
    response: null,
    type: 'visit'
  },
  {
    id: 'director',
    icon: <Phone className="w-4 h-4" />,
    label: 'Talk to Director directly',
    response: null,
    type: 'director'
  }
];

const VENTURES_DATA = [
  { name: 'Jetty Mayfair Luxury Villa Layout', location: 'Rajahmundry', price: '₹18,500 / Sq.Yd', status: 'Fast Selling' },
  { name: 'Seshadri Heights Gated Community', location: 'Rajahmundry', price: '₹16,800 / Sq.Yd', status: 'Newly Launched' },
  { name: 'Sree Harivasam Open Plots', location: 'Rajahmundry', price: '₹14,500 / Sq.Yd', status: 'Fast Selling' },
];

const PRICING_DATA = [
  { venture: 'Jetty Mayfair', sizes: '150–500 Sq.Yds', price: '₹18,500 / Sq.Yd', min: '~₹27.75 Lakhs' },
  { venture: 'Seshadri Heights', sizes: '160–450 Sq.Yds', price: '₹16,800 / Sq.Yd', min: '~₹26.88 Lakhs' },
  { venture: 'Sree Harivasam', sizes: '150–350 Sq.Yds', price: '₹14,500 / Sq.Yd', min: '~₹21.75 Lakhs' },
];

// ─── Message Renderer ─────────────────────────────────────────────────────────
function BotMessage({ msg, onQuickReply }) {
  if (msg.type === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-[#1B1C1C] text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 font-sans">
          {msg.text}
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-text') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[80%] bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 font-sans leading-relaxed">
          {msg.text}
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-ventures') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[90%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5">
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
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[90%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            Here's our current pricing breakdown:
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
          <p className="text-[10px] text-[#636863] font-mono px-1">* Prices may vary based on plot location within the layout. Contact us for exact quote.</p>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-offices') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[90%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            We have 2 offices across Andhra Pradesh:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-4 text-xs">
            <div>
              <p className="font-bold text-[#1B1C1C] font-serif text-sm">🏢 Rajahmundry Head Office</p>
              <p className="text-[#636863] mt-1">Main Road, Morampudi Junction, Rajahmundry, East Godavari District, Andhra Pradesh.</p>
              <p className="text-[#4A5D4E] font-mono font-bold mt-1">Mon–Sun: 9:00 AM – 8:00 PM</p>
            </div>
            <div className="border-t border-[#E5E0D5] pt-4">
              <p className="font-bold text-[#1B1C1C] font-serif text-sm flex items-center">🏢 Kakinada Branch <span className="ml-2 px-1.5 py-0.5 bg-[#EAF0EC] text-[#334537] text-[9px] rounded font-mono">NEW</span></p>
              <p className="text-[#636863] mt-1">Ramanayyapeta Commercial Centre, Kakinada, Andhra Pradesh.</p>
              <p className="text-[#4A5D4E] font-mono font-bold mt-1">Mon–Sun: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (msg.type === 'bot-legal') {
    return (
      <div className="flex items-start space-x-2">
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[90%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            Yes — 100% guaranteed. Here's what we provide:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-2 text-xs">
            {[
              'DTCP / VMRDA Approved Layout Plan',
              'AP RERA Registered Project',
              'Encumbrance Certificate (EC) — 30 years',
              'Link Documents & Parent Deed',
              'Spot Registration in Sub-Registrar Office',
              'Bank Loan Approved — All Major Banks',
              'Single-Owner Clear Title — No Disputes',
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
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[90%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            We'll arrange a free AC car site visit for you. Click below to connect with Director Siva Yedida directly:
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
        <div className="w-7 h-7 rounded-full bg-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
          <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
        </div>
        <div className="max-w-[90%] space-y-2">
          <div className="bg-[#F9F7F2] border border-[#E5E0D5] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 text-[#1B1C1C]">
            Reach Director <strong>Mr. Siva Yedida</strong> directly:
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded-2xl p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E5E0D5]">
                <img src="./images/siva_yedida_professional.jpg" alt="Siva Yedida" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-bold text-[#1B1C1C] font-serif text-sm">Siva Yedida</p>
                <p className="text-[10px] text-[#636863] font-mono">Founder & Managing Director</p>
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
                Direct Call: +91 98516 33333
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
      text: 'Hello! 👋 I\'m SivaBot, your real estate assistant for Siva Telugu Estates. How can I help you today?'
    }
  ]);
  const [showMenu, setShowMenu] = useState(true);

  const handleFAQ = (faq) => {
    setShowMenu(false);

    // Add user message
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

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 2,
          type: 'bot-text',
          text: 'Is there anything else I can help you with? Feel free to ask another question!'
        }
      ]);
      setShowMenu(true);
    }, 500);
  };

  const handleQuickReply = (label, type) => {
    const faq = FAQS.find(f => f.type === type) || { label, type };
    handleFAQ(faq);
  };

  const resetChat = () => {
    setMessages([{
      id: 1,
      type: 'bot-text',
      text: 'Hello! 👋 I\'m SivaBot. How can I help you today?'
    }]);
    setShowMenu(true);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] max-h-[70vh] bg-white rounded-3xl shadow-2xl border border-[#E5E0D5] flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-[#1B1C1C] text-white px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-white/20">
                <img src="./images/logo/logo_ivory_gold.jpg" alt="SivaBot" className="w-full h-full rounded-full object-contain" />
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
              <button onClick={resetChat} className="text-white/60 hover:text-white text-[10px] font-mono cursor-pointer transition-colors">
                RESET
              </button>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#FCFAF9]">
            {messages.map(msg => (
              <BotMessage key={msg.id} msg={msg} onQuickReply={handleQuickReply} />
            ))}

            {/* FAQ Quick Menu */}
            {showMenu && (
              <div className="space-y-2">
                <p className="text-[10px] font-mono font-bold text-[#636863] uppercase tracking-widest text-center">— Quick Questions —</p>
                <div className="grid grid-cols-2 gap-2">
                  {FAQS.map(faq => (
                    <button
                      key={faq.id}
                      onClick={() => handleFAQ(faq)}
                      className="p-3 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#4A5D4E] text-left transition-all cursor-pointer group"
                    >
                      <div className="text-[#4A5D4E] mb-1 group-hover:scale-110 transition-transform">
                        {faq.icon}
                      </div>
                      <p className="text-xs font-medium text-[#1B1C1C] leading-tight">{faq.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="border-t border-[#E5E0D5] px-4 py-3 bg-white shrink-0 text-center">
            <p className="text-[10px] text-[#636863] font-mono">
              Powered by Siva Telugu Estates • <a href="tel:+919851633333" className="text-[#4A5D4E] font-bold hover:underline">+91 98516 33333</a>
            </p>
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

        {/* Unread dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white text-[8px] flex items-center justify-center text-white font-bold">
            1
          </span>
        )}
      </button>
    </>
  );
}
