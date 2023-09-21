import React,{ useEffect, useState, Fragment } from "react";
import { useLocation } from 'react-router-dom';
import Form from "./Form";
import Subscribe from "../components/Subscribe";
import Filter from "../components/Filter";
import Modal from 'react-modal';

// Add CSS styles for the modal and its content
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    zIndex: 1000, // Ensure it's above other content
  },
  content: {
    maxWidth: '80%',
    margin: 'auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};
function Flight_result1(){

    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
  
    // // Access form data from query parameters
    // const from = queryParams.get('from');
    // const to = queryParams.get('to');
    // const journeyDate = queryParams.get('journeyDate');
  
    // const [apiData, setApiData] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //   // Define a function to fetch data from the API
    //   const fetchData = async () => {
    //     try {
    //       // Construct the API endpoint URL with form data as parameters
    //       const apiUrl = `https://cors-anywhere.herokuapp.com/https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${from}&destination=${to}&depature_at=${journeyDate}&token=f7e15ed6a62d8a82ba83fb7603c3e92e`;
          
    //       // Fetch data from the API
    //       const response = await fetch(apiUrl);
          
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch data from the API');
    //       }
          
    //       // Parse the response JSON
    //       const data = await response.json();
    //       console.log(data);
    //       // Set the API data in the state
    //       setApiData(data);
    //       setIsModalOpen(true);

    //     //   setFlightData(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
  
    //   // Call the fetchData function when the component mounts
    //   fetchData();
    // }, [from, to, journeyDate]);
  
     
    return (
        <Fragment>

    
<form id="page_form" style={{height: 'auto !important'}}> <div class="body-mains" style={{height: 'auto !important'}}>

<div class="bg-white  header">
<div class="container">
<nav class="navbar navbar-expand-xl navbar-light">
<a class="navbar-brand" href="/">
<img src="https://www.vimaansafar.com/img/vimaansafar_logo.png" alt="VimaanSafar" class="pt-0 pb-0" width="200"/>
</a>
<div class="collapse navbar-collapse " id="navbarText" style="text-align:left">
<div class="breadcrumb_a ml-auto mr-auto flat">
<a href="#" class="active">Search</a>
<a href="#" class="">Select</a>
<a href="#" class="">Payment</a>
<a href="#" class="">Confirmation</a>
</div>
</div>



<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

</nav>

</div>
</div>

<div class="top-bar font-weight-bold" style="z-index: 1000;"><div class=" " id="clockdiv"><div class="text-center p-2" style="background-color:#eaffef; color:#318c0b;border-top:solid 1px #b1f7c1;font-size:15px;"><i class="zmdi zmdi-timer "></i> 32 min 28 sec left</div></div></div><div></div>
<div class="bg-modify pt-3 pb-0">
<div class="container"> <div class="modify-search-xs text-center text-white d-block d-lg-none">
<h3>

<img src="https://www.vimaansafar.com/img/filter.png" alt="VimaanSafar" class="left-icon show-filter pointer p-1" style="border: 1px solid #fff; border-radius: 3px; width: 32px; min-height: 39px;"/>
DEL <i class="zmdi zmdi-arrow-right text-center show-filter pointer"></i></h3><h3>BOM
<i class="zmdi zmdi-edit right-icon p-1" onclick="event.stopPropagation();event.preventDefault();$('#edit_form').modal('show')"></i>
</h3>
<span>Wed, 13 Sep | <b>1</b> Traveller | Economy</span>
</div>
<div class="clearfix"></div>
<div class="row d-none d-lg-block modify-search">
<div class="col text-light">
<div class="d-flex">
<div class="pt-1"><i class="zmdi zmdi-airplane"></i></div>
<div class="pt-1 pl-2"><b>New Delhi</b><span class="search-top-display"> (DEL)</span> - <b>Mumbai</b> <span class="search-top-display">(BOM)</span></div>
<div class="pt-1 pl-4"><i class="zmdi zmdi-calendar"></i></div>
<div class="pt-1 pl-2"><span class="search-top-display">Depart on</span> <b>Wed, 13 Sep</b></div>
<div class="pt-1 pl-4"><i class="zmdi zmdi-account-circle"></i></div>
<div class="pt-1 pl-2"><span class="search-top-display"><b>1</b> Traveller, Economy</span></div>
<div class="ml-auto "><button type="button" class="btn btn-danger btn bgshade-2" onclick="event.stopPropagation();event.preventDefault();$('#edit_form').modal('show')"><i class="zmdi zmdi-edit"></i> Change</button></div>
<div class="show-filter btn btn-danger btn bgshade-2 d-lg-none"><i class="zmdi zmdi-filter-list"></i> Filters</div>
</div>
</div>
</div>
<div class="row">
<div class="clearfix"></div>
<div class="col">
<hr class=""/>
</div>
</div></div>
</div>
<div class="container mb-3" style="height: auto !important;">
<div id="preloader_setup" class="fadeIn animated" style="height: auto !important;">
<div class="row" style="height: auto !important;">
<div class="col-3 order-2 order-lg-1 filter-main" id="filt" style="height: auto !important; min-height: 0px !important;">
<div class="" style="height: auto !important;">
<div class="filter-header d-lg-none">
<h6>Filter</h6>
<div class="filter-bar"><i class="zmdi zmdi-close-circle pointer" style="font-size:25px"></i> </div>
</div>
<div class="filter-content" style="height: auto !important;">
<div id="filter_nav" style="height: auto !important;"><div class="rounded bg-white" style="overflow:hidden">
<div class="card border-0">
          <article class="card-group-item">
        <header class="card-header">
            <h6 class="title mb-0"><b>Stops <i class="zmdi zmdi-chevron-up"></i></b> <span class="float-right"><a href="javascript:void(0)" onclick="check_all('stop_box')" class="reset_f">reset</a></span></h6>
        </header>
        <div class="filter-content">
            <div class="card-body" id="stop_box">

            <div class="list-group  d-flex list-group-horizontal">

                   

                    <div class="list-group-item pt-2 flex-fill pb-2 pl-2  pr-2 text-center position-relative pointer  only_main" onclick="selectonly('stop_box','stop-0')">
                        <input type="checkbox" class=" " id="stop-0" name="stop[0]" value="0" checked="checked"/><br/>


                        <span class="small">Non Stop</span><br/><span class="money">₹5358</span>
                        
                        

                    </div>


                  
                    <div class="list-group-item pt-2 flex-fill pb-2 pl-2  pr-2 text-center position-relative pointer  only_main" onclick="selectonly('stop_box','stop-1')">
                        <input type="checkbox" class=" " id="stop-1" name="stop[1]" value="1" checked="checked"/><br/>


                        <span class="small">1 Stop</span><br/><span class="money">₹5428</span>
                        
                        

                    </div>


                                  

                    <div class="list-group-item pt-2 flex-fill pb-2 pl-2  pr-2 text-center position-relative pointer  only_main" onclick="selectonly('stop_box','stop-2')">
                        <input type="checkbox" class=" " id="stop-2" name="stop[2]" value="2" checked="checked"/><br/>


                        <span class="small">2 Stops</span><br/><span class="money">₹13361</span>
                        
                        

                    </div>


                    

  
                </div>


            </div> 
        </div>
    </article>
           

    <article class="card-group-item">
        <header class="card-header">
            <h6 class="title mb-0"><b>Airlines <i class="zmdi zmdi-chevron-up"></i></b> <span class="float-right"><a href="javascript:void(0)" onclick="check_all('airline_box')" class="reset_f">reset</a></span> </h6>
        </header>
        <div class="filter-content">



            <div class="card-body" id="airline_box">

                
                    <div class="custom-control custom-checkbox only_main pb-2" onclick="selectonly('airline_box','airline-SG-only')">
                        <span class="float-right money">₹5358</span>
                        


                        <input type="checkbox" class="custom-control-input" id="airline-SG-only" name="airline[0]" value="SG-only" checked="checked"/>
                        <label class="custom-control-label form-filter" for="airline-SG-only">Spice Jet<div class="small text-muted p-0"></div></label>
                    </div>
                    
                    <div class="custom-control custom-checkbox only_main pb-2" onclick="selectonly('airline_box','airline-6E-only')">
                        <span class="float-right money">₹5428</span>
                        


                        <input type="checkbox" class="custom-control-input" id="airline-6E-only" name="airline[1]" value="6E-only" checked="checked"/>
                        <label class="custom-control-label form-filter" for="airline-6E-only">Indigo Air<div class="small text-muted p-0"></div></label>
                    </div>
                    
                    <div class="custom-control custom-checkbox only_main pb-2" onclick="selectonly('airline_box','airline-AI-only')">
                        <span class="float-right money">₹6479</span>
                        


                        <input type="checkbox" class="custom-control-input" id="airline-AI-only" name="airline[2]" value="AI-only" checked="checked"/>
                        <label class="custom-control-label form-filter" for="airline-AI-only">Air India<div class="small text-muted p-0"></div></label>
                    </div>
                    
                    <div class="custom-control custom-checkbox only_main pb-2" onclick="selectonly('airline_box','airline-UK-only')">
                        <span class="float-right money">₹7418</span>
                        


                        <input type="checkbox" class="custom-control-input" id="airline-UK-only" name="airline[3]" value="UK-only" checked="checked"/>
                        <label class="custom-control-label form-filter" for="airline-UK-only">Vistara<div class="small text-muted p-0"></div></label>
                    </div>
                    
                    <div class="custom-control custom-checkbox only_main pb-2" onclick="selectonly('airline_box','airline-I5-only')">
                        <span class="float-right money">₹7487</span>
                        


                        <input type="checkbox" class="custom-control-input" id="airline-I5-only" name="airline[4]" value="I5-only" checked="checked"/>
                        <label class="custom-control-label form-filter" for="airline-I5-only">Air Asia<div class="small text-muted p-0"></div></label>
                    </div>
                    
                    <div class="custom-control custom-checkbox only_main pb-2" onclick="selectonly('airline_box','airline-MUL-only')">
                        <span class="float-right money">₹57173</span>
                        


                        <input type="checkbox" class="custom-control-input" id="airline-MUL-only" name="airline[5]" value="MUL-only" checked="checked"/>
                        <label class="custom-control-label form-filter" for="airline-MUL-only">Multiple Airlines<div class="small text-muted p-0"></div></label>
                    </div>
                    

            </div> 
        </div>
    </article>

      <article class="card-group-item">
        <header class="card-header">
            <h6 class="title mb-0"><b>Price <i class="zmdi zmdi-chevron-up"></i></b> <span class="float-right"><a href="javascript:void(0)" onclick="$(&quot;#price_f&quot;).data(&quot;ionRangeSlider&quot;).reset();" class="reset_f">reset</a></span></h6>
        </header>
        <div class="filter-content">
            <div class="card-body">
                <div>

                    <span class="irs js-irs-0"><span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="display: none; visibility: hidden;">0</span><span class="irs-max" style="display: none; visibility: hidden;">1</span><span class="irs-from" style="visibility: visible; left: -4.71221%;">₹5 358</span><span class="irs-to" style="visibility: visible; left: 86.2864%;">₹91 428</span><span class="irs-single" style="visibility: hidden; left: 30.8625%;">₹5 358 — ₹91 428</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 3.95257%; width: 92.0949%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to" style="left: 92.0949%;"></span></span><input type="text" id="price_f" name="price_f" value="" class="irs-hidden-input" tabindex="-1" readonly=""/>
                </div>

            </div> 
        </div>
    </article>
    
    
    <article class="card-group-item">
        <header class="card-header">
            <h6 class="title mb-0"><b>Times <i class="zmdi zmdi-chevron-up"></i></b> <span class="float-right"><a href="javascript:void(0)" onclick="$(&quot;#take_off_d&quot;).data(&quot;ionRangeSlider&quot;).reset();$(&quot;#landing_d&quot;).data(&quot;ionRangeSlider&quot;).reset();$(&quot;#take_off_r&quot;).data(&quot;ionRangeSlider&quot;).reset();$(&quot;#landing_r&quot;).data(&quot;ionRangeSlider&quot;).reset();" class="reset_f">reset</a></span></h6>
        </header>
        <div class="filter-content">
            <div class="card-body">
                <div>
                    <div class="pb-2 pt-2"><i class="zmdi zmdi-flight-takeoff"></i> Depart from New Delhi (DEL)</div>
                    <span class="irs js-irs-1"><span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="display: none; visibility: hidden;">0</span><span class="irs-max" style="display: none; visibility: hidden;">1</span><span class="irs-from" style="visibility: visible; left: -6.86451%;">17:25 PM</span><span class="irs-to" style="visibility: visible; left: 85.184%;">23:15 PM</span><span class="irs-single" style="visibility: hidden; left: 27.0828%;">17:25 PM — 23:15 PM</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 3.95257%; width: 92.0949%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to" style="left: 92.0949%;"></span></span><input type="text" id="take_off_d" name="take_off_d" value="" class="irs-hidden-input" tabindex="-1" readonly=""/>
                </div>

                <div>
                    <div class="pb-2 pt-2"><i class="zmdi zmdi-flight-land"></i> Arrive at Mumbai (BOM)</div>
                    <span class="irs js-irs-2"><span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="display: none; visibility: hidden;">0</span><span class="irs-max" style="display: none; visibility: hidden;">1</span><span class="irs-from" style="visibility: visible; left: -7.66427%;">00:05 AM</span><span class="irs-to" style="visibility: visible; left: 84.8598%;">23:50 PM</span><span class="irs-single" style="visibility: hidden; left: 25.718%;">00:05 AM — 23:50 PM</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 3.95257%; width: 92.0949%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to" style="left: 92.0949%;"></span></span><input type="text" id="landing_d" name="landing_d" value="" class="irs-hidden-input" tabindex="-1" readonly=""/>
                </div>
                
            </div> 
        </div>
    </article>




<input type="hidden" id="page" name="page" value="1"/>
               

</div>
</div>
<div class="mt-2">
    <img class="d-block w-100 rounded" src="img/sale_vs.png"/>  
</div>
<div class="mt-2">
    <img class="d-block w-100 rounded" src="img/google_rev.png"/>  
</div>

<div class="mt-2 text-center">


</div>

<div class="mt-2 text-center">

            </div></div>
</div>
</div>
</div>
<div class="col-12 col-lg-9  order-1 order-lg-2">

<div id="matrix_nav">
        
<div class="mb-3">
                 
                                          <img src="img/sseepaysmall17_v.jpg?v" class="w-100 rounded d-none d-sm-block"/>
                    <img src="img/seepay1_17v.jpg?v" class="w-100 rounded d-block d-sm-none"/>
                                         

                                </div>


                                
                    

  <div class="bg-light   bg-white  rounded fadeIn animated mb-3 pl-2 pr-2">
    <div class="Wrapper">
        <nav id="" class="owl-carousel-wrap col-carousel">
            <div id="" class="owl-carousel text-center owl-loaded owl-drag">
                                    
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                    
               
            <div class="owl-stage-outer"><div class="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition:' all 0s ease 0s', width:' 2506'}}><div class="owl-item active"  style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=13/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect " style={{backgroundColor:'#d2e4ff'}}>
                    <div class="ml-auto mr-auto">
                    13 Sep, Wed                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹5281</div>
                    
                    </a></div><div class="owl-item active" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=14/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    14 Sep, Thu                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3896</div>
                    
                    </a></div><div class="owl-item active" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=15/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    15 Sep, Fri                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4236</div>
                    
                    </a></div><div class="owl-item active" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=16/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    16 Sep, Sat                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3896</div>
                    
                    </a></div><div class="owl-item active" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=17/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    17 Sep, Sun                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3896</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=18/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    18 Sep, Mon                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3896</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=19/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    19 Sep, Tue                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4063</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=20/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    20 Sep, Wed                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=21/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    21 Sep, Thu                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=22/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    22 Sep, Fri                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3896</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=23/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    23 Sep, Sat                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=24/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    24 Sep, Sun                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4797</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=25/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    25 Sep, Mon                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3896</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=26/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    26 Sep, Tue                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=27/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    27 Sep, Wed                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=28/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    28 Sep, Thu                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4122</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=29/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    29 Sep, Fri                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4236</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=30/09/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    30 Sep, Sat                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4797</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=01/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    01 Oct, Sun                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4757</div>
                    
                    </a></div><div class="owl-item"style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=02/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    02 Oct, Mon                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4468</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=03/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    03 Oct, Tue                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=04/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    04 Oct, Wed                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3723</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=05/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    05 Oct, Thu                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=06/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    06 Oct, Fri                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item"style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=07/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    07 Oct, Sat                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹4064</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=08/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    08 Oct, Sun                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3908</div>
                    
                    </a></div><div class="owl-item" style={{width: 92.8}}><a href="https://www.vimaansafar.com/search?origin_airport=DEL&amp;destination_airport=BOM&amp;trip_start_date=09/10/2023&amp;return_date_new=n&amp;adult=1&amp;child=0&amp;infant=0&amp;class=e&amp;source=flight-calendar&amp;pgn=flights" onclick="$('.md-modal').addClass('md-show');" class=" pt-2 pb-2 d-block item small text-dark hovereffect ">
                    <div class="ml-auto mr-auto">
                    09 Oct, Mon                    </div>
                    <div class="font-weight-bold text-success pt-1 money">₹3792</div>
                    
                    </a></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><i class="zmdi zmdi-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="zmdi zmdi-chevron-right"></i></button></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>
        </nav>
    </div>
</div>



            




      
{/* <!-- TABS--> */}
<div class="mt-3 p-2 tab_design bg-light p-0 mt-3 bg-white  rounded">
    <ul class="nav nav-tabs nav-fill">
    <input type="hidden" id="open_tab" value="tab-0" name="open-tab"/>
        
        <li class="nav-item">
            <a class="nav-link tab-link active" href="javascript:void(0)" onclick="settab('tab-0');" id="tab-0">Lowest Fare            
                        <br/><b class="money">₹5358</b></a>
        </li>
            
        <li class="nav-item">
            <a class="nav-link tab-link " href="javascript:void(0)" onclick="settab('tab-4');" id="tab-4">Discounted Flights            
            <span class="small badge badge-success animate wobble infinite ">NEW</span>            <br/><b class="money">₹5311</b></a>
        </li>
            
        <li class="nav-item">
            <a class="nav-link tab-link " href="javascript:void(0)" onclick="settab('tab-1');" id="tab-1">Non Stop            
                        <br/><b class="money">₹5358</b></a>
        </li>
            

    </ul>
                        </div></div>

<div id="sort_nav"><div class="row mt-3">
<div class="col-6">
<span class="text-light">118 of 118 flights</span>
</div>
<div class="col-6 text-right">
 <div class="dropdown">
  
  <select class="custom-select custom-select-sm mr-sm-2 col-sm-5 col-12 border-0" id="inlineFormCustomSelect" style={{fontWeight: 'normal'}} onchange="execute_form()" name="sorting">
        <option value="3" selected="selected">Recommended</option>
        <option value="0">Price (Low to High)</option>
        <option value="1">Price (High to Low)</option>
        <option value="2">Time (Low to High)</option>
  </select>
</div>
</div>
</div></div>

<div id="flight_nav">
    <div class="bg-light mt-3 bg-white  rounded slideInUp animated flight-summary" style={{overflow:'hidden'}}>
        
            <div class="row no-gutters  detail-shadow">
                
                <div class="col-12 col-md-2 order-md-2 bg-light">
                    <div class="">
                    
                        <div class="mt-auto p-3 ">
                            <div class="row">
                                <div class="col-7 col-md-12 text-md-right"> 
                                    
                                                                    
                                    
                               
                                
                                    
                                                                      
                                  <h4 class="mb-2 font-weight-bold "><span class="money d-none d-sm-block" data-ccy="USD">₹5211</span>

                                  
                                      
                                  <span class="money d-block d-sm-none" data-ccy="USD">₹5211</span>



                                <span></span>
                                </h4>

                                    <small class="text-muted mt-0 pt-0" style={{position: 'relative', top:-12, fontSize: '10px!important'}}>per adult</small>

                                                                    <span class="text-danger font-weight-bold d-inline-block pl-1 d-md-block" style={{fontSize:10, fontWeight:'bold',position: 'relative', top:-12, fontSize: '10px!important'}}>
                                                                        <i class="zmdi zmdi-notifications animated infinite wobble zmdi-hc-fw"></i> instant ₹147 off</span>
                                  
                                  

                                  

                                                                        </div>
                                <div class="col-5 text-right  col-md-12 ">
                                                                        <button id="btn65018626d796d98e5f0ac3f9_d_1025" onclick="validatefl('65018626d796d98e5f0ac3f9_d_1025', '','')" class="btn btn-danger   bgshade-2 font-weight-bold" type="button">SELECT <i class="zmdi zmdi-chevron-right animated infinite wobble zmdi-hc-fw"></i>
</button>


                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-10 order-sm-1">

                
                
  
                  <div class="m-2" style={{height:25 , fontSize:13}}><div class="category cat-news"> Regular Deal</div>
                                        
                                        <div class="danger float-right">  
                           </div> 
                           
                                        </div> 
                                  

                                    <div class="row no-gutter">
                    
                                            <div class="col-12">

                        


                                                                        <div class="p-3 show-flight-detail" id="summary-6501862b8939d29c7a06aeb6" >
                                                    
                            <div class="row keel-mom no-gutters">
                                <div class="col-2 col-md-2">
                                                                    <span class="badge badge-primary  mb-1">Depart</span>  <br/>
                                                                        <img src="img/air/SG.png" class="al" width="30" height="30"/> &nbsp;&nbsp;&nbsp;<span class="text-muted d-none d-lg-inline ">Spice Jet</span>
                                </div>
                                <div class="col-3 col-md-4">
                                    <div class="Flights-Results-LegInfo">
                                        <div class="col-field time depart">
                                            <span class="bottom ">DEL</span> 
                                            <span class="top">
                                                <span class="departure-time base-time">21:25</span>
                                                <span class="time-meridiem meridiem"></span>
                                            </span>
                                            <span class="name ">New Delhi</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 col-md-2">
                                    <div class="Flights-Results-LegInfo">
                                        <div class="col-field stops ml-auto mr-auto">
                                            <div class="duration">02h 25m</div>
                                            <div class="top">
                                                <div id="XGWA-info-leg-0-stops" class="Flights-Results-StopsPlot circle">                                
                                                    <span class="axis">
                                                                                                            </span>
                                                </div>
                                            </div>
                                            <div class="bottom">
                                                                                          Non stop                                              
                                             </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3 col-md-4">
                                    <div class="Flights-Results-LegInfo">
                                        <div class="col-field time return">
                                            <span class="top">
                                                <span class="arrival-time base-time">23:50</span>
                                                <span class="time-meridiem meridiem"></span>   

                                                                                            </span>
                                            <span class="bottom ">BOM</span>
                                            <span class="name ">Mumbai</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                                            </div>


                    <hr class="m-0"/>
                    <div class="p-2 pl-3">
                        <div class="row">
                            <div class="col-4 col-sm-4 ">
                                                        
                            
                            <a class="hovereffect show-flight-detail " href="javascript:void(0)" onclick="flight_details('6501862b8939d29c7a06aeb6')">Flight Detail <i class="zmdi zmdi-chevron-up zmdi-chevron-down"></i></a>
                                                        
                            
                            </div>
                            
                         
                            <div class="col-8 col-sm-8 text-right">
                                
                                
                                                                                
                                    
                                               <a href="javascript:void(0)" class="text-danger font-weight-bold" onclick="validatefl('65018626d796d98e5f0ac3f9_d_1025', '','')"><u>Apply Coupon &amp; Save ₹147</u></a>
                                            
                                            
                                        
                                       
                                
                        
                            </div>

                            <div class="col-12">
                            <div id="detail-6501862b8939d29c7a06aeb6" style={{display: 'none', backgroundColor: '#fff'}} class="pt-3"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div style={{clear: 'both'}}></div>
            

        </div>

        
        <div class="bg-light mt-3 bg-white  rounded slideInUp animated flight-summary" style={{overflow:'hidden'}}>
        
            <div class="row no-gutters  detail-shadow">
                
                <div class="col-12 col-md-2 order-md-2 bg-light">
                    <div class="">
                    
                        <div class="mt-auto p-3 ">
                            <div class="row">
                                <div class="col-7 col-md-12 text-md-right"> 
                                    
                                                                    
                                    
                               

                                    
                               
                                
                           
                                                                      
                                  <h4 class="mb-2 font-weight-bold "><span class="money d-none d-sm-block" data-ccy="USD">₹5710</span>

                                  
                                      
                                  <span class="money d-block d-sm-none" data-ccy="USD">₹5710</span>



                                <span></span>
                                </h4>

                                    <small class="text-muted mt-0 pt-0" style={{position: 'relative', top:-12, fontSize: '10px!important'}}>per adult</small>

                                                                    <span class="text-danger font-weight-bold d-inline-block pl-1 d-md-block"
                                                                     style={{fontSize:10, fontWeight:'bold',position: 'relative', top:-12, fontSize: '10px!important'}}><i class="zmdi zmdi-notifications animated infinite wobble zmdi-hc-fw"></i> instant ₹100 off</span>
                                
                                  

                                  

                                                                        </div>
                                <div class="col-5 text-right  col-md-12 ">
                                                                        <button id="btn65018626d796d98e5f0ac3f9_d_919" onclick="validatefl('65018626d796d98e5f0ac3f9_d_919', '','')" class="btn btn-danger   bgshade-2 font-weight-bold" type="button">SELECT <i class="zmdi zmdi-chevron-right animated infinite wobble zmdi-hc-fw"></i>
</button>


                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-10 order-sm-1">

                
                
  
                  <div class="m-2" style={{height:'25px',fontSize:13}}><div class="category cat-news"> Regular Deal</div>
                                        
                                        <div class="danger float-right">  
                           </div> 
                           
                                        </div> 
                                  

                                    <div class="row no-gutter">
                    
                                            <div class="col-12">

                        


                                                                        <div class="p-3 show-flight-detail" id="summary-6501862af8c89f0cd1103c0b" style="">
                                                    
                            <div class="row keel-mom no-gutters">
                                <div class="col-2 col-md-2">
                                                                    <span class="badge badge-primary  mb-1">Depart</span>  <br/>
                                                                        <img src="img/air/6E.png" class="al" width="30" height="30"/> &nbsp;&nbsp;&nbsp;<span class="text-muted d-none d-lg-inline ">Indigo Air</span>
                                </div>
                                <div class="col-3 col-md-4">
                                    <div class="Flights-Results-LegInfo">
                                        <div class="col-field time depart">
                                            <span class="bottom ">DEL</span> 
                                            <span class="top">
                                                <span class="departure-time base-time">23:15</span>
                                                <span class="time-meridiem meridiem"></span>
                                            </span>
                                            <span class="name ">New Delhi</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 col-md-2">
                                    <div class="Flights-Results-LegInfo">
                                        <div class="col-field stops ml-auto mr-auto">
                                            <div class="duration">02h 05m</div>
                                            <div class="top">
                                                <div id="XGWA-info-leg-0-stops" class="Flights-Results-StopsPlot circle">                                
                                                    <span class="axis">
                                                                                                            </span>
                                                </div>
                                            </div>
                                            <div class="bottom">
                                                                                          Non stop                                              
                                             </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3 col-md-4">
                                    <div class="Flights-Results-LegInfo">
                                        <div class="col-field time return">
                                            <span class="top">
                                                <span class="arrival-time base-time">01:20</span>
                                                <span class="time-meridiem meridiem"></span>   

                                                                                            </span>
                                            <span class="bottom ">BOM</span>
                                            <span class="name ">Mumbai</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                                            </div>


                    <hr class="m-0"/>
                    <div class="p-2 pl-3">
                        <div class="row">
                            <div class="col-4 col-sm-4 ">
                                                        
                            
                            <a class="hovereffect show-flight-detail " href="javascript:void(0)" onclick="flight_details('6501862af8c89f0cd1103c0b')">Flight Detail <i class="zmdi zmdi-chevron-up zmdi-chevron-down"></i></a>
                                                        
                            
                            </div>
                            
                           
                            <div class="col-8 col-sm-8 text-right">
                                
                                
                                                                                
                                    
                                               <a href="javascript:void(0)" class="text-danger font-weight-bold" onclick="validatefl('65018626d796d98e5f0ac3f9_d_919', '','')"><u>Apply Coupon &amp; Save ₹100</u></a>
                                            
                                            
                                        
                                       
                                
                        
                            </div>

                            <div class="col-12">
                            <div id="detail-6501862af8c89f0cd1103c0b" style={{display: 'none', backgroundColor: '#fff'}} class="pt-3"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div style="clear: both;"></div>
            

        </div>
        

     
        </div>
        <div class="mt-3 text-center pagi_box_main"><nav class="Page">
<ul class="clearfix pagination ml-auto mr-auto justify-content-center">
    <li class="copy previous disabled page-item"><a class="page-link" href="#">« Previous</a></li>
    <li class="number page-item active"><a class="page-link" data-pagenumber="1" href="#">1</a></li>
    <li class="number page-item"><a class="page-link" data-pagenumber="2" href="javascript:setPage(2)">2</a></li>
    <li class="number page-item"><a class="page-link" data-pagenumber="3" href="javascript:setPage(3)">3</a></li>
    <li class="number page-item"><a class="page-link" data-pagenumber="4" href="javascript:setPage(4)">4</a></li>
    <li class="number page-item"><a class="page-link" data-pagenumber="5" href="javascript:setPage(5)">5</a></li>
    <li class="copy next page-item"><a class="page-link" href="2">Next »</a></li>
</ul>
</nav>
</div></div>
</div>
</div>
</div>
</div>
<br/>
<br/>









</form>

        </Fragment>
    )
}
export default Flight_result1;