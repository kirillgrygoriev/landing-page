const Hero = ({ toggleTheme, currentTheme, openPopup }) => { // Accept props

  // --- State for Countdown Timer ---
  const [timeLeft, setTimeLeft] = React.useState({ hours: '00', minutes: '00', seconds: '00' });
  // --- State for Sticky Button Visibility ---
   const [isStickyVisible, setIsStickyVisible] = React.useState(false);

  // --- State for Tomorrow's Date ---
  const [startDate, setStartDate] = React.useState('');

  // --- useEffect for Date Calculation, Countdown, and Scroll Listener ---
  React.useEffect(() => {
    // Calculate Tomorrow's Date
    const months = ['СІЧНЯ', 'ЛЮТОГО', 'БЕРЕЗНЯ', 'КВІТНЯ', 'ТРАВНЯ', 'ЧЕРВНЯ', 'ЛИПНЯ', 'СЕРПНЯ', 'ВЕРЕСНЯ', 'ЖОВТНЯ', 'ЛИСТОПАДА', 'ГРУДНЯ'];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = tomorrow.getDate();
    const monthIndex = tomorrow.getMonth();
    const formattedDate = `${day} ${months[monthIndex]}`;
    setStartDate(formattedDate);

    // Countdown logic
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

    // Scroll listener for sticky button
    const handleScroll = () => {
        if (window.scrollY > 150) { // Show after scrolling 150px
            setIsStickyVisible(true);
        } else {
            setIsStickyVisible(false);
        }
    };
    window.addEventListener('scroll', handleScroll);


    // Cleanup function
    return () => {
        clearInterval(timer);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount


  return (
    <div className="relative overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)]" data-id="in6ec1gsy" data-path="components/Hero.js"> {/* Removed top and bottom padding */}

      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true" data-id="mu9zjopzn" data-path="components/Hero.js">
        <svg className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-200 dark:text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none" data-id="m7ejnog6x" data-path="components/Hero.js"> {/* Keep dark variant for subtle pattern */}
          <defs data-id="z7z9lh16b" data-path="components/Hero.js">
            <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" data-id="q3urzi6dk" data-path="components/Hero.js">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" data-id="md2j602ch" data-path="components/Hero.js" />
            </pattern>
          </defs>
          <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" data-id="u4b15doyd" data-path="components/Hero.js" />
        </svg>
      </div>
      {/* Removed pt-6 from here */}
      <div className="relative pb-16" data-id="z4r4gpprv" data-path="components/Hero.js"> {/* Changed pb-12 to pb-16 */}
         {/* Moved Description/Button container here, wrapped for alignment */}
         <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6" data-id="top-bar-container"> {/* Added pt-6 here */}
           <div className="flex items-start justify-between" data-id="desc-button-container">
             {/* Course Description and Date - Styled */}
             <p className="text-sm font-semibold uppercase tracking-wider" data-id="course-desc-date"> {/* Remove text color from p */}
               <span>Практичний міні-курс по застосуванню No-code та AI інструментів |</span> <span className="text-[var(--primary)]">СТАРТ {startDate}</span> {/* Remove dark:text-white from span */}
             </p>
             {/* Dark Mode Toggle Button - In Flow */}
             <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-[var(--text-color)] bg-[var(--bg-color)] hover:bg-[var(--card-bg)] transition-colors duration-300 border border-[var(--primary)] flex-shrink-0"
                aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
              >
                {currentTheme === 'light' ? (
                  <i className="fas fa-moon w-5 h-5"></i>
                ) : (
                  <i className="fas fa-sun w-5 h-5"></i>
                )}
              </button>
           </div>
         </div>

        {/* Main content starts below the top bar */}
        <main className="mt-8 sm:mt-16" data-id="r9l7swqqi" data-path="components/Hero.js"> {/* Adjusted top margin */}
          <div className="mx-auto max-w-7xl" data-id="o06bpd6wf" data-path="components/Hero.js">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8" data-id="kzp6fbsir" data-path="components/Hero.js">
              <div className="px-4 sm:px-6 md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left" data-id="x9jyv4wcv" data-path="components/Hero.js">
                {/* Removed the desc/button container from here */}
                <div data-id="kfju5o421" data-path="components/Hero.js">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl" data-id="m29ve08bc" data-path="components/Hero.js"> {/* Inherits text color */}
                    <span className="md:block" data-id="e3zh0p5eb" data-path="components/Hero.js">Опануй</span>{' '}
                    <span className="gradient-text md:block" data-id="vhy7k376h" data-path="components/Hero.js">No-code та AI Автоматизації</span> {/* Gradient uses CSS vars */}
                  </h1>
                  <p className="mt-3 text-base text-[var(--gray)] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" data-id="o2tk2ikcn" data-path="components/Hero.js"> {/* Use CSS Variable */}
                  Навчись будувати системи, що працюють на тебе.
                  Трансформуй свій робочий процес за допомогою потужних AI-інструментів та No-code рішень.
                  Aвтоматизувавши рутинні завдання ти звільниш 5+ годин щотижня, без написання жодного рядка коду.
                  </p>
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0" data-id="jfj9burcx" data-path="components/Hero.js">
                    {/* Container for Price, Countdown, CTA - Stacked Vertically */}
                    <div className="flex flex-col items-start gap-4 mt-8 sm:mt-10" data-id="price-countdown-cta-group">

                       {/* Price and Countdown Row */}
                       <div className="flex items-end gap-4 sm:gap-6" data-id="price-countdown-row">
                          {/* Price Comparison - Styled */}
                          <div className="text-left" data-id="price-comparison-styled">
                            <p className="text-xs text-[var(--gray)] mb-1">Ціна:</p>
                            <span className="font-bold text-[var(--primary)] text-xl mr-2">287 грн</span>
                            <del className="text-[var(--gray)] text-base">4100 грн</del>
                          </div>

                          {/* Countdown Timer - Styled */}
                          <div className="text-left" data-id="countdown-timer-styled">
                             <p className="text-xs text-[var(--gray)] mb-1">До підвищення ціни:</p>
                             <div>
                               <span className="font-mono font-semibold text-[var(--text-color)] text-xl">{timeLeft.hours}</span><span className="text-xs text-[var(--gray)]"> год</span> :
                               <span className="font-mono font-semibold text-[var(--text-color)] text-xl ml-1">{timeLeft.minutes}</span><span className="text-xs text-[var(--gray)]"> хв</span> :
                               <span className="font-mono font-semibold text-[var(--text-color)] text-xl ml-1">{timeLeft.seconds}</span><span className="text-xs text-[var(--gray)]"> сек</span>
                             </div>
                          </div>
                       </div>

                      {/* Single CTA Button - Below Price/Countdown */}
                      <div className="rounded-md shadow w-full mt-4" data-id="sx5axcpkl-modified"> {/* Added margin-top */}
                        <a 
                          onClick={(e) => {
                            e.preventDefault();
                            openPopup();
                          }}
                          href="#" 
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 md:py-4 md:text-lg md:px-10 button-primary" 
                          data-id="ejh5chd0f-modified"
                        >
                          Отримати доступ зі знижкою -93%
                        </a>
                      </div>
                    </div>
                     {/* Restored Offer Text */}
                     <p className="mt-3 text-sm text-[var(--gray)]" data-id="offer-text-restored">
                       Спеціальна пропозиція діє лише сьогодні до кінця дня.
                     </p>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6" data-id="12qzb9peo" data-path="components/Hero.js">
                <div className="bg-[var(--card-bg)] sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden border border-[var(--border-color)]" data-id="ya4nw1c4i" data-path="components/Hero.js"> {/* Use CSS Vars & add border */}
                  <div className="px-4 py-8 sm:px-10" data-id="npdlh8si6" data-path="components/Hero.js">
                    <div className="relative" data-id="df4heelgq" data-path="components/Hero.js">
                      <img
                        src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        alt="AI Automation"
                        className="rounded-lg shadow-2xl" data-id="hpc5x7yih" data-path="components/Hero.js" />

                      <div className="absolute -bottom-4 -right-4 bg-[var(--bg-color)] p-4 rounded-lg shadow-lg border border-[var(--border-color)]" data-id="om8m5gn9y" data-path="components/Hero.js"> {/* Use CSS Vars & add border */}
                        <div className="flex items-center" data-id="w0rjv9fi6" data-path="components/Hero.js">
                          <div className="flex-shrink-0" data-id="mj5799zh3" data-path="components/Hero.js">
                            <i className="fas fa-robot text-[var(--primary)] text-2xl" data-id="s5c8qj8jt" data-path="components/Hero.js"></i> {/* Use CSS Variable */}
                          </div>
                          <div className="ml-3" data-id="tffmqzucw" data-path="components/Hero.js">
                            <p className="text-sm font-medium text-[var(--text-color)]" data-id="3t0r37q7v" data-path="components/Hero.js">Без знання програмування</p> {/* Use CSS Variable */}
                            <p className="text-xs text-[var(--gray)]" data-id="ukd9gd7d9" data-path="components/Hero.js">100% візуальні інструменти</p> {/* Use CSS Variable */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

       {/* Sticky Bottom CTA Button */}
       <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${isStickyVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-id="sticky-cta">
         <a 
          onClick={(e) => {
            e.preventDefault();
            openPopup();
          }}
          href="#pricing" 
          className="inline-flex items-center justify-center w-[60vw] max-w-[400px] px-4 py-2.5 md:py-4 md:px-10 border border-transparent text-base md:text-lg font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 button-primary whitespace-nowrap"
         >
           Отримати доступ
         </a>
       </div>

    </div>);

};
