import { useState, useEffect } from "react"
import { apiClient } from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from 'axios'


interface FetchResponse<T>{
    count: number;
    results: T[]
}
const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig,deps? :any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal,...requestConfig})// spread the requestConfig object to add any additoinal configurations
         .then(res=> {
            setData(res.data.results),
            setLoading(false)
        })
        .catch(err=> {
            if(err instanceof CanceledError)return(console.log('Request canceled'))
                setError(err.message)
                setLoading(false)})
                return ()=> controller.abort()
        },deps?[...deps]: [])
  return (
    {data, error, loading}
  )
}

export default useData