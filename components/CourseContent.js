const CourseContent = () => {
    return (
      <section id="course-content" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              З чого складається курс
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto">
              Подорож, яка трансформує твій підхід до роботи
            </p>
          </div>
  
          <div className="mt-16 max-w-4xl mx-auto">
            {/* Message bubbles container */}
            <div className="space-y-6">
              {/* Left message bubbles */}
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {/* Message bubble 1 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color) font-bold">
                    7 основних модулів + 1 бонусний
                  </p>
                  <p className="text-[var(--text-color)]">
                    які проведуть тебе від стану "скільки всього треба зробити" до "моя система працює за мене"
                  </p>
                </div>
                
                {/* Message bubble 2 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color)] font-bold">
                    12 відеоуроків + 1 бонусний
                  </p>
                  <p className="text-[var(--text-color)]">
                    для повного занурення у світ No-code та AI автоматизацій
                  </p>
                </div>
                
                {/* Message bubble 3 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color)] font-bold">
                    15-40 хвилин
                  </p>
                  <p className="text-[var(--text-color)]">
                    тривалість кожного уроку - оптимально для засвоєння інформації
                  </p>
                </div>
                
                {/* Message bubble 4 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color)] font-bold">
                    Баланс практики і теорії
                  </p>
                  <p className="text-[var(--text-color)]">
                    в кожному модулі технічне відео + відео про майндсет
                  </p>
                </div>
                
                {/* Message bubble 5 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color)] font-bold">
                    Щодня новий модуль
                  </p>
                  <p className="text-[var(--text-color)]">
                    кожного дня відкривається доступ до наступного модулю, щоб за 7 днів опанувати весь матеріал курсу
                  </p>
                </div>
                
                {/* Message bubble 6 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color)] font-bold">
                    Ти не просто дивишся — ти створюєш свою систему паралельно з навчанням!
                  </p>
                  <p className="text-[var(--text-color)]">
                    ти побачиш результат вже на 3-й день, коли твої перші автоматизації запрацюють
                  </p>
                </div>
                
                {/* Message bubble 7 */}
                <div className="bg-[var(--bg-color)] p-5 rounded-2xl rounded-tl-md shadow-md max-w-[80%] sm:max-w-[70%] border border-[var(--border-color)] self-start">
                  <p className="text-[var(--text-color)] font-bold">
                    Тільки конкретні кроки та інструменти, які ти зможеш одразу застосувати:
                  </p>
                  <p className="text-[var(--text-color)]">
                    - налаштування ClickUp за методологією GTD
                  </p>
                  <p className="text-[var(--text-color)]">
                    - створення 2 сценаріїв автоматизації в Make
                  </p>
                  <p className="text-[var(--text-color)]">
                    - інтеграція AI для автоматичної категоризації завдань
                  </p>
                  <p className="text-[var(--text-color)]">
                    - налаштування автоматичного Weekly Review
                  </p>   
                </div>
              </div>
              
              {/* Yellow highlighted message - right side */}
              <div className="flex justify-end mt-8">
                <div className="bg-[var(--primary)] p-6 rounded-2xl rounded-tr-md shadow-md max-w-[90%] sm:max-w-[75%] border border-[var(--primary)]">
                  <p className="text-white font-bold">
                    Ще кілька важливих деталей:
                  </p>
                  <p className="text-white mt-1">
                    - <strong>Жодних додаткових витрат</strong> — курс розрахований на використання можливостей безкоштовних тарифів ClickUp та Make
                  </p>
                  <p className="text-white">
                    - <strong>Методологія працює всюди</strong> — принципи, яким ти навчишся, можна адаптувати до будь-яких інструментів, якщо ти вже використовуєш інші платформи
                  </p>
                  <p className="text-white">
                    - <strong>Доступ до матеріалів зберігається на 3 місяці</strong> — достатньо часу, щоб повернутися до уроків та вдосконалити свою систему
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };