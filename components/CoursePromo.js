const CoursePromo = () => {
  return (
    <section id="course-promo" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--bg-color)] rounded-lg shadow-xl overflow-hidden border border-[var(--border-color)]">
          <div className="px-6 py-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="gradient-text">Міні-курс з No-code та AI автоматизацій</span>
                </h3>
                <p className="mb-4 text-[var(--gray)]">
                  Навчись будувати системи, що працюють на тебе. Трансформуй свій робочий процес за допомогою 
                  потужних AI-інструментів та No-code рішень за 7 днів.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-2 text-[var(--gray)]">7 основних модулів + бонусний</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-2 text-[var(--gray)]">Мінімум +5 годин продуктивного часу щотижня</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-2 text-[var(--gray)]">Перші результати вже на 3-й день</span>
                  </li>
                </ul>
                <a 
                  href="/nocode-ai/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg transform transition-all hover:-translate-y-1"
                >
                  Дізнатися більше
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
              <div className="hidden md:block">
                <img 
                  src="assets/course-promo-image.jpg" 
                  alt="No-code та AI автоматизації курс" 
                  className="rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x300?text=No-code+та+AI+автоматизації";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};