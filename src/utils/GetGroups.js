import createaxios , {BaseUrl} from './createaxios'

class getGroups {
    async getGroupsItem(){
        const userPoint = '/groups/v1/list'
        let response =await createaxios.get(`${BaseUrl}${userPoint}`)
        .then(res=>{
            return res
        })
        .catch(error=>{
            return JSON.stringify(error)
        })
        return response
    }
    async setGroupsItem(data){
        const userPoint = '/groups/v1/list'
        let response =await createaxios.post(`${BaseUrl}${userPoint}` , {data})
        .then(res=>{
            return res
        })
        .catch(error=>{
            return JSON.stringify(error)
        })
        return response
    }
}

export default new getGroups