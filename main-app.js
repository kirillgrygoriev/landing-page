const App = () => {
    const [theme, setTheme] = React.useState('light'); // Default to light
    
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    React.useEffect(() => {
      const root = document.documentElement; // Get the <html> element
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      // Optional: Persist theme preference in localStorage
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    // Load theme preference from localStorage on initial load
    React.useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) setTheme('dark');
      }
    }, []);
  
    return (
      <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <MainNav toggleTheme={toggleTheme} currentTheme={theme} />
        <MainHero />
        <Services />
        <Expertise />
        <CoursePromo />
        <ContactForm />
        <Footer />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));