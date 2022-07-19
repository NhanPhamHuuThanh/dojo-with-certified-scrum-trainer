import React, {useEffect, useState}  from 'react'
import { useNavigate } from 'react-router-dom';
import {Link,  useParams} from "react-router-dom"
import DepartmentService from '../services/api.service';
import NotificationSuccess from './shared/NotificationSuccess';
const AddDepartment = () => {
    const suffix = "department"
    const[id,setId] = useState('');
    const[departmentName, setDepartmentName] = useState('');
    const[startDate, setStartDate] = useState('');
    const navigate = useNavigate();
    const [success, setSuccess]= useState(false);

    const saveDepartment = (e) => {
        e.preventDefault();
        
        const department = {departmentName, startDate,id};
        // if (id) {
        //     //update
        //     DepartmentService.update(department)
        //         .then(response => {
        //             console.log('Employee data updated successfully', response.data);
                    
        //         })
        //         .catch(error => {
        //             console.log('Something went wrong', error);
        //         }) 
        // } else {
            //create
            DepartmentService.create(suffix,department)
            .then(response => {
                console.log("deparment added successfully", response.data);
                // showNotification("Create successfully!");
                setSuccess(true);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        
        }

    useEffect(() => {
        if (id) {
            DepartmentService.get(suffix,id)
                .then(department => {
                    setDepartmentName(department.data.departmentName);
                    setStartDate(department.data.startDate);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    const showNotification =(text) => {
        const saveBtn = document.querySelector(".save-btn");
    const divSuccess = document.createElement("div",{id:"alertDiv"});
    divSuccess.setAttribute("class", "alert alert-primary text-center");
    divSuccess.setAttribute("role", "alert");
    divSuccess.innerHTML= text;
    saveBtn.after(divSuccess);
    setTimeout(() => {
        
       divSuccess.remove() 
       navigate('/department')

    }, 2000);
   

    }
    return(
        <div className="container">
            <h3>Add Department</h3>
            <hr/>
            <form>
            <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter id"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="departmentName"
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="date" 
                        className="form-control col-4"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      
                    />

                </div>
               
                <div >
                    <button onClick={(e) => saveDepartment(e)} className="btn btn-primary save-btn" >Save</button>
                </div>
            </form>
            {success &&  <NotificationSuccess message="Create department successfully"/> }
            {/* <NotificationSuccess message="Create department successfully"/> */}
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddDepartment;
