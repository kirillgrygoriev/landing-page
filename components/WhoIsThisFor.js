const WhoIsThisFor = () => {
  // Split text for bolding
  const targetAudience = [
    {
      icon: "fa-binoculars",
      boldText: "Із захопленням спостерігаєш,",
      restText: " як світ трансформується під впливом новітніх технологій та відчуваєш, що настав час опанувати можливості AI, інтегрувати їх у повсякденну роботу, або навіть змінити професію"
    },
    {
      icon: "fa-briefcase",
      boldText: "Підприємець або власник бізнесу,",
      restText: " який прагне вивільнити час від операційних завдань і зосередитись на стратегії росту та розвитку"
    },
    {
      icon: "fa-tasks",
      boldText: "Менеджер проектів,",
      restText: " який шукає інноваційні методи оптимізації своєї роботи та робочих процесів команди, без залучення спеціалістів із знанням програмування"
    },
    {
      icon: "fa-user-tie",
      boldText: "Фрілансер,",
      restText: " який самостійно керує всіма аспектами своєї діяльності та постійно відчуває інформаційне перевантаження"
    },
    {
      icon: "fa-check-double",
      boldText: "Прихильник методології Getting Things Done (GTD),",
      restText: " який вже знайомий з принципами продуктивності, але прагне автоматизувати свою систему за допомогою сучасних технологій"
    }
  ];

  return (
    React.createElement('section', { id: 'who-is-this-for', className: 'pt-16 pb-12 md:pb-20 bg-gray-50 dark:bg-gray-800' }, // Added pt-16 back
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('div', { className: 'text-center mb-12 md:mb-16' },
          React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-900 dark:text-white' },
            'ЦЕЙ КУРС ДЛЯ ТЕБЕ, ЯКЩО ТИ:'
          )
        ),
        React.createElement('div', { className: 'grid grid-cols-1 gap-6 max-w-3xl mx-auto' }, // Reduced gap slightly
          targetAudience.map((item, index) =>
            // Changed to flex layout for icon + text alignment
            React.createElement('div', {
              key: index,
              className: 'flex items-center bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md card-hover' // Use flex, adjust padding
            },
              // Icon container: Ensure fixed size for perfect circle
              React.createElement('div', {
                className: 'flex-shrink-0 inline-flex items-center justify-center h-12 w-12 p-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full shadow-lg mr-4 sm:mr-6' // Added fixed size, margin-right
              },
                React.createElement('i', { className: `fas ${item.icon} text-white text-xl sm:text-2xl` }) // Adjusted icon size slightly
              ),
              // Text container
              React.createElement('div', null,
                React.createElement('p', { className: 'text-base text-gray-700 dark:text-gray-300' },
                  React.createElement('strong', { className: 'font-semibold text-gray-900 dark:text-white' }, item.boldText),
                  item.restText
                )
              )
            )
          )
        )
      )
    )
  );
};
