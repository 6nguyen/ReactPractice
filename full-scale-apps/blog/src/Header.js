import React, {Component} from 'react';

{/* Page Header */}
{/* Set your background image for this header on the line below. */}

class Header extends Component {
  render(){
    return(
      <header className="intro-header cover-image">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="site-heading">
                          <h1>George Nguyen</h1>
                          <hr className="small" />
                          <span className="subheading">Developer...Adventurer...Motorcyclist</span>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}

export default Header;
