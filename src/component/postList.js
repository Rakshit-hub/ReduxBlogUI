import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSetPost } from '../action/users'

function PostList(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startSetPost())
    }, [])

    const posts = useSelector((state) => {
        return state.posts
    })
    return (
        <div>
            <h1>PostList-{posts.length}</h1>
            {posts.map((post) => {
                return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
            })}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts
//     }
// }

// export default connect(mapStateToProps)(PostList)
export default PostList