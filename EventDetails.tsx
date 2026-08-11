import { motion } from 'motion/react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function EventDetails() {
  return (
    <section className="py-24 px-4 bg-ivory">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 space-y-2"
        >
          <p className="uppercase tracking-[0.3em] text-sage-500 text-sm font-sans font-semibold">Waktu & Tempat</p>
          <div className="h-[1px] w-12 bg-gold mx-auto my-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4"
          >
            <h3 className="font-serif text-[40px] font-bold text-sage-800 leading-none mb-8">Pemberkatan Nikah</h3>
            <div className="grid grid-cols-1 gap-8 text-center w-full max-w-sm">
              <div className="border-b border-tan pb-6">
                <p className="text-sage-500 uppercase text-sm font-bold tracking-widest font-sans mb-2">Hari & Tanggal</p>
                <p className="text-sage-800 text-2xl font-bold font-serif">Sabtu, 5 September</p>
                <p className="text-sage-800 text-xl font-semibold font-serif">Tahun 2026</p>
              </div>
              <div className="border-b border-tan pb-6">
                <p className="text-sage-500 uppercase text-sm font-bold tracking-widest font-sans mb-2">Waktu Acara</p>
                <p className="text-sage-800 text-2xl font-bold font-serif">16:00 - Selesai</p>
                <p className="text-sage-800 text-xl font-semibold font-serif">Waktu Indonesia Tengah</p>
              </div>
              <div>
                <p className="text-sage-500 uppercase text-sm font-bold tracking-widest font-sans mb-2">Lokasi</p>
                <p className="text-sage-800 text-2xl font-bold font-serif">Gereja Protestan Indonesia Luwu (GPIL)</p>
                <p className="text-sage-800 text-xl font-semibold font-serif mb-6">Jalan Amirullah 1 No.6, Kota Makassar</p>
                <a href="https://maps.app.goo.gl/npv3FmMruot7uaZo8" target="_blank" rel="noopener noreferrer" className="text-sage-800 text-xl font-semibold underline decoration-gold underline-offset-4 cursor-pointer">
                  Lihat Peta
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center text-center px-4 md:border-l md:border-tan"
          >
            <h3 className="font-serif text-[40px] font-bold text-sage-800 leading-none mb-8">Resepsi</h3>
            <div className="grid grid-cols-1 gap-8 text-center w-full max-w-sm">
              <div className="border-b border-tan pb-6">
                <p className="text-sage-500 uppercase text-sm font-bold tracking-widest font-sans mb-2">Hari & Tanggal</p>
                <p className="text-sage-800 text-2xl font-bold font-serif">Sabtu, 5 September</p>
                <p className="text-sage-800 text-xl font-semibold font-serif">Tahun 2026</p>
              </div>
              <div className="border-b border-tan pb-6">
                <p className="text-sage-500 uppercase text-sm font-bold tracking-widest font-sans mb-2">Waktu Acara</p>
                <p className="text-sage-800 text-2xl font-bold font-serif">18:00 - Selesai</p>
                <p className="text-sage-800 text-xl font-semibold font-serif">Waktu Indonesia Tengah</p>
              </div>
              <div>
                <p className="text-sage-500 uppercase text-sm font-bold tracking-widest font-sans mb-2">Lokasi</p>
                <p className="text-sage-800 text-2xl font-bold font-serif">Bambuden I - Lantai 2</p>
                <p className="text-sage-800 text-xl font-semibold font-serif mb-6">Jl. Gunung Latimojong No.55, Kota Makassar</p>
                <a href="https://maps.app.goo.gl/5Nxe9hfWyn1T9jyW7" target="_blank" rel="noopener noreferrer" className="text-sage-800 text-xl font-semibold underline decoration-gold underline-offset-4 cursor-pointer">
                  Lihat Peta
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
