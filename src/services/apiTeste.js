import { create } from 'apisauce';

const apiTeste = create({
    baseURL:'http://192.168.15.110:3000',
})

apiTeste.addResponseTransform(response => {
    if (!response.ok) throw response;
});


export default apiTeste;