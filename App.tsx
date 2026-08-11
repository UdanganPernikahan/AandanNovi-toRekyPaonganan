import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import AudioPlayer, { AudioPlayerRef } from './components/AudioPlayer';
import Cover from './components/Cover';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioPlayerRef = useRef<AudioPlayerRef>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.play();
    }
  };

  return (
    <main className="w-full relative min-h-screen">
      <AnimatePresence>
        {!isOpen && <Cover key="cover" onOpen={handleOpen} />}
      </AnimatePresence>
      
      {isOpen && (
        <>
          <Hero />
          <Couple />
          <Countdown />
          <EventDetails />
          <RSVP />
        </>
      )}
      <AudioPlayer ref={audioPlayerRef} />
    </main>
  );
}
