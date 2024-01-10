import Projects from '@pages/Projects'
import Button from './core-ui/Button'
import { bottomMenu } from './config'
import Header from './core-ui/Header'
import Home from './pages/Home'

const buttonsRow = bottomMenu.map((content) => <Button children={content} />)

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#d5d5d5]/60">
      Update in progres. Please comeback later
    </div>
  )
}

export default App
