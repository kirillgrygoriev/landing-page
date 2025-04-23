const Expertise = () => {
  const expertise = [
    {
      title: "ClickUp Ambassador",
      description: "Сертифікований експерт з налаштування та оптимізації ClickUp для малого та середнього бізнесу"
    },
    {
      title: "Make.com Expert",
      description: "Спеціаліст з розробки сценаріїв автоматизації бізнес-процесів через Make.com"
    },
    {
      title: "AI Інтеграції",
      description: "Впровадження штучного інтелекту в операційні процеси для підвищення продуктивності"
    },
    {
      title: "Масштабування процесів",
      description: "Досвід налаштування операційних систем для компаній від 2 до 50+ співробітників"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Наша експертиза
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto">
            Спеціалізуємось на впровадженні рішень, що підвищують ефективність вашого бізнесу
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <div key={index} className="bg-[var(--card-bg)] overflow-hidden shadow rounded-lg border border-[var(--border-color)] card-hover">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-[var(--text-color)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--gray)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};