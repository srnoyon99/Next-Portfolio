import { ArrowRight } from "lucide-react";

export default function MyworkButton() {
  return (
    <div className="relative inline-block">
      <style>{`
        @keyframes glowing {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
        .glow-border {
          animation: glowing 20s linear infinite;
        }
      `}</style>
      
      {/* Animated gradient border */}
      <div 
        className="glow-border absolute -inset-[2px] rounded-[10px] opacity-100 blur-[5px] transition-all duration-300 hover:opacity-100 hover:blur-[8px] -z-10"
        style={{
          background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          backgroundSize: '400%'
        }}
      />
      
      {/* Button */}
      <button 
        type="button"
        className="relative w-[160px] lg:w-[220px] cursor-pointer h-[45px] lg:h-[56px] bg-[#111] text-white rounded-[10px] overflow-hidden active:text-white group"
      >
        {/* Inner background */}
        <div className="absolute inset-0 bg-[#111] rounded-[10px] group-active:bg-black -z-[1]" />
        
        {/* Content */}
        <h3 className="relative text-[14px] lg:text-[17px] font-bold flex items-center justify-center gap-1">
          View My Work 
          <ArrowRight className=" hidden lg:block " size={40} color="#ffffff" strokeWidth={1} />
        </h3>
      </button>
    </div>
  );
}