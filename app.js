/*
Example:
    name=Zé zinho&profession=Node.js&email=eti@ttdude.com&phone=+00000&website=aaee.erickwendel.com&location=Jo Paulo, SP
    https://www.convertonline.io/convert/json-to-query-string
*/
const defaultValues = {
    "name": "Gift Kateule",
    "profession": "Software Engineer",
    "email": "events@jasperconsultancy.com",
    "phone": "+260971999931",
    "website": "www.jasperconsultancy.com",
    "location": "Jasper Consultancy"
}

function getQueryString() {
    const search = location.search.substring(1);
    if (!search) return null;
    const uri = decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')

    const data = JSON.parse(`{"${uri}"}`);
    return data;
}

function updateData(data) {
    Object.keys(data).forEach(key => {
        document.getElementById(key).innerHTML = data[key]
    })
}

window.onload = () => {
    const qs = getQueryString()
    if (!qs) {
        console.warn('queryString not found using default values...')
    }
    const getLength = obj => Object.keys(obj).length
    const isMissingKeysOnQueryString = getLength(defaultValues) === getLength(qs || {})
    if (!isMissingKeysOnQueryString) {
        console.warn(`All missing parameters will come from default values\nRequired parameters are`, Object.keys(defaultValues))
    }

    
    updateData({
        ...defaultValues,
        ...qs,
    })

}