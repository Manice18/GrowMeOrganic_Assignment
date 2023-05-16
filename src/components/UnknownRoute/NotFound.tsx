import {FC} from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <div>
        <h1>ERROR 404 NOT FOUND!</h1>
        <h1>You seem to be lost.</h1>
        <p>Click the Below Link to Go back to the details Page</p>
        <Link to='/'>CLICK HERE</Link>
        <br />
    </div>
  )
}

export default NotFound