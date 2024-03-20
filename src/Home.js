import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navi = useNavigate()
  function call(e){
    e.preventDefault()
    navi('/Contact')

  }
  return ( <main>
    <nav class=" b navbar navbar-expand-lg">
  <div class="container-fluid">
  <a class=" l navbar-brand" ><b >HELP MATE</b></a>
    <button class="  navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class=" navbar-toggler-icon"></span>
    </button>
    <div class=" a collapse navbar-collapse" id="mynavbarNav">
      <ul class="  navbar-nav">
        <li class="nav-item active ">
          <a class="m nav-link " aria-current="page" href="/"><b>HOME</b></a>
        </li>
       
       
        <li class="nav-item">
          <a class="m nav-link" href="/about"><b>ABOUT US</b> </a>
        </li>
        <li class="nav-item">
          <a class="m nav-link" href="/help"><b>HELP</b></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<br/>
<br/>
<div className='lll'>

<button  onClick={call} type="button" class=" llll "  ><i class="fa fa-phone" aria-hidden="true"></i>  <b>BOOK</b></button>

</div>

<br/>
<br/>
<div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.imS8qMjh4gkydjXulpXnFgHaFM?w=700&h=491&rs=1&pid=ImgDetMain" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/closeup-support-hands.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/pexels-matthias-zomer-339620.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/close-up-mature-couple-holding-hands-family-expressing-empathy-understanding_116547-19679.jpg?w=1060" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.tHVzXGBliVrL4s-9i7PesAHaE8?w=929&h=620&rs=1&pid=ImgDetMain" class="d-block w-100" alt="..."/>
    </div>
  </div>
 
  </div>
  </div>
<br/>


<div className='h'>
  <p><b>Copyright © 2024 HELP MATE</b></p>
</div>

</main>


  )
}

export default Home