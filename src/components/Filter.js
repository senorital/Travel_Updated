import React, { Fragment } from "react";
function Filter(){
    return (
        <div class="col-lg-3">
        <div class="left_side_search_area">
            <div class="left_side_search_boxed">
                <div class="left_side_search_heading">
                    <h5>Filter by price</h5>
                </div>
                <div class="filter-price">
                    <div id="price-slider"></div>
                </div>
                <button class="apply" type="button">Apply</button>
            </div>
            <div class="left_side_search_boxed">
                <div class="left_side_search_heading">
                    <h5>Number of stops</h5>
                </div>
                <div class="tour_search_type">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultf1"/>
                        <label class="form-check-label" for="flexCheckDefaultf1">
                            <span class="area_flex_one">
                                <span>1 stop</span>
                                <span>20</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultf2"/>
                        <label class="form-check-label" for="flexCheckDefaultf2">
                            <span class="area_flex_one">
                                <span>2 stop</span>
                                <span>16</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultf3"/>
                        <label class="form-check-label" for="flexCheckDefaultf3">
                            <span class="area_flex_one">
                                <span>3 stop</span>
                                <span>30</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultf4"/>
                        <label class="form-check-label" for="flexCheckDefaultf4">
                            <span class="area_flex_one">
                                <span>Non-stop</span>
                                <span>22</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="left_side_search_boxed">
                <div class="left_side_search_heading">
                    <h5>Flight class</h5>
                </div>
                <div class="tour_search_type">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt1"/>
                        <label class="form-check-label" for="flexCheckDefaultt1">
                            <span class="area_flex_one">
                                <span>Economy</span>
                                <span>20</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt2"/>
                        <label class="form-check-label" for="flexCheckDefaultt2">
                            <span class="area_flex_one">
                                <span>Business</span>
                                <span>26</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="left_side_search_boxed">
                <div class="left_side_search_heading">
                    <h5>Airlines</h5>
                </div>
                <div class="tour_search_type">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaults1"/>
                        <label class="form-check-label" for="flexCheckDefaults1">
                            <span class="area_flex_one">
                                <span>Quatar Airways</span>
                                <span>17</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaults2"/>
                        <label class="form-check-label" for="flexCheckDefaults2">
                            <span class="area_flex_one">
                                <span>Fly Amirates </span>
                                <span>14</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaults3"/>
                        <label class="form-check-label" for="flexCheckDefaults3">
                            <span class="area_flex_one">
                                <span>Novo Air </span>
                                <span>62</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaults4"/>
                        <label class="form-check-label" for="flexCheckDefaults4">
                            <span class="area_flex_one">
                                <span>Air Asia </span>
                                <span>08</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaults5"/>
                        <label class="form-check-label" for="flexCheckDefaults5">
                            <span class="area_flex_one">
                                <span>Singapore Airlines </span>
                                <span>12</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="left_side_search_boxed">
                <div class="left_side_search_heading">
                    <h5>Refundable</h5>
                </div>
                <div class="tour_search_type">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultp1"/>
                        <label class="form-check-label" for="flexCheckDefaultp1">
                            <span class="area_flex_one">
                                <span>Yes</span>
                                <span>17</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultp2"/>
                        <label class="form-check-label" for="flexCheckDefaultp2">
                            <span class="area_flex_one">
                                <span>No</span>
                                <span>14</span>
                            </span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultp3"/>
                        <label class="form-check-label" for="flexCheckDefaultp3">
                            <span class="area_flex_one">
                                <span>As per rules</span>
                                <span>62</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Filter;