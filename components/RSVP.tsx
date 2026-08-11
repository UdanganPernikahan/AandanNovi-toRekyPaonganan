import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 px-4 bg-ivory border-t border-tan/30">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 flex flex-col items-center w-full"
        >
          <p className="uppercase tracking-[0.3em] text-sage-500 text-sm font-sans font-semibold mb-2">RSVP</p>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="font-serif italic text-lg text-gray/80">Kehadiran Anda adalah hadiah terindah bagi kami.</p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-ivory p-12 rounded-3xl text-center border-[6px] border-tan/20"
          >
            <h3 className="font-serif text-3xl mb-4 text-sage-800">Terima Kasih!</h3>
            <p className="font-serif italic text-gray leading-relaxed text-lg">
              Konfirmasi kehadiran dan pesan Anda telah kami terima. Kami tidak sabar untuk merayakan hari bahagia ini bersama Anda.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full max-w-lg">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-3 text-sage-500 font-sans">Nama Lengkap</label>
              <input required type="text" id="name" className="w-full bg-transparent border-b border-tan py-2 text-sage-800 font-serif text-lg focus:outline-none focus:border-sage-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="attendance" className="block text-xs uppercase tracking-widest mb-3 text-sage-500 font-sans">Konfirmasi Kehadiran</label>
              <select required id="attendance" className="w-full bg-ivory border-b border-tan py-2 text-sage-800 font-serif text-lg focus:outline-none focus:border-sage-500 transition-colors">
                <option value="">Pilih konfirmasi...</option>
                <option value="hadir">Ya, saya akan hadir</option>
                <option value="tidak">Maaf, saya tidak bisa hadir</option>
              </select>
            </div>
            <div>
              <label htmlFor="guests" className="block text-xs uppercase tracking-widest mb-3 text-sage-500 font-sans">Jumlah Tamu (termasuk Anda)</label>
              <select required id="guests" className="w-full bg-ivory border-b border-tan py-2 text-sage-800 font-serif text-lg focus:outline-none focus:border-sage-500 transition-colors">
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-3 text-sage-500 font-sans">Ucapan & Doa (Opsional)</label>
              <textarea rows={4} id="message" className="w-full bg-transparent border-b border-tan py-2 text-sage-800 font-serif text-lg focus:outline-none focus:border-sage-500 transition-colors" />
            </div>
            <button type="submit" className="mt-8 bg-sage-800 text-white px-10 py-4 rounded-full font-sans text-sm tracking-[0.2em] uppercase hover:bg-sage-500 transition-colors shadow-lg w-full">
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
