const Popup = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [timeLeft, setTimeLeft] = React.useState({ hours: '00', minutes: '00', seconds: '00' });
    
    // Handle countdown timer
    React.useEffect(() => {
      if (!isOpen) return;
      
      const timer = setInterval(() => {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight - now;
  
        if (diff <= 0) {
          clearInterval(timer);
          setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
          return;
        }
  
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, [isOpen]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ email, phone });
      // Reset form
      setEmail('');
      setPhone('');
    };
    
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity popup-overlay">
        <div className="relative bg-[var(--bg-color)] rounded-xl overflow-hidden max-w-md w-[90%] shadow-xl border border-[var(--border-color)]">
          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 z-10 text-4xl font-light text-white bg-transparent border-none cursor-pointer"
            aria-label="Close popup"
          >
            ×
          </button>
          
          {/* Pink header */}
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-6 text-white">
            <h3 className="text-xl font-semibold text-center">
              Заповніть форму та отримайте доступ до курсу за спеціальною ціною вже сьогодні
            </h3>
            
            <div className="flex justify-center items-center mt-4">
              <div className="text-3xl font-bold">287 грн</div>
              <div className="ml-2 text-xl">замість <del>4100 грн</del></div>
            </div>
            
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 bg-[var(--bg-color)]">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш E-mail"
                required
                className="w-full p-3 border border-[var(--border-color)] rounded-md bg-[var(--bg-color)] text-[var(--text-color)]"
              />
            </div>
            
            <div className="mb-6">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ваш телефон"
                required
                className="w-full p-3 border border-[var(--border-color)] rounded-md bg-[var(--bg-color)] text-[var(--text-color)]"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 px-6 text-white font-medium text-lg rounded-full bg-[#4169E1] hover:bg-[#3050c8] transition-all duration-300"
            >
              ОТРИМАТИ ДОСТУП
            </button>
            
            {/* Timer */}
            <div className="mt-8 mb-4">
              <div className="text-center text-sm font-semibold text-[var(--gray)]">
                ДО ЗАКІНЧЕННЯ<br />
                АКЦІЇ ЗАЛИШИЛОСЬ
              </div>
              
              <div className="flex justify-center mt-2">
                <div className="text-[var(--primary)] text-4xl font-bold flex items-center">
                  <span>{timeLeft.hours}</span>
                  <span className="mx-2">:</span>
                  <span>{timeLeft.minutes}</span>
                  <span className="mx-2">:</span>
                  <span>{timeLeft.seconds}</span>
                </div>
              </div>
            </div>
            
            {/* Guarantee */}
            <div className="text-center text-xs text-[var(--gray)] mt-6">
              Гарантія повернення коштів протягом 14 днів, якщо курс не підійде
            </div>
          </form>
        </div>
      </div>
    );
  };