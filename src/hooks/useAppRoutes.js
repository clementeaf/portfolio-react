import React from 'react'
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECTS_ROUTE,
} from '../routes'

export default function useAppRoutes() {
  return [HOME_ROUTE, PROJECTS_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE]
}
