const Testimonials = () => {
  const testimonials = [
  {
    content: "This course completely transformed how I approach my work. I've automated 70% of my repetitive tasks using the techniques I learned, saving me hours every week.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    content: "As someone with zero coding background, I was skeptical at first. But the step-by-step approach made it incredibly easy to follow along and build real applications.",
    author: "Michael Chen",
    role: "Operations Manager",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    content: "The AI integration section alone was worth the price of admission. I've built a custom AI assistant that handles customer queries, saving my team countless hours.",
    author: "Elena Rodriguez",
    role: "Customer Success Lead",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "I've taken several no-code courses before, but none were as comprehensive or practical as this one. The real-world applications make all the difference.",
    author: "David Patel",
    role: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }];


  return (
    <section id="testimonials" className="py-20 bg-white" data-id="1jtkuejhs" data-path="components/Testimonials.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="z7fzjjbep" data-path="components/Testimonials.js">
        <div className="text-center" data-id="fns00hf1l" data-path="components/Testimonials.js">
          <h2 className="text-base font-semibold tracking-wide uppercase text-purple-600" data-id="zvvm230p1" data-path="components/Testimonials.js">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="w4gix3z6k" data-path="components/Testimonials.js">
            Hear From Our Students
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto" data-id="hdr35lvmd" data-path="components/Testimonials.js">
            Don't just take our word for it. See how this course has transformed the way our students work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2" data-id="825tgu463" data-path="components/Testimonials.js">
          {testimonials.map((testimonial, index) =>
          <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300" data-id="vvsbvm1ga" data-path="components/Testimonials.js">
              <div className="relative" data-id="9r722s37n" data-path="components/Testimonials.js">
                <div className="text-gray-500" data-id="sd9li0rrb" data-path="components/Testimonials.js">
                  <i className="fas fa-quote-left text-3xl text-purple-200 absolute -top-4 -left-2" data-id="cp0rlwvhq" data-path="components/Testimonials.js"></i>
                  <p className="text-lg relative z-10 italic" data-id="m1aya3sed" data-path="components/Testimonials.js">{testimonial.content}</p>
                </div>
                <div className="mt-6 flex items-center" data-id="y7nvdn985" data-path="components/Testimonials.js">
                  <div className="flex-shrink-0" data-id="zqq0jwmwl" data-path="components/Testimonials.js">
                    <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.author} data-id="ydl67n5cw" data-path="components/Testimonials.js" />

                  </div>
                  <div className="ml-4" data-id="8c4tjw6ob" data-path="components/Testimonials.js">
                    <div className="text-base font-medium text-gray-900" data-id="a2tl94zy6" data-path="components/Testimonials.js">{testimonial.author}</div>
                    <div className="text-sm text-purple-600" data-id="icq4stk16" data-path="components/Testimonials.js">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center" data-id="f9ihz0fex" data-path="components/Testimonials.js">
          <div className="inline-flex items-center space-x-2 text-purple-600" data-id="wd3kgqggv" data-path="components/Testimonials.js">
            <span className="text-lg font-medium" data-id="jkmc5xsga" data-path="components/Testimonials.js">Join them and transform your workflow today</span>
            <i className="fas fa-arrow-right" data-id="lpdxd9ofn" data-path="components/Testimonials.js"></i>
          </div>
        </div>
      </div>
    </section>);

};