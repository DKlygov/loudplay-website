import langDB from './../lang/lang.json';

export default class LanguageManipulator {

        static setDefaultLanguage() {
            if(!this.getCurrentLanguage()) {
                localStorage.setItem('lang')
            }
        }

        static getCurrentLanguage() {
            return localStorage.getItem('lang')
        }

        static getPagename() {
            let pageName = window.location.pathname.split('/').pop().replace('/', '').replace('.html', '');
            return pageName;
        }

        static getElementsToTranslate(pageName) {
            switch (pageName) {
                case 'main':
                    return ['.navbar-link', '#navbar-download-link-content', "#main-header", ".logos-element-header", ".page-content-subheader", ".page-content-subheader-left", ".page-content-subheader-right", "#download-link-content", ".skeleton-button-text", "#questions", ".questions-text-desktop", ".questions-text-mobile", ".answer-text-desktop", "#illidan-speaks-header", "#footer-download-link-content"];
                    break;
                case 'technology':
                    return [".navbar-link", "#navbar-download-link-content", "#page-1-rectangle-element-header", ".page-1-text-content", ".page-1-rectangle-element-text", ".page-container-text-header", "page-container-text-paragraph", ".mobile-header", ".rectangle-text-mobile", ".rectangle-outside-text", ".page-2-header", ".mobile-page-bigpicture-header", ".mobile-bigpicture-text"];
                    break;
                case 'download':
                    return ["#download-header", "download-subheader", ".download-option-element-text"];
                    break;
                case 'about':
                    return [".navbar-link", "#navbar-download-link-content", ".about-main-page-title", "about-main-page-text", ".radiant-title", ".heroes-left-text", '.heroes-right-text', ".dire-title", ".process-title", ".pratnership-title", ".partner-text"];
                    break;
            }
        }

        static translateTo(lang, pageName, elementsToTranslate) {

        elementsToTranslate.forEach(element => {
            let elementsArray = document.querySelectorAll(`${element}`);
            let translationArray = langDB[pageName][lang][`${element}`];
            let counter = 0;

            elementsArray.forEach(item => {
                item.innerHTML = JSON.stringify(translationArray[counter]).replace(/"/g, '');
                counter++;
            });
        });
    }

}