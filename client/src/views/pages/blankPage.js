// import external modules
import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
//import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import CompetitorList from "../../components/competitor/competitor";
import axios from "axios";

class blankPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
        allCompetitors: null
      };
   }
   componentDidMount(){
      axios.get("/api/competitors",function(response) {
         console.log(response);
         this.setState({allCompetitors: response});
      });
      
   }
   render() {
      return (
         <Fragment>
            <ContentHeader>Matches</ContentHeader>
            <CompetitorList allCompetitors={this.state.allCompetitors}
            />
         </Fragment>
      );
   }
}

export default blankPage;
