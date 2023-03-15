/** @type {import('tailwindcss').Config} */
// https://tailwind-elements.com/docs/standard/getting-started/quick-start/ content kısmını eklerken dikkat et uzantılar eksik.
// "./src/**/*.{js,jsx,ts,tsx}", src içerisinde js jsx ts=typescript tsx dosyalarını oku tanı. tailwind-elements sayfasında eksik uzantı var.
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  //! index.css kalıp lar var.
  //? kendi theme = tema ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.
    // https://tailwindcss.com/docs/customizing-colors
    // burda extend kısmına color larımızı koyuyoruz. extend din dışında tanımlarsak tailwindin kendi renklerini kullanamayız.theme yı kullan şu renkleride extend et demiş olduk.
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin")], //plugins = eklentiler. https://tailwind-elements.com/docs/standard/getting-started/quick-start/  npm install tw-elements
};

//! Content= Tailwind css ile geliştirme yaptığımız kaynakları belirttiğimiz kısımdır. Yani kısaca tailwind css class'larını kullandığımız dosya yollarını belirttiğimiz property'dir. Content property'sini yanlış veya eksik tanımlarsanız css çıktılarınız beklediğiniz gibi olmayacaktır.
//! Theme= Theme property'si tailwind css'i konfigüre ettiğimiz kısımdır. Örneğin çalıştığınız projenin ana rengi mavi ve siz tailwind css tarafında bu mavi rengi tanımlamak istiyorsanız config dosyanızda aşağıdaki değişiklikleri yapmanız yetecektir.
//! Plugins= Plugins kısmı da third party pluginleri eklediğimiz kısımdır. Tailwind CSS tarafından yayınlanmış offical pluginleri veya diğer geliştiricilerin yayınladığı pluginleri bu kısma ekliyoruz.
/* örn   plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
   */
