import React from 'react';
import { Participant } from '../types';
import GlassCard from './GlassCard';

interface ParticipantListProps {
  participants: Participant[];
  color: string;
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants, color }) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-4">Kabinettsmitglieder</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {participants.map(participant => (
          <div key={participant.id} className="flex items-center p-3 bg-white/10 rounded-lg">
            <img 
              src={participant.avatar} 
              alt={participant.name} 
              className="w-12 h-12 rounded-full mr-4 border-2"
              style={{ borderColor: color }}
            />
            <div>
              <h4 className="text-white font-medium">{participant.name}</h4>
              <p className="text-white/70 text-sm">{participant.role}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ParticipantList;