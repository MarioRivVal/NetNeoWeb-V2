class Language {
     constructor() {
          this.languageBoxEl = document.querySelector(".languages-box");
          this.userLanguage = navigator.language.split("-")[0];
     }

     selectLanguage() {
          this.languageBoxEl.addEventListener("click", (e) => {
               const target = e.target.parentElement;
               if (target.classList.contains("language-icon")) {
                    const language = target.dataset.lang;
                    this.userLanguage = language;
                    this.changeLanguage(this.userLanguage);
               }
          });
     }

     changeLanguage(lang) {
          location.href = `${lang}.html`;
     }

     init() {
          this.selectLanguage();
          // this.changeLanguage(this.userLanguage);
     }
}

export default new Language();
