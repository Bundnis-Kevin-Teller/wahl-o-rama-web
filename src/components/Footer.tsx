import React from 'react';
import { Link } from 'react-router-dom';
import { VoteIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0a0a18] to-[#141428] text-white/80 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <VoteIcon className="h-6 w-6" />
              <span>WAHL-O-RAMA</span>
            </Link>
            <p className="mb-4 text-sm">
              Das offizielle Event für politische Simulation und Demokratieerfahrung.
              Organisiert vom BKT-Team.
            </p>
            
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/governments" className="text-white/70 hover:text-white transition-colors">
                  Regierungen
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Discord: <a href={"https://discord.bkt-info.org"}>discord.bkt-info.org</a></li>
              <li className="text-white/70">Email: <a href={"mailto:kontakt@bkt-info.org"}>kontakt@bkt-info.org</a></li>
              <li className="text-white/70">Telefon: +49 15566595553</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} WAHL-O-RAMA. Alle Rechte vorbehalten.</p>
          <ul>
                <Link to="/datenschutz" className="text-white/70 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </ul>
              
          <p className="mt-2">
          
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;