import Form from "./components/FirstPage/Form"
import { Routes,Route,BrowserRouter} from "react-router-dom"
import NotFound from "./components/UnknownRoute/NotFound"
import Work from "./components/CheckRoute/Work"
import { FC } from "react"


const App: FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="information" element={<Work />} /> 
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App