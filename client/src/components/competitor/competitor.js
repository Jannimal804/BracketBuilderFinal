import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, ListGroup, ListGroupItem, Input, Media, Button, Jumbotron  } from "reactstrap";
import PropTypes from "prop-types";
import { Star, Trash } from "react-feather";
import API from "../../utility/API";

class CompetitorList extends Component {

state = {
    Users: []
    // title: "",
    // author: "",
    // synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    //this.loadUsers();
  }

  // Loads all books  and sets them to this.state.books
  loadUsers = () => {
    API.getCompetitors()
      .then(res =>
        this.setState({ users: res.data, firstName: "", lastName: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Container>
            <h1>Here</h1>
        </Container>
    );
  }

}


export default CompetitorList;