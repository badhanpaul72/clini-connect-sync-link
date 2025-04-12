
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function StepCard({ number, title, description, icon, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-clinic-400 to-clinic-600 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <div className="mb-2 text-clinic-500">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
