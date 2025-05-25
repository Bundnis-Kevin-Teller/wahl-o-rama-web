import React from 'react';
import { DownloadIcon } from 'lucide-react';
import GlassCard from './GlassCard';

interface ProgramDownloadProps {
  programUrl: string;
  governmentName: string;
  color: string;
}

const ProgramDownload: React.FC<ProgramDownloadProps> = ({ programUrl, governmentName, color }) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-4">Wahlprogramm</h3>
      <div className="bg-white/10 rounded-lg p-5 text-center">
        <p className="text-white mb-4">
          Laden Sie das vollständige Wahlprogramm der {governmentName} herunter, um mehr über ihre politischen Ziele und Visionen zu erfahren.
        </p>
        <a
          href={programUrl}
          download
          className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
          style={{ backgroundColor: color }}
        >
          <DownloadIcon className="mr-2 h-5 w-5" />
          Wahlprogramm herunterladen
        </a>
      </div>
    </GlassCard>
  );
};

export default ProgramDownload;