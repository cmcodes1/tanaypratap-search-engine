import React from 'react';
import './App.css';
import './style.css';
import { Input, Footer, Card, CardBody, CardTitle } from 'mdbreact';
import contentList from './Content.json';

class App extends React.Component {

  state = {
    search: ""
  }

  renderContent = content => {
    
    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={content.question}>
              <a href={content.link} target="_blank" rel="noopener noreferrer">{content.question}</a>
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
      return content.question.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">

        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            
            <div>

              <div style={{color: "#0078d7"}}>
                <center>
                <h1>the tanay pratap search engine</h1><br/><br/>
                </center>
              </div>
              
              <div>
                <center>
                  <Input
                    label="search anything! e.g., microsoft, job, javascript, masters"
                    icon="search"
                    onChange={this.onChange}
                  />
                </center>
              </div>

              <div>
                <center>
                  <h5>search for anything tanay has ever said<br/></h5><br/><br/>
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
            &copy; {new Date().getFullYear()} | Made by <a href="https://cmcodes1.github.io/" target="_blank" rel="noopener noreferrer">cmcodes</a> for <a href="https://tanaypratap.com/" target="_blank" rel="noopener noreferrer">tanaypratap</a> with ❤️ & React.
          </p>
        </Footer>

      </div>
    );
  }
}

export default App;