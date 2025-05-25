import React from 'react';
import { Link } from 'react-router-dom';
import { governments } from '../data/governments';
import { VoteIcon, ArrowRightIcon } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 text-center">
          <div className="mb-6 inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full">
            <VoteIcon className="h-8 w-8 text-white mr-2" />
            <span className="text-white font-bold">BKT-Event 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            WAHL-O-RAMA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Demokratie erleben
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Entdecken Sie 8 einzigartige Regierungen, ihre Visionen und Programme in unserem simulierten politischen Event.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/governments"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Regierungen entdecken
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a18] to-transparent"></div>
      </section>

      {/* Featured Governments */}
      <section className="py-20 bg-[#0a0a18]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Regierungen im Spotlight</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Lernen Sie einige unserer teilnehmenden Regierungen kennen und erfahren Sie mehr über ihre Visionen für die Zukunft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governments.slice(0, 3).map(government => (
              <Link key={government.id} to={`/government/${government.id}`}>
                <GlassCard className="h-full p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: government.color }}
                  >
                    <span className="text-white font-bold">{government.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{government.name}</h3>
                  <p className="text-white/80 italic mb-4">"{government.slogan}"</p>
                  <p className="text-white/70 mb-4 text-sm">
                    Geführt von {government.participants[0].name}, {government.participants[0].role}
                  </p>
                  <span className="text-white/90 flex items-center text-sm font-medium">
                    Mehr erfahren
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/governments"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center"
            >
              Alle Regierungen anzeigen
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default HomePage;