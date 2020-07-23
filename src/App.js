import React from 'react';
import './App.css';
import "./style.css";
import { Button, Input, Footer, Card, CardBody, CardImage, CardTitle, CardText } from "mdbreact";
import contentList from './Content.json';

class App extends React.Component {

  state = {
    search: ""
  }

  renderContent = content => {
    const {search} = this.state;
    
    // if( search !== "" && content.name.toLowerCase().indexOf(search.toLowerCase()) === -1 ) {
    //   return null;
    // }

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={content.name}>
              {content.name.substring(0, 70)}
              {content.name.length > 70 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );

  }

  onChange = e => {
    this.setState({ search: e.target.value });
  }

  render() {
    
    const { search } = this.state;
    const filteredContent = contentList.filter(content => {
      return content.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <>
        <div className="flyout">
          <main style={{ marginTop: "4rem" }}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <center>
                    <h3>The Tanay Pratap Search Engine</h3>
                  </center>
                </div>
                <div className="col">
                  <Input
                    label="Search anything! e.g., microsoft, job, masters"
                    icon="search"
                    onChange={this.onchange}
                  />
                </div>
                <h3>Search for anything Tanay has ever said</h3>
                <div className="col" />
              </div>
              <div className="row">
                {filteredContent.map(content => {
                  return this.renderContent(content);
                })}
              </div>
            </div>
          </main>
          <Footer color="blue">
            <p className="footer-copyright mb-0">
              &copy; {new Date().getFullYear()} | Made by <a href="https://www.github.com/cmcodes1">cmcodes</a> for tanaypratap with ❤️
            </p>
          </Footer>
        </div>
      </>
    );
  }
}

export default App;