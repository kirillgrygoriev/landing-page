const MainHero = () => {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">AI-рішення для</span>
            <span className="block gradient-text">ефективної операційної діяльності</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-[var(--gray)] sm:max-w-3xl">
            Ми допомагаємо малому та середньому бізнесу оптимізувати операційні процеси 
            та автоматизувати рутинні завдання за допомогою AI-технологій та no-code інструментів.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 md:py-4 md:text-lg md:px-10"
              >
                Дізнатись більше
              </a>
              <a
                href="/nocode-ai/"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary)] bg-[var(--bg-color)] border-[var(--primary)] hover:bg-[var(--card-bg)] md:py-4 md:text-lg md:px-10"
              >
                Перейти до курсу
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};