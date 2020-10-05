 //your code here
 import React, { Component } from 'react'

 class Comment extends Component {
     render () {
         return (
             <div className="comment">
                 {this.props.commentText}
             </div>
         )
     }





 }

 export default Comment; 
//!exports the Comment.js file so that it's Comment clsss is accessible to other files
