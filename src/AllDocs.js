const documentation = {
    main: [
        {
            id: 1,
            names: {
                en: "Tutorial 1",
                ru: "Инструкция 1"
            },
            version: "1.0"
        },
        {
            id: 2,
            names: {
                en: "Tutorial 1",
                ru: "Инструкция 1"
            },
            version: "2.0"
        },
        {
            id: 3,
            names: {
                en: "Tutorial 2",
                ru: "Инструкция 2"
            },
            version: "1.0"

        },
        {
            id: 4,
            names: {
                en: "Tutorial 3",
                ru: "Инструкция 3"
            },
            version: "1.0"
        }
    ],
    for_machines: [
        {
            id: 5,
            names: {
                en: "CNC 1",
                ru: "ЧПУ 1"
            },
            version: "1.0"

        },
        {
            id: 6,
            names: {
                en: "CNC 2",
                ru: "ЧПУ 2"
            },
            version: "1.0"

        }
    ]
};

function getDocs(lang, type) {
    let return_docs = Array();
    documentation[type].forEach(doc => {
        return_docs.push({
            id: doc.id,
            name: doc.names[lang],
            version: doc.version
        });
    });
    return return_docs;
}

export { getDocs };