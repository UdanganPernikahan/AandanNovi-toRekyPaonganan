---
*** Begin Patch
*** Add File: components/Hero.tsx
+import { motion } from 'motion/react';
+
+export default function Hero() {
+  return (
+    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center p-3 sm:p-4 md:p-10 bg-ivory overflow-hidden">
+      <div className="absolute inset-0 z-0 bg-sage-900">
+        <img 
+          src="/hero-background.jpg" 
+          alt="Dekorasi latar" 
+          className="w-full h-full object-cover opacity-70"
+          loading="lazy"
+        />
+        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/60 to-ivory/20"></div>
+      </div>
+      
+      <div className="relative z-10 w-full h-full border-[8px] sm:border-[12px] border-sage-500/10 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center p-4 sm:p-8">
+        <motion.div
+          initial={{ opacity: 0, y: 30 }}
+          animate={{ opacity: 1, y: 0 }}
+          transition={{ duration: 1.5, ease: "easeOut" }}
+          className="z-10 flex flex-col items-center w-full max-w-lg"
+        >
+          <div className="mb-8 sm:mb-12 flex flex-col items-center">
+            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold w-10 h-10 sm:w-12 sm:h-12">
+              <path d="M12 2v20M7 8h10" />
+            </svg>
+            <p className="font-serif italic text-sm sm:text-base md:text-xl text-gray w-full font-light leading-relaxed px-2 sm:px-4">
+              "Tuhan Membuat Segala Sesuatu Indah Pada Waktunya" (Pengkhotbah 3:11)<br /><br />
+              Dengan penuh sukacita kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami
+            </p>
+          </div>
+
+          <div className="text-center space-y-3 mb-6 sm:mb-10">
+            <span className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sage-500 text-xs sm:text-sm md:text-base font-sans font-semibold">The Wedding Of</span>
+            <div className="h-[1px] w-12 sm:w-16 bg-gold mx-auto mt-4 sm:mt-6"></div>
+          </div>
+          
+          <h1 className="font-script text-[60px] min-[375px]:text-[70px] sm:text-[90px] md:text-[120px] text-sage-800 leading-none mb-6 sm:mb-8 whitespace-nowrap">Aan & Novi</h1>
+          
+          <p className="font-serif italic text-lg sm:text-xl md:text-3xl text-gray font-light leading-relaxed mb-8 sm:mb-12">Sabtu, 5 September 2026</p>
+        </motion.div>
+      </div>
+    </section>
+  );
+}
+
*** End Patch
