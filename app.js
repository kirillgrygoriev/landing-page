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
    // localStorage.setItem('theme', theme);
  }, [theme]);

  // Optional: Load theme preference from localStorage on initial load
  // React.useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   } else {
  //      // Optional: Check system preference
  //      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //      if (prefersDark) setTheme('dark');
  //   }
  // }, []);

  return (
    // Explicitly apply base background and text colors using CSS variables
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]" data-id="t998o5xwo" data-path="app.js">
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} data-id="v7rgy2ut2" data-path="app.js" />
      <Hero data-id="8h6ibw3f3" data-path="app.js" />
      <Features data-id="qnpw4cl3h" data-path="app.js" />
      <CourseDetails data-id="a6n3vzfh5" data-path="app.js" />
      <Testimonials data-id="f2blngy77" data-path="app.js" />
      <Pricing data-id="rvcwf00fd" data-path="app.js" />
      <FAQ data-id="r5fy1gga6" data-path="app.js" />
      <Footer data-id="sk8nyusg2" data-path="app.js" />
    </div>);

};

ReactDOM.render(<App data-id="o70biaipp" data-path="app.js" />, document.getElementById('root'));
