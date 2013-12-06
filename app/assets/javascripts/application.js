// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
	var location = "<div class='left-text'><h4>The Ceremony will be held at Roanoke Island, NC</h4><p>1 Festival Park<br>Manteo, NC 27054</p><iframe width='400' height='300' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Roanoke+Island,+1+Festival+Park,+Manteo,+NC,+United+States&amp;aq=0&amp;oq=1+festival+park+roanoke&amp;sll=37.0625,-95.677068&amp;sspn=44.60973,78.837891&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;ll=35.911038,-75.668249&amp;spn=0.005214,0.008583&amp;z=16&amp;output=embed'></iframe><br /><small><a href='https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Roanoke+Island,+1+Festival+Park,+Manteo,+NC,+United+States&amp;aq=0&amp;oq=1+festival+park+roanoke&amp;sll=37.0625,-95.677068&amp;sspn=44.60973,78.837891&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;ll=35.911038,-75.668249&amp;spn=0.005214,0.008583&amp;z=16' style='color:#0000FF;text-align:left'>View Larger Map</a></small></div>"
  	var wedding_party = "<div class='left-text'><h4>Kara's Attendants</h4><ul><li><strong>Amanda Burnette</strong>: Maid of Honor</li><li><strong>Karla Ott</strong>: Matron of Honor</li><li><strong>Anna Burgner</strong>: Bridesmaid</li><li><strong>Carly Gettler</strong>: Bridesmaid</li><li><strong>Kathryn Yates</strong>: Bridesmaid</li></ul><h4>John's Attendants</h4><ul><li><strong>Steve Aymond</strong>: Best Man</li><li><strong>Jon Strakis</strong>: Best Man</li><li><strong>Nate Brandley</strong>: Groomsman</li><li><strong>Grant Carson</strong>: Groomsman</li><li><strong>Kyle Greenfield</strong>: Groomsman</li></ul></div>"
 	var accommodations = "<div class='left-text'><h4>Manteo</h4><ul><li><a href='http://www.vrbo.com/vacation-rentals/usa/north-carolina/coastal/outer-banks/manteo'>Cottages</a></li><li><a href='http://www.tranquilhouseinn.com'>Tranquil House Inn</a></li><li><a href='http://www.cameronhouseinn.com'>Cameron House Inn</a></li><li><a href='http://www.burrushouseinn.com'>Burrus House Inn</a></li><li><a href='http://www.whitedoeinn.com'>White Doe Inn</a></li></ul><h4>Nags Head</h4><ul><li><a href='http://www.outerbanksrentals.com'>Stan White Realty</a></li><li><a href='http://www.nagsheadrealty.com'>Nags Head Realty</a></li><li><a href='http://www.joelambjr.com/index.htm'>Joe Lamb</a></li><li><a href='http://www.villagerealtyobx.com'>Village Realty</a></li></div>" 
	var proposal = "<div class='story-text'><h4>Friday, December 28, 2012</h4><p>John had to be sneaky. He and Kara had discussed getting engaged, rings they liked, etc. They both wanted the actual proposal to be a surprise, but Kara couldn't help herself. She was SO nosy, always asking John if he'd gone ring shopping, if the ring was ready, suggesting good places to propose, the list goes on... So, John started feeding her stories about glitches in the ring designing process, and told her the ring wouldn't be ready for months. </p><p>Meanwhile, John was planning a trip to Richmond for the holidays. He told Kara that Anna (his sister) wanted to go hiking. Kara left John to plan the hike, making sure to mention that if it was too cold, she would not be hiking. She also joked that it was too bad the ring wasn't ready, because a hike would be a great place to propose! </p><p>When they got to the Blue Ridge Parkway to head towards the trailhead, there was one small hitch. The parkway was closed due to snow that had fallen several days before. Luckily, there was an entrance to the Appalachian trail at the Parkway entrance, so they were able to hike anyway. While they were hiking, John kept looking at his phone. He said he wanted to find a good vista where they could end the hike. With no good views in sight, they decided to turn back. </p><p>On the way home, John pulled off at at a scenic overlook. Anna offered to take a picture of Kara and John. Before Kara knew what was happening, John was down on one knee. Of course, since Kara just knew the ring wasn't ready, she told John to get up and stop joking around. However, she quickly realized what was going on and said yes! (And didn't neglect to call John a liar in the process!) The best part was that Anna photographed the entire thing!</p></div>"
 	var about = "<div class='story-text'><h4>About Kara</h4><p>Kara grew up in Richmond, Virginia with her Mom, Dad, and brother Kyle. She attended the College of William and Mary and moved to New York after graduation to teach high school science through Teach for America. After 3 years in the city, she returned to Virginia for medical school.</p><h4>About John</h4><p>John spent his childhood in West Lafayette, Indiana (Boiler Up!) with his parents and older sister Anna. He went to Rose Hulman Institue of Technology, where he played soccer and golf. He attended IU School of Medicine for medical school and Anesthesia residency. </p></div>"
	var meeting = "<div class='story-text'><h4>How We Met</h4><p>The easy (short) answer: mutual friends.</p><p>The more complicated version: Kara and her friends had planned a beach week vacation in Nags Head to celebrate the end of their first year of medical school. John, an intern at the time and not one to pass up a free vacation, tagged along with his friend, who was dating one of Kara's friends. John used Kara's adorable puppy, Maddie, as an excuse to get to know Kara. After several trips between Blacksburg and Indianapolis, Kara overheard John refer to himself as 'dad' to Maddie and knew he was a keeper!</p><p>Nearly three years later, Kara and John are very excited to begin their life together in Richmond, Virginia! Kara started her Pediatric residency at the Children's Hospital of Richmond at VCU in July 2013, and John started at VCU as an Anesthesiologist.</p></div>"
$('#location').click(function() {
	$(".left-text").replaceWith(location) ;
	});
  $('#wedding-party').click(function() {
	$(".left-text").replaceWith(wedding_party) ;
	});
  $('#accommodations').click(function() {
	$(".left-text").replaceWith(accommodations) ;
	});
  $('#proposal').click(function() {
  	$(".story-text").replaceWith(proposal) ;
  	});
  $('#about').click(function() {
  	$(".story-text").replaceWith(about) ;
  	});
  $('#meeting').click(function() {
	$(".story-text").replaceWith(meeting) ;
	});
  $('#kj1').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john1.jpg' /></div>") ;
	});
  $('#kj2').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john2.jpg' /></div>") ;
	});
  $('#kj3').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john3.jpg' /></div>") ;
	});
  $('#kj4').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john4.jpg' /></div>") ;
	});
  $('#kj5').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john5.jpg' /></div>") ;
	});
  $('#kj6').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john6.jpg' /></div>") ;
	});
  $('#kj7').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john7.jpg' /></div>") ;
	});
  $('#kj8').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john8.jpg' /></div>") ;
	});
  $('#kj9').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john9.jpg' /></div>") ;
	});
  $('#kj10').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john10.jpg' /></div>") ;
	});
  $('#kj11').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john11.jpg' /></div>") ;
	});
  $('#kj12').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john12.jpg' /></div>") ;
	});
  $('#kj13').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john13.jpg' /></div>") ;
	});
  $('#kj14').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john14.jpg' /></div>") ;
	});
  $('#kj15').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john15.jpg' /></div>") ;
	});
  $('#kj16').click(function() {
	$(".photo-main").replaceWith("<div class='photo-main'><img src='/assets/kara_john16.jpg' /></div>") ;
	});
});