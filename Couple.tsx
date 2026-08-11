import { motion } from 'motion/react';

export default function Couple() {
  return (
    <section className="relative py-32 px-4 text-center border-t border-tan/30 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-sage-900">
        <img 
          src="/background.jpg" 
          alt="Couple Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="uppercase tracking-[0.3em] text-sage-500 text-sm font-sans font-semibold mb-2">Mempelai</p>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-12"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-[40px] text-sage-800 mb-2 leading-none">Aan Kurniawan Pratama</h3>
              <p className="text-xs md:text-sm text-sage-500 uppercase tracking-widest font-sans">Putra dari Bpk. Petrus Kutu & Ibu Yusmiati</p>
            </div>

            <div className="font-serif text-5xl text-gold py-8 md:py-0 italic">&</div>

            <div className="flex flex-col items-center">
              <h3 className="font-serif text-[40px] text-sage-800 mb-2 leading-none">Novita Sari Leon</h3>
              <p className="text-xs md:text-sm text-sage-500 uppercase tracking-widest font-sans">Putri dari Alm. Bpk. Leon & Ibu Kasmawati</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
