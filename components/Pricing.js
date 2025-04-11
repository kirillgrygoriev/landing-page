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
    <section id="pricing" className="py-20 bg-gray-50" data-id="ep7ag1jkm" data-path="components/Pricing.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="u176umxbd" data-path="components/Pricing.js">
        <div className="text-center" data-id="rwz8avuvj" data-path="components/Pricing.js">
          <h2 className="text-base font-semibold tracking-wide uppercase text-purple-600" data-id="fc4hye12u" data-path="components/Pricing.js">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="rd8o1bamp" data-path="components/Pricing.js">
            Choose Your Learning Path
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto" data-id="4zb40duco" data-path="components/Pricing.js">
            Invest in your future with flexible pricing options designed to fit your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-x-8 max-w-4xl mx-auto" data-id="n1uq2lbfu" data-path="components/Pricing.js">
          {pricingPlans.map((plan, index) =>
          <div
            key={index}
            className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
            plan.mostPopular ? 'border-2 border-purple-500' : 'border border-gray-200'}`
            } data-id="9b7ry35pd" data-path="components/Pricing.js">

              {plan.mostPopular &&
            <div className="absolute top-0 inset-x-0 transform translate-y-px" data-id="p0ph93l7m" data-path="components/Pricing.js">
                  <div className="flex justify-center transform -translate-y-1/2" data-id="jchmko6wb" data-path="components/Pricing.js">
                    <span className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white" data-id="sa058f9z9" data-path="components/Pricing.js">
                      Most Popular
                    </span>
                  </div>
                </div>
            }
              <div className="bg-white p-8" data-id="ptxqpintr" data-path="components/Pricing.js">
                <div className="flex items-center justify-between" data-id="jkgubyvax" data-path="components/Pricing.js">
                  <h3 className="text-2xl font-bold text-gray-900" data-id="tixl3rqd0" data-path="components/Pricing.js">{plan.name}</h3>
                  <p className="flex items-baseline" data-id="9300emec1" data-path="components/Pricing.js">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900" data-id="2tg2laf2i" data-path="components/Pricing.js">{plan.price}</span>
                  </p>
                </div>
                <p className="mt-4 text-base text-gray-500" data-id="41ryxxwzv" data-path="components/Pricing.js">{plan.description}</p>
                <ul className="mt-6 space-y-4" data-id="iaa852naj" data-path="components/Pricing.js">
                  {plan.features.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex" data-id="9euuw0cf0" data-path="components/Pricing.js">
                      <i className="fas fa-check-circle flex-shrink-0 text-green-500 mt-1" data-id="1fhj0npmr" data-path="components/Pricing.js"></i>
                      <span className="ml-3 text-base text-gray-500" data-id="ibn5dku20" data-path="components/Pricing.js">{feature}</span>
                    </li>
                )}
                </ul>
                <div className="mt-8" data-id="jksg0il5z" data-path="components/Pricing.js">
                  <button
                  className={`w-full px-4 py-3 border rounded-md shadow-sm text-base font-medium ${plan.buttonClass} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`} data-id="u4bwyzixd" data-path="components/Pricing.js">
                    {plan.buttonText}
                  </button>
                </div>
                <p className="mt-4 text-xs text-center text-gray-500" data-id="8t2yrkye6" data-path="components/Pricing.js">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md max-w-4xl mx-auto" data-id="5tqkj4zyk" data-path="components/Pricing.js">
          <div className="px-6 py-8 md:p-10 lg:p-12" data-id="vgr6c3tb2" data-path="components/Pricing.js">
            <h3 className="text-2xl font-medium text-gray-900 text-center" data-id="dnkj26psy" data-path="components/Pricing.js">
              Team or Enterprise Discount
            </h3>
            <div className="mt-4 text-center" data-id="bjke134bp" data-path="components/Pricing.js">
              <p className="text-lg text-gray-500" data-id="1mzzvweds" data-path="components/Pricing.js">
                Looking to train your team? Get special pricing for groups of 5 or more.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center" data-id="8xtyb6taa" data-path="components/Pricing.js">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200" data-id="uxjmhk8pd" data-path="components/Pricing.js">

                Contact for Team Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};