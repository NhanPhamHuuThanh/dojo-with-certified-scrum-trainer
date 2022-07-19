import React from "react";
import DepartmentList from "../../components/DepartmentList";


export default function Department() {
  return (
    <div>
      Department
      <a href="/">
        <button className="btn btn-primary">Back to Homepage</button>
        
      </a>
      <DepartmentList/>
    </div>
  );
}
