// import external modules
import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
//import ContentSubHeader from "../../components/contentHead/contentSubHeader";
//import CompetitorList from "../../components/competitor/competitor";
import axios from "axios";
import API from "../../utility/API";
import {
   Card,
   CardTitle,
   CardSubtitle
} from "reactstrap";


class MatchesPage extends Component {

   constructor(props) {
      super(props);
      this.state = {allCompetitors: []};
    }

   componentDidMount() {
      console.log("here");
      const self = this;
      API.getMatches("white","feather").then(function(res) {
         console.log(res.data)
            self.setState({allCompetitors: res.data});
         });     
   }

   // loadUsers = () => {
   //    API.getCompetitors()
   //      .then(res =>
   //        this.setState({ users: res.data, firstName: "", lastName: "", beltColor: "", weightLevel: "" })
   //      )
   //      .catch(err => console.log(err));
   //  };

   render() {
      return (
         
         <Fragment>
             <ContentHeader>Here</ContentHeader>
             <ContentHeader>Matches Betch a letch!</ContentHeader>
            {this.state.allCompetitors.map(allCompetitors => {
             return(
                  <Card>
                  <CardTitle>{allCompetitors.firstName} {allCompetitors.lastName}</CardTitle>
                  <CardSubtitle>{allCompetitors.beltLevel}</CardSubtitle>
                  <CardSubtitle>{allCompetitors.weightClass}</CardSubtitle>
               </Card>
               )
              } )} 
         </Fragment>
      );

      
      // function Match(props) {
      //    const myMatches = props.myMatches;
      //    return (
      //      <div>
      //        <h1>Hello!</h1>
      //        {myMatches.length > 0 &&
      //          <h2>
      //            You have {myMatches.length} matches.
      //          </h2>
      //        }
      //      </div>
      //    );
      //  }
       
   }
}

export default MatchesPage;