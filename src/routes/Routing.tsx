import { Route, Routes } from "react-router-dom"
import { Layout } from "../layout/Layout"
import Home from "../views/Home"
import ProjectDetails from "../views/ProjectDetails"

export const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/project/:index' element={<ProjectDetails />} />
                <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    )
}