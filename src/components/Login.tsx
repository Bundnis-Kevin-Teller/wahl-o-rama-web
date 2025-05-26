import React, { useState, FormEvent } from 'react';
import bcrypt from "bcryptjs";
import { Users } from "../data/users"

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = Users.find((u) => u.email === email);

        if (!user) {
            setError("Benutzer nicht gefunden");
            return;
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (isMatch) {
            alert(`Willkommen, ${user.name}`);
            setError('');
            // TODO: Redirect
        } else {
            setError('Falsches Passwort');
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-600 animate-background">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-60 h-60 bg-cyan-400 opacity-30 rounded-full blur-3xl top-[-50px] left-[-50px] animate-ping"></div>
                <div className="absolute w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-2xl bottom-[-30px] right-[-30px] animate-pulse"></div>
            </div>


            <div className="z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md text-white transition-all duration-300">
                <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]">
                    ✨ Login ✨
                </h2>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/30 transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Passwort</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg hover:from-cyan-400 hover:to-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        🚀 Let's Go!
                    </button>
                </form>
                {error && (
                    <div className="text-red-300 text-sm">{error}</div>
                )}
                <p className="mt-6 text-center text-sm text-white/60">Solltest du dein Passwort vergessen haben, melde dich bitte bei dem Support :)</p>
            </div>
        </div>
    );
};

export default Login;
