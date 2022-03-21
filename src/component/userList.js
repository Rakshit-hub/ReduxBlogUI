import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { startSetUser } from '../action/users'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function UserList(props) {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startSetUser())
    }, [])

    const users = useSelector((state) => {
        return state.users
    })
    return (
        <div>
            <h2>UserList-{users.length}</h2>
            {users?.map((user) => {
                return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            })}
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         users: state.users
//     }
// }
// export default connect(mapStateToProps)(UserList)
export default UserList