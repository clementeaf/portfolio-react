
import { Route, Routes } from 'react-router'
import useAppRoutes from '@hooks/useAppRoutes'
import BottomNav from '@components/navigation/BottomNav'
import { Suspense } from 'react'

function App() {
  const routes = useAppRoutes()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#d5d5d5]/60">
      <div className="flex flex-col h-full w-full px-5 pt-10 pb-5">
        <div className="flex flex-col w-full h-full border-b border-black pb-4 mt-2">
          <div className="flex h-[700px] justify-start items-start pt-14">
            <Suspense>
              <Routes>
                {routes.map(
                  ({ id, path, component: Component, isIndex, isExact }) => (
                    <Route
                      key={id}
                      path={path}
                      element={<Component />}
                      isIndex={isIndex}
                      isExact={isExact}
                    />
                  ),
                )}
              </Routes>
            </Suspense>
          </div>
          <div className="flex justify-between w-[375px] fixed bottom-9 right-5">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
