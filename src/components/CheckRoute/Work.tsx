import { Navigate } from 'react-router-dom'
import SecondPage from '../SecondPage/SecondPage'
import { useSelector } from 'react-redux'

const Work = () => {
  const access = useSelector((state)=> state.access.value)
  if(!access){
    return <><Navigate replace to="/" />
    {
      alert("Fill in the Details First")
    }
    </>
  }else{
    return(
        <SecondPage />
    )
  }
}

export default Work