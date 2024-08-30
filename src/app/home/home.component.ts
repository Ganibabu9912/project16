import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any []=[];

  //https://script.googleusercontent.com/a/macros/cutmap.ac.in/echo?user_content_key=FI8Ze2zm25e-aS5tRrmYJ2TSRaMO5LoQJzoHkS167M8RYAIM1Yjh8pJp0wbxbswiTX-BhgB_DCtrekdQJjwcHA9eszcaSrSpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP90IwNUITr-hC_8qITVF7fXh0lmODcuY_3u8GKyIc_MNBVJzDpJhjxwtGS6U2PVeHv2W27xTP7Zo19PxfxSqMH73_qiCF-sZJiaEgVEfpOf-Ewnq9MPE8BfvHL-71ifY1E&lib=MLX6Tc-pMAFlVw-cSSBEsG-dzRm4IKlxF
  constructor(private http:HttpClient){
    http.get("https://script.googleusercontent.com/a/macros/cutmap.ac.in/echo?user_content_key=FI8Ze2zm25e-aS5tRrmYJ2TSRaMO5LoQJzoHkS167M8RYAIM1Yjh8pJp0wbxbswiTX-BhgB_DCtrekdQJjwcHA9eszcaSrSpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP90IwNUITr-hC_8qITVF7fXh0lmODcuY_3u8GKyIc_MNBVJzDpJhjxwtGS6U2PVeHv2W27xTP7Zo19PxfxSqMH73_qiCF-sZJiaEgVEfpOf-Ewnq9MPE8BfvHL-71ifY1E&lib=MLX6Tc-pMAFlVw-cSSBEsG-dzRm4IKlxF").subscribe((result:any)=>{
      this.data=result.data;
  })
}
}




  
