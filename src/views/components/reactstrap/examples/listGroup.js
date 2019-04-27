import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

class ListGroups extends Component {
   render() {
      return (
         <div>
            <h1>Bio:</h1>
            <ListGroup>
            <ListGroupItem>Light Feather</ListGroupItem>
               <ListGroupItem>IBJJF World Champion (2018/2017/2016/2015)
  </ListGroupItem>
               <ListGroupItem>IBJJF Asian Championship 2nd Place (2015)</ListGroupItem>
               <ListGroupItem>Team/Association: Paraestra

</ListGroupItem>
               <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
               <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
         </div>
      );
   }
}

export default ListGroups;
