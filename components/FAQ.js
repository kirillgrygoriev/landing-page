const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const faqs = [
  {
    question: "Як буде проходити навчання?",
    answer: "Після оплати ви отримаєте доступ до телеграм-платформи, на яку кожного дня надходитиме новий навчальний модуль протягом 7 днів."
  },
  {
    question: "Скільки часу займе навчання та впровадження системи?",
    answer: "Перші автоматизації запрацюють вже після 3-го модуля (день 3). Повна система буде готова через 7 днів. Ми рекомендуємо виділяти 1-1,5 години щодня для перегляду уроків та виконання практичних завдань."
  },
  {
    question: "Чи потрібні мені навички програмування?",
    answer: "Ні, курс розроблений для людей без технічного бекграунду. Ми використовуємо виключно хмарні No-code інструменти, які не вимагають написання жодного рядка коду та не потребують встановлення на комп'ютер."
  },
  {
    question: "Чи буде ця система працювати для мого специфічного бізнесу/сфери?",
    answer: "Так, система розроблена таким чином, щоб її можна було легко адаптувати під будь-які робочі процеси та індустрії."
  },
  {
    question: "Які додаткові витрати потрібні для впровадження системи?",
    answer: "Курс розрахований на можливості безкоштовної версії ClickUp та Make, цього достатньо для початку автоматизації. Для розширених функцій можуть знадобитися платні тарифи: ClickUp (від $7/місяць), Make (від $10/місяць)."
  },
  {
    question: "Що, якщо курс мені не підійде?",
    answer: "Ви нічим не ризикуєте, ми надаємо гарантію повернення коштів протягом 14 днів з моменту оплати. Якщо курс вам не підійде з будь-якої причини, просто напишіть нам, і ми повернемо вам гроші без зайвих питань."
  }];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]" data-id="wvke9hjli" data-path="components/FAQ.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="yqokpn9xp" data-path="components/FAQ.js">
        <div className="text-center" data-id="x7gzg0hix" data-path="components/FAQ.js">
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl" data-id="q5io4f9lr" data-path="components/FAQ.js"> {/* Inherits text color */}
            Питання/Відповіді
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="krlf7anmv" data-path="components/FAQ.js"> {/* Use CSS Variable */}
            Все, що може тебе хвилювати та, що потрібно знати про курс
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto divide-y-2 divide-[var(--border-color)]" data-id="apt78bhdi" data-path="components/FAQ.js"> {/* Use CSS Variable for divider */}
          {faqs.map((faq, index) =>
          <div key={index} className="py-6" data-id="l4333h1j9" data-path="components/FAQ.js">
              <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full flex justify-between items-start focus:outline-none" data-id="1h53n3g8q" data-path="components/FAQ.js">

                <span className="text-lg font-medium text-[var(--text-color)]" data-id="g1f6tj0cr" data-path="components/FAQ.js">{faq.question}</span> {/* Use CSS Variable */}
                <span className="ml-6 h-7 flex items-center" data-id="h4j67d18y" data-path="components/FAQ.js">
                  <i
                  className={`fas ${
                  activeIndex === index ? 'fa-minus' : 'fa-plus'} text-[var(--primary)] transform transition-transform duration-200` // Use CSS Variable
                  } data-id="8qq6359wf" data-path="components/FAQ.js">
                </i>
                </span>
              </button>
              {activeIndex === index &&
            <div className="mt-3 pr-12" data-id="3eo2zeqmy" data-path="components/FAQ.js">
                  <p className="text-base text-[var(--gray)]" data-id="zowey3kt5" data-path="components/FAQ.js">{faq.answer}</p> {/* Use CSS Variable */}
                </div>
            }
            </div>
          )}
        </div>

        <div className="mt-16 text-center" data-id="eoeohz2re" data-path="components/FAQ.js">
          <h3 className="text-lg font-medium text-[var(--text-color)]" data-id="bd0yn1p39" data-path="components/FAQ.js">Ще залишились питання?</h3> {/* Use CSS Variable */}
          <p className="mt-2 text-base text-[var(--gray)]" data-id="76ic2v4xn" data-path="components/FAQ.js"> {/* Use CSS Variable */}
            Якщо ти не знаходиш відповідь на своє питання, не соромся зв'язатись з нами по вказанному імейлу.
          </p>

        </div>
      </div>
    </section>);

};
