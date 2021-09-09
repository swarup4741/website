import { useEffect } from 'react'
import useSWR from 'swr'

const API_URL = '/api/likes/'

export default function usePostLikes(slug: string) {
  const { data, error, mutate } = useSWR(API_URL + slug)

  const currentUserLikes = data?.currentUserLikes
  const allUserLikes = data?.allUserLikes

  async function updateLikes(newData: string) {
    mutate(
      {
        allUserLikes: {
          ...allUserLikes,
          [newData]: (allUserLikes?.[newData] | 0) + 1
        },
        currentUserLikes: {
          ...currentUserLikes,
          newData
        }
      },
      false
    )

    mutate(
      (async () => {
        const updatedData = await fetch(API_URL + slug, {
          method: 'POST',
          body: newData
        })

        return updatedData.json()
      })()
    )
  }

  useEffect(() => {
    const registerLikes = () => {
      fetch(API_URL + slug, {
        method: 'GET'
      })
    }
    registerLikes()
  }, [slug])

  return {
    likes: { currentUserLikes, allUserLikes },
    error: error,
    updateLikes
  }
}
