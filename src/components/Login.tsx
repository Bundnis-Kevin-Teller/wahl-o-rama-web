import React, { useState, FormEvent } from 'react';
import bcrypt from "bcryptjs";
import { Users } from "../data/users"
import { Link } from 'react-router-dom';
const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const [showPassword, setShowPassword] = useState(false);
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
                        <div className="relative">
    <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="••••••••"
        className="w-full px-4 py-3 pr-12 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition-all"
    />
    <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition"
    >
        {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.408.293-2.747.825-3.975M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.07 4.93a10 10 0 012.83 7.07 9.99 9.99 0 01-10 10 9.957 9.957 0 01-7.07-2.93M1 1l22 22" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )}
    </button>
</div>

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
                <p className="mt-6 text-center text-sm text-white/60">
                    Du hast noch kein Konto? Dann{' '}
                <Link to="/register" className="text-cyan-300 hover:text-cyan-100 underline">
                    registriere dich hier
                </Link>
</p>
            </div>
        </div>
    );
};

export default Login;
