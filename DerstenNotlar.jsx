// tailwind kurarken npx tailwindcss init komutu tailwind config dosyası oluturuyor.
// https://flowbite.com/docs/components/forms/ sitesinden input kısmını aldık formumuz için.
// https://transform.tools/html-to-jsx sitesinde jsx formatına className htmlFor vs gibi düzenledik.
// [ ] ile spesifik özellik tanımlayabiliyoruz. w-[300px]  dark:bg-[#1c1c1c]
// Tailwind CSS IntelliSense eklentiyi yükle. snippet.
// btn-danger(batın dancır. :) )
//! dark:hover:text-white dark mode da hover da text ler beyaz olsun yani dark: dark mode da gecerli classlar.
// dark mode un çalışması için https://tailwindcss.com/docs/dark-mode  tailwind.config.js module.exports = {darkMode: 'class',}eklenmeli.
// <!DOCTYPE html> <html class="dark" lang="en"></html> html e dark mode ekliyoruz bütün sayfada oluşması için bunu switch düğme ile user aç kapa yapabilmeli ama biz manuel yaptık suan.
// navbar ı https://tailwind-elements.com/docs/standard/navigation/navbar/  aldık html to jsx e çevirdik. className vs.
// <div className="h-[52px]"></div> //! navbar fixed oldugundan akıştan çıktıve formun üst kısmı navbar altında kaldı bunu düzeltmek içinde navbar ınaltına boşbir div açıp ona bir height verdik ki bunu çözelim. h-[52px] inceleden yüksekligini bulduk ve degeri verdik.
//  <h5 className="mr-2 capitalize">{currentUser.displayName}</h5> Tailwind de h1...6 nın boyutu aynı sadece seo açısından yazmak lazım boyutlandırma içinde text-2xl gibi boyutlandırma verebiliyoruz.
// Auth = yetkilendirme , Authentication = Kimlik dogrulama
// Authentication firebase in hazır methodlarıy user ları kendi sistemine kaydetmemizi saglıyor. ayrıca login işlemlerinde vs user ı bize dönüyor ve evet bu kullanıcı mevcut diyor yetkiyi verebilirsin sitende gezinebilir diyoruz.bu user var kayıtlı ise o zaman sitede istedigi yerleri gezinebilir.
// AuthContext dosyası js veya jsx olabilir.

/* <button type="submit"></button> <button type="button"></button> 
Formun içinde birden fazla buton varsa formu gönderim işlemi yapacak butonun type ı submit olmalı diğer buton type button olmalı ikiside submit olursa ikiside formu göndermeye çalışır. yada birini formun dışına alarakta çözebiliriz.
*/
//!  <BrowserRouter> ın kapsamı dışında navigate kullanamıyoruz bu yüzden index.js ye  <BrowserRouter> ı sarmalladık.
// toastify ı index.js ye import edilmeli import "react-toastify/dist/ReactToastify.css";
// kullanırken <ToastContainer /> ı en üst katmana ekliyoruz  index.js yada app.js ye.
// to={-1} geldigin sayfaya geri dön.  <Link to={-1} className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
