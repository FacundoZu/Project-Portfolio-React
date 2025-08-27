import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "../layout/Layout"
import Home from "../views/Home"

export const Routing = () => {
    return (
      <BrowserRouter>
  
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}