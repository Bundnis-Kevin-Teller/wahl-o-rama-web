import React from 'react';
import { Link } from 'react-router-dom';
import { Government } from '../types';
import GlassCard from './GlassCard';
import { Users } from 'lucide-react';

interface GovernmentCardProps {
  government: Government;
}

const GovernmentCard: React.FC<GovernmentCardProps> = ({ government }) => {
  return (
    <Link to={`/government/${government.id}`}>
      <GlassCard className="h-full p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
            style={{ backgroundColor: government.color }}
          >
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{government.name}</h3>
        </div>
        
        <p className="text-white/80 italic mb-4">"{government.slogan}"</p>
        
        <div className="mt-4">
          <h4 className="text-white/90 font-medium mb-2">Teilnehmer:</h4>
          <div className="flex flex-wrap gap-2">
            {government.participants.map(participant => (
              <div key={participant.id} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                <img 
                  src={participant.avatar} 
                  alt={participant.name} 
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-white/90 text-sm">{participant.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-white/70 text-sm">{government.posts.length} Beiträge</span>
          <span className="text-white bg-white/20 rounded-full px-3 py-1 text-sm">Details anzeigen</span>
        </div>
      </GlassCard>
    </Link>
  );
};

export default GovernmentCard;