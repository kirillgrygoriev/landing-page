const Features = () => {
  const features = [
  {
    icon: "fa-arrows-spin",
    title: "Повністю автоматизовану систему управління задачами",
    description: "що працює на тебе, а не навпаки"
  },
  {
    icon: "fa-robot",
    title: "AI-помічника",
    description: "який автоматично розподіляє вхідні завдання за контекстом та допомагає проводити Weekly Review аналізуючи твою продуктивність та покращуючи твої результати"
  },
  {
    icon: "fa-clock",
    title: "Мінімум +5 годин продуктивного часу щотижня",
    description: "які раніше витрачались на сортування та обробку задач"
  },
  {
    icon: "fa-brain",
    title: "Перехід від операційного до стратегічного мислення",
    description: "ти нарешті почнеш працювати над розвитком, а не тонути в операційному хаосі"
  },
  {
    icon: "fa-gears",
    title: "Єдину систему та відчуття контролю над своїм часом і проєктами",
    description: "все в одному місці, більше жодних забутих завдань, пропущених дедлайнів чи інформаційного перевантаження"
  },
  {
    icon: "fa-rocket",
    title: "Відчуття контролю над своїм часом і проєктами",
    description: "більше жодних забутих завдань, пропущених дедлайнів чи інформаційного перевантаження"
  }];


  return (
    <section id="features" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]" data-id="4g5go6kdw" data-path="components/Features.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="jfbf2l396" data-path="components/Features.js">
        <div className="text-center" data-id="103tahxvo" data-path="components/Features.js">
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl" data-id="9mxjrr3u2" data-path="components/Features.js"> {/* Inherits text color */}
            Твої результати після курсу
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="kjdeq8mxk" data-path="components/Features.js"> {/* Use CSS Variable */}
            За сім днів навчання ти отримаєш:
          </p>
        </div>

        <div className="mt-16" data-id="0jw31itrg" data-path="components/Features.js">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-id="e2sfzc8hm" data-path="components/Features.js">
            {features.map((feature, index) =>
            <div key={index} className="pt-6" data-id="chxpc0n52" data-path="components/Features.js">
                <div className="flow-root bg-[var(--bg-color)] rounded-lg px-6 pb-8 card-hover" data-id="651uqh5ny" data-path="components/Features.js"> {/* Use CSS Variable */}
                  <div className="-mt-6" data-id="mzmlq9ugk" data-path="components/Features.js">
                    <div data-id="0bn3bp4at" data-path="components/Features.js">
                      {/* Gradient uses CSS vars, should adapt */}
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-md shadow-lg" data-id="rtte28otl" data-path="components/Features.js">
                        <i className={`fas ${feature.icon} text-white text-xl`} data-id="ism3odxfq" data-path="components/Features.js"></i>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-[var(--text-color)] tracking-tight" data-id="nq7ae6njn" data-path="components/Features.js">{feature.title}</h3> {/* Use CSS Variable */}
                    <p className="mt-5 text-base text-[var(--gray)]" data-id="znk2z4si9" data-path="components/Features.js"> {/* Use CSS Variable */}
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};
