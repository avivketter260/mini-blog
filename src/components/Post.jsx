import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../Postactions'
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps.match.params.id);
    return { post: state.find(res => res.id === ownProps.match.params.id) }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let id = ownProps.match.params.id
    return {
        handelClick: (id) => {
            dispatch(deletePost(id))
        }
    }
}


class Post extends Component {

    render() {
        console.log(this.props);
        const { post, handelClick } = this.props
        console.log(post);
        // console.log(handelClick);



        if (post) {

            return (
                <div className="post">
                    <h1 className="center">{post.title}</h1>
                    <p>{post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={() => handelClick(post.id)}>
                            Delete post
                        </button>
                    </div>
                </div>
            )
        }
        return <div className='center'>Loading...</div>
    }

}

// const ownProps=1
export default connect(mapStateToProps, mapDispatchToProps)(Post)