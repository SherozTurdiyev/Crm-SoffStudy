import createaxios, { BaseUrl } from './createaxios'
class GetStudentPayment {
    async getStudentPayment(){
        const studentPoint = '/student/v1/payment'
        let response = createaxios.get(`${BaseUrl}${studentPoint}`)
        .then(res=> {return res})
        .catch(error=>{return JSON.stringify(error)})

        return response
    }
}

export default new GetStudentPayment