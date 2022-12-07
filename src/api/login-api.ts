import axios , {AxiosError} from "axios"
import { LoginBody } from "../interface/login-interface"

export const LoginApi = async (body:LoginBody) => {
      try{
            const result = await axios({
                  method:"post",
                  url:"http://127.0.0.1:8000/login",
                  data:body,
                  timeout:5000
            })
            return result.data
      }catch(error){
            const err = error as AxiosError
            return err.response?.data
      }
}