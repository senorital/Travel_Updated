import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Flight_form from "./Flight_form";
function Index(){
    return (
        <div class="body-mains">

        <Header/>
        
      
        <div class="bgshade-1 bgshade-new pt-3 pb-3" style={{position:'relative'}}>
        <div class="container ">
        <div class="row">
        <div class="col-12">
        <div class="mb-2 mt-0">
        <h5 class="bold text-light p-2 rounded" style={{'background-color': 'rgba(0, 0, 0, 0.5)',' display':'inline-block'}}>Find Flights</h5>
        </div>
        </div>
        <div class="col-12 col-lg-5 mb-0 mb-md-0">
        <div class="bg-light p-3 shadow bg-white  rounded">
        
        <Flight_form/>
        <div id="flight_form_loader" class="text-center">
        <i class="zmdi zmdi-rotate-right zmdi-hc-spin zmdi-hc-3x"></i>
        </div>
        </div>
        </div>
        <div class="col-12 col-lg-7 mb-0 mb-md-0 pt-3 pt-lg-0">
        <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
        <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3" class></li>
        </ol>
        <div class="carousel-inner">
        <div class="carousel-item active">
        <img class="d-block w-100 rounded" src="assets/img/3year_slide_v9e36.jpg?v"/>
        </div>
        <div class="carousel-item ">
        <img class="d-block w-100 rounded" src="assets/img/Vimaansafar-HDFC.png"/>
        </div>
        <div class="carousel-item ">
        <img class="d-block w-100 rounded" src="assets/img/slide-101_v.png"/>
        </div>
        <div class="carousel-item ">
        <img class="d-block w-100 rounded" src="assets/img/slide-55_v.png"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        </div>
        <div class="container ">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mb-4 mt-sm-12 text-center"><br/>
        <img src="assets/img/footer-trustlogo_new1aab.png?dd" class="img-fluid d-none d-md-inline" style={{maxWidth:800}}/>
        <img src="assets/img/footer-trustlogo_new1aab.png?dd" class="img-fluid d-inline d-md-none"/>
        </div>
        </div>
        </div>
        <div class="container-fluid pt-5 bg-light">
        <div class="container">
        <div class="row bgshade-new py-3 w-100 mx-auto">
        <div class="col-12 col-md-2 text-center text-md-right">
        <img src="assets/img/bell_icon.png" class="bell_icon img-fluid mb-3 mb-md-0" alt/>
        </div>
        <div class="col-12 col-md-10 text-white text-center text-md-left align-self-center">
        <h4 class="font-weight-bold gofirst_text">IMPORTANT INFORMATION FOR GO FIRST AIRLINES CUSTOMERS</h4>
        <h5 class="mb-0">Refunds and Assistance from us. <a class="text-white" href="gofirst.html" target="_blank"><u>Click Here</u></a></h5>
        </div>
        </div>
        </div>
        </div>
        <div class="bg-light mt-0 pt-4 pb-4">
        <div class="container">
        <div class="row">
        <div class="col">
        <div class="text-center m-2 mt-3  mb-3">
        <h5 class="font-weight-bold"><span class="head_line">Reasons to book with us?</span></h5>
        </div>
        <div class="row">
        <div class="col-sm mt-2">
        <div class="d-flex flex-row">
        <div class="p-2">
        <img src="assets/img/fastT.png" width="50"/>
        </div>
        <div class="p-2">
        <h6 class="font-weight-bold">FAST BOOKING</h6>
        <p class="small">We offer fast booking, fantastic products, competitive pricing & amazing experience.</p>
        </div>
        </div>
        </div>
        <div class="col-sm mt-2">
        <div class="d-flex flex-row">
        <div class="p-2">
        <img src="assets/img/eDeal.png" width="50"/>
        </div>
        <div class="p-2">
        <h6 class="font-weight-bold">EXCITING DEALS</h6>
        <p class="small">Book exciting deals on with published & exclusive flights.</p>
        </div>
        </div>
        </div>
        <div class="col-sm mt-2">
        <div class="d-flex flex-row">
        <div class="p-2">
        <img src="assets/img/24Support.png" width="50"/>
        </div>
        <div class="p-2">
        <h6 class="font-weight-bold">24/7 SUPPORT</h6>
        <p class="small">Get assitance 24/7 on any kind of travel related query. We are happy to assit you.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="container mt-3 pt-2 pb-3">
        <div class="row ">
        <div class="col">
        <div class="text-center m-2 mt-3  mb-3">
        <h5 class="font-weight-bold"><span class="head_line">Exicting Offers</span></h5>
        </div>
        </div>
        </div>
        <div class="row  mb-3">
        <div class="col-12 ml-auto mr-auto  mb-3 mt-3 owl-carousel owl-carousel-head">
        <div class="item">
        <img src="assets/img/slide-71_te358.png?t" class="img-fluid"/>
        </div>
        <div class="item">
        <img src="assets/img/slide-60_t_b.png" class="img-fluid"/>
        </div>
        <div class="item">
        <img src="assets/img/slide-72_t.png" class="img-fluid"/>
        </div>
        <div class="item">
        <img src="assets/img/slide-75_t.png" class="img-fluid"/>
        </div>
        </div>
        </div>
        </div>
        <div class="bg-light mt-0 pb-4">
        <div class="container">
        <div class="row">
        <div class="col">
        <div class="text-center m-2 mt-3  mb-3 pt-4">
        <h4 class="font-weight-bold"><span class="head_line">VimaanSafar reviews</span></h4>
        </div>
        <div class="row">
        
        </div>
        <div class="row">
        <div class="col">
        <div data-romw-token=""></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="container pt-3 pb-3">
        <div class="row">
        <div class="col">
        <div class="text-center m-2 mt-4 mb-3">
        
        <h2 class="font-weight-bold"><span class="head_line">Exclusive Deals</span></h2>
        </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-4"><a href="javascript:fillFormAndShowDate('Delhi (DEL)','DEL','Bangkok (BKK)','BKK')">
        <div class="profile-card-2 mb-4"><img src="assets/img/city/bangkok.jpg" class="img img-responsive"/>
        <div class="profile-name">Bangkok</div>
        <div class="profile-username">Rs 7000</div>
        <div class="profile-icons"></div>
        </div> </a>
        </div>
        <div class="col-md-4"> <a href="javascript:fillFormAndShowDate('Delhi (DEL)','DEL','Dubai (DXB)','DXB')">
        <div class="profile-card-2 mb-4"><img src="assets/img/city/dubai.jpg" class="img img-responsive"/>
        <div class="profile-name">Dubai</div>
        <div class="profile-username">Rs 11000</div>
        <div class="profile-icons"></div>
        </div></a>
        </div>
        <div class="col-md-4"> <a href="javascript:fillFormAndShowDate('Delhi (DEL)','DEL','Hong Kong (HKG)','HKG')">
        <div class="profile-card-2 mb-4"><img src="assets/img/city/hongkong.jpg" class="img img-responsive"/>
        <div class="profile-name">Hong Kong</div>
        <div class="profile-username">Rs 13000</div>
        <div class="profile-icons"></div>
        </div></a>
        </div>
        <div class="col-md-4">
        <a href="javascript:fillFormAndShowDate('Bombay (BOM)','BOM','Delhi (DEL)','DEL')" class>
        <div class="profile-card-2"><img src="assets/img/city/delhi.jpg" class="img img-responsive"/>
        <div class="profile-name">Delhi</div>
        <div class="profile-username">Rs 2200</div>
        <div class="profile-icons"></div>
        </div> </a>
        </div>
        <div class="col-md-4"><a href="javascript:fillFormAndShowDate('Delhi (DEL)','DEL','Amritsar (ATQ)','ATQ')">
        <div class="profile-card-2"><img src="assets/img/city/amritsar.jpg" class="img img-responsive"/>
        <div class="profile-name">Amritsar</div>
        <div class="profile-username">Rs 1900</div>
        <div class="profile-icons"></div>
        </div></a>
        </div>
        <div class="col-md-4"> <a href="javascript:fillFormAndShowDate('Delhi (DEL)','DEL','Srinagar (SXR)','SXR')">
        <div class="profile-card-2"><img src="assets/img/city/srinagar.jpg" class="img img-responsive"/>
        <div class="profile-name">Srinagar</div>
        <div class="profile-username">Rs 2400</div>
        <div class="profile-icons"></div>
        </div></a>
        </div>
        </div>
        </div>
        
        
        <div class="mb-3"></div>
        <div class=" mt-3 pb-4  bg-light">
        <div class="container">
        <div class="row">
        <iframe width="540" height="435" src="https://4a8d0bb0.sibforms.com/serve/MUIEAJfI99FCfQn-jfSR45Jgkmeb6A4oGGBh0xnWnR8wrvsOMPIU3RhiAr2ZdW406Vd_0CZcqhPol-sKvmbqPs_yNlDHYhLNCK-QcWFdrBThUOUK7f6ATixgBkK9ogu9iojRzslRkiZH1kGWUVfDLXbZneXBV9KbBmfUsIqTLb-T8DfAarITTXoFH-diPiHU-DAfKZii8OUJyysz" frameborder="0" scrolling="auto" allowfullscreen style={{display: 'block',marginLeft: 'auto',marginRight: 'auto',maxWidth: '100%'}}></iframe>
        </div>
        </div>
        </div>
        
        <div class="container">
        <div class="row  ">
        <div class="col-12 text-center">
        <div class="p-2">
        <script async src="../pagead2.googlesyndication.com/pagead/js/facbb.txt?client=ca-pub-2791086082148359" crossorigin="anonymous"></script>
        
        <ins class="adsbygoogle" style={{display:'inline-block', width:'728px',height:'90px'}} data-ad-client="ca-pub-2791086082148359" data-ad-slot="3013325237"></ins>
        <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
        </div>
        </div>
        </div>
        </div>
    
        <Footer/>
        </div>

    
    );
    
}
export default Index;

