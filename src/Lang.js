const default_lang = 'ru';
const languages = {
    ru: {
        // Отображение
        short_lang: "Рус",
        lang: "Русский",
        // Заголовки
        documents_dashboard_title: "Документация на систему",
        documents_cnc_title: "Документация на ЧПУ",
        machine: "Станок",
        machine_main_info_title: "Основная информация",
        machine_advanced_info_title: "Дополнительная информация",
        // Страницы
        home_page: "На главную",
        docs_page: "Документация",
        not_found: "Страница не найдена!адинадинадин",
        // 
        loading: "Загрузка",
        load_error: "Ошибка загрузки!",
        waiting_data: "Ожидание данных",
        connected: "Соединение установлено",
        last_update: "Последнее обновление",
        copyright: "Что-то в конце",
        // Типы станков
        Milling: "Фрезерный станок",
        Lathe: "Токарный станок"
    },
    en: {
        // 
        short_lang: "Eng",
        lang: "English",
        // Titles
        documents_dashboard_title: "Documentation for dashboard",
        documents_cnc_title: "CNC documentation",
        machine: "Machine",
        machine_main_info_title: "Main information",
        machine_advanced_info_title: "Advanced information",
        // Pages
        home_page: "Home",
        docs_page: "Documentation",
        not_found: "Page ERROR!!111",
        // 
        Loading: "Loading",
        load_error: "Loading error!",
        waiting_data: "Waiting for data",
        connected: "Connected",
        last_update: "Last update",
        copyright: "Something in the end",
        // Machines types
        Milling: "Milling machine",
        Lathe: "Lathe  machine"
    }
};

function getLangString(languages, lang, string) {
    var _lang = lang;
    if(_lang === undefined) _lang = default_lang;
    if (languages[_lang][string] !== undefined) {
        return languages[_lang][string];
    }
    else {
        return string;
    }
}

function getAllLanguages() {
    return [
        {
            url: "en",
            short_lang: "Eng",
            lang: "English"
        },
        {
            url: "ru",
            short_lang: "Рус",
            lang: "Русский",
        }
    ];
}

export { languages, getLangString, getAllLanguages };
