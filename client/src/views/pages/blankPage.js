// import external modules
import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
//import ContentSubHeader from "../../components/contentHead/contentSubHeader";
//import CompetitorList from "../../components/competitor/competitor";
import axios from "axios";
import API from "../../utility/API";


class blankPage extends Component {
   state = {
      allCompetitors: []
   }
   componentDidMount() {
      console.log("here");
      const self = this;
      axios.get("/api/competitors").then(function(res) {
         console.log(res.data)
            self.setState({allCompetitors: res.data});
         });     
   }

   loadUsers = () => {
      API.getCompetitors()
        .then(res =>
          this.setState({ users: res.data, firstName: "", lastName: "" })
        )
        .catch(err => console.log(err));
    };

   render() {
      return (
         
         <Fragment>
             <ContentHeader>Matches</ContentHeader>
            {this.state.allCompetitors.map(allCompetitors => {
               return(
                  <h1>{[allCompetitors.firstName]}</h1>
               ) 
            })} 
         </Fragment>
      );
   }
}

export default blankPage;