const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav className="bg-[var(--card-bg)] text-[var(--text-color)] shadow-md sticky top-0 z-50 transition-colors duration-300 border-b border-[var(--border-color)]"> {/* Use CSS Vars & add border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto logo-img" /* Added logo-img class */
                src={currentTheme === 'light' ? 'assets/flowsuite_logo_black.png' : 'assets/flowsuite_logo_white.png'}
                alt="Flowsuite Logo"
              />
            </a>
          </div>
          <div className="flex items-center">
             {/* Gradient uses CSS vars, should adapt */}
            <a href="#pricing" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 button-primary mr-4">
              Почати Навчання
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[var(--text-color)] bg-[var(--bg-color)] hover:bg-[var(--card-bg)] transition-colors duration-300 border border-[var(--border-color)]"
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
