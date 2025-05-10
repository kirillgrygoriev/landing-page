const Testimonials = ({ openPopup }) => {
  const testimonials = [
  {
    /*test: "assets/example_of_testimonial_1.jpg" */
    /* content: "This course completely transformed how I approach my work. I've automated 70% of my repetitive tasks using the techniques I learned, saving me hours every week.", */
    screenshotSrc: "assets/testimonials/example_of_testimonial_1.jpg",
    author: "Олексій Колесніков",
    role: "Manual QA Engineer",
    avatar: "assets/testimonials/avatar_1.jpeg"
  },
  {
    /*test: "assets/example_of_testimonial_2.jpg" */
    // content: "As someone with zero coding background, I was skeptical at first. But the step-by-step approach made it incredibly easy to follow along and build real applications.",
    screenshotSrc: "assets/testimonials/example_of_testimonial_2.jpg",
    author: "Вадим Смолкін",
    role: "Head of Data Analytics Department",
    avatar: "assets/testimonials/avatar_2.jpeg"
  },
  {
    /*test: "assets/example_of_testimonial_3.jpg" */
    // content: "The AI integration section alone was worth the price of admission. I've built a custom AI assistant that handles customer queries, saving my team countless hours.",
    screenshotSrc: "assets/testimonials/example_of_testimonial_3.jpg",
    author: "Ангеліна Стинич",
    role: "Executive Assistant",
    avatar: "assets/testimonials/avatar_3.jpeg"
  },
  {
    /*test: "assets/example _of_testimonial_4.jpg" */
    // content: "I've taken several no-code courses before, but none were as comprehensive or practical as this one. The real-world applications make all the difference.",
    screenshotSrc: "assets/testimonials/example_of_testimonial_4.jpg",
    author: "Анастасія Григор'єва",
    role: "Founder & CEO at LeBoxiq",
    avatar: "assets/testimonials/avatar_4.jpeg"
  }];


  return (
    <section id="testimonials" className="py-20 bg-[var(--bg-color)] text-[var(--text-color)]" data-id="1jtkuejhs" data-path="components/Testimonials.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="z7fzjjbep" data-path="components/Testimonials.js">
        <div className="text-center" data-id="fns00hf1l" data-path="components/Testimonials.js">
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl" data-id="w4gix3z6k" data-path="components/Testimonials.js"> {/* Inherits text color */}
            Відгуки про курс
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="hdr35lvmd" data-path="components/Testimonials.js"> {/* Use CSS Variable */}
            Що говорять ті, хто вже пройшов навчання
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2" data-id="825tgu463" data-path="components/Testimonials.js">
          {testimonials.map((testimonial, index) =>
          <div key={index} className="bg-[var(--card-bg)] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[var(--border-color)]" data-id="vvsbvm1ga" data-path="components/Testimonials.js"> {/* Use CSS Vars & add border */}
              <div className="relative" data-id="9r722s37n" data-path="components/Testimonials.js">
              <div className="mb-4">
                <img 
                  src={testimonial.screenshotSrc}
                  alt={`Feedback from ${testimonial.author}`}
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
                <div className="mt-6 flex items-center" data-id="y7nvdn985" data-path="components/Testimonials.js">
                  <div className="flex-shrink-0" data-id="zqq0jwmwl" data-path="components/Testimonials.js">
                    <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.author} data-id="ydl67n5cw" data-path="components/Testimonials.js" />

                  </div>
                  <div className="ml-4" data-id="8c4tjw6ob" data-path="components/Testimonials.js">
                    <div className="text-base font-medium text-[var(--text-color)]" data-id="a2tl94zy6" data-path="components/Testimonials.js">{testimonial.author}</div> {/* Use CSS Variable */}
                    <div className="text-sm text-[var(--primary)]" data-id="icq4stk16" data-path="components/Testimonials.js">{testimonial.role}</div> {/* Use CSS Variable */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center" data-id="f9ihz0fex" data-path="components/Testimonials.js">
          <button 
            onClick={(e) => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'event': 'click_cta',
                'button_text': 'Приєднуйся до них і зміни свій підіхід до роботи сьогодні',
                'button_location': 'testimonials',
                'page_path': window.location.pathname
              });
              openPopup();
            }}
             
            className="inline-flex items-center space-x-2 text-[var(--primary)] cursor-pointer hover:underline focus:outline-none transition-all duration-300"
          >
            <span className="text-lg font-medium">Приєднуйся до них і зміни свій підіхід до роботи сьогодні</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>);

};
