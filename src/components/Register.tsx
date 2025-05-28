import React, { useState, FormEvent } from 'react';
import bcrypt from "bcryptjs";
import ReCAPTCHA from 'react-google-recaptcha';
import { Users } from "../data/users";
import { Link } from 'react-router-dom';
const SITE_KEY = "6LeRYksrAAAAAK36NSs9JWHSAlR10YpwlLDbPkXr";

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    const checkPasswordStrength = (pw: string) => {
        let strength = 0;
        if (pw.length >= 8) strength++;
        if (/[A-Z]/.test(pw)) strength++;
        if (/[a-z]/.test(pw)) strength++;
        if (/[0-9]/.test(pw)) strength++;
        if (/[^A-Za-z0-9]/.test(pw)) strength++;

        if (strength <= 2) return 'Schwach';
        if (strength === 3) return 'Mittel';
        return 'Stark';
    };

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !password || !confirmPassword) {
            setError('Bitte fülle alle Felder aus');
            return;
        }

        if (!captchaToken) {
            setError("Bitte bestätige das reCAPTCHA");
            return;
        }

        if (Users.find((u) => u.email === email)) {
            setError('Ein Benutzer mit dieser E-Mail existiert bereits');
            return;
        }

        if (password !== confirmPassword) {
            setError('Die Passwörter stimmen nicht überein');
            return;
        }

        const passwordHash = await bcrypt.hash(password, 10);
        Users.push({ name, email, passwordHash });

        setSuccess(`Registrierung erfolgreich!`);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setCaptchaToken(null);
        setPasswordStrength('');
    };

    const getStrengthColor = (strength: string) => {
        if (strength === 'Stark') return 'text-green-400';
        if (strength === 'Mittel') return 'text-yellow-300';
        return 'text-red-400';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-800 via-purple-800 to-blue-600">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md text-white">
                <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-md">✨ Registrieren ✨</h2>
                <form onSubmit={handleRegister} className="space-y-5">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Dein Name" required className="w-full px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-cyan-400" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-cyan-400" />

                    {/* Passwortfeld mit Toggle */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordStrength(checkPasswordStrength(e.target.value));
                            }}
                            placeholder="Passwort"
                            required
                            className="w-full px-4 py-3 pr-12 rounded-xl bg-white/20 text-white border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-purple-400"
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

                    {/* Passwortstärke */}
                    {password && (
                        <div className={`text-sm font-medium ${getStrengthColor(passwordStrength)}`}>
                            Passwortstärke: {passwordStrength}
                        </div>
                    )}

                    <input
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Passwort wiederholen"
                        required
                        className="w-full px-4 py-3 pr-12 rounded-xl bg-white/20 text-white border border-white/30 placeholder-white/60 focus:ring-2 focus:ring-purple-400"
                    />

                    <div className="flex justify-center">
                        <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
                    </div>

                    <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:scale-105 transition-all duration-300">
                        ✅ Registrieren
                    </button>
                    
                </form>
                    
                <p className="mt-6 text-center text-sm text-white/60">
                   Du hast schon ein Konto? Dann{' '}
                   <Link to="/login" className="text-cyan-300 hover:text-cyan-100 underline">
                       logge dich hier ein
                   </Link>
                </p>



                {error && <div className="mt-4 text-red-300 text-sm">{error}</div>}
                {success && <div className="mt-4 text-green-300 text-sm">{success}</div>}
            </div>
           
        </div>
         
    );
};

export default Register;
