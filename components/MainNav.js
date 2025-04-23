const MainNav = ({ toggleTheme, currentTheme }) => {
  return (
    <nav className="bg-[var(--card-bg)] text-[var(--text-color)] shadow-md sticky top-0 z-50 transition-colors duration-300 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto logo-img"
                src={currentTheme === 'light' ? 'assets/flowsuite_logo_black.png' : 'assets/flowsuite_logo_white.png'}
                alt="Flowsuite Logo"
              />
            </a>
            
            {/* Navigation Links */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--text-color)]">
                Послуги
              </a>
              <a href="#expertise" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--text-color)]">
                Експертиза
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--text-color)]">
                Контакти
              </a>
              <a href="/nocode-ai/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--primary)]">
                Курс
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[var(--text-color)] bg-[var(--bg-color)] hover:bg-[var(--card-bg)] transition-colors duration-300 border border-[var(--primary)]"
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
      </div>
    </nav>
  );
};