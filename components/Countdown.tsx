import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown() {
  const targetDate = new Date('2026-09-05T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-24 px-4 bg-sage-800 text-ivory text-center border-t border-tan/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="uppercase tracking-[0.3em] text-ivory/60 text-sm font-sans font-semibold mb-2">Menuju Hari Bahagia</p>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-12"></div>

          <div className="grid grid-cols-4 gap-4 md:gap-12 w-full max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-6xl text-gold mb-2">{timeLeft.days}</span>
              <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-ivory/80">Hari</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-6xl text-gold mb-2">{timeLeft.hours}</span>
              <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-ivory/80">Jam</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-6xl text-gold mb-2">{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-ivory/80">Menit</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-6xl text-gold mb-2">{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-ivory/80">Detik</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
