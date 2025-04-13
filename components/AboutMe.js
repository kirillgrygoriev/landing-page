const AboutMe = () => {
    return (
      <section id="about-me" className="py-20 bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Про автора курсу
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto">
              Познайомся з твоїм провідником у світ No-code та AI Автоматизацій
            </p>
          </div>
  
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left column - Bio content */}
            <div className="relative lg:row-start-1 lg:col-start-1">
              <div className="text-lg max-w-prose mx-auto lg:max-w-none">
                <h3 className="mt-2 text-2xl font-bold text-[var(--text-color)] mb-6">
                  Хей-хей! Я Кирило Григор'єв <span className="text-2xl">👋</span>
                </h3>
                
                <p className="mb-6 text-[var(--gray)]">
                  Сім років тому я був на твоєму місці — тонув у хаосі завдань
                  та боровся з постійним відчуттям, що доба має замало
                  годин.
                </p>
                
                <p className="mb-6 text-[var(--gray)]">
                  Я перепробував десятки інструментів — від простих To-Do
                  списків до складних CRM-систем. І найкращі рішення
                  знаходились на перетині методологій (GTD) та технологій
                  (No-code, AI).
                </p>
                
                <p className="font-medium mb-4">За 7 років шляху я:</p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-3 text-[var(--gray)]">Став сертифікованим ClickUp Ambassador з
                    поглибленим знанням усіх можливостей платформи</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-3 text-[var(--gray)]">Опанував Make до рівня експерта, створюючи
                    автоматизації, які економлять години часу</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-3 text-[var(--gray)]">Запровадив програму навчання для проджект-
                    менеджерів у гейм-дев індустрії, маю великий досвід
                    менторства</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-check-circle text-[var(--primary)] mt-1 flex-shrink-0"></i>
                    <span className="ml-3 text-[var(--gray)]">Розробив десятки комплексних систем управління
                    задачами для компаній різного масштабу на ClickUp,
                    Monday та Smartsuite.</span>
                  </li>
                </ul>
                
                <p className="font-bold mb-4">
                  Але найголовніше — я сам живу за системою, якої
                  навчаю.
                </p>
                
                <p className="text-[var(--gray)] mb-6">
                  Це дозволило мені звільнити понад 20 годин на
                  тиждень і перейти від операційного хаосу до стратегічного
                  розвитку.
                </p>
                
                <p className="text-[var(--gray)] mb-6">
                  Тепер я ділюся цими знаннями з тобою — без занудних
                  лекцій і складних термінів. Тільки практичні інструменти,
                  які ти почнеш застосовувати вже за кілька годин після
                  старту.
                </p>
                
                <p className="font-bold text-lg gradient-text">
                  Моя мета — допомогти тобі створити ТВОЮ особисту
                  операційну систему, яка працюватиме на автопілоті.
                </p>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <div className="lg:pl-8">
                <div className="aspect-w-4 aspect-h-5 lg:aspect-none">
                  <img 
                    className="rounded-lg shadow-lg object-cover object-center card-hover"
                    src="assets/about_me_500x700.jpg" 
                    alt="Кирило Григор'єв, експерт з No-code та AI автоматизацій"
                  />
                </div>
                <div className="mt-6 bg-[var(--card-bg)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <i className="fas fa-certificate text-[var(--primary)] text-2xl"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-[var(--text-color)]">Сертифікований експерт</p>
                      <p className="text-base text-[var(--gray)]">ClickUp Ambassador & Make Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };