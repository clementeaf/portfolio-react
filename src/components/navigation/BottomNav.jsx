import React from 'react'
import useAppRoutes from '@hooks/useAppRoutes'
import { NavLink } from 'react-router-dom'
import Button from '@core-ui/Button/Button'

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
