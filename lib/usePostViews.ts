import { useEffect } from 'react'
import useSWR from 'swr'

const API_URL = '/api/views/'

export default function usePostViews(slug: string) {
  const { data, error } = useSWR(API_URL + slug)

  useEffect(() => {
    const registerView = () => {
      fetch(API_URL + slug, {
        method: 'POST',
        mode: 'same-origin'
      })
    }

    registerView()
  }, [slug])

  return {
    views: data?.total,
    error: error
  }
}
