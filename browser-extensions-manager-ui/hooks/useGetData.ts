import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setData } from "@/redux/extensions/reducer"

const useGetData = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json", {
          method: "GET",
          signal: controller.signal,
        })
        const data = await response.json()
        dispatch(setData(data))
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [dispatch])
}

export default useGetData
