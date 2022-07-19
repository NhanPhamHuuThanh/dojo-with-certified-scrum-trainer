import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DepartmentService from "../services/api.service";

export default function DepartmentList() {
  const suffix = "department"
  const [department, setDepartment] = useState([]);
  const init = () => {
    DepartmentService.getAll(suffix)
      .then((response) => {
        console.log("Printing departments data", response.data);
        setDepartment(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">      
            <Link to="/department/create" className="btn btn-primary mb-2">Create Department</Link>
            </div>

        <div className="row">Department List</div>
        <div className="row">
          <table className="table table-bordered justify-content-center table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th> ID</th>
                <th> Name</th>
                <th>Started Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {department.map((dept, index) => (
                <tr key={dept.id}>
                  <td>{index + 1}</td>
                  <td>{dept.id}</td>
                  <td>{dept.departmentName}</td>
                  <td>{dept.startDate}</td>
                  <td>
                    <Link className="btn btn-info" to={`/departments/edit/${department.id}`}>Update</Link>
                  
                  {/* <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(department.id);
                  }}>Delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
