import React from 'react'
import useAppRoutes from '@hooks/useAppRoutes'
import Button from '@core-ui/Button'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  const routes = useAppRoutes()
  return (
    <div className="flex justify-between w-[375px] fixed bottom-9 right-5">
      {routes
        .filter(({ isInBottomNav }) => isInBottomNav)
        .map(({ id, path, name }) => (
            <NavLink to={path} key={id}>
                {(({isActive}) => (
                    <>
                        <Button children={name} isActive={isActive}/>
                    </>
                ))}
            </NavLink>
        ))}
    </div>
  )
}
