const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const faqs = [
  {
    question: "Do I need any coding experience for this course?",
    answer: "Absolutely not! This course is specifically designed for people with no coding background. We focus on visual tools and platforms that don't require you to write code."
  },
  {
    question: "How long does it take to complete the course?",
    answer: "The course contains approximately 15 hours of video content. Most students complete it in 3-4 weeks when dedicating 4-5 hours per week. However, you have lifetime access, so you can go at your own pace."
  },
  {
    question: "What tools will I learn to use?",
    answer: "You'll learn popular no-code platforms like Zapier, Airtable, Bubble, and Webflow, as well as AI tools like OpenAI's GPT, Midjourney, and various automation platforms. All tools either have free tiers or trial periods for learning purposes."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Yes, Premium plan students receive a certificate of completion. Self-paced students can purchase a certificate for an additional fee upon course completion."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Absolutely. We offer a 30-day money-back guarantee. If you're not completely satisfied with the course, simply email our support team within 30 days of purchase for a full refund."
  },
  {
    question: "Do I get lifetime access to the course materials?",
    answer: "Yes, you receive lifetime access to all course materials, including any future updates and improvements we make to the curriculum."
  }];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--bg-color)] text-[var(--text-color)]" data-id="wvke9hjli" data-path="components/FAQ.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="yqokpn9xp" data-path="components/FAQ.js">
        <div className="text-center" data-id="x7gzg0hix" data-path="components/FAQ.js">
          <h2 className="text-base font-semibold tracking-wide uppercase text-[var(--primary)]" data-id="6yqmqvugw" data-path="components/FAQ.js">FAQ</h2> {/* Use CSS Variable */}
          <p className="mt-2 text-3xl font-extrabold sm:text-4xl" data-id="q5io4f9lr" data-path="components/FAQ.js"> {/* Inherits text color */}
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="krlf7anmv" data-path="components/FAQ.js"> {/* Use CSS Variable */}
            Everything you need to know about the course and enrollment.
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
          <h3 className="text-lg font-medium text-[var(--text-color)]" data-id="bd0yn1p39" data-path="components/FAQ.js">Still have questions?</h3> {/* Use CSS Variable */}
          <p className="mt-2 text-base text-[var(--gray)]" data-id="76ic2v4xn" data-path="components/FAQ.js"> {/* Use CSS Variable */}
            If you cannot find an answer to your question in our FAQ, feel free to contact us.
          </p>
          {/* Use CSS variables for the gradient */}
          <a
            href="#"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 button-primary" data-id="8cs3q8oe8" data-path="components/FAQ.js">

            Contact Support
          </a>
        </div>
      </div>
    </section>);

};
