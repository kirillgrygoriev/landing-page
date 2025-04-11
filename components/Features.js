const Features = () => {
  const features = [
  {
    icon: "fa-wand-magic-sparkles",
    title: "No-Code Magic",
    description: "Learn to build powerful applications and workflows without writing a single line of code."
  },
  {
    icon: "fa-robot",
    title: "AI Automation",
    description: "Harness the power of AI to automate repetitive tasks and streamline your workflow."
  },
  {
    icon: "fa-bolt",
    title: "Productivity Boost",
    description: "Save hours each week by implementing smart automation strategies."
  },
  {
    icon: "fa-brain",
    title: "AI-Powered Insights",
    description: "Leverage machine learning to extract valuable insights from your data."
  },
  {
    icon: "fa-diagram-project",
    title: "Workflow Integration",
    description: "Seamlessly connect different tools and create end-to-end automated processes."
  },
  {
    icon: "fa-code",
    title: "Code-Free Development",
    description: "Build sophisticated applications using intuitive visual interfaces."
  }];


  return (
    <section id="features" className="py-20 bg-white" data-id="4g5go6kdw" data-path="components/Features.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="jfbf2l396" data-path="components/Features.js">
        <div className="text-center" data-id="103tahxvo" data-path="components/Features.js">
          <h2 className="text-base font-semibold tracking-wide uppercase text-purple-600" data-id="0hlznj15m" data-path="components/Features.js">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="9mxjrr3u2" data-path="components/Features.js">
            What You'll Learn
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto" data-id="kjdeq8mxk" data-path="components/Features.js">
            Master the latest no-code tools and AI automation techniques to transform your workflow.
          </p>
        </div>

        <div className="mt-16" data-id="0jw31itrg" data-path="components/Features.js">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-id="e2sfzc8hm" data-path="components/Features.js">
            {features.map((feature, index) =>
            <div key={index} className="pt-6 card-hover" data-id="chxpc0n52" data-path="components/Features.js">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8" data-id="651uqh5ny" data-path="components/Features.js">
                  <div className="-mt-6" data-id="mzmlq9ugk" data-path="components/Features.js">
                    <div data-id="0bn3bp4at" data-path="components/Features.js">
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md shadow-lg" data-id="rtte28otl" data-path="components/Features.js">
                        <i className={`fas ${feature.icon} text-white text-xl`} data-id="ism3odxfq" data-path="components/Features.js"></i>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight" data-id="nq7ae6njn" data-path="components/Features.js">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500" data-id="znk2z4si9" data-path="components/Features.js">
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