import React from 'react'
import './slide.css';
import { Link } from 'react-router-dom';

function slide() {
    const data = [
        {
            name: 'Free',
            cash:0,
            users:'Single User',
            bold:false,
            net:5,
            condtion:false,
        },
        {
            name: 'Plus',
            cash: 9,
            users: '5 user',
            bold:true,
            net:50,
            condition:false,

          },
          {
            name: 'Pro',
            cash: 49,
            users: 'Unlimited user',
            bold:true,
            net:150,
            condition:true,
           
          },
    ];
  return (
    <div class='margin'>
      <section class="pricing py-5 ">
  <div class="container">
    <div class="row">
      {/* <!-- Free Tier --> */}
      {data.map((item) => {
        return  (

      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center"> {item.name}</h5>
           
            <h6 class="card-price text-center">${item.cash}
            <span class="period">/month</span></h6>
         
            <hr/>
            <ul class="fa-ul">
              <li>
                <span class="fa-li">
                    <i class="fa fa-check"></i>
                </span>
                  {item.bold ?(
                    <>
                    <strong>{item.users}</strong>
                    </>
                  ): (
                    <> 
                    {item.users}
                    </>
                  )}
                    </li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.net}GB Storage</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>


              {item.bold ? (
                <>
                <li><span class="fa-li"><i class={item.name==="Free"?"fa fa-times":"fa fa-check"}></i></span>Unlimited
                Private Projects</li></>
              ) : (
                <>
                <li class='text-muted'><span class="fa-li"><i class="fa fa-times"></i></span>Unlimited
                  Private Projects</li></>
                )}


                {item.bold ? (
                     <li><span class="fa-li"><i class={item.name==="Free"?"fa fa-times":"fa fa-check"}></i></span>Dedicated
                     Phone Support</li>
                ):(
                    <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Dedicated
                    Phone Support</li>     
                )}


                
            
                  <li class={item.name==="Free" ? "text-muted":""} ><span class="fa-li"><i class={item.name==="Free" ?"fa fa-times" : "fa fa-check"}></i></span> 
                  {item.name==="Pro" ? <><b>Unlimited</b> Free Domain</>:"Free Domain"} 
                  
                  </li>
                  
                  
                   
            
                    
              

              {item.condition ? (
              <li><span class="fa-li"><i class={item.name==="Pro"?"fa fa-check":"fa fa-times"}></i></span>Monthly Status
                Reports</li>
              ) : (
                <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Monthly Status
                Reports</li>
                )}
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
       )

    })}
     <Link to={'/'} class='ps-4 text-center mt-3'>
         <button type="button" class="btn btn-danger ">Logout</button>
         </Link>
    </div>
  </div>
</section>
    </div>
    
  )
}

export default slide
