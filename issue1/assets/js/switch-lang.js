const prev_lang_ru = document.getElementById("prev__switch_ru");
const prev_lang_eng = document.getElementById("prev__switch_eng");

const menu_lang_ru = document.getElementById("menu__switch_ru");
const menu_lang_eng = document.getElementById("menu__switch_eng");

const prev_langs = [
    prev_lang_eng,
    prev_lang_ru
];
const menu_langs = [
    menu_lang_eng,
    menu_lang_ru
];
const all_langs = [
    prev_langs,
    menu_langs
];

let current_lang = "";

function remove_class_to_active_lang(class_name) {
    all_langs.forEach(arr_langs => {
        arr_langs.forEach(el => el.classList.remove(class_name))
    })
}

function add_class_to_active_lang(class_name) {
    all_langs.forEach(arr_langs => {
        arr_langs.forEach(el => {
            if (el.dataset.lang == current_lang) el.classList.add(class_name)
        })
    })
}

function set_lang(lang) {
    remove_class_to_active_lang("active")
    current_lang = lang
    add_class_to_active_lang("active", current_lang)
}

function lang_click(e) {
    const el = e.target
    const el_lang = el.dataset.lang
    if (current_lang !== el_lang) set_lang(el_lang)
}

function main() {
    all_langs.forEach(arr_langs => {
        arr_langs.forEach(lang => {
            lang.onclick = lang_click
        })
    })

//  set eng lang as default
    set_lang("eng")
}

main()

