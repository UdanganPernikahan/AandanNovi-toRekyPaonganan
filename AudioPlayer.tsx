import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

export interface AudioPlayerRef {
  play: () => void;
}

const AudioPlayer = forwardRef<AudioPlayerRef, {}>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log("Autoplay blocked", err));
      }
    }
  }));

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log(e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src="https://upload.wikimedia.org/wikipedia/commons/transcoded/5/59/Kevin_MacLeod_-_Canon_in_D_Major.ogg/Kevin_MacLeod_-_Canon_in_D_Major.ogg.mp3" 
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gold text-white rounded-full shadow-lg hover:bg-gold/80 transition-colors focus:outline-none"
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </motion.button>
    </>
  );
});

export default AudioPlayer;
