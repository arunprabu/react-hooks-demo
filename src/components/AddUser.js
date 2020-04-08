import React, { useState } from 'react'

const AddUserForm = props => {

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input
          type="Name"
          className="form-control"
          id="exampleInputName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="button" 
        className="btn btn-primary">Submit</button>
      
    </form>
  )
}

export default AddUserForm;