// TODO feedback：async是和await配对用的，方法里面没有await，就不需要async关键字
export const getPoetry = async () => {
    const url = "https://v1.jinrishici.com/all.json";

    return fetch(url)
    .then((response) => response.json())
    .then(data => {
        return [data.origin, data.author, data.content]
    })
}
