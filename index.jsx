import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function WiliamoSite() {
  const spotifyEmbedSrc = "https://open.spotify.com/embed/album/61iNLMtGLjB90V7X19oiYx?utm_source=generator"; 
  const coverPlaceholder = "/assets/cover-a-deux-en-2070.jpg"; 

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-slate-100 font-inter">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-xl font-bold">W</div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Wiliamo</h1>
            <p className="text-xs text-slate-400">Artiste · Electro / Dream Pop</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#music" className="hover:text-white">Musiques</a>
          <a href="#about" className="hover:text-white">À propos</a>
          <a href="#tour" className="hover:text-white">Concerts</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="https://open.spotify.com/intl-fr/artist/61iNLMtGLjB90V7X19oiYx" target="_blank" rel="noreferrer" className="ml-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm hover:bg-white/12">
          Écouter sur Spotify
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-700/40 to-indigo-800/30 p-1">
              <img src={coverPlaceholder} alt="Pochette A deux en 2070" className="w-full h-auto sm:h-96 object-cover rounded-xl bg-slate-800" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <a href="https://open.spotify.com/intl-fr/album/61iNLMtGLjB90V7X19oiYx" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full hover:bg-white/20">
                  <Play size={16} />
                  <span className="text-sm">Écouter le single</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold tracking-tight">A deux en 2070</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Premier single de Wiliamo — une balade électro-nostalgique qui imagine l'amour dans un futur doux-amer. Parfait pour les nuits où on regarde la ville depuis un toit.</p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe title="Spotify - A deux en 2070" src={spotifyEmbedSrc} width="100%" height="120" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>

              <div className="flex gap-3">
                <a href="https://open.spotify.com/intl-fr/album/61iNLMtGLjB90V7X19oiYx" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 font-medium shadow-md hover:scale-[1.01] transition">Écouter maintenant</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white/6 px-4 py-2 font-medium">Partager</a>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-400">
              <p>Sorti le <strong>20.09.2025</strong></p>
              <p className="mt-2">Produit par <em>Wiliamo &amp; Beatmaker</em>. Masterisé par Studio X.</p>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold">À propos</h3>
            <p className="mt-4 text-slate-300 max-w-3xl">Wiliamo explore les contours de la mémoire et de l'avenir par des textures électroniques et des mélodies vocales intimes. Inspiré par les films de science-fiction rétro, la pop des années 80 et la poésie urbaine contemporaine.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold">Influences</h4>
                <p className="text-sm text-slate-400 mt-2">Chromatics, M83, Fever Ray</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold">Genres</h4>
                <p className="text-sm text-slate-400 mt-2">Electro · Dream Pop · Indie</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold">Label</h4>
                <p className="text-sm text-slate-400 mt-2">Indépendant</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MUSIC / DISCOGRAPHY */}
        <section id="music" className="py-12">
          <h3 className="text-2xl font-bold">Musiques</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Single card */}
            <motion.div whileHover={{ y: -6 }} className="bg-white/5 rounded-2xl p-4 shadow-lg">
              <img src={coverPlaceholder} alt="pochette" className="w-full h-48 object-cover rounded-lg" />
              <div className="mt-3">
                <h4 className="font-semibold">A deux en 2070</h4>
                <p className="text-sm text-slate-400 mt-1">Single · 3:22</p>
                <div className="mt-3">
                  <iframe title="Spotify small" src={spotifyEmbedSrc} width="100%" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
              </div>
            </motion.div>

            <div className="bg-white/3 rounded-2xl p-6 flex items-center justify-center text-center text-slate-400">
              <div>
                <p className="font-medium">Prochaines sorties</p>
                <p className="text-xs mt-2">Bientôt plus de musique — restez connecté·e·s</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tour" className="py-12">
          <h3 className="text-2xl font-bold">Concerts</h3>
          <p className="mt-3 text-slate-300">Aucune date pour le moment. Si vous souhaitez booker Wiliamo, envoyez un mail via le formulaire contact.</p>
        </section>

        <section id="contact" className="py-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Contact &amp; Newsletter</h3>
              <p className="mt-3 text-slate-300">Recevez les nouveautés et les dates de concerts.</p>

              <form action="mailto:contact@wiliamo.com" method="post" encType="text/plain" className="mt-4 flex flex-col gap-3">
                <input type="email" name="email" placeholder="Votre email" className="bg-white/5 rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-400" />
                <button type="submit" className="w-fit rounded-md bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 font-medium">S'inscrire</button>
              </form>
            </div>

            <div className="bg-white/3 p-6 rounded-xl">
              <h4 className="font-semibold">Booking</h4>
              <p className="text-slate-300 mt-2">booking@wiliamo.com</p>
              <h4 className="mt-4 font-semibold">Presse</h4>
              <p className="text-slate-300 mt-2">press@wiliamo.com</p>
            </div>
          </div>
        </section>

        <footer className="py-12 text-slate-400 text-sm text-center">
          <p>© {new Date().getFullYear()} Wiliamo — Tous droits réservés</p>
          <p className="mt-2">Suivez : Instagram · TikTok · Twitter</p>
        </footer>
      </main>
    </div>
  );
}

/* Exemple CSS si vous ne souhaitez pas Tailwind (fichier style.css):

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  background: linear-gradient(to bottom, #111827, #4c1d95, #000);
  color: #f1f5f9;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

h1, h2, h3, h4 {
  font-weight: 700;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: white;
}

button {
  cursor: pointer;
}
*/
