const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    /* Added dark:bg-gray-900 for consistency, though it's the default */
    <footer className="bg-gray-900 dark:bg-gray-900" data-id="as9165r6m" data-path="components/Footer.js">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" data-id="i641xeitt" data-path="components/Footer.js">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="apzdi42bf" data-path="components/Footer.js">
          <div className="space-y-8 xl:col-span-1" data-id="xrhe5ji7d" data-path="components/Footer.js">
            <div className="md:mt-0" data-id="2e8rk9sfn" data-path="components/Footer.js">
              <ul className="space-y-4" data-id="jq9ayyfsl" data-path="components/Footer.js">
                <li data-id="0j8x1q2g" data-path="components/Footer.js">
                  <p className="text-base text-gray-400" >ФОП Григор'єва Анастасія Андріївна</p>
                </li>
                <li data-id="0j8x1q2g" data-path="components/Footer.js">
                  <p className="text-base text-gray-400" >ЄДРПОУ 3431309300</p>
                </li>
                <li data-id="0j8x1q2g" data-path="components/Footer.js">
                  <p className="text-base text-gray-400" >kirill.grygoriev@gmail.com</p>
                </li>
              </ul>
            </div>         
            {/* <div className="flex space-x-6" data-id="5rm27h6f3" data-path="components/Footer.js"> */}
              {/* Icons use text color, which is already suitable */}
              {/* <a href="#" className="text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-id="2t21b90li" data-path="components/Footer.js">
                <i className="fab fa-facebook text-xl" data-id="1z7ixgs0q" data-path="components/Footer.js"></i>
             </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-id="zycokghxq" data-path="components/Footer.js">
                <i className="fab fa-instagram text-xl" data-id="kbjhl9l5m" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-id="2e8rk9sfn" data-path="components/Footer.js">
                <i className="fab fa-twitter text-xl" data-id="mtjpwocev" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-id="yknee8f5k" data-path="components/Footer.js">
                <i className="fab fa-linkedin text-xl" data-id="2pq7i786d" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-id="a6fbjukm3" data-path="components/Footer.js">
                <i className="fab fa-youtube text-xl" data-id="c5qh9e4tr" data-path="components/Footer.js"></i>
              </a>
            {/* </div> */}
          </div>

          <div className="mt-6 md:mt-0" data-id="2e8rk9sfn" data-path="components/Footer.js">
            <ul className="space-y-4" data-id="jq9ayyfsl" data-path="components/Footer.js">           
              <li data-id="v8rm0he71" data-path="components/Footer.js">
                <a href="/privacy-policy.html" className="text-base text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300 underline" data-id="pzkan6sls" data-path="components/Footer.js"> {/* Explicit dark color */}
                  Політика конфіденційності
                </a>
              </li>
              <li data-id="gqzx8e5xl" data-path="components/Footer.js">
                <a href="/terms-of-service.html" className="text-base text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300 underline" data-id="cheitnldd" data-path="components/Footer.js"> {/* Explicit dark color */}
                  Публічна оферта
                </a>
              </li>
            </ul>

                {/* Payment methods logos */}
            <div className="mt-12 flex justify-center md:justify-start">
              <img src="assets/payments-logos_desktop.webp" alt="Payment Methods" className="max-h-8 w-auto" />
            </div>
          </div>
            
        </div>
        <div className="mt-12 text-start" data-id="2e8rk9sfn" data-path="components/Footer.js">
          {/* Logo - Always white */}
          <img src="assets/flowsuite_logo_white.png" alt="Flowsuite Logo" className="h-8 w-auto logo-img" data-id="footer-logo-white" data-path="components/Footer.js" />
          <p className="text-gray-400 dark:text-gray-400 text-base mt-6" data-id="rfopl1rzn" data-path="components/Footer.js"> {/* Explicit dark color */}
            Створюємо AI-рішення, які змінять ваш підхід до ведення бізнесу.
          </p>
          <p className="text-gray-400 dark:text-gray-400 text-base mt-2" data-id="rfopl1rzn" data-path="components/Footer.js"> {/* Explicit dark color */}
            Трансформуємо операційний хаос в інтелектуальні системи.
          </p>
        </div>


        <div className="mt-12 border-t border-gray-700 dark:border-gray-700 pt-8 pb-8" data-id="9by6hpxu1" data-path="components/Footer.js"> {/* Explicit dark border */}
          <p className="text-base text-gray-400 dark:text-gray-400 text-center" data-id="mdhzufwed" data-path="components/Footer.js"> {/* Explicit dark color */}
            &copy; {currentYear} Опануй No-code та AI Автоматизації.
          </p>
          <p className="text-base text-gray-400 dark:text-gray-400 text-center pt-2" data-id="mdhzufwed" data-path="components/Footer.js"> {/* Explicit dark color */}
            Всі права захищено. Будь-яке копіювання матеріалів дозволяється тільки з погодження правовласників.
          </p>
        </div>
      </div>
    </footer>);

};
