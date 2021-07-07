//your code here
import React from 'react';
class Comment extends React.Component {

 render() {
  return (
   <div className="comment">
    <h1>{this.props.commentText}</h1>
   </div>);
 }


}
export default Comment