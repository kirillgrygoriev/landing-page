const CourseDetails = () => {
  const modules = [
  {
    number: "1",
    title: "Трансформація робочих процесів з AI та No-Code",
    description: "Твій перший крок до повної автоматизації управління задачами.",
    lessons: [
    "Знайомство з новими можливостями AI для підвищення продуктивності",
    "Огляд поєднання GTD, ClickUp та штучного інтелекту в єдину систему",
    "Практичні приклади впровадження AI-рішень у щоденні завдання",
    "Створення персональної стратегії автоматизації твоїх робочих процесів"]

  },
  {
    number: "2",
    title: "ClickUp як мозковий центр твоєї операційки",
    description: "Фундамент твоєї автоматизованої системи управління.",
    lessons: [
    "Налаштування структурованого робочого простору в ClickUp",
    "Створення інтуїтивної системи для ефективного управління задачами",
    "Впровадження стратегій боротьби з інформаційним перевантаженням",
    "Оптимізація цифрового робочого простору під твій стиль мислення"]

  },
  {
    number: "3",
    title: "Магія інтеграцій",
    description: "Рушійна сила автоматизацій без навичок програмування.",
    lessons: [
    "Опанування Make як інструменту для no-code автоматизацій",
    "З'єднання ClickUp з іншими додатками та сервісами",
    "Створення автоматичних сценаріїв обробки інформації",
    "Налаштування ланцюжків автоматизацій для рутинних процесів"]

  },
  {
    number: "4",
    title: "GTD 2.0: Адаптація класичної методології до digital-світу",
    description: "Методологія, що справді працює в умовах сучасного життя.",
    lessons: [
    "Впровадження принципів Getting Things Done у цифровому середовищі",
    "Налаштування єдиної злагодженої системи управління задачами в ClickUp",
    "Адаптація класичних підходів GTD до сучасних інструментів",
    "Персоналізація методології під твій особистий стиль роботи"]

  },
  {
    number: "5",
    title: "AI-помічник: Автоматична категоризація твого inbox",
    description: "Автопілот для твоїх вхідних завдань та повідомлень.",
    lessons: [
    "Налаштування AI для автоматичного сортування вхідних завдань",
    "Створення правил для пріоритизації задач на основі їхнього змісту",
    "Розробка AI-сценаріїв для розподілу завдань за проєктами і категоріями",
    "Автоматизація обробки вхідних даних для економії 1-2 годин щодня"]

  },
  {
    number: "6",
    title: "Weekly Review на автопілоті",
    description: "15 хвилин замість 2 годин на тиждень для підведення підсумків.",
    lessons: [
    "Створення автоматизованої системи тижневого огляду з допомогою AI",
    "Налаштування автоматичного аналізу твоєї продуктивності",
    "Розробка системи рекомендацій для підвищення ефективності",
    "Трансформація виснажливого процесу в короткий аналітичний звіт"]

  },
  {
    number: "7",
    title: "Управління системою: Моніторинг та оптимізація",
    description: "Контроль і вдосконалення твоєї автоматизованої операційки.",
    lessons: [
    "Налаштування дашбордів для контролю ефективності твоєї системи",
    "Відстеження ключових метрик продуктивності та автоматизацій",
    "Впровадження процесів постійного вдосконалення робочих процесів",
    "Оптимізація системи для максимальної ефективності та продуктивності"]

  },
  {
    number: "Бонусний",
    title: "Система управління автоматизаціями",
    description: "Створюємо операційну систему для твоїх автоматизацій у ClickUp.",
    lessons: [
    "Налаштування борду в ClickUp для систематизації всіх твоїх автоматизацій",
    "Впровадження системи унікальних ID для відстеження кожної автоматизації",
    "Документування критичних параметрів: тригери, платформи-джерела та платформи-призначення",
    "Візуалізація зв'язків між автоматизаціями для швидкого аналізу впливу будь-яких змін"]

  } ];


  return (
    <section id="curriculum" className="py-20 bg-[var(--bg-color)] text-[var(--text-color)]" data-id="1b1hu14le" data-path="components/CourseDetails.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="jfama0ur0" data-path="components/CourseDetails.js">
        <div className="text-center" data-id="tai82edto" data-path="components/CourseDetails.js">
          <h2 className="mt-2 pb-8 text-3xl font-extrabold sm:text-4xl" data-id="hgl1y5jz4" data-path="components/CourseDetails.js"> {/* Inherits text color */}
            Програма курсу
          </h2>
          {/* <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="7ms3i86w1" data-path="components/CourseDetails.js"> Use CSS Variable
            A comprehensive curriculum designed to take you from beginner to expert in no-code development and AI automation.
          </p> */}
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12" data-id="zvdq6ux8a" data-path="components/CourseDetails.js">
          {modules.map((module, index) =>
          <div key={index} className="relative p-8 bg-[var(--card-bg)] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)]" data-id="6yuhv4r9g" data-path="components/CourseDetails.js"> {/* Use CSS Vars & add border */}
              {/* Gradient uses CSS vars, should adapt */}
              <div className="absolute -top-8 -left-0.2 h-16 px-6 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <span>Модуль {module.number}</span>
              </div>
              <div className="pl-6" data-id="ctlofezx0" data-path="components/CourseDetails.js">
                <h3 className="text-xl font-semibold text-[var(--text-color)] mt-6" data-id="261tjohhc" data-path="components/CourseDetails.js">{module.title}</h3> {/* Use CSS Variable */}
                <p className="mt-3 text-base text-[var(--gray)]" data-id="a4ke4aimi" data-path="components/CourseDetails.js">{module.description}</p> {/* Use CSS Variable */}
                <ul className="mt-4 space-y-2" data-id="s4aesiv5g" data-path="components/CourseDetails.js">
                  {module.lessons.map((lesson, lessonIndex) =>
                <li key={lessonIndex} className="flex items-start" data-id="uxvgna7il" data-path="components/CourseDetails.js">
                      <div className="flex-shrink-0" data-id="934a13bq3" data-path="components/CourseDetails.js">
                        <i className="fas fa-check-circle text-[var(--primary)] mt-1" data-id="1p76db82j" data-path="components/CourseDetails.js"></i> {/* Use CSS Variable */}
                      </div>
                      <p className="ml-2 text-sm text-[var(--gray)]" data-id="rr2097kd3" data-path="components/CourseDetails.js">{lesson}</p> {/* Use CSS Variable */}
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center " data-id="on8gkqxz5" data-path="components/CourseDetails.js">
          {/* Use CSS variables for the gradient */}
          <a href="#pricing" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 md:py-4 md:text-lg md:px-20 button-primary" data-id="lp3axjkrh" data-path="components/CourseDetails.js">
            Розпочати навчання зараз
          </a>
          <p className="mt-12 text-lg font-medium text-[var(--text-color)]" data-id="76ic2v4xn" data-path="components/FAQ.js"> {/* Use CSS Variable */}
            P.S. Ти нічим не ризикуєш. Якщо курс тобі не сподобається, ми повернемо тобі кошти без зайвих питань.
          </p>
        </div>
      </div>
    </section>);

};
