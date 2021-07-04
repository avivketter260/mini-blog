import logo from '../blog.png'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {


    render() {
        console.log(this.props.blockPost);
        const {blockPost} = this.props
        console.log(blockPost);
        // let post = []

        if (blockPost) {
            return (
                <div className="container home">
                     <div><h1 >Home</h1></div>
                    {
                        blockPost.map((item, i) => {
                            return <div className="post card" key={item.id}>
                                <div className="card-content">
                                <img src={logo}/>
                                    <Link  to={'/post/' + item.id}>  
                                     <span className="card-title red-text" >
                                    </span>{item.title}</Link>
                                    <p>{item.body}</p>
                                </div >
                            </div>
                        })
                    }
                </div>
            )
        }
        return (
            <div className="center">
              <h1> No post to show</h1>
                </div>


         
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return { blockPost: state }
}

export default connect(mapStateToProps, null)(Home)