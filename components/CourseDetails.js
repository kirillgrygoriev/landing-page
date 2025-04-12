const CourseDetails = () => {
  const modules = [
  {
    number: "01",
    title: "Foundations of No-Code Development",
    description: "Understand the no-code revolution and discover the best tools for different use cases.",
    lessons: [
    "Introduction to the No-Code Movement",
    "Choosing the Right Tools for Your Project",
    "No-Code vs Low-Code: Understanding the Difference",
    "Setting Up Your First No-Code Project"]

  },
  {
    number: "02",
    title: "AI Basics for Automation",
    description: "Learn how AI can be leveraged to automate tasks without technical expertise.",
    lessons: [
    "AI Fundamentals for Non-Developers",
    "Introduction to Natural Language Processing",
    "Computer Vision in Automation",
    "AI Decision Making Systems"]

  },
  {
    number: "03",
    title: "Building Automated Workflows",
    description: "Create end-to-end workflows that run on autopilot and save you hours every week.",
    lessons: [
    "Workflow Mapping and Optimization",
    "Trigger-Based Automation Systems",
    "Data Collection and Processing",
    "Error Handling in Automated Systems"]

  },
  {
    number: "04",
    title: "Advanced No-Code Applications",
    description: "Take your skills to the next level by building sophisticated applications without coding.",
    lessons: [
    "Creating Custom Databases",
    "User Authentication and Access Control",
    "Building Interactive Dashboards",
    "Mobile App Development with No-Code"]

  },
  {
    number: "05",
    title: "AI Integration Masterclass",
    description: "Connect powerful AI services to your no-code applications for maximum impact.",
    lessons: [
    "Integration with OpenAI Services",
    "Image and Speech Recognition",
    "Predictive Analytics Implementation",
    "Building AI-Powered Chatbots"]

  },
  {
    number: "06",
    title: "Scaling and Optimization",
    description: "Learn how to scale your automations and handle increased complexity as you grow.",
    lessons: [
    "Performance Optimization Techniques",
    "Scaling Your Automated Systems",
    "Monitoring and Analytics",
    "Continuous Improvement Strategies"]

  }];


  return (
    <section id="curriculum" className="py-20 bg-[var(--card-bg)] text-[var(--text-color)]" data-id="1b1hu14le" data-path="components/CourseDetails.js"> {/* Use CSS Variables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="jfama0ur0" data-path="components/CourseDetails.js">
        <div className="text-center" data-id="tai82edto" data-path="components/CourseDetails.js">
          <h2 className="text-base font-semibold tracking-wide uppercase text-[var(--primary)]" data-id="14lj7hdtj" data-path="components/CourseDetails.js">Curriculum</h2> {/* Use CSS Variable */}
          <p className="mt-2 text-3xl font-extrabold sm:text-4xl" data-id="hgl1y5jz4" data-path="components/CourseDetails.js"> {/* Inherits text color */}
            Course Modules
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto" data-id="7ms3i86w1" data-path="components/CourseDetails.js"> {/* Use CSS Variable */}
            A comprehensive curriculum designed to take you from beginner to expert in no-code development and AI automation.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12" data-id="zvdq6ux8a" data-path="components/CourseDetails.js">
          {modules.map((module, index) =>
          <div key={index} className="relative p-8 bg-[var(--bg-color)] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)]" data-id="6yuhv4r9g" data-path="components/CourseDetails.js"> {/* Use CSS Vars & add border */}
              {/* Gradient uses CSS vars, should adapt */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-xl shadow-lg" data-id="49slkhcgn" data-path="components/CourseDetails.js">
                {module.number}
              </div>
              <div className="pl-6" data-id="ctlofezx0" data-path="components/CourseDetails.js">
                <h3 className="text-xl font-semibold text-[var(--text-color)] mt-2" data-id="261tjohhc" data-path="components/CourseDetails.js">{module.title}</h3> {/* Use CSS Variable */}
                <p className="mt-3 text-base text-[var(--gray)]" data-id="a4ke4aimi" data-path="components/CourseDetails.js">{module.description}</p> {/* Use CSS Variable */}
                <ul className="mt-4 space-y-2" data-id="s4aesiv5g" data-path="components/CourseDetails.js">
                  {module.lessons.map((lesson, lessonIndex) =>
                <li key={lessonIndex} className="flex items-start" data-id="uxvgna7il" data-path="components/CourseDetails.js">
                      <div className="flex-shrink-0" data-id="934a13bq3" data-path="components/CourseDetails.js">
                        <i className="fas fa-check-circle text-[var(--primary)] mt-1" data-id="1p76db82j" data-path="components/CourseDetails.js"></i> {/* Use CSS Variable */}
                      </div>
                      <p className="ml-2 text-sm text-[var(--gray)]" data-id="rr2097kd3" data-path="components/CourseDetails.js">{lesson}</p> {/* Use CSS Variable */}
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center" data-id="on8gkqxz5" data-path="components/CourseDetails.js">
          {/* Use CSS variables for the gradient */}
          <a href="#pricing" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 button-primary" data-id="lp3axjkrh" data-path="components/CourseDetails.js">
            Enroll Now and Start Learning
          </a>
        </div>
      </div>
    </section>);

};
