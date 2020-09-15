export const getPoetry = async () => {
    const url = "https://v1.jinrishici.com/all.json";

    return fetch(url)
    .then((response) => response.json())
    .then(data => {
        return [data.origin, data.author, data.content]
    })
}