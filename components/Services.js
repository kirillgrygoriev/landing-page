const Services = () => {
  const services = [
    {
      icon: "fa-robot",
      title: "Інтеграція AI в бізнес-процеси",
      description: "Впровадження штучного інтелекту для автоматизації рутинних задач та оптимізації прийняття рішень."
    },
    {
      icon: "fa-gears",
      title: "Налаштування ClickUp",
      description: "Професійне налаштування ClickUp для ефективного управління задачами та проєктами вашої команди."
    },
    {
      icon: "fa-arrows-spin",
      title: "Автоматизація через Make.com",
      description: "Створення сценаріїв автоматизації для з'єднання різних сервісів та оптимізації робочих процесів."
    },
    {
      icon: "fa-brain",
      title: "Оптимізація операційних процесів",
      description: "Аналіз та вдосконалення існуючих бізнес-процесів для масштабування компаній від 2 до 50 співробітників."
    }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Наші послуги
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto">
            Комплексні рішення для оптимізації бізнес-процесів з використанням AI та no-code інструментів
          </p>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-[var(--bg-color)] rounded-lg px-6 pt-8 pb-8 h-full card-hover relative">
                  <div className="absolute -top-6 left-6">
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-md shadow-lg w-12">
                      <i className={`fas ${service.icon} text-white text-xl`}></i>
                    </span>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-lg font-medium text-[var(--text-color)] tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-[var(--gray)]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};