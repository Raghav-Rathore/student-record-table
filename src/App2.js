import { Component } from "react";
import React from "react";
export default class App extends Component {
  constructor() {
    super()
    this.rollbox = React.createRef()
    this.namebox = React.createRef()
    this.agebox = React.createRef()
    this.perbox = React.createRef()
    this.yearbox = React.createRef()
    this.coursebox = React.createRef()

    this.state = {
      students: [
        { roll: 101, name: "Ram", age: 22, course: "MBA", percent: 78, year: "First" },
        { roll: 102, name: "Raman", age: 22, course: "MCA", percent: 79, year: "Second" },
        { roll: 103, name: "Ramesh", age: 24, course: "BCA", percent: 75, year: "First" },
        { roll: 104, name: "Rajesh", age: 26, course: "MSC", percent: 85, year: "Third" },
        { roll: 105, name: "Rahul", age: 23, course: "MBA", percent: 81, year: "Third" },
        { roll: 106, name: "Rakesh", age: 21, course: "MCA", percent: 72, year: "Second" }
      ],
      msg: ' ',
      errMsg: '',
      duplicateRoll: false,
      count:''
    }
    this.course=["MBA","MCA","BCA","MSC","B.Tech"]
  }

  add = (event) => {
    event.preventDefault()
    var ob = {
      roll: this.rollbox.value,
      name: this.namebox.value,
      age: this.agebox.value,
      course: this.coursebox.value,
      percent: this.perbox.value,
      year: this.yearbox.value,

    }

    //  else{
    this.setState({ students: [...this.state.students, ob] })
    event.target.reset()
    this.setState({ msg: "Record Sucessfully Added" })
    setTimeout(() => {
      { this.setState({ msg: "" }) }
    }, 10000)
  }


  remove = (roll) => {
    var status = window.confirm("Are You sure ?")
    //console.log(status)
    if (status) {
      this.setState({ students: this.state.students.filter(ob => ob.roll != roll) })
    }
  }
  checkRoll = () => {
    var FilterData = this.state.students.filter(obj => obj.roll == this.rollbox.value)
    if (FilterData.length > 0) {
      this.setState({ errMsg: "This Roll Number alredy Exist" })
      this.setState({ duplicateRoll: true })
    }
  }
  clearMsg = () => {
    this.setState({ errMsg: " " })
    this.setState({ duplicateRoll: false })


  }

  render() {

    return <>
      <h1 className="alert alert-primary text-center text-primary">Student Information</h1>
      <div className="container mt-3">

        <form onSubmit={this.add}>
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="form-control" onFocus={this.clearMsg} onBlur={this.checkRoll} ref={ob => this.rollbox = ob} placeholder="Roll number" ></input>
              <span style={{ color: "red" }}> {this.state.errMsg}</span>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" ref={ob => this.namebox = ob} placeholder="Student Name"></input>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <input type="number" className="form-control" ref={ob => this.agebox = ob} placeholder="Student Age"></input>
            </div>
            <div className="col-md-6">
              <select className="form-control" ref={ob => this.coursebox = ob} placeholder="Select Course">
                {this.course.map(ob=><option>{ob}</option>)}
                {this.count.map({co})}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <input type="number" className="form-control" ref={ob => this.perbox = ob} placeholder="Student percent"></input>
            </div>
            <div className="col-md-6">
              <select className="form-control" placeholder="Select Year" ref={ob => this.yearbox = ob} >
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p style={{ color: "Blue" }}>{this.state.msg}</p>
            </div>

            <div className="col-md-8 text-center" >
              <button className="btn btn-primary btn-lg" style={{ padding: "10px" }} type="submit"  disabled={this.state.duplicateRoll}> Register </button>
            </div>

          </div>
        </form>
        {this.course.map(ob=><button style={{marginLeft:"5px"}}  className="btn btn-primary">{ob}</button>)}
        {this.count.map.value(co=>{co}) }
        <table className="table table-stripped mt-3">
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Percent</th>
              <th>Year</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(ob =>
              <tr>
                <td>{ob.roll}</td>
                <td>{ob.name}</td>
                <td>{ob.age}</td>
                <td>{ob.course}</td>
                <td>{ob.percent}</td>
                <td>{ob.year}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => { this.remove(ob.roll) }}>Remove</button>
                </td>
              </tr>)}
          </tbody>

        </table>
      </div>

    </>
  };
}



