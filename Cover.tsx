import { motion } from 'motion/react';
import { MailOpen } from 'lucide-react';

export default function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sage-900 text-ivory overflow-hidden"
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background.jpg" 
          alt="Cover Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/80 to-sage-900/40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.4em] text-gold text-xs md:text-sm font-sans font-semibold mb-6">The Wedding Of</span>
          <h1 className="font-script text-[70px] sm:text-[90px] text-ivory leading-none mb-8 whitespace-nowrap">Aan & Novi</h1>
          
          <div className="mb-12">
            <p className="font-sans text-sm md:text-base text-gray-300 mb-2">Kepada Yth.</p>
            <p className="font-serif text-xl md:text-2xl text-white font-semibold">Bapak/Ibu/Saudara/i</p>
          </div>

          <button 
            onClick={onOpen}
            className="flex items-center gap-2 bg-gold hover:bg-gold/80 text-white px-8 py-4 rounded-full font-sans text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-gold/20"
          >
            <MailOpen className="w-5 h-5" />
            Buka Undangan
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
