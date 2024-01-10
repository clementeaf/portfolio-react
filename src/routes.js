import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export const HOME_ROUTE = {
    id: "home-route",
    path: "/",
    component: Home,
    isIndex: true,
    isExact: false,
    isInBottomNav: false,
    name: "Home"
}

export const PROJECTS_ROUTE = {
    id: "projects-route",
    path: "/projects",
    component: Projects,
    isIndex: false,
    isExact: true,
    isInBottomNav: true,
    name: "Projects"
}

export const ABOUT_ROUTE = {
    id: "about-route",
    path: "/about",
    component: About,
    isIndex: false,
    isExact: true,
    isInBottomNav: true,
    name: "About"
}

export const CONTACT_ROUTE = {
    id: "contact-route",
    path: "/contact",
    component: Contact,
    isIndex: false,
    isExact: true,
    isInBottomNav: true,
    name: "Contact"
}