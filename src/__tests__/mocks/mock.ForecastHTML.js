module.exports = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta name="viewport" content="width=device-width">

        <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" /><title>National Weather Service</title><meta name="DC.title" content="National Weather Service" /><meta name="DC.description" content="NOAA National Weather Service National Weather Service" /><meta name="DC.creator" content="US Department of Commerce, NOAA, National Weather Service" /><meta name="DC.date.created" scheme="ISO8601" content="" /><meta name="DC.language" scheme="DCTERMS.RFC1766" content="EN-US" /><meta name="DC.keywords" content="weather, National Weather Service" /><meta name="DC.publisher" content="NOAA's National Weather Service" /><meta name="DC.contributor" content="National Weather Service" /><meta name="DC.rights" content="http://www.weather.gov/disclaimer.php" /><meta name="rating" content="General" /><meta name="robots" content="index,follow" />

        <link rel="stylesheet" href="http://js.arcgis.com/3.8/js/esri/css/esri.css" />
        <script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>
        <script type="text/javascript" src="js/jquery.hoverIntent.minified.js"></script>
        <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
        <script type="text/javascript" src="http://js.arcgis.com/3.8/"></script>
        <script type="text/javascript" src="js/ForecastSearch.js"></script>

        <script type="text/javascript" src="js/NidsESRI.js"></script>
        <script type="text/javascript" src="js/federated-analytics.js"></script>
        <script type="text/javascript">
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-40768555-1', 'weather.gov');
            ga('set', 'anonymizeIp', true);
            ga('send', 'pageview');

        </script>

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

        <link rel="stylesheet" type="text/css" href="css/mapclick.css" />
        <!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="css/bootstrap-ie7.css" /><![endif]-->
        <!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="css/mapclick-ie.css" /><![endif]-->
  <link rel="stylesheet" type="text/css" href="css/print.css" />
        <link rel="stylesheet" type="text/css" href="css/search.css" />

        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
        <script type="text/javascript" src="js/cfisurvey/cfi.js"></script>
        <!--[if lte IE 8]><script type="text/javascript" src="js/respond.min.js"></script><![endif]-->
    </head>

    <body>
        <!-- DIV FOR CFI GROUP SURVEY::ALSO REQUIRES SCRIPT TAG IN HEADER -->
        <div id='ZN_9tslIS2mj3KoPgp'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>
        <main class="container">
                <header class="row clearfix" id="page-header">
      <a href="http://www.noaa.gov" id="header-noaa" class="pull-left"><img src="/css/images/header_noaa.png" alt="National Oceanic and Atmospheric Administration"/></a>
      <a href="http://www.weather.gov" id="header-nws" class="pull-left"><img src="/css/images/header_nws.png" alt="National Weather Service"/></a>
      <a href="http://www.commerce.gov" id="header-doc" class="pull-right"><img src="/css/images/header_doc.png" alt="United States Department of Commerce"/></a>
    </header>

                    <nav class="navbar navbar-default row" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-nav">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="top-nav">
                    <ul class="nav navbar-nav">
                        <li><a href="http://www.weather.gov">HOME</a></li>
                        <li class="dropdown"><a href="http://www.weather.gov/forecastmaps" class="dropdown-toggle" data-toggle="dropdown">FORECAST&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.weather.gov">Local</a></li><li><a href="http://digital.weather.gov">Graphical</a></li><li><a href="http://www.aviationweather.gov/">Aviation</a></li><li><a href="http://www.nws.noaa.gov/om/marine/home.htm">Marine</a></li><li><a href="http://water.weather.gov/ahps/">Rivers and Lakes</a></li><li><a href="http://www.nhc.noaa.gov/">Hurricanes</a></li><li><a href="http://www.spc.noaa.gov/">Severe Weather</a></li><li><a href="http://www.srh.noaa.gov/ridge2/fire/">Fire Weather</a></li><li><a href="http://aa.usno.navy.mil/data/docs/RS_OneDay.php">Sun/Moon</a></li><li><a href="http://www.cpc.ncep.noaa.gov/">Long Range Forecasts</a></li><li><a href="http://www.cpc.ncep.noaa.gov">Climate Prediction</a></li></ul>                            </li>
                            <li class="dropdown"><a href="http://www.nws.noaa.gov/climate" class="dropdown-toggle" data-toggle="dropdown">PAST WEATHER&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.nws.noaa.gov/climate/">Past Weather</a></li><li><a href="http://www.nws.noaa.gov/climate/">Heating/Cooling Days</a></li><li><a href="http://www.nws.noaa.gov/climate/">Monthly Temperatures</a></li><li><a href="http://www.nws.noaa.gov/climate/">Records</a></li><li><a href="http://aa.usno.navy.mil/">Astronomical Data</a></li></ul>                            </li>
                            <li class="dropdown"><a href="http://www.weather.gov/safety" class="dropdown-toggle" data-toggle="dropdown">SAFETY&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.floodsafety.noaa.gov">Floods</a></li><li><a href="http://www.nws.noaa.gov/om/Tsunami/index.html">Tsunami</a></li><li><a href="http://www.nws.noaa.gov/beachhazards/">Beach Hazards</a></li><li><a href="http://www.nws.noaa.gov/om/fire/">Wildfire</a></li><li><a href="http://weather.gov/cold">Cold</a></li><li><a href="http://weather.gov/tornado">Tornadoes</a></li><li><a href="http://www.nws.noaa.gov/om/fog/">Fog</a></li><li><a href="http://www.nws.noaa.gov/airquality/">Air Quality</a></li><li><a href="http://www.nws.noaa.gov/om/heat/index.shtml">Heat</a></li><li><a href="http://www.nws.noaa.gov/om/hurricane/index.shtml">Hurricanes</a></li><li><a href="http://www.lightningsafety.noaa.gov/">Lightning</a></li><li><a href="http://www.ripcurrents.noaa.gov/">Rip Currents</a></li><li><a href="http://www.nws.noaa.gov/os/marine/safeboating/">Safe Boating</a></li><li><a href="http://weather.gov/thunderstorm">Thunderstorms</a></li><li><a href="http://www.nws.noaa.gov/om/space">Space Weather</a></li><li><a href="http://www.nws.noaa.gov/os/uv/">Sun (Ultraviolet Radiation)</a></li><li><a href="http://www.weather.gov/safetycampaign">Safety Campaigns</a></li><li><a href="http://www.weather.gov/wind">Wind</a></li><li><a href="http://www.weather.gov/om/drought/">Drought</a></li><li><a href="http://weather.gov/winter">Winter Weather</a></li></ul>                            </li>
                            <li class="dropdown"><a href="http://www.weather.gov/informationcenter" class="dropdown-toggle" data-toggle="dropdown">INFORMATION&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.weather.gov/Owlie's">Owlie's Kids Page</a></li><li><a href="http://www.nws.noaa.gov/com/weatherreadynation/wea.html">Wireless Emergency Alerts</a></li><li><a href="http://www.nws.noaa.gov/com/weatherreadynation">Weather-Ready Nation</a></li><li><a href="http://www.nws.noaa.gov/om/brochures.shtml">Brochures</a></li><li><a href="http://www.nws.noaa.gov/om/coop/">Cooperative Observers</a></li><li><a href="http://www.weather.gov/briefing/">Daily Briefing</a></li><li><a href="http://www.nws.noaa.gov/om/hazstats.shtml">Damage/Fatality/Injury Statistics</a></li><li><a href="http://mag.ncep.noaa.gov/">Forecast Models</a></li><li><a href="http://www.nws.noaa.gov/gis">GIS Data Portal</a></li><li><a href="http://www.nws.noaa.gov/nwr/">NOAA Weather Radio</a></li><li><a href="http://weather.gov/publications">Publications</a></li><li><a href="http://www.nws.noaa.gov/skywarn/">SKYWARN Storm Spotters</a></li><li><a href="http://www.nws.noaa.gov/stormready/">StormReady</a></li><li><a href="http://www.tsunamiready.noaa.gov">TsunamiReady</a></li></ul>                            </li>
                            <li class="dropdown"><a href="http://www.weather.gov/owlie" class="dropdown-toggle" data-toggle="dropdown">EDUCATION&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.nws.noaa.gov/com/weatherreadynation/force.html">Be A Force of Nature</a></li><li><a href="http://www.weather.gov/owlie">NWS Education Home</a></li></ul>                            </li>
                            <li class="dropdown"><a href="http://www.weather.gov/contact-media/" class="dropdown-toggle" data-toggle="dropdown">NEWS&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.weather.gov/news">NWS News</a></li><li><a href="http://www.nws.noaa.gov/com/weatherreadynation/calendar.html">Events</a></li><li><a href="http://www.weather.gov/socialmedia">Social Media</a></li><li><a href="http://www.nws.noaa.gov/om/brochures.shtml">Pubs/Brochures/Booklets </a></li><li><a href="http://www.nws.noaa.gov/pa/nws_contacts.php">NWS Media Contacts</a></li></ul>                            </li>
                            <li class="dropdown"><a href="http://www.weather.gov/search" class="dropdown-toggle" data-toggle="dropdown">SEARCH&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu">                                <li><!-- Begin search code -->
                                    <div id="site-search">
                                        <form method="get" action="http://search.usa.gov/search" style="margin-bottom: 0; margin-top: 0;">
                                            <input type="hidden" name="v:project" value="firstgov" />
                                            <label for="query">Search For</label>
                                            <input type="text" name="query" id="query" size="12" />
                                            <input type="submit" value="Go" />
                                            <p>
                                                <input type="radio" name="affiliate" checked="checked" value="nws.noaa.gov" id="nws" />
                                                <label for="nws" class="search-scope">NWS</label>
                                                <input type="radio" name="affiliate" value="noaa.gov" id="noaa" />
                                                <label for="noaa" class="search-scope">All NOAA</label>
                                            </p>
                                        </form>
                                    </div>
                                </li>
                                </ul>                            </li>
                            <li class="dropdown"><a href="http://www.weather.gov/about" class="dropdown-toggle" data-toggle="dropdown">ABOUT&nbsp;<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://www.weather.gov/about">About NWS</a></li><li><a href="http://www.weather.gov/organization">Organization</a></li><li><a href="http://www.nws.noaa.gov/sp">Strategic Plan</a></li><li><a href="https://sites.google.com/a/noaa.gov/nws-insider/">For NWS Employees</a></li><li><a href="http://www.weather.gov/international/">International</a></li><li><a href="http://www.weather.gov/organization">National Centers</a></li><li><a href="http://www.nws.noaa.gov/tg">Products and Services</a></li><li><a href="http://www.weather.gov/careers/">Careers</a></li><li><a href="http://www.weather.gov/contact">Contact Us</a></li><li><a href="http://www.nws.noaa.gov/glossary">Glossary</a></li></ul>                            </li>
                                                </ul>
                </div>
            </div>
        </nav>

      <div class="contentArea">
              <!-- Start Forecastsearch -->
  <div class="" id="fcst-search">
      <form name="getForecast" id="getForecast" class="form-inline" role="form" action="http://marine.weather.gov/zipcity.php" method="get">
    <div id="getfcst-body">
        <input name="inputstring" type="text" class="form-control" id="inputstring" placeholder="" />
        <input name="btnSearch" id="btnSearch" class="btn btn-default" type="submit" value="Go" />
        <div id="txtHelp"><a href="javascript:void(window.open('http://weather.gov/ForecastSearchHelp.html','locsearchhelp','status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=1,scrollbars=1,height=500,width=530').focus());">View Location Examples</a></div>
    </div>
    <div id="txtError">
        <div id="errorNoResults" style="display:none;">Sorry, the location you searched for was not found. Please try another search.</div>
        <div id="errorMultipleResults" style="display:none">Multiple locations were found. Please select one of the following:</div>
        <div id="errorChoices" style="display:none"></div>
        <input id="btnCloseError" type="button" value="Close" style="display:none" />
    </div>
    <div id="getfcst-head">
        <p>Your local forecast office is</p>
        <h3 id="getfcst-headOffice"></h3>
    </div>
      </form>
  </div>
  <!-- end Forecastsearch -->

            <div id="news-items"><div class="" id="topnews"><h4>Dangerous Fire Weather Conditions in the Southwest U.S. and Above Average Temperatures in the Central and Eastern U.S.</h4><p>Strong winds and very low humidity will create dangerous fire weather conditions in parts of the Desert Southwest, Great Basin, southern Rockies, and High Plains for the next several days. High temperatures on Saturday are forecast to rise well into
the 90s to near 100 degrees for much of the Plains into the Midwest. The heat will begin to spread to the Mid-Atlantic and Northeast on Sunday.  <br /><a class="readMore" href="http://www.wpc.ncep.noaa.gov/discussions/hpcdiscussions.php?disc=pmdspd" target="_blank">Read More...</a></p></div></div>
            <script type="text/javascript">$.get("siteNews.php", {a:"lox"},function(response){ if (response !== "false") $("#topnews").html($(response).find("#topnews").html()); });</script><script type="text/javascript" src="JavaScript/json.js"></script><script type="text/javascript" src="JavaScript/esri_map.js"></script>
<div id="quickLinks">
  <span class="lang-spanish"><a href="http://marine.weather.gov/MapClick.php?zoneid=PZZ673&lg=sp">En Espa&ntilde;ol</a></span>
  <div class="addthis_toolbox addthis_default_style addthis-forecast">
      <a href="http://www.addthis.com/bookmark.php?v=250&amp;pubid=ra-5127a6364d551d04" class="addthis_button_compact">Share</a>
      <span class="addthis_separator">|</span>
      <a class="addthis_button_preferred_1"></a>
      <a class="addthis_button_preferred_2"></a>
      <a class="addthis_button_preferred_3"></a>
      <a class="addthis_button_preferred_4"></a>
      <a class="addthis_button_preferred_5"></a>
  </div>
  <script type="text/javascript">
    var addthis_config = addthis_config || {data_track_addressbar:true, pubid: 'xa-4b05b2d91f18c9cc'};
      $(document).ready(function(){
      jQuery.ajax({
        url: "//s7.addthis.com/js/300/addthis_widget.js#async=1",
        dataType: "script",
        cache: false
      });
      });
  </script>
</div>

  <script language=javascript>document.title ='Zone Area Forecast for Waters from Pt. Sal to Santa Cruz Island CA and westward 60 nm including San Miguel and Santa Rosa Islands';</script>
  <img src="images/track_marine_zone.png" class="hidden" />
  <div class="panel panel-danger"><div class="panel-heading"><h3 class="panel-title">Hazardous Weather Conditions</h3></div><div class="panel-body"><ul><li><a href="showsigwx.php?warnzone=PZZ673&warncounty=marine&firewxzone=&local_place1=55NM SSW Santa Maria CA&product1=Small+Craft+Advisory&lat=34.1682&lon=-120.991" id="anchor-hazards">Small Craft Advisory  until June 10, 03:00 PM PDT</a></li><li><a href="showsigwx.php?warnzone=PZZ673&warncounty=marine&firewxzone=&local_place1=55NM SSW Santa Maria CA&product1=Gale+Warning&lat=34.1682&lon=-120.991" id="anchor-hazards">Gale Warning in effect from June 10,  03:00 PM PDT until June 12, 03:00 AM PDT</a></li></ul></div></div>
  <div class="panel panel-default">
    <div class="panel-heading clearfix">
      <div class="row" style="text-align:center;">
        <p class="marine-update-notice">
          <strong>Last Update:</strong></a> 825 AM PDT Sat Jun 10 2017<br />        </p>
        <p class="marine-nearby-obs">
          <a href="http://www.ndbc.noaa.gov/radial_search.php?lat1=34.1682N&lon1=120.991W&uom=E&dist=50">View Nearby Observations</a>       </p>
      </div>
    </div>
  </div><!-- end of <div class="panel panel-default"> -->

  <!-- 7-Day Forecast -->
  <div id="seven-day-forecast" class="panel panel-default">
    <div class="panel-heading clearfix">
      <div class="row">
        <div class="col-xs-12 col-sm-6" id="more-weather-info">
          <div>
            <h2>For More Weather Information:</h2>
            <p><a id="localWFO" title="Los Angeles/Oxnard, CA" href="http://www.wrh.noaa.gov/lox">Los Angeles/Oxnard, CA Local Forecast Office</a></p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <h1 class="panel-title">55NM SSW Santa Maria CA</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-7 col-lg-8">
      <div id="detailed-forecast" class="panel panel-default">
        <div class="panel-heading collapse-heading clearfix">
          <button type="button" class="menu-toggle" data-toggle="collapse" data-target="#detailed-forecast-body">
            <span class="sr-only">Toggle menu</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse-title">
            <h2 class="panel-title">Marine Zone Forecast</h2>
          </div>
        </div><!-- end of <div class="panel-heading clearfix"> -->
        <div class="panel-body collapsable collapse" id="detailed-forecast-body">
        <div style="font-weight:bold; padding:10px; background:#cdcdcd;"></div><br />   ...SMALL CRAFT ADVISORY IN EFFECT UNTIL 3 PM PDT THIS AFTERNOON...<br />...GALE WARNING IN EFFECT FROM 3 PM PDT THIS AFTERNOON THROUGH LATE SUNDAY NIGHT...<br /><div><strong>Synopsis</strong>: PZZ600-102245-
825 AM PDT Sat Jun 10 2017

.Synopsis for the southern California coast and Santa Barbara
Channel including the Channel Islands National Marine Sanctuary
and National Park...A 1024 mb high was located 1000 nm w of Point
Conception...and a 1004 mb low was located over S Nevada. Strong NW
winds will affect portions of the Coastal Waters this afternoon
through Sunday.

$$<br /><br /></div><div class="row row-odd row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Today</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 15 to 25 kt...with gusts to 35 kt late in the afternoon. Combined seas 6 to 7 ft dominant period 10  seconds...building to 7 to 9 ft dominant period 8 seconds in the  afternoon. </div></div><div class="row row-even row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Tonight</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 20 to 30 kt, with gusts to 35 kt. Combined seas  7 to 9 ft dominant period 8 seconds. </div></div><div class="row row-odd row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Sun</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 20 to 25 kt with gusts to 35 kt. Combined seas 7 to  10 ft dominant period 8 seconds. </div></div><div class="row row-even row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Sun Night</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 20 to 30 kt with gusts to 35 kt. Strongest  around point conception. Combined seas 9 to 11 ft dominant period 8  seconds. </div></div><div class="row row-odd row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Mon</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 15 to 25 kt, with gusts to 30 kt. Combined seas 8 to 10 ft dominant period 8 seconds. </div></div><div class="row row-even row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Mon Night</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 20 to 25 kt with gusts to 35 kt. Combined seas 8 to 10 ft dominant period 8 seconds. </div></div><div class="row row-odd row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Tue</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 15 to 25 kt with gusts to 35 kt. Combined seas 7 to 9 ft. </div></div><div class="row row-even row-forecast"><div class="col-sm-3 col-lg-2 forecast-label"><b>Wed</b></div><div class="col-sm-9 col-lg-10 forecast-text">NW winds 20 to 30 kt with gusts to 40 kt. Combined seas 7 to 9 ft.   </div></div>       </div><!-- end of <div class="panel-body collapsable collapse" id="detailed-forecast-body"> -->
      </div><!-- end of <div id="detailed-forecast" class="panel panel-default">  -->

      <!-- Additional Forecasts and Information -->
      <div id="additional_forecasts" class="panel panel-default">
        <div class="panel-heading collapse-heading clearfix">
          <button type="button" class="menu-toggle" data-toggle="collapse" data-target="#additional-forecasts-body">
            <span class="sr-only">Toggle menu</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse-title">
            <h2 class="panel-title">Additional Forecasts and Information</h2>
          </div>
        </div>

        <div class="panel-body collapsable collapse" id="additional-forecasts-body">
          <p class="myforecast-location">
            <a href="MapClick.php?zoneid=PZZ673">Zone Area Forecast for Waters from Pt. Sal to Santa Cruz Island CA and westward 60 nm including San Miguel and Santa Rosa Islands</a><br>
            <a href="http://mobile.weather.gov">Mobile Version</a>
          </p>

          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <ul class="list-unstyled">
                <li><a href="http://www.nws.noaa.gov/om/marine/home.htm">National Marine Forecasts</a></li>
                  <li><a href="http://forecast.weather.gov/product.php?site=LOX&issuedby=LOX&product=AFD&format=CI&version=1&glossary=1">Forecast Discussion</a></li><li><a href="http://weather.noaa.gov/cgi-bin/nwsexit.pl?url=http://tidesandcurrents.noaa.gov/tide_predictions.shtml">Tide Information</a></li>             </ul>
              </div>

            <div class="col-lg-4 col-sm-6">
              <ul class="list-unstyled">
                  <li><a href="MapClick.php?zoneid=PZZ673&TextType=2">Printable Forecast</a></li>
                  <li><a href="MapClick.php?zoneid=PZZ673&TextType=1">Text Only Forecast</a></li>
              </ul>
            </div>

            <div class="col-lg-4 col-sm-6">
              <ul class="list-unstyled">
                      <li><a href="http://www.srh.weather.gov/srh/jetstream/webweather/pinpoint_max.htm">About Marine Point Forecasts</a></li>
                        <li><a href="MapClick.php?lat=34.1682&lon=-120.991&unit=0&lg=english&FcstType=digital">Tabular Forecast</a></li>
                  <li><a href="http://www.wrh.noaa.gov/lox">Home </a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-sm-6"><ul class="list-unstyled"><li><a href="http://www.wrh.noaa.gov/mesowest/mwmap.php?map=lox" target="_self">Observation Map (Regional)</a></li><li><a href="http://www.wrh.noaa.gov/mesowest/mwmap.php?map=la" target="_self">Observation Map (Los Angeles)</a></li><li><a href="http://www.wrh.noaa.gov/warnings.php?wfo=lox" target="_self">Warnings</a></li></ul></div><div class="col-lg-4 col-sm-6"><ul class="list-unstyled"><li><a href="http://www.wrh.noaa.gov/forecasts/graphical/sectors/lox.php" target="_self">Experimental Graphical Forecasts</a></li><li><a href="http://www.wrh.noaa.gov/lox/getprod.php?pil=qps&sid=lox&format=pre" target="_self">Quantitative Precipitation Forecast</a></li><li><a href="http://www.weather.gov/climate/index.php?wfo=lox" target="_self">Climatology</a></li></ul></div><div class="col-lg-4 col-sm-6"><ul class="list-unstyled"><li><a href="http://www.nws.noaa.gov/wtf/udaf/area/?site=lox" target="_self">User Defined Area</a></li></ul></div>          </div><!-- end of <div class="div-full"> -->
        </div><!-- end of <div class="panel-body"> -->
      </div><!-- end of <div id="additional_forecasts" class="panel panel-default"> -->
    </div><!-- end of <div class="col-md-7 col-lg-8"> -->

    <div class="col-md-5 col-lg-4" id="right-side-data">
      <!-- Render the ESRI Interactive Map -->
      <div>
              <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/overcast/jquery-ui.css" />
    <link rel="stylesheet" href="http://js.arcgis.com/3.7/js/dojo/dijit/themes/nihilo/nihilo.css" />
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <style>
    #custom-search{
  display: block;
    position: relative;
    z-index: 50;
    top: 52px;
    left: 60px;
    }
    #esri-geocoder-search{
  display: block;
    position: relative;
    z-index: 50;
    top: 52px;
    left: 60px;
    }
    #emap{
  margin-top:15px;
  cursor:pointer;
  height:370px;
    width:100%;
    }
    #switch-basemap-container{
    }
    #basemap-selection-form ul{
    list-style: none;
   margin: 0px;
    }
    #basemap-selection-form li{
  float: left;
    }
    .disclaimer{
  margin-top:350px;
  margin-left: 25px;
  z-index: 100;
  position: absolute;
  text-transform: none;
    }
    .esriAttributionLastItem{
  text-transform: none;
    }
    .esriSimpleSlider div{
  height:22px;
  line-height:20px;
  width:20px;
    }
    #point-forecast-map-label {
    text-align:center;
  font-weight:bold;
  color:black;
    }
    @media (max-width: 767px) {
    #emap{
  margin-top:.5em;
  height:270px;
    }
    .disclaimer{
  margin-top:250px;
    }
    }
    </style>
        <!-- point-forecast-map -->
    <div class='point-forecast-map'>
  <div class='point-forecast-map-header text-center'>
      <div id="toolbar">
    <div id="switch-basemap-container">
        <div id="basemap-selection-form" title="Choose a Basemap">
      <div id="basemap-menu">
          <select name="basemap-selected" id="basemap-selected" autocomplete="off" title="Basemap Dropdown Menu">
          <option value="none">Select Basemap</option>
          <option value="topo" selected>Topographic</option>
          <option value="streets">Streets</option>
          <option value="satellite">Satellite</option>
          <option value="ocean">Ocean</option>
          </select>
      </div>
        </div>
        <div id="point-forecast-map-label">&nbsp;&nbsp;Click Map For Detailed Forecast</div>
    </div><!-- end of "switch-basemap-container" -->
    <div style="clear:both;"></div>
      </div><!-- end of "toolbar" -->
  </div>
  <div id="emap" data-dojo-type="dijit/layout/ContentPane" class="center-block" data-dojo-props="region:'center'">
      <noscript><center><br><br><b>Map function requires Javascript and a compatible browser.</b></center></noscript>
      <div class="disclaimer"><a href='http://www.weather.gov/disclaimer#esri'>Disclaimer</a></div>
  </div><!-- end of "emap" -->

  <div class="point-forecast-map-footer"><img src="/images/wtf/maplegend.gif" width="240" height="16" alt="Map Legend"></div>    </div>
    <!-- /point-forecast-map -->

        </div>

      <div id="about_forecast" class="panel panel-default">
        <div class="panel-heading collapse-heading clearfix">
          <button type="button" class="menu-toggle" data-toggle="collapse" data-target="#about-forecast-body">
            <span class="sr-only">Toggle menu</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse-title">
            <h2 class="panel-title">ABOUT THIS FORECAST</h2>
          </div>
        </div>

        <div class="panel-body collapsable collapse" id="about-forecast-body">
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td><a href="http://www.weather.gov/glossary/index.php?word=Last+update">Last Update</a>: </td>
                  <td>825 AM PDT Sat Jun 10 2017</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td><a href="http://forecast.weather.gov/product.php?site=LOX&issuedby=LOX&product=AFD&format=CI&version=1&glossary=1">Forecast Discussion</a></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              <tbody>
            </table>
          </div><!-- end of <div class="table-responsive"> -->
        </div><!-- end of <div class="panel-body"> -->
      </div><!-- end of <div id="about_forecast" class="panel panel-default"> -->

              <div id="radar" class="panel panel-default">
        <div class="panel-heading collapse-heading clearfix">
          <button type="button" class="menu-toggle" data-toggle="collapse" data-target="#radar-body">
            <span class="sr-only">Toggle menu</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse-title">
            <h2 class="panel-title">RADAR &amp; SATELLITE IMAGES</h2>
          </div>
        </div>
        <div class="panel-body collapsable collapse" id="radar-body"><a href="http://radar.weather.gov/radar.php?rid=vbx&product=N0R&overlay=11101111&loop=no"><img src="http://radar.weather.gov/Thumbs/VBX_Thumb.gif" class="radar-thumb" alt="Link to Local Radar Data" title="Link to Local Radar Data"></a>&nbsp;<a href="http://www.wrh.noaa.gov/satellite/?wfo=lox"><img src="http://sat.wrh.noaa.gov/satellite/4km/WR/IR4.thumbnail.jpg" class="satellite-thumb" alt="Link to Satellite Data" title="Link to Satellite Data"></a></div>
      </div>

      <div id="ndfd" class="panel panel-default hidden-sm hidden-xs">
        <div class="panel-heading clearfix">
          <h2 class="panel-title">NATIONAL DIGITAL FORECAST DATABASE</h2>
        </div>
        <div class="panel-body"><div class="one-sixth-first"><a href="http://graphical.weather.gov/sectors/pacsouthwestMarineDay.php?element=WaveHeight"><img src="http://www.weather.gov/forecasts/graphical/images/thumbnail/Thumbnail_WaveHeight1_pacsouthwest.png" border="0" alt="National Digital Forecast Database Wave Height Forecast" title="National Digital Forecast Database Wave Height Forecast" width="147" height="150"></a>
        <p><a href="http://graphical.weather.gov/sectors/pacsouthwestMarineDay.php?element=WaveHeight">Waves</a></p></div><div class="one-sixth-first"><a href="http://graphical.weather.gov/sectors/pacsouthwestMarineDay.php?element=WindSpd"><img src="http://www.weather.gov/forecasts/graphical/images/thumbnail/Thumbnail_WindSpd1_pacsouthwest.png" border="0" alt="National Digital Forecast Database Wind Speed Forecast" title="National Digital Forecast Database Wind Speed Forecast" width="147" height="150"></a>
        <p><a href="http://graphical.weather.gov/sectors/pacsouthwestMarineDay.php?element=WindSpd">Wind</a></p></div></div>
      </div>

    </div><!-- end of <div class="col-md-5 col-lg-4" right="right-side-data"> -->

  </div><!-- end of <div class="partial-width-borderbottom"> -->

<script language='javascript'>window.load = loadDefinedPolygonMap('none','md', 'none', '34.1682', '-120.991', 'PZZ673', 'yes');</script></div> <!-- end of <div class="row"> -->

<script>
$(document).ready(function(){
  strWFO = $("#localWFO").attr("title");
  strWFOlink = $("#localWFO").attr("href");
  $("#getfcst-head h3").html('<a href="'+strWFOlink+'">'+strWFO+'</a>');
});
</script>

      </div>
            <footer>
                        <div id="sitemap" class="sitemap-content row">
            <div class="col-xs-12">
                <div class="sitemap-columns">
                                                    <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href=" http://www.nws.noaa.gov/climate/">PAST WEATHER</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-1">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-1">
                                        <ul class="list-unstyled">
                                                                                            <li><a href=" http://www.nws.noaa.gov/climate/">Past Weather </a></li>
                                                                                                <li><a href=" http://www.cpc.ncep.noaa.gov/products/MD_index.shtml">Climate Monitoring </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/climate/">Heating/Cooling Days </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/climate/">Monthly Temps </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/climate/">Records </a></li>
                                                                                                <li><a href=" http://aa.usno.navy.mil/">Astronomical Data </a></li>
                                                                                                <li><a href="http://www.ncdc.noaa.gov/oa/mpp/">Certified Weather Data </a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://alerts.weather.gov">ACTIVE ALERTS</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-2">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-2">
                                        <ul class="list-unstyled">
                                                                                            <li><a href=" http://alerts.weather.gov">Warnings By State</a></li>
                                                                                                <li><a href=" http://www.wpc.ncep.noaa.gov/ww.shtml">Excessive Rainfall and Winter Weather Forecasts</a></li>
                                                                                                <li><a href="http://water.weather.gov/ahps/?current_color=flood&amp;current_type=all&amp;fcst_type=obs&amp;conus_map=d_map">River Flooding </a></li>
                                                                                                <li><a href=" http://www.weather.gov">Latest Warnings</a></li>
                                                                                                <li><a href=" http://www.spc.noaa.gov/products/outlook/">Thunderstorm/Tornado Outlook </a></li>
                                                                                                <li><a href=" http://www.nhc.noaa.gov/">Hurricanes </a></li>
                                                                                                <li><a href=" http://www.spc.noaa.gov/products/fire_wx/">Fire Weather Outlooks </a></li>
                                                                                                <li><a href=" http://www.cpc.ncep.noaa.gov/products/stratosphere/uv_index/uv_alert.shtml">UV Alerts </a></li>
                                                                                                <li><a href=" http://www.drought.gov/">Drought </a></li>
                                                                                                <li><a href="http://www.swpc.noaa.gov/products/alerts-watches-and-warnings">Space Weather </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/nwr/">NOAA Weather Radio </a></li>
                                                                                                <li><a href=" http://alerts.weather.gov/">NWS CAP Feeds </a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://www.weather.gov/current">CURRENT CONDITIONS</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-3">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-3">
                                        <ul class="list-unstyled">
                                                                                            <li><a href=" http://www.weather.gov/Radar">Radar </a></li>
                                                                                                <li><a href="http://www.cpc.ncep.noaa.gov/products/monitoring_and_data/">Climate Monitoring </a></li>
                                                                                                <li><a href=" http://water.weather.gov/ahps/">River Levels </a></li>
                                                                                                <li><a href=" http://water.weather.gov/precip/">Observed Precipitation </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/om/osd/portal.shtml">Surface Weather </a></li>
                                                                                                <li><a href="ftp://tgftp.nws.noaa.gov/fax/barotrop.shtml">Upper Air </a></li>
                                                                                                <li><a href=" http://www.ndbc.noaa.gov/">Marine and Buoy Reports </a></li>
                                                                                                <li><a href="http://www.nohrsc.noaa.gov/interactive/html/map.html">Snow Cover </a></li>
                                                                                                <li><a href=" http://www.goes.noaa.gov">Satellite </a></li>
                                                                                                <li><a href=" http://www.swpc.noaa.gov/">Space Weather </a></li>
                                                                                                <li><a href="http://www.weather.gov/pr">International Observations</a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://weather.gov/forecastmaps">FORECAST</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-4">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-4">
                                        <ul class="list-unstyled">
                                                                                            <li><a href=" http://www.weather.gov/">Local Forecast </a></li>
                                                                                                <li><a href="http://www.weather.gov/pr">International Forecasts</a></li>
                                                                                                <li><a href=" http://www.spc.noaa.gov/">Severe Weather </a></li>
                                                                                                <li><a href=" http://www.wpc.ncep.noaa.gov/">Current Outlook Maps </a></li>
                                                                                                <li><a href="http://www.cpc.ncep.noaa.gov/products/Drought">Drought </a></li>
                                                                                                <li><a href="http://www.weather.gov/fire">Fire Weather </a></li>
                                                                                                <li><a href=" http://www.wpc.ncep.noaa.gov/">Fronts/Precipitation Maps </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/forecasts/graphical/">Current Graphical Forecast Maps </a></li>
                                                                                                <li><a href="http://water.weather.gov/ahps/forecasts.php">Rivers </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/om/marine/home.htm">Marine </a></li>
                                                                                                <li><a href="http://www.opc.ncep.noaa.gov/marine_areas.php">Offshore and High Seas</a></li>
                                                                                                <li><a href=" http://www.nhc.noaa.gov/">Hurricanes </a></li>
                                                                                                <li><a href=" http://aviationweather.gov">Aviation Weather </a></li>
                                                                                                <li><a href="http://www.cpc.ncep.noaa.gov/products/OUTLOOKS_index.shtml">Climatic Outlook </a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://www.weather.gov/informationcenter">INFORMATION CENTER</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-5">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-5">
                                        <ul class="list-unstyled">
                                                                                            <li><a href=" http://www.spaceweather.gov">Space Weather </a></li>
                                                                                                <li><a href="http://www.weather.gov/briefing/">Daily Briefing </a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/om/marine/home.htm">Marine </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/climate">Climate </a></li>
                                                                                                <li><a href="http://www.weather.gov/fire">Fire Weather </a></li>
                                                                                                <li><a href=" http://www.aviationweather.gov/">Aviation </a></li>
                                                                                                <li><a href="http://mag.ncep.noaa.gov/">Forecast Models </a></li>
                                                                                                <li><a href="http://water.weather.gov/ahps/">Water </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/gis">GIS</a></li>
                                                                                                <li><a href="http://www.weather.gov/pr">International Weather</a></li>
                                                                                                <li><a href=" http://www.nws.noaa.gov/om/coop/">Cooperative Observers </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/skywarn/">Storm Spotters </a></li>
                                                                                                <li><a href="http://www.tsunami.gov">Tsunami</a></li>
                                                                                                <li><a href="http://www.economics.noaa.gov">Facts and Figures </a></li>
                                                                                                <li><a href="http://water.noaa.gov/">National Water Center</a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://weather.gov/safety">WEATHER SAFETY</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-6">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-6">
                                        <ul class="list-unstyled">
                                                                                            <li><a href="http://www.weather.gov/nwr/">NOAA Weather Radio</a></li>
                                                                                                <li><a href="http://www.weather.gov/stormready/">StormReady</a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/om/heat/index.shtml">Heat </a></li>
                                                                                                <li><a href=" http://www.lightningsafety.noaa.gov/">Lightning </a></li>
                                                                                                <li><a href=" http://www.nhc.noaa.gov/prepare/">Hurricanes </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/om/thunderstorm/">Thunderstorms </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/os/tornado/">Tornadoes </a></li>
                                                                                                <li><a href=" http://www.ripcurrents.noaa.gov/">Rip Currents </a></li>
                                                                                                <li><a href="http://www.floodsafety.noaa.gov/">Floods </a></li>
                                                                                                <li><a href=" http://www.weather.gov/om/winter/index.shtml">Winter Weather </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/om/heat/uv.shtml">Ultra Violet Radiation </a></li>
                                                                                                <li><a href=" http://www.weather.gov/airquality/">Air Quality </a></li>
                                                                                                <li><a href=" http://www.weather.gov/om/hazstats.shtml">Damage/Fatality/Injury Statistics </a></li>
                                                                                                <li><a href=" http://www.redcross.org/">Red Cross </a></li>
                                                                                                <li><a href=" http://www.fema.gov/">Federal Emergency Management Agency (FEMA) </a></li>
                                                                                                <li><a href=" http://www.weather.gov/om/brochures.shtml">Brochures </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/os/marine/safeboating/">Safe Boating</a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://weather.gov/news">NEWS</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-7">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-7">
                                        <ul class="list-unstyled">
                                                                                            <li><a href=" http://weather.gov/news">Newsroom</a></li>
                                                                                                <li><a href=" http://weather.gov/socialmedia">Social Media </a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/com/weatherreadynation/calendar.html">Events</a></li>
                                                                                                <li><a href=" http://www.weather.gov/om/brochures.shtml">Pubs/Brochures/Booklets </a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://weather.gov/owlie">EDUCATION</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-8">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-8">
                                        <ul class="list-unstyled">
                                                                                            <li><a href="http://weather.gov/owlie">NWS Education Home</a></li>
                                                                                                <li><a href="http://www.nws.noaa.gov/com/weatherreadynation/force.html">Be A Force of Nature</a></li>
                                                                                                <li><a href=" http://www.education.noaa.gov/Weather_and_Atmosphere/">NOAA Education Resources </a></li>
                                                                                                <li><a href=" http://www.weather.gov/glossary/">Glossary </a></li>
                                                                                                <li><a href=" http://www.srh.noaa.gov/srh/jetstream/">JetStream </a></li>
                                                                                                <li><a href=" http://www.weather.gov/training/">NWS Training Portal </a></li>
                                                                                                <li><a href=" http://www.lib.noaa.gov/">NOAA Library </a></li>
                                                                                                <li><a href="http://weather.gov/owlie">For Students, Parents and Teachers</a></li>
                                                                                                <li><a href="http://www.weather.gov/owlie/publication_brochures">Brochures </a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                                <div class="sitemap-section">
                                    <div class="panel-heading">
                                        <a class="sitemap-section-heading" href="http://weather.gov/about">ABOUT</a>
                                        <button type="button" class="menu-toggle pull-right" data-toggle="collapse" data-target="#sitemap-9">
                                            <span class="sr-only">Toggle menu</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="sitemap-section-body panel-body collapsable collapse" id="sitemap-9">
                                        <ul class="list-unstyled">
                                                                                            <li><a href="http://weather.gov/organization">Organization </a></li>
                                                                                                <li><a href=" http://www.weather.gov/sp/">Strategic Plan </a></li>
                                                                                                <li><a href="https://sites.google.com/a/noaa.gov/nws-best-practices/">For NWS Employees </a></li>
                                                                                                <li><a href=" http://www.weather.gov/ia/home.htm">International </a></li>
                                                                                                <li><a href="http://www.ncep.noaa.gov/">National Centers </a></li>
                                                                                                <li><a href=" http://www.weather.gov/tg/">Products and Services </a></li>
                                                                                                <li><a href="http://www.weather.gov/careers/">Careers</a></li>
                                                                                                <li><a href=" http://www.weather.gov/glossary/">Glossary </a></li>
                                                                                                <li><a href="http://weather.gov/contact">Contact Us </a></li>
                                                                                        </ul>
                                    </div>
                                </div>
                                                </div>
            </div>
        </div>

                <!-- legal footer area -->
                  <div class="footer-legal">

      <div id="footerLogo" class="col-xs-12 col-sm-2 col-md-2">
            <a href="http://www.usa.gov"><img src="/css/images/usa_gov.png" alt="usa.gov" width="110" height="30" /></a>
          </div>
      <div class="col-xs-12 col-sm-4 col-md-4">
          <ul class="list-unstyled footer-legal-content">
            <li><a href="http://www.commerce.gov">US Dept of Commerce</a></li>
            <li><a href="http://www.noaa.gov">National Oceanic and Atmospheric Administration</a></li>
            <li><a href="http://www.weather.gov">National Weather Service</a></li>
            <li><a href="http://www.weather.gov/lox">Los Angeles, CA</a></li>         </ul>
        </div>
      <div class="col-xs-12 col-sm-3 col-md-3">
    <ul class="list-unstyled">
            <li><a href="http://www.weather.gov/disclaimer">Disclaimer</a></li>
            <li><a href="http://www.cio.noaa.gov/services_programs/info_quality.html">Information Quality</a></li>
            <li><a href="http://www.weather.gov/help">Help</a></li>
            <li><a href="http://www.weather.gov/glossary">Glossary</a></li>
          </ul>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-3">
    <ul class="list-unstyled">
            <li><a href="http://www.weather.gov/privacy">Privacy Policy</a></li>
            <li><a href="http://www.rdc.noaa.gov/~foia">Freedom of Information Act (FOIA)</a></li>
            <li><a href="http://www.weather.gov/about">About Us</a></li>
            <li><a href="http://www.weather.gov/careers">Career Opportunities</a></li>
          </ul>
        </div>
      </div>

            </footer>
        </main>
    </body>
</html>
`;
