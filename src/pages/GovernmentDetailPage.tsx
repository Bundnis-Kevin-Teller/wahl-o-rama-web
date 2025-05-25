import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { governments } from '../data/governments';
import { Government } from '../types';
import { ArrowLeftIcon } from 'lucide-react';
import ParticipantList from '../components/ParticipantList';
import PostList from '../components/PostList';
import ProgramDownload from '../components/ProgramDownload';
import GlassCard from '../components/GlassCard';

const GovernmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [government, setGovernment] = useState<Government | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundGovernment = governments.find(g => g.id === parseInt(id));
      if (foundGovernment) {
        setGovernment(foundGovernment);
        // Update document title
        document.title = `${foundGovernment.name} | WAHL-O-RAMA`;
      }
    }
    
    // Cleanup
    return () => {
      document.title = 'WAHL-O-RAMA';
    };
  }, [id]);
  
  if (!government) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-24 flex items-center justify-center">
        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Regierung nicht gefunden</h2>
          <p className="text-white/80 mb-6">Die gesuchte Regierung existiert nicht oder wurde entfernt.</p>
          <Link
            to="/governments"
            className="px-6 py-3 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300 inline-flex items-center"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            Zurück zur Übersicht
          </Link>
        </GlassCard>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link
          to="/governments"
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Zurück zur Übersicht
        </Link>
        
        {/* Header */}
        <div className="mb-10">
          <div 
            className="h-2 rounded-full mb-6" 
            style={{ backgroundColor: government.color }}
          ></div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{government.name}</h1>
              <p className="text-white/80 text-xl italic">"{government.slogan}"</p>
            </div>
            <div 
              className="mt-4 md:mt-0 px-6 py-3 rounded-full font-medium text-white inline-block"
              style={{ backgroundColor: government.color }}
            >
              Regierung #{government.id}
            </div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <ParticipantList participants={government.participants} color={government.color} />
            <ProgramDownload 
              programUrl={government.programUrl} 
              governmentName={government.name} 
              color={government.color}
            />
          </div>
          
          {/* Right Column (wider) */}
          <div className="lg:col-span-2">
            <PostList posts={government.posts} participants={government.participants} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentDetailPage;