import NewTechCover from "@/public/Новые_техники/c57e28a737ce26ce460422088083ccf4.png"

const tags = {
    techniques: "Техники",
    persons: "Персоны",
    philosophy: "Философия",
    seminars: "Семинары"
}

export const news = [
    {
        title: "Новые техники",
        tags: [tags.techniques, tags.persons],
        file: "Новые_техники",
        cover: NewTechCover
    }
]

export const staticTitles = news.map(n=>({ title: n.file }))