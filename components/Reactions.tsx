import LikeButton from './LikeButton'

export default function Reactions() {
  return (
    <div className="flex justify-around max-w-md p-3 mx-auto mt-10 border rounded-md dark:border-gray-800">
      <LikeButton>👍</LikeButton>
      <LikeButton>❤️</LikeButton>
      <LikeButton>💡</LikeButton>
      <LikeButton>👌</LikeButton>
      <LikeButton>🔥</LikeButton>
    </div>
  )
}
