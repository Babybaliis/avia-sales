export default {
    auth(){
        return fetch("https://front-test.dev.aviasales.ru/search")
            .then((res)=>{
               return  res.json().then(json=>{
                    return json
                })
            })
    },
    async loadList  (searchId: string)  {
        return await fetch(
            `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`
        ).then((res) => {
            return res.json().then((json) => {
                return json.tickets;
            });
        });
    }
}
