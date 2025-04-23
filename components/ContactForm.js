const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут буде логіка відправки форми
    alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Зв'яжіться з нами
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--gray)] mx-auto">
            Маєте питання щодо наших послуг? Напишіть нам, і ми з радістю відповімо.
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)]">
                Ім'я
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md text-[var(--text-color)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)]">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md text-[var(--text-color)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)]">
                Повідомлення
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md text-[var(--text-color)]"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90"
              >
                Надіслати
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};