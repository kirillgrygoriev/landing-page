const Popup = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [timeLeft, setTimeLeft] = React.useState({ hours: '00', minutes: '00', seconds: '00' });
  
  // Додаємо ref для контейнера поп-апу
  const popupRef = React.useRef(null);
  
  // Обробник кліків ззовні та клавіші Escape
  React.useEffect(() => {
    if (!isOpen) return;
    
    // Функція для обробки кліків
    const handleOutsideClick = (event) => {
      // Якщо клік був за межами поп-апу
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    // Функція для обробки натискання клавіш
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    // Додаємо обробники подій
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    
    // Фокус на перше поле форми для кращої доступності
    const firstInput = popupRef.current?.querySelector('input');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
    
    // Очищаємо обробники при розмонтуванні або закритті
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
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
      {/* Додаємо ref до контейнера з вмістом та атрибути доступності */}
      <div 
        ref={popupRef}
        className="relative bg-[var(--bg-color)] rounded-xl overflow-hidden max-w-md w-[90%] shadow-xl border border-[var(--border-color)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-0 right-2 z-10 text-4xl font-light text-white bg-transparent border-none cursor-pointer"
          aria-label="Close popup"
        >
          ×
        </button>
        
        {/* Pink header */}
        <div className="bg-[var(--primary)] p-6 text-white">
          <h3 id="popup-title" className="text-2xl font-semibold text-center">
            ЗАПОВНІТЬ ФОРМУ
          </h3>
          <p className="mt-2 text-center text-xl">
            та отримайте доступ до курсу за спеціальною ціною вже сьогодні
          </p>
          
          <div className="flex justify-center items-center mt-4">
            <div className="text-3xl font-bold">287 грн</div>
            <div className="ml-2 text-xl">замість <del>4100 грн</del></div>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 bg-gray-900">
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
            className="w-full py-3 px-6 text-white font-medium text-lg rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
          >
            Отримати доступ
          </button>
          
          {/* Timer */}
          <div className="mt-8 mb-4">
            <div className="text-center text-sm font-semibold text-[var(--gray)]">
              До закінчення дії спеціальної<br />
              пропозиції залишилось:
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="text-gray-300 text-4xl font-bold flex items-center">
                <span>{timeLeft.hours}</span>
                <span className="mx-2">:</span>
                <span>{timeLeft.minutes}</span>
                <span className="mx-2">:</span>
                <span>{timeLeft.seconds}</span>
              </div>
            </div>
          </div>
          
          {/* Guarantee */}
          <div className="text-center text-sm font-semibold text-[var(--gray)] mt-4">
            Гарантія повернення коштів протягом 14 днів!
          </div>
        </form>
      </div>
    </div>
  );
};