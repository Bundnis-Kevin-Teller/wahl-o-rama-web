import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-600 text-white px-4 py-10">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-10 space-y-6 overflow-auto max-h-[90vh]">
                <h1 className="text-4xl font-bold drop-shadow-[0_0_12px_rgba(0,255,255,0.5)] text-center">
                    🛡️ Datenschutz­erklärung
                </h1>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">1. Allgemeines</h2>
                    <p className="text-white/90">
                        Der Schutz deiner persönlichen Daten ist uns sehr wichtig. Diese Datenschutzerklärung informiert dich über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf dieser Website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">2. Verantwortlicher</h2>
                    <p className="text-white/90">
                        Verantwortlich für die Datenverarbeitung ist: <br />
                        <strong>Eministar Dev Group n. e. V.</strong><br />
                        Email: <a href="mailto:kontakt@bkt-info.org" className="underline text-cyan-300 hover:text-cyan-200">kontakt@bkt-info.org</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
                    <p className="text-white/90">
                        Beim Besuch dieser Website werden automatisch Informationen wie IP-Adresse, verwendeter Browser, Datum und Uhrzeit gespeichert. Diese Daten dienen nur zur technischen Analyse und Verbesserung des Angebots.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
                    <p className="text-white/90">
                        Wir verwenden Cookies, um die Nutzung dieser Website zu analysieren und dein Erlebnis zu verbessern. Du kannst dem jederzeit widersprechen.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">5. Rechte der betroffenen Person</h2>
                    <ul className="list-disc list-inside text-white/90 space-y-1">
                        <li>Auskunft über gespeicherte Daten</li>
                        <li>Berichtigung unrichtiger Daten</li>
                        <li>Löschung oder Einschränkung der Verarbeitung</li>
                        <li>Widerspruch gegen die Verarbeitung</li>
                        <li>Datenübertragbarkeit</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">6. Kontakt</h2>
                    <p className="text-white/90">
                        Wenn du Fragen zum Datenschutz hast, schreibe uns gerne an <a href="mailto:kontakt@bkt-info.org" className="underline text-cyan-300 hover:text-cyan-200">kontakt@bkt-info.org</a>.
                    </p>
                </section>

                <div className="pt-6 text-center">
                    <Link
                        to="/"
                        className="text-cyan-300 hover:text-cyan-100 underline transition-all duration-200"
                    >
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;
