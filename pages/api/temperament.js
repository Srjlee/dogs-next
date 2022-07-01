import axios from 'axios'
import models from '../../database/models.js'
const { Temperamento} = models

export default async function temperament(req, res) {
    try {
        const hayDatos = await Temperamento.findAll()
        if (!hayDatos.length) {
            const perros = await axios('https://api.thedogapi.com/v1/breeds?api_key=332ff49b-6102-487a-a71b-f50f60e28207')
            const tempApi = perros.data.map((p) => p.temperament ? p.temperament : '').map(s => s?.split(', ')).flat()
            const result = tempApi.reduce((acc, item) => {
                if (!acc.includes(item) && item !== '') {
                    acc.push(item);
                }
                return acc;
            }, [])
            
            let datos = result.map(c => {
                return  { name: c }                
            })
            await Temperamento.bulkCreate(datos)
        }
        return res.json(await Temperamento.findAll())
    } catch (error) {
        res.status(404).send(error.message)
    }
}
