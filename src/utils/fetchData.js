export default async function fetchData(){
    const data = await fetch('https://fakestoreapi.com/products')
    if(!data.ok){
        throw new Error(`HTTP error status: ${data.status}`)
    }
    return data.json()
}