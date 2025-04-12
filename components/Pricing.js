const Pricing = () => {
  const pricingPlans = [
  {
    name: "Self-Paced",
    price: "$197",
    description: "Learn at your own pace with lifetime access to all course materials.",
    features: [
    "Full access to all 6 modules",
    "40+ video lessons",
    "Downloadable resources",
    "Project templates",
    "Access to future updates",
    "Community forum access"],

    mostPopular: false,
    buttonText: "Get Started",
    buttonClass: "bg-white text-purple-600 border-purple-600"
  },
  {
    name: "Premium",
    price: "$397",
    description: "The complete experience with mentorship and personalized feedback.",
    features: [
    "Everything in Self-Paced",
    "3 group coaching calls",
    "Project reviews & feedback",
    "Private community access",
    "1-on-1 strategy session",
    "Priority email support",
    "Certificate of completion"],

    mostPopular: true,
    buttonText: "Enroll Now",
    buttonClass: "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
  }];


  return (
    <section id="pricing" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]" data-id="ep7ag1jkm" data-path="components/Pricing.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="u176umxbd" data-path="components/Pricing.js">
        <div className="text-center" data-id="rwz8avuvj" data-path="components/Pricing.js">
          <h2 className="text-base font-semibold tracking-wide uppercase text-[var(--primary)]" data-id="fc4hye12u" data-path="components/Pricing.js">Pricing</h2> {/* Use CSS Variable */}
          <p className="mt-2 text-3xl font-extrabold sm:text-4xl" data-id="rd8o1bamp" data-path="components/Pricing.js"> {/* Inherits text color */}
            Choose Your Learning Path
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="4zb40duco" data-path="components/Pricing.js"> {/* Use CSS Variable */}
            Invest in your future with flexible pricing options designed to fit your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-x-8 max-w-4xl mx-auto" data-id="n1uq2lbfu" data-path="components/Pricing.js">
          {pricingPlans.map((plan, index) =>
          <div
            key={index}
            className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border ${
            plan.mostPopular ? 'border-2 border-[var(--primary)]' : 'border-[var(--border-color)]'}` // Use CSS Vars for borders
            } data-id="9b7ry35pd" data-path="components/Pricing.js">

              {plan.mostPopular &&
            <div className="absolute top-0 inset-x-0 transform translate-y-px" data-id="p0ph93l7m" data-path="components/Pricing.js">
                  <div className="flex justify-center transform -translate-y-1/2" data-id="jchmko6wb" data-path="components/Pricing.js">
                    {/* Use CSS variables for the gradient */}
                    <span className="inline-flex rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white" data-id="sa058f9z9" data-path="components/Pricing.js">
                      Most Popular
                    </span>
                  </div>
                </div>
            }
              <div className="bg-[var(--bg-color)] p-8" data-id="ptxqpintr" data-path="components/Pricing.js"> {/* Use CSS Variable */}
                <div className="flex items-center justify-between" data-id="jkgubyvax" data-path="components/Pricing.js">
                  <h3 className="text-2xl font-bold text-[var(--text-color)]" data-id="tixl3rqd0" data-path="components/Pricing.js">{plan.name}</h3> {/* Use CSS Variable */}
                  <p className="flex items-baseline" data-id="9300emec1" data-path="components/Pricing.js">
                    <span className="text-5xl font-extrabold tracking-tight text-[var(--text-color)]" data-id="2tg2laf2i" data-path="components/Pricing.js">{plan.price}</span> {/* Use CSS Variable */}
                  </p>
                </div>
                <p className="mt-4 text-base text-[var(--gray)]" data-id="41ryxxwzv" data-path="components/Pricing.js">{plan.description}</p> {/* Use CSS Variable */}
                <ul className="mt-6 space-y-4" data-id="iaa852naj" data-path="components/Pricing.js">
                  {plan.features.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex" data-id="9euuw0cf0" data-path="components/Pricing.js">
                      <i className="fas fa-check-circle flex-shrink-0 text-green-500 dark:text-green-400 mt-1" data-id="1fhj0npmr" data-path="components/Pricing.js"></i> {/* Keep dark variant for specific color */}
                      <span className="ml-3 text-base text-[var(--gray)]" data-id="ibn5dku20" data-path="components/Pricing.js">{feature}</span> {/* Use CSS Variable */}
                    </li>
                )}
                </ul>
                <div className="mt-8" data-id="jksg0il5z" data-path="components/Pricing.js">
                  {/* Use CSS variables for button styling where possible */}
                  <button
                  className={`w-full px-4 py-3 border rounded-md shadow-sm text-base font-medium 
                             ${plan.mostPopular 
                               ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white border-transparent' 
                               : 'bg-[var(--bg-color)] text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--card-bg)]'} 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]`} data-id="u4bwyzixd" data-path="components/Pricing.js">
                    {plan.buttonText}
                  </button>
                </div>
                <p className="mt-4 text-xs text-center text-[var(--gray)]" data-id="8t2yrkye6" data-path="components/Pricing.js"> {/* Use CSS Variable */}
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-16 bg-[var(--bg-color)] rounded-lg shadow-md max-w-4xl mx-auto border border-[var(--border-color)]" data-id="5tqkj4zyk" data-path="components/Pricing.js"> {/* Use CSS Vars & add border */}
          <div className="px-6 py-8 md:p-10 lg:p-12" data-id="vgr6c3tb2" data-path="components/Pricing.js">
            <h3 className="text-2xl font-medium text-[var(--text-color)] text-center" data-id="dnkj26psy" data-path="components/Pricing.js"> {/* Use CSS Variable */}
              Team or Enterprise Discount
            </h3>
            <div className="mt-4 text-center" data-id="bjke134bp" data-path="components/Pricing.js">
              <p className="text-lg text-[var(--gray)]" data-id="1mzzvweds" data-path="components/Pricing.js"> {/* Use CSS Variable */}
                Looking to train your team? Get special pricing for groups of 5 or more.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center" data-id="8xtyb6taa" data-path="components/Pricing.js">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary)] bg-[var(--card-bg)] hover:bg-[var(--border-color)]" data-id="uxjmhk8pd" data-path="components/Pricing.js"> {/* Use CSS Variables */}

                Contact for Team Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};
