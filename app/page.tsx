import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50 text-charcoal">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-cream-200">
        <h1 className="text-2xl font-serif font-bold tracking-widest text-gold-500">
          MAGNOLIA
        </h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#tarot" className="hover:text-gold-500 transition-colors">Tarot</a>
          <a href="#astrologie" className="hover:text-gold-500 transition-colors">Astrologie</a>
          <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-4xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
          Cartomancie & Guidance
        </span>
        <h2 className="text-5xl md:text-6xl font-serif leading-tight">
          Éclairez votre chemin avec la sagesse des cartes et des astres.
        </h2>
        <p className="text-lg text-charcoal/80 max-w-2xl font-sans font-light">
          Consultations sur-mesure de Tarot de Marseille et thèmes astraux pour vous guider à travers les grands tournants de votre vie.
        </p>
        <div className="pt-4">
          <a
            href="#booking"
            className="px-8 py-3 bg-gold-400 hover:bg-gold-500 text-white font-medium rounded-full shadow-sm transition-all"
          >
            Réserver une séance
          </a>
        </div>
      </section>
    </main>
  );
}
