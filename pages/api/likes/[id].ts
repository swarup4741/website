import db from '@/lib/firebase'
import type { NextApiRequest, NextApiResponse } from 'next'

async function getAllUserLikes(slug: string) {
  const allUserDocs = (await db.collection('likes').listDocuments()).filter(
    ({ id }) => id.includes(slug)
  )

  let PostLikes: any = {
    like: 0,
    heart: 0,
    bulb: 0,
    perfect: 0,
    fire: 0
  }

  await Promise.all(
    allUserDocs.map(async u => {
      const result = (await u.get()).data()
      const singleUserLikes = result?.likeTypes
      singleUserLikes.forEach((l: string) => (PostLikes[l] += 1))
    })
  )

  return PostLikes
}

async function getCurrentUserLikes(uid: string) {
  return (await db.collection('likes').doc(uid).get()).data()
}

export default async function likesHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const userAgentId = req.headers['user-agent']?.replace(/\D+/g, '')
  const postId = req.query.id
  const uid = postId + '___' + userAgentId

  if (req.method === 'POST') {
    const ref = db.collection('likes').doc(uid)
    const snapshot = (await ref.get()).data() as any
    const reqBody = await req.body

    if (snapshot) {
      if (snapshot.likeTypes) {
        await ref.update({
          likeTypes: [...snapshot.likeTypes, reqBody]
        })
      }
    } else {
      await ref.set({
        likeTypes: [reqBody]
      })
    }

    const allUserLikesRes = await getAllUserLikes(req.query.id as string)
    const currentUserLikesRes = await getCurrentUserLikes(uid)

    return res.status(200).json({
      allUserLikes: allUserLikesRes,
      currentUserLikes: { ...currentUserLikesRes?.likeTypes }
    })
  }
  if (req.method === 'GET') {
    const allUserLikesRes = await getAllUserLikes(req.query.id as string)
    const currentUserLikesRes = await getCurrentUserLikes(uid)

    return res.status(200).json({
      allUserLikes: allUserLikesRes,
      currentUserLikes: { ...currentUserLikesRes?.likeTypes }
    })
  }
}
