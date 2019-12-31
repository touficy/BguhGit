//Home page script display all sections

// $(document).ready(function(){
// 	 myApp.showPreloader();
// 	setTimeout(function(){
// 		// getHomepageSections();
// 		alert('hiii');
// 	},1000);
// 	myApp.hidePreloader();
// 	//back functioin
// 	$(document).on('click','.back',function(){
// 		setTimeout(function(){
// 			// getHomepageSections();
// 		},500);
// 	});
// 	myApp.hidePreloader();
// });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'loginnormal') {
                getHomepageSections();
                }
                if (page.name === 'hrp_all_sections') {
                getGridViewSections();
                }
                
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'contact') {
                // return false;
                contactus();
                
                }
                });


$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'familyaccounts') {
                getFamilyAccountData();
                }
                });
$$(document).on('pageInit', function (e) {
	var page = e.detail.page;
	// Code for About page
	if (page.name === 'health_cal_Appointment') {
		calendarA();//2
	}
});
$$(document).on('pageInit', function (e) {
	var page = e.detail.page;
	// Code for About page
	if (page.name === 'health_calender_new') {
                
		calendarM();//2
	}
});
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_summary_custom') {
                Chealthsummary();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'privacypolicy') {
                // return false;
                privacy();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_provider_listing') {
                // return false;
                gethealthProviderData();//1
                //page_parameter = 8;
                tempPage = 8;
                }
                });
var pageIndicator = 0;
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'manage_albums') {
                //document.getElementById("display_albums_area").innerHTML = "";
                //manage_albums(MAcatId,MAselectId);
                
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'manage_albums_images') {
                //document.getElementById("self_img").innerHTML = "";
                
                }
                });


$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'insurance') {
                // return false;
                getInsuranceData();//1
                page_parameter = 1;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'medications_listing') {
                // return false;
            
                getMedicationsData();
                page_parameter = 1;
                tempPage  = 12 ;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'medical_history_condi_listing') {
                // return false;
                getmedihistoryData();
                page_parameter =1 ;
                tempPage = 13 ;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_calendar_new') {
                // return false;
                
                calendarM();//1
                
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_cal_Appointment') {
                // return false;
                page_parameter = 31;
                calendarA();//1
                //alert("A");
                
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'allergies_listing')
                {
                // return false;
                getAllergiesData();
                page_parameter = 1;
                tempPage = 14;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'emergency_contact_listing') {
                // return false;
                
                getEmergencyContactData();//
                
                }
                });
//$$(document).on('pageInit', function (e) {
//	var page = e.detail.page;
//	// Code for About page
//	if (page.name === 'health_cal_Appointment') {
//		// return false;
//
//		calenderA();//1
//
//	}
//});
//$$(document).on('pageInit', function (e) {
//	var page = e.detail.page;
//	// Code for About page
//	if (page.name === 'health_calendar_new') {
//		// return false;
//
//		calenderM();//1
//
//	}
//});

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'searchMedic') {
                // return false;
                
                var loading = false;
                
                // Last loaded index
                //var lastIndex = $$('.list-block li').length;
                
                // Max items to load
                
                // Append items per load
                var itemsPerLoad = 50;
                var limit = 50;
                var lastlimit = 20;
                
                // Attach 'infinite' event handler
                $$('.infinite-scroll').on('infinite', function () {
                                          limit =limit+10;
                                          console.log(limit);
                                          // Exit, if loading in progress
                                          if (loading) return;
                                          
                                          // Set loading flag
                                          loading = true;
                                          
                                          // Emulate 1s loading
                                          setTimeout(function () {
                                                     // Reset loading flag
                                                     loading = false;
                                                     
                                                     //if (lastIndex >= maxItems) {
                                                     //  // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                                                     //  myApp.detachInfiniteScroll($$('.infinite-scroll'));
                                                     //  // Remove preloader
                                                     //  $$('.infinite-scroll-preloader').remove();
                                                     //  return;
                                                     //}
                                                     
                                                     // Generate new items HTML
                                                     var searchstring = "";
                                                     searchstring = searchstring.concat(document.getElementById("searchmedic").value);
                                                     var url = "http://www.healthrecordspro.com/ws.php?type=medicationsearch&format=json&word="+searchstring+"&limit="+lastlimit+","+limit;
                                                     var html  = "";
                                                     $.getJSON (url, function (json) {
                                                                if(json['posts'][0]){
                                                                $.each( json['posts'], function( key,value ) {
                                                                       
                                                                       html += '<li class="item-content" id = '+value['id']+'><div class="item-inner"><div class="item-title">' + value['name'] + '</div></div></li>';});
                                                                $('#searchr').append(html);
                                                                }
                                                                else{
                                                                
                                                                // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                                                                myApp.detachInfiniteScroll($$('.infinite-scroll'));
                                                                // Remove preloader
                                                                $$('.infinite-scroll-preloader').remove();
                                                                
                                                                }
                                                                });
                                                     lastlimit = limit
                                                     // Append new items
                                                     //$$('.list-block ul').append(html);
                                                     
                                                     // Update last loaded index
                                                     //lastIndex = limit
                                                     }, 5000);
                                          });
                
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'infinitescroll') {
                // return false;
                
                var loading = false;
                
                // Last loaded index
                var lastIndex = $$('.list-block li').length;
                
                // Max items to load
                var maxItems = 60;
                
                // Append items per load
                var itemsPerLoad = 20;
                
                // Attach 'infinite' event handler
                $$('.infinite-scroll').on('infinite', function () {
                                          
                                          // Exit, if loading in progress
                                          if (loading) return;
                                          
                                          // Set loading flag
                                          loading = true;
                                          
                                          // Emulate 1s loading
                                          setTimeout(function () {
                                                     // Reset loading flag
                                                     loading = false;
                                                     
                                                     if (lastIndex >= maxItems) {
                                                     // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                                                     myApp.detachInfiniteScroll($$('.infinite-scroll'));
                                                     // Remove preloader
                                                     $$('.infinite-scroll-preloader').remove();
                                                     return;
                                                     }
                                                     
                                                     // Generate new items HTML
                                                     var html = '';
                                                     for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
                                                     html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
                                                     }
                                                     
                                                     // Append new items
                                                     $$('.list-block ul').append(html);
                                                     
                                                     // Update last loaded index
                                                     lastIndex = $$('.list-block li').length;
                                                     }, 1000);
                                          });
                
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'surgeries_listing') {
                // return false;
                getSurgeriesData();
                page_parameter = 1;
                tempPage = 15 ;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'family_history_listing') {
                // return false;
                page_parameter = 1;
                tempPage = 16;
                }
                });


$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'physical_exam') {
                // return false;
                getPhysicalExamData();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'Local_Images') {
                // return false;
                window.requestFileSystem(LocalFileSystem.PERSISTENT,0, onFileSystemSuccess, fail);
                
                }
                });


$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'obestetric_history_listing') {
                // return false;
                getObestetricData();
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'past_medical_his_listing') {
                // return false;
                page_parameter = 22;
                getpastmediHis();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'urinalysis_listing') {
                // return false;
                page_parameter = 20;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'birth_ped_his_listing') {
                // return false;
                getBirthData();
                page_parameter = 22;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'development_his_listing') {
                // return false;
                getDevelopmentHisData();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'women_section_main') {
                // return false;
                page_parameter = 1;
                tempPage =21;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'family_ped_his_listing') {
                // return false;
                getFamilyPreData();
                page_parameter = 22;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'dental_history_listing') {
                // return false;
                getdentalhistoryData();
                page_parameter = 1;
                tempPage = 23;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_summary') {
                // return false;
                getdentalhistoryData();
                page_parameter = 1;
                tempPage = 28;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'Prescription_eye_listing') {
                // return false;
                getPrescriptionData();
                page_parameter = 1;
                tempPage = 23;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'foodand_nutrition_history') {
                // return false;
                getFoodData();
                page_parameter = 25;
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'bio_chemical_listing') {
                // return false;
                getbioData();
                page_parameter = 25;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'nutrition_diet_practise') {
                // return false;
                page_parameter = 25;
                tempPage = 1;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'faq') {
                // return false;
                getfaq();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'privacypolicy') {
                // return false;
                privacy();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'monitoringand_evolution') {
                // return false;
                getMonitoringEvoData();
                }
                });

$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'medicalandlega_directives_listing') {
                // return false;
                getMedicalDirectorsData();
                page_parameter = 1;
                tempPage = 27
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_diries_new') {
                // return false;
                
                page_parameter = 1;
                tempPage = 30;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'doctors_counsalting_main') {
                // return false;
                page_parameter = 1;
                tempPage = 29;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health calender') {
                // return false;
                page_parameter = 1;
                tempPage = 31;
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'medications') {
                // return false;
                //var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
                //var autocompleteDropdownSimple = myApp.autocomplete({
                //    input: '#medi_medicine_name',
                //    openIn: 'dropdown',
                //    source: function (autocomplete, query, render) {
                //        var results = [];
                //        if (query.length === 0) {
                //            render(results);
                //            return;
                //        }
                //        // Find matched items
                //        for (var i = 0; i < fruits.length; i++) {
                //            if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
                //        }
                //        // Render items by passing array with result items
                //        render(results);
                //    }
                //});
                //1
                
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'doctors_counsaltation_listing') {
                // return false;
                getdocCounsaltationData();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'TermsConditionsPage') {
                // return false;
                terms();
                
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'health_id') {
                // return false;
                getHealthIdData();
                }
                });
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'pediatric_section_main') {
                // return false;
                page_parameter = 1;
                tempPage = 22;
                }
                });
var scancount = 0;
$$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                // Code for About page
                if (page.name === 'scanvalues') {
                // return false;
                scanurl;
                $.getJSON (scanurl, function (json) {
                           $.each( json['posts'], function( key,value ) {
                                  var etext = '<li style="background-color: #ffffff">'
                                  +'<div class="item-content">'
                                  +'<div class="item-inner">'
                                  +' <div class="item-title label">'+value["recordName"]+'</div>'
                                  +'<div class="item-input">'
                                  +' <input type="text" id='+key+' placeholder="" value="'+value["value"]+'" data-userid="'+value['id']+'" data-date="'+value['date']+'"data-cat="'+value['categoryname']+'" data-name="'+value["recordName"]+'">'
                                  +'</div>'
                                  +' </div>'
                                  +'</div>'
                                  +'</li>'
                                  $('#scan_values ul').append(etext);
                                  scancount = key;
                                  });
                           });
                
                }
                });
function inserttestvalues(){
    
    for(var i = 0 ; i<scancount;i++){
        var id = "#"+i
        var recordname = $(id).attr('data-name');
        var tdate = $(id).attr('data-date');
        var value = $(id).val();
        var  catogoryid = $(id).attr('data-cat');
        var storedData1 = myApp.formGetData('logged_userId');
        var url = "http://www.healthrecordspro.com/ws.php?type=insert&format=json&table=labsresults&columns=recordName,value,date,categoryid,userid&values='"+recordname+"',"+value+",'"+tdate+"',"+catogoryid+","+storedData1['userId'];
        $.getJSON (url, function (json) {
                   
                   });
        
        
    }
    getLabResults();
    mainView.router.loadPage('lab_results_main.html');
}
// $$(document).on('pageInit', function (e) {
// 	var page = e.detail.page;
// 	// Code for About page
// 	if (page.name === 'urinalysis_listing') {
// 		// return false;
// 		getLabRecordsByCatId(Catid,labCatName);
// 	}
// });
function addFieldsMedidosage()
{
    var count = $('#medidos_count').val();
    count = parseInt(count)+1;
    $("#medidos_count").val(count);
    var name="<li><div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Medication </div><div class='item-input'><input id='past_medi_his_medication_"+count+"' type='text' placeholder='Medication  ' name='past_medi_his_medication'></div></div></div></li><li><div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Dose </div><div class='item-input'><input id='past_medi_his_dose_"+count+"' type='text' placeholder='Dose ' name='past_medi_his_dose'></div></div></div></li>";
    $("#responce1").append(name);
}
//user profile1
function addFields()
{
    var count1 = $('#phar_count').val();
    count1 = parseInt(count1)+1;
    $("#phar_count").val(count1);
    
    var name="<li><div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Pharmacy Name </div><div class='item-input'><input id='user_phar_name_"+count1+"' type='text' placeholder='Pharmacy Name ' name='user_phar_name'></div></div></div></li><li><div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Pharmacy Number </div><div class='item-input'><input id='user_phar_number_"+count1+"' type='text' placeholder='Pharmacy Number ' name='user_phar_number'></div></div></div></li>";
    $("#responce").append(name);
}

//userprofile2
function addFields1()
{
    var count = $('#count').val();
    count = parseInt(count)+1;
    $("#count").val(count);
    
    var hname="<div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Hospital</div><div class='item-input'><input type='text' name='pre_hospital' id='pre_hospital_"+count+"' placeholder='Hospital' /></div></div></div></li><li><div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Medical record number </div><div class='item-input'><input type='text' name='pref_me_re_no' id='pref_me_re_no_"+count+"' placeholder='Medical record number ' /></div></div></div></li><li><div class='item-content item-title_inner'><div class='item-inner'><div class='item-title label'>Hospital telephone number</div><div class='item-input'><input type='text' name='pre_ho_no' id='pre_ho_no_"+count+"' placeholder='Hospital telephone number' /></div></div></div>";
    
    $("#responce1").append(hname);
    
}

function addFamilyCausesofde()
{
    var count = $('#rowIdFH2').val();
    count = parseInt(count)+1;
    $("#rowIdFH2").val(count);
    
    var name = '<li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label" style="width: 55%;">Select Name</div><div class="item-input" id="displayFamilyCausD_'+count+'"><input type="text" name="family_his_causeofDe" id="family_his_causeofDe_'+count+'" placeholder="select"><input type="hidden" name="family_his_causeofDe_id" id="family_his_causeofDe_id_'+count+'" placeholder="Date of Appointment : " /></div></div></div></li><li id="family_cuses_of_de_li_'+count+'" style="display:none;"><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label" style="width: 55%;">Others</div><div class="item-input"><input type="text" name="family_his_causeofDe_others" id="family_his_causeofDe_others_'+count+'" placeholder="Specify"><input type="hidden" name="family_his_causeofDe_id" id="family_his_causeofDe_id_'+count+'" placeholder="Date of Appointment : " /></div></div></div></li><li style="list-style:none;"><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Causes of Death</div><div class="item-input"><textarea id="family_caus_death_'+count+'" name="family_caus_death_'+count+'"></textarea></div></div></div></li>';
    $("#responce7").append(name);
    FamilyHisCauseofD(count);
}
function addFamilyHisFields()
{
    var count1 = $('#Family_his_count').val();
    count1 = parseInt(count1)+1;
    $("#Family_his_count").val(count1);
    
    var name1 = "<li><div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title label'></div><div class='item-input'><input id='family_his_others_"+count1+"' type='text' placeholder='other ' name='family_his_others'></div></div></div></li>";
    
    $('#responce4').append(name1);
    // $('#rowIdother_'+id1).val(ct);
}

function addFieldsmedihis()
{
    var count = $('#rowIdFH10').val();
    count = parseInt(count)+1;
    $("#rowIdFH10").val(count);
    
    var column = '<ul style="background-color:#FFFFFF"><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Name</div><div class="item-input" id="addselectdieases_'+count+'"><input type="text" name="medi_his_name" placeholder="Select Name" id="medi_his_name_'+count+'"/><input type="hidden" name="medi_his_name_id"  id="medi_his_name_id_'+count+'" placeholder="Select Name" /></div></div></div></li><li id="medi_his_name_others_li_'+count+'" style="display:none;"><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Others</div><div class="item-input"><input type="text" name="medi_his_name_others" placeholder="Specify" id="medi_his_name_others_'+count+'"/><input type="hidden" id="medi_his_name_id_'+count+'"/></div></div></div></li><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-input"><label class="label-checkbox item-content"><input type="checkbox" name="medi_sactive" id="medi_sactive_'+count+'"   value="1" onClick="getResults3(this)" ><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title">Still Active</div></div></label></div></div></div></li><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Start Date</div><div class="item-input"><input type="text" name="medi_sdate" id="medi_sdate_'+count+'" placeholder="Start Date"></div></div></div></li><li><div class="item-content text3" ><div class="item-media"></div><div class="item-inner " id="dvPassport"><div class="item-title label">Resolved(Date)</div><div class="item-input" ><input type="text" name="medi_rdate" id="medi_rdate_'+count+'" placeholder="Resolved(Date)"></div></div></div></li><li><div class="item-content" ><div class="item-media"></div><div class="item-inner "><div class="item-title label">Description</div><div class="item-input" ><textarea id="medi_descr_'+count+'" class="" placeholder="Description" name="medi_descr" style="height: 44px;"></textarea></div></div></div></li></ul>';
    
    $("#responce20").append(column);
    DieasesName(count);
    // displayMediHisOtherField(count);
    getcalendarMedihis(count);
    getcalendarMedihis1(count);
}
function showDiv(obj,id) {
    
    
    if (obj.checked) {
        document.getElementById('content_'+id).innerHTML = '<li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label"></div><div class="item-input"><input type="text" name="family_his_mot" id="family_his_mot_'+id+'" ></div></div></div></li>';
    }else{
        document.getElementById('content_'+id).innerHTML = '';
    }
}
function showDiv1(obj,id) {
    
    if (obj.checked) {
        document.getElementById('content1_'+id).innerHTML = '<li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label"></div><div class="item-input"><input type="text" name="family_his_fat" id="family_his_fat_'+id+'" ></div></div></div></li>';
    }
    else {
        document.getElementById('content1_'+id).innerHTML = '';
    }
}
function showDiv2(obj,id) {
    
    if (obj.checked) {
        document.getElementById('content2_'+id).innerHTML = '<li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label"></div><div class="item-input"><input type="text" name="family_his_sib" id="family_his_sib_'+id+'" ></div></div></div></li>';
    }
    else {
        document.getElementById('content2_'+id).innerHTML = '';
    }
}
//physical form
function addFields3()
{
    var count = $('#count').val();
    count = parseInt(count)+1;
    count1 = parseInt(count)+2;
    $("#count").val(count);
    
    var name="<li><div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Physical exam</div><div class='item-input' id='addPhysicalexam_"+count+"'><input type='text' name='physical_exam_name' id='physical_exam_name_"+count+"' placeholder='Physical Exam '><input type='hidden' id='physical_exam_name_id_"+count+"'/></div></div></div></li><li id='physical_exam_name_others_li_"+count+"' style='display:none;'><div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Others</div><div class='item-input'><input type='text' name='physical_exam_name_others_0' id='physical_exam_name_others_"+count+"' placeholder='Specify'><input type='hidden' name='physical_exam_name_others_id' id='physical_exam_name_others_id_"+count+"'/></div></div></div></li>";
    var name1="<div class='item-content'><div class='item-media'></div><div class='item-inner'><label class='label-checkbox item-content' style='float:left;width: 50%;'><input type='radio' name='physical_n_"+count1+"' id='physical_n_"+count+"' value='1'><div class='item-media'><i class='icon icon-form-checkbox'></i></div><div class='item-inner'><div class='item-title'>Normal ?</div></div></label><label class='label-checkbox item-content'><input type='radio' name='physical_n_"+count1+"' id='physical_ab_"+count+"' value='0' ><div class='item-media'><i class='icon icon-form-checkbox'></i></div><div class='item-inner'><div class='item-title'>Abnormal ?</div></div></label></div></div>";
    var desc="<div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Description</div><div class='item-input'><textarea id='physical_desc_"+count1+"' name='physical_desc'></textarea></div></div></div>";
    $("#responce3").append(name,name1,desc);
    PhysicalExamVal(count);
}

function addFieldsLabFields(){
    var count123 = $('#count123').val();
    count123 = parseInt(count123)+1;
    $("#count123").val(count123);
    if (count123 == 1) {
        $("#displaythefi").css('display','none');
    }
    if (count123 != 1) {
        var namess = "<li id='displaythefi'><div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-input' id='addLabRecords_"+count123+"'><input type='text' name='recordsfield' id='recordsfield_"+count123+"' placeholder='Records Fields' value='' required='required'/></div><div class='item-input' style='display: inline-flex;'><input type='number' name='name_"+count123+"' id='recordsvalue_"+count123+"' placeholder='Records Value' style='width: 94%;display: -moz-inline-box;font-size:13px;'/></div></div></div></li><li id='lab_name_others_value_li_"+count123+"' style='display:none;'><div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title label'><input type='text' name='lab_rec_text_val_"+count123+"' id='lab_rec_text_val_"+count123+"' placeholder='recordsfield' style='font-size: 13px;'></div><div class='item-input'><input type='number' name='lab_rec_val_"+count123+"' id='lab_rec_val_"+count123+"' placeholder='recordsvalue' style='font-size: 13px;'><input type='hidden' name='lab_rec_val_id' id='lab_rec_val_id_"+count123+"'/></div></div></div></li>";
        $("#responce10").append(namess);
    }
    labRecordsExtraValues(count123);
}

function labRecordsExtraValues(ele){
    var idss = $('#cat_id').val();
    var url= "http://www.healthrecordspro.com/ws.php?type=select_one&format=json&table=labsRecords&columns=*&condition=Catid="+idss;
    $.getJSON (url, function (json) {
               var text = "";
               text += "<select name='recordsfield' id='recordsfield_"+ele+"' onchange='labdataExtrafield(this,"+ele+")' style='font-size: 13px;'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      if (val['defaultvalue'] == 0) {
                      text += "<option value='"+val['lab_id']+"'>"+val['name']+",'NV='"+val['normalvalue']+"</option>";
                      }
                      });
               text += "<option value='-1'>Others</option>";
               text += "</select>";
               $("#addLabRecords_"+ele).html(text);
               });
}
function labdataExtrafield(thiss,elee){
    var val = thiss.value;
    if( val == -1){
        $('#lab_name_others_value_li_'+elee).css('display','block');
        
    }else{
        $('#lab_name_others_value_li_'+elee).css('display','none');
    }
    // $('#recordsvalue_'+elee).val(thiss.value);
    $('#recordsvalue_'+elee).attr('name',"name_"+thiss.value);
    $('#recordsvalue_'+elee).attr('id',"value_"+ thiss.value);
}
//immunization
function addFields6()
{
    
    var count = $('#rowIdFH11').val();
    count = parseInt(count)+1;
    $("#rowIdFH11").val(count);
    
    var name='<ul style="background-color:#FFFFFF;margin-left: -45px;"><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label" >Medicine Name :  </div><div class="item-input" id="addselectmedicinename_'+count+'"><input type="text" name="immu_name" id="immu_name_'+count+'" placeholder="Select Name"/><input type="hidden" name="immu_name_id" id="immu_name_id_'+count+'" placeholder="Select Name"  /></div></div></div></li><li id="immu_name_others_li_'+count+'" style="display:none;"><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label" >Others</div><div class="item-input"><input type="text" name="immu_name_others_0" id="immu_name_others_'+count+'" placeholder="Specify"/><input type="hidden" name="immu_name_id" id="immu_name_id_'+count+'"/></div></div></div></li><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Booster1 : </div><div class="item-input"><input type="text" name="boost1" id="boost1_'+count+'" placeholder="Booster1" /></div></div></div></li><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Booster2 : </div><div class="item-input"><input type="text" name="boost2" id="boost2_'+count+'" placeholder="Booster2"  /></div></div></div></li><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">Booster3 : </div><div class="item-input"><input type="text" name="boost3" id="boost3_'+count+'" placeholder="Booster3"  /></div></div></div></li></ul>';
    
    $("#responce21").append(name);
    MedicineName(count);
    getimmuCalander(count);
    getimmuCalander1(count);
    getimmuCalander2(count);
}
//family pedriction
function addFields8()
{
    
    var count = $('#rowIdFH').val();
    count = parseInt(count)+1;
    $("#rowIdFH").val(count);
    
    var prname="<h4><div style='margin-left: 28px;'>Contact Information for Parent "+count+"</div></h4><li><div class='item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Name</div><div class='item-input'><input type='text' name='fam_ped_his_pname' id='fam_ped_his_pname_"+count+"'' placeholder='Name'></div></div></div></li><li><div class='item-content ' ><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Email</div><div class='item-input'><input type='text' name='fam_ped_his_pemail' id='fam_ped_his_pemail_"+count+"'' placeholder='Email'></div></div></div></li><li><div class='item-content ' ><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Home address</div><div class='item-input'><input type='text' name='fam_ped_his_hadres' id='fam_ped_his_hadres_"+count+"'' placeholder='Home address'></div></div></div></li><li><div class='item-content ' ><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Home Phone</div><div class='item-input'><input type='text' name='fam_ped_his_pephne' id='fam_ped_his_pephne_"+count+"'' placeholder='Home Phone'></div></div></div></li><li><div class='item-content ' ><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Work Phone</div><div class='item-input'><input type='text' name='fam_ped_his_pewpnno' id='fam_ped_his_pewpnno_"+count+"'' placeholder='Work Phone'></div></div></div></li><li><div class='item-content ' ><div class='item-media'></div><div class='item-inner'><div class='item-title label'>Cell/Other</div><div class='item-input'><input type='text' name='fam_ped_his_pecel' id='fam_ped_his_pecel_"+count+"'' placeholder='Cell/Other'></div></div></li>";
    $("#responce8").append(prname);
    
}

function deleteFields8(id){
    
    var rowIdFH = $('#rowIdFH').val();
    
    $('#fam_ped_his_pname_'+rowIdFH).parent('div').parent('div').parent('div').parent('li').remove();
    $('#fam_ped_his_pemail_'+rowIdFH).parent('div').parent('div').parent('div').parent('li').remove();
    $('#fam_ped_his_hadres_'+rowIdFH).parent('div').parent('div').parent('div').parent('li').remove();
    $('#fam_ped_his_pephne_'+rowIdFH).parent('div').parent('div').parent('div').parent('li').remove();
    $('#fam_ped_his_pewpnno_'+rowIdFH).parent('div').parent('div').parent('div').parent('li').remove();
    $('#fam_ped_his_pecel_'+rowIdFH).parent('div').parent('div').parent('div').parent('li').remove();
    
    rowIdFH = parseInt(rowIdFH)-1;
    $("#rowIdFH").val(rowIdFH);
}
//organ donations
$(document).ready(function() {
                  $(".text").hide();
                  });
function getResults(elem) {
    elem.checked && elem.value == "1" ? $(".text").show() : $(".text").hide();
};
$(document).ready(function() {
                  $(".text1").hide();
                  });
function getResults1(elem) {
    elem.checked && elem.value == "1" ? $(".text1").show() : $(".text1").hide();
};
$(document).ready(function() {
                  $(".text2").hide();
                  });
function getResults2(elem) {
    elem.checked && elem.value == "1" ? $(".text2").show() : $(".text2").hide();
};

//medical history
$(document).ready(function() {
                  $(".text3").hide();
                  });
function getResults3(elem) {
    elem.checked && elem.value == "1" ? $(elem).parent().parent().parent().parent().parent().next().next().children().hide() : $(elem).parent().parent().parent().parent().parent().next().next().children().show();
};

//family history for checkboxes
$(document).ready(function() {
                  $(".text4").hide();
                  });
function getResults4(elem) {
    elem.checked && elem.value == "1" ? $(".text4").show() : $(".text4").hide();
};

$(document).ready(function() {
                  $(".text5").hide();
                  });
function getResults5(elem) {
    elem.checked && elem.value == "1" ? $(".text5").show() : $(".text5").hide();
};

$(document).ready(function() {
                  $(".text6").hide();
                  });
function getResults6(elem) {
    elem.checked && elem.value == "1" ? $(".text6").show() : $(".text6").hide();
};

//womens section
$(document).ready(function() {
                  $(".text7").hide();
                  });
function getResults7(elem) {
    elem.checked && elem.value == "0" ? $(".text7").hide() : $(".text7").show();
};
function ShowHideDiv(gyne_his_have_abpap) {
    var dvPassport = document.getElementById("dvPassport");
    var dvPassport1 = document.getElementById("dvPassport1");
    dvPassport.style.display = gyne_his_have_abpap.checked ? "block" : "none";
    dvPassport1.style.display = gyne_his_have_abpap.checked ? "block" : "none";
}
function ShowHideDiv1(gyne_his_have_sex_trinf) {
    var dvPassport3 = document.getElementById("dvPassport3");
    dvPassport3.style.display = gyne_his_have_sex_trinf.checked ? "block" : "none";
}

function checkAll(ele) {
    var checkboxes = document.getElementsByClassName('mon');
    if(ele.checked) {$('.mon').prop('checked', true);}else{ $('.mon').prop('checked', false);}
}

function MedicineName(ele,mediName){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=immunization_types&limit=250&columns=immunizations_type_id,type&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               var selectText1 = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='immu_name' id='immu_name_"+ele+"' onchange='displayImmuOtherField(this,"+ele+")'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( mediName ==  val['immunizations_type_id'] ){
                      selectText = "selected = selected";
                      }
                      text += "<option value='"+val['immunizations_type_id']+"' "+selectText+" >"+val['type']+"</option>";
                      
                      });
               if( mediName ==  -1){
               selectText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectText1+" >Others</option>";
               text += "</select>";
               $("#addselectmedicinename_"+ele).html(text);
               });
    
}

function displayImmuOtherField(elem,id)
{
    var val = elem.value;
    
    if( val == -1){
        $('#immu_name_others_li_'+id).css('display','block');
        
    }else{
        $('#immu_name_others_li_'+id).css('display','none');
    }
}

function Speciality( selectedId ){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=doctors_speciality&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               
               var text = "";
               var selectText = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_speciality' id='doc_apoint_speciality' onchange='displayOtherField(this)'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText1 = "";
                      if( selectedId ==  val['id'] ){
                      selectText1 = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+selectText1+" >"+val['name']+"</option>";
                      });
               if( selectedId ==  -1){
               selectText = "selected = selected";
               }
               text += "<option value='-1'  "+selectText+" >Others</option>";
               text += "</select>";
               $("#addselectspeciality").html(text);
               });
    
}
function displayOtherField( ele )
{
    var val = ele.value;
    
    if( val == -1){
        $('#doc_apoint_speciality_others_li').css('display','block');
        
    }else{
        $('#doc_apoint_speciality_others_li').css('display','none');
    }
    
}

function FamilyHisTypes(selecid){
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=familyhistory&limit=250&columns=id,type&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               var selectText1 = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='family_his_speciality' id='family_his_speciality' onchange='displayFamilyHisOtherField(this)'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( selecid ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['type']+"</option>";
                      
                      });
               if( selecid ==  -1){
               selectText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectText1+" >Others</option>";
               text += "</select>";
               $("#displayFamilyHis").html(text);
               });
}

function displayFamilyHisOtherField(ele)
{
    var val = ele.value;
    
    if( val == -1){
        $('#family_his_speciality_li').css('display','block');
        
    }else{
        $('#family_his_speciality_li').val('');
        $('#family_his_speciality_li').css('display','none');
    }
}

//family cause of death
function FamilyHisCauseofD(ele,selecid){
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=familycauseofdeath&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               var selectText1 = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='family_his_causeofDe' id='family_his_causeofDe_"+ele+"' onchange='displayFamilyCauseDOtherField(this,"+ele+")'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( selecid ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['name']+"</option>";
                      
                      });
               if( selecid ==  -1){
               selectText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectText1+" >Others</option>";
               text += "</select>";
               $("#displayFamilyCausD_"+ele).html(text);
               });
}
function displayFamilyCauseDOtherField(ele,id)
{
    var val = ele.value;
    
    if( val == -1){
        $('#family_cuses_of_de_li_'+id).css('display','block');
        
    }else{
        $('#family_cuses_of_de_li_'+id).css('display','none');
    }
}

function PhysicalExamSpeciality( selectedId1 ){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=doctors_speciality&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='physical_speciality' id='physical_speciality'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText1 = "";
                      if( selectedId1 ==  val['id'] ){
                      selectText1 = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+selectText1+" >"+val['name']+"</option>";
                      });
               
               text += "</select>";
               $("#addSpecialityPhy").html(text);
               });
    
}

function DieasesName(ele,medidie){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=illnesses&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               var selectText1 = "";
               text += "<select name='medi_his_name' id='medi_his_name_"+ele+"' onchange='displayMediHisOtherField(this,"+ele+")'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var setText = "";
                      if( medidie ==  val['id'] ){
                      setText = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+setText+" >"+val['name']+"</option>";
                      
                      });
               if( medidie ==  -1){
               selectText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectText1+" >Others</option>";
               text += "</select>";
               $("#addselectdieases_"+ele).html(text);
               });
    
}

function displayMediHisOtherField(elem,id)
{
    var val = elem.value;
    
    if( val == -1){
        $('#medi_his_name_others_li_'+id).css('display','block');
        
    }else{
        $('#medi_his_name_others_li_'+id).css('display','none');
    }
}
function FamilyHistoryType(){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=familyhistory&limit=250&columns=id,type&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               text += "<select name='typename' id='typename'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['id']+"'>"+val['type']+"</option>";
                      
                      });
               text += "</select>";
               $("#addselecttype").html(text);
               });
    
}
function FamilyCausesOfDeType(){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=familycauseofdeath&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               text += "<select name='causesofdeath' id='causesofdeath'>";
               
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['id']+"'>"+val['name']+"</option>";
                      
                      });
               text += "</select>";
               $("#addcauseofdeath").html(text);
               });
    
}
function healthProSpeciality(selecid){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=doctors_speciality&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='hp_speciality' id='hp_speciality'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( selecid ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['name']+"</option>";
                      
                      });
               text += "</select>";
               $("#docSpeciality").html(text);
               });
    
}

function birthpedhiscname(){
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricsfamilyhistory&limit=250&columns=id,childName&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='birth_his_cname' id='birth_his_cname'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['id']+"'>"+val['childName']+"</option>";
                      
                      });
               text += "</select>";
               $("#birth_his_chaildname").html(text);
               });
    
}
function developmentHiscname(){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricsfamilyhistory&limit=250&columns=id,childName&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='deve_his_chainame' id='deve_his_chainame'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['id']+"'>"+val['childName']+"</option>";
                      
                      });
               text += "</select>";
               $("#develophistory").html(text);
               });
    
}

function pastmedicalHiscname(){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricsfamilyhistory&limit=250&columns=id,childName&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='past_medi_his_chainame' id='past_medi_his_chainame'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['id']+"'>"+val['childName']+"</option>";
                      
                      });
               text += "</select>";
               $("#develophistory").html(text);
               });
}

function PhysicianNameExams(selectIds){
    var storedData1 = myApp.formGetData('logged_userId');
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='physical_name' id='physical_name'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectedText = "";
                      
                      if( selectIds ==  val['hcp_id'] ){
                      selectedText = "selected = selected";
                      }
                      text += "<option value='"+val['hcp_id']+"'  "+selectedText+" >"+val['first_name']+"</option>";
                      });
               text += "</select>";
               $("#physicianNameExams").html(text);
               });
}

function physicianProvider( selectedIds ){
    
    var storedData1 = myApp.formGetData('logged_userId');
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               var selectedText1 = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_phyname' id='doc_apoint_phyname' onchange='displayPhysicianProOtherField(this)'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectedText = "";
                      if( selectedIds ==  val['hcp_id'] ){
                      selectedText = "selected = selected";
                      }
                      text += "<option value='"+val['hcp_id']+"'  "+selectedText+" >"+val['first_name']+"</option>";
                      
                      });
               if( selectedIds ==  -1){
               selectedText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectedText1+" >Others</option>";
               text += "</select>";
               $("#addphysicianprovider").html(text);
               });
    
}

function displayPhysicianProOtherField(ele)
{
    var val = ele.value;
    
    if( val == -1){
        $('#doc_apoint_phyname_others_li').css('display','block');
        
    }else{
        $('#doc_apoint_phyname_others_li').css('display','none');
    }
}

function organphysicianProvider(){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<select name='organ_name_doc' id='organ_name_doc'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['hcp_id']+"'>"+val['first_name']+"</option>";
                      
                      });
               text += "</select>";
               $("#orgphysicianprovider").html(text);
               });
    
}

function organphysiciProvider(){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<select name='organ_name_doc1' id='organ_name_doc1'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['hcp_id']+"'>"+val['first_name']+"</option>";
                      
                      });
               text += "</select>";
               $("#orgphysicianprovi").html(text);
               });
    
}
function prescribed(medicaId){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               var selectText1 = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='medi_precribed' id='medi_precribed' onchange='displayMedicationOthe(this)'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      
                      if( medicaId ==  val['hcp_id'] ){
                      selectText = "selected = selected";
                      }
                      text += "<option value='"+val['hcp_id']+"' "+selectText+" >"+val['first_name']+"</option>";
                      
                      });
               if( medicaId ==  -1){
               selectText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectText1+" >Others</option>";
               text += "</select>";
               $("#addprescribed").html(text);
               });
    
}
function displayMedicationOthe(ele)
{
    var val = ele.value;
    
    if( val == -1){
        $('#medi_precribed_others_li').css('display','block');
        
    }else{
        $('#medi_precribed_others_li').css('display','none');
    }
}

function childname(childnme){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricschild&limit=250&columns=id,childname&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='past_medi_his_chainame' id='past_medi_his_chainame'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( childnme ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['childname']+"</option>";
                      
                      });
               text += "</select>";
               $("#childname").html(text);
               });
    
}
function childnamebirth(chldNme){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricschild&limit=250&columns=id,childname&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='birth_his_cname' id='birth_his_cname'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( chldNme ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['childname']+"</option>";
                      
                      });
               text += "</select>";
               $("#birth_his_chaildname").html(text);
               });
    
}
function developmentHiscname(devCname){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricschild&limit=250&columns=id,childname&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='deve_his_chainame' id='deve_his_chainame'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var SelectText = "";
                      if( devCname ==  val['id'] ){
                      SelectText = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+SelectText+" >"+val['childname']+"</option>";
                      
                      });
               text += "</select>";
               $("#develophistory").html(text);
               });
    
}
function familypedChild(fampedchd){
    
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=pediatricschild&limit=250&columns=id,childname&condition=customerId="+storedData1['userId'];
    $.getJSON (url, function (json) {
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='fam_ped_his_cn' id='fam_ped_his_cn'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( fampedchd ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['childname']+"</option>";
                      
                      });
               text += "</select>";
               $("#familypedch").html(text);
               });
    
}
function FormCountry(){
    
    //var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=country&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               
               var text = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='countryform' id='countryform'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      
                      text += "<option value='"+val['id']+"'>"+val['name']+"</option>";
                      
                      });
               text += "</select>";
               $("#addcountries").html(text);
               });
    
}

function userOccupation(){
    var storedData1 = myApp.formGetData('logged_userId');
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=occupation&limit=250&columns=id,occupation_name&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               text += "<select name='comp_info_occu' id='comp_info_occu'>";
               
               $.each( json['posts'], function( key, val ) {
                      text += "<option value='"+val['id']+"'>"+val['occupation_name']+"</option>";
                      
                      });
               text += "</select>";
               $("#adduseroccuption").html(text);
               });
}
//physicalexam
function PhysicalExamVal(ele,physicalexn){
    
    var url="http://www.healthrecordspro.com/ws.php?type=select&format=json&table=physicalexambodysystems&limit=250&columns=id,name&condition=1";
    $.getJSON (url, function (json) {
               var text = "";
               var selectText1 = "";
               text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='physical_exam_name' id='physical_exam_name_"+ele+"' onchange='displayPhysicalEOtherField(this,"+ele+")'>"
               + "<option value='0'>Select</option>";
               $.each( json['posts'], function( key, val ) {
                      var selectText = "";
                      if( physicalexn ==  val['id'] ){
                      selectText = "selected = selected";
                      }
                      text += "<option value='"+val['id']+"' "+selectText+" >"+val['name']+"</option>";
                      
                      });
               if( physicalexn ==  -1){
               selectText1 = "selected = selected";
               }
               text += "<option value='-1'  "+selectText1+" >Others</option>";
               text += "</select>";
               $("#addPhysicalexam_"+ele).html(text);
               });
    
}

function displayPhysicalEOtherField(elem,id){
    var val = elem.value;
    
    if( val == -1){
        $('#physical_exam_name_others_li_'+id).css('display','block');
        
    }else{
        $('#physical_exam_name_others_li_'+id).css('display','none');
    }
}

function hideinput(count){
    document.getElementById("value"+[count]).style.visibility = "hidden";
}

function showinput(count){
    document.getElementById("value"+[count]).style.visibility = "visible";
}

Checklogin();

function calendarM()
{
    page_parameter = 31;
    setTimeout(function(){
               var storedData1 = myApp.formGetData('logged_userId');
               if ($("#CalendarPlace").length > 0) {
               $('#CalendarPlace').fullCalendar({
                                                header: {
                                                left: 'prev',
                                                center: 'title',
                                                right: 'next'
                                                },
                                                editable: false,
                                                events: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=events&id='+storedData1['userId'],
                                                eventClick: function(event, jsEvent, view) 
                                                {
                                                
                                                //$('jsEvent').addTouch();
                                                $.ajax({
                                                       type: 'POST',
                                                       url: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=eventsdetails&iid='+event['id'],
                                                       success:function (data) {
                                                       var popupHTML = '<div class="popup" style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;">'+
                                                       '<div class="list-block popup-self">'+
                                                       '<div class="content-block-title" style="text-align:-webkit-center;"><h3 style="font-size: 5vw;margin: 10px 0;">Medication Calendar</h3></div>'+
                                                       '<div class="item-media"></div>'+
                                                       '<div class="item-inner item-inner1">'+
                                                       '<div class="item-input">'+
                                                       data+
                                                       '</div>'+
                                                       '</div>'+
                                                       '<p align="right"><a href="medications.html" onclick="medicationEdit('+event['itemId']+');" style="width:20%;" class="button close-popup" id="button_search">Edit</a></p>'+
                                                       '<p><a href="#" style="color:black;float:right;position:absolute;top:0;right:0;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>'+
                                                       '</div>'+
                                                       '</div>';
                                                       
                                                       myApp.popup(popupHTML);
                                                       }
                                                       });
                                                return false;
                                                
                                                }
                                                });
               }
               else{
               $('#CalendarPlace').fullCalendar({
                                                header: {
                                                left: 'prev',
                                                center: 'title',
                                                right: 'next'
                                                },
                                                editable: false,
                                                events: {},
                                                eventClick: function() 
                                                {				
                                                //$('jsEvent').addTouch();										
                                                }
                                                });
               }
               },500);
    
}


function calendarA()
{
    var eventbit =0;
    var Clength = 0;
    var storedData1 = myApp.formGetData('logged_userId');
    $.getJSON( 'http://healthrecordspro.com/WS/wpevents.php?sectionid=dc_events&id='+storedData1['userId'], function( data ) {
              console.log( data.length );
              Clength = data.length
              }).done(function() {
                      
                      })
    .fail(function() {
          myApp.alert("please check the Network connection");
          });
    
    setTimeout(function(){
               var storedData1 = myApp.formGetData('logged_userId');
               
               
               //alert($("#CalendarPlace_Appoitment").length);
               
               if (Clength>0) {
               $('#CalendarPlace_Appoitment').fullCalendar({
                                                           header: {
                                                           left: 'prev',
                                                           center: 'title',
                                                           right: 'next'
                                                           },
                                                           editable: false,
                                                           events: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=dc_events&id='+storedData1['userId'],
                                                           eventClick: function(event, jsEvent, view) 
                                                           {
                                                           //alert("hi");
                                                           //$('jsEvent').addTouch();
                                                           
                                                           $.ajax({
                                                                  type: 'POST',
                                                                  url: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=dc_eventsdetails&iid='+event['id'],
                                                                  success:function (data) {
                                                                  var popupHTML = '<div class="popup" style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;">'+
                                                                  '<div class="list-block popup-self">'+
                                                                  '<div class="content-block-title" style="text-align:-webkit-center;"><h3 style="font-size: 5vw;margin: 10px 0;">Medication Calendar</h3></div>'+
                                                                  '<div class="item-media"></div>'+
                                                                  '<div class="item-inner item-inner1">'+
                                                                  '<div class="item-input">'+
                                                                  data+
                                                                  '</div>'+
                                                                  '</div>'+
                                                                  
                                                                  '<p align="right"><a href="doctor_consultation.html" onclick="doctorsEdit('+event['id']+');" style="width:20%;" class="button close-popup" id="button_search">Edit</a></p>'+
                                                                  '<p><a href="#" style="color:black;float:right; position:absolute;top:0;right:0;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>'+
                                                                  '</div>'+
                                                                  '</div>'+
                                                                  '</div>';
                                                                  
                                                                  myApp.popup(popupHTML);
                                                                  }
                                                                  });
                                                           return false;
                                                           
                                                           }
                                                           });
               }
               else{
               $('#CalendarPlace_Appoitment').fullCalendar({
                                                           header: {
                                                           left: 'prev',
                                                           center: 'title',
                                                           right: 'next'
                                                           },
                                                           editable: false,
                                                           events:[] ,
                                                           eventClick:  function(event, jsEvent, view) 
                                                           {	
                                                           //$('jsEvent').addTouch();
                                                           alert("clicked");
                                                           }
                                                           });
               }
               },1000);
    
}
function onFileSystemSuccess(fileSystem){
    fileSystem.root.getDirectory('HRP', {create:true}, function(){},function(){myApp.alert("error")})
			 var dirReader = fileSystem.root.createReader();
    // Get a list of all the entries in the directory
    dirReader.readEntries(successR,onError);
}
var imgPth = [];
function successR(entries) {
    var i;
    var objectType;
    
    
    for (i=0; i < entries.length; i++) {
        if(entries[i].isDirectory == true) {
            objectType = 'Directory';
            //myApp.alert(entries[i].name);
            
            
            if(entries[i].name == "HRP")
            {
                var dirReaderz = entries[i].createReader();
                dirReaderz.readEntries(function(entriez){
                                       var j;
                                       for (j=0; j < entriez.length; j++) {
                                       imgPth[j] = entriez[j].fullPath;
                                       LImageInfo[j] = entriez[j].name;
                                       if(Readybit == 0){
                                       $('#self_img').append('<li><a href="image_description_page.html"  style="color:black;margin-right: -13px; margin-top: -23px;"><i class="fa fa-info-circle" ></i></a><img src="'+entriez[j].fullPath+'" onclick="showLocalImages("+entriez[j].fullPath+")" style="width:64px;height:64px" /></li>');
                                       } 						
                                       }
                                       Readybit=0;	
                                       
                                       },function(){myApp.alert("bye2")});
                
            }
        } else {
            objectType = 'File';
        }
        
        
        
    }
}



//Error
function onError(error) {
    alert("Failed to list directory contents: " + error.code);
}	
function fail()
{
    console.log("failed")
    myApp.alert("failed")
}
function dirReady()
{
    console.log("dirready")
    myApp.alert("failed");
    
}
function onGetDCIM(entries) {
    var i;
    for (i = 0; i < entries.length; i++) {
        
        
        var mediaReader = entries[i].createReader();
        mediaReader.readEntries(onGetFileNames, fail);
        break; // remove this to traverse through all the folders and files
        //This will log all files and directories inside 100MEDIA
        window.console.log(" >>>>>>> " + entries[i].name);
    }
}

function onGetFileNames(entries) {
    var i;
    for (i = 0; i < entries.length; i++) {
        if (/\.(jpe?g|png|gif|bmp)$/i.test(entries[i].name)) {
            app.mediaFiles.push(entries[i]);
        }
        //This will log all image files found
        window.console.log(" $$$$$ " + entries[i].name);
    }
}
function showLocalImages(img){
    var myPhotoBrowserPopupDark = myApp.photoBrowser({
                                                     photos : imgPth,
                                                     theme: 'dark',
                                                     type: 'popup'
                                                     });
    myPhotoBrowserPopupDark.open();
    
}

