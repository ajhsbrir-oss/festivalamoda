import { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const greetings = [
  { message: 'Bem-vindo(a)! Sua presença brilha aqui! ✨', icon: '✨' },
  { message: 'Que honra ter você conosco! 🎀', icon: '🎀' },
  { message: 'Você é incrível! Obrigado por estar aqui! 💖', icon: '💖' },
  { message: 'Estilo é sua marca! Bem-vindo! 👑', icon: '👑' },
  { message: 'Glamour total! Que dia lindo com você! 🌟', icon: '🌟' },
  { message: 'Sua energia é contagiante! Bem-vindo! 💫', icon: '💫' },
  { message: 'Que privilégio ter você aqui! 🎭', icon: '🎭' },
  { message: 'Você é a estrela da noite! ✨', icon: '✨' },
];

function App() {
  const [count, setCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('festivalPresencas');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegister = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('festivalPresencas', newCount.toString());

    const randomGreeting = Math.floor(Math.random() * greetings.length);
    setCurrentGreeting(randomGreeting);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja resetar o contador?')) {
      setCount(0);
      localStorage.removeItem('festivalPresencas');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-transparent to-purple-600/20 animate-gradient"></div>

      {showIntro && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center animate-intro-pop">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white animate-spin-slow">
                <img
                  src="/image.png"
                  alt="Festival A MODA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-4 animate-title-slide">
              Festival
            </h1>
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl animate-title-slide-delay">
              A MODA
            </h1>
          </div>
        </div>
      )}

      <div className={`relative z-10 w-full max-w-2xl transition-all duration-500 ${showIntro ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30 transform hover:scale-105 transition-transform duration-300 hover:ring-white/60 cursor-pointer">
              <img
                src="/image.png"
                alt="Festival A MODA Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
            Festival A MODA
          </h1>

          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-white/95 font-light animate-pulse-slow">
            <Sparkles className="w-6 h-6" />
            <p>Bem-vindo(a)! Aproveite cada momento com muito estilo e glamour!</p>
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transform hover:shadow-pink-300/20 transition-all duration-300">
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg md:text-xl mb-4 font-light">
              Total de Presenças
            </p>
            <div className="text-8xl md:text-9xl font-bold text-white drop-shadow-2xl animate-count-up">
              {count}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleRegister}
              className="w-full py-6 px-8 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white text-2xl md:text-3xl font-semibold rounded-2xl shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/30 hover:border-white/50 hover:shadow-pink-400/60 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              <span className="relative flex items-center justify-center gap-2">
                ✨ Registrar Presença
              </span>
            </button>

            <button
              onClick={handleReset}
              className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white text-lg font-medium rounded-xl shadow-lg transform hover:scale-102 active:scale-95 transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              Resetar Contador
            </button>
          </div>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="animate-celebration">
              <div className="text-center animate-float-up">
                <div className="text-9xl mb-4 animate-bounce-soft">
                  {greetings[currentGreeting].icon}
                </div>
                <div className="bg-white text-pink-600 px-8 py-6 rounded-3xl shadow-2xl border-2 border-pink-200 max-w-md">
                  <p className="text-2xl font-bold mb-2">Presença Registrada! 🎉</p>
                  <p className="text-xl font-semibold">{greetings[currentGreeting].message}</p>
                </div>
              </div>

              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-4xl animate-float"
                  style={{
                    left: `${25 + Math.cos((i / 8) * Math.PI * 2) * 30}%`,
                    top: `${30 + Math.sin((i / 8) * Math.PI * 2) * 30}%`,
                    animation: `float ${2 + i * 0.1}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 text-white/60 text-sm">
        <p>© 2025 Festival A MODA</p>
      </div>
    </div>
  );
}

export default App;
