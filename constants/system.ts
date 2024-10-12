import NewTechCover from "@/public/Новые_техники/c57e28a737ce26ce460422088083ccf4.png"

export const tags = {
    techniques: "Техники",
    persons: "Персоны",
    philosophy: "Философия",
    seminars: "Семинары",
}

export const cities = {
    peter: "Петербург",
    moscow: "Москва",
    vladik: "Владивосток",
    usinsk: "Усинск",
    aznakaevo: "Азнакаево",
    almetevsk: "Альметьевск",
    kazan: "Казань"
}

export const news = [
    {
        title: "Новые техники",
        tags: [tags.techniques, tags.persons],
        file: "Новые_техники",
        cover: NewTechCover
    }
]

export const staticNewsTitles = news.map(n=>({ title: decodeURIComponent(n.file) }))

export const dojo = [
    {
        title: "Hatsugen",
        tags: [cities.peter],
        links: ["https://vk.com/hatsugen", "https://vk.link/hatsugen"],
        address: ["ул. Декабристов 35, Санкт-Петербург"],
        coords: [[59.925669,30.290563]],
        file: "Hatsugen",
        cover: "/ruka/images/hatsugen.avif"
    },
    {
        title: "Kaihatsu",
        tags: [cities.peter],
        links: ["https://vk.com/club195029466"],
        address: ["пр. Кима 6, Санкт-Петербург"],
        coords: [[59.950839,30.24606]],
        file: "Kaihatsu",
        cover: "/ruka/images/kaihatsu.avif"
    },
    {
        title: "Yoake",
        tags: [cities.peter],
        links: ["https://vk.com/yoake_dojo"],
        address: ["пр. Кима 6, Санкт-Петербург"],
        coords: [[59.950839,30.24606]],
        file: "Yoake",
        cover: "/ruka/images/yoake.avif"
    },
    {
        title: "Бусидо",
        tags: [cities.almetevsk, cities.aznakaevo],
        address: ["ул.Ленина 15б, Альметьевск", "ул. Булгар, 23, Азнакаево"],
        coords: [[54.903536,52.309052], [54.856419,53.085699]],
        links: ["https://vk.com/club59119078"],
        file: "Бусидо",
        cover: "/ruka/images/bushido.avif"
    },
    {
        title: "Такемусу",
        tags: [cities.moscow],
        links: ["https://vk.com/aiki_kashima", "http://kashimanotachi.ru"],
        address: ["1-я Владимирска улица, д.13, Москва"],
        coords: [[55.758929,37.775712]],
        file: "Такемусу",
        cover: "/ruka/images/takemusu.avif"
    },
    {
        title: "Мусухи",
        tags: [cities.usinsk],
        links: ["https://vk.com/aikido_usinsk"],
        address: ["Возейская улица, 9, Усинск"],
        coords: [[65.998856,57.557046]],
        file: "Мусухи",
        cover: "/ruka/images/musuhi.avif"
    },
    {
        title: "ЦДОД «Заречье»",
        tags: [cities.kazan],
        links: ["https://vk.com/club19295940"],
        address: ["Заречье, ул. Окольная, 23"],
        coords: [[55.827302, 49.043622]],
        file: "Заречье",
        cover: "/ruka/images/dojo_default.avif"
    },
]

export const staticDojoTitles = dojo.map(d=>({ title: decodeURIComponent(d.file) }))

export const domainIcon: {[key: string]: string} = {
    "vk.com": "/ruka/icons/vk.svg"
}