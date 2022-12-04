import { RegisterProps } from "../interface/register-interface"
import axios from "axios"
import {AxiosError} from "axios"

export const RegisterApi = async (body:RegisterProps) => {
      try{
            const result = await axios({
                  url:"http://127.0.0.1:8000/register",
                  method:"post",
                  data:body,
                  timeout:5000
            })
            return result.data
      }catch(error){
            const err = error as AxiosError
            return err.response?.data
      }
}
