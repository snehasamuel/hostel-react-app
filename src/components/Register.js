import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  var [name,setName]=useState("")
  var [owner,setOwner]=useState("")
  var [number,setNumber]=useState("")
  var [address,setAddress]=useState("")
  var [rate,setRate]=useState("")

  const regValues=()=>{
    const [data,setData]={"name":name,"owner":owner,"number":number,"address":address,"rate":rate}
    console.log(data)
    setData(data)
  }
  return (
    <div>
      <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Hostel Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Owner</label>
                    <input onChange={(a)=>{setOwner(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(a)=>{setNumber(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea  onChange={(a)=>{setAddress(a.target.value)}} name="" id="" cols="15" rows="5" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Rate per month</label>
                    <input onChange={(a)=>{setRate(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <Link to="/view">
                      <button onClick={regValues} className="btn btn-primary">REGISTER</button>
                      </Link>
                    <br></br><br></br>
                    <Link to="/">Already a user ?? Signup !!</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Register