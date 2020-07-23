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
              {content.name.substring(0, 100)}
              {content.name.length > 100 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    
    const { search } = this.state;
    const filteredContent = contentList.filter(content => {
      return content.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">

        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            
            <div>

              <div>
                <center>
                <h1>the tanay pratap search engine</h1><br/><br/>
                </center>
              </div>
              
              <div>
                <center>
                  <Input
                    label="search anything! e.g., microsoft, job, masters"
                    icon="search"
                    onChange={this.onChange}
                  />
                </center>
              </div>

              <div>
                <center>
                  <h4>search for anything tanay has ever said</h4><br/><br/>
                </center>
              </div>

            </div>

            <div className="row">
              {filteredContent.map(content => {
                return this.renderContent(content);
              })}
            </div>

          </div>
        </main>

        <Footer color="blue">
          <p className="footer-copyright mb-0" style={{ marginTop: 50 }}>
            &copy; {new Date().getFullYear()} | Made by <a href="https://www.github.com/cmcodes1" target="_blank">cmcodes</a> for tanaypratap with ❤️
          </p>
        </Footer>

      </div>
    );
  }
}

export default App;