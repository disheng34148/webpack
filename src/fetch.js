
window.$http = (url, data=null) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.fastmock.site/mock/96896abfef7e7929df55057d86fe372a/webpack${url}`, {
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.status === 200) resolve(json.data)
            else console.log(json.msg);
        })
        .catch(err => {
            reject(err)
        })
    })
}