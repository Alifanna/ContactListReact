import React, { Component } from 'react';

class AddContact extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@gmail.com',
    phone: '777-77-77'
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
               type="text" 
               name="name"
               className="form-control form-control-lg"
               placeholder="Enter Name..."
               defaultValue={name}
               >
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
               type="email" 
               name="email"
               className="form-control form-control-lg"
               placeholder="Enter Email..."
               defaultValue={email}
               >
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
               type="text" 
               name="phone"
               className="form-control form-control-lg"
               placeholder="Enter Phone..."
               defaultValue={phone}
               >
              </input>
            </div>
            <input type="submit" value="Add Contact"
            className="btn bnt-block"
            ></input>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;
