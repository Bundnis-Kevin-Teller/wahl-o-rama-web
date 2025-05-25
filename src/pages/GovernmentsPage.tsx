import React from 'react';
import { governments } from '../data/governments';
import GovernmentCard from '../components/GovernmentCard';

const GovernmentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Alle Regierungen</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Entdecken Sie alle teilnehmenden Regierungen des WAHL-O-RAMA Events und erfahren Sie mehr über ihre politischen Programme und Visionen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {governments.map(government => (
            <GovernmentCard key={government.id} government={government} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentsPage;