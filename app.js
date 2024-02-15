import header from "./js/headerClass.js";
import tools from "./js/toolsClass.js";
import testimonials from "./js/testimonialsClass.js";
import language from "./js/languageClass.js";
import { setResumeFile } from "./js/functions/setResumeFile.js";
import { setCurrentYear } from "./js/functions/setCurrentYear.js";

window.addEventListener("DOMContentLoaded", () => {
     header.init();
     tools.init();
     testimonials.init();
     setCurrentYear();
     language.init();
});
