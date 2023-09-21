import React, {useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
function Flight_form(){
 
    const navigate = useNavigate(); // Initialize the useHistory hook

    const [formData, setFormData] = useState({
      from: '',
      to: '',
      journeyDate: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Use history.push to navigate to the next page with query parameters
      navigate(`/Flight_result1?from=${formData.from}&to=${formData.to}&journeyDate=${formData.journeyDate}`);
    };
  
    
    return (
        <Fragment>
    <div id="flight_form" style={{display:'none'}}>
        <form name="Search_Flights"  onSubmit={handleFormSubmit}>
        
        <div class="row">
        <div class="col-12 mb-2 mt-2 text-left">
        <div class="form-check form-check-inline">
        <label class="form-check-label btn-outline-secondary btn btn-sm" style={{width:'120px'}} for="returnDateRequiredYes">
        <input class="form-check-input" type="radio" name="return_date_new" style={{position:'relative', top:'2px'}} id="returnDateRequiredYes" value="y"/>
        Round Trip</label>
        </div>
        <div class="form-check form-check-inline">
        <label class="form-check-label btn-outline-secondary btn btn-sm"style={{width:'120px'}} for="returnDateRequiredNo">
        <input class="form-check-input" type="radio" name="return_date_new" style={{position:'relative', top:'2px'}} id="returnDateRequiredNo" value="n" checked/>
        One Way</label>
        </div>
        </div>
        </div>
        
        <div class="row">
        <div class="col">
        <div id="form_error"></div>
        </div>
        </div>
        <div class="row">
        
        <div class="col-6 col-lg-6 mt-2 d-block d-sm-none bg-l">
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="board_id" class="formRow--input-wrapper  active">
        <div class="formRow--input " style={{padding:'0 !important', margin:'0 !important'}}><div class id="origin_pl_mob" style={{'font-size':'23px','text-align':'center', 'padding':'20px', 'padding-left':'30px', 'font-weight':'bold'}}>FROM</div></div>
        <span class="placeholder">FROM</span>
        <i class="zmdi zmdi-flight-takeoff zmdi-hc-2x icf mt-2"></i>
        </label>
        </div>
        </fieldset>
        </div>
        <div class="col-6 col-lg-6 mt-2 d-block d-sm-none bg-l" onclick="destinationModal()">
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="board_id" class="formRow--input-wrapper  active">
        <div class="formRow--input" style={{padding:'0 !important' , margin:'0 !important'}}>
        <div class id="destination_pl_mob" style={{'font-size':'23px','text-align':'center', 'padding':'20px', 'padding-left':'30px', 'font-weight':'bold'}}>TO</div>
        </div>
        <span class="placeholder">TO</span>
        <i class="zmdi zmdi-flight-land zmdi-hc-2x icf  mt-2"></i>
        </label>
        </div>
        </fieldset>
        </div>
        
        <div class="col-12 col-lg-12 mt-2 d-none d-sm-block" >
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="origin" class="formRow--input-wrapper js-inputWrapper">
        <input type="text"   name="from"
          value={formData.from}
          onChange={handleInputChange} id="origin" class="formRow--input js-input addclearbutton"  autocomplete="off" placeholder="From"/>
        <i class="zmdi zmdi-flight-takeoff zmdi-hc-2x icf"></i>
        <input name="origin_airport" id="origin_airport" type="hidden" value/>
        </label>
        </div>
        </fieldset>
        </div>
        <div class="d-none d-sm-block"><i id="swapAirport" class="zmdi zmdi-hc-3x zmdi-swap-vertical-circle swapicon"></i></div>
        
        <div class="col-12 col-lg-12 mt-2 d-none d-sm-block">
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="destination" class="formRow--input-wrapper js-inputWrapper">
        <input type="text"    name="to"
          value={formData.to}
          onChange={handleInputChange} id="destination" class="formRow--input js-input addclearbutton"  autocomplete="off" placeholder="To" />
        <i class="zmdi zmdi-flight-land zmdi-hc-2x icf"></i>
        <input name="destination_airport" id="destination_airport" type="hidden" value/>
        </label>
        </div>
        </fieldset>
        </div>
        
        
        
        <div class="col-6 col-sm-6 col-lg-6 mt-2 date-row" >
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="date" class="formRow--input-wrapper js-inputWrapper">
        {/* <input type="text" name="trip_start_date" id="dateNew" readonly class="formRow--input js-input" autocomplete="off"  placeholder="Depart Date"  
          value=""
          onChange={handleInputChange}/> */}
          <input type="text" name="trip_start_date" class="formRow--input js-input" autocomplete="off" value="12/09/2023" placeholder="" aria-haspopup="true" aria-readonly="false"  aria-invalid="false"></input>
        <i class="zmdi zmdi-calendar-alt zmdi-hc-2x icf"></i>
        </label>
        </div>
        </fieldset>
        </div>
        <div class="col-6 col-sm-6 col-lg-6 mt-2 date-row" id="round-trip">
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="date" class="formRow--input-wrapper js-inputWrapper">
        <input type="text" name="trip_end_date" id="dateNewRet" readonly class="formRow--input js-input" autocomplete="off"  value={formData.trip_end_date}
          onChange={handleInputChange}  placeholder="Return Date"/>
        <i class="zmdi zmdi-calendar-alt zmdi-hc-2x icf"></i>
        <a href="javascript:void(0)" tabindex="-1" class="clearbtn " id="round-trip-remove" ><div class><i class="zmdi zmdi-close-circle text-danger"></i></div></a>
        </label>
        </div>
        </fieldset>
        </div>
        <div class="col-6 col-sm-6 col-lg-6 mt-2 date-row" style={{display:'none'}} id="round-trip-add">
        <div class="pt-0 pt-3"><a href="javascript:void(0)" class="text-primary"><i class="zmdi zmdi-calendar-alt "></i> <u class="text-primary">Add Return Date</u></a></div>
        </div>
        
        
        <div class="col-12 col-md-8 mt-3">
        <fieldset class="formRow">
        <div class="formRow--item">
        <label for="traveller" class="formRow--input-wrapper js-inputWrapper">
        <input type="text" name="traveller" id="traveller" class="formRow--input js-input travellerDetails" autocomplete="off" value="1 Travellers, Economy" readonly placeholder="Travellers & Cabin"/>
        <i class="zmdi zmdi-account-circle zmdi-hc-2x icf"></i>
        <i class="zmdi zmdi-chevron-down zmdi-hc-2x arrowDwn"></i>
        </label>
        </div>
        </fieldset>
        <div class="pax-popover" style={{position: 'absolute'}} >
        <i class="zmdi zmdi-hc-2x zmdi-close" style={{position: 'absolute',right: '3px',top:' -3px','z-index':'1'}} onclick="$('.pax-popover').hide();"></i>
        <div class="d-flex justify-content-start">
        <div class="p-2 pt-3 font-weight-bold">Adult</div>
        <div class="ml-auto p-2">
        <div class="input-group">
        <span class="input-group-btn">
        <button type="button" class="btn operator btn-sm btn-primary mr-1 p-1" data-type="minus" data-field="adult">
        <i class="zmdi zmdi-hc-2x zmdi-minus-circle"></i>
        </button>
        </span>
        <input type="text" name="adult" readonly="readonly" class="form-control paxCountField" value="1" min="1" max="9"/>
        <span class="input-group-btn">
        <button type="button" class="btn operator btn-sm btn-primary ml-1 p-1" data-type="plus" data-field="adult">
        <i class="zmdi zmdi-hc-2x zmdi-plus-circle"></i>
        </button>
        </span>
        </div>
        </div>
        </div>
        <div class="d-flex justify-content-start">
        <div class="p-2 pt-3 font-weight-bold">Child</div>
        <div class="ml-auto p-2">
        <div class="input-group" style={{'margin-top':'10px'}}>
        <span class="input-group-btn">
        <button type="button" class="btn operator btn-sm btn-primary mr-1 p-1" data-type="minus" data-field="child">
        <i class="zmdi zmdi-hc-2x zmdi-minus-circle"></i>
        </button>
        </span>
        <input type="text" name="child" readonly="readonly" class="form-control paxCountField" value="0" min="0" max="6"/>
        <span class="input-group-btn">
        <button type="button" class="btn operator btn-sm btn-primary ml-1 p-1" data-type="plus" data-field="child">
        <i class="zmdi zmdi-hc-2x zmdi-plus-circle"></i>
        </button>
        </span>
        </div>
        </div>
        </div>
        <div class="d-flex justify-content-start">
        <div class="p-2 pt-3 font-weight-bold">Infant</div>
        <div class="ml-auto p-2">
        <div class="input-group" style={{marginTop:10}}>
        <span class="input-group-btn">
        <button type="button" class="btn operator btn-sm btn-primary mr-1 p-1" data-type="minus" data-field="infant">
        <i class="zmdi zmdi-hc-2x zmdi-minus-circle"></i>
        </button>
        </span>
        <input type="text" name="infant" readonly="readonly" class="form-control paxCountField" value="0" min="0" max="6"/>
        <span class="input-group-btn">
        <button type="button" class="btn operator btn-sm btn-primary ml-1 p-1" data-type="plus" data-field="infant">
        <i class="zmdi zmdi-hc-2x zmdi-plus-circle"></i>
        </button>
        </span>
        </div>
        </div>
        </div>
        <div class="d-flex justify-content-start">
        <div class="p-2 pt-3 font-weight-bold">Class</div>
        <div class="ml-auto p-2">
        <select name="classi" id="classi" class="form-control form-control-sm">
        <option value="economy" selected="selected">Economy</option>
        <option value="business">Business</option>
        <option value="first">First</option>
        </select>
        </div>
        </div>
        <div class="text-center">
        
        <input type="submit" name="done" class="btn btn-danger bgshade-2 font-weight-bold" style={{width: '150px'}} value="Done"/>
        </div>
        </div>
        <input type="hidden" name="adult" id="adult" value="1"/>
        <input type="hidden" name="child" id="child" value="0"/>
        <input type="hidden" name="infant" id="infant" value="0"/>
        <input type="hidden" name="class" id="class" value="economy"/>
        <input type="hidden" name="source" id="source" value="direct"/>
        <input type="hidden" name="pgn" id="pgn" value="index"/>
        </div>
        
        <div class="col-12 col-md-4 mt-3">
        <div class="form-group">
        <button class="btn btn-danger  mt-0 btn-block bgshade-2 btn-lg font-weight-bold" type="submit" name="search" > Search</button>
        </div>
        </div>
        </div>
        </form>
        </div>
        </Fragment>
    )
}

export default Flight_form;
