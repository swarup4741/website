import db from '@/lib/firebase'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  total: number
}

export default async function viewsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const ref = db.collection('views').doc(req.query.id as string)
    const snapshot = (await ref.get()).data() as any

    if (snapshot) {
      if (snapshot.views) {
        await ref.update({
          views: Number(snapshot.views) + 1
        })
      }
    } else {
      await ref.set({
        views: 1
      })
    }
    return res.status(200).json({
      total: snapshot ? snapshot.views + 1 : 1
    })
  }

  if (req.method === 'GET') {
    const snapshot = (
      await db
        .collection('views')
        .doc(req.query.id as string)
        .get()
    ).data()
    const views = snapshot ? snapshot.views : 1
    return res.status(200).json({ total: views })
  }
}
