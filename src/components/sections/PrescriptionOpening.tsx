import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PrescriptionOpeningProps {
  onComplete: () => void;
  birthdayDate?: string;
}

export const PrescriptionOpening = ({
  onComplete,
  birthdayDate = "November 24, 2025"
}: PrescriptionOpeningProps) => {
  const [showPrescription, setShowPrescription] = useState(false);

  useEffect(() => {
    // Start prescription animation after 1.5 seconds
    const timer1 = setTimeout(() => setShowPrescription(true), 1500);

    // Complete and transition after 10 seconds
    const timer2 = setTimeout(() => onComplete(), 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ background: '#0a0a0a' }}
        animate={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0f 50%, #DC143C 100%)' }}
        transition={{ duration: 2 }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Title animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-serif text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Prescription for an Extraordinary Year
        </motion.h1>

        {/* Prescription pad */}
        {showPrescription && (
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl border-2 border-[#DC143C]"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Prescription header */}
            <div className="border-b-2 border-gray-300 pb-4 mb-6">
              <h2 className="text-2xl font-serif text-[#DC143C] font-bold">
                ℞ Medical Prescription
              </h2>
            </div>

            {/* Prescription details with typing effect */}
            <div className="text-left space-y-4 font-mono text-gray-800">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="font-bold">Patient:</span> Helina Solomon
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <span className="font-bold">Date:</span> {birthdayDate}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                <span className="font-bold">Diagnosis:</span> Being Absolutely Legendary
              </motion.div>

              <motion.div
                className="mt-6 pt-4 border-t-2 border-dashed border-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.5 }}
              >
                <p className="text-sm italic text-gray-600">
                  Treatment: Celebration recommended immediately
                </p>
              </motion.div>
            </div>

            {/* Signature line */}
            <motion.div
              className="mt-8 pt-4 border-t border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            >
              <div className="text-right">
                <p className="text-xl font-serif text-[#DC143C] italic">Dr. Universe</p>
                <p className="text-xs text-gray-500">Specialist in Making People Amazing</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Loading indicator */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <div className="flex justify-center space-x-2">
            <motion.div
              className="w-3 h-3 bg-[#DC143C] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 bg-[#FFB6C1] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-[#D4AF37] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
