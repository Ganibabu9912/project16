import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
 
data:any []=[]

  DepartObj:any={
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  http=inject(HttpClient)


ngOnInit(): void {
  this.getDepartmentData()
}



  getDepartmentData(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.data=res.data
    })
  }


  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.DepartObj).subscribe((res:any)=>{
      if(res.result){
        alert("Department Created sucessfully")
        this.getDepartmentData();
      }else{
        alert(res.message)
      }
    })
  }
}




