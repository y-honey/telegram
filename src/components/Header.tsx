import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Link
      to="/anniversary"
      className="fixed top-0 left-0 right-0 bg-blue-500 p-4 flex items-center justify-center z-50">
      <div className="text-white text-lg font-semibold">
        <span className="mr-2">🎲</span> Your score
      </div>
    </Link>
  )
}
