import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"));
export const Login = lazy(() => import("../pages/login/login"));
export const Home = lazy(() => import("../pages/home/home"));
export const AboutUs = lazy(() => import("../pages/aboutUs/aboutUs"));
export const Course = lazy(() => import("../pages/course/course"));
export const Selected = lazy(() => import("../pages/selected/selected"));
export const Contact = lazy(() => import("../pages/contact/contact"));
