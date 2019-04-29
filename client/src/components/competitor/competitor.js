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
            <ListGroup>
                {this.state.allCompetitors.map(allCompetitors => {
                  return (
                    <ListGroupItem key={allCompetitors._id}>
                      <a href={allCompetitors._id}>
                        <strong>
                           {allCompetitors.firstName}
                          {/* {book.title} by {book.author} */}
                        </strong>
                      </a>
                      {/* <Button onClick={() => this.deleteBook(book._id)} /> */}
                    </ListGroupItem>
                     )
                    })}
                  </ListGroup>
                ) : (
                  <h3>No Results to Display</h3>
                )}
        </Container>
    );
  }

}


export default CompetitorList;