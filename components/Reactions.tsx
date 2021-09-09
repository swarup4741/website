import LikeButton from './LikeButton'
import { Like, Heart, Bulb, Fire } from './Icons'

export default function Reactions({ slug }: { slug: string }) {
  return (
    <div className="flex justify-around max-w-md p-3 mx-auto mt-20 border rounded-md dark:border-gray-800">
      <LikeButton label="like" slug={slug}>
        <Like />
      </LikeButton>
      <LikeButton label="heart" slug={slug}>
        <Heart />
      </LikeButton>
      <LikeButton label="bulb" slug={slug}>
        <Bulb />
      </LikeButton>
      <LikeButton label="fire" slug={slug}>
        <Fire />
      </LikeButton>
    </div>
  )
}
