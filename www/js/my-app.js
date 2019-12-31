var playerId;
var myApp = new Framework7({
    modalTitle: 'HRP',
    animateNavBackIcon: true
    //pushState: true,
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {     
    dynamicNavbar: true,
}); 
$(document).on('ajaxStart', function(e) {
    myApp.showIndicator();
});
$(document).on('ajaxComplete', function() {
    myApp.hideIndicator();
});                                                                 
      
 
$$('#longpress').on('taphold', function() {
    myApp.alert('Tap hold fired!');
});
var tipID
var catId = 0;
var selectId = 0;
var page_parameter = 0;
///////////////////////---------------------------------------------------------------------------///////////////////
document.addEventListener("deviceready", onDeviceReady, false);
  
function onDeviceReady() {
    CheckLocalStorage();

cordova.getAppVersion.getVersionNumber(function (version) {
                $('#version_num').html('V' + version);
        }); 

    //alert("hi")
    $.getScript(turl, function(data, textStatus, jqxhr) {
        // console.log("Load was performed.");
    });
    $.getScript(curl, function(data, textStatus, jqxhr) {
        // console.log("Load was performed.");
    });
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    var VideoEditorOptions = {
        OptimizeForNetworkUse: {
            NO: 0,
            YES: 1
        },
        OutputFileType: {
            M4V: 0,
            MPEG4: 1,
            M4A: 2,
            QUICK_TIME: 3
        }
    };
    var McameraCatid = "";
    page_parameter = 0;

    Readybit = 1;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
    document.addEventListener("backbutton", onBackKeyDown, false);
}



function onBackKeyDown(e) {
    var att = $$(".page-on-center").attr("data-page");
    if (att == "loginnormal" || att == "hrp_all_sections" || att == "index") {
        myApp.confirm('Are you sure want to quit?', "Health Record Pro ",
            function() {
                navigator.app.exitApp();
            },
            function() {

            }
        );
    } else {
        mainView.router.back();
    }
}




$$(document).on('pageInit', function(e) {

console.log('hereplesae')

    var storedLang = localStorage.getItem("lang");
    if (storedLang == 'ar') {
        console.log('in arrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        $("#lang-style").attr('href', 'css/arabic.css');
        $('.list-block').css("direction","rtl")
        $('.content-block').css("direction","rtl")

    }
    if (storedLang == 'en' || storedLang == '') {
        $("#lang-style").attr('href', 'css/english.css');
        $('.page-on-center').css("direction","ltr")

    }
    if (storedLang == 'fr') {
        $("#lang-style").attr('href', 'css/french.css');
    }
    if (storedLang == 'ru') {
        $("#lang-style").attr('href', 'css/russian.css');
    }
    if (storedLang == 'sp') {
        $("#lang-style").attr('href', 'css/spanish.css');
    }
    if (storedLang == 'jp') {
        $("#lang-style").attr('href', 'css/japan.css');
    }
    console.log(storedLang);


    i18next.use(i18nextXHRBackend);
    i18next.init({
        'debug': false,
        'lng': storedLang,
        'ns': 'translation',
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json'
        }
    }, function(err, t) {
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $);
        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $('.translation-init').localize();
    });

});
/////////////////////////-----------------------------------------//////////////////////////////

$$(document).on('pageInit', '.page[data-page="lab_results_main"]', function(e) {

    getLabResults()    

})

$$(document).on('pageInit', '.page[data-page="doctors_appoin_listing"]', function(e) {

    getDocAppData()

})

$$(document).on('pageInit', '.page[data-page="News"]', function(e) {
    console.log('in news')
    GetNews()
    

})
$$(document).on('pageInit', '.page[data-page="NewsAuther"]', function(e) {
    console.log('in news')
    

})

$$(document).on('pageInit', '.page[data-page="settings"]', function(e) {

    showmetrics();

})

$$(document).on('pageInit', '.page[data-page="index"]', function(e) {

console.log('paaaaaage ini')

    if (localStorage.getItem("lang") != 'en') {
        $('.backToENg').show();
        // $('#CssStyle').attr("href" , "css/framework7.rtl.min.css")
        $('.page-on-center').css("direction","rtl")
    } else {
        $('.backToENg').hide();
        // $('#CssStyle').attr("href" , "css/framework7.min.css")
        $('.page-on-center').css("direction","ltr")


    }



    // console.log("------------------");
    if (localStorage.getItem("lang") == 'ar') {
        $$('#user_email').attr('placeholder', 'اسم المستخدم أو البريد الالكتروني');
        $$("#user_password").attr('placeholder', 'كلمة مرور المستخدم');
        $$('.myButton').attr('value', 'تسجيل الدخول');
        $$('.lang_title').html('اللغة');
        $$('.lang_list').css('direction', 'rtl');
        $$('#language_select').val('ar');
        $$('.forget_pass').html('هل نسيت كلمة المرور');
        $$('.sign_up').html('سجل');
        $$('.need_help').html('تحتاج مساعدة؟');
        $$('.privacy_pol').html('<u>سياسة الخصوصية</u>');
    } 

    else if (localStorage.getItem("lang") == 'en') {
        $$('.myButton').attr('value', "Login");
        $$("#user_password").attr('placeholder', "User password");
        $$('#user_email').attr('placeholder', 'Username or email');
        $$('.lang_title').html('language');
        $$('.lang_list').css('direction', 'ltr');
        $$('#language_select').val('en');
        $$('.forget_pass').html('Forgot Password');
        $$('.sign_up').html('sign up');
        $$('.need_help').html("Need Help?");
        $$('.privacy_pol').html('Privacy Policy');}

    // } else if (localStorage.getItem("lang") == 'jp') {
    //     $$('.myButton').attr('value', "ログイン");
    //     $$("#user_password").attr('placeholder', "ユーザーパスワード");
    //     $$('#user_email').attr('placeholder', 'ユーザー名または電子メール');
    //     $$('.lang_title').html('言語');
    //     $$('.lang_list').css('direction', 'ltr');
    //     $$('#language_select').val('jp');
    //     $$('.forget_pass').html('パスワードを忘れましたか？');
    //     $$('.sign_up').html('申し込む');
    //     $$('.need_help').html("助けが必要ですか？");
    //     $$('.privacy_pol').html('プライバシーポリシー');

    // }


});




$$(document).on('pageInit', '.page[data-page="password"]', function(e) {


    if (localStorage.getItem("lang") == 'ar') {
        $$(".pass_title").html(
            "الرجاء إضافة البريد الإلكتروني  وإرساله لكي  إعادة تعيين كلمة المرور الجديدة وإرسالها إلى بريدك الإلكتروني");
        $$(".email_field").html("البريد الالكتروني");
        $$(".pass_pg_titile").html("نسيت كلمة المرور ");
        $$("#email_forpass").attr("placeholder", "اكتب بريدك الالكتروني");
        $$(".btn_submit").html("ارسال");
        $$(".page[data-page='password']").css("direction", "rtl");
    } else if (localStorage.getItem("lang") == 'fr') {
        $$(".pass_title").html(
            "S'il vous plaît ajouter votre email <br> et soumettre afin de <be> réinitialiser et envoyer un nouveau mot de passe à votre adresse e-mail");
        $$(".email_field").html("email");
        $$(".pass_pg_titile").html("Mot de passe oublié");
        $$("#email_forpass").attr("placeholder", "Entrer Email");
        $$(".btn_submit").html("soumettre");
        $$(".page[data-page='password']").css("direction", "ltr");

    } else if (localStorage.getItem("lang") == 'sp') {
        $$(".pass_title").html(
            "Agregue su correo electrónico y envíelo para <restablecerse> y enviar nueva contraseña a su correo electrónico");
        $$(".email_field").html("correo electrónico");
        $$(".pass_pg_titile").html("Se te olvidó tu contraseña");
        $$("#email_forpass").attr("placeholder", "Ingrese correo electrónico");
        $$(".btn_submit").html("enviar");
        $$(".page[data-page='password']").css("direction", "ltr");
    } else if (localStorage.getItem("lang") == 'ru') {
        $$(".pass_title").html(
            "Пожалуйста, добавьте свой адрес электронной почты и отправьте, чтобы <быть> сбросить и отправить новый пароль на ваш адрес электронной почты");
        $$(".email_field").html("Эл. адрес");
        $$(".pass_pg_titile").html("Se te olvidó tu contraseña");
        $$("#email_forpass").attr("placeholder", "Введите адрес электронной почты");
        $$(".btn_submit").html("Отправить");
        $$(".page[data-page='password']").css("direction", "ltr");
    } else if (localStorage.getItem("lang") == 'en') {
        $$(".pass_title").html(
            "Please add your email and submit in order to reset and send new password to your email");
        $$(".email_field").html("Email");
        $$(".pass_pg_titile").html("Forgot Password");
        $$("#email_forpass").attr("placeholder", "Enter Email");
        $$(".btn_submit").html("submit");
        $$(".page[data-page='password']").css("direction", "ltr");
    } else if (localStorage.getItem("lang") == 'jp') {
        $$(".pass_title").html(
            "あなたのメールアドレスを追加してください<br>に提出してください<br>リセットし、あなたの電子メールに新しいパスワードを送る");
        $$(".email_field").html("メール");
        $$(".pass_pg_titile").html("パスワードを忘れましたか？");
        $$("#email_forpass").attr("placeholder", "Enter Email");
        $$(".btn_submit").html("提出する");
        $$(".page[data-page='password']").css("direction", "ltr");
    }


});




$$(document).on('pageInit', '.page[data-page="select_lang"]', function(e) {

    if (localStorage.getItem("lang") == 'ar') {
        $$(".lang_pg_titile").html("اختار اللغة");
        $$(".lang_head_title").html("اختار لغتك");
        $$(".lang_submit").html("احفظ");
        document.getElementById("ar").checked = true;
        $$(".page[data-page='select_lang']").css("direction", "rtl");
    } else if (localStorage.getItem("lang") == 'fr') {
        $$(".lang_pg_titile").html("Choisir la langue");
        $$(".lang_head_title").html("Choisissez votre langue");
        $$(".lang_submit").html("soumettre");
        $$(".page[data-page='select_lang']").css("direction", "ltr");
        document.getElementById("fr").checked = true;
    } else if (localStorage.getItem("lang") == 'sp') {
        $$(".lang_pg_titile").html("Seleccione el idioma");
        $$(".lang_head_title").html("Elige tu idioma");
        $$(".lang_submit").html("enviar");
        document.getElementById("sp").checked = true;
        $$(".page[data-page='select_lang']").css("direction", "ltr");
    } else if (localStorage.getItem("lang") == 'ru') {
        $$(".lang_pg_titile").html("Выберите язык");
        $$(".lang_head_title").html("Выберите ваш язык");
        $$(".lang_submit").html("Отправить");
        $$(".page[data-page='select_lang']").css("direction", "ltr");
        document.getElementById("ru").checked = true;
    } else if (localStorage.getItem("lang") == 'en') {
        $$(".lang_pg_titile").html("Select Language");
        $$(".lang_head_title").html("Select Your Language");
        $$(".lang_submit").html("Submit");
        $$(".page[data-page='select_lang']").css("direction", "ltr");
        document.getElementById("en").checked = true
    } else if (localStorage.getItem("lang") == 'jp') {
        $$(".lang_pg_titile").html("言語を選択");
        $$(".lang_head_title").html("あなたの言語を選択してください");
        $$(".lang_submit").html("提出する");
        $$(".page[data-page='select_lang']").css("direction", "ltr");
        document.getElementById("jp").checked = true
    }


});




$$(document).on('pageInit', '.page[data-page="TermsConditionsPage"]', function(e) {
    console.log('in teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeems');
    terms();


});





$$(document).on('pageInit', '.page[data-page="user_profile"]', function(e) {

    giveAlert();
});


$$(document).on('pageInit', '.page[data-page="manage_albums"]', function(e) {


    manage_albumsz(catId, selectId);

});


$$(document).on('pageInit', '.page[data-page="emergency_contact_listing"]', function(e) {


    getEmergencyContactData();

});

$$(document).on('pageInit', '.page[data-page="health_provider_listing"]', function(e) {


    gethealthProviderData(); //1
    tempPage = 8;

});


$$(document).on('pageInit', '.page[data-page="insurance"]', function(e) {

    getInsuranceData();
    page_parameter = 1;


});
$$(document).on('pageInit', '.page[data-page="medications_listing"]', function(e) {

    getMedicationsData();
    page_parameter = 1;
    tempPage = 12;
});
$$(document).on('pageInit', '.page[data-page="medical_history_condi_listing"]', function(e) {

    getmedihistoryData();
    page_parameter = 1;
    tempPage = 13;
});

$$(document).on('pageInit', '.page[data-page="medical_history_condi_listing"]', function(e) {

    getmedihistoryData();
    page_parameter = 1;
    tempPage = 13;
});


$$(document).on('pageInit', '.page[data-page="allergies_listing"]', function(e) {

    getAllergiesData();
    page_parameter = 1;
    tempPage = 14;

});

$$(document).on('pageInit', '.page[data-page="allergies"]', function(e) {

    $("#allergies_inbtn").css('display', 'block');
    $("#allergies_upbtn").css('display', 'none');
});

$$(document).on('pageInit', '.page[data-page="surgeries_listing"]', function(e) {

    getSurgeriesData();
    page_parameter = 1;
    tempPage = 15;
});
$$(document).on('pageInit', '.page[data-page="family_history_listing"]', function(e) {

    page_parameter = 1;
    tempPage = 16;
});

$$(document).on('pageInit', '.page[data-page="scanvalues"]', function(e) {

    scanBackData();
});



$$(document).on('pageInit', '.page[data-page="dental_history_listing"]', function(e) {

    getdentalhistoryData();
    page_parameter = 1;
    tempPage = 23;
});


$$(document).on('pageInit', '.page[data-page="women_section_main"]', function(e) {

    page_parameter = 1;
    tempPage = 21;
});


$$(document).on('pageInit', '.page[data-page="nutrition_diet_practise"]', function(e) {

    page_parameter = 25;
    tempPage = 1;
});

$$(document).on('pageInit', '.page[data-page="foodand_nutrition_history"]', function(e) {

    getFoodData();
    page_parameter = 25;
});

$$(document).on('pageInit', '.page[data-page="bio_chemical_listing"]', function(e) {

    getbioData();
    page_parameter = 25;
});

$$(document).on('pageInit', '.page[data-page="monitoringand_evolution"]', function(e) {

    getMonitoringEvoData();
});

$$(document).on('pageInit', '.page[data-page="medicalandlega_directives_listing"]', function(e) {


    page_parameter = 1;
    tempPage = 27
});

$$(document).on('pageInit', '.page[data-page="doctors_counsaltation_listing"]', function(e) {

    getdocCounsaltationData();
});
$$(document).on('pageInit', '.page[data-page="health_summary"]', function(e) {

    getMonitoringEvoData();
    page_parameter = 1;
    tempPage = 28;
});
$$(document).on('pageInit', '.page[data-page="health_summary_custom"]', function(e) {

    Chealthsummary();
});

$$(document).on('pageInit', '.page[data-page="health_calender_new"]', function(e) {

    calendarM(); //2
});


$$(document).on('pageInit', '.page[data-page="health_cal_Appointment"]', function(e) {

    calendarA(); //2
});



$$(document).on('pageInit', '.page[data-page="self_monitoring_charts"]', function(e) {
    selfMonEdit();
    $("#changeonInsert_self").css('display', 'none');
    $("#changeonUpdate_self").css('display', 'block');
    $("#add").css('display', 'block');
});



$$(document).on('pageInit', '.page[data-page="emergency_contact"]', function(e) {

    $("#emergency_inbtn").css('display', 'block');
    $("#emergency_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="health_providers"]', function(e) {

    $("#healthproviders_inbtn").css('display', 'block');
    $("#healthproviders_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="health_insu_form"]', function(e) {
    $("#insurance_inbtn").css('display', 'block');
    $("#insurance_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="doctor_consultation"]', function(e) {
    getSpecialty()
  $("#docappoint_inbtn").css('display', 'block');
    $("#docappoint_upbtn").css('display', 'none');
});


$$(document).on('pageInit', '.page[data-page="DoctorScadual"]', function(e) {
  
    $('.AvDate').html(if_langs('Available Date' , 'اليوم المتاح'))
    $('.AvTime').html(if_langs('Available Time' , 'الوقت المتاح'))
    $('.To').html(if_langs('To' , 'الي'))
    $('#IAvDate').css(if_langs('margin-left','margin-right'), "7vh")
    $('#date_LabResult').css(if_langs('margin-left','margin-right'), "8vh")
    $('#doc_apoint_time').css(if_langs('margin-left','margin-right'), "8vh")
    $('.YourTime').html(if_langs('Your time' , ' الحجز في الساعة'))
    $('.YourDate').html(if_langs('Your Date' , 'يحجز في اليوم'))

    getLabCalandar();
    
    docApptimePicker()
});

$$(document).on('pageInit', '.page[data-page="DoctorSpecialty"]', function(e) {
    // GetDoctorSpecialty()
  $("#docappoint_inbtn").css('display', 'block');
    $("#docappoint_upbtn").css('display', 'none');
});

$$(document).on('pageInit', '.page[data-page="medications"]', function(e) {


    $("#medication_inbtn").css('display', 'block');
    $("#medication_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="medical_history"]', function(e) {

    $("#medihistory_inbtn").css('display', 'block');
    $("#medihistory_upbtn").css('display', 'none');
    $("#medi_add").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="allergies"]', function(e) {

    $("#allergies_inbtn").css('display', 'block');
    $("#allergies_upbtn").css('display', 'none');
});


$$(document).on('pageInit', '.page[data-page="immunization"]', function(e) {
    $("#immunization_inbtn").css('display', 'block');
    $("#immunization_upbtn").css('display', 'none');
    $("#immu_add").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="surgeries"]', function(e) {

    $("#surgeries_inbtn").css('display', 'block');
    $("#surgeries_upbtn").css('display', 'none');
});


$$(document).on('pageInit', '.page[data-page="family_history"]', function(e) {

    $("#family_his1_inbtn").css('display', 'block');
    $("#family_his1_upbtn").css('display', 'none');
});


$$(document).on('pageInit', '.page[data-page="family_causesof_death"]', function(e) {

    $("#family_causeofd_inbtn").css('display', 'block');
    $("#family_causeofd_upbtn").css('display', 'none');
});


$$(document).on('pageInit', '.page[data-page="labreports"]', function(e) {

    $("#labreports_inbtn").css('display', 'block');
    $("#labreports_upbtn").css('display', 'none');
    $("#add1").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="gynecologic_history_form"]', function(e) {

    $("#gynacologies_inbtn").css('display', 'block');
    $("#gynacologies_upbtn").css('display', 'none');
});




$$(document).on('pageInit', '.page[data-page="womens_preg_dating_form"]', function(e) {

    $("#womenpregdat_inbtn").css('display', 'block');
    $("#womenpregdat_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="social_history_form"]', function(e) {

    $("#socialhistory_inbtn").css('display', 'block');
    $("#socialhistory_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="obestetric_history_form"]', function(e) {

    $("#obestric_inbtn").css('display', 'block');
    $("#obestric_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="dental_history_form"]', function(e) {

    $("#dentalhis_inbtn").css('display', 'block');
    $("#dentalhis_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="bio_chemical_form"]', function(e) {

    $("#biochemical_inbtn").css('display', 'block');
    $("#biochemical_upbtn").css('display', 'none');
});

$$(document).on('pageInit', '.page[data-page="implants_medicaldevices"]', function(e) {

    $("#implants_inbtn").css('display', 'block');
    $("#implants_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="medicalandlegal_directives"]', function(e) {

    $("#medicaldirec_inbtn").css('display', 'block');
    $("#medicaldirec_upbtn").css('display', 'none');
});



$$(document).on('pageInit', '.page[data-page="doctors_counsaltation_form"]', function(e) {
    $("#doccounsaltation_inbtn").css('display', 'block');
    $("#doccounsaltation_upbtn").css('display', 'none');
});




//////////////////////////////// -------------------- Login Section  and check local storage ----------------------///////////////////////////////////////////////////////////
function Checklogin() {
    var userLoggedIn = myApp.formGetData('logged_userId');
    if (userLoggedIn == undefined) {
        //mainView.router.loadPage('login.html');
        return false;
    } else {
        storedData1 = myApp.formGetData('logged_userId');
        return userLoggedIn['userId'];
    }
}




$$(document).on('pageInit', '.page[data-page="hrp_all_sections"]', function(e) {
    
 
 if (localStorage.getItem("lang") == 'ar') {
    $$('.need_help').html('تحتاج مساعدة؟');

        $$('.ProfileSection').html('الصفحة الشخصية');
        $$('.EmergencySection').html('اتصال الطوارئ');
        $$('.AppointmentsSection').html('الأطباء والمعالجين');

        $$('.LabResultSection').html('نتايج التحاليل/الطب الإشعاعى');

        $$('.News').html('الاخبار');

    }  else if (localStorage.getItem("lang") == 'en') {
        $$('.ProfileSection').html('Profile');
        $$('.EmergencySection').html('Emergency Contacts');
        $$('.AppointmentsSection').html('Doctors’ Appointments');
        $$('.need_help').html("Need Help?");
        $$('.News').html('News');

        $$('.LabResultSection').html('Lab Results & Radiology');


    } 
    
})
function CheckLocalStorage() {


    if (!Checklogin()) {
        // console.log("hiiiiiiiiiiiiiii");
        if (localStorage.lang == undefined) {
            mainView.router.loadPage("select_lang.html");
        }
    } else {
        var storedData1 = myApp.formGetData('logged_userId');
    /*   var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=emergency_contacts&columns=*&condition=user_id=" + storedData1['userId'];
        $.getJSON(url, function(json) {
        if (json['posts'].length < 2) {
                myApp.alert(if_langs("You have to register minimum 2 emergency numbers", "يجب عليك تسجيل رقمين للطوارئ على الأقل", "Vous devez enregistrer au moins 2 numéros d'urgence", "Вы должны зарегистрировать минимум 2 номера экстренных служб", "最低2つの緊急電話番号を登録する必要があります", "Tienes que registrar un mínimo de 2 números de emergencia."));
                setTimeout(function() {
                    EmergencycontactAdd();
                }, 1000);
                mainView.router.loadPage("emergency_contact2.html");
                // return;
            } else {*/
                // var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=healthcare_providers&columns=*&condition=user_id=" + storedData1['userId'];
                // $.getJSON(url, function(json) {
                //     // myApp.hidePreloader();
                // /*  if (json['posts'] == 0) {
                //         myApp.alert(if_langs("You have to add minimum one therapists", "يجب عليك إضافة معالج واحد على الأقل", "Vous devez ajouter au minimum un thérapeute", "Вы должны добавить минимум одного терапевта", "最低1人のセラピストを追加する必要があります", "Tienes que añadir al menos un terapeuta."));
                //         setTimeout(function() {
                //             HealthProvidersAdd();
                //         }, 1000);
                //         mainView.router.loadPage("health_providers2.html");
                //         // return;
                // // } else {*/
                //         mainView.router.loadPage('hrp_all_sections.html');
                // // }
                // });
                mainView.router.loadPage('hrp_all_sections.html');

            //}
    //  });

    }




}


function loginsubmit() {
    var userName = $('#user_email').val();
    var password = $('#user_password').val();
    var errorCount = 0;
    $('#email_error').html('');

    if (userName.trim() == '') {
        $('#email_error').html('Enter Username');
        errorCount++;
    } else {
        $('#email_error').html('');
    }
    if (password.trim() == '') {
        $('#password_error').html('Enter Password');
        errorCount++;
    } else {
        $('#password_error').html('');
    }
    if (errorCount > 0) {
        return false;
    }
    myApp.showPreloader();
    // var url = "https://www.healthrecordspro.com/wsplus.php?type=login&format=json&email=" + userName + "&password=" + password + "&active=1";

    $.ajax({
        type: 'POST',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/login",
        data: {
            username: userName,
            password: password
        },
        success: function(json) {
        console.log(json)
        myApp.hidePreloader();
        console.log(json['response']['user']['PATIENT_ID']);
        if (json['response']['user']['PATIENT_ID']) {
            var storedData = myApp.formStoreData('logged_userId', {
                'userId': json['response']['user']['PATIENT_ID']
            });
            console.log(json['response']['user']['PATIENT_ID']);
            localStorage.BguhToken = json['response']['user']['token']
            var storedData1 = myApp.formGetData('logged_userId');
            var storedMData = myApp.formStoreData('logged_metricsId', {
                'metricsId': json['response']['user']['metrics']
            });
            var storedMData = myApp.formGetData('logged_metricsId');

            // if (localStorage.getItem("lang") != undefined) {
            //     val = "preflang='" + localStorage.getItem("lang") + "'";
            //     var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val + "&condition=user_id=" + storedData1['userId'];
            //     $.getJSON(url, function(json) {});
            // } else {
            //     localStorage.setItem("lang", json['response']['user']['preflang']);

            // }
            myApp.alert( if_langs("Login Sucessfully", "تم تسجيل الدخول بنجاح" ), if_langs('Success','تم بنجاح'));

            selectHomepageDisplay();

        } else {
            $('#email_error').html('Enter Valid Details');
            return false;
        }
    },
    error: function(err){
        myApp.hidePreloader();
        myApp.alert( if_langs("Login failed please ensure from username and password", "برجاء التاكد من اسم المستخدم والرقم السري" ), if_langs('Faild','فشل'));

    }   
    });
}

function selectHomepageDisplay() {
    console.log('in Selct HOme')
    page_parameter = 0;
    var storedData1 = myApp.formGetData('logged_userId');

    setTimeout(function() {
        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=view_type&condition=user_id=" + storedData1['userId'];
        $.getJSON(url1, function(json) {
            console.log(json)
            var viewbit = json['posts'][0]['view_type'];
            getHomepageSections();
            mainView.router.loadPage('hrp_all_sections.html');

        });
    }, 500);
}


function getHomepageSections() {

    var storedData1 = myApp.formGetData('logged_userId');

    // $.ajax({
    //     type: 'POST',
    //     url: "https://www.healthrecordspro.com/wsplus.php?type=sectionuserpreference&format=json&customerid=" + storedData1['userId'],
    //     data: "",
    //     dataType: "json",
    //     contentType: false,
    //     processData: false,
    //     success: function(res) {
    //         $('#display_home_sections').html('');
    //         $.each(res['posts'], function(key, val) {
    //             if (localStorage.getItem("lang") == 'ar') {
    //                 $('#display_home_sections').append('<li onclick="assignModuleId(' + val['sectionId'] + ')"><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><div class="item-content white"><div class="item-inner"><div class="item-title"><img src="img/' + val['icon_mobile'] + '" height="37"/><span>' + val['name_arabic'] + '</span></div></div></div></a></li>');
    //             } else if (localStorage.getItem("lang") == 'fr') {
    //                 $('#display_home_sections').append('<li onclick="assignModuleId(' + val['sectionId'] + ')"><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><div class="item-content white"><div class="item-inner"><div class="item-title"><img src="img/' + val['icon_mobile'] + '" height="37"/><span>' + val['name_french'] + '</span></div></div></div></a></li>');
    //             } else if (localStorage.getItem("lang") == 'sp') {
    //                 $('#display_home_sections').append('<li onclick="assignModuleId(' + val['sectionId'] + ')"><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><div class="item-content white"><div class="item-inner"><div class="item-title"><img src="img/' + val['icon_mobile'] + '" height="37"/><span>' + val['name_spanish'] + '</span></div></div></div></a></li>');
    //             } else if (localStorage.getItem("lang") == 'ru') {
    //                 $('#display_home_sections').append('<li onclick="assignModuleId(' + val['sectionId'] + ')"><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><div class="item-content white"><div class="item-inner"><div class="item-title"><img src="img/' + val['icon_mobile'] + '" height="37"/><span>' + val['name_russian'] + '</span></div></div></div></a></li>');
    //             } else if (localStorage.getItem("lang") == 'jp') {
    //                 $('#display_home_sections').append('<li onclick="assignModuleId(' + val['sectionId'] + ')"><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><div class="item-content white"><div class="item-inner"><div class="item-title"><img src="img/' + val['icon_mobile'] + '" height="37"/><span>' + val['name_japanese'] + '</span></div></div></div></a></li>');
    //             } else {
    //                 $('#display_home_sections').append('<li onclick="assignModuleId(' + val['sectionId'] + ')"><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><div class="item-content white"><div class="item-inner"><div class="item-title"><img src="img/' + val['icon_mobile'] + '" height="37"/><span>' + val['name'] + '</span></div></div></div></a></li>');
    //             }

    //         });
    //     }
    // });
}

function getGridViewSections() {
    console.log("hi from grid view");
    var storedData1 = myApp.formGetData('logged_userId');
    var homepage = ['Emergency Contacts', 'Physicians & Therapists', 'Health Insurance', 'Allergies', 'Family History', 'Immunizations', 'Dental History', 'Prescription Eye Glasses', 'Implants/Medical Devices', 'Medical and Legal Directives', 'Organ Donations', "Women’s section"];
    // $.ajax({
    //     type: 'POST',
    //     url: "https://www.healthrecordspro.com/wsplus.php?type=sectionuserpreference&format=json&customerid=" + storedData1['userId'],
    //     data: "",
    //     dataType: "json",
    //     async: false,
    //     contentType: false,
    //     processData: false,
    //     success: function(res) {
    //         var name;
    //         var profileName;
    //         if (localStorage.getItem("lang") == 'ar') {
    //             profileName = 'الصفحة الشخصية'
    //         } else if (localStorage.getItem("lang") == 'fr') {
    //             profileName = 'profil'
    //         } else if (localStorage.getItem("lang") == 'sp') {
    //             profileName = 'perfil'
    //         } else if (localStorage.getItem("lang") == 'ru') {
    //             profileName = 'профиль'
    //         } else if (localStorage.getItem("lang") == 'jp') {
    //             profileName = 'プロフィール'
    //         } else {
    //             profileName = 'profile'
    //         }
    //         setTimeout(function() {
    //             $('#sections_displayGridView').html('');
    //             $('#sections_displayGridView').append('<div class="col-50 tablet-33" style="background-color: #4d7ab9; "><a href="user_profile.html" class="item-link" onclick="giveAlert();" ><img src="img/USER-PROFILE.png" height="70"/><div>'+ profileName +'</div></a></div>');
    //             $.each(res['posts'], function(key, val) {
    //                 var valz = homepage.indexOf(val['name']);
    //                 if (valz == -1) {
    //                     if (localStorage.getItem("lang") == 'ar') {
    //                         name = val['name_arabic'];
    //                     } else if (localStorage.getItem("lang") == 'fr') {
    //                         name = val['name_french'];
    //                     } else if (localStorage.getItem("lang") == 'sp') {
    //                         name = val['name_spanish'];
    //                     } else if (localStorage.getItem("lang") == 'ru') {
    //                         name = val['name_russian'];
    //                     } else if (localStorage.getItem("lang") == 'jp') {
    //                         name = val['name_japanese'];
    //                     } else {
    //                         name = val['name'];
    //                     }
    //                     $('#sections_displayGridView').append('<div class="col-50 tablet-33" style="background-color: #4d7ab9; "><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><img src="img/' + val['icon_mobile'] + '" height="70"/><div>' + name + '</div></a></div>');
    //                 }
    //                 var valz = homepage.indexOf(val['name']);
    //                 if (valz != -1) {
    //                     var name = val['name'];
    //                     if (localStorage.getItem("lang") == 'fr') {
    //                         name = val['name_french'];
    //                     } else if (localStorage.getItem("lang") == 'sp') {
    //                         name = val['name_spanish'];
    //                     } else if (localStorage.getItem("lang") == 'ru') {
    //                         name = val['name_russian'];
    //                     } else if (localStorage.getItem("lang") == 'jp') {
    //                         name = val['name_japanese'];
    //                     } else if (localStorage.getItem("lang") == 'ar') {
    //                         name = val['name_arabic'];
    //                     }
    //                     $('#sections_displayGridView').append('<div class="col-50 tablet-33" style="background-color: #4d7ab9; "><a href="' + val['filename_mobile'] + '" class="item-link" onclick="' + val['onclick_mobile'] + '" ><img src="img/' + val['icon_mobile'] + '" height="70"/><div>' + name + '</div></a></div>');
    //                 }
    //             });
    //         }, 500);
    //     }
    // });

}


//////////////////////////////// -------------------- Login Section end ----------------------///////////////////////////////////////////////////////////

//////////////////////////////// -------------------- praivacy start ----------------------///////////////////////////////////////////////////////////


function terms() {
    console.log('innnnnnnnnnnnnnnnnnnnnnnnnTeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrms');

    url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=pages&columns=*&condition=id=12";
    $.getJSON(url, function(json) {
        //alert(json['posts'][0]['description']);
        $("#terms").html(json['posts'][0]['description']);

    });


}


function privacy() {

    url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=pages&columns=*&condition=id=28";
    $.getJSON(url, function(json) {
        //alert(json['posts'][0]['description']);
        $("#privacy").html(json['posts'][0]['description'])
    });


}

//////////////////////////////// -------------------- praivacy end ----------------------///////////////////////////////////////////////////////////



//////////////////////////////// -------------------- Need Help ----------------------///////////////////////////////////////////////////////////


function isEmail(email) {
    // console.log(email);
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return false;
    } else {
    return true;
    }
}


function isEmpty(variable) {
    if (String(variable).trim()=="") {
    return true;
    }else {
    return false;
    }
}
//////////////////////////////// -------------------- End Need Help ----------------------///////////////////////////////////////////////////////////



//////////////////////////////// -------------------- form.html ( signup Section and forget password ) ----------------------///////////////////////////////////////////////////////////

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


function registerformSubmit() {
    // if (localStorage.getItem("lang") == 'en') {

    // }
    myApp.showIndicator();
    var firstName = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#e_mail').val();
    var full_date = $('#picker-date').val();
    var user_country = $('#countryform').find(":selected").text();
    var u_username = $('#u_username').val();
    var u_password = $('#u_password').val();
    var gender = $("input:radio[name=gender]:checked").val();
    var validator = true;
var checkAccept =  document.getElementById("check").checked
    console.log('this is the termAccept in sign in -------------------------> '+ checkAccept);
    if (firstName.trim() == "" || last_name.trim() == "" || u_username.trim() == "" || u_password.trim() == ""  ||checkAccept != true || user_country == "" || email == "" || 
        user_country  == "" || gender == "" ) {
    
        myApp.alert("All Fields Required ");
        myApp.hideIndicator();

    }
    else {
    var eurl = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=user_id&condition=email=%27" + email.trim() + "%27"
    $.getJSON(eurl, function(json1) {
        //alert(json1['posts'][0]);
        // console.log(json1['posts'][0]);
        myApp.hideIndicator();
        if (json1['posts'][0] == "0") {
            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=user_profile&columns=first_name,last_name,email,gender,date_of_birth,country,,username,password,active&values='" + firstName + "','" + last_name + "','" + email + "','" + gender + "','" + full_date + "','" + user_country + "','" + u_password + "','0'";
            //alert(playerId);
            var url2 = "https://www.healthrecordspro.com/wsplus.php?type=registration2&format=json&values=%27" + firstName + "%27,%27" + last_name + "%27,%27" + email + "%27,%27" + gender +
            "%27,%27" + full_date + "%27,%27" + user_country + "%27,%27" + u_password + "%27,%27" + playerId + "%27,%27IOS%27,%27" + u_username + "%27"
            // console.log(url2);
            $.getJSON(url2, function(json) {
                console.log('playerID in sign up ---------------> '+playerId);
                console.log('json in sign up ---------------> '+json['posts']);
                if (json['posts'] != null) {
                    myApp.alert('Your profile has been Created', 'Success');
                    mainView.router.loadPage('Thankyou.html');
                } else {
                    myApp.alert('Your profile has been Created', 'Success');
                }

            });
        } else {
            myApp.alert("email already exist", 'Failure');
        }

    });  }
}


function getSignUpData() {
    setTimeout(function() {
        // formCalender();
        FormCountry();
        RegistrationDate();
    }, 500);
}



function FormCountry() {

    //var storedData1 = myApp.formGetData('logged_userId');
    var url = "http://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=country&limit=250&columns=id,name&condition=1";
    $.getJSON(url, function(json) {

        var text = "";
        text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='countryform' id='countryform'>" +
            "<option value='0'>Select</option>";
        $.each(json['posts'], function(key, val) {

            text += "<option value='" + val['id'] + "'>" + val['name'] + "</option>";

        });
        text += "</select>";
        $("#addcountries").html(text);
    });

}
function RegistrationDate() {
    var today = new Date();
    var pickerInline = myApp.picker({
        input: '#picker-date',
        //      container: '#picker-date-container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getMonth(), today.getDate(), today.getFullYear()],
        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {
            var month = parseInt(values[0]) + parseInt(1);
            if (month < 10) {
                month = '0' + month;
            }
            return values[2] + '-' + month + '-' + values[1];
        },
        cols: [
            // Months
            {
                values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                displayValues: ('January February March April May June July August September October November December').split(' '),
                textAlign: 'left'
            },
            // Days
            {
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            // Years
            {
                values: (function() {
                    var arr = [];
                    for (var i = 1920; i <= 2030; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Space divider
            {
                divider: true,
                content: '  '
            },
        ]
    });
}



function contactus() {
    url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=pages&columns=*&condition=id=5"
    $.ajax({
        type: 'GET',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/getPage?id=5",
     
        headers: {
            "token": localStorage.BguhToken
        },
        success: function(json) {
        //alert(json['posts'][0]['description']);
        $("#Contactinformation").html(if_langs( json['response']['page']['description'] ,json['response']['page']['description_arabic']  ))
      }  });


}


//////////////////////////////// -------------------- signup Section End  and start forget password function ----------------------///////////////////////////////////////////////////////////

function forgetpasswordemail() {
    var email = $('#email_forpass').val();
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        myApp.addNotification({
            title: 'Fail',
            message: 'Invalid email!'
        });
        return;
    }
    var url = "https://healthrecordspro.com/wsplus.php?type=resetpassword&format=json&emailid=" + email + "";
    $.get(url, function(ret) {
        myApp.alert("Please check your email for the password", 'Success');
        setTimeout(function() {
            mainView.router.loadPage('index.html');
        }, 1500);
    });


}



//////////////////////////////// -------------------- forget Section End  ----------------------///////////////////////////////////////////////////////////


//////////////////////////////// -------------------- navbar menu  ----------------------///////////////////////////////////////////////////////////

//////////////////////////////// -------------------- navbar menu end  ----------------------///////////////////////////////////////////////////////////



//////////////////////////////// -------------------- select language and check storage  ----------------------///////////////////////////////////////////////////////////

function select_lang() {
    var lang = $("input[name='repeatype0']:checked").val();
    var storedData1 = myApp.formGetData('logged_userId');
    var val = "";
    if (lang != "") {
        val = "preflang='" + lang + "'";
        localStorage.removeItem("lang");
        localStorage.setItem("lang", lang);
        console.log("Lang is : " + localStorage.getItem("lang"));
        mainView.router.loadPage("index.html");
    }
}
//console.log(Checklogin());
function Checklogin() {
    var userLoggedIn = myApp.formGetData('logged_userId');
    if (userLoggedIn == undefined) {
        //mainView.router.loadPage('login.html');
        return false;
    } else {
        storedData1 = myApp.formGetData('logged_userId');
        return userLoggedIn['userId'];
    }
}

//////////////////////////////// -------------------- select language and check storage End  ----------------------///////////////////////////////////////////////////////////




//////////////////////////////// -------------------- Menu pages           ----------------------///////////////////////////////////////////////////////////

//                          -------------------- profile      ---------------------


function uploadProfilePic() {

    var storedData1 = myApp.formGetData('logged_userId');
    $('#attachment_id').val(storedData1['userId']);
    formData = new FormData($('#file-attachment-form')[0]);

    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=UPLOAD',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            //alert(data);
            //alert('File uploaded')
        }

    })
    return false;
}


function autocallBMI_U() {
    var height_f = $('#user_height_f').val();
    var height_i = $('#user_height_i').val();
    var weight = $('#user_weight').val();

    var height = (parseInt(height_f) * 12);
    var inche = (height + parseInt(height_i));
    var inche_sq = inche * inche;
    var BMI = ((parseInt(weight)) / (parseInt(inche_sq))) * 703;
    BMI = BMI.toFixed(2);
    if (!isNaN(BMI)) {
        $('#user_bmi').val(BMI);
    }

}



function autocallBMI_E() {
    var height_cm = $('#user_height_cm').val();
    var weight_kg = $('#user_weight_kg').val();
    var height = height_cm * height_cm;
    //var height = (parseInt(user_height_cm)*12);
    var BMI = ((parseInt(weight_kg)) / (parseInt(height))) * 10000;
    BMI = BMI.toFixed(2);
    if (!isNaN(BMI)) {
        $('#user_bmi').val(BMI);
    }

}
function validate(phone) {
    var regex =/([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g;

    if (regex.test(phone)) {
        return true ;// Valid international phone number
    } else {
        return false;// Invalid international phone number
    }
}

var DOBTemp;
function giveAlert() {
    setTimeout(function() {

        var storedData1 = myApp.formGetData('logged_userId');
                    console.log('in profile is uid ---------> '+storedData1['userId']);

        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=*&condition=user_id=" + storedData1['userId'];
        document.getElementById("user_img_display").innerHTML = " ";
        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/getPatient",
            data: {
                patientId: '1511854'
            },
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
                console.log(json)
            myApp.hidePreloader();
            $('#nameProfile').val(json['response']['patient']['FIRST_NAME']);
            $('#email').val(json['response']['patient']['EMAIL']);
            $('#uname').val(json['response']['patient']['USERNAME']);
            $('#lname').val(json['response']['patient']['LAST_NAME']);
            // $('#password').val(json['response']['patient']['password']);
            $('#primary_country').val(json['response']['patient']['COUNTRY']);
            $('#per_dob').val(json['response']['patient']['DATE_OF_BIRTH']);
            $('#primary_nationality').val(json['response']['patient']['NATIONALITY']);
            $('#primary_city').val(json['response']['patient']['CITY']);
            $('#middleName').val(json['response']['patient']['MIDDLE_NAME']);
            $('#primary_street').val(json['response']['patient']['STREET']);
DOBTemp =json['response']['patient']['date_of_birth'];
            userState(json['response']['patient']['country']);

            $('#primary_state').val(json['response']['patient']['STATE']);
            $('#primary_zip').val(json['response']['patient']['ZIP_CODE']);
            $('#primary_h_phone_no').val(json['response']['patient']['HOME_PHONE_NUMBER']);
            // $('#primary_w_phone_no').val(json['response']['patient']['work_phone_number']);
            $('#primary_m_phone_no').val(json['response']['patient']['MOBILE_PHONE']);
            $('#primary_gen').val(json['response']['patient']['GENDER']);

            if (json['response']['patient']['metrics'] == 0) {

                $("#showUS").css('display', 'block');
                $("#showEUROPE").css('display', 'none');
                // $('#user_height_f').val(json['response'][0]['height_feet']);
                // $('#user_weight').val(json['response'][0]['pounds']);
                // $('#user_height_i').val(json['response'][0]['height_inches']);

            } else if (json['response'][0]['metrics'] == 1) {

                $("#showUS").css('display', 'none');
                $("#showEUROPE").css('display', 'block');
                $('#user_height_cm').val(json['response'][0]['height']);
                $('#user_weight_kg').val(json['response'][0]['weight']);

            }
            document.getElementById("user_img_display").innerHTML = " ";
            $("img").remove("#user_img_display");

            $('#user_bmi').val(json['response'][0]['bmi']);
            $('#primary_m_status').val(json['response']['patient']['MARITAL_STATUS']);
            if (json['response'][0]['dobimage'] != '') {
                $('#dob_img_display').html('<img src="https://host.optimalsolutionslebanon.com/~bguh/uploads' + json['response']['patient']['STATE'] + '" width="80%"  onclick="dobimagepopupdisplay(\'' + json['response'][0]['dobimage'] + '\')">');
            } else {
                $('.remove_dob_btn').hide();
            }
            if (json['response'][0]['image'] != '') {
                $('#user_img_display').html('<img src="https://host.optimalsolutionslebanon.com/~bguh/uploads' +json['response']['patient']['IMAGE' ]+ '" style="height:150px;width:150px;border-radius:20%"   onclick="userimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');

            } else {
                $('.remove_user_btn').hide();
            }

            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=occupation&condition=id=" + json['posts'][0]['occupation'];

            $.getJSON(url1, function(json) {
                // console.log(url1);
                myApp.hidePreloader();

                $('#comp_info_occu').val(json['posts'][0]['occupation_name']);
                $('#comp_info_occu_id').val(json['posts'][0]['id']);

            });
            console.log('this is in give alert profile ----------------------> ' + json['posts'][0]['company_name']);
            $('#comp_info_compname').val(json['posts'][0]['company_name']);
            $('#comp_info_compAddr').val(json['posts'][0]['company_address']);
            $('#comp_info_compStreet').val(json['posts'][0]['company_street']);

            $('#comp_info_compCity').val(json['posts'][0]['company_city']);
            $('#comp_info_compZip').val(json['posts'][0]['company_zip_code']);
            $('#comp_info_compCountry').val(json['posts'][0]['company_country']);
            $('#comp_info_compPhone').val(json['posts'][0]['company_phone_number']);
            $('#user_born_at').val(json['posts'][0]['hospitalbornat']);
            $('#user_bgroop').val(json['response']['patient']['BLOOD']);


            var url2 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=scannedalbums&columns=*&condition=customerId=" + storedData1['userId'] + " AND categoryId=27";

            $.getJSON(url2, function(json) {
                $.getJSON(url2, function(json) {
                    var key, count = 0;
                    for (key in json['posts']) {
                        if (json['posts'].hasOwnProperty(key)) {
                            count++;
                        }
                    }

                    for (var i = 0; i < count; i++) {
                        $('#userImg_display_albm').append('<div style="width:150px;height:100px;border:1px solid #000;backgroud-color:#DDD;margin: auto;"  onclick="ViewUserProAlbumImages(' + json['posts'][i]['id'] + ')"><a href = "user_pro_Albumimage_display.html"><p align="center" style="color:#000;">(' + json['posts'][i]['title'] + ')</p></a><div>');
                    }
                });
                myApp.hidePreloader();
            });
    }});
        getPrefeHospitalData();
        getPreffPharmaData();

    }, 1000);

}

function userState(id) {

    var storedData1 = myApp.formGetData('logged_userId');

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=state&limit=250&columns=state_id,state_name&condition=country_id=" + id;
    // console.log(url);

    $.getJSON(url, function(json) {
        // console.log(json['posts']);
        var text = "";
        text += "<select name='primary_state' id='primary_state'>" +
            "<option value='0'>Select</option>";

        $.each(json['posts'], function(key, val) {
            //console.log(val['id']);
            text += "<option value='" + val['state_id'] + "'>" + val['state_name'] + "</option>";

        });
        text += "</select>";
        $("#stateid").html(text);
    });

}

function dobimagepopupdisplay(id) {

    var popupHTML = '<div class="popup popupImage">' +
        '<div class="content-block  " >' +
        '<div style="width: 100%;">' +
        '<div>' +
        '<img src="https://healthrecordspro.com/upload/' + id + '" height="450" width="600" />' +
        '</div>' +
        '</div>' +
        '<p>Birth Image</p>' +
        '<p><a href="#" style="color:black;float:right;margin-right: -13px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
        '</div>' +
        '</div>';
    myApp.popup(popupHTML);
}



function userimagepopupdisplay(id) {

    var popupHTML = '<div class="popup popupImage">' +
        '<div class="content-block " >' +
        '<div style="width: 100%;">' +
        '<div>' +
        '<img src="https://healthrecordspro.com/upload/' + id + '" height="450" width="600" />' +
        '</div>' +
        '</div>' +
        '<p>User Image</p>' +
        '<p><a href="#" style="color:black;float:right;margin-right: -13px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
        '</div>' +
        '</div>';
    myApp.popup(popupHTML);
}



function ViewUserProAlbumImages(id) {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=scanneditems&columns=*&condition=userid=" + storedData1['userId'] + " AND albumid=" + id;

        $.getJSON(url, function(json) {
            // console.log(json['posts']);
            $.getJSON(url, function(json) {
                var key, count = 0;
                for (key in json['posts']) {
                    if (json['posts'].hasOwnProperty(key)) {
                        count++;
                    }
                }

                for (var i = 0; i < count; i++) {
                    $('#display_userpro_img').append('<img src="https://healthrecordspro.com/upload/' + json['posts'][i]['image'] + '" width="200" height="200" onclick="UserProimageAlbumpopupdisplay(\'' + json['posts'][i]['image'] + '\')">');
                }
            });
            myApp.hidePreloader();
        });
    }, 1000);
}


function UserProfileInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=120";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function removeUserBirthImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "dobimage = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // $("#health_insurance_ul_"+id).remove();
        });

    });

}

function removeUserProfileImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "image = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // $("#health_insurance_ul_"+id).remove();
        });

    });

}



// function userProfileUpdate() {
//     $.ajax({
//         type: 'GET',
//         url: "https://host.optimalsolutionslebanon.com/~bguh/api/getPatient",
//         data: {
//             patientId: '1511854'
//         },
//         headers: {
//             "token": localStorage.BguhToken
//         },
//         success: function(json) {

//         myApp.hidePreloader();
//         $('#nameProfile').val(json['response']['patient']['FIRST_NAME']);
//         $('#email').val(json['response']['patient']['EMAIL']);
//         $('#uname').val(json['response']['patient']['USERNAME']);
//         $('#lname').val(json['response']['patient']['LAST_NAME']);
//         // $('#password').val(json['response']['patient']['password']);
//         $('#primary_country').val(json['response']['patient']['COUNTRY']);
//         $('#per_dob').val(json['response']['patient']['DATE_OF_BIRTH']);
//         $('#primary_nationality').val(json['response']['patient']['NATIONALITY']);
//         $('#primary_city').val(json['response']['patient']['CITY']);
//         $('#middleName').val(json['response']['patient']['MIDDLE_NAME']);
//         $('#primary_street').val(json['response']['patient']['STREET']);
// DOBTemp =json['response']['patient']['date_of_birth'];
//         userState(json['response']['patient']['country']);

//         $('#primary_state').val(json['response']['patient']['STATE']);
//         $('#primary_zip').val(json['response']['patient']['ZIP_CODE']);
//         $('#primary_h_phone_no').val(json['response']['patient']['HOME_PHONE_NUMBER']);
//         // $('#primary_w_phone_no').val(json['response']['patient']['work_phone_number']);
//         $('#primary_m_phone_no').val(json['response']['patient']['MOBILE_PHONE']);
//         $('#primary_gen').val(json['response']['patient']['GENDER']);

//         if (json['response']['patient']['metrics'] == 0) {

//             $("#showUS").css('display', 'block');
//             $("#showEUROPE").css('display', 'none');
//             // $('#user_height_f').val(json['response'][0]['height_feet']);
//             // $('#user_weight').val(json['response'][0]['pounds']);
//             // $('#user_height_i').val(json['response'][0]['height_inches']);

//         } else if (json['response'][0]['metrics'] == 1) {

//             $("#showUS").css('display', 'none');
//             $("#showEUROPE").css('display', 'block');
//             $('#user_height_cm').val(json['response'][0]['height']);
//             $('#user_weight_kg').val(json['response'][0]['weight']);

//         }
//         document.getElementById("user_img_display").innerHTML = " ";
//         $("img").remove("#user_img_display");

//         $('#user_bmi').val(json['response'][0]['bmi']);
//         $('#primary_m_status').val(json['response']['patient']['MARITAL_STATUS']);
//         if (json['response'][0]['dobimage'] != '') {
//             $('#dob_img_display').html('<img src="https://host.optimalsolutionslebanon.com/~bguh/uploads' + json['response']['patient']['STATE'] + '" width="80%"  onclick="dobimagepopupdisplay(\'' + json['response'][0]['dobimage'] + '\')">');
//         } else {
//             $('.remove_dob_btn').hide();
//         }
//         if (json['response'][0]['image'] != '') {
//             $('#user_img_display').html('<img src="https://host.optimalsolutionslebanon.com/~bguh/uploads' +json['response']['patient']['IMAGE' ]+ '" style="height:150px;width:150px;border-radius:20%"   onclick="userimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');

//         } else {
//             $('.remove_user_btn').hide();
//         }

//         var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=occupation&condition=id=" + json['posts'][0]['occupation'];

//         $.getJSON(url1, function(json) {
//             // console.log(url1);
//             myApp.hidePreloader();

//             $('#comp_info_occu').val(json['posts'][0]['occupation_name']);
//             $('#comp_info_occu_id').val(json['posts'][0]['id']);

//         });
//         console.log('this is in give alert profile ----------------------> ' + json['posts'][0]['company_name']);
//         $('#comp_info_compname').val(json['posts'][0]['company_name']);
//         $('#comp_info_compAddr').val(json['posts'][0]['company_address']);
//         $('#comp_info_compStreet').val(json['posts'][0]['company_street']);

//         $('#comp_info_compCity').val(json['posts'][0]['company_city']);
//         $('#comp_info_compZip').val(json['posts'][0]['company_zip_code']);
//         $('#comp_info_compCountry').val(json['posts'][0]['company_country']);
//         $('#comp_info_compPhone').val(json['posts'][0]['company_phone_number']);
//         $('#user_born_at').val(json['posts'][0]['hospitalbornat']);
//         $('#user_bgroop').val(json['response']['patient']['BLOOD']);


//         var url2 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=scannedalbums&columns=*&condition=customerId=" + storedData1['userId'] + " AND categoryId=27";

//         $.getJSON(url2, function(json) {
//             $.getJSON(url2, function(json) {
//                 var key, count = 0;
//                 for (key in json['posts']) {
//                     if (json['posts'].hasOwnProperty(key)) {
//                         count++;
//                     }
//                 }

//                 for (var i = 0; i < count; i++) {
//                     $('#userImg_display_albm').append('<div style="width:150px;height:100px;border:1px solid #000;backgroud-color:#DDD;margin: auto;"  onclick="ViewUserProAlbumImages(' + json['posts'][i]['id'] + ')"><a href = "user_pro_Albumimage_display.html"><p align="center" style="color:#000;">(' + json['posts'][i]['title'] + ')</p></a><div>');
//                 }
//             });
//             myApp.hidePreloader();
//         });
// }});
// /*  if (!validate($("#primary_h_phone_no").val()) || !validate($("#primary_w_phone_no").val())) {
//         myApp.alert(if_langs("Enter Valid Number", 'ادخل رقم هاتف صحيح', 'Entrer un nombre valide', 'Введите действительный номер', '有効な番号を入力', 'Ingrese el número válido'));
//         return;
//     }*/
//     myApp.showPreloader();
//     uploadProfilePic();
//     var storedData1 = myApp.formGetData('logged_userId');
//     var preffhos = $('#count').val();

//     var preffhos3 = $('#phar_count').val();

//     var val = "last_name = '" + $('#lname').val() + "',first_name = '" + $('#nameProfile').val() + "',middle_name = '" + $('#middleName').val() + "',maiden_name = '" + $('#maidenName').val() + "',street = '" + $('#primary_street').val() + "',city = '" + $('#primary_city').val() + "',state = '" + $('#primary_state').val() + "',zip_code = '" + $('#primary_zip').val() + "',country = '" + $('#primary_country').val() + "',nationality = '" + $('#primary_nationality').val() + "',home_phone_number = '" + $('#primary_h_phone_no').val() + "',work_phone_number = '" + $('#primary_w_phone_no').val() + "',mobile_phone = '" + $('#primary_m_phone_no').val() + "',email = '" + $('#email').val() + "',password = '" + $('#password').val() + "',username = '" + $('#uname').val() + "',date_of_birth = '" + $('#per_dob').val() + "',gender = '" + $('#primary_gen').val() + "',height_feet = '" + $('#user_height_f').val() + "',height_inches = '" + $('#user_height_i').val() + "',pounds = '" + $('#user_weight').val() + "',bmi2 = '" + $('#user_bmi').val() + "',blood = '" + $('#user_bgroop').val() + "',marital_status = '" + $('#primary_m_status').val() + "',occupation = '" + $('#comp_info_occu').val() + "',company_name = '" + $('#comp_info_compname').val() + "',company_address = '" + $('#comp_info_compAddr').val() + "',company_street = '" + $('#comp_info_compStreet').val() + "',company_city = '" + $('#comp_info_compCity').val() + "',company_zip_code = '" + $('#comp_info_compZip').val() + "',company_country = '" + $('#comp_info_compCountry').val() + "',company_phone_number = '" + $('#comp_info_compPhone').val() + "',hospitalbornat = '" + $('#user_born_at').val() + "',height = '" + $('#user_height_cm').val() + "',weight = '" + $('#user_weight_kg').val() + "',bmi = '" + $('#user_bmi').val() + "'";
//     var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val + "&condition=user_id=" + storedData1['userId'];

//     var url1 = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=customers_hospitals_references&condition=customerId=" + storedData1['userId'];
//     $.getJSON(url1, function(json) {});

//     var url2 = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=prefferedpharmacies&condition=customerId=" + storedData1['userId'];
//     $.getJSON(url2, function(json) {});

//     // console.log(preffhos);
//     // console.log(preffhos3);
//     // setTimeout(function() {
//     //     // debugger;
//     //     // console.log(preffhos);
//     //     for (i = 0; i <= preffhos; i++) {
//     //         var storedData1 = myApp.formGetData('logged_userId');
//     //         var hospital = $('#pre_hospital_' + i).val();
//     //         var medicalrecord = $('#pref_me_re_no_' + i).val();
//     //         var hospital_telephone_number = $('#pre_ho_no_' + i).val();

//     //         // var columnNa = "hospital,medicalrecord,hospital_telephone_number,customerId";
//     //         // var columnVa = "'"+hospital+"','"+medicalrecord+"','"+hospital_telephone_number+"','"+storedData1['userId']+"'";
//     //         // myApp.showPreloader();

//     //         // var urlph = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=customers_hospitals_references&columns="+columnNa+"&values="+columnVa+"";
//     //         var urlph = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=customers_hospitals_references&columns=hospital,medicalrecord,hospital_telephone_number,customerId&values='" + hospital + "','" + medicalrecord + "','" + hospital_telephone_number + "'," + storedData1['userId'];
//     //         // console.log(urlph);
//     //         $.getJSON(urlph, function(json) {
//     //             // console.log(json);
//     //         });
//     //     }
//     // }, 1000);

//     // setTimeout(function() {
//     //     for (j = 0; j <= preffhos3; j++) {

//     //         var storedData1 = myApp.formGetData('logged_userId');
//     //         var pharmacyName = $('#user_phar_name_' + j).val();
//     //         var pharmacy_number = $('#user_phar_number_' + j).val();

//     //         // var columnNam = "pharmacyName,pharmacy_number,customerId";
//     //         // var columnVal = "'"+pharmacyName+"','"+pharmacy_number+"','"+storedData1['userId']+"'";
//     //         // myApp.showPreloader();

//     //         // var urlpp = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=prefferedpharmacies&columns="+columnNam+"&values="+columnVal+"";
//     //         var urlpp = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=prefferedpharmacies&columns=pharmacyName,pharmacy_number,customerId&values='" + pharmacyName + "','" + pharmacy_number + "'," + storedData1['userId'];
//     //         // console.log(urlpp);
//     //         $.getJSON(urlpp, function(json) {
//     //             // console.log(json);
//     //         });
//     //     }
//     // }, 1000);

//     // $.getJSON(url, function(json) {
//     //     myApp.hidePreloader();
//     //     // console.log(json);
//     //     if (json['posts'][0]) {
//     //         myApp.alert("Your Details has been Updated", 'Success');
//     //         selectHomepageDisplay();
//     //     } else {
//     //         myApp.alert("Your Details has been Updated", 'Success');
//     //         selectHomepageDisplay();
//     //     }

//     // });
// }



function userProfileUpdate() {
    $.ajax({
        type: 'GET',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/getPatient",
        data: {
            patientId: '1511854'
        },
        headers: {
            "token": localStorage.BguhToken
        },
        success: function(json) {

        myApp.hidePreloader();
        $('#nameProfile').val(json['response']['patient']['FIRST_NAME']);
        $('#email').val(json['response']['patient']['EMAIL']);
        $('#uname').val(json['response']['patient']['USERNAME']);
        $('#lname').val(json['response']['patient']['LAST_NAME']);
        // $('#password').val(json['response']['patient']['password']);
        $('#primary_country').val(json['response']['patient']['COUNTRY']);
        $('#per_dob').val(json['response']['patient']['DATE_OF_BIRTH']);
        $('#primary_nationality').val(json['response']['patient']['NATIONALITY']);
        $('#primary_city').val(json['response']['patient']['CITY']);
        $('#middleName').val(json['response']['patient']['MIDDLE_NAME']);
        $('#primary_street').val(json['response']['patient']['STREET']);
DOBTemp =json['response']['patient']['date_of_birth'];
        userState(json['response']['patient']['country']);

        $('#primary_state').val(json['response']['patient']['STATE']);
        $('#primary_zip').val(json['response']['patient']['ZIP_CODE']);
        $('#primary_h_phone_no').val(json['response']['patient']['HOME_PHONE_NUMBER']);
        // $('#primary_w_phone_no').val(json['response']['patient']['work_phone_number']);
        $('#primary_m_phone_no').val(json['response']['patient']['MOBILE_PHONE']);
        $('#primary_gen').val(json['response']['patient']['GENDER']);

        if (json['response']['patient']['metrics'] == 0) {

            $("#showUS").css('display', 'block');
            $("#showEUROPE").css('display', 'none');
            // $('#user_height_f').val(json['response'][0]['height_feet']);
            // $('#user_weight').val(json['response'][0]['pounds']);
            // $('#user_height_i').val(json['response'][0]['height_inches']);

        } else if (json['response'][0]['metrics'] == 1) {

            $("#showUS").css('display', 'none');
            $("#showEUROPE").css('display', 'block');
            $('#user_height_cm').val(json['response'][0]['height']);
            $('#user_weight_kg').val(json['response'][0]['weight']);

        }
        document.getElementById("user_img_display").innerHTML = " ";
        $("img").remove("#user_img_display");

        $('#user_bmi').val(json['response'][0]['bmi']);
        $('#primary_m_status').val(json['response']['patient']['MARITAL_STATUS']);
        if (json['response'][0]['dobimage'] != '') {
            $('#dob_img_display').html('<img src="https://host.optimalsolutionslebanon.com/~bguh/uploads' + json['response']['patient']['STATE'] + '" width="80%"  onclick="dobimagepopupdisplay(\'' + json['response'][0]['dobimage'] + '\')">');
        } else {
            $('.remove_dob_btn').hide();
        }
        if (json['response'][0]['image'] != '') {
            $('#user_img_display').html('<img src="https://host.optimalsolutionslebanon.com/~bguh/uploads' +json['response']['patient']['IMAGE' ]+ '" style="height:150px;width:150px;border-radius:20%"   onclick="userimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');

        } else {
            $('.remove_user_btn').hide();
        }

        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=occupation&condition=id=" + json['posts'][0]['occupation'];

        $.getJSON(url1, function(json) {
            // console.log(url1);
            myApp.hidePreloader();

            $('#comp_info_occu').val(json['posts'][0]['occupation_name']);
            $('#comp_info_occu_id').val(json['posts'][0]['id']);

        });
        console.log('this is in give alert profile ----------------------> ' + json['posts'][0]['company_name']);
        $('#comp_info_compname').val(json['posts'][0]['company_name']);
        $('#comp_info_compAddr').val(json['posts'][0]['company_address']);
        $('#comp_info_compStreet').val(json['posts'][0]['company_street']);

        $('#comp_info_compCity').val(json['posts'][0]['company_city']);
        $('#comp_info_compZip').val(json['posts'][0]['company_zip_code']);
        $('#comp_info_compCountry').val(json['posts'][0]['company_country']);
        $('#comp_info_compPhone').val(json['posts'][0]['company_phone_number']);
        $('#user_born_at').val(json['posts'][0]['hospitalbornat']);
        $('#user_bgroop').val(json['response']['patient']['BLOOD']);



      
}});
}
function removeUserBirthImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "dobimage = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // $("#health_insurance_ul_"+id).remove();
        });

    });

}


function userOccupation() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url = "http://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=occupation&limit=250&columns=id,occupation_name&condition=1";
    $.getJSON(url, function(json) {
        var text = "";
        text += "<select name='comp_info_occu' id='comp_info_occu'>";

        $.each(json['posts'], function(key, val) {
            text += "<option value='" + val['id'] + "'>" + val['occupation_name'] + "</option>";

        });
        text += "</select>";
        $("#adduseroccuption").html(text);
    });
}
 
function getcalUserP() {
   console.log('DOBTemp ----> '+ DOBTemp);
    var today = new Date(DOBTemp);
    var pickerInline = myApp.picker({
        input: '#per_dob',
        //      container: '#picker-date-container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getMonth(), today.getDate(), today.getFullYear()],

        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
                console.log(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {
            var month = parseInt(values[0]) + parseInt(1);
            if (month < 10) {
                month = '0' + month;
            }
            // console.log("hi");
            // console.log(values[2] + '-' + month + '-' + values[1]);
            return values[2] + '-' + month + '-' + values[1];
        },
        cols: [
            // Months
            {
                values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                displayValues: ('January February March April May June July August September October November December').split(' '),
                textAlign: 'left'
            },
            // Days
            {
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            // Years
            {
                values: (function() {
                    var arr = [];
                    for (var i = 1920; i <= 2030; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Space divider
            {
                divider: true,
                content: '  '
            },
        ]
    });



}


function getPrefeHospitalData() {

    var storedData1 = myApp.formGetData('logged_userId');
    // myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=customers_hospitals_references&columns=*&condition=customerId=" + storedData1['userId'];
    $.getJSON(url, function(json) {

        var items = [];
        if (json['posts'][0] != '0') {
            $('#PerfHospitalData').html('');
            $.each(json['posts'], function(key, val) {

                $('#PerfHospitalData').append('<div id="' + key + '"><li ><div class="item-content item-title_inner"><div class="item-inner"><div class="item-title label">Hospital</div><div class="item-input"><input type="text" name="pre_hospital" id="pre_hospital_' + key + '" value="' + val['hospital'] + '" /></div></div></div></li><li><div class="item-content item-title_inner"><div class="item-inner"><div class="item-title label">Medical record number </div><div class="item-input"><input type="text" name="pref_me_re_no" id="pref_me_re_no_' + key + '" value="' + val['medicalrecord'] + '" /></div></div></div></li><li><div class="item-content item-title_inner"><div class="item-inner"><div class="item-title label">Hospital telephone Number </div><div class="item-input"><input type="tel"  name="pre_ho_no" id="pre_ho_no_' + key + '" value="' + val['hospital_telephone_number'] + '" /></div></div></div></li></div>');
                items.push(key);
            });
            $('#count').val((items.length) - 1);
            // console.log(items);
        }
    });
}




function getPreffPharmaData() {

    var storedData1 = myApp.formGetData('logged_userId');

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=prefferedpharmacies&columns=*&condition=customerId=" + storedData1['userId'];
    $.getJSON(url, function(json) {

        var items = [];
        if (json['posts'][0] != '0') {
            $('#PerfPharmaData').html('');
            $.each(json['posts'], function(key, val) {

                $('#PerfPharmaData').append('<div id="' + key + 'A"><li><div class="item-content item-title_inner"><div class="item-inner"><div class="item-title label">Pharmacy Name </div><div class="item-input"><input type="text" name="user_phar_name" id="user_phar_name_' + key + '" value="' + val['pharmacyName'] + '" /></div></div></div><div class="item-content item-title_inner"><div class="item-inner"><div class="item-title label">Pharmacy Number  </div><div class="item-input" ><input type="tel" name="user_phar_number" id="user_phar_number_' + key + '" value="' + val['pharmacy_number'] + '" /></div></div></div></li></div>');
                items.push(key);
            });
            $('#phar_count').val((items.length) - 1);
            // console.log(items);
        }
    });



}


//                          -------------------- Report and bug      ---------------------



function reportBuginfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=121";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

function ReportOfBugs() {
    var storedData1 = myApp.formGetData('logged_userId');
    var SectionName = $('#report_title_text').val();
    // var Bug = $('#report_bug').val();
    var Bug = 'Ahmed.samir222@hotmail.com'

    var Description = $('#report_desc').val();
    var obj ={subject: Bug ,
        body : Description,
        to:SectionName
        
    }
    if (!isEmpty(String(SectionName) && !isEmpty(Bug) && !isEmpty(Description))) {
        myApp.showPreloader();
        var url = 'https://www.healthrecordspro.com/wsplus.php?type=bugreport&format=json&table=report_bugs_app&SectionName=' + SectionName + '&Bug=' + Bug + '&Description=' + Description + '&user_id=' + storedData1['userId'];
        $.ajax({
            type: 'POST',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/sendEmail",
            data: obj,
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
            myApp.hidePreloader();
            // if (json['posts'][0]) {
            myApp.alert("Thank you for your report", 'Success');
            selectHomepageDisplay();
            // } else {
            //     myApp.alert("Your Details Not Created", 'Failure');
            // }
     } });
    } else {
        myApp.alert(if_lang("All Fields Required !", "الرجاء ملئ جميع الحقول"));
    }
}

//                          -------------------- Suggestion      ---------------------


function SuggestionsApp() {
    var storedData1 = myApp.formGetData('logged_userId');
    var Title_note = $('#suggestion_title_text').val();
    var suggestion = $('#sugestion_text').val();
    var Description = $('#suggestion_desc').val();
    var obj ={subject: suggestion ,
        body : Description,
        to:Title_note
        
    }
    if (!isEmpty(String(Title_note) && !isEmpty(suggestion) && !isEmpty(Description))) {
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=Suggestions_App&columns=Title_note,suggestion,Description,user_Id&values='" + Title_note + "','" + suggestion + "','" + Description + "','" + storedData1['userId'] + "'";
        $.ajax({
            type: 'POST',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/sendEmail",
            data: obj,
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
            myApp.hidePreloader();

            // if (json['posts'][0]) {
            myApp.alert("Thank you for your suggestion", 'Success');
            selectHomepageDisplay();
            // } else {
            //     myApp.alert("Your Details Not Created", 'Failure');
            // }
     } });
    } else {
        myApp.alert(if_lang("All Fields Required !", "الرجاء ملئ جميع الحقول"));
    }
}

//                          -------------------- ِAbout Application      ---------------------

function getAboutData() {
    //var storedData1 = myApp.formGetData('logged_userId');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=pages&columns=*&condition=id=2";
    $.getJSON(url, function(json) {
        // console.log(json['posts'][0]['description']);
        if (localStorage.getItem("lang") == 'ar') {
            $("#AboutUsContent").html(json['posts'][0]['description_arabic']);
            $$("#AboutUsContent").attr('style', 'direction: rtl;');
        } else if (localStorage.getItem("lang") == 'fr') {
            $("#AboutUsContent").html(json['posts'][0]['description_french']);
            $$("#AboutUsContent").attr('style', 'direction: ltr;');
        } else if (localStorage.getItem("lang") == 'sp') {
            $("#AboutUsContent").html(json['posts'][0]['description_spanish']);
            $$("#AboutUsContent").attr('style', 'direction: ltr;');
        } else if (localStorage.getItem("lang") == 'ru') {
            $("#AboutUsContent").html(json['posts'][0]['description_russian']);
            $$("#AboutUsContent").attr('style', 'direction: ltr;');
        } else {
            $("#AboutUsContent").html(json['posts'][0]['description']);
            $$("#AboutUsContent").attr('style', 'direction: ltr;');
        }

    });

}

//                          -------------------- Grant Access       ---------------------


function GrandAccessSubmit() {
    var email_ac = $('#Email_gacess').val();
    var gac_role = $('#gac_role_select').val();


    if (isEmail(email_ac)) {
        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=grantAccessRoles&columns=role,active&values='" + gac_role + "','1'";
        $.getJSON(url1, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                myApp.alert("Your Details has been Created", 'Success');
                // mainView.router.loadPage('implants_medicaldevices_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });
    } else {
        myApp.alert(if_lang("Enter Valid EMail!", "الرجاء ادخال بريد الكتروني صحيح"));
    }
}

//                          -------------------- Section prefrence       ---------------------

function getSectionsData() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();
    $.ajax({
        type: 'POST',
        url: "https://www.healthrecordspro.com/wsplus.php?type=usersectionpreferences3&format=json&customerid=" + storedData1['userId'],
        data: "",
        dataType: "json",
        async: false,
        contentType: false,
        processData: false,
        success: function(res) {
            setTimeout(function() {
                $('#sections_pref').html('');

                if (localStorage.getItem("lang") == 'ar') {
                    $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" onchange="if(this.checked) {$(\'.sections_pag\').prop(\'checked\', true);}else{ $(\'.sections_pag\').prop(\'checked\', false);}"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;حدد الكل</div></div></label></li>');

                } else if (localStorage.getItem("lang") == 'fr') {
                    $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" onchange="if(this.checked) {$(\'.sections_pag\').prop(\'checked\', true);}else{ $(\'.sections_pag\').prop(\'checked\', false);}"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;Sélectionner tout</div></div></label></li>');

                } else if (localStorage.getItem("lang") == 'sp') {
                    $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" onchange="if(this.checked) {$(\'.sections_pag\').prop(\'checked\', true);}else{ $(\'.sections_pag\').prop(\'checked\', false);}"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;Verificar todo</div></div></label></li>');

                } else if (localStorage.getItem("lang") == 'ru') {
                    $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" onchange="if(this.checked) {$(\'.sections_pag\').prop(\'checked\', true);}else{ $(\'.sections_pag\').prop(\'checked\', false);}"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;Отметить все</div></div></label></li>');

                } else {
                    $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" onchange="if(this.checked) {$(\'.sections_pag\').prop(\'checked\', true);}else{ $(\'.sections_pag\').prop(\'checked\', false);}"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;Check All</div></div></label></li>');

                }

                $.each(res['posts'], function(key, val) {
                    // alert(val['moduleid']);
                    var checked = val['checked'];
                    if (localStorage.getItem("lang") == 'ar') {
                        if (val['checked'] == '1') {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#' + val['moduleid'] + '\').prop(\'checked\', false);}" id="' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_arabic'] + '</div></div></label></li>');
                            $('#' + val['moduleid']).prop('checked', true);
                        } else {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#sectionpref_' + val['moduleid'] + '\').prop(\'checked\', false);}" id="sectionpref_' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_arabic'] + '</div></div></label></li>');
                        }
                    } else if (localStorage.getItem("lang") == 'fr') {
                        if (val['checked'] == '1') {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#' + val['moduleid'] + '\').prop(\'checked\', false);}" id="' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_french'] + '</div></div></label></li>');
                            $('#' + val['moduleid']).prop('checked', true);
                        } else {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#sectionpref_' + val['moduleid'] + '\').prop(\'checked\', false);}" id="sectionpref_' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_french'] + '</div></div></label></li>');
                        }
                    } else if (localStorage.getItem("lang") == 'sp') {
                        if (val['checked'] == '1') {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#' + val['moduleid'] + '\').prop(\'checked\', false);}" id="' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_spanish'] + '</div></div></label></li>');
                            $('#' + val['moduleid']).prop('checked', true);
                        } else {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#sectionpref_' + val['moduleid'] + '\').prop(\'checked\', false);}" id="sectionpref_' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_spanish'] + '</div></div></label></li>');
                        }
                    } else if (localStorage.getItem("lang") == 'ru') {
                        if (val['checked'] == '1') {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#' + val['moduleid'] + '\').prop(\'checked\', false);}" id="' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_russian'] + '</div></div></label></li>');
                            $('#' + val['moduleid']).prop('checked', true);
                        } else {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#sectionpref_' + val['moduleid'] + '\').prop(\'checked\', false);}" id="sectionpref_' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename_russian'] + '</div></div></label></li>');
                        }
                    } else {
                        if (val['checked'] == '1') {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#' + val['moduleid'] + '\').prop(\'checked\', false);}" id="' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename'] + '</div></div></label></li>');
                            $('#' + val['moduleid']).prop('checked', true);
                        } else {
                            $('#sections_pref').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="sections_pag" name="sectionpref[]" onchange="if(this.checked) {$(\'#' + val['moduleid'] + '\').prop(\'checked\', true);}else{ $(\'#sectionpref_' + val['moduleid'] + '\').prop(\'checked\', false);}" id="sectionpref_' + val['moduleid'] + '" value="' + val['moduleid'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['modulename'] + '</div></div></label></li>');
                        }
                    }
                });
                myApp.hidePreloader();
            }, 1000);
        }
    });

}



function UpdateSectionsPre() {
    // console.log(  $('#section_pre_form').serializeArray() );
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();
    $.ajax({
        type: 'POST',
        url: "https://www.healthrecordspro.com/wsplus.php?type=update_sections&uid=" + storedData1['userId'] + "&update=Update",
        data: $('#section_pre_form').serializeArray(),
        success: function(res) {
            // alert(res);
            myApp.alert("Your Sections Updated", 'Success');
        }

    });
    myApp.hidePreloader();
    getHomepageSections();
    mainView.router.loadPage('loginnormal.html');
}

//                          --------------------  Setting     ---------------------

function showmetrics() {
    var storedData1 = myApp.formGetData('logged_userId');
    console.log(localStorage.getItem("lang"))
    // var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=metrics,preflang&condition=user_id=" + storedData1['userId'];
    if (localStorage.getItem("lang") == "en") {
        // $('#lang_radio1').prop('checked', true);
        // $get("lang_radio1 ").checked == true
        $("#lang_radio1").attr('checked', true);

    } else if (localStorage.getItem("lang") == "ar") {
        // document.getElementById("lang_radio2").checked = true;
        // $('#lang_radio2').prop('checked', true);
        // $get("lang_radio2 ").checked == true
        $("#lang_radio2").attr('checked', true);

    } 
    // showGridRadio();
}




function showGridRadio() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=view_type&condition=user_id=" + storedData1['userId'];
    $.getJSON(url, function(json) {

        if (json['posts'][0]['view_type'] == 1) {
            document.getElementById("sett_ShowList_radio2").checked = true;
        } else {
            document.getElementById("sett_ShowGrid_radio1").checked = true;
        }
    });
}




//                          -------------------- Back to English       ---------------------

function metricksUpdate(english_options) {
    var storedData1 = myApp.formGetData('logged_userId');
    var val = "";
    if (english_options != "") {
        val = "metrics = '"  + "',preflang='" + english_options + "'";
        lang_value = english_options;
    } else {
     
        if (document.getElementById('lang_radio1').checked) {
            lang_value = document.getElementById('lang_radio1').value;
        }
        if (document.getElementById('lang_radio2').checked) {
            lang_value = document.getElementById('lang_radio2').value;
        }
      
        val = "metrics = '"  + "',preflang='" + lang_value + "'";
    }
    var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val + "&condition=user_id=" + storedData1['userId'];

    $.getJSON(url, function(json) {


        localStorage.removeItem("lang");
        localStorage.setItem("lang", lang_value);
        if (localStorage.getItem("lang") == 'ar') {
            $('.backToENg').show();
        } else if (localStorage.getItem("lang") == 'fr') {
            $('.backToENg').show();
        } 
        //  else if (localStorage.getItem("lang") == 'jp') {
        //     $('.backToENg').show();
        // }
        else if (localStorage.getItem("lang") == 'en') {
            $('.backToENg').hide();
        }
        selectHomepageDisplay();

        mainView.router.reloadPage('settings.html');

    });
}


function updateHomePageGrid(view_type_home) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (view_type_home == "") {
        if (document.getElementById('sett_ShowGrid_radio1').checked) {
            var view_type_home = document.getElementById('sett_ShowGrid_radio1').value;
        }
        if (document.getElementById('sett_ShowList_radio2').checked) {
            var view_type_home = document.getElementById('sett_ShowList_radio2').value;
        }
    } else {
        view_type_home = "0";
    }

    var val1 = "view_type = '" + view_type_home + "'";

    var url1 = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=user_profile&columns=" + val1 + "&condition=user_id=" + storedData1['userId'];

    $.getJSON(url1, function(json) {
        selectHomepageDisplay();
    });
    if (view_type_home != "") {
        // location.reload();
        mainView.router.reloadPage('settings.html');
        showmetrics();
    }
}




//                          -------------------- Account Summary       ---------------------



function account_summary() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=*&condition=user_id=" + storedData1['userId'];
    var reg = 'Registered Date';
    var exp = 'Expiry Date';
    var rem = 'Remaining Date';
    var pkg = 'Package Name';
    var dur = 'Duration';
    var price = 'Price';
    var action = 'Action';
    if (localStorage.getItem("lang") == 'ar') {
        reg = 'تاريخ التسجيل';
        exp = 'تاريخ الانتهاء';
        rem = 'التاريخ المتبقي';
        pkg = 'اسم الحزمة';
        dur = 'المدة';
        price = 'السعر';
        action = 'فعل';
    } else if (localStorage.getItem("lang") == 'fr') {
        reg = 'Date d\'enregistrement';
        exp = 'Date d\'expiration';
        rem = 'Date restante';
        pkg = 'Nom du paquet';
        dur = 'Durée';
        price = 'Prix';
        action = 'action';
    } else if (localStorage.getItem("lang") == 'sp') {
        reg = 'La fecha registrada';
        exp = 'Fecha de caducidad';
        rem = 'Fecha restante';
        pkg = 'Nombre del paquete';
        dur = 'Durée';
        price = 'Precio';
        action = 'acción';
    } else if (localStorage.getItem("lang") == 'ru') {
        reg = 'Зарегистрированная дата';
        exp = 'Срок годности';
        rem = 'Оставшаяся дата';
        pkg = 'Имя пакета';
        dur = 'продолжительность';
        price = 'Цена';
        action = 'действие';
    }
    $.getJSON(url, function(json1) {
        var startdate = json1['posts'][0]['added_date'];
        var enddate = json1['posts'][0]['expiryDate'];
        var one_day = 1000 * 60 * 60 * 24;
        var sd = new Date(startdate);
        var ed = new Date(enddate);
        var d = new Date();
        var n = d.getTime()
        var totalremtime = ed.getTime() - n
        //alert(totalremtime);
        totalremtime = (Math.round(totalremtime / one_day));
        $('#account_details').html('<table class="packages_summary">' +
            '<tr>' +
            '<td>' + reg + '</td>' +
            '<td>' + startdate + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' + exp + '</td>' +
            '<td>' + enddate + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' + rem + '</td>' +
            '<td>' + totalremtime + '</td>' +
            '</table>');
    });

    var url = "https://www.healthrecordspro.com/wsplus.php?type=getpackages&format=json&condition=active=1";

    $.getJSON(url, function(json) {
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }

        if (json['posts'] == 0) {
            var data = "No Records ";
            $('#packages').append(data);
        } else {
            var data = "<table class='packages_list'><tr><th>" + pkg + "</th><th>" + dur + "</th><th>" + price + "</th><th>" + action + "</th></tr>";
            for (i = 0; i < count; i++) {

                var namePkg = json['posts'][i]['name'];
                if (localStorage.getItem("lang") == 'ar') {
                    namePkg = json['posts'][i]['name_arabic'];
                } else if (localStorage.getItem("lang") == 'fr') {
                    namePkg = json['posts'][i]['name_french'];
                } else if (localStorage.getItem("lang") == 'sp') {
                    namePkg = json['posts'][i]['name_spanish'];
                } else if (localStorage.getItem("lang") == 'ru') {
                    namePkg = json['posts'][i]['name_russian'];
                }
                //data =data+"<tr><td>"+json['posts'][i]['name']+ "</td><td>"+json['posts'][i]['duration']+" "+json['posts'][i]['duration_unit']+"</td><td>"+json['posts'][i]['price']+"</td><td><a href='https://healthrecordspro.com/newsite/mobile_renewal.php?customerID="+storedData1['userId']+"&optionID="+json['posts'][i]['id']+"' class='item-link external'>Order Now </td></tr>";
                data = data + "<tr><td>" + namePkg + "</td><td>" + json['posts'][i]['duration'] + " " + json['posts'][i]['duration_unit'] + "</td><td>" + json['posts'][i]['price'] + "</td><td><button onclick='inapppurchase();' class='item-link external'>Order Now </button></td></tr>";


            }
            data = data + "</table>";
            $('#packages').append(data);
        }

    });

}

function accountsummaryInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=123";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

//                          -------------------- Health ID      ---------------------



$$(document).on('pageInit', '.page[data-page="health_id"]', function(e) {

    getHealthIdData();

});


function getHealthIdData() {
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=pages&columns=*&condition=id=26";

    $.getJSON(url, function(json) {
        // console.log(json['posts'][0]['description']);

        if (localStorage.getItem("lang") == 'ar') {
            $("#HealthIdContent").html(json['posts'][0]['description_arabic']);
        } else if (localStorage.getItem("lang") == 'fr') {
            $("#HealthIdContent").html(json['posts'][0]['description_french']);
        } else {
            $("#HealthIdContent").html(json['posts'][0]['description']);
        }
    });

}


function healthidinfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=63";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });

}

//                          -------------------- FaQ       ---------------------

$$(document).on('pageInit', '.page[data-page="faq"]', function(e) {

    getfaq();

});




function getfaq() {
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=faq&limit=250&condition=1&columns=*"
    $.getJSON(url, function(json) {
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }


        for (var i = 0; i < count; i++) {
            if (localStorage.getItem("lang") == 'ar') {
                var acc = '<li class="accordion-item"><a href="#" class="item-content item-link">' +
                    '<div class="item-inner">' +
                    '<div class="item-title" id= "' + json['posts'][i]["id"] + '" >' + json['posts'][i]["aquestion"] + '</div>' +
                    '</div></a>' +
                    '<div class="accordion-item-content">' +
                    '<div class="content-block">' +
                    '<p>' + json['posts'][i]["aanswer"] + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
                $("#acc").append(acc);
            } else if (localStorage.getItem("lang") == 'fr') {
                var acc = '<li class="accordion-item"><a href="#" class="item-content item-link">' +
                    '<div class="item-inner">' +
                    '<div class="item-title" id= "' + json['posts'][i]["id"] + '" >' + json['posts'][i]["fquestion"] + '</div>' +
                    '</div></a>' +
                    '<div class="accordion-item-content">' +
                    '<div class="content-block">' +
                    '<p>' + json['posts'][i]["fanswer"] + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
                $("#acc").append(acc);
            } else if (localStorage.getItem("lang") == 'sp') {
                var acc = '<li class="accordion-item"><a href="#" class="item-content item-link">' +
                    '<div class="item-inner">' +
                    '<div class="item-title" id= "' + json['posts'][i]["id"] + '" >' + json['posts'][i]["spquestion"] + '</div>' +
                    '</div></a>' +
                    '<div class="accordion-item-content">' +
                    '<div class="content-block">' +
                    '<p>' + json['posts'][i]["spanswer"] + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
                $("#acc").append(acc);
            } else if (localStorage.getItem("lang") == 'ru') {
                var acc = '<li class="accordion-item"><a href="#" class="item-content item-link">' +
                    '<div class="item-inner">' +
                    '<div class="item-title" id= "' + json['posts'][i]["id"] + '" >' + json['posts'][i]["ruquestion"] + '</div>' +
                    '</div></a>' +
                    '<div class="accordion-item-content">' +
                    '<div class="content-block">' +
                    '<p>' + json['posts'][i]["ruanswer"] + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
                $("#acc").append(acc);
            } else {
                var acc = '<li class="accordion-item"><a href="#" class="item-content item-link">' +
                    '<div class="item-inner">' +
                    '<div class="item-title" id= "' + json['posts'][i]["id"] + '" >' + json['posts'][i]["question"] + '</div>' +
                    '</div></a>' +
                    '<div class="accordion-item-content">' +
                    '<div class="content-block">' +
                    '<p>' + json['posts'][i]["answer"] + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
                $("#acc").append(acc);
            }
        }

    });

}



//                          -------------------- Contct us       ---------------------

function MobileAppInfo() {
    if (tipID != null) {
        labresultsListInfo();
    }
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    console.log("usefull tips " + currentMenuModuleId);
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=" + currentMenuModuleId;
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function submitContactE() {
    var email = 'Ahmed.samir222@outlook.com'
    var name = $('#Cname').val();
    var message ='<p> first name : '+  $('#Cname').val() + ' Last name : '+$('#CLname').val() + ' phone : '+$('#CPhonename').val() +'</p>' + '<p> message </p>'
    +'<p>'+ $('#contact_msg').val()+'</p>'
    var obj ={subject: name ,
        body : message,
        to:email
        
    }
    var url = "https://healthrecordspro.com/wsplus.php?type=email&format=json&email=%27" + email + "%27&name=" + name + "&message=" + message;
    //var urlZ = "https://healthrecordspro.com/wsplus.php?type=email&format=json&email="+email+"&name="+name+"&phone=''&message="+message;
    if (isEmail(email) && !isEmpty(name) && !isEmpty(message)) {
        $.ajax({
            type: 'POST',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/sendEmail",
            data: obj,
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {            myApp.alert("We have received your message and our team will reply soon for it", 'Success');
            mainView.router.loadPage('index.html');

       } }).error(function() {
            myApp.alert("We Catch An Error Plz Send It Later.", 'Error');
        });
    } else {
        myApp.alert(if_lang("All Fields Required !", "الرجاء ملئ جميع الحقول"));
    }
}


//                          -------------------- Log Out       ---------------------

function logout() {
    var storedData = myApp.formDeleteData('logged_userId');
    var storedData = myApp.formDeleteData('lang_history');


    mainView.router.loadPage('index.html');
}




//////////////////////////////////--------------------------------------- End of Menu Bar ----------------------------////////////////////////////////////////////////////////

//////////////////////////------------------------------ nav bar icons ------------------------------------------------------------


//                                              ------------- Camera ----------




function homeActiosheet() {
    var camera = 'Camera';
    var video = 'Video';
    var doc = "Document";
    var ded = 'Data Entry Document';
    var upload_file = "File";
    var cancel = 'Cancel';
    if (localStorage.getItem("lang") == 'ar') {
        doc = "ملف";
        camera = 'كاميرا';
        video = 'فيديو';
        ded = 'وثيقة إدخال البيانات';
        upload_file = "رفع ملف";
        cancel = 'إلغاء';
    } else if (localStorage.getItem("lang") == 'fr') {
        camera = 'caméra';
        video = 'vidéo';
        ded = 'Document de saisie de données';
        doc = "Document";
        upload_file = "téléverser un fichier";
        cancel = 'Annuler';
    } else if (localStorage.getItem("lang") == 'sp') {
        camera = 'cámara';
        doc = "Documento";
        video = 'vídeo';
        ded = 'Documento de entrada de datos';
        upload_file = 'subir archivo';
        cancel = 'cancelar';
    } else if (localStorage.getItem("lang") == 'ru') {
        camera = 'камера';
        doc = "Документ";
        video = 'видео';
        ded = 'Документ ввода данных';
        upload_file = "загрузить файл";
        cancel = 'Отмена';
    }
    var buttons = [{
            text: camera,
            onClick: function() {
                McapturePhoto();
            }
        },
        {
            text: video,
            onClick: function() {
                videocapt(2);
            }
        },
        {
            text: doc,
            onClick: function() {



                var popupHTML = '<div class="popup" style="background-color:#051838">' +
                    '<div class="content-block">' +
                    '<p style="margin-left:5%" class="close-popup"><b>Close</b></p>' +
                    '<form id="CreateUploadImage_form_doc" enctype="multipart/form-data">' +
                    '<div class="image-upload" style="margin-top:50%;margin-left:48%">' +
                    '<label for="file-input"><i class="fa fa-upload " style=" color: #00507B;font-size: 55px;height:50px;"></i></label>' +
                    '<input id="file-input" type="file" name="myfile"  multiple="true" accepts="image/*" required onchange="uploaddocumentmain()" /></div>' +
                    '<input type="hidden" name="customerId" id="customerId" value="' + Checklogin() + '" />' +
                    '<input type="hidden" name="option" id="option" value="UploadBrowseImage" />' +
                    '<input type="hidden" name="sectionname" id="sectionname" value="DataEntryUpload" />' +
                    '</form>' +
                    '<p style="margin-left:20%">Touch  The icon Pick Document </p>' +
                    '</div>' +
                    '</div>';
                myApp.popup(popupHTML);


            }
        },
        {
            text: ded,
            color: 'red',
            onClick: function() {
                var popupHTML = '<div class="popup">' +
                    '<div class="content-block" style="text-align:center">' +
                    '<p>Data Entry Documents.<span class="close-popup" style="float:right"><i class="fa fa-times" aria-hidden="true"></i></p>' +
                    '<p><img id="prv"  src ="img/dataentry.jpg" style="height:220px;width:300px"></img></p>' +
                    '<p><img id="up"  src ="img/upload.gif" style="height:5px;width:100%;display:none"></img></p>' +
                    '<a href="#" class="button button-raised button-fill color-cyan" onclick="Documentaction()" style="margin-top:15%;">Pick Image</a>' +
                    '<a href="#" class="button button-raised button-fill color-cyan" onclick="uploadimg()" style="margin-top:15%;">Upload</a>' +
                    '</div>' +
                    '</div>'
                myApp.popup(popupHTML);
            }
        },
        {
            text: cancel,
            color: 'red',
            onClick: function() {}
        },
    ];
    myApp.actions(buttons);

}


function image_popup_displayofall(imgIds, catid) {

    var storedData1 = myApp.formGetData('logged_userId');
    var value = [];
    var content ; 
    var value2 = [];
    var url2 = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=scanneditems&limit=250&columns=*&condition=userid=" + storedData1['userId'];
    var url = "https://www.healthrecordspro.com/wsplus.php?type=allscanneditemsbycategory&format=json&customerid=" + storedData1['userId'] + "&catId=" + catid;
    $.getJSON(url, function(json) {
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                string = 'https://healthrecordspro.com/upload/' + json['posts'][count]['image'];
                if (string != '') {
                    if (json['posts'][count]['isVideo'] == '0') {
                        if (json['posts'][count]['iid'] != imgIds) {
                            value.push(string);
                    //     content = value;
                        } else {

                            value2.push(string);
                        //    content1 = value2;
                        }
                    }
                }
            }
            count++;
        }
    // content.unshift(content1);
        // console.log(content1);
        // console.log( content );
        var myPhotoBrowserPopupDark = myApp.photoBrowser({
            photos: content,
            theme: 'dark',
            type: 'popup',
            zoom: 100

        });
        myPhotoBrowserPopupDark.open();
        myPhotoBrowserPopupDark.toggleExposition();
    });
}




function image_popup_display(imgId, albmId) {
    var storedData1 = myApp.formGetData('logged_userId');
    var images = [];
    //alert(albmId);
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=scanneditems&columns=*&condition=userid=" + storedData1['userId'] + "%20and%20albumid=" + albmId + "&limit=250";
    //alert(albmId);
    $.getJSON(url, function(json) {
        $.each(json['posts'], function(key, val) {
            if (val['id'] == imgId) {
                images.unshift('https://healthrecordspro.com/upload/' + val['image']);
            } else {
                images.push('https://healthrecordspro.com/upload/' + val['image']);
            }
        });
        var myPhotoBrowserPopupDark = myApp.photoBrowser({
            photos: images,
            theme: 'dark',
            type: 'popup'
        });
        myPhotoBrowserPopupDark.open();
        myPhotoBrowserPopupDark.toggleZoom();
    });
}

function FPrintImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    //var url = "https://healthrecordspro.com/newsite/prints/albums_print_pdf.php"
    window.open('https://healthrecordspro.com/WS/wspdf.php?sectionid=albums_print_pdf&app_session=' + storedData1['userId'] + '&folderid=' + albumtempId, '_system');
    //myApp.alert("PDF generated successfully");
}

function closepopup1() {
    $('.placeSingleImageup1').css("display", "none");
    $('.placeSingleImageup2').css("display", "none");
    $('.placeSingleImageup3').css("display", "none");
    $('.placeSingleImageup4').css("display", "none");
    $('.placeSingleImageup5').css("display", "none");

    popopener = 0;
    $(".page-content").attr("onclick", "")
}

//////////////////////////////////////-------------- Document -----------///////////////
function uploaddocumentmain() {
    //alert("Hi");
    //myApp.closeModal(popup)
    // $('#loadingmessage1').css("display","block");
    var popupHTML =
        '<div class="popup" id="imgid" data-pic-id="0">' +
        '<div class="content-block">' +
        '<p>Preview</p>' +
        '<p class="close-popup" onclick ="" style="margin-left:90%;color:blue;font-size:20px"> close</p>' +
        '<img src="img/documents.png" width="90%" height="35%" />' +
        '<br>' +
        '</div>' + '<div class="row" style="margin-top:-5%;"><div class="col-50">' +
        '<p><a href="#"  onclick="Selectalbumtosavedoc()" class="button">Save</a></p>' +
        '</div>' +
        '<div class="col-50">' +
        '<p><a href="#" class="button close-popup" onclick ="">cancel</a></p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    myApp.popup(popupHTML);
}




function Selectalbumtosavedoc() {
    uploaddoc();
}




function uploaddoc() {
    myApp.showPreloader();
    window.plugins.toast.showLongBottom('Processing', function(a) {
        // console.log('toast success: ' + a)
    }, function(b) {
        alert('toast error: ' + b)
    })
    var storedData1 = myApp.formGetData('logged_userId');
    //$("#catId").val(catid);
    $("#customerId").val(storedData1['userId']);
    // console.log($("#option").val());
    // console.log($("#customerId").val());
    // console.log($("#sectionname").val());
    // console.log($("#file-input").val());
    var formData = new FormData($("#CreateUploadImage_form_doc")[0]);
    // console.log(JSON.stringify(formData, null, 4));
    // setTimeout(function() {
    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DataEntryUpload',
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        success: function(data) {
            // console.log(JSON.stringify(data, null, 4));
            myApp.alert("uploaded successfully");
            setTimeout(function() {
                myApp.hidePreloader();
                $('.popup').remove();
                $('.popup-overlay').remove();
                // setrem();
            }, 3000);
        }
    });
    // }, 3000);
}



function CreateSingleUploadImage(AlbumUpSImgId) {
    console.log("upload file");
    myApp.showIndicator();
    var storedData1 = myApp.formGetData('logged_userId');
    $('#loadingmessage1').css("display", "block");
    formData = new FormData($('#CreateUploadSingleImage_form')[0]);
    // setTimeout(function() {
    $.ajax({
            type: 'POST',
            url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveAlbumSingleImgUpload',
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(data) {
                //mainView.router.loadPage('manage_albums.html');
                myApp.hideIndicator();
                $('#self_imgs').empty();
                //alert(albumtempId+","+Albumtitle+","+secName+","+albumCatId);
                view_album_images(albumtempId, Albumtitle, secName, albumCatId)
                //view_album_images(AlbumUpSImgId);
                $('#loadingmessage1').hide();
            }

        });
    // }, 2000);

}

//////////////////////////////////////-------------- Search  -----------///////////////



function openSearchPopUp() {
    if (localStorage.getItem("lang") == 'ar') {
        var popupHTML = '<div class="popup popupImage" style="display: block;">' +
            '<div class="list-block">' +
            '<ul style="background-color:#FFFFFF">' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"></div>' +
            '<div class="item-inner">' +
            '<div class="item-input">' +
            ' <input type="text" name="search_keyword" id="search_keyword" placeholder="بحث.." />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            ' <p style="text-align:center;"><a href="#" onClick="SearchButton(); return false;" style="width:50%;margin:0 auto" class="button close-popup" id="button_search">بحث</a></p>' +
            '<p><a href="#" style="color: #007aff;float:right;margin-right: 0px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
            '</div>';
    } else if (localStorage.getItem("lang") == 'fr') {
        var popupHTML = '<div class="popup popupImage" style="display: block;">' +
            '<div class="list-block">' +
            '<ul style="background-color:#FFFFFF">' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"></div>' +
            '<div class="item-inner">' +
            '<div class="item-input">' +
            ' <input type="text" name="search_keyword" id="search_keyword" placeholder="chercher.." />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            ' <p style="text-align:center;"><a href="#" onClick="SearchButton(); return false;" style="width:50%;margin:0 auto" class="button close-popup" id="button_search">chercher</a></p>' +
            '<p><a href="#" style="color: #007aff;float:right;margin-right: 0px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
            '</div>';
    } else if (localStorage.getItem("lang") == 'sp') {
        var popupHTML = '<div class="popup popupImage" style="display: block;">' +
            '<div class="list-block">' +
            '<ul style="background-color:#FFFFFF">' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"></div>' +
            '<div class="item-inner">' +
            '<div class="item-input">' +
            ' <input type="text" name="search_keyword" id="search_keyword" placeholder="Buscar.." />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            ' <p style="text-align:center;"><a href="#" onClick="SearchButton(); return false;" style="width:50%;margin:0 auto" class="button close-popup" id="button_search">Buscar</a></p>' +
            '<p><a href="#" style="color: #007aff;float:right;margin-right: 0px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
            '</div>';
    } else if (localStorage.getItem("lang") == 'ru') {
        var popupHTML = '<div class="popup popupImage" style="display: block;">' +
            '<div class="list-block">' +
            '<ul style="background-color:#FFFFFF">' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"></div>' +
            '<div class="item-inner">' +
            '<div class="item-input">' +
            ' <input type="text" name="search_keyword" id="search_keyword" placeholder="Поиск.." />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            ' <p style="text-align:center;"><a href="#" onClick="SearchButton(); return false;" style="width:50%;margin:0 auto" class="button close-popup" id="button_search">Поиск</a></p>' +
            '<p><a href="#" style="color: #007aff;float:right;margin-right: 0px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
            '</div>';
    } else {
        var popupHTML = '<div class="popup popupImage" style="display: block;">' +
            '<div class="list-block">' +
            '<ul style="background-color:#FFFFFF">' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"></div>' +
            '<div class="item-inner">' +
            '<div class="item-input">' +
            ' <input type="text" name="search_keyword" id="search_keyword" placeholder="Search.." />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            ' <p style="text-align:center;"><a href="#" onClick="SearchButton(); return false;" style="width:50%;margin:0 auto" class="button close-popup" id="button_search">search</a></p>' +
            '<p><a href="#" style="color: #007aff;float:right;margin-right: 0px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
            '</div>';
    }
    myApp.popup(popupHTML);
    setTimeout(function() {
        $('#search_keyword').focus();
    }, 100);

}




function SearchButton() {
    var s_keywords = $('#search_keyword').val();
    if (s_keywords.trim() == "") {
        myApp.addNotification({
            title: 'Fail',
            message: 'Invalid keyword!'
        });
        return;
    }
    mainView.router.loadPage("search.html");
    setTimeout(function() {
        // myApp.alert(s_keywords);
        s_keywords = s_keywords.trim();
        s_keywords = s_keywords.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        s_keywords = s_keywords.replace(" ", "_");
        url = 'https://en.m.wikipedia.org/wiki/' + s_keywords;
        $('#searchResults_iframe').attr('src', url);
    }, 500);
}



/// in search.html




function labresultsListInfo() {
    var idz
    var catids;
    catids = tipID;
    if (catids == 7) {
        idz = 70
    } else if (catids == 7) {
        idz = 21;
    } else if (catids == 3) {
        idz = 17;
    } else if (catids == 11) {
        idz = 59;
    } else if (catids == 12) {
        idz = 70;
    } else {
        idz = 16;
    }
    console.log("======== usefull tips =======");
    console.log(catids + " === " + idz);
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=" + idz;
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


//////////////////////////////////////-------------- Emergancy  -----------///////////////

function uploadEmergencyContactCardsPic(update_id) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (update_id == '') {
        var update_emergency_id = $('#update_emergency_id').val();
    } else {
        var update_emergency_id = update_id;
    }
    $('#emer_con_image_id').val(update_emergency_id);
    formData = new FormData($('#file-attachment-form4')[0]);

    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=uploadEmergencyContact',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            //alert(data);
            // alert('File uploaded')
        }
    })
    return false;
}

function emergencyContactsDis() {

    setTimeout(function() {

        var storedData1 = myApp.formGetData('logged_userId');
        var popupHTML = '';

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=emergency_contacts&columns=contact_id,last_name,first_name,home_phone_number,work_phone_number,mobile_phone&condition=user_id=" + storedData1['userId'];

        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/listEmergencyContacts",
         
         data:{
            userId : storedData1['userId']
         },
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {

            myApp.hidePreloader();


            popupHTML += '<div class="popup popupImage" style="display: block; width: 90%; height: 90%;background-color: white;margin: 10% auto auto 5%;">';
            if (localStorage.getItem("lang") == 'ar') {
                popupHTML += '<p style="font-size: 150%;text-align:center">اتصالات الطوارئ</p>';
            } else if (localStorage.getItem("lang") == 'fr') {
                popupHTML += '<p style="font-size: 150%;text-align:center">Personne à contacter en cas d\'urgence</p>';
            } else if (localStorage.getItem("lang") == 'sp') {
                popupHTML += '<p style="font-size: 150%;text-align:center">Contacto de emergencia</p>';
            } else if (localStorage.getItem("lang") == 'ru') {
                popupHTML += '<p style="font-size: 150%;text-align:center">Экстренный контакт</p>';
            } else {
                popupHTML += '<p style="font-size: 150%;">Emergency Contact</p>';
            }

            popupHTML += '<p><a href="#" style="color:black;float:right;margin-right: -7px; margin-top: -47px;" class="close-popup">';
            popupHTML += '<i class="fa fa-times-circle fa-2x" ></i>';
            popupHTML += '</a></p>';

            for (i = 0; i < json['response']['emergency_contacts'].length; i++) {

                var num = json['response']['emergency_contacts'][i]['mobile_phone'];
                var num1 = json['response']['emergency_contacts'][i]['home_phone_number'];
                var num2 = json['response']['emergency_contacts'][i]['work_phone_number'];



                popupHTML += '<div class="content-block">';
                popupHTML += '<div style="width: 100%;">';

                popupHTML += '<div><i class="fa fa-phone-square" style="font-size:23px;color:#51B8BD;">&nbsp&nbsp</i>' + json['response']['emergency_contacts'][i]['first_name'] + ' ' +
                    json['response']['emergency_contacts'][i]['last_name'] + '</br><a style="color: black;" onclick="callSomeone(\'' + num + '\')">' + json['response']['emergency_contacts'][i]['mobile_phone'] +
                    '</a></br><a style="color: black;" onclick="callSomeone(\'' + num1 + '\')">' + json['response']['emergency_contacts'][i]['home_phone_number'] +
                    '</a></div>';

                popupHTML += '</div>';
                popupHTML += '</div>';
                // console.log(popupHTML);
            }
            popupHTML += '</div>';
            myApp.popup(popupHTML);
    }
});

    }, 500);

}




function callSomeone(mobileNumber) {

    // alert(parseInt(mobileNumber));
    // console.log(mobileNumber);
    window.plugins.CallNumber.callNumber(function(result) {
        console.log("Success:" + result);
    }, function(err) {
        console.log("Error:" + err);
    }, mobileNumber, true);


}


//////////////////////////////////////-------------- Map  -----------///////////////


function findMyLocation() {
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
        enableHighAccuracy: true
    });
}




function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // console.log('Received current location: ' + latitude + ',' + longitude);
    var secheltLoc = new google.maps.LatLng(latitude, longitude);

    var currentlocation = "https://maps.google.com/?q=" + latitude + "," + longitude + "";
    $('#map_hidden').val(currentlocation);
    var myMapOptions = {
        zoom: 16,
        center: secheltLoc,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var theMap = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);

    var marker = new google.maps.Marker({
        map: theMap,
        draggable: false,
        position: new google.maps.LatLng(latitude, longitude),
        visible: true,
        title: 'Title' // Title
    });
    var contentString = '<div class="map_anotaion_title">Please help me</div>'; //Address on pin click

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(theMap, marker);
    google.maps.event.addListener(marker, "click", function(e) {
        infowindow.open(theMap, marker);
    });
}


function showError(error) {
    alert("Errorcode: " + error.code +
        "Errormessage: " + error.message);
}


///// in map.html 

function ShareTheLocation() {
    var shareLocationMap = $('#map_hidden').val();
    window.plugins.socialsharing.share(null, null, null, shareLocationMap);
}



//////////////////////////------------------------------ End nav bar icons ------------------------------------------------------------


//////////////////////////------------------------------ Pages ------------------------------------------------------------

//////////////////////////------------------------------ Manage all image  ------------------------------------------------------------


function allalbumimages() {
    var storedData1 = myApp.formGetData('logged_userId');
    var Catid = 0;
    var sp = "_";
    var url2 = "https://www.healthrecordspro.com/wsplus.php?type=allscanneditemscategorized&format=json&customerid=" + storedData1['userId'];
    jQuery.ajaxSetup({
        async: false
    });
    setTimeout(function() {
        $.getJSON(url2, function(json) {
            $.each(json['posts'], function(key, value) {

                var cat;
                if (localStorage.getItem("lang") == 'ar') {
                    cat = value['category_arabic'];
                } else if (localStorage.getItem("lang") == 'fr') {
                    cat = value['category_french'].toUpperCase();
                } else if (localStorage.getItem("lang") == 'sp') {
                    cat = value['category_spanish'].toUpperCase();
                } else if (localStorage.getItem("lang") == 'ru') {
                    cat = value['category_russian'].toUpperCase();
                } else {
                    cat = value['category'].toUpperCase();
                }
                var data = "<ul style='list-style: outside none none;'><li id='titles_display'><div class='item-content'><div class='item-inner'><div class='item-title' style='color: #000000;font-weight: bold;'>" + cat + "</div></div></div></li><div class='row' id='albums_dis_" + value['catId'] + "' style='float: left;margin: 5px;text-align: center;width: 96%;'></ul>";
                if (Catid != value['catId']) {
                    $('#display_all_images_allsec').append(data);
                }
                if (value['isVideo'] == '0') {
                    $('#albums_dis_' + value['catId']).append('<li><a href="image_description_page.html" onClick="ImageDescription(' + value['iid'] + ',' + value['id'] + ',\'' + value['catId'] + '\',\'' + sp + '\')" style="color:black;margin-right: -13px; margin-top: -23px;"><i class="fa fa-info-circle" ></i></a><img src="https://healthrecordspro.com/upload/' + value['image'] + '" style="height: 84px;" onclick="image_popup_displayofall(\'' + value['iid'] + '\',\'' + value['catId'] + '\')"></li>');
                } else {
                    $('#albums_dis_' + value['catId']).append('<li><a href="#" style="color:black;margin-right: -13px; margin-top: -23px;"></a><a href="#" onclick="playVideo(\'' + value['image'] + '\');"><img src="img/play-icon.png" style="height: 84px;"/></a></li>');
                }
                Catid = value['catId'];
            });
        });
    }, 3000);
}

//////////////////////////------------------------------ End Manage all image  ------------------------------------------------------------




//////////////////////////------------------------------ health_calender  ------------------------------------------------------------


function createCalendarDocAppointment(id) {
    var storedData1 = myApp.formGetData('logged_userId');
    var title = 'DoctorsAppointment';
    var loc = 'Lebanon';
    var notes = 'We would like to confirm that you have added a new appointment on your system with the following details:';
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=doctors_appointment&columns=*&condition=customerid=" + storedData1['userId'];
    var urlappt = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=doctors_appointment&columns=*&condition=id=" + id;

    $.getJSON(urlappt, function(json) {
        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=healthcare_providers&condition=hcp_id=" + json['posts'][0]['physicianname'];
        // jQuery.ajaxSetup({async:false});
        $.getJSON(url1, function(json) {
            notes += '\n';
            notes += 'Physician Name:';
            notes += json['posts'][0]['first_name'];
        });
        var url2 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=doctors_speciality&condition=id=" + json['posts'][0]['specialty'];
        // jQuery.ajaxSetup({async:false});
        $.getJSON(url2, function(json) {
            notes += '\n';
            notes += 'Specialty:';
            notes += json['posts'][0]['name'];
        });
        notes += '\n';
        notes += 'Date:';
        notes += json['posts'][0]['dateofappointment'];
        notes += '\n';
        notes += 'Time:';
        notes += json['posts'][0]['time'];

        var startDate = json['posts'][0]['reminderdate'];
        var timeNew = json['posts'][0]['remindertime'];

        timeNew = timeNew.split(':');
        startDate = startDate.split('-');
        if (timeNew[2].trim() == 'PM') {
            timeNew[0] = parseInt(timeNew[0]) + parseInt(12);
        }

        var startDate = new Date(startDate[0], parseInt(startDate[1]) - parseInt(1), startDate[2], timeNew[0], timeNew[1]);
        var endDate = json['posts'][0]['reminderdate2'];

        endDate = endDate.split('-');
        var endDate = new Date(endDate[0], parseInt(endDate[1]) - parseInt(1), endDate[2], timeNew[0], timeNew[1]);
        var createCalOptions = window.plugins.calendar.getCreateCalendarOptions();
        createCalOptions.calendarName = "HRP";
        createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
        window.plugins.calendar.createCalendar(createCalOptions, success, error);
        var success = function(message) {
            alert("Success: " + JSON.stringify(message));
        };
        var error = function(message) {
            alert("Error: " + message);
        };
        var calendarName = 'HRP';
        var options = {
            calendarName: calendarName, // iOS specific
            calendarId: 1, // Android specific
            firstReminderMinutes: 120, // default is 60, pass in null for no reminder (alarm)
            secondReminderMinutes: 5,
            recurrence: "daily"
        };

        startDate.setHours(startDate.getHours());
        endDate.setHours(endDate.getHours() + 1);
        console.log(startDate);
        console.log(endDate);
        console.log(notes);
        window.plugins.calendar.createEventInteractivelyWithOptions(title, loc, notes, startDate, endDate, options, onSuccess1, onError1);
    });
}
function helloworld(selectedIds ) {
        console.log('im innnnnnnn ')
             var storedData1 = myApp.formGetData('logged_userId');

        var url = "http://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id=" + storedData1['userId'];
        console.log('ahhafdgsarg=>>>>>>>>>>>>>>>>>>>>>>>>>'+url);

        $.getJSON(url, function(json) {
            var text = "";
            var selectedText1 = "";

            if (localStorage.getItem("lang") == 'ar') {
                text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_phyname' id='doc_apoint_phyname' onchange='displayPhysicianProOtherField(this)'>" +
                    "<option value='0'>أختر</option>";
            } else {
                text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_phyname' id='doc_apoint_phyname' onchange='displayPhysicianProOtherField(this)'>" +
                    "<option value='0'>Select</option>";
            } 

            $.each(json['posts'], function(key, val) {
                var selectedText = "";
                if (selectedIds == val['hcp_id']) {
                    selectedText = "selected = selected";
                }
                text += "<option value='" + val['hcp_id'] + "'  " + selectedText + " >" + val['first_name'] + "</option>";

            });
            if (selectedIds == -1) {
                selectedText1 = "selected = selected";
            }
            if (localStorage.getItem("lang") == 'ar') {
                text += "<option value='-1'  " + selectedText1 + " >أخرى</option>";
            } else {
                text += "<option value='-1'  " + selectedText1 + " >Others</option>";
            }
                        text+="<option value='-2'>"+ if_langs("Add Therapist","إضافة مُعالج","Ajouter un thérapeute","Добавить терапевта","セラピストを追加","Añadir terapeuta") + "</option>";

            text += "</select>";

            $("#addphysicianprovider").html(text);
                        $("#doc_apoint_phyname").on('change', function() {
                        if (this.value=="-2") {
                                setTimeout(function() {
                                    HealthProvidersAdd();
                                },1000);
                                mainView.router.loadPage("health_providers.html");
                        }
                        });
        });
        
        
        }


    function physicianProvider(x) {
        console.log('im in ')

        var storedData1 = myApp.formGetData('logged_userId');

        var url = "http://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=healthcare_providers&limit=250&columns=hcp_id,first_name&condition=user_id=" + storedData1['userId'];
        console.log('ahhafdgsarg=>>>>>>>>>>>>>>>>>>>>>>>>>'+url);

        $.getJSON(url, function(json) {
            var text = "";
            var selectedText1 = "";

            if (localStorage.getItem("lang") == 'ar') {
                text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_phyname' id='doc_apoint_phyname' onchange='displayPhysicianProOtherField(this)'>" +
                    "<option value='0'>أختر</option>";
            } else {
                text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_phyname' id='doc_apoint_phyname' onchange='displayPhysicianProOtherField(this)'>" +
                    "<option value='0'>Select</option>";
            }

            $.each(json['posts'], function(key, val) {
                var selectedText = "";
                if (selectedIds == val['hcp_id']) {
                    selectedText = "selected = selected";
                }
                text += "<option value='" + val['hcp_id'] + "'  " + selectedText + " >" + val['first_name'] + "</option>";

            });
            if (selectedIds == -1) {
                selectedText1 = "selected = selected";
            }
            if (localStorage.getItem("lang") == 'ar') {
                text += "<option value='-1'  " + selectedText1 + " >أخرى</option>";
            } else {
                text += "<option value='-1'  " + selectedText1 + " >Others</option>";
            }
                        text+="<option value='-2'>"+ if_langs("Add Therapist","إضافة مُعالج","Ajouter un thérapeute","Добавить терапевта","セラピストを追加","Añadir terapeuta") + "</option>";

            text += "</select>";

            $("#addphysicianprovider").html(text);
                        $("#doc_apoint_phyname").on('change', function() {
                        if (this.value=="-2") {
                                setTimeout(function() {
                                    HealthProvidersAdd();
                                },1000);
                                mainView.router.loadPage("health_providers.html");
                        }
                        });
        });

    }


function onError1(msg) {
    myApp.alert('Calendar error', 'Failed');
}

function onSuccess1(msg) {
    myApp.alert('Calendar success', 'Sucess');
}
function healthcalendarInfo() {

    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=11";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function calendarM() {
    // alert("hi");
    page_parameter = 31;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        if ($("#CalendarPlace").length > 0) {
            $('#CalendarPlace').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                editable: false,
                events: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=events&id=' + storedData1['userId'],
                eventClick: function(event, jsEvent, view) {

                    //$('jsEvent').addTouch();
                    $.ajax({
                        type: 'POST',
                        url: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=eventsdetails&iid=' + event['id'],
                        success: function(data) {
                            var popupHTML = '<div class="popup" style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;">' +
                                '<div class="list-block popup-self">' +
                                '<div class="content-block-title" style="text-align:-webkit-center;"><h3 style="font-size: 5vw;margin: 10px 0;">Medication Calendar</h3></div>' +
                                '<div class="item-media"></div>' +
                                '<div class="item-inner item-inner1">' +
                                '<div class="item-input">' +
                                data +
                                '</div>' +
                                '</div>' +
                                '<p align="right"><a href="medications.html" onclick="medicationEdit(' + event['itemId'] + ');" style="width:20%;" class="button close-popup" id="button_search">Edit</a></p>' +
                                '<p><a href="#" style="color:black;float:right;position:absolute;top:0;right:0;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
                                '</div>' +
                                '</div>';

                            myApp.popup(popupHTML);
                        }
                    });
                    return false;

                }
            });
        } else {
            $('#CalendarPlace').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                editable: false,
                events: {},
                eventClick: function() {
                    //$('jsEvent').addTouch();
                }
            });
        }
    }, 500);

}

///// health_cal_Appointment.html


function healthcalendarappointmentInfo() {

    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=62";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

function calendarA() {
    var eventbit = 0;
    var Clength = 0;
    var storedData1 = myApp.formGetData('logged_userId');
    $.getJSON('http://healthrecordspro.com/WS/wpevents.php?sectionid=dc_events&id=' + storedData1['userId'], function(data) {
            console.log(data.length);
            Clength = data.length
        }).done(function() {

        })
        .fail(function() {
            myApp.alert("please check the Network connection");
        });

    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');


        //alert($("#CalendarPlace_Appoitment").length);

        if (Clength > 0) {
            $('#CalendarPlace_Appoitment').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                editable: false,
                events: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=dc_events&id=' + storedData1['userId'],
                eventClick: function(event, jsEvent, view) {
                    //alert("hi");
                    //$('jsEvent').addTouch();

                    $.ajax({
                        type: 'POST',
                        url: 'http://healthrecordspro.com/WS/wpevents.php?sectionid=dc_eventsdetails&iid=' + event['id'],
                        success: function(data) {
                            var popupHTML = '<div class="popup" style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;">' +
                                '<div class="list-block popup-self">' +
                                '<div class="content-block-title" style="text-align:-webkit-center;"><h3 style="font-size: 5vw;margin: 10px 0;">Appointment Calendar</h3></div>' +
                                '<div class="item-media"></div>' +
                                '<div class="item-inner item-inner1">' +
                                '<div class="item-input">' +
                                data +
                                '</div>' +
                                '</div>' +
                                '<p align="right"><a href="doctor_consultation.html" onclick="doctorsEdit(' + event['id'] + ');" style="width:20%;" class="button close-popup" id="button_search">Edit</a></p>' +
                                '<p><a href="#" style="color:black;float:right; position:absolute;top:0;right:0;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
                                '</div>' +
                                '</div>' +
                                '</div>';

                            myApp.popup(popupHTML);
                        }
                    });
                    return false;

                }
            });
        } else {
            $('#CalendarPlace_Appoitment').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                editable: false,
                events: [],
                eventClick: function(event, jsEvent, view) {
                    //$('jsEvent').addTouch();
                    alert("clicked");
                }
            });
        }
    }, 1000);

}

//// health_calender_new.html

function healthcalendarmediactionInfo() {

    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=63";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

//////////////////////////------------------------------ End health_calender  ------------------------------------------------------------



    

//////////////////////////------------------------------  Self monitoring charts  ------------------------------------------------------------


function selfDataMetrics() {
    page_parameter = 1;
    tempPage = 32;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        var urlgetResultsList = "https://www.healthrecordspro.com/wsplus.php?type=mychartsbytest&format=json&customerid=" + storedData1['userId'];
        $.getJSON(urlgetResultsList, function(json) {

            $.each(json['posts'], function(key, val) {
                if (json['posts'] == 0) {
                    var data = "No Records ";
                    $('#self_listpage_data').append(data);
                } else {
                    if (localStorage.getItem("lang") == 'ar') {
                        var testName = val['testName_arabic'];
                    } else if (localStorage.getItem("lang") == 'fr') {
                        var testName = val['testName_french'];
                    } else if (localStorage.getItem("lang") == 'sp') {
                        var testName = val['testName_spanish'];
                    } else if (localStorage.getItem("lang") == 'ru') {
                        var testName = val['testName_russian'];
                    } else {
                        var testName = val['testName'];
                    }
                    $('#self_listpage_data').append('<li><a href="self_height_chart.html" class="close-panel item-link" onclick="displaySelfBydateCharts(' + val['testId'] + ');"><div class="item-content white"><div class="item-inner"><div class="item-title">' + testName + '</div></div></div></a></li>');
                }
            });
            if (localStorage.getItem("lang") == 'ar') {
                $('#selfrep').append('<a href="self_all_reports.html" onclick="selfReports(' + json['posts'][0]['id'] + ');" class="link icon-only" style="color:white;border-right:1px white solid ">الرسوم البيانية</a><a href="self_table_display.html" onClick="selfTableDisplay()" class="link icon-only" style="color:white">جدول</a>');
            } else if (localStorage.getItem("lang") == 'fr') {
                $('#selfrep').append('<a href="self_all_reports.html" onclick="selfReports(' + json['posts'][0]['id'] + ');" class="link icon-only" style="color:white;border-right:1px white solid ">Graphiques</a><a href="self_table_display.html" onClick="selfTableDisplay()" class="link icon-only" style="color:white">Table</a>');
            } else if (localStorage.getItem("lang") == 'sp') {
                $('#selfrep').append('<a href="self_all_reports.html" onclick="selfReports(' + json['posts'][0]['id'] + ');" class="link icon-only" style="color:white;border-right:1px white solid ">Graphiques</a><a href="self_table_display.html" onClick="selfTableDisplay()" class="link icon-only" style="color:white">Mesa</a>');
            } else if (localStorage.getItem("lang") == 'ru') {
                $('#selfrep').append('<a href="self_all_reports.html" onclick="selfReports(' + json['posts'][0]['id'] + ');" class="link icon-only" style="color:white;border-right:1px white solid ">ГрафикиКонкурсы</a><a href="self_table_display.html" onClick="selfTableDisplay()" class="link icon-only" style="color:white">Таблица</a>');
            } else {
                $('#selfrep').append('<a href="self_all_reports.html" onclick="selfReports(' + json['posts'][0]['id'] + ');" class="link icon-only" style="color:white;border-right:1px white solid ">Charts</a><a href="self_table_display.html" onClick="selfTableDisplay()" class="link icon-only" style="color:white">Table</a>');
            }
        });
    }, 500);
}


function selfReports() {
    page_parameter = 32;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        var urlAllReports = "https://www.healthrecordspro.com/wsplus.php?type=mychartsbytest&format=json&customerid=" + storedData1['userId'];
        jQuery.ajaxSetup({
            async: false
        });
        $.getJSON(urlAllReports, function(json) {
            $.each(json['posts'], function(key, value) {

                if (localStorage.getItem("lang") == 'ar') {
                    $('#self_Report_name_chart').append('<li id="report_charts' + value['testId'] + '" style="list-style: outside none none;"><h2>' + value['testName_arabic'] + '</h2></li>');
                } else if (localStorage.getItem("lang") == 'fr') {
                    $('#self_Report_name_chart').append('<li id="report_charts' + value['testId'] + '" style="list-style: outside none none;"><h2>' + value['testName_french'] + '</h2></li>');
                } else if (localStorage.getItem("lang") == 'sp') {
                    $('#self_Report_name_chart').append('<li id="report_charts' + value['testId'] + '" style="list-style: outside none none;"><h2>' + value['testName_spanish'] + '</h2></li>');
                } else if (localStorage.getItem("lang") == 'ru') {
                    $('#self_Report_name_chart').append('<li id="report_charts' + value['testId'] + '" style="list-style: outside none none;"><h2>' + value['testName_russian'] + '</h2></li>');
                } else {
                    $('#self_Report_name_chart').append('<li id="report_charts' + value['testId'] + '" style="list-style: outside none none;"><h2>' + value['testName'] + '</h2></li>');

                }
                var canHtml = '<canvas id="canvas_all_reports' + value['testId'] + '" height="450" width="600" style="border-left: 2px solid;border-right: 2px solid;margin-left: 3px;"></canvas>';
                $('#report_charts' + value['testId'] + '').append(canHtml);

                var urlGettingResults = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=mychartsresults&columns=testValue,date&condition=customerId=" + storedData1['userId'] + " AND testId=" + value['testId'];
                jQuery.ajaxSetup({
                    async: false
                });
                $.getJSON(urlGettingResults, function(json1) {
                    var valueStr = [];
                    var dateval = [];
                    $.each(json1['posts'], function(key1, value1) {

                        valueStr.push(value1['testValue']);
                        dateval.push(value1['date']);
                        content = valueStr.toString();
                        content1 = dateval.toString();
                    });
                    var lineChartData = {
                        labels: content1.split(','),
                        datasets: [{
                            label: "my first data",
                            fillColor: "rgba(220,220,220,0.2)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: JSON.parse("[" + content + "]")
                            // data : [10,20,30]
                        }]
                    }
                    var ctx = document.getElementById("canvas_all_reports" + value['testId'] + "").getContext("2d");
                    window.myLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true
                    });
                });
            });
        });

    }, 500);
}



function displaySelfBydateCharts(chartIdss) {
    page_parameter = 32;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        var value = [];
        var dateval = [];
        var TestName = [];
        var urlgetResultsByDateCharts = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=mychartsresults&columns=*&condition=customerId=" + storedData1['userId'] + " AND testId=" + chartIdss + "%20order%20by%20date%20asc";

        $.getJSON(urlgetResultsByDateCharts, function(json) {
            var key, count = 0;
            if (json['posts'][count]['testValue'] != '') {
                for (key in json['posts']) {
                    if (json['posts'].hasOwnProperty(key)) {
                        $("#self_Test_name").html('');
                        $("#self_Test_name_otrs").html('');
                        string = json['posts'][count]['testValue'].toString();
                        if (string != '') {
                            string1 = json['posts'][count]['date'].toString();

                            if (localStorage.getItem("lang") == 'ar') {
                                string2 = json['posts'][count]['testName_arabic'].toString();
                            } else if (localStorage.getItem("lang") == 'fr') {
                                string2 = json['posts'][count]['testName_french'].toString();
                            } else if (localStorage.getItem("lang") == 'sp') {
                                string2 = json['posts'][count]['testName_spanish'].toString();
                            } else if (localStorage.getItem("lang") == 'ru') {
                                string2 = json['posts'][count]['testName_russian'].toString();
                            } else {
                                string2 = json['posts'][count]['testName'].toString();
                            }

                            value.push(string);
                            dateval.push(string1);
                            TestName.push(string2);
                            $("#table_height").append('<tr style="text-align:center"><td>' + string1 + '</td><td>' + string + '</td></tr>');
                            $("#self_Test_name").append('<p>Dates</p>');
                            $("#axistitle").html(string2);
                            $("#self_Test_name_otrs").append('<p>' + string2 + '</p>');
                            content = value.toString();
                            content1 = dateval.toString();
                        }
                    }
                    count++;
                }
                var lineChartData = {
                    labels: content1.split(','),
                    datasets: [{
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: JSON.parse("[" + content + "]")
                        // data : [10,20,30]
                    }]
                }
                var ctx = document.getElementById("canvas_height").getContext("2d");
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true,
                });

            } else {
                var data = "No Records ";
                $('#test').append(data);
            }
        });
    }, 500);
}


function getSelfData() {
    var storedData1 = myApp.formGetData('logged_userId');
    var urlgetResultsByDate = "https://www.healthrecordspro.com/wsplus.php?type=mychartsbydate&format=json&customerid=" + storedData1['userId'];

    $.getJSON(urlgetResultsByDate, function(json) {
        $("#getallselfmonitoringchart").html('');
        var ddata = '';
        $.each(json['posts'], function(key, val) {
            if (json['posts'] == 0) {
                var data = "No Records ";
                $('#getallselfmonitoringchart').append(data);
            } else {
                var Self_datess = val['date'];
                ddata = ddata + "<li><a href='self_monitoring_charts.html' class='close-panel item-link' onclick='selfMonEdit(\"" + Self_datess + "\");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + val['date'] + "</div></div></div></a></li>";
            }

        });

        $('#getallselfmonitoringchart').append(ddata);
    });
}


function selfMonitoringAdd() {
    page_parameter = 32;
    setTimeout(function() {
        $("#changeonInsert_self").css('display', 'block');
        $("#changeonUpdate_self").css('display', 'none');
        getCalenderSelf();
        var storedData1 = myApp.formGetData('logged_userId');
        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=mychartstests&columns=*&condition=active=1";
        var countz = 0;
        var metricsmode = 0;
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=metrics&condition=user_id=" + storedData1['userId'];
        $.getJSON(url, function(json) {
            metricsmode = json['posts'][0]['metrics']
        });

        $.getJSON(url1, function(json) {
            $.each(json['posts'], function(key, val) {
                if (val['id'] == 1 || val['id'] == 2) {
                    var bmi = "myFunction()";
                } else {
                    var bmi = "";
                }
                if (val['us'] != '') {
                    if (metricsmode == 0) {
                        var mm = '(' + val['us'] + ')';
                    } else {
                        var mm = '(' + val['eu'] + ')';
                    }
                } else {
                    var mm = '';
                }
                //
                if (localStorage.getItem("lang") == 'ar') {
                    $('#self_tests').append('<li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + val['name_arabic'] + ' ' + mm + '</div><div class="item-input" style="width: 40%;"><input type="tel" name="name_' + val['id'] + '" id="value_' + val['id'] + '" placeholder="القيمة" onkeyup="' + bmi + '" style="font-size: 13px;"></div></div></div></li>');
                } else if (localStorage.getItem("lang") == 'fr') {
                    $('#self_tests').append('<li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + val['name_french'] + ' ' + mm + '</div><div class="item-input" style="width: 40%;"><input type="tel" name="name_' + val['id'] + '" id="value_' + val['id'] + '" placeholder="Valeur" onkeyup="' + bmi + '" style="font-size: 13px;"></div></div></div></li>');
                } else if (localStorage.getItem("lang") == 'sp') {
                    $('#self_tests').append('<li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + val['name_spanish'] + ' ' + mm + '</div><div class="item-input" style="width: 40%;"><input type="tel" name="name_' + val['id'] + '" id="value_' + val['id'] + '" placeholder="Valor" onkeyup="' + bmi + '" style="font-size: 13px;"></div></div></div></li>');
                } else if (localStorage.getItem("lang") == 'ru') {
                    $('#self_tests').append('<li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + val['name_russian'] + ' ' + mm + '</div><div class="item-input" style="width: 40%;"><input type="tel" name="name_' + val['id'] + '" id="value_' + val['id'] + '" placeholder="значение" onkeyup="' + bmi + '" style="font-size: 13px;"></div></div></div></li>');
                } else {
                    $('#self_tests').append('<li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + val['name'] + ' ' + mm + '</div><div class="item-input" style="width: 40%;"><input type="tel" name="name_' + val['id'] + '" id="value_' + val['id'] + '" placeholder="value" onkeyup="' + bmi + '" style="font-size: 13px;"></div></div></div></li>');
                }
            });
        })
    }, 500);
}




function selfmonitoringSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');

    var urldeleteselfResults = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=mychartsresults&columns=&condition=date='" + $('#self_date').val() + "' AND customerId=" + storedData1['userId'];
    $.getJSON(urldeleteselfResults, function(json2) {
        // console.log(urldeleteLabResults);
    });

    var urlGettingTestsName = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=mychartstests&columns=*&condition=active=1";
    $.getJSON(urlGettingTestsName, function(json) {
        var arrayofids = [];
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                arrayofids[count] = json['posts'][key]['id'];
                console.log(json['posts'][key]['id']);
                count++;
            }
        }
        if ($('#self_date').val() == '') {
            myApp.alert('Please Enter Date', 'Labresults');
        } else {
            for (i = 0; i <= count; i++) {
                //debugger;
                // console.log($('#value_' + arrayofids[i]).val());
                if ($('#value_' + arrayofids[i]).val() != undefined && $('#value_' + arrayofids[i]).val() != '') {
                    //debugger;
                    // alert("entered")
                    var urlInsertTestsself = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=mychartsresults&columns=date,customerId,testId,testName,testValue&values='" + $('#self_date').val() + "','" + storedData1['userId'] + "','" + arrayofids[i] + "','" + json['posts'][i]['name'] + "','" + $('#value_' + arrayofids[i]).val() + "'";
                    $.getJSON(urlInsertTestsself, function(json2) {

                    });
                }
            }
            if (json['posts'][0]) {
                //selfDataMetrics();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('self_moni_listing_new.html');
                setTimeout(function() {
                    selfDataMetrics()
                }, 2000);

            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        }
    });
    for (var j = 0; j < $('#extrafieldcount').val(); j++) {
        if ($('#otherfield_' + j).val() != undefined && $('#otherfield_' + j).val() != '' && $('#othervalue_' + j).val() != undefined && $('#othervalue_' + j).val() != '') {
            var urlInsertOthersFieldValue = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=mychartsresults&columns=date,customerId,testId,testName,testValue&values='" + $('#self_date').val() + "','" + storedData1['userId'] + "','" + $('#otherfield_' + j + ' option:selected').val() + "','" + $('#otherfield_' + j + ' option:selected').text() + "','" + $('#othervalue_' + j).val() + "'";
            $.getJSON(urlInsertOthersFieldValue, function(json1) {
                console.log(json1);
            });
        }
    }
}

function deleteselfItem() {
    tableid = $('#update_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=mychartsresults&columns=&condition=date='" + chartDate + "' AND customerId=" + storedData1['userId'];

        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=mychart_otherfield&columns=&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

        });
        $.getJSON(url1, function(json) {
            myApp.hidePreloader();

            // $("#self_monitoring_ul_"+id).remove();
            // $('#getallselfmonitoringchart').html();
            mainView.router.loadPage('self_moni_listing_new.html');
            setTimeout(function() {
                selfDataMetrics()
            }, 2000);

        });
    });
}

function selfMonEdit(datess) {
    chartDate = datess
    setTimeout(function() {

        getCalenderSelf();
        var storedData1 = myApp.formGetData('logged_userId');
        var urlgetUpResultsByDate = "https://www.healthrecordspro.com/wsplus.php?type=mychartsupdateformbydate&format=json&customerid=" + storedData1['userId'] + "&date='" + datess + "'";

        $.getJSON(urlgetUpResultsByDate, function(json) {
            $.each(json['posts'], function(key, val) {
                $('#self_date').val(val['date']);
                console.log(val['testName'], val['id']);

                if (localStorage.getItem("lang") == 'ar') {
                    $("#self_tests").append("<li ><div class='item-content'><div class='item-inner'data-val='' style='padding-right: 0;'><div class='item-title label' style='font-size: 13px;'>" + val['testName_arabic'] + "</div><div class='item-input' style='width: 40%;'><input type='number' name='name_" + val['id'] + "' id='value_" + val['testId'] + "' placeholder='value' value='" + val['testValue'] + "' style='font-size: 13px;'></div></div><img src='img/chart.png' class='lab_ch_img' onClick='SelfmoniCharts(" + val['testId'] + ");'/></div></li>");
                } else {
                    $("#self_tests").append("<li ><div class='item-content'><div class='item-inner'data-val='' style='padding-right: 0;'><div class='item-title label' style='font-size: 13px;'>" + val['testName'] + "</div><div class='item-input' style='width: 40%;'><input type='number' name='name_" + val['id'] + "' id='value_" + val['testId'] + "' placeholder='value' value='" + val['testValue'] + "' style='font-size: 13px;'></div></div><img src='img/chart.png' class='lab_ch_img' onClick='SelfmoniCharts(" + val['testId'] + ");'/></div></li>");
                }
            });
        });
    }, 500);
}


function getCalenderSelf() {
    var calendarDefault = myApp.calendar({
        input: '#self_date',
    });
}


//////////////////////////////////////////////////// self table display.html /////////////////////////////////////////

function selfTableDisplay() {
    page_parameter = 32;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        var datesArray = [];
        var urlOFDates = "https://www.healthrecordspro.com/wsplus.php?type=mychartsvitalstabletests&format=json&customerid=" + storedData1['userId'];
        jQuery.ajaxSetup({
            async: false
        });
        $.getJSON(urlOFDates, function(json) {
            $.each(json['posts'], function(key, value) {

                if (localStorage.getItem("lang") == 'ar') {
                    $("#self_mon_tab_data").append('<th>' + value['testName_arabic'] + '</th>');
                } else if (localStorage.getItem("lang") == 'fr') {
                    $("#self_mon_tab_data").append('<th>' + value['testName_french'] + '</th>');
                } else if (localStorage.getItem("lang") == 'sp') {
                    $("#self_mon_tab_data").append('<th>' + value['testName_spanish'] + '</th>');
                } else if (localStorage.getItem("lang") == 'ru') {
                    $("#self_mon_tab_data").append('<th>' + value['testName_russian'] + '</th>');
                } else {
                    $("#self_mon_tab_data").append('<th>' + value['testName'] + '</th>');
                }

            });
        });
        var urlselfDates = "https://healthrecordspro.com/wsplus.php?type=mychartsreportdatesdd&format=json&customerid=" + storedData1['userId'];
        $.getJSON(urlselfDates, function(json1) {
            var key, count = 0;
            for (key in json1['posts']) {
                if (json1['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            var datesArray = [];
            $.each(json1['posts'], function(key, value) {
                datesArray.push(value['date']);
            });
            for (var i = 0; i < count; i++) {
                var html = '';
                var urlDisplayValues = "https://healthrecordspro.com/wsplus.php?type=mychartsvitalstable&format=json&customerid=" + storedData1['userId'] + "&date=" + datesArray[i];
                html += '<tr><td>' + datesArray[i] + '</td>';
                $.getJSON(urlDisplayValues, function(json2) {
                    $.each(json2['posts'], function(key1, value1) {
                        html += '<td>' + value1 + '</td>';
                    });
                    html += '</tr>';
                    $("#self_table_data").append(html);
                });
            }
        });
    }, 500);
}


///////////////////////////// mangae album .html 


function manage_albums(MAcatId, MAselectId) {
    //   MAcatId = catId;

    catId = MAcatId;
    // MAselectId = selectId;
    selectId = MAselectId;
}

var clickbit

function manage_albumsz(catId, selectId) {
    console.log(catId + " ------------- " + selectId);
    initiationbit = 1;
    $('#ctx').css("-webkit-filter", "blur(0px)")
    popopener = 0;
    // MAcatId = catId;
    //   MAselectId = selectId;
    currentMenuModuleId = 71;
    var storedData1 = myApp.formGetData('logged_userId');
    $('#display_albums_area').html("");
    setTimeout(function() {
        var sectionname = selectId;
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=scannedalbums&columns=*&condition=customerId=" + storedData1['userId'] + " AND categoryId=" + catId;
        var urlz = "https://healthrecordspro.com/wsplus.php?type=managedalbums&format=json&customerid=" + storedData1['userId'] + "&catid=" + catId;
        //var networkbit = networkInfo();
        $("#display_albums_area").empty();
        //if (networkbit != 'none') {
        $.getJSON(urlz, function(json) {
            var key, count = 0;
            if (!json['posts']) {
                var data = "No Records";
                $('#albumscatiddiv').append('<input type="hidden" name="catid" id="catid" value="' + catId + '" />');
                $('#albumscatiddiv1').append('<input type="hidden" name="catid" id="catid" value="' + catId + '" />');
                $('#display_albums_area').append(data);
            } else {
                // alert(json['posts'])
                $.each(json['posts'], function(key, value) {
                    count++;
                });

                $('#albumscatiddiv').append('<input type="hidden" name="catid" id="catid" value="' + catId + '" />');
                $('#albumscatiddiv1').append('<input type="hidden" name="catid" id="catid" value="' + catId + '" />');

                for (var i = 0; i < count; i++) {
                    var countofimages = json['posts'][i]['count'];
                    var AlbumNameDi = json['posts'][i]['albumname'];
                    $('#display_albums_area').append('<a href = "manage_albums_images.html"><div style="float: left;margin: 5px;text-align: center;width: 90px;"  onclick="view_album_images(' + json['posts'][i]['almbumid'] + ',\'' + AlbumNameDi + '\',\'' + sectionname + '\',' + catId + ')"><i class="fa fa-folder-o" style=" color: #4d7ab9;font-size: 90px;"></i><p align="center" style="color:#000;font-size:13px">' + json['posts'][i]['albumname'] + '(' + countofimages + ')</p><div></a>');



                }
            }
            myApp.hidePreloader();
        }).done(function() {
            myApp.hidePreloader();
        }).fail(function() {
            console.log("error");
            myApp.hidePreloader();
            //navigator.notification.alert("please check your network connection", "Network error");
            //myApp.alert("please check your network connection")
        });

        $('.placeUploadOptionPopUp').html('<a class="open-about" href="#" onclick=" OpenPopUp(' + catId + ',\'' + sectionname + '\');"><i class="fa fa-plus-circle fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i></a>');
        $('.placeUploadOptionPopUp1').html('<a class="open-about" href="#" onclick=" CreateFolder(' + catId + ',\'' + sectionname + '\');"><span class="ltext">Create Folder</span><i class="fa fa-folder-o fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i></a>');
        $('.placeUploadOptionPopUp2').html('<span class="ltext">Take Picture</span><i class="fa fa-camera fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i><input type="button" id="cameraCapture" onclick="ImagePick();" class="Cambutton"/><div><input  type="hidden" name="camera_catId" id="camera_catId" value="' + catId + '" /><input type="hidden" name="camera_customerId" id="camera_customerId" value="' + storedData1['userId'] + '" /><input type="hidden" name="camera_sectionname" id="camera_sectionname" value="' + selectId + '" /></div>');
        //$('.placeUploadOptionPopUp3').html('<a class="open-about" href="#" onclick=" CreateFolder('+catId+',\''+sectionname+'\');"><img src="img/ga.png" style="box-shadow: 0px 5px 8px rgb(204, 204, 204); border-radius: 52%;height:35px;width:35px"></a>');
        $('.placeUploadOptionPopUp3').html('<form id="CreateUploadImage_form" enctype="multipart/form-data"><div class="image-upload"><label for="file-input"><span class="ltext">Upload File</span><i class="fa fa-upload fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i></label><input id="file-input" type="file" name="myfile" id="file" multiple="true" accepts="image/*" required onchange="CreateUploadImage(' + catId + ',1)"/></div><input type="hidden" name="catId" id="catId" value="' + catId + '" /><input type="hidden" name="customerId" id="customerId" value="' + storedData1['userId'] + '" /><input type="hidden" name="sectionname" id="sectionname" value="' + selectId + '" />' +
            '<input type="hidden" name="option" id="option" value="UploadBrowseImage" />' + '</form>');
        $('.placeUploadOptionPopUp4').html('<span class="ltext"> Record Video  </span><i class="fa fa-video-camera fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i><input type="button" id="cameraCapture" onclick="videocapt(0);" class="Cambutton"/><div><input  type="hidden" name="camera_catId" id="camera_catId" value="' + catId + '" /><input type="hidden" name="camera_customerId" id="camera_customerId" value="' + storedData1['userId'] + '" /><input type="hidden" name="camera_sectionname" id="camera_sectionname" value="' + selectId + '" /></div>');
        /*} else {
                myApp.hidePreloader();
                //navigator.notification.alert("please check your network connection", "Network error");
        }*/
        $('.placeUploadOptionPopUp1').css("display", "none");
        $('.placeUploadOptionPopUp2').css("display", "none");
        $('.placeUploadOptionPopUp3').css("display", "none");
        $('.placeUploadOptionPopUp4').css("display", "none");
    }, 1000);
    clickbit = 0;

}




function view_album_images(id, tileAlbum, SectionName, catId) {
    $('#self_imgs').css("-webkit-filter", "blur(0px)");
    //$('#self_img').empty();
    //document.getElementById("self_img").innerHTML = "";
    popopener = 0;
    TAlbumUpSImgId = id;
    TtileAlbums = tileAlbum;
    pageIndicator = 1;
    albumtempId = id;
    Albumtitle = tileAlbum;
    secName = SectionName;
    albumCatId = catId;
    page_parameter = 3;
    var Iarray = [];
    var storedData1 = myApp.formGetData('logged_userId');
    setTimeout(function() {
        $('#albumid_up12').val(id);
        $('#albumid_up123').val(id);
        $('#albumid').val(id);
        //var storedData1 = myApp.formGetData('logged_userId');
        // var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=scanneditems&columns=*&condition=userid="+storedData1['userId']+" AND albumid="+id;
        //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccessInManage, function (error) {
        //        alert(error)
        //});
        var url = "https://www.healthrecordspro.com/wsplus.php?type=scanneditems&format=json&userid=" + storedData1['userId'] + "&albumid=" + id;

        $.getJSON(url, function(json) {
            // console.log(json['posts']);
            $.getJSON(url, function(json) {
                var key, count = 0;
                for (key in json['posts']) {
                    if (json['posts'].hasOwnProperty(key)) {
                        count++;
                    }
                }
                var Nurl = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=scannedcategories&columns=*&condition=id=" + catId;
                var link = '';
                $.getJSON(Nurl, function(json) {
                    link = json['posts'][0]['name'];
                    $('#AlbmNameDisp').empty();
                    //$('#self_img').empty();
                    link = link.concat('->');
                    link = link.concat(tileAlbum);
                    $('#AlbmNameDisp').append(link);
                });


                if (json['posts'] == 0) {
                    var data = "No Records";
                    $('#self_imgs').append(data);
                } else {
                    $('#self_imgs').empty();
                    for (var i = 0; i < count; i++) {

                        var x = json['posts'][i]['id'] + ',' + id;
                        if (json['posts'][i]['isVideo'] == '0') {
                            Imagename = json['posts'][i]['image'];
                            //var imgnme = str.split(".");
                            var Istatuz = 0;

                            Istatuz = Iarray.indexOf(json['posts'][i]['image']);
                            ////
                            var Ipath = localStorage.getItem("path");
                            if (Istatuz != -1) {
                                var pathz = 'https://healthrecordspro.com/upload/' + Imagename
                                ////
                                // $('#self_img').append('<li style="margin-bottom:10px"><a href="image_description_page.html" onclick="ImageDescription(\''+json['posts'][i]['id']+'\','+id+',\''+tileAlbum+'\',\''+SectionName+'\','+catId+');" style="color:black;margin-right: -13px; margin-top: -30px;"><i class="fa fa-info-circle" style="color:green" ></i></a><img src="'+Ipath+json['posts'][i]['image']+'"  onclick="image_popup_display(\''+json['posts'][i]['id']+'\',\''+json['posts'][i]['albumid']+'\')"></li>');
                                $('#self_imgs').append('<ul style="background-color: #FFFFFF"><li style="background-color:#FFFFFF" ><div class="card demo-card-header-pic"> <div style="background-image:url(\'' + Ipath + json['posts'][i]['image'] + '\')" onclick="image_popup_display(\'' + json['posts'][i]['id'] + '\',\'' + json['posts'][i]['albumid'] + '\')" valign="bottom" class="card-header color-white no-border"></div><div class="card-content"><div class="card-content-inner">  <p class="color-gray">' + json['posts'][i]['dateTime'] + '</p></div></div><div class="card-footer"> <div class="list-block" style="width: 100%;"><ul style="background-color:#FFFFFF" id="sharing_options' + i + '"></ul></div></ul>');
                                $('#sharing_options' + i).append('<li><div class="item-content" style="font-size:10px;"><div class="item-media"></div><div class="item-inner" style="text-align: center;"><div class="item-title label" style="width: 20%;" onclick="window.plugins.socialsharing.share(null, null,\'' + pathz + '\', null)"><i class="fa fa-share-alt-square"></i><p style="margin-top: -5px;">share</p></div><div class="item-input"><div class="item-title" onclick="MoveTheImageAlbums(' + json['posts'][i]['id'] + ',' + json['posts'][i]['albumid'] + ',' + albumCatId + ')"><i class="fa fa-exchange"></i><p>Move</p></div></div><div class="item-input"><div id="loadingmessage4" style="display:none"><img src="img/default.gif" align="middle"/></div><div class="item-title" onClick="downloadImage1(\'' + pathz + '\',\'HRP\',\'' + json['posts'][i]['image'] + '\')" style="color: black;"><i class="fa fa-download"></i><p>Download</p></div></div><div class="item-input"><div class="item-title" onClick="DeleteImage(' + json['posts'][i]['id'] + ',' + albumCatId + ');"><i class="fa fa-trash"></i><p>Delete</p></div></div></div></div></li>');
                                Istatus = 0;
                            } else {
                                var path = 'https://healthrecordspro.com/upload/' + Imagename

                                $('#self_imgs').append('<ul style="background-color: #FFFFFF"><li style="background-color:#FFFFFF" ><div class="card demo-card-header-pic"> <div style="background-image:url(' + path + ')" onclick="image_popup_display(\'' + json['posts'][i]['id'] + '\',\'' + json['posts'][i]['albumid'] + '\')" valign="bottom" class="card-header color-white no-border"></div><div class="card-content"><div class="card-content-inner">  <p class="color-gray">' + json['posts'][i]['dateTime'] + '</p></div></div><div class="card-footer"><div class="list-block" style="width: 100%;"><ul style="background-color:#FFFFFF" id="sharing_options' + i + '"></ul></div></ul>');
                                $('#sharing_options' + i).append('<li><div class="item-content" style="font-size:10px;"><div class="item-media"></div><div class="item-inner" style="text-align: center;"><div class="item-title label" style="width: 20%;" onclick="window.plugins.socialsharing.share(null, null,\'' + path + '\', null)"><i class="fa fa-share-alt-square"></i><p style = "margin-top: -5px;">share</p></div><div class="item-input"><div class="item-title" onclick="MoveTheImageAlbums(' + json['posts'][i]['id'] + ',' + json['posts'][i]['albumid'] + ',' + albumCatId + ')"><i class="fa fa-exchange"></i><p>Move</p></div></div><div class="item-input"><div id="loadingmessage4" style="display:none"><img src="img/default.gif" align="middle"/></div><div class="item-title" onClick="downloadImage1(\'' + path + '\',\'HRP\',\'' + json['posts'][i]['image'] + '\')" style="color: black;"><i class="fa fa-download"></i><p>Download</p></div></div><div class="item-input"><div class="item-title" onClick="DeleteImage(' + json['posts'][i]['id'] + ',' + albumCatId + ');"><i class="fa fa-trash"></i><p>Delete</p></div></div></div></div></li>');
                                //  $('#self_img').append('<li style="margin-bottom:10px"><a href="image_description_page.html" onclick="ImageDescription(\''+json['posts'][i]['id']+'\','+id+',\''+tileAlbum+'\',\''+SectionName+'\','+catId+');" style="color:black;margin-right: -13px; margin-top: -23px;"><i class="fa fa-info-circle" style="color:red"></i></a><img src="https://healthrecordspro.com/upload/'+Imagename
                                //  +'"  onclick="image_popup_display(\''+json['posts'][i]['id']+'\',\''+json['posts'][i]['albumid']+'\')"></li>');

                                //      // $('#self_img').append('<li><a href="image_description_page.html" onclick="ImageDescription(\''+json['posts'][i]['id']+'\','+id+',\''+tileAlbum+'\',\''+SectionName+'\','+catId+');" style="color:black;margin-right: -13px; margin-top: -23px;"><i class="fa fa-info-circle" ></i></a><img src="img/no-image.gif" style="width:65px;hieght:65px"  onclick="image_popup_display(\''+json['posts'][i]['id']+'\',\''+json['posts'][i]['albumid']+'\')"/></li>');
                            }

                        } else {
                            var Istatuz = 0;

                            Istatuz = Iarray.indexOf(json['posts'][i]['image']);

                            if (Istatuz != -1) {

                                var imgpath = "img/play-icon.png"
                                var path = 'https://healthrecordspro.com/upload/' + json['posts'][i]['image']
                                $('#self_imgs').append('<ul style="background-color: #FFFFFF"><li style="background-color:#FFFFFF" ><div class="card demo-card-header-pic"> <div style="background-image:url(' + imgpath + ')" onclick="playVideo(\'' + json['posts'][i]['image'] + '\')" valign="bottom" class="card-header color-white no-border"></div><div class="card-content"><div class="card-content-inner">  <p class="color-gray">' + json['posts'][i]['dateTime'] + '</p></div></div><div class="card-footer"><div class="list-block" style="width: 100%;"><ul style="background-color:#FFFFFF" id="sharing_options' + i + '"></ul></div></ul>');
                                $('#sharing_options' + i).append('<li><div class="item-content" style="font-size:10px;"><div class="item-media"></div><div class="item-inner" style="text-align: center;"><div class="item-title label" style="width: 20%;" onclick="window.plugins.socialsharing.share(null, null,\'' + path + '\', null)"><i class="fa fa-share-alt-square"></i><p style = "margin-top: -5px;">share</p></div><div class="item-input"><div class="item-title" onclick="MoveTheImageAlbums(' + json['posts'][i]['id'] + ',' + json['posts'][i]['albumid'] + ',' + albumCatId + ')"><i class="fa fa-exchange"></i><p>Move</p></div></div><div class="item-input"><div id="loadingmessage4" style="display:none"><img src="img/default.gif" align="middle"/></div><div class="item-title" onClick="downloadImage1(\'' + path + '\',\'HRP\',\'' + json['posts'][i]['image'] + '\')" style="color: black;"><i class="fa fa-download"></i><p>Download</p></div></div><div class="item-input"><div class="item-title" onClick="DeleteImage(' + json['posts'][i]['id'] + ',' + albumCatId + ');"><i class="fa fa-trash"></i><p>Delete</p></div></div></div></div></li>');
                            } else {
                                var imgpath = "img/play-icon.png"
                                var path = 'https://healthrecordspro.com/upload/' + json['posts'][i]['image']
                                $('#self_imgs').append('<ul style="background-color: #FFFFFF"><li style="background-color:#FFFFFF" ><div class="card demo-card-header-pic"> <div style="background-image:url(' + imgpath + ')" onclick="playVideo(\'' + json['posts'][i]['image'] + '\')" valign="bottom" class="card-header color-white no-border"></div><div class="card-content"><div class="card-content-inner">  <p class="color-gray">' + json['posts'][i]['dateTime'] + '</p></div></div><div class="card-footer"><div class="list-block" style="width: 100%;"><ul style="background-color:#FFFFFF" id="sharing_options' + i + '"></ul></div></ul>');
                                $('#sharing_options' + i).append('<li><div class="item-content" style="font-size:10px;"><div class="item-media"></div><div class="item-inner" style="text-align: center;"><div class="item-title label" style="width: 20%;" onclick="window.plugins.socialsharing.share(null, null,\'' + path + '\', null)"><i class="fa fa-share-alt-square"></i><p style = "margin-top: -5px;">share</p></div><div class="item-input"><div class="item-title" onclick="MoveTheImageAlbums(' + json['posts'][i]['id'] + ',' + json['posts'][i]['albumid'] + ',' + albumCatId + ')"><i class="fa fa-exchange"></i><p>Move</p></div></div><div class="item-input"><div id="loadingmessage4" style="display:none"><img src="img/default.gif" align="middle"/></div><div class="item-title" onClick="downloadImage1(\'' + path + '\',\'HRP\',\'' + json['posts'][i]['image'] + '\')" style="color: black;"><i class="fa fa-download"></i><p>Download</p></div></div><div class="item-input"><div class="item-title" onClick="DeleteImage(' + json['posts'][i]['id'] + ',' + albumCatId + ');"><i class="fa fa-trash"></i><p>Delete</p></div></div></div></div></li>');
                            }
                        }
                    }
                }
            });
        });
        $('.placeSingleImageup').html('<a class="open-about" href="#" onclick=" OpenPopUpSingleImageUpInAlbm(' + id + ',\'' + tileAlbum + '\');"><i class="fa fa-plus-circle fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></a>');
        $('.placeSingleImageup1').html('<a class="open-about" href="#" onclick="RenameFolder(' + id + ',\'' + tileAlbum + '\');"><span class="ltext">Rename Folder</span><i class="fa fa-pencil fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i></a>');
        $('.placeSingleImageup2').html('<a class="open-about" href="#"  onclick="DeleteAlbums(' + id + ');"><span class="ltext">Delete Folder</span><i class="fa fa-times fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i></a><input type="hidden" name="delete_album_id" id="delete_album_id" value="' + id + '" /><input type="hidden" name="d_a_customerId" id="d_a_customerId" value="' + storedData1['userId'] + '" />');
        $('.placeSingleImageup3').html('<span class="ltext">Take Picture</span><i class="fa fa-camera fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i><input type="button" id="cameraCapture" onclick="ImagePick1(' + id + ');" class="Cambutton"/><div><input  type="hidden" name="camera_albumid" id="camera_albumid" value="' + id + '" /><input type="hidden" name="camera_customerId" id="camera_customerId" value="' + storedData1['userId'] + '" /></div>');
        $('.placeSingleImageup4').html('<form id="CreateUploadSingleImage_form" enctype="multipart/form-data"><div class="image-upload"><label for="file"><span class="ltext">Upload File</span><i class="fa fa-upload fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i>  </label><input type="file" name="myfile" id="file" multiple="true" accepts="image/*" required onchange="CreateSingleUploadImage(' + id + ')"/></div><input type="hidden" name="albumid" id="albumid" value="' + id + '" /><input type="hidden" name="customerId" id="customerId" value="' + storedData1['userId'] + '" /><input type="hidden" name="option" id="option" value="UploadBrowseImage" /></form>');
        $('.placeSingleImageup5').html('<span class="ltext">Record Video</span><i class="fa fa-video-camera fa-2x" style=" color: #4d7ab9;font-size: 40px;height:50px;"></i><input type="button" id="cameraCapture" onclick="videocapt(1);" class="Cambutton"/><div><input  type="hidden" name="camera_albumid" id="camera_albumid" value="' + id + '" /><input type="hidden" name="camera_customerId" id="camera_customerId" value="' + storedData1['userId'] + '" /></div>');
        $('.placeSingleImageup1').css("display", "none");
        $('.placeSingleImageup2').css("display", "none");
        $('.placeSingleImageup3').css("display", "none");
        $('.placeSingleImageup4').css("display", "none");
        $('.placeSingleImageup5').css("display", "none");


    }, 1800);
}



function MoveTheImageAlbums(imgId, albId, catId) {
    var popupHTML = '<div class="popup">' +
        '<div class="content-block">' +
        '<div class="content-block-title" style="font-size:16px;">Move To Folder <span  class="close-popup" style="color:red;margin-left:10%">   Close</span><br><hr></div><div id="display_albums_pop1" style=" padding-left: 10px;text-align: center;"></div></div>' +

        '<p><a href="#" style="color: black;"><i class="fa fa-times-circle" style="font-size: 23px;"></i></a></p>' +
        '</div>' +
        '</div>'
    myApp.popup(popupHTML);
    var storedData1 = myApp.formGetData('logged_userId');
    // var url=  "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=scannedcategories&limit=250&columns=id,name&condition=1";
    var url = "https://www.healthrecordspro.com/wsplus.php?type=moveallmediaalbums&format=json&customerid=" + storedData1['userId'];

    var albumsTitles = [];
    jQuery.ajaxSetup({
        async: false
    });
    $.getJSON(url, function(json) {
        var count = 0;
        var temp = ""
        var name = "0"
        $.each(json['posts'], function(key, value) {
            name = value['name'];
            if (name != temp) {
                var data = "<ul style='list-style: outside none none;'><li id='titles_display1'><div class='item-content'><div class='item-inner'><div class='item-title' style='color: #000000;font-weight: bold;'>" + value['name'].toUpperCase() + "</div></div></div></li><div class='row' id='allalbums_dis_" + value['categoryId'] + "' style of ='float: left;margin: 5px;text-align: center;width: 96%;'></ul>"
                temp = value['name'];
                $('#display_albums_pop1').append(data);
            }
            $('#allalbums_dis_' + value['categoryId']).append('<div class="col-33 tablet-33" ><a href="#" class="item-link" onclick="Move_img_to_album(' + imgId + ',' + value['id'] + ',' + value['categoryId'] + ')" ><i class="fa fa-folder-o" style=" color: #4d7ab9;font-size: 50px;"></i><div style="color:#000;font-size:13px">' + value['title'] + '</div></a></div>');


        });

    });
}




function downloadImage1(URL, Folder_Name, File_Name) {
    // console.log(URL);
    if (URL == null && Folder_Name == null && File_Name == null) {
        return;
    } else {
        //checking Internet connection availablity
        var networkState = navigator.connection.type;
        if (networkState == Connection.NONE) {
            return;
        } else {
            downloadImagess(URL, Folder_Name, File_Name); //If available download function call
        }
    }
}



function downloadImagess(URL, Folder_Name, File_Name) {
    //step to request a file system

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);

    function fileSystemSuccess(fileSystem) {
        //alert(fileSystem.root.fullPath);
        //alert(fileSystem.root.toURL());
        var download_link = encodeURI(URL);
        ext = download_link.substr(download_link.lastIndexOf('.') + 1); //Get extension of URL

        var directoryEntry = fileSystem.root;;
        // alert(directoryEntry);// to get root path of directory
        directoryEntry.getDirectory(Folder_Name, {
            create: true,
            exclusive: false
        }, onDirectorySuccess, onDirectoryFail); // creating folder in sdcard
        var rootdir = fileSystem.root.toURL();

        var fp = rootdir;
        //  alert(rootdir);
        // Returns Fulpath of local directory


        fp = rootdir + Folder_Name + "/" + File_Name // fullpath and name of the file which we want to give
        // download function call
        filetransfer(download_link, fp);
        //alert(fp);
    }

    function onDirectorySuccess(parent) {
        // Directory created successfuly
        //alert(parent);
    }

    function onDirectoryFail(error) {
        //Error while creating directory
        alert("Unable to create new directory: " + error.code);
    }

    function fileSystemFail(evt) {
        //Unable to access file system
        alert(evt.target.error.code);
    }
}

function filetransfer(download_link, fp) {
    console.log(download_link + "----" + fp);
    var fileTransfer = new FileTransfer();
    //$('#loadingmessage4').show();
    // File download function with URL and local path
    fileTransfer.download(download_link, fp,
        function(entry) {
            var album = 'HRPlus';
            //cordova.plugins.imagesaver.saveImageToGallery(entry.toURL(), album, function(libraryItem) { myApp.alert("successfully downloaded") }, function(err) {});
            cordova.plugins.imagesaver.saveImageToGallery(entry.toURL(), function() {
                /* myApp.alert("successfully downloaded") */
            }, function() {
                myApp.alert("Failed")
            });
            // alert("download complete: " + entry.fullPath);
            //console.log(fp);
            console.log(entry.toURL());
            cordova.plugins.MediaScannerPlugin.scanFile(fp, function(msg) {
                    myApp.alert("Download Completed");
                    console.log(fp);
                },
                function(err) {
                    alert("Fail ScanMedia: " + err);
                });
            myApp.hidePreloader();

        },
        function(error) {
            myApp.alert("download error source " + error.source);

        }
    );
}


function DeleteImage(id, albumId) {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=scanneditems&columns=&condition=id=" + id;
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            view_album_images(albumtempId, Albumtitle, secName, albumCatId);

        });
    });
}



function Move_img_to_album(imageId, albumId, catId) {
    var storedData1 = myApp.formGetData('logged_userId');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=scanneditems&columns=albumid=" + albumId + "&condition=id=" + imageId;
    myApp.showPreloader();
    $.getJSON(url, function(json) {
        if (json['posts'][0]) {
            myApp.alert("Image Moved ", 'Success');
            $('.popup').remove();
            $('.popup-overlay').remove();
            $('#self_imgs').empty();
            myApp.hidePreloader();
            mainView.router.loadPage('manage_albums_images.html');
            var albumIdz = document.getElementById('camera_albumid').value;
            view_album_images(albumIdz, Albumtitle);
        } else {
            myApp.alert("Image not moved", 'Failure');
        }
    });
}

function DeleteAlbums(abmId) {

    var storedData1 = myApp.formGetData('logged_userId');
    var categoryiId = [];

    myApp.confirm('Are you sure', 'Delete');
    $(".modal-button-bold").click(function() {
        var url3 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=scannedalbums&columns=*&condition=id=" + abmId;
        $.getJSON(url3, function(json) {
            categoryiId.push(json['posts'][0]['categoryId']);
        });

        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=scannedalbums&columns=&condition=id=" + abmId;

        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=scanneditems&columns=&condition=albumid=" + abmId;
        $.getJSON(url1, function(json) {

        });
        $.getJSON(url, function(json) {
            $.getJSON(url1, function(json) {
                myApp.hidePreloader();

                mainView.router.loadPage('manage_albums.html');
                $('.popup').remove();
                $('.popup-overlay').remove();
                manage_albumsz(categoryiId[0]);
            });
        });

    });
}

function OpenPopUpSingleImageUpInAlbm(AlbumUpSImgId, tileAlbums) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (popopener == 0) {
        $('.placeSingleImageup1').css("display", "block")
        $('.placeSingleImageup2').css("display", "block")
        $('.placeSingleImageup3').css("display", "block")
        $('.placeSingleImageup4').css("display", "block")
        $('.placeSingleImageup5').css("display", "block")
        $('#self_imgs').css("-webkit-filter", "blur(3px)");
        setTimeout(function() {
            $(".page-content").attr("onclick", "closepopup1()")
        }, 1500)
        popopener = 1;
    } else {
        $('.placeSingleImageup1').css("display", "none");
        $('.placeSingleImageup2').css("display", "none");
        $('.placeSingleImageup3').css("display", "none");
        $('.placeSingleImageup4').css("display", "none");
        $('.placeSingleImageup5').css("display", "none");
        popopener = 0;
        $('#self_imgs').css("-webkit-filter", "blur(0px)");
        $(".page-content").attr("onclick", "")
    }
    myApp.showPreloader();
    var popupHTML = '<div class="popup popUpDisplayOptions remove-on-close modal-in" id="singleI">' +
        '<div class="content-block" style = "margin-top:5px">' +
        '<p style = "width:100%;text-align:right"><a href="#" class="close-popup"><img src="img/Sign.svg.png" style="height:18px;width:18px"/></a></p>' +
        '<div class="list-block popup-self" style="margin-top:0;padding:0"><h2 style="border-bottom: 1px solid #ddd;margin-top:0">New</h2>' +
        '<div id="loadingmessage1" style="display:none;text-align:center"><img src="img/default.gif" align="middle"/></div>' +
        '<div style="text-align: center; width: 20%; float:left;margin-right:5%"  >' +
        '<a href = "javascript:void(0);" class="close-popup" onclick="RenameFolder(' + AlbumUpSImgId + ',\'' + tileAlbums + '\');">' +
        '<i class="fa fa-pencil fa-lg" style=" color: #000;font-size: 40px;height:50px;"></i>' +
        '<span align="center" style="color:#000;font-size:13px;display: block;">Rename folder</span>' +
        '</a>' +
        '</div>' +
        '<div style="text-align: center; width: 20%; float:left;margin-right:5%"  >' +
        '<form id="CreateUploadSingleImage_form" enctype="multipart/form-data">' +
        '<ul style="background-color:#FFFFFF">' +
        '<li>' +
        '<div class="image-upload">' +
        '<label for="file">' +
        '<i class="fa fa-upload fa-2x" style=" color: #000;font-size: 40px;height:50px;"></i>' +
        '<span align="center" style="color:#000;font-size:13px;display:block;">Upload image or video </span>' +
        '</label>' +
        '<input type="file" name="myfile" id="file" multiple="true" accepts="image/*" required onchange="CreateSingleUploadImage(' + AlbumUpSImgId + ')"/>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '<div class="row" >' +
        '<input type="hidden" name="albumid" id="albumid" value="' + AlbumUpSImgId + '" />' +
        '<input type="hidden" name="customerId" id="customerId" value="' + storedData1['userId'] + '" />' +
        '<input type="hidden" name="option" id="option" value="UploadBrowseImage" />' +
        '</div>' +
        '</form>' +
        '</div>' +
        '<div style="text-align: center; width: 20%; float:left;margin-right:5%"  >' +
        '<div class="list-block">' +
        '<ul style="background-color:#FFFFFF">' +
        '<li id="Cambutton_button">' +
        '<i class="fa fa-camera fa-2x" style=" color: #000;font-size: 40px;height:50px;"></i>' +
        '<input type="button" id="cameraCapture" onclick="capturePhoto1(' + AlbumUpSImgId + ');" class="Cambutton"/>' +
        '<span align="center" style="color:#000;font-size:13px;display:block;">Capture image </span>' +
        '</li>' +
        '<div class="row" >' +
        '<div class="row" >' +
        '<input type="hidden" name="camera_albumid" id="camera_albumid" value="' + AlbumUpSImgId + '" />' +
        '<input type="hidden" name="camera_customerId" id="camera_customerId" value="' + storedData1['userId'] + '" />' +
        '</div>' +
        '<div class="col-5"></div>' +
        '<div class="col-5"></div>' +
        '<div class="col-30"></div>' +
        '</div>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div style="text-align: center; width: 20%; float:left;margin-right:5%"  >' +
        '<div class="list-block" style=" margin-top: 0px;">' +
        '<ul style="background-color:#FFFFFF">' +
        '<li>' +
        '<a style="color:black;margin-right: -13px; margin-top: -23px;" onclick="DeleteAlbums(' + AlbumUpSImgId + ');" href="#"><i class="fa fa-times-circle" style="font-size: 40px;height:50px;"></i></a>' +
        '<span align="center" style="color:#000;font-size:13px;display:block;">Delete Folder</span>' +
        '</li>' +
        '<div class="row" >' +
        '<div class="row" >' +
        '<input type="hidden" name="delete_album_id" id="delete_album_id" value="' + AlbumUpSImgId + '" />' +
        '<input type="hidden" name="d_a_customerId" id="d_a_customerId" value="' + storedData1['userId'] + '" />' +
        '</div>' +
        '<div class="col-5"></div>' +
        '<div class="col-5"></div>' +
        '<div class="col-30"></div>' +
        '</div>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<p><a href="#" class="close-popup">Close me</a></p>' +
        '</div>' +
        '</div>';
    //  myApp.popup(popupHTML);
    myApp.hidePreloader();
}


function RenameFolder(albumId, tileAlbums) {

    var storedData1 = myApp.formGetData('logged_userId');

    myApp.showPreloader();
    myApp.modal({
        title: 'Change album name',
        text: '',
        afterText: '<input type="text" class="modal-text-input" value="' + tileAlbums + '"/>',
        buttons: [{
                text: 'OK',
                onClick: function() {
                    var title = $('.modal-text-input').val();
                    var url = 'https://healthrecordspro.com/wsplus.php?type=update&format=json&table=scannedalbums&columns=title=%27' + title + '%27&condition=id=' + albumId;

                    setTimeout(function() {
                        $.getJSON(url, function(json) {

                            mainView.router.loadPage('manage_albums.html');
                            manage_albumsz(catId, selectId);
                        });
                    }, 2000);
                }
            },
            {
                text: 'Cancel',
                onClick: function() {}
            }
        ]
    });
    myApp.hidePreloader();

}



function ImagePick1(id) {
    //myApp.alert('Error: ' + id);
    var buttons = [{
            text: 'Camera',
            bold: true,
            onClick: function() {

                capturePhoto1(id);
            }
        },
        {
            text: 'Gallery',
            bold: true,
            color: 'green',
            onClick: function() {
                window.imagePicker.getPictures(
                    function(results) {
                        for (var i = 0; i < results.length; i++) {
                            console.log('Image URI: ' + results[i]);
                            onCapturePhoto1(results[i]);

                        }
                    },
                    function(error) {
                        console.log('Error: ' + error);
                        myApp.alert('Error: ' + error);
                    }, {
                        maximumImagesCount: 10,
                        width: 800
                    }
                )
            }
        },
        {
            text: 'Cancel',
            color: '#FF0000'
        },
    ];
    myApp.actions(buttons);

}

var popopener = 0;

function OpenPopUp(catId, selectId) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (popopener === 0) {
        $('#ctx').css("-webkit-filter", "blur(2px)")
        $('.placeUploadOptionPopUp1').css("display", "block");
        $('.placeUploadOptionPopUp2').css("display", "block");
        $('.placeUploadOptionPopUp3').css("display", "block");
        $('.placeUploadOptionPopUp4').css("display", "block");
        $('.placeUploadOptionPopUp1').css("display", "block");
        popopener = 1;
        setTimeout(function() {
            $(".page-content").attr("onclick", "closepopup()")
        }, 1000)

    } else {
        $('#ctx').css("-webkit-filter", "blur(0px)")
        $('.placeUploadOptionPopUp1').css("display", "none");
        $('.placeUploadOptionPopUp2').css("display", "none");
        $('.placeUploadOptionPopUp3').css("display", "none");
        $('.placeUploadOptionPopUp4').css("display", "none");
        $('.placeUploadOptionPopUp1').css("display", "none");
        $(".page-content").attr("onclick", "")
        popopener = 0;
    }

    var popupHTML = '<div class="popup popUpDisplayOptions" id="albumI">' +
        '<div class="content-block" style="margin:9px">' +
        '<p style = "width:100%;text-align:right"><a href="#" class="close-popup"><img src="img/Sign.svg.png" style="height:18px;width:18px"/></a></p>' +
        '<div class="list-block popup-self" style="margin-top:0;padding:0;width:100%;"><h2 style="border-bottom: 1px solid #ddd;margin-top:0">New</h2>' +
        '<div id="loadingmessage1" style="display:none;text-align:center;"><img src="img/default.gif" align="middle"/></div>' +
        '<div style="text-align: center; width: 28%; float:left;margin-right:5%"  >' +
        '<a href = "javascript:void(0);"class="close-popup" onclick="CreateFolder(' + catId + ',\'' + selectId + '\');">' +
        '<i class="fa fa-folder-o" style=" color: #000;font-size: 40px;height:50px;"></i>' +
        '<span align="center" style="color:#000;font-size:13px;display: block;">Create Folder</span>' +
        '</a>' +
        '</div>' +
        '<div style="text-align: center; width: 28%; float:left;margin-right:5%"  >' +
        '<form id="CreateUploadImage_form" enctype="multipart/form-data">' +
        '<ul style="background-color:#FFFFFF">' +
        '<li>' +
        '<div class="image-upload">' +
        '<label for="file">' +
        '<i class="fa fa-upload fa-2x" style=" color: #000;font-size: 40px;height:50px;"></i>' +
        '<span align="center" style="color:#000;font-size:13px;display:block;">Upload Image</span>' +
        '</label>' +
        '<input type="file" name="myfile" id="file" multiple="true" accepts="image/*" required onchange="CreateUploadImage(' + catId + ')"/>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '<div class="row" >' +
        '<input type="hidden" name="catId" id="catId" value="' + catId + '" />' +
        '<input type="hidden" name="customerId" id="customerId" value="' + Checklogin() + '" />' +
        '<input type="hidden" name="option" id="option" value="UploadBrowseImage" />' +
        '<input type="hidden" name="sectionname" id="sectionname" value="' + selectId + '" />' +
        '</div>' +
        '</form>' +
        '</div>' +
        '<div style="text-align: center; width: 28%; float:left;margin-right:5%"  >' +
        '<div class="list-block">' +
        '<ul style="background-color:#FFFFFF">' +
        '<li id="Cambutton_button">' +
        '<i class="fa fa-camera fa-2x" style=" color: #000;font-size: 40px;height:50px;"></i>' +
        '<input type="button" id="cameraCapture" onclick="capturePhoto();" class="Cambutton"/>' +
        '<span align="center" style="color:#000;font-size:13px;display: block;">Capture Image</span>' +
        '</li>' +
        '<div class="row" >' +
        '<div class="row" >' +
        '<input type="hidden" name="camera_catId" id="camera_catId" value="' + catId + '" />' +
        '<input type="hidden" name="camera_customerId" id="camera_customerId" value="' + storedData1['userId'] + '" />' +
        '<input type="hidden" name="camera_sectionname" id="camera_sectionname" value="' + selectId + '" />' +
        '</div>' +
        '<div class="col-5"></div>' +
        '<div class="col-5"></div>' +
        '<div class="col-30"></div>' +
        '</div>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    //myApp.popup(popupHTML);

}



function CreateFolder(catId, selectId) {
    FolderCbit = 1;
    if (clickbit == 0) {
        myApp.showPreloader();
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.hidePreloader();
        clickbit = 1;
        setTimeout(function() {
            $.ajax({
                type: 'POST',
                url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveUpload',
                async: false,
                data: "catId=" + catId + "&customerId=" + storedData1['userId'] + "&option=CountNxtId",
                success: function(count) {


                    // myApp.alert(data);
                    myApp.modal({
                        title: 'Folder Name',
                        text: '',
                        afterText: '<input type="text" class="modal-text-input" value="' + selectId + ' ' + count + '"/>',
                        buttons: [{
                                text: 'OK',
                                onClick: function() {
                                    $.ajax({
                                        type: 'POST',
                                        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveUpload',
                                        data: "foldername=" + $('.modal-text-input').val() + "&catId=" + catId + "&customerId=" + storedData1['userId'] + "&option=CreateFolder",
                                        success: function(data) {
                                            // myApp.alert(data);

                                            mainView.router.loadPage('manage_albums.html');
                                            manage_albumsz(catId, selectId);


                                        }
                                    });
                                }
                            },
                            {
                                text: 'Cancel',
                                onClick: function() {
                                    // myApp.alert&#40;'You clicked Cancel!'&#41;
                                    clickbit = 0;
                                }
                            }
                        ]
                    });
                }
            });

        }, 3000);
    }
    FolderCbit = 0;
}


//////////////////////////------------------------------ End Self monitoring charts ------------------------------------------------------------



//////////////////////////------------------------------ emergency_contact ------------------------------------------------------------
function getEmergencyContactData() {

    var storedData1 = myApp.formGetData('logged_userId');
    console.log(storedData1['userId'])
    page_parameter = 1;
    tempPage = 6;
    // var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=emergency_contacts&columns=*&condition=user_id=" + storedData1['userId'];
    var storedData1 = myApp.formGetData('logged_userId');
    $.ajax({
        type: 'GET',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/listEmergencyContacts",
     
     data:{
        userId : storedData1['userId']
     },
        headers: {
            "token": localStorage.BguhToken
        },
        success: function(json) {
            console.log(json)

        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }
        $('#emergencycontact').html('');
        if (json['posts'] == 0) {
            var data = "No Records ";
            $('#emergencycontact').append(data);
        } else {
            for (i = 0; i < json['response']['emergency_contacts'].length; i++) {

                var data = "<ul id='emergency_contact_ul_" + i + "'><li><a href='emergency_contact.html' class='item-link' onclick='emergencyContactEdit(" +
                 json['response']['emergency_contacts'][i]['contact_id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" +
                  json['response']['emergency_contacts'][i]['first_name'] + " " + json['response']['emergency_contacts'][i]['middle_name'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['response']['emergency_contacts'][i]['mobile_phone'] + "</div></div></div></a></li></ul>";

                $('#emergencycontact').append(data);
            }

        }

}
});
    //myApp.hidePreloader();



}


function emergencyContactEdit(contact_id) {

    setTimeout(function() {

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=emergency_contacts&columns=*&condition=contact_id=" + contact_id;

        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/getEmergencyContact?id="+contact_id,
           
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
                console.log(json)
            myApp.hidePreloader();
            // console.log(json['response']['emergency_contacts'][0]['first_name']);
            $('#emergency_con_firstName').val(json['response']['emergencyContact'][0]['first_name']);
            $('#emergency_con_lastName').val(json['response']['emergencyContact'][0]['middle_name']);
            $('#emergency_con_relaship').val(json['response']['emergencyContact'][0]['relationship']);
            $('#emergency_con_email').val(json['response']['emergencyContact'][0]['email']);
            $('#emergency_address').val(json['response']['emergencyContact'][0]['address']);
            $('#emergency_con_city').val(json['response']['emergencyContact'][0]['city']);
            $('#emergency_country_select').val( json['response']['emergencyContact'][0]['country'] );
            document.getElementById("emergency_country_select").selectedIndex = json['response']['emergencyContact'][0]['country'];
            $('#emergency_con_home_phno').val(json['response']['emergencyContact'][0]['home_phone_number']);
            $('#emergency_con_mobile_phno').val(json['response']['emergencyContact'][0]['mobile_phone']);
            $('#update_emergency_id').val(json['response']['emergencyContact'][0]['contact_id']);
            $("#delEmergancy").attr("onclick","deleteEmergencyContact("+contact_id+")")
            $("#updateEmergancy").attr("onclick","emergencyContactSubmitUpdate("+contact_id+")")

            // if (json['posts'][0]['image'] != '') {
            //     $('#emergency_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['image'] + '" width="200" height="200" onclick="Emergencyimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');
            // } else {
            //     $('#emergencyRemovehide').hide();
            // }

     }
     });
    }, 500);

}

function Emergencyimagepopupdisplay(id) {
    var popupHTML = '<div class="popup popupImage">' +
        '<div class="content-block  " >' +
        '<div style="width: 100%;">' +
        '<div>' +
        '<img src="https://healthrecordspro.com/upload/' + id + '" height="450" width="600" />' +
        '</div>' +
        '</div>' +
        '<p>Emergency image</p>' +
        '<p><a href="#" style="color:black;float:right;margin-right: -13px; margin-top: -23px;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>' +
        '</div>' +
        '</div>';
    myApp.popup(popupHTML);
}


function EmergencycontactAdd() {
    page_parameter = 7;
    setTimeout(function() {
        $("#emergency_inbtn").css('display', 'none');
        $("#emergency_upbtn").css('display', 'block');
        $("#emergencyRemovehide").css('display', 'none');
    }, 500);
}


function emergencynewforminfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=70";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}




function removeEmergencyImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "image = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=emergency_contacts&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            //  selectHomepageDisplay();
            $('#insu_img_display').html('');
        });

    });
}
function if_langs(en,ar,fr,ru,jp,sp) {
    if (localStorage.getItem("lang") == 'ar') {
        return ar;
    } else if (localStorage.getItem("lang") == 'fr') {
        return fr;
    } else if (localStorage.getItem("lang") == 'sp') {
        return sp;
    } else if (localStorage.getItem("lang") == 'ru') {
        return ru;
    }else if (localStorage.getItem("lang") == 'jp') {
        return jp;
    }else {
        return en;
    }
}
function imageToBase64(img) {
    var canvas, ctx, dataURL, base64;
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    dataURL = canvas.toDataURL("image/png");
    base64 = dataURL.replace(/^data:image\/png;base64,/, "");
    return base64;
 }

function emergencyContactSubmit() {
  
    var temp =   document.getElementById("emer_con_image")
    console.log(temp)
  
    var obj = {  user_id : storedData1['userId'],
    first_name : $('#emergency_con_firstName').val(),
    //  middle_name : $('#emergency_con_MidleName').val(),
    middle_name : $('#emergency_con_lastName').val(),
    relationship : $('#emergency_con_relaship').val(),
    email : $('#emergency_con_email').val(),
    address : $('#emergency_address').val(),
    city : $('#emergency_con_city').val(),
    country : $('#emergency_country_select').val(),
    home_phone_number : $('#emergency_con_home_phno').val(),
    mobile_phone : $('#emergency_con_mobile_phno').val(),
    // :$('#emer_con_image').val();

    //  update_emergency_id : $('#update_emergency_id').val()
    image :   $( "#emergency_img_display" ).children().attr('src')      
    }
   
        // var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=emergency_contacts&columns=first_name,last_name,relationship,email,address,city,country,home_phone_number,mobile_phone,user_id,active&values='" + first_name + "','" + last_name + "','" + relationship + "','" + email + "','" + address + "','" + city + "','" + country + "','" + home_phone_number + "','" + mobile_phone + "','" + storedData1['userId'] + "','1'";

        $.ajax({
            type: 'POST',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/addEmergencyContact",
            data: obj,
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
                myApp.alert("Your Details has been Created ", 'Success');

                console.log(json)

      }  });

  
}



function emergencyContactSubmitUpdate(id) {

    var storedData1 = myApp.formGetData('logged_userId');
    console.log(storedData1)
    console.log(localStorage.BguhToken)
 

    var obj = {  
    first_name : $('#emergency_con_firstName').val(),
    //  middle_name : $('#emergency_con_MidleName').val(),
    middle_name : $('#emergency_con_lastName').val(),
    relationship : $('#emergency_con_relaship').val(),
    contact_id:id,
    email : $('#emergency_con_email').val(),
    address : $('#emergency_address').val(),
    city : $('#emergency_con_city').val(),
    country : $('#emergency_country_select').val(),
    home_phone_number : $('#emergency_con_home_phno').val(),
    mobile_phone : $('#emergency_con_mobile_phno').val(),
    // image :    document.getElementById("emer_con_image")
    image :   $( "#emergency_img_display" ).children().attr('src')
    // :$('#emer_con_image').val();

    //  update_emergency_id : $('#update_emergency_id').val()

    }
   
        // var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=emergency_contacts&columns=first_name,last_name,relationship,email,address,city,country,home_phone_number,mobile_phone,user_id,active&values='" + first_name + "','" + last_name + "','" + relationship + "','" + email + "','" + address + "','" + city + "','" + country + "','" + home_phone_number + "','" + mobile_phone + "','" + storedData1['userId'] + "','1'";

        $.ajax({
            type: 'POST',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/updateEmergencyContact",
            data:obj,
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
                console.log(json)
                myApp.alert("Your Details has been updated ", 'Success');
                mainView.router.loadPage('emergency_contact_listing.html');
                console.log(obj)

      },
    error: function(err){
        console.log(obj)
        console.log(err)
    }  });

  
}


function deleteEmergencyContact(id) {
    contact_id = $('#update_emergency_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/deleteEmergencyContact?id="+id,
          
            headers: {
                "token" : localStorage.BguhToken
            },
            success: function(data) {
            myApp.hidePreloader();

            mainView.router.loadPage('emergency_contact_listing.html');
     }
     });
    });
}


//////////////////////////------------------------------ End emergency_contact ------------------------------------------------------------


//////////////////////////------------------------------ health_provider_listing  & Physicians & Therapists------------------------------------------------------------

function gethealthProviderData() {

    setTimeout(function() {
        //myApp.alert("test");
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=healthcare_providers&columns=*&condition=user_id=" + storedData1['userId'];
        $.getJSON(url, function(json) {
            // myApp.hidePreloader();
            $('#healthproviders').html('');
            var key, count = 0;

            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {

                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records ";
                $('#healthproviders').append(data);
            } else {
                for (i = 0; i < count; i++) {

                    var data = "<ul id='health_providers_ul_" + i + "'><li><a href='health_providers.html' class='item-link' onclick='healthProviderEdit(" + json['posts'][i]['hcp_id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['first_name'] + " " + json['posts'][i]['last_name'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['email'] + "</div></div></div></a></li></ul>";
                    $('#healthproviders').append(data);
                }
            }
        });
    }, 500);
    myApp.hidePreloader();
}

function healthProviderEdit(hcp_id) {
    page_parameter = 9;
    setTimeout(function() {

    }, 500);

    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=healthcare_providers&columns=*&condition=hcp_id=" + hcp_id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        $('#hp_firstName').val(json['posts'][0]['first_name']);
        $('#hp_lastName').val(json['posts'][0]['last_name']);

        if (json['posts'][0]['specialty'] != "") {
            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=doctors_speciality&condition=id=" + json['posts'][0]['specialty'];
            $.getJSON(url1, function(json) {
                myApp.hidePreloader();
                $('#hp_speciality').val((json['posts'][0]['name'] != undefined ? json['posts'][0]['name'] : ''));
                $('#hp_speciality_id').val((json['posts'][0]['id'] != undefined ? json['posts'][0]['id'] : ''));
                healthProSpeciality((json['posts'][0]['id'] != undefined ? json['posts'][0]['id'] : ''));

            });
        } else {
            healthProSpeciality('  ');
        }

        $('#hp_email').val(json['posts'][0]['email']);
        $('#hp_address').val(json['posts'][0]['address']);
        $('#hp_country').val(json['posts'][0]['country']);
        $('#hp_work_phone').val(json['posts'][0]['work_phone_number']);
        $('#hp_mob_phone').val(json['posts'][0]['mobile_phone']);
        $('#hp_hospital_affili').val(json['posts'][0]['hospital_affiliation']);
        $('#update_healthpro_id').val(json['posts'][0]['hcp_id']);

    });

}

function healthproviderListingTips() {

    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=34";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });

}



function HealthProvidersAdd() {
    page_parameter = 9;
    setTimeout(function() {
        $("#healthproviders_inbtn").css('display', 'none');
        $("#healthproviders_upbtn").css('display', 'block');
        healthProSpeciality(' ');
    }, 500);

}


// health_providers.html

function HealthproviderInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=72";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function healthproviderformSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var first_name = $('#hp_firstName').val();
    var last_name = $('#hp_lastName').val();
    var specialty = $('#hp_speciality').val();
    var email = $('#hp_email').val();
    var address = $('#hp_address').val();
    var city = $('#hp_city').val();
    var state = $('#hp_state').val();
    var zip_code = $('#hp_zipcode').val();
    var country = $('#hp_country').val();
    var home_phone_number = $('#hp_home_phone').val();
    var work_phone_number = $('#hp_work_phone').val();
    var mobile_phone = $('#hp_mob_phone').val();
    var hospital_affiliation = $('#hp_hospital_affili').val();
    var update_healthpro_id = $('#update_healthpro_id').val();

    if (update_healthpro_id == '') {

        var columnName = "first_name,last_name,specialty,email,address,country,work_phone_number,mobile_phone,hospital_affiliation,user_id,active";

        var coloumnValue = "'" + first_name + "','" + last_name + "','" + specialty + "','" + email + "','" + address + "','" + country + "','" + work_phone_number + "','" + mobile_phone + "','" + hospital_affiliation + "','" + storedData1['userId'] + "','1'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=healthcare_providers&columns=" + columnName + "&values=" + coloumnValue + "";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // gethealthProviderData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('health_provider_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {
        if (isNaN($('#hp_speciality').val())) {
            var speid = $('#hp_speciality_id').val();
        } else {
            var speid = $('#hp_speciality').val();
        }

        var val = "first_name = '" + $('#hp_firstName').val() + "',last_name = '" + $('#hp_lastName').val() + "',specialty = '" + speid + "',email = '" + $('#hp_email').val() + "',address = '" + $('#hp_address').val() + "',country = '" + $('#hp_country').val() + "',work_phone_number = '" + $('#hp_work_phone').val() + "',mobile_phone = '" + $('#hp_mob_phone').val() + "',hospital_affiliation = '" + $('#hp_hospital_affili').val() + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=healthcare_providers&columns=" + val + "&condition=hcp_id=" + update_healthpro_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // gethealthProviderData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('health_provider_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    }
}




function deleteHealthProvider() {
    hcp_id = $('#update_healthpro_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=healthcare_providers&columns=&condition=hcp_id=" + hcp_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            mainView.router.loadPage('health_provider_listing.html');
        });

    });

}


//////////////////////////------------------------------ End health_provider_listing & Physicians & Therapists------------------------------------------------------------

//////////////////////////------------------------------insurance ------------------------------------------------------------


function getInsuranceData() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=health_insurance&columns=*&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            // myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            $('#healthinsurance').html('');
            if (json['posts'] == 0) {
                var data = "No Records ";
                $('#healthinsurance').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    var data = "<ul id='health_insurance_ul_" + i + "'><li><a href='health_insu_form.html' class='item-link' onclick='insuEdit(" + json['posts'][i]['insurance_id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['company_name'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; " + json['posts'][i]['policy'] + "</div></div></div></a></li></ul>";

                    $('#healthinsurance').append(data);

                }
            }

        }).fail(function() {
            console.log("error");
            myApp.hidePreloader();
            myApp.alert("please check your network connection")
        });
    }, 500);
}

function insuEdit(insurance_id) {
    IuId = insurance_id;
    setTimeout(function() {

    }, 500);
    page_parameter = 5
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=health_insurance&columns=*&condition=insurance_id=" + insurance_id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        $('#hi_first_name').val(json['posts'][0]['cp_first_name']);
        $('#hi_last_name').val(json['posts'][0]['cp_last_name']);
        $('#hi_group_no').val(json['posts'][0]['cp_groupnumber']);
        $('#hi_member_id').val(json['posts'][0]['cp_member_id']);
        $('#hi_primary_ins_per').val(json['posts'][0]['cp_primary_insured_person']);
        $('#hi_social_secno').val(json['posts'][0]['cp_social_security_number']);
        $('#hi_policy_no').val(json['posts'][0]['policy']);
        $('#hi_coverage').val(json['posts'][0]['coverage']);
        $('#hi_company_name').val(json['posts'][0]['company_name']);
        $('#hi_phone1').val(json['posts'][0]['phone1']);
        $('#hi_phone2').val(json['posts'][0]['phone2']);
        $('#hi_copays').val(json['posts'][0]['copays']);
        $('#hi_city').val(json['posts'][0]['city']);
        $('#hi_state').val(json['posts'][0]['state']);
        $('#hi_zip').val(json['posts'][0]['zip_code']);
        $('#insu_country').val(json['posts'][0]['country']);
        $('#hi_emp_name').val(json['posts'][0]['cp_employer_name']);
        $('#hi_phone').val(json['posts'][0]['cp_phone']);
        $('#hi_email').val(json['posts'][0]['cp_email']);
        $('#hi_city1').val(json['posts'][0]['cp_city']);
        $('#hi_state1').val(json['posts'][0]['cp_state']);
        $('#hi_zip1').val(json['posts'][0]['cp_zip_code']);
        $('#update_health_insu').val(json['posts'][0]['insurance_id']);

        if (json['posts'][0]['card1'] != '') {
            $('#insu_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['card1'] + '"  style="max-height: 150px;max-width: 150px;"  onclick="Insuranceimagepopupdisplay(\'' + json['posts'][0]['card1'] + '\')">');
        } else {
            $('#insuimagehide').hide();
        }
        if (json['posts'][0]['card2'] != '') {
            $('#insu_policy_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['card2'] + '" style= "max-width:150px;max-height:150px" onclick="Insurance1imagepopupdisplay(\'' + json['posts'][0]['card2'] + '\')">');
        } else {
            $('#insuimagehide1').hide();
        }

    }).fail(function() {
        console.log("error");
        myApp.hidePreloader();
        myApp.alert("please check your network connection")
    });;

}


function insuformAdd() {
    setTimeout(function() {
        $("#insurance_inbtn").css('display', 'none');
        $("#insurance_upbtn").css('display', 'block');
        $("#insuimagehide").css('display', 'none');
        $("#insuimagehide1").css('display', 'none');
    }, 500);

}

//health_insu_form.html


function Insuranceforminfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=74";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function Iactionsheet() {
    var buttons = [{
            text: 'Camera',
            bold: true,
            onClick: function() {
                $("#file-attachment-form1").css("display", "none");
                $("#cam").css("display", "block");
            }
        },
        {
            text: 'Files',
            bold: true,
            color: 'green',
            onClick: function() {
                $("#file-attachment-form1").css("display", "inline-flex");
                $("#cam").css("display", "none");
            }
        },
        {
            text: 'Cancel',
            color: '#FF0000'
        },
    ];
    myApp.actions(buttons);
}

function uploadInsuranceCardsPic(update_id) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (update_id == '') {
        var update_health_insu = $('#update_health_insu').val();
    } else {
        var update_health_insu = update_id;
    }

    $('#health_insu_coinsucard_id').val(update_health_insu);
    formData = new FormData($('#file-attachment-form1')[0]);

    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=uploadInsuCards',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            // alert(data);
            // alert('File uploaded')
        }
    })
    return false;
}



function removeBackInsuImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "card2 = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=health_insurance&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // $("#health_insurance_ul_"+id).remove();
        });

    });
}




function healthformSubmit() {

    var storedData1 = myApp.formGetData('logged_userId');
    var cp_first_name = $('#hi_first_name').val();
    var cp_last_name = $('#hi_last_name').val();
    var cp_groupnumber = $('#hi_group_no').val();
    var cp_member_id = $('#hi_member_id').val();
    var cp_primary_insured_person = $('#hi_primary_ins_per').val();
    var cp_social_security_number = $('#hi_social_secno').val();
    var policy = $('#hi_policy_no').val();
    var coverage = $('#hi_coverage').val();
    var company_name = $('#hi_company_name').val();
    var phone1 = $('#hi_phone1').val();
    var phone2 = $('#hi_phone2').val();
    var copays = $('#hi_copays').val();
    var city = $('#hi_city').val();
    var state = $('#hi_state').val();
    var country = $('#insu_country').val();
    var zip_code = $('#hi_zip').val();
    var cp_employer_name = $('#hi_emp_name').val();
    var cp_phone = $('#hi_phone').val();
    var cp_email = $('#hi_email').val();
    var cp_city = $('#hi_city1').val();
    var cp_state = $('#hi_state1').val();
    var cp_zip_code = $('#hi_zip1').val();
    var update_health_insu = $('#update_health_insu').val();

    if (update_health_insu == '') {

        var columnNames = "cp_first_name,cp_last_name,cp_groupnumber,cp_member_id,cp_primary_insured_person,cp_social_security_number,policy,coverage,company_name,phone1,phone2,copays,city,state,zip_code,country,cp_employer_name,cp_phone,cp_email,cp_city,cp_state,cp_zip_code,user_id";

        var columnValues = "'" + cp_first_name + "','" + cp_last_name + "','" + cp_groupnumber + "','" + cp_member_id + "','" + cp_primary_insured_person + "','" + cp_social_security_number + "','" + policy + "','" + coverage + "','" + company_name + "','" + phone1 + "','" + phone2 + "','" + copays + "','" + city + "','" + state + "','" + zip_code + "','" + country + "','" + cp_employer_name + "','" + cp_phone + "','" + cp_email + "','" + cp_city + "','" + cp_state + "','" + cp_zip_code + "','" + storedData1['userId'] + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=health_insurance&columns=" + columnNames + "&values=" + columnValues + "";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                uploadInsuranceCardsPic(json['posts'][0]);
                // getInsuranceData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('insurance.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        }).fail(function() {
            console.log("error");
            myApp.hidePreloader();
            myApp.alert("please check your network connection")
        });;

    } else {
        var val = "cp_first_name = '" + $('#hi_first_name').val() + "',cp_last_name = '" + $('#hi_last_name').val() + "',cp_groupnumber = '" + $('#hi_group_no').val() + "',cp_member_id = '" + $('#hi_member_id').val() + "',cp_primary_insured_person = '" + $('#hi_primary_ins_per').val() + "',cp_social_security_number = '" + $('#hi_social_secno').val() + "',policy = '" + $('#hi_policy_no').val() + "',coverage = '" + $('#hi_coverage').val() + "',company_name = '" + $('#hi_company_name').val() + "',phone1 = '" + $('#hi_phone1').val() + "',phone2 = '" + $('#hi_phone2').val() + "',copays = '" + $('#hi_copays').val() + "',city = '" + $('#hi_city').val() + "',state = '" + $('#hi_state').val() + "',zip_code = '" + $('#hi_zip').val() + "',country = '" + $('#insu_country').val() + "',cp_employer_name = '" + $('#hi_emp_name').val() + "',cp_phone = '" + $('#hi_phone').val() + "',cp_email = '" + $('#hi_email').val() + "',cp_city = '" + $('#hi_city1').val() + "',cp_state = '" + $('#hi_state1').val() + "',cp_zip_code = '" + $('#hi_zip1').val() + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=health_insurance&columns=" + val + "&condition=insurance_id=" + update_health_insu;
        uploadInsuranceCardsPic(update_health_insu);
        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getInsuranceData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('insurance.html');

            } else {
                // getInsuranceData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('insurance.html');
            }

        }).fail(function() {
            console.log("error");
            myApp.hidePreloader();
            myApp.alert("please check your network connection")
        });
    }

}



function deleteInsuItem() {
    IuId = "";
    insurance_id = $('#update_health_insu').val();
    myApp.confirm('Are you sure', 'Delete');
    $(".modal-button-bold").click(function() {

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=health_insurance&columns=&condition=insurance_id=" + insurance_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // getInsuranceData();
            mainView.router.loadPage('insurance.html');
            // $("#health_insurance_ul_"+id).remove();
        });

    }).fail(function() {
        console.log("error");
        myApp.hidePreloader();
        myApp.alert("please check your network connection")
    });;

}
//////////////////////////------------------------------ End insurance ------------------------------------------------------------


//////////////////////////------------------------------ doctors_appoin_listing------------------------------------------------------------


function insuformAdd() {
    setTimeout(function() {
        $("#insurance_inbtn").css('display', 'none');
        $("#insurance_upbtn").css('display', 'block');
        $("#insuimagehide").css('display', 'none');
        $("#insuimagehide1").css('display', 'none');
    }, 500);

}

//doctor_consultation.html


function doctor_appointmentadditioninfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=76";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function doctorsAppointment() {
    var storedData1 = myApp.formGetData('logged_userId');
    var physicianname = $('#doc_apoint_phyname').val();
    var name_other = $('#doc_apoint_phyname_others').val();
    var specialty = $('#doc_apoint_speciality').val();
    var specialty_other = $('#doc_apoint_speciality_others').val();
    var dateofappointment = $('#doc_apoint_dofapointment').val();
    var time = $('#doc_apoint_time').val();
    var reminderdate = $('#doc_apoint_reminder_date').val();
    var remindertime = $('#doc_apoint_reminder_time').val();
    var reminderdate2 = $('#doc_apoint_sec_reminder_date').val();
    var remindertime2 = $('#doc_apoint_sec_reminder_time').val();
    if (document.getElementById('doc_aopint_rem_email').checked) {
        var reminder = document.getElementById('doc_aopint_rem_email').value;
    }
    var doctors_id = $('#doctors_id').val();

    if (doctors_id == '') {

        var columnName = "physicianname,name_other,specialty,specialty_other,dateofappointment,time,reminderdate,remindertime,reminderdate2,remindertime2,customerid,reminder";
        var columnValue = "'" + physicianname + "','" + name_other + "','" + specialty + "','" + specialty_other + "','" + dateofappointment + "','" + time + "','" + reminderdate + "','" + remindertime + "','" + reminderdate2 + "','" + remindertime2 + "','" + storedData1['userId'] + "','" + reminder + "'";
        if (dateofappointment == '') {
            myApp.alert('Please Enter Date', 'Doctors Appointment');
        } else {
            myApp.showPreloader();

            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=doctors_appointment&columns=" + columnName + "&values=" + columnValue + "";
            console.log('hereeeeeeeeeeeeeeeeeeeee->>>>>>>'+url);
            $.getJSON(url, function(json) {
                myApp.hidePreloader();

                if (json['posts'][0]) {
                    createCalendarDocAppointment(json['posts'][0]);
                    getDocAppData();

                    myApp.alert("Your Details has been Created", 'Success');
                    mainView.router.loadPage('doctors_appoin_listing.html');

                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });
        }

    } else {

        if (isNaN($('#doc_apoint_phyname').val())) {
            var docphyid = $('#doc_apoint_phyname_id').val();
        } else {
            var docphyid = $('#doc_apoint_phyname').val();
        }
        if (isNaN($('#doc_apoint_speciality').val())) {
            var docspeid = $('#doc_apoint_speciality_id').val();
        } else {
            var docspeid = $('#doc_apoint_speciality').val();
        }

        var val = "physicianname = '" + docphyid + "',name_other='" + $('#doc_apoint_phyname_others').val() + "',specialty = '" + docspeid + "',specialty_other='" + $('#doc_apoint_speciality_others').val() + "',dateofappointment = '" + $('#doc_apoint_dofapointment').val() + "',time = '" + $('#doc_apoint_time').val() + "',reminderdate = '" + $('#doc_apoint_reminder_date').val() + "',remindertime = '" + $('#doc_apoint_reminder_time').val() + "',reminderdate2 = '" + $('#doc_apoint_sec_reminder_date').val() + "',remindertime2 = '" + $('#doc_apoint_sec_reminder_time').val() + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=doctors_appointment&columns=" + val + "&condition=id=" + updateId;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                createCalendarDocAppointment(updateId);
                getDocAppData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('doctors_appoin_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    }
}

function deleteDocAppoint() {
    tableid = $('#doctors_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=doctors_appointment&columns=&condition=id=" + tableid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // $("#doc_appointment_ul_"+id).remove();
            getDocAppData();
            mainView.router.loadPage('doctors_appoin_listing.html');

        });
    });
}

//////////////////////////------------------------------ End doctors_appoin_listing ------------------------------------------------------------



//////////////////////////------------------------------  doctors_appoin_listing ------------------------------------------------------------
function hellowHamed(selectedId){
console.log('in Speciality -------------------------->')
    var url = "http://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=doctors_speciality&limit=250&columns=id,name&condition=1";
    $.getJSON(url, function(json) {

        var text = "";
        var selectText = "";
        if (localStorage.getItem("lang") == 'ar') {
            text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_speciality' id='doc_apoint_speciality' onchange='displayOtherField(this)'>" +
                "<option value='0'>أختر</option>";
        } else {
            text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_speciality' id='doc_apoint_speciality' onchange='displayOtherField(this)'>" +
                "<option value='0'>Select</option>";
        }

        $.each(json['posts'], function(key, val) {
            var selectText1 = "";
            if (selectedId == val['id']) {
                selectText1 = "selected = selected";
            }
            text += "<option value='" + val['id'] + "' " + selectText1 + " >" + val['name'] + "</option>";
        });
        if (selectedId == -1) {
            selectText = "selected = selected";
        }
        if (localStorage.getItem("lang") == 'ar') {
            text += "<option value='-1'  " + selectText + " >أخرى</option>";
        } else {
            text += "<option value='-1'  " + selectText + " >Others</option>";
        }

        text += "</select>";
        $("#addselectspeciality").html(text);
    });

}
function Speciality(selectedId) {
    console.log('in Speciality -------------------------->')
    var url = "http://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=doctors_speciality&limit=250&columns=id,name&condition=1";
    $.getJSON(url, function(json) {

        var text = "";
        var selectText = "";
        if (localStorage.getItem("lang") == 'ar') {
            text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_speciality' id='doc_apoint_speciality' onchange='displayOtherField(this)'>" +
                "<option value='0'>أختر</option>";
        } else {
            text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='doc_apoint_speciality' id='doc_apoint_speciality' onchange='displayOtherField(this)'>" +
                "<option value='0'>Select</option>";
        }

        $.each(json['posts'], function(key, val) {
            var selectText1 = "";
            if (selectedId == val['id']) {
                selectText1 = "selected = selected";
            }
            text += "<option value='" + val['id'] + "' " + selectText1 + " >" + val['name'] + "</option>";
        });
        if (selectedId == -1) {
            selectText = "selected = selected";
        }
        if (localStorage.getItem("lang") == 'ar') {
            text += "<option value='-1'  " + selectText + " >أخرى</option>";
        } else {
            text += "<option value='-1'  " + selectText + " >Others</option>";
        }

        text += "</select>";
        $("#addselectspeciality").html(text);
    });

}

function getDocAppData() {
    tempPage = 11;
    page_parameter = 1;
    myApp.showPreloader();
    // setTimeout(function (){myApp.hidePreloader();},3000);
    setTimeout(function() {
        tipID = 0;

        var storedData1 = myApp.formGetData('logged_userId');
       
        //    myApp.showPreloader();
     
        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/listPatientAppointments" ,
            data: {patientId: storedData1['userId']},
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {

           


            if (json['response']['appointments'] == 0) {
                var data = "No Records ";
                $('#doctorsappointments').append(data);
            } else {
                var stat
                for (var i = 0; i < json['response']['appointments'].length; i++) {
                    if (json['response']['appointments'][i]['status'] == 1 ){
                        stat = if_langs('Approved' , 'تم الحجز ')
                    }
                 else   if (json['response']['appointments'][i]['status'] == 2 ){
                        stat = if_langs('pending' , 'لم يتم الرد')
                    }
                else{
                    stat = if_langs('Decline' , 'تم الرفض')

                }
                    data = ' <div class="card">'+
                    '<div class="card-header">'+ json['response']['appointments'][i]['doctor_name']+'</div>'+
                    '<div class="card-content">'+
                     ' <div class="card-content-inner"> speciality : '+json['response']['appointments'][i]['speciality_name']+'</br> </br> status : '
                      +stat+'</div>'+
                  '  </div>'+
                   ' <div class="card-footer">'+if_langs('Date : ', 'التاريخ : ')+json['response']['appointments'][i]['date']+'&nbsp&nbsp&nbsp&nbsp'+if_langs('Time : ', 'الوقت : ')+json['response']['appointments'][i]['time']+'</div>'+
              '    </div>'
                      
                 
                    $('#doctorsappointments').append(data);

                }



            }

      
        }  });
        myApp.hidePreloader();
    }, 2000);


}




function doctorsEdit(id) {
    page_parameter = 11;
    setTimeout(function() {

        getDocAppointCalender();
        docApptimePicker();
        getDocAppointCalender1();
        getDocAppointCalender2();
        docApptimePicker1();
        docApptimePicker2();

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=doctors_appointment&columns=*&condition=id=" + id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=healthcare_providers&condition=hcp_id=" + json['posts'][0]['physicianname'];
            $.getJSON(url1, function(json) {
                myApp.hidePreloader();
                if (json['posts'] == 0) {
                    helloworld(-1);
                    $('#doc_apoint_phyname_others_li').css('display', 'block');
                } else {
                    $('#doc_apoint_phyname').val(json['posts'][0]['first_name']);
                    $('#doc_apoint_phyname_id').val(json['posts'][0]['hcp_id']);
                    helloworld(json['posts'][0]['hcp_id']);
                }

            });
            $('#doc_apoint_phyname_others').val(json['posts'][0]['name_other']);

            var url2 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=doctors_speciality&condition=id=" + json['posts'][0]['specialty'];

            $.getJSON(url2, function(json) {
                myApp.hidePreloader();
                if (json['posts'] == 0) {
                    hellowHamed(-1);
                    $('#doc_apoint_speciality_others_li').css('display', 'block');

                } else {
                    $('#doc_apoint_speciality').val(json['posts'][0]['name']);
                    $('#doc_apoint_speciality_id').val(json['posts'][0]['id']);
                    hellowHamed(json['posts'][0]['id']);
                }

            });
            $('#doc_apoint_speciality_others').val(json['posts'][0]['specialty_other']);
            $('#doc_apoint_dofapointment').val(json['posts'][0]['dateofappointment']);
            $('#doc_apoint_time').val(json['posts'][0]['time']);
            $('#doc_apoint_reminder_date').val(json['posts'][0]['reminderdate']);
            $('#doc_apoint_reminder_time').val(json['posts'][0]['remindertime']);
            $('#doc_apoint_sec_reminder_date').val(json['posts'][0]['reminderdate2']);
            $('#doc_apoint_sec_reminder_time').val(json['posts'][0]['remindertime2']);
            if (json['posts'][0]['reminder'] == 1) {
                $('#doc_aopint_rem_email').attr('checked', 'checked');
            }
            $('#doctors_id').val(json['posts'][0]['id']);
            updateId = id;
        });
    }, 1000);
}



function getDocAppointCalender() {
    console.log('in getDocAppointCalender -------------------------->')

    var calendarDefault = myApp.calendar({
        input: '#doc_apoint_dofapointment',
    });
}

function getDocAppointCalender1() {
    console.log('in getDocAppointCalender111111 -------------------------->')

    var calendarDefault = myApp.calendar({
        input: '#doc_apoint_reminder_date',
    });
}

function getDocAppointCalender2() {
    console.log('in getDocAppointCalender222222222222222 -------------------------->')

    var calendarDefault = myApp.calendar({
        input: '#doc_apoint_sec_reminder_date',
    });
}



function docApptimePicker() {
    console.log('in docApptimePicker -------------------------->')

    var today = new Date();
    var pickerInline = myApp.picker({
        input: '#doc_apoint_time',
        toolbar: false,
        rotateEffect: true,
        value: [today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {

            var ampm = values[0] >= 12 ? 'PM' : 'AM';
            var hours = values[0] % 12;

            return hours + ':' + values[1] + ' : ' + ampm;
        },
        cols: [
            // Hours
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) {
                        arr.push(i < 10 ? '0' + i : i);
                    }
                    return arr;
                })(),
            }
        ]
    });
}

function docApptimePicker1() {
    console.log('in docApptimePicke1111111111111111111111111 -------------------------->')

    var today = new Date();
    var pickerInline = myApp.picker({
        input: '#doc_apoint_reminder_time',
        // container: '#medi_remind_time_container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {

            var ampm = values[0] >= 12 ? 'PM' : 'AM';
            var hours = values[0] % 12;

            return hours + ':' + values[1] + ' : ' + ampm;
        },
        cols: [
            // Hours
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) {
                        arr.push(i < 10 ? '0' + i : i);
                    }
                    return arr;
                })(),
            }
        ]
    });
}

function docApptimePicker2() {
    console.log('in docApptimePicker22222222222222222222222222222222 -------------------------->')

    var today = new Date();
    var pickerInline = myApp.picker({
        input: '#doc_apoint_sec_reminder_time',
        // container: '#medi_remind_time_container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {

            var ampm = values[0] >= 12 ? 'PM' : 'AM';
            var hours = values[0] % 12;

            return hours + ':' + values[1] + ' : ' + ampm;
        },
        cols: [
            // Hours
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) {
                        arr.push(i < 10 ? '0' + i : i);
                    }
                    return arr;
                })(),
            }
        ]
    });
}

function DoctorappointmentList() {

    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=7";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function healthProSpeciality(selecid) {

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select&format=json&table=doctors_speciality&limit=250&columns=id,name&condition=1";
    $.getJSON(url, function(json) {
        var text = "";

        text += "<i class='fa fa-sort-desc' style='float:right;font-size: 30px;position: absolute;right: 6px;'></i><select name='hp_speciality' id='hp_speciality'>" +
            "<option value='0'>Select</option>";
        $.each(json['posts'], function(key, val) {
            var selectText = "";
            if (selecid == val['id']) {
                selectText = "selected = selected";
            }
            text += "<option value='" + val['id'] + "' " + selectText + " >" + val['name'] + "</option>";

        });
        text += "</select>";
        $("#docSpeciality").html(text);
    });

}

function docappoinAdd() {
    setTimeout(function() {
    
        console.log('here ')
        $("#docappoint_inbtn").css('display', 'none');
        $("#docappoint_upbtn").css('display', 'block');
        helloworld('');
        hellowHamed('');
        //organphysicianProvider();
        getDocAppointCalender();
        docApptimePicker();
        getDocAppointCalender1();
        getDocAppointCalender2();
        docApptimePicker1();
        docApptimePicker2();
    },500)
    page_parameter = 11;
}



function getSpecialty () {
  
  
   
        // var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=emergency_contacts&columns=first_name,last_name,relationship,email,address,city,country,home_phone_number,mobile_phone,user_id,active&values='" + first_name + "','" + last_name + "','" + relationship + "','" + email + "','" + address + "','" + city + "','" + country + "','" + home_phone_number + "','" + mobile_phone + "','" + storedData1['userId'] + "','1'";

        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/listSpecialities",
         
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {


                console.log(json)
                for(var i = 0 ; i < json['response']['specialities'].length; i ++ ){
                var data = "<ul id='emergency_contact_ul_" + i + "'><li><a href='DoctorSpecialty.html' class='item-link' onclick='GetDoctorSpecialty(" +
                json['response']['specialities'][i]['SPECIALTY_ID'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" +
                 json['response']['specialities'][i]['NAME'] +
                  "</div></div></div></a></li></ul>";

               $('#SpecialtyList').append(data);
            }

      }  });

  
}

function GetDoctorSpecialty (id) {
  
  
  
   
    // var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=emergency_contacts&columns=first_name,last_name,relationship,email,address,city,country,home_phone_number,mobile_phone,user_id,active&values='" + first_name + "','" + last_name + "','" + relationship + "','" + email + "','" + address + "','" + city + "','" + country + "','" + home_phone_number + "','" + mobile_phone + "','" + storedData1['userId'] + "','1'";

    $.ajax({
        type: 'GET',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/listDoctorsBySpeciality?specialityId="+id,
        
        headers: {
            "token": localStorage.BguhToken
        },
        success: function(json) {


            console.log(json)
            for(var i = 0 ; i < json['response']['doctors'].length; i ++ ){
            var data = "<ul id='emergency_contact_ul_" + i + "'><li><a href='DoctorScadual.html' class='item-link' onclick='GetDoctorScadual(" +
            json['response']['doctors'][i]['DOCTOR_ID'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" +
             json['response']['doctors'][i]['FIRST_NAME'] +  "</div></div></div></a></li></ul>";

           $('#SpecialtyListDoctors').append(data);}

  }  });


}

function GetDoctorScadual (id) {
  
  
  
   console.log(id)
    // var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=emergency_contacts&columns=first_name,last_name,relationship,email,address,city,country,home_phone_number,mobile_phone,user_id,active&values='" + first_name + "','" + last_name + "','" + relationship + "','" + email + "','" + address + "','" + city + "','" + country + "','" + home_phone_number + "','" + mobile_phone + "','" + storedData1['userId'] + "','1'";

    $.ajax({
        type: 'GET',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/getDoctorSchedule?doctorId=80",
        
        headers: {
            "token": localStorage.BguhToken
        },
        success: function(json) {
            console.log (json['response']['schedule']['AVAILABLE_DATE'])
            console.log (json['response']['schedule']['AVAILABLE_FROM_TIME'])
            console.log (json['response']['schedule']['AVAILABLE_TO_TIME'])
            $('#IAvDate').val(json['response']['schedule']['AVAILABLE_DATE'])
            $('.TimeFrom').val(json['response']['schedule']['AVAILABLE_FROM_TIME'])
            $('.TimeTo').val(if_langs(json['response']['schedule']['AVAILABLE_TO_TIME'] , json['response']['schedule']['AVAILABLE_TO_TIME'] ))
            $('.DoctorID').attr("onclick","AddScadual("+json['response']['schedule']['ID']+")")

            console.log(json)
    
  }  });


}

function AddScadual (id){
    var storedData1 = myApp.formGetData('logged_userId');
    $('#IAvDate').val()
          
    var date = $('#date_LabResult').val()
    var time = $('#doc_apoint_time').val()
var obj = {
    doctorId:id,
    patientId: storedData1['userId'] ,
    date:date,
    time : time , 
    status : 1
}
console.log(date)
if (date == '' ){
    myApp.alert(if_langs('please enter your Date' , 'من فضلك قم باختيار اليوم'))
}
            //myApp.alert("hi");

else{
    $.ajax({
        type: 'POST',
        url: "https://host.optimalsolutionslebanon.com/~bguh/api/addAppointment" ,
        data: obj,
        headers: {
            "token": localStorage.BguhToken
        },
        success: function(json) {
            console.log(json)
            console.log(obj)
            myApp.alert( if_langs(" your appointment was added Sucessfully", "تم تسجيل الميعاد بنجاح" ), if_langs('Success','تم بنجاح'));
            mainView.router.loadPage('doctors_appoin_listing');
        }  });
}
}

//////////////////////////------------------------------ End doctors_appoin_listing ------------------------------------------------------------



//////////////////////////------------------------------  medications_listing ------------------------------------------------------------


function getMedicationsData() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');


        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medications&columns=*&condition=customerId=" + storedData1['userId'];
        var urlz = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medications&columns=id,name,dosage,dateStarted,type&condition=customerId=" + storedData1['userId'];

        $.getJSON(urlz, function(json) {
            //


            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            $('#medications').html('');
            $('#medications1').html('');
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#medications').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    if (json['posts'][i]['type'] == 0) {
                        var data = "<ul id='medications_ul_" + i + "'><li><a href='medications.html' class='item-link' onclick='medicationEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['name'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; " + json['posts'][i]['dosage'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['dateStarted'] + "</div></div></div></a></li></ul>";

                        $('#medications1').append(data);

                    } else {
                        var data = "<ul id='medications_ul_" + i + "'><li><a href='medications.html' class='item-link' onclick='medicationEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['name'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; " + json['posts'][i]['dosage'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['dateStarted'] + "</div></div></div></a></li></ul>";

                        $('#medications').append(data);
                    }

                }
            }

        });

    }, 2000);
}

function medicationEdit(id) {
    page_parameter = 12;

    setTimeout(function() {

        getCalenderMedication();
        getCalenderMedication1();
        getCalenderMedication2();
        getCalenderMedication3();
        getmediTime();
    }, 5000);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medications&columns=*&condition=id=" + id;

    var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=calendar&columns=*&condition=itemId=" + id;

    $.getJSON(url1, function(json) {
        myApp.hidePreloader();

        $('#medi_start_remind').val(json['posts'][0]['reminderDate']);
        $('#medi_remind_time').val(json['posts'][0]['reminderTime']);
        $('#medicationsform_id').val(id);

        if (json['posts'][0]['monday'] == 1) {
            $('#medi_monday').attr('checked', 'checked');
        }
        if (json['posts'][0]['tuesday'] == 1) {
            $('#medi_tuesday').attr('checked', 'checked');
        }
        if (json['posts'][0]['wednesday'] == 1) {
            $('#medi_wednesday').attr('checked', 'checked');
        }
        if (json['posts'][0]['thursday'] == 1) {
            $('#medi_thursday').attr('checked', 'checked');
        }
        if (json['posts'][0]['friday'] == 1) {
            $('#medi_friday').attr('checked', 'checked');
        }
        if (json['posts'][0]['saturday'] == 1) {
            $('#medi_saturday').attr('checked', 'checked');
        }
        if (json['posts'][0]['sunday'] == 1) {
            $('#medi_sunday').attr('checked', 'checked');
        }
        if (json['posts'][0]['email'] == 1) {
            $('#medi_receive_email').attr('checked', 'checked');
        }
    });

    $.getJSON(url, function(json) {

        $('#medi_medicine_name').val(json['posts'][0]['name']);
        $('#medi_dosage').val(json['posts'][0]['dosage']);
        $('#medi_medi_reference').val(json['posts'][0]['reference']);
        $('#medi_used_treatment').val(json['posts'][0]['treatmentof']);

        if (json['posts'][0]['tomd'] == 1) {
            $('#medi_tab').attr('checked', 'checked');
        }
        if (json['posts'][0]['tomd'] == 2) {
            $('#medi_cap').attr('checked', 'checked');
        }
        if (json['posts'][0]['tomd'] == 3) {
            $('#medi_syrup').attr('checked', 'checked');
        }
        if (json['posts'][0]['tomd'] == 4) {
            $('#medi_suppos').attr('checked', 'checked');
        }
        if (json['posts'][0]['tomd'] == 5) {
            $('#medi_inj').attr('checked', 'checked');
        }
        $('#medi_datestarted').val(json['posts'][0]['dateStarted']);
        $('#medi_enddate').val(json['posts'][0]['enddate1']);
        $('#medi_end_remind').val(json['posts'][0]['enddate']);
        if (json['posts'][0]['type'] == 1) {
            $('#medi_still_using').attr('checked', 'checked');
        }
        $('#medicationsform_id').val(json['posts'][0]['id']);

        var url2 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=healthcare_providers&condition=hcp_id=" + json['posts'][0]['prescribedbydr'];

        $.getJSON(url2, function(json) {
            myApp.hidePreloader();

            if (json['posts'] == 0) {
                prescribed(-1);
                $('#medi_precribed_others_li').css('display', 'block');
            } else {
                $('#medi_precribed').val(json['posts'][0]['first_name']);
                $('#medi_precribed_id_others').val(json['posts'][0]['hcp_id']);
                prescribed(json['posts'][0]['hcp_id']);
            }

        });
        $('#medi_precribed_others').val(json['posts'][0]['otherProvider']);
        if (json['posts'][0]['image'] != '') {
            $('#medication_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['image'] + '" width="200" height="200" onclick="Medicationimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');
        } else {
            $('#medicationimghide').hide();
        }
    });

}


function uploadMedicationPic(update_id) {
    var storedData1 = myApp.formGetData('logged_userId');
    var medicationsform_id
    if (update_id == '') {
        medicationsform_id = $('#medicationsform_id');
    } else {
        medicationsform_id = update_id;
    }


    $('#medi_image_id').val(medicationsform_id);
    formData = new FormData($('#file-attachment-form8')[0]);

    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=uploadMedicationImage',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            //myApp.alert("hi");
            // alert('File uploaded');
            // mainView.router.loadPage('doctors_appoin_listing.html');
        }
    })
    return false;
}

function MedicationListinfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=26";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function getCalenderMedication() {
    var calendarDefault = myApp.calendar({
        input: '#medi_datestarted',
    });
}


function getCalenderMedication1() {
    var calendarDefault = myApp.calendar({
        input: '#medi_enddate',
    });
}

function getCalenderMedication2() {
    var calendarDefault = myApp.calendar({
        input: '#medi_start_remind',
    });
}

function getCalenderMedication3() {
    var calendarDefault = myApp.calendar({
        input: '#medi_end_remind',
    });
}

function medicationAdd() {
    page_parameter = 12;
    setTimeout(function() {
        $("#medication_inbtn").css('display', 'none');
        $("#medication_upbtn").css('display', 'block');
        $("#medicationimghide").css('display', 'none');
        prescribed(' ');
        getCalenderMedication();
        getCalenderMedication1();
        getCalenderMedication2();
        getCalenderMedication3();
        getmediTime();
    }, 500);
}
//medications.html


function getmediTime() {
    var today = new Date();
    var pickerInline = myApp.picker({
        input: '#medi_remind_time',
        //      container: '#medi_remind_time_container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {

            var ampm = values[0] >= 12 ? 'PM' : 'AM';
            var hours = values[0] % 12;

            return hours + ':' + values[1] + ' : ' + ampm;
        },
        cols: [
            // Hours
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) {
                        arr.push(i < 10 ? '0' + i : i);
                    }
                    return arr;
                })(),
            }
        ]
    });
}

function MedicationformInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=77";
    $.getJSON(url, function(json) {
            $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
        }).done(function() {})
        .fail(function() {
            alert("error");
        });
}


function checkAll(ele) {
    var checkboxes = document.getElementsByClassName('mon');
    if (ele.checked) {
        $('.mon').prop('checked', true);
    } else {
        $('.mon').prop('checked', false);
    }
}

function removeMedicationImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "image = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=medications&columns=" + val + "&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // $("#health_insurance_ul_"+id).remove();
        });

    });
}


function createCalendarEventWithOptions(ids) {
    var storedData1 = myApp.formGetData('logged_userId');
    var title = 'Medication';
    var loc = 'Lebanon';
    var notes = 'We would like to Remind you of your Medication ';
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medications&columns=*&condition=id=" + ids;

    $.getJSON(url, function(json) {
        notes += '\n';
        notes += 'Medication Name:';
        notes += json['posts'][0]['name'];
        var url2 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=healthcare_providers&condition=hcp_id=" + json['posts'][0]['prescribedbydr'];

        $.getJSON(url2, function(json) {
            notes += '\n';
            notes += 'Prescribed by Doctor:';
            if (json['posts'][0]) {
                notes += json['posts'][0]['first_name'];
            }
        });
        notes += '\n';
        notes += 'Dosage:';
        notes += json['posts'][0]['dosage'];

        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=calendar&columns=*&condition=itemId=" + json['posts'][0]['id'];

        $.getJSON(url1, function(json) {
            var startDate = json['posts'][0]['reminderDate'];
            var timeNew = json['posts'][0]['reminderTime'];
            timeNew = timeNew.split(':');
            startDate = startDate.split('-');
            //alert("2");
            var endDate = $('#medi_end_remind').val();
            if (timeNew[2].trim() == 'PM') {
                timeNew[0] = parseInt(timeNew[0]) + parseInt(12);
            }

            var startDate = new Date(startDate[0], parseInt(startDate[1]) - parseInt(1), startDate[2], timeNew[0], timeNew[1]);

            // var endDate = new Date();
            var endDate = $('#medi_end_remind').val();

            endDate = endDate.split('-');
            var endDate = new Date(endDate[0], parseInt(endDate[1]) - parseInt(1), endDate[2], timeNew[0], timeNew[1]);
            var createCalOptions = window.plugins.calendar.getCreateCalendarOptions();
            createCalOptions.calendarName = "HRP";
            createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
            window.plugins.calendar.createCalendar(createCalOptions, success, error);
            var success = function(message) {
                alert("Success: " + JSON.stringify(message));
            };
            var error = function(message) {
                alert("Error: " + message);
            };
            var calendarName = 'HRP';
            var options = {
                calendarName: calendarName, // iOS specific
                calendarId: 1, // Android specific
                firstReminderMinutes: 120,
                secondReminderMinutes: 5
            };
            // default is 60, pass in null for no reminder (alarm)

            // add a few hours to the dates, JS will automatically update the date (+1 day) if necessary
            startDate.setHours(startDate.getHours());
            endDate.setHours(endDate.getHours() + 1);
            window.plugins.calendar.createEventInteractivelyWithOptions(title, loc, notes, startDate, options, endDate, onSuccess, onError);

            function onSuccess(msg) {
                myApp.alert('Calendar success ', 'Sucess');
            }

            function onError(msg) {
                myApp.alert('Calendar error ', 'Failed');
            }
        });
    });
}

function medicationformSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var name = $('#medi_medicine_name').val();
    var dosage = $('#medi_dosage').val();
    var reference = $('#medi_medi_reference').val();
    var treatmentof = $('#medi_used_treatment').val();
    var medicationsform_id = $('#medicationsform_id').val();
    if (document.getElementById('medi_tab').checked) {
        var tomd = document.getElementById('medi_tab').value;
    }
    if (document.getElementById('medi_cap').checked) {
        var tomd = document.getElementById('medi_cap').value;
    }
    if (document.getElementById('medi_syrup').checked) {
        var tomd = document.getElementById('medi_syrup').value;
    }
    if (document.getElementById('medi_suppos').checked) {
        var tomd = document.getElementById('medi_suppos').value;
    }
    if (document.getElementById('medi_inj').checked) {
        var tomd = document.getElementById('medi_inj').value;
    }
    var dateStarted = $('#medi_datestarted').val();
    var enddate = $('#medi_enddate').val();
    var enddate1 = $('#medi_end_remind').val();
    // var type = $('#medi_still_using').val();
    if (document.getElementById('medi_still_using').checked) {
        var type = document.getElementById('medi_still_using').value;
    }
    var otherProvider = $('#medi_precribed_others').val();

    if (medicationsform_id == '') {
        var prescribedbydr = $('#medi_precribed').val();

        var columnName = "name,dosage,reference,treatmentof,prescribedbydr,otherProvider,tomd,dateStarted,enddate,enddate1,type,customerId";

        var coloumnValue = "'" + name + "','" + dosage + "','" + reference + "','" + treatmentof + "','" + prescribedbydr + "','" + otherProvider + "','" + tomd + "','" + dateStarted + "','" + enddate + "','" + enddate1 + "','" + type + "','" + storedData1['userId'] + "'";
        if (dateStarted == '' || name == '') {
            if (name == '') {
                myApp.alert('Please Enter Physician Name', 'Medication');
            } else {
                myApp.alert('Please Enter Date', 'Medication');
            }
        } else {


            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=medications&columns=" + columnName + "&values=" + coloumnValue + "";

            $.getJSON(url, function(json) {
                //alert(json['posts'][0]);
                uploadMedicationPic(json['posts'][0]);
                //uploadMedicationCameraPic(json['posts'][0])

                //createCalendarEventWithOptions(json['posts'][0]);
                //myApp.alert(json['posts'][0]);
                if (document.getElementById('medi_all_days').checked) {
                    var monday = document.getElementById('medi_all_days').value;
                    var tuesday = document.getElementById('medi_all_days').value;
                    var wednesday = document.getElementById('medi_all_days').value;
                    var thursday = document.getElementById('medi_all_days').value;
                    var friday = document.getElementById('medi_all_days').value;
                    var saturday = document.getElementById('medi_all_days').value;
                    var sunday = document.getElementById('medi_all_days').value;
                } else {

                    var monday = 0;
                    var tuesday = 0;
                    var wednesday = 0;
                    var thursday = 0;
                    var friday = 0;
                    var saturday = 0;
                    var sunday = 0;
                }
                if (document.getElementById('medi_monday').checked) {
                    var monday = document.getElementById('medi_monday').value;
                }
                if (document.getElementById('medi_tuesday').checked) {
                    var tuesday = document.getElementById('medi_tuesday').value;
                }
                if (document.getElementById('medi_wednesday').checked) {
                    var wednesday = document.getElementById('medi_wednesday').value;
                }
                if (document.getElementById('medi_thursday').checked) {
                    var thursday = document.getElementById('medi_thursday').value;
                }
                if (document.getElementById('medi_friday').checked) {
                    var friday = document.getElementById('medi_friday').value;
                }
                if (document.getElementById('medi_saturday').checked) {
                    var saturday = document.getElementById('medi_saturday').value;
                }
                if (document.getElementById('medi_sunday').checked) {
                    var sunday = document.getElementById('medi_sunday').value;
                }
                var reminderDate = $('#medi_start_remind').val();
                var reminderTime = $('#medi_remind_time').val();
                if (document.getElementById('medi_sunday').checked) {
                    var email = document.getElementById('medi_receive_email').value;
                }
                var columnNa = "monday,tuesday,wednesday,thursday,friday,saturday,sunday,reminderDate,reminderTime,email,customerId,itemId,table_name,sectionId";

                var columnVa = "'" + monday + "','" + tuesday + "','" + wednesday + "','" + thursday + "','" + friday + "','" + saturday + "','" + sunday + "','" + reminderDate + "','" + reminderTime + "','" + email + "','" + storedData1['userId'] + "','" + json['posts'] + "','medication','8'";


                var url1 = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=calendar&columns=" + columnNa + "&values=" + columnVa + "";

                $.getJSON(url1, function(json) {

                    if (json['posts'][0]) {
                        createCalendarEventWithOptions(json['posts'][0]);
                        // getMedicationsData();

                        myApp.alert("Your Details has been Created", 'Success');

                        mainView.router.loadPage('medications_listing.html');

                    } else {

                        myApp.alert("Your Details Not Created", 'Failure');

                    }
                });
            });
        }

    } else {

        if (isNaN($('#medi_precribed').val())) {
            var prescribedbydr = $('#medi_precribed_id').val();
        } else {
            var prescribedbydr = $('#medi_precribed').val();
        }

        var val = "name = '" + name + "',dosage = '" + dosage + "',reference = '" + reference + "',treatmentof = '" + treatmentof + "',prescribedbydr = '" + prescribedbydr + "',otherProvider = '" + otherProvider + "',tomd = '" + tomd + "',dateStarted = '" + dateStarted + "',enddate = '" + enddate + "',enddate1 = '" + enddate1 + "',type='" + type + "'";

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=medications&columns=" + val + "&condition=id=" + medicationsform_id;
        uploadMedicationPic(medicationsform_id);
        //uploadMedicationCameraPic(medicationsform_id)

        $.getJSON(url, function(json) {
            ;

            if (document.getElementById('medi_all_days').checked) {

                var monday = document.getElementById('medi_all_days').value;
                var tuesday = document.getElementById('medi_all_days').value;
                var wednesday = document.getElementById('medi_all_days').value;
                var thursday = document.getElementById('medi_all_days').value;
                var friday = document.getElementById('medi_all_days').value;
                var saturday = document.getElementById('medi_all_days').value;
                var sunday = document.getElementById('medi_all_days').value;

            } else {
                var monday = 0;
                var tuesday = 0;
                var wednesday = 0;
                var thursday = 0;
                var friday = 0;
                var saturday = 0;
                var sunday = 0;
            }
            if (document.getElementById('medi_monday').checked) {
                var monday = document.getElementById('medi_monday').value;
            }
            if (document.getElementById('medi_tuesday').checked) {
                var tuesday = document.getElementById('medi_tuesday').value;
            }
            if (document.getElementById('medi_wednesday').checked) {
                var wednesday = document.getElementById('medi_wednesday').value;
            }
            if (document.getElementById('medi_thursday').checked) {
                var thursday = document.getElementById('medi_thursday').value;
            }
            if (document.getElementById('medi_friday').checked) {
                var friday = document.getElementById('medi_friday').value;
            }
            if (document.getElementById('medi_saturday').checked) {
                var saturday = document.getElementById('medi_saturday').value;
            }
            if (document.getElementById('medi_sunday').checked) {
                var sunday = document.getElementById('medi_sunday').value;
            }
            var reminderDate = $('#medi_start_remind').val();
            var reminderTime = $('#medi_remind_time').val();
            if (document.getElementById('medi_sunday').checked) {
                var email = document.getElementById('medi_receive_email').value;
            }

            var val1 = "monday = '" + monday + "',tuesday = '" + tuesday + "',wednesday = '" + wednesday + "',thursday = '" + thursday + "',friday = '" + friday + "',saturday = '" + saturday + "',sunday = '" + sunday + "',reminderDate = '" + $('#medi_start_remind').val() + "',reminderTime = '" + $('#medi_remind_time').val() + "',email = '" + email + "'";

            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=calendar&columns=" + val1 + "&condition=itemId=" + medicationsform_id;

            $.getJSON(url1, function(json) {
                ;

                if (json['posts']) {
                    createCalendarEventWithOptions(medicationsform_id);

                    // getMedicationsData();
                    myApp.alert("Your Details has been Created", 'Success');
                    0
                    mainView.router.loadPage('medications_listing.html');


                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });


        });

    }
}


function deleteMedication() {
    tableid = $('#medicationsform_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=medications&columns=&condition=id=" + tableid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            // $("#medications_ul_"+id).remove();
            // getMedicationsData();
            mainView.router.loadPage('medications_listing.html');

        });
    });
}


//////////////////////////------------------------------ End medications_listing ------------------------------------------------------------




//////////////////////////------------------------------  medical_history_condi_listing ------------------------------------------------------------

function getmedihistoryData() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=illnessescustomers&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            // myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            var namesSpeciality = [];
            var namesSpecialityID = [];
            var editId = [];
            $('#medicalhistory1').html('');
            $('#medicalhistory').html('');
            if (json['posts'] == 0) {
                var data = "No Records ";
                $('#medicalhistory').append(data);
            } else {
                for (var i = 0; i < count; i++) {
                    if (json['posts'][i]['stillActive'] == 0) {
                        var data = "<ul id='medical_history_conditions_ul_" + i + "'><li ><a href='medical_history.html' class='item-link' onclick='medihistoryEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title' id='display_medhis_" + i + "'></div></div></div></a></li></ul>";
                        $('#medicalhistory1').append(data);
                    } else {
                        var data = "<ul id='medical_history_conditions_ul_" + i + "'><li ><a href='medical_history.html' class='item-link' onclick='medihistoryEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title' id='display_medhis_" + i + "'></div></div></div></a></li></ul>";
                        $('#medicalhistory').append(data);
                    }
                    namesSpecialityID.push(json['posts'][i]['illnessId']);
                    editId.push(json['posts'][i]['id'] + "_" + json['posts'][i]['illnessId']);

                    // myApp.showPreloader();
                }
            }
            // setTimeout(function(){
            for (var j = 0; j < namesSpecialityID.length; j++) {
                myApp.showPreloader()
                var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=illnesses&condition=id=" + namesSpecialityID[j];
                // myApp.hidePreloader();
                jQuery.ajaxSetup({
                    async: false
                });
                $.getJSON(url1, function(json1) {
                    namesSpeciality.push(json1);
                });
                myApp.hidePreloader();
                // $('#display_medhis_'+i).append(namesSpeciality[i]['posts'][0]['name']);
            }
            for (var k = 0; k < namesSpeciality.length; k++) {
                if (json['posts'][k]['illnessId'] == '-1') {
                    $('#display_medhis_' + k).append(json['posts'][k]['other']);
                } else {
                    $('#display_medhis_' + k).append(namesSpeciality[k]['posts'][0]['name']);
                }
            }
            // },600);
            myApp.hidePreloader();
        });
    }, 1000);

}

function getcalendarMedihis(ele) {
    var calendarDefault = myApp.calendar({
        input: '#medi_sdate_' + ele,
    });
}

function getcalendarMedihis1(ele) {
    var calendarDefault = myApp.calendar({
        input: '#medi_rdate_' + ele,
    });
}


function medihistoryEdit(medi_id) {
    setTimeout(function() {

        getcalendarMedihis(0);
        getcalendarMedihis1(0);
        page_parameter = 13

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=illnessescustomers&columns=*&condition=id=" + medi_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            for (var i = 0; i < count; i++) {
                var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=illnesses&condition=id=" + json['posts'][0]['illnessId'];

                $.getJSON(url1, function(json) {

                    if (json['posts'] == 0) {
                        DieasesName(0, -1);
                        $('#medi_his_name_others_li_0').css('display', 'block');
                    } else {
                        $('#medi_his_name_0').val(json['posts'][0]['name']);
                        $('#medi_his_name_id_0').val(json['posts'][0]['id']);

                        DieasesName(0, json['posts'][0]['id']);
                    }

                });
                if (json['posts'][0]['stillActive'] == 1) {
                    $('#medi_sactive_' + i).attr('checked', 'checked');
                    $('#medi_rdate_0').css("display", "none")

                } else {
                    $('.text3').hide();
                }
                $('#medi_his_name_others_0').val(json['posts'][0]['other']);
                // $('#medi_sactive').val( json['posts'][0]['stillActive'] );
                $('#medi_sdate_' + i).val(json['posts'][0]['start_date']);
                $('#medi_rdate_' + i).val(json['posts'][0]['resolvedDate']);
                $('#update_medi_sdate').val(json['posts'][0]['id']);
                $('#medi_descr_0').val(json['posts'][0]['description']);
            }
        });
    }, 1000);
}

function MedicalhistoryInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=25";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function symptom() {

    url = 'https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075';
    window.open(url, '_system', 'hidden=yes,closebuttoncaption=Close,enableViewportScale=yes');
    page_parameter = 13;

}


function medihistoryAdd() {
    page_parameter = 13;
    setTimeout(function() {
        $("#medihistory_inbtn").css('display', 'none');
        $("#medihistory_upbtn").css('display', 'block');
        $("#medi_add").css('display', 'block');
        DieasesName(0);
        getcalendarMedihis(0);
        getcalendarMedihis1(0);
    }, 500);
}


//medical_history.html


function MedicalhistoryformInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=79";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function medicalhistorySubmit() {
    var medihisadd = $('#rowIdFH10').val();
    var stillActive
    setTimeout(function() {
        for (i = 0; i <= medihisadd; i++) {
            var storedData1 = myApp.formGetData('logged_userId');
            var illnessId = $('#medi_his_name_' + i).val();
            // var stillActive = $('#medi_sactive_'+i).;
            if (document.getElementById('medi_sactive_' + i).checked) {
                stillActive = document.getElementById('medi_sactive_' + i).value;
                if (stillActive === undefined) {
                    stillActive = 0;
                }
            }
            var start_date = $('#medi_sdate_' + i).val();
            var resolvedDate = $('#medi_rdate_' + i).val();
            var other = $('#medi_his_name_others_' + i).val();
            var update_medi_sdate = $('#update_medi_sdate').val();
            var description = $('#medi_descr_0').val();

            if (update_medi_sdate == '') {
                myApp.showPreloader();

                var columnNam = "illnessId,stillActive,start_date,resolvedDate,other,customerId,description";
                var columnVal = "'" + illnessId + "','" + stillActive + "','" + start_date + "','" + resolvedDate + "','" + other + "','"
                var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=illnessescustomers&columns=" + columnNam + "&values=" + columnVal + "";
                $.getJSON(url, function(json) {
                    myApp.hidePreloader();

                    if (json['posts'][0]) {
                        // getmedihistoryData();
                        myApp.alert("Your Details has been Created", 'Success');
                        mainView.router.loadPage('medical_history_condi_listing.html');
                    } else {
                        myApp.alert("Your Details Not Created", 'Failure');
                    }

                });

            } else {
                var val = "illnessId = '" + illnessId + "',stillActive = '" + stillActive + "',start_date = '" + start_date + "',resolvedDate = '" + resolvedDate + "',other = '" + other + "',customerId = '" + storedData1['userId'] + "',description ='" + description + "'";
                myApp.showPreloader();
                var url1 = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=illnessescustomers&columns=" + val + "&condition=id=" + update_medi_sdate;

                $.getJSON(url1, function(json) {
                    myApp.hidePreloader();
                    console.log(json['posts'][0]);
                    if (json['posts'][0]) {
                        // getmedihistoryData();
                        myApp.alert("Your Details has been updated", 'Success');
                        mainView.router.loadPage('medical_history_condi_listing.html');
                    } else {
                        myApp.alert("Your Details Not Created", 'Failure');
                    }

                });
            }
        }
    }, 1000);
}

function deleteMediHistory() {
    tableid = $('#update_medi_sdate').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=illnessescustomers&columns=&condition=id=" + tableid;
        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            // $("#medical_history_conditions_ul_"+id).remove();
            // getmedihistoryData();
            mainView.router.loadPage('medical_history_condi_listing.html');

        });

    });
}

//////////////////////////------------------------------ End medical_history_condi_listing ------------------------------------------------------------



//////////////////////////------------------------------  allergies_listing ------------------------------------------------------------


function uploadAllergiesPic(update_id) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (update_id == '') {
        var allergies_id = $('#allergies_id').val();
    } else {
        var allergies_id = update_id;
    }

    $('#allergies_con_image_id').val(allergies_id);
    formData = new FormData($('#file-attachment-form10')[0]);

    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=uploadAllergiesImage',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            // alert(data);
            // alert('File uploaded');
            // mainView.router.loadPage('doctors_appoin_listing.html');
        }
    })
    return false;
}
function getAllergiesData() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=allergies&columns=*&condition=customerid=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            // myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            $('#allergies').html('');
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#allergies').append(data);
            } else {
                for (i = 0; i < count; i++) {

                    if (json['posts'][i]['type'] == '1') {
                        var type = 'DRUG';
                    } else if (json['posts'][i]['type'] == '2') {
                        var type = 'FOOD';
                    } else if (json['posts'][i]['type'] == '3') {
                        var type = 'ENVIRONMENTAL';
                    }

                    var data = "<ul id='allergies_ul_" + i + "'><li><a href='allergies.html' class='item-link' onclick='allergiesEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + type + " | " + json['posts'][i]['typename'] + "</div></div></div></a></li></ul>";

                    $('#allergies').append(data);
                }
            }

        });
    }, 500);
}


function allergiesEdit(id) {
    page_parameter = 14;
    setTimeout(function() {


        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=allergies&columns=*&condition=id=" + id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            $('#allergies_select').val(json['posts'][0]['type']);

            $('#allergies_alrto').val(json['posts'][0]['typename']);
            $('#allergies_react').text(json['posts'][0]['reaction']);
            $('#allergies_treat').text(json['posts'][0]['treatment']);
            $('#allergies_id').val(json['posts'][0]['id']);

            if (json['posts'][0]['image'] != '') {
                $('#allergies_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['image'] + '" height="200" style="max-width:100%;" onclick="Allergiesimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');
            } else {
                $('#allergiesremovehide').hide();
            }

        });
    }, 1500);

}

function AllergicPageInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=2";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function allergiesAdd() {
    page_parameter = 14;
    setTimeout(function() {
        $("#allergies_inbtn").css('display', 'none');
        $("#allergies_upbtn").css('display', 'block');
        $("#allergiesremovehide").css('display', 'none');
    }, 500);
}

//allergies.html

function AllergicformInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=81";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function removeAllergiesImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "image = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=allergies&columns=" + val + "&condition=customerid=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // mainView.router.loadPage('loginnormal.html');
            // $("#health_insurance_ul_"+id).remove();
        });

    });
}



function allergiesSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var type = $('#allergies_select').val();
    var typename = $('#allergies_alrto').val();
    var reaction = $('#allergies_react').val();
    var treatment = $('#allergies_treat').val();
    var allergies_id = $('#allergies_id').val();

    if (allergies_id == '') {
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=allergies&columns=type,typename,reaction,treatment,customerid,active&values='" + type + "','" + typename + "','" + reaction + "','" + treatment + "','" + storedData1['userId'] + "','1'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                uploadAllergiesPic(json['posts'][0]);
                // getAllergiesData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('allergies_listing.html');

            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {

        var val = "type = '" + $('#allergies_select').val() + "',typename = '" + $('#allergies_alrto').val() + "',reaction = '" + $('#allergies_react').val() + "',treatment = '" + $('#allergies_treat').val() + "'";
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=allergies&columns=" + val + "&condition=id=" + allergies_id;
        uploadAllergiesPic(allergies_id);

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getAllergiesData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('allergies_listing.html');
            } else {
                // getAllergiesData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('allergies_listing.html');
            }

        });
    }

}



function deleteAllergies() {
    tableid = $('#allergies_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=allergies&columns=&condition=id=" + tableid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            // $("#allergies_ul_"+id).remove();
            // getAllergiesData();
            mainView.router.loadPage('allergies_listing.html');
        });
    });
}


//////////////////////////------------------------------ End allergies_listing ------------------------------------------------------------



//////////////////////////------------------------------ immunization_listing ------------------------------------------------------------


function ImmunizationInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=14";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function uploadImmunizationPic(update_id) {
    var storedData1 = myApp.formGetData('logged_userId');

    if (update_id == '') {
        var immunization_id = $('#immunization_id');
    } else {
        var immunization_id = update_id;
    }


    $('#immunization_image_id').val(immunization_id);
    formData = new FormData($('#file-attachment-form12')[0]);

    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=uploadImmunizationImage',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            //alert(data);
            // alert('File uploaded');
            // mainView.router.loadPage('doctors_appoin_listing.html');
        }
    })
    return false;
}



function immunizationAdd() {
    page_parameter = 15;
    setTimeout(function() {
        $("#immunization_inbtn").css('display', 'none');
        $("#immunization_upbtn").css('display', 'block');
        $("#immu_add").css('display', 'block');
        $("#immuniRemovehide").css('display', 'none');
        MedicineName(0);
        getimmuCalander(0);
        getimmuCalander1(0);
        getimmuCalander2(0);
    }, 500);
}

// immunization.html

function getimmuData() {
    myApp.showPreloader();
    page_parameter = 1;
    tempPage = 15;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');

        var url = "https://www.healthrecordspro.com/wsplus.php?type=immunizationlisting&format=json&user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#immunizations').append(data);
            } else {
                var names = [];
                for (var i = 0; i < count; i++) {

                    var data = "<ul id='immunizations_ul_" + i + "'><li><a href='immunization.html' class='item-link' onclick='immunizationEdit(" + json['posts'][i]['immunizations_id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title' id='display_immunization_" + i + "'>" + json['posts'][i]['type'] + "</div></div></div></a></li></ul>";
                    $('#immunizations').append(data);

                }
            }

        });
    }, 600);
}


function immunizationEdit(immunizations_id) {
    page_parameter = 15;
    setTimeout(function() {

        getimmuCalander(0);
        getimmuCalander1(0);
        getimmuCalander2(0);
        $("#immuniRemovehide").attr("data-id", immunizations_id)
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=immunizations&columns=*&condition=immunizations_id=" + immunizations_id;

        $.getJSON(url, function(json) {

            myApp.hidePreloader();
            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }

            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=immunization_types&condition=immunizations_type_id=" + json['posts'][0]['immunizations_type_id'];
            for (var i = 0; i < count; i++) {
                $.getJSON(url1, function(json) {

                    // $('#immu_name_0').val( json['posts'][0]['type'] );
                    // $('#immu_name_id_0').val( json['posts'][0]['immunizations_type_id'] );
                    // MedicineName(0,json['posts'][0]['immunizations_type_id']);

                    if (json['posts'] == 0) {
                        MedicineName(0, -1);
                        $('#immu_name_others_li_0').css('display', 'block');
                    } else {
                        $('#immu_name_0').val(json['posts'][0]['type']);
                        $('#immu_name_id_0').val(json['posts'][0]['immunizations_type_id']);
                        MedicineName(0, json['posts'][0]['immunizations_type_id']);
                    }

                });

                $('#immu_name_others_' + i).val(json['posts'][0]['other']);
                $('#boost1_' + i).val(json['posts'][0]['booster1']);
                $('#boost2_' + i).val(json['posts'][0]['booster2']);
                $('#boost3_' + i).val(json['posts'][0]['booster3']);
                $('#immunization_id').val(json['posts'][0]['immunizations_id']);
                if (json['posts'][0]['image'] != '') {
                    $('#immunization_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['image'] + '" width="200" height="200" onclick="Immunizationimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');
                } else {
                    $('#immuniRemovehide').hide();
                }
            }

        });
    }, 500);

}

function getimmuCalander(ele) {
    var calendarDefault = myApp.calendar({
        input: '#boost1_' + ele,
    });
}


function getimmuCalander1(ele) {
    var calendarDefault = myApp.calendar({
        input: '#boost2_' + ele,
    });
}

function getimmuCalander2(ele) {
    var calendarDefault = myApp.calendar({
        input: '#boost3_' + ele,
    });
}



function ImmuniztionformInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=83";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function removeImmuImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "image = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=immunizations&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // selectHomepageDisplay();
            var immunizationid = $("#immuniRemovehide").attr("data-id");
            $('#immunization_img_display').html("");
            console.log(immunizationid)
            immunizationEdit(immunizationid)

        });

    });
}


function immunizationSubmit() {
    myApp.showPreloader();
    var immuni = $('#rowIdFH11').val();
    for (i = 0; i <= immuni; i++) {
        var storedData1 = myApp.formGetData('logged_userId');
        var immunizations_type_id = $('#immu_name_' + i).val();
        var booster1 = $('#boost1_' + i).val();
        var booster2 = $('#boost2_' + i).val();
        var booster3 = $('#boost3_' + i).val();
        var other = $('#immu_name_others_' + i).val();
        var immunization_id = $('#immunization_id').val();

        if (immunization_id == '') {

            var columnNam = "immunizations_type_id,booster1,booster2,booster3,other,user_id";
            var columnVal = "'" + immunizations_type_id + "','" + booster1 + "','" + booster2 + "','" + booster3 + "','" + other + "','" + storedData1['userId'] + "'";

            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=immunizations&columns=" + columnNam + "&values=" + columnVal + "";

            $.getJSON(url, function(json) {
                myApp.hidePreloader();
                if (json['posts'][0]) {
                    uploadImmunizationPic(json['posts'][0]);
                    getimmuData();
                    myApp.alert("Your Details has been Created", 'Success');
                    mainView.router.loadPage('immunization_listing.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }

            });
        } else {

            if (isNaN($('#immu_name').val())) {
                var prescribedbydr = $('#immu_name_id').val();
            } else {
                var prescribedbydr = $('#immu_name').val();
            }

            var val = "immunizations_type_id = '" + immunizations_type_id + "',booster1 = '" + booster1 + "',booster2 = '" + booster2 + "',booster3 = '" + booster3 + "',other = '" + other + "'";
            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=immunizations&columns=" + val + "&condition=immunizations_id=" + immunization_id;
            uploadImmunizationPic(immunization_id);
            $.getJSON(url1, function(json) {
                myApp.hidePreloader();
                if (json['posts']) {
                    getimmuData();
                    myApp.alert("Your Details has been updated", 'Success');
                    mainView.router.loadPage('immunization_listing.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });

        }
    }

}



function deleteImmunization() {
    immunizations_id = $('#immunization_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=immunizations&columns=&condition=immunizations_id=" + immunizations_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            // $("#immunizations_ul_"+id).remove();
            getimmuData();
            mainView.router.loadPage('immunization_listing.html');

        });
    });
}

//////////////////////////------------------------------ End immunization_listing ------------------------------------------------------------



//////////////////////////------------------------------ surgeries_listing ------------------------------------------------------------


function uploadSurgeriesUploadPic(update_id) {
    var storedData1 = myApp.formGetData('logged_userId');
    if (update_id == '') {
        var surgeries_id = $('#surgeries_id');
    } else {
        var surgeries_id = update_id;
    }
    $('#sur_upload_image_id').val(surgeries_id);
    formData = new FormData($('#file-attachment-form5')[0]);
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=uploadSurgeriesImage',
        data: formData,
        contentType: false,
        processData: false,
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('Failed to upload file')
        },
        success: function(data) {
            //alert(data);
            // alert('File uploaded')
        }
    })
    return false;
}

function getSurgeriesData() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=surgeries&columns=*&condition=user_id=" + storedData1['userId'] + "%20order%20by%20adminissionDate%20desc";

        $.getJSON(url, function(json) {
            // myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            $('#surgeriesd').html('');
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#surgeriesd').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    var data = "<ul id='surgeries_ul_" + i + "'><li><a href='surgeries.html' class='item-link' onclick='surgeriesEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['adminissionDate'] + " | " + json['posts'][i]['hospital'] + "</div></div></div></a></li></ul>";

                    $('#surgeriesd').append(data);

                }
            }

        });
    }, 500);
}



function surgeriesEdit(id) {
    page_parameter = 15;
    setTimeout(function() {

        getsuraddCal();
        getsurdisCal();

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=surgeries&columns=*&condition=id=" + id + "%20order%20by%20adminissionDate%20desc";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            $('#sur_add_date').val(json['posts'][0]['adminissionDate']);
            $('#sur_dis_date').val(json['posts'][0]['dischargeDate']);
            $('#sur_caseno').val(json['posts'][0]['case']);
            $('#sur_physician').val(json['posts'][0]['physician']);
            $('#sur_reason').val(json['posts'][0]['reason']);
            $('#sur_hospital').val(json['posts'][0]['hospital']);
            $('#sur_address').val(json['posts'][0]['address']);
            $('#sur_diag').val(json['posts'][0]['diagnosis']);
            $('#sur_procedure').val(json['posts'][0]['procedure']);
            $('#sur_pathology').val(json['posts'][0]['pathology']);
            $('#sur_important_findings').val(json['posts'][0]['importantFindings']);
            $('#surgeries_id').val(json['posts'][0]['id']);
            if (json['posts'][0]['image'] != '') {
                $('#surgeries_img_display').html('<img src="https://healthrecordspro.com/upload/' + json['posts'][0]['image'] + '" width="200" height="200" onclick="Surgeriesimagepopupdisplay(\'' + json['posts'][0]['image'] + '\')">');
            } else {
                $('#surgeriesRemovehide').hide();
            }

        });
    }, 1500);

}


function getsuraddCal() {
    var calendarDefault = myApp.calendar({
        input: '#sur_add_date',
    });
}


function getsurdisCal() {
    var calendarDefault = myApp.calendar({
        input: '#sur_dis_date',
    });
}

function SurgeriesInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=68";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function surgeriesAdd() {
    page_parameter = 15;
    setTimeout(function() {
        $("#surgeries_inbtn").css('display', 'none');
        $("#surgeries_upbtn").css('display', 'block');
        $("#surgeriesRemovehide").css('display', 'none');
        getsuraddCal();
        getsurdisCal();
    }, 500);
}
//surgeries.html

function surgeriesFormInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=84";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function removeSurgeriesImage() {
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var val = "image = ''";
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=surgeries&columns=" + val + "&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            selectHomepageDisplay();
            // $("#health_insurance_ul_"+id).remove();
        });

    });
}

function surgeriesSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var adminissionDate = $('#sur_add_date').val();
    var dischargeDate = $('#sur_dis_date').val();
    var caseno = $('#sur_caseno').val();
    var physician = $('#sur_physician').val();
    var reason = $('#sur_reason').val();
    var hospital = $('#sur_hospital').val();
    var address = $('#sur_address').val();
    var diagnosis = $('#sur_diag').val();
    var procedure = $('#sur_procedure').val();
    var pathology = $('#sur_pathology').val();
    var importantFindings = $('#sur_important_findings').val();
    var surgeries_id = $('#surgeries_id').val();

    if (surgeries_id == '') {
        if (adminissionDate == '') {
            myApp.alert('Please Enter Date', 'Surgeries');
        } else {
            myApp.showPreloader();

            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=surgeries&columns=adminissionDate,dischargeDate,`case`,physician,reason,hospital,address,diagnosis,`procedure`,pathology,importantFindings,user_id&values='" + adminissionDate + "','" + dischargeDate + "','" + caseno + "','" + physician + "','" + reason + "','" + hospital + "','" + address + "','" + diagnosis + "','" + procedure + "','" + pathology + "','" + importantFindings + "','" + storedData1['userId'] + "'";

            $.getJSON(url, function(json) {
                myApp.hidePreloader();

                if (json['posts'][0]) {
                    uploadSurgeriesUploadPic(json['posts'][0]);
                    // getSurgeriesData();
                    myApp.alert("Your Details has been Created", 'Success');
                    mainView.router.loadPage('surgeries_listing.html');

                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }

            });
        }

    } else {

        var val = "adminissionDate = '" + $('#sur_add_date').val() + "',dischargeDate = '" + $('#sur_dis_date').val() + "',`case`= '" + $('#sur_caseno').val() + "',physician = '" + $('#sur_physician').val() + "',reason = '" + $('#sur_reason').val() + "',hospital = '" + $('#sur_hospital').val() + "',address = '" + $('#sur_address').val() + "',diagnosis = '" + $('#sur_diag').val() + "',`procedure` = '" + $('#sur_procedure').val() + "',pathology = '" + $('#sur_pathology').val() + "',importantFindings = '" + $('#sur_important_findings').val() + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=surgeries&columns=" + val + "&condition=id=" + surgeries_id;
        uploadSurgeriesUploadPic(surgeries_id);
        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getSurgeriesData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('surgeries_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    }
}


function deleteSurgeries() {
    tableid = $('#surgeries_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=surgeries&columns=&condition=id=" + tableid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // $("#surgeries_ul_"+id).remove();
            // getSurgeriesData();
            mainView.router.loadPage('surgeries_listing.html');
        });
    });
}
//////////////////////////------------------------------ End surgeries_listing ------------------------------------------------------------




//////////////////////////------------------------------ family_history_listing ------------------------------------------------------------

function getFamilyhisData() {
    page_parameter = 16
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=familyhistorycustomers&columns=*&condition=customerid=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#familyhis').append(data);
            } else {
                var names = [];
                var idH = [];
                for (i = 0; i < count; i++) {
                    //var a = 0;
                    //if(i > 0 ){
                    //a = idH.indexOf(json['posts'][i]['historyid']);
                    //}
                    //if(a <= 0){
                    var data = "<ul id='family_his_ul'><li><a href='family_history.html' class='item-link' onclick='familyHisEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title' id='display_family_his_" + i + "'></div></div></div></a></li></ul>";
                    //idH.push(json['posts'][i]['historyid']);

                    $('#familyhis').append(data);

                    var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=familyhistory&condition=id=" + json['posts'][i]['historyid'];
                    //alert(json['posts'][i]['historyid']);
                    jQuery.ajaxSetup({
                        async: false
                    });
                    $.getJSON(url1, function(json1) {

                        names.push(json1);
                        console.log(names)
                    });
                }
            }
            for (var i = 0; i < count; i++) {
                myApp.hidePreloader();
                if (json['posts'][i]['historyid'] == '-1') {
                    $('#display_family_his_' + i).append(json['posts'][i]['other']);
                } else {
                    if (names.length > 0) {
                        $('#display_family_his_' + i).append(names[i]['posts'][0]['type']);
                    }
                }
            }
        });
    }, 500);
}


function familyHisEdit(hisID) {
    page_parameter = 17;
    setTimeout(function() {

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url3 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=familyhistorycustomers&columns=*&condition=id=" + hisID + "%20AND%20customerid=" + storedData1['userId'];

        $.getJSON(url3, function(json1) {
            myApp.hidePreloader();
            var key, count = 0;

            var url2 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=familyhistory&condition=id=" + json1['posts'][0]['historyid'];

            $.getJSON(url2, function(json2) {
                myApp.hidePreloader();
                if (json2['posts'] == 0) {
                    FamilyHisTypes(-1);
                    $('#family_his_speciality_li').css('display', 'block');
                } else {
                    $('#family_his_speciality_others').val(json2['posts'][0]['type']);
                    $('#family_his_speciality_id').val(json2['posts'][0]['id']);


                    FamilyHisTypes(json2['posts'][0]['id']);
                }
            });
            var name = [];
            $('#family_his_speciality_others').val(json1['posts'][0]['other']);
            $('#family_his_speciality_others_1').val(json1['posts'][0]['other_1']);
            $('#family_his_speciality_others_2').val(json1['posts'][0]['other_2']);
            $('#family_his_speciality_others_3').val(json1['posts'][0]['other_3']);
            if (json1['posts'][0]['mother'] == "true") {
                $('#family_his_mother').attr('checked', 'checked');
            }
            //if(json['posts'][0]['other'])
            if (json1['posts'][0]['father'] == "true") {
                $('#family_his_father').attr('checked', 'checked');
            }
            if (json1['posts'][0]['sibling'] == "true") {
                $('#family_his_sibling').attr('checked', 'checked');
            }
            $('#update_familyhis1_id').val(json1['posts'][0]['id']);
        });
    }, 500);
}

function FamilyhistoryInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=9";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}




function getFamilyCauseDeathData() {
    page_parameter = 16
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=familycauseofdeathcustomer&columns=*&condition=customerid=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            // myApp.hidePreloader();

            var key, count = 0;

            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }

            if (json['posts'] == 0) {
                var data = "No Records ";
                $('#familyhiscauseofdeath').append(data);
            } else {
                for (i = 0; i < count; i++) {


                    var data = "<ul><li><a href='family_causesof_death.html' class='item-link' onclick='familyHisCauseEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['description'] + "</div></div></div></a></li></ul>";

                    $('#familyhiscauseofdeath').append(data);

                }
            }

        });
    }, 500);
}



// family_history.html

function familyHistoryforminfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=87";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function familyhisSubmit() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        var historyid = $('#family_his_speciality').val();
        var other = ""
        other = $('#family_his_others_1').val();
        var name = [];
        var mother = false;
        var father = false;
        var sibling = false;
        var other = document.getElementById('family_his_speciality_others').value;
        var other1 = document.getElementById('family_his_speciality_others_1').value;
        var other2 = document.getElementById('family_his_speciality_others_2').value;
        var other3 = document.getElementById('family_his_speciality_others_3').value;
        if (document.getElementById('family_his_mother').checked) {
            var check = document.getElementById('family_his_mother').value;

            if (check == 1) {
                mother = true;
            }

        }
        if (document.getElementById('family_his_father').checked) {
            var check = document.getElementById('family_his_father').value;
            if (check == 1) {
                father = true;
            }
        }
        if (document.getElementById('family_his_sibling').checked) {
            var check = document.getElementById('family_his_sibling').value;
            if (check == 1) {
                sibling = true;
            }
        }
        var update_familyhis1_id = $('#update_familyhis1_id').val();
        if (update_familyhis1_id == '') {
            // var other = $('#family_his_others_').val();

            var columnNa = "historyid,mother,father,sibling,name,other,other_1,other_2,other_3,`check`,customerid";
            var columnVa = "'" + historyid + "','" + mother + "','" + father + "','" + sibling + "','" + name + "','" + other + "','" + other1 + "','" + other2 + "','" + other3 + "','" + check + "','" + storedData1['userId'] + "'";
            myApp.showPreloader();
            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=familyhistorycustomers&columns=" + columnNa + "&values=" + columnVa + "";

            $.getJSON(url, function(json) {
                myApp.hidePreloader();
                // console.log(json);
                if (json['posts'][0]) {
                    //getFamilyhisData();
                    //myApp.alert("Your Details has been Created",'Success');
                    //mainView.router.loadPage('family_his_listing1.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });

            getFamilyhisData();
            myApp.alert("Your Details has been Created", 'Success');
            mainView.router.loadPage('family_his_listing1.html');

        } else {
            //alert(historyid);
            var val = "mother = '" + mother + "',father = '" + father + "',sibling = '" + sibling + "',historyid = '" + historyid + "',other = '" + other + "',other_1 = '" + other1 + "',other_2 = '" + other2 + "',other_3 = '" + other3 + "',`check` = '" + check + "'";
            myApp.showPreloader();
            var url5 = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=familyhistorycustomers&columns=" + val + "&condition=id=" + update_familyhis1_id;
            // console.log(url5);
            $.getJSON(url5, function(json) {
                myApp.hidePreloader();
                if (json['posts'][0]) {
                    getFamilyhisData();
                    myApp.alert("Your Details has been updated", 'Success');
                    mainView.router.loadPage('family_his_listing1.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });
        }
    }, 500);
}


function deleteFamilyHis1() {
    id = $('#update_familyhis1_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=familyhistorycustomers&columns=&condition=id=" + id;
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // $("#emergency_contact_ul_"+id).remove();
            getFamilyhisData();
            mainView.router.loadPage('family_his_listing1.html');
        });
    });
}

//  family_causesof_death_listing.html

function familyHistorycausesofDeathinfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=88";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function familyCauseOfDAdd() {
    page_parameter = 18
    setTimeout(function() {
        $("#family_causeofd_inbtn").css('display', 'none');
        $("#family_causeofd_upbtn").css('display', 'block');
        FamilyHisCauseofD(0);
    }, 500);

}


function familyHisCauseEdit(id) {
    page_parameter = 18;
    setTimeout(function() {



        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=familycauseofdeathcustomer&columns=*&condition=id=" + id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=familycauseofdeath&condition=id=" + json['posts'][0]['causeofdeathid'];
            for (var i = 0; i < count; i++) {

                $.getJSON(url1, function(json) {

                    if (json['posts'] == 0) {
                        FamilyHisCauseofD(0, -1);
                        $('#family_cuses_of_de_li_0').css('display', 'block');
                    } else {
                        $('#family_his_causeofDe_0').val(json['posts'][0]['name']);
                        $('#family_his_causeofDe_id_0').val(json['posts'][0]['id']);
                        FamilyHisCauseofD(0, json['posts'][0]['id']);
                    }

                });
                $('#family_his_causeofDe_others_' + i).val(json['posts'][0]['other1']);
                $('#family_his_causeofDe_' + i).val(json['posts'][0]['causeofdeathid']);
                $('#family_caus_death_' + i).val(json['posts'][0]['description']);
                $('#update_familycause_id').val(json['posts'][0]['id']);
            }
        });
    }, 500);
}
// family_his_listing1.html

function familyMedicalhistoryListinfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=86";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

// family_causesof_death.html


function FamilyCausesOfDSubmit() {
    var familhisCaus = $('#rowIdFH2').val();

    for (i = 0; i <= familhisCaus; i++) {

        var storedData1 = myApp.formGetData('logged_userId');
        var causeofdeathid = $('#family_his_causeofDe_' + i).val();
        var other1 = $('#family_his_causeofDe_others_' + i).val();
        var description = $('#family_caus_death_' + i).val();
        var update_familycause_id = $('#update_familycause_id').val();
        if (update_familycause_id == '') {
            var columnNam = "causeofdeathid,other1,description,customerid";

            var columnVal = "'" + causeofdeathid + "','" + other1 + "','" + description + "','" + storedData1['userId'] + "'";
            myApp.showPreloader();
            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=familycauseofdeathcustomer&columns=" + columnNam + "&values=" + columnVal + "";

            $.getJSON(url, function(json) {
                // console.log(json);
                myApp.hidePreloader();
                if (json['posts'][0]) {
                    // getFamilyCauseDeathData();
                    myApp.alert("Your Details has been Created", 'Success');
                    mainView.router.loadPage('family_causesof_death_listing.html');

                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });
        } else {

            var val = "causeofdeathid = '" + causeofdeathid + "',other1 = '" + other1 + "',description = '" + description + "'";

            myApp.showPreloader();
            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=familycauseofdeathcustomer&columns=" + val + "&condition=id=" + update_familycause_id;
            // console.log(url1);
            $.getJSON(url1, function(json) {
                myApp.hidePreloader();
                if (json['posts'][0]) {
                    // getFamilyCauseDeathData();
                    myApp.alert("Your Details has been updated", 'Success');
                    mainView.router.loadPage('family_causesof_death_listing.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });

        }
    }
    getFamilyCauseDeathData();
}



function deleteFamilyCauseDContact() {
    id = $('#update_familycause_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=familycauseofdeathcustomer&columns=&condition=id=" + id;
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // $("#emergency_contact_ul_"+id).remove();
            getFamilyCauseDeathData();
            mainView.router.loadPage('family_causesof_death_listing.html');
        });
    });
}


//////////////////////////------------------------------ End family_history_listing ------------------------------------------------------------




//////////////////////////------------------------------ lab_results_main ------------------------------------------------------------


function getLabResults() {
    page_parameter = 1;
    tempPage = 20;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=getlabresults&format=json";

        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/listLabCategories",
         
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {
            myApp.hidePreloader();
            var key, count = 0;
           console.log(json)
            // $('#cat_iiid').val(json['posts'][0]['catname']);

            for (i = 0; i < json['response']['categories'].length; i++) {
                if (localStorage.getItem("lang") == 'ar') {
                    var data = "<ul><li><a href='urinalysis_listing.html' class='item-link' onclick='getLabRecordsByCatId(" +'"'
                    + json['response']['categories'][i] + '"'+
                     ");' ><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['response']['categories'][i] + "</div></div></div></a></li></ul>";
                } 
                if (localStorage.getItem("lang") == 'en') {
                    var data = "<ul><li><a href='urinalysis_listing.html' class='item-link' onclick='getLabRecordsByCatId("  +'"'
                    + json['response']['categories'][i] + '"'+
                     ");' ><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['response']['categories'][i] + "</div></div></div></a></li></ul>";
                } 
                $('#labresults').append(data);
            }
     }
     });
    }, 500);

}



function getLabRecordsByCatId(name) {

    mainView.router.loadPage('urinalysis_listing.html');
    $('.Ahmed').html(name)
console.log(name)
    // document.getElementById("labpage_heading_name").innerHTML = name    // setTimeout(function() {
    //     if (localStorage.getItem("lang") == 'ar') {
    //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ',\'' + labCatName + '\');" class="link icon-only" style="color:white">تقارير</a>');
    //     } else if (localStorage.getItem("lang") == 'fr') {
    //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ',\'' + labCatName + '\');" class="link icon-only" style="color:white">Rapports</a>');
    //     } else if (localStorage.getItem("lang") == 'sp') {
    //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ',\'' + labCatName + '\');" class="link icon-only" style="color:white">Informes</a>');
    //     } else if (localStorage.getItem("lang") == 'ru') {
    //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ',\'' + labCatName + '\');" class="link icon-only" style="color:white">Отчеты</a>');
    //     } else {
    //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ',\'' + labCatName + '\');" class="link icon-only" style="color:white">Reports</a>');
    //     }
    // }, 1000);
    /* ################# Urinilysis ################# */
   
        setTimeout(function() {
            var storedData1 = myApp.formGetData('logged_userId');

            $.ajax({
                type: 'GET',
                url: "https://host.optimalsolutionslebanon.com/~bguh/api/listLabResultsByCategory?patientId="+storedData1['userId']+"&categoryId="+name,
             
                headers: {
                    "token": localStorage.BguhToken
                },
                success: function(json) {
                    $('.Ahmed').html(name)
                    // document.getElementById("labpage_heading_name").innerHTML = name    // setTimeout(function() {


                    console.log(json)
                $('#urinalysis').html('');
                $('#labpage_heading_name').html('');
                if (json['posts'] == 0) {
                    if (localStorage.getItem("lang") == 'ar') {
                        var data = "لا يوجد سجلات";
                    } else if (localStorage.getItem("lang") == 'sp') {
                        var data = "No hay registros";
                    } else if (localStorage.getItem("lang") == 'ru') {
                        var data = "Нет записей";
                    } else if (localStorage.getItem("lang") == 'fr') {
                        var data = "Pas d'enregistrements";
                    } else {
                        var data = "No Records";
                    }
                    $('#urinalysis').append(data);
                } else {
                    for (i = 0; i < json['response']['lab_results'].length; i++) {
                        DateLabrepors =  json['response']['lab_results'][i]['ORDER_DATE']


                        var labdate1 = '"' + json['response']['lab_results'][i]['ORDER_DATE'] + '"';
                        var data = "<ul id='pathalogy_ul_" + i + "'><li><a href='labreports.html' class='item-link' onclick='LabCategoryDataEdit("
                        + storedData1['userId'] + ','+'"'+ json['response']['lab_results'][i]['ORDER_DATE']+'"'+','+'"'+name+'"'+");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" 
                        +json['response']['lab_results'][i]['ORDER_DATE'] +
                         "</div></div></div></a></li></ul>";

                        $('#urinalysis').append(data);
                    }
                }
          }  });
          
        }, 500);
 

}
var DateLabrepors 


function getlabData(Catid, formNamesss) {
    page_parameter = 20;
    setTimeout(function() {
        $("#labreports_inbtn").css('display', 'none');
        $("#labreports_upbtn").css('display', 'block');
        getLabCalandar();
        myApp.showPreloader();
        setTimeout(function() {
            myApp.hidePreloader();
        }, 4000);
        var storedData1 = myApp.formGetData('logged_userId');
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=labsRecords&columns=*&condition=Catid=" + Catid;
        $.getJSON(url, function(json) {
            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }

            $('#lab_heading').append(formNamesss);
            for (i = 0; i < count; i++) {
                if (json['posts'][i]['defaultvalue'] == 1) {
                    if (localStorage.getItem("lang") == 'ar') {
                        var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_arabic'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="القيمة" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'fr') {
                        var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_french'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="valeur" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'sp') {
                        var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_spanish'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="valor" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'ru') {
                        var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_russian'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="стоимость" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                    } else {
                        var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name'] + '</div><div class="item-input" style="width: 40%;margin-right: 2%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="value" style="font-size: 13px;height:40px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                    }
                    if (Catid == '12') {
                        if (i == 3) {
                            if (localStorage.getItem("lang") == 'ar') {
                                data1 = '<ul style="background: #ffffff;margin-bottom: 0px; height:" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_arabic'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="النتيجة" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                            } else if (localStorage.getItem("lang") == 'fr') {
                                data1 = '<ul style="background: #ffffff;margin-bottom: 0px; height:" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_french'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="résultat" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                            } else if (localStorage.getItem("lang") == 'sp') {
                                data1 = '<ul style="background: #ffffff;margin-bottom: 0px; height:" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_spanish'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="resultado" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                            } else if (localStorage.getItem("lang") == 'ru') {
                                data1 = '<ul style="background: #ffffff;margin-bottom: 0px; height:" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_russian'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="результат" style="font-size: 13px;height:144px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                            } else {
                                data1 = '<ul style="background: #ffffff;margin-bottom: 0px; height:" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name'] + '</div><div class="item-input" style="width: 40%;margin-right: 2%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="Result" style="font-size: 13px;height:40px"></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                            }
                        }
                    }
                    if (Catid == '11') {
                        if (localStorage.getItem("lang") == 'ar') {
                            data1 = '<ul style="background: #ffffff;margin-bottom: 0px;margin-top:5px" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_arabic'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="أدخل نص" style="font-size: 13px;height:144px;margin-top:2%""></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                        } else if (localStorage.getItem("lang") == 'fr') {
                            data1 = '<ul style="background: #ffffff;margin-bottom: 0px;margin-top:5px" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_french'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="entrez du texte" style="font-size: 13px;height:144px;margin-top:2%""></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                        } else if (localStorage.getItem("lang") == 'sp') {
                            data1 = '<ul style="background: #ffffff;margin-bottom: 0px;margin-top:5px" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_spanish'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="ingrese texto" style="font-size: 13px;height:144px;margin-top:2%""></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                        } else if (localStorage.getItem("lang") == 'ru') {
                            data1 = '<ul style="background: #ffffff;margin-bottom: 0px;margin-top:5px" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name_russian'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="введите текст" style="font-size: 13px;height:144px;margin-top:2%""></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                        } else {
                            data1 = '<ul style="background: #ffffff;margin-bottom: 0px;margin-top:5px" class="arabic"><li ><div class="item-content"><div class="item-inner" style="padding-right: 0;"><div class="item-title label" style="font-size: 13px;">' + json['posts'][i]['name'] + '</div><div class="item-input" style="width: 40%;"><textarea rows="30" name="name_' + json['posts'][i]['lab_id'] + '" id="value_' + json['posts'][i]['lab_id'] + '" placeholder="Enter text" style="font-size: 13px;height:144px;margin-top:2%""></textarea></div><div class="col-25" id="end_date" style="white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' + json['posts'][i]['normalvalue'] + '</div></div></div></li></ul>';
                        }
                    }
                    $('#labreports').append(data1);
                    $('#cat_id').val(Catid);
                }
            }

        });

    }, 500);
}


function getLabCalandar() {
    var calendarDefault = myApp.calendar({
        input: '#date_LabResult',
    });
}

function LabCategoryDataEdit(Id , DATE , CatID) {
    $('#lab_heading').html(DATE);
    console.log(parseInt( DATE))
    setTimeout(function() {

        var url = "https://host.optimalsolutionslebanon.com/~bguh/api/listLabResult?patientId="+Id+"&date="+DATE+"&categoryId="+catId
        console.log(url)
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        // var labdates = labdate
        var url = "https://host.optimalsolutionslebanon.com/~bguh/api/listLabResult?patientId="+Id+"&date="+DATE+"&categoryId="+CatID
        console.log(url)
        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/listLabResult?patientId="+Id+"&date="+DATE+"&categoryId="+CatID
          
        ,headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {      
                console.log(DATE)
                $('#lab_heading').html(DATE);

                console.log(json)   
                   myApp.hidePreloader();
            var key, count = 0;
           
         
            for (i = 0; i < json['response']['lab_result'].length; i++) {
                // $('#date_LabResult').val(json['posts'][i]['date']);
                // if (json['posts'][i]['defaultvalue'] == 1) {
                var color = "#000000";
                if (json['response']['lab_result'][i]['MEASURE_UNIT_MIN'].indexOf("<") == -1) {
                 
                    if (json['response']['lab_result'][i]['VALUE'] < json['response']['lab_result'][i]['MEASURE_UNIT_MIN']) {
                        color = "#CCCC00";
                    } else if (json['response']['lab_result'][i]['VALUE'] > json['response']['lab_result'][i]['MEASURE_UNIT_MAX']){
                        color = "#ff0000";
                    } else {
                        color = "#000000";
                    }
                } else {
                    var max_val = parseInt(new_normal_values[1]);
                    if (json['response']['lab_result'][i]['VALUE'] > json['response']['lab_result'][i]['MEASURE_UNIT_MAX']) {
                        color = "#ff0000";
                    } else {
                        color = "#000000";
                    }
                }

                if (localStorage.getItem("lang") == 'ar') {
                    var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;">'+
                    '<li >'+
                    '<div class="item-content">'+
                    '<div class="item-inner" style="padding-right: 0;">'+
                    '<div class="item-title label" style="font-size: 13px;">' + json['response']['lab_result'][i]['TEST_NAME'] +
                     '</div><div class="item-input" style="width: 40%;"><input type="tel" name="name_' + json['response']['lab_result'][i]['TEST_ID'] +
                      '" id="value_' + json['response']['lab_result'][i]['TEST_ID'] + '" placeholder="value" value=' + json['response']['lab_result'][i]['VALUE'] +
                       ' style="text-align:center;color:' + color + ';font-size: 13px;"></div><div class="col-25" id="end_date" style="color:green;white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' 
                       + json['response']['lab_result'][i]['MEASURE_UNIT_MIN'] +' - '+ json['response']['lab_result'][i]['MEASURE_UNIT_MAX']+'</div></div></div></li></ul>'
                } else {
                    var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;"><li >'+
                    '<div class="item-content"><div class="item-inner" style="padding-right: 0;">'
                    +'<div class="item-title label" style="font-size: 13px;">' +json['response']['lab_result'][i]['TEST_NAME'] + '</div>'+
                    '<div class="item-input" style="width: 40%;"><input type="tel" name="name_' +json['response']['lab_result'][i]['TEST_ID'] + '" id="value_' +
                    json['response']['lab_result'][i]['TEST_ID'] + '" placeholder="value" value=' +json['response']['lab_result'][i]['VALUE'] +
                      ' style="color:' + color +
                       ';font-size: 13px;"></div><div class="col-25" id="end_date" style="color:green;white-space: normal;word-wrap: break-word;width: 20%;font-size: 12px;">' +
                       json['response']['lab_result'][i]['MEASURE_UNIT_MIN'] +' - '+ json['response']['lab_result'][i]['MEASURE_UNIT_MAX']+ '</div><img style="display:none" src="img/chart.png" class="lab_ch_img" onclick="draw_chart(' +json['response']['lab_result'][i]['userid'] + ',\'' +
                        json['response']['lab_result'][i]['DATE'] + '\',\'' +json['response']['lab_result'][i]['TEST_NAME'] + '\',\'\',' +json['response']['lab_result'][i]['VALUE'] + ',\'' + color + '\');"></div></div></li></ul>'
                }
                console.log(data1)
                $('#labreports').append(data1);
                    // $('#cat_id').val(Catid);
                    // $('#CustomerLabResults_Id').val(CustomerLabResultsId);
                // if (Catid == '11') {
                //     $('.lab_ch_img').hide();
                // }
                // if (Catid == '12') {
                //     $('.lab_ch_img').hide();
                // }
                // }
            }
      }  });
        // setTimeout(function() {
        //     if (localStorage.getItem("lang") == "en") {
        //         $('#labDeleteId').html('<a href="#" class="link icon-only" onclick="labReportsDataSubmit();" style="color:white;border-right:1px white solid ">Update</a><a href="#" id="del" date-date="' + labdates + '" onclick="LabCategoryDataDelete(' + Catid + ',' + labdates + ',' + CustomerLabResultsId + ');" class="link icon-only" style="color:white">Delete</a>');
        //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ');" class="link icon-only" style="color:white">Reports</a>');
        //     } else if (localStorage.getItem("lang") == "ar") {
        //         $('#labDeleteId').html('<a href="#" class="link icon-only" onclick="labReportsDataSubmit();" style="color:white;border-right:1px white solid ">تعديل</a><a href="#" id="del" date-date="' + labdates + '" onclick="LabCategoryDataDelete(' + Catid + ',' + labdates + ',' + CustomerLabResultsId + ');" class="link icon-only" style="color:white">حذف</a>');
        //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ');" class="link icon-only" style="color:white">تقارير</a>');
        //     } else if (localStorage.getItem("lang") == "fr") {
        //         $('#labDeleteId').html('<a href="#" class="link icon-only" onclick="labReportsDataSubmit();" style="color:white;border-right:1px white solid ">Mettre</a><a href="#" id="del" date-date="' + labdates + '" onclick="LabCategoryDataDelete(' + Catid + ',' + labdates + ',' + CustomerLabResultsId + ');" class="link icon-only" style="color:white">Supprimer</a>');
        //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ');" class="link icon-only" style="color:white">Rapports</a>');
        //     } else if (localStorage.getItem("lang") == "ru") {
        //         $('#labDeleteId').html('<a href="#" class="link icon-only" onclick="labReportsDataSubmit();" style="color:white;border-right:1px white solid ">обновление</a><a href="#" id="del" date-date="' + labdates + '" onclick="LabCategoryDataDelete(' + Catid + ',' + labdates + ',' + CustomerLabResultsId + ');" class="link icon-only" style="color:white">удалять</a>');
        //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ');" class="link icon-only" style="color:white">Отчеты</a>');
        //     } else if (localStorage.getItem("lang") == "sp") {
        //         $('#labDeleteId').html('<a href="#" class="link icon-only" onclick="labReportsDataSubmit();" style="color:white;border-right:1px white solid ">Actualización</a><a href="#" id="del" date-date="' + labdates + '" onclick="LabCategoryDataDelete(' + Catid + ',' + labdates + ',' + CustomerLabResultsId + ');" class="link icon-only" style="color:white">Eliminar</a>');
        //         $('#labresultsReports').html('<a href="LabResultsSectionReports.html" onclick="LabReportsDisplay(' + Catid + ');" class="link icon-only" style="color:white">Informes</a>');
        //     }
        // }, 500);

    }, 1000);
}

function LabReportsDisplay(catId, headingNames) {
    page_parameter = 20;
    var storedData1 = myApp.formGetData('logged_userId');
    setTimeout(function() {
        var urlDisplayRNames = "https://healthrecordspro.com/wsplus.php?type=labresultsreporttests&format=json&customerid=" + storedData1['userId'] + "&catid=" + catId;

        jQuery.ajaxSetup({
            async: false
        });
        $.getJSON(urlDisplayRNames, function(json) {
            $.each(json['posts'], function(key, value) {
                $("#LabresultsTabledat").append('<th>' + value['recordName'] + '</th>');
            });
        });
        var urlResults = "https://healthrecordspro.com/wsplus.php?type=labresultsreportdatesdd&format=json&customerid=" + storedData1['userId'] + "&catid=" + catId;

        $.getJSON(urlResults, function(json) {
            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            var datesArray = [];
            $.each(json['posts'], function(key, value) {
                datesArray.push(value['date']);
            });
            for (var i = 0; i < count; i++) {
                var html = '';
                var urlDisplayValues = "https://healthrecordspro.com/wsplus.php?type=labresultsreportvaluesbydate&format=json&customerid=" + storedData1['userId'] + "&catid=" + catId + "&date=" + datesArray[i];
                html += '<tr><td>' + datesArray[i] + '</td>';
                $.getJSON(urlDisplayValues, function(json1) {
                    $.each(json1['posts'], function(key1, value1) {
                        html += '<td>' + value1 + '</td>';
                    });
                    html += '</tr>';
                    $("#table_data").append(html);
                });
            }
        });
    }, 500);
}


function labresultsListInfo() {
    var idz
    var catids;
    catids = tipID;
    if (catids == 7) {
        idz = 70
    } else if (catids == 7) {
        idz = 21;
    } else if (catids == 3) {
        idz = 17;
    } else if (catids == 11) {
        idz = 59;
    } else if (catids == 12) {
        idz = 70;
    } else {
        idz = 16;
    }
    console.log("======== usefull tips =======");
    console.log(catids + " === " + idz);
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=" + idz;
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function OpenLabResultsPDF() {
    setTimeout(function() {
        window.open("https://docs.google.com/viewer?url=https://healthrecordspro.com/upload/Normalvalues.pdf", '_blank', 'location=no');
    }, 100);
}


function scan() {
    cordova.plugins.barcodeScanner.scan(
        function(result) {
            if (!result.cancelled) {
                scanurl = result.text;
                mainView.router.loadPage('scanvalues.html');

            } else {
                alert("You have cancelled scan");
            }
        },
        function(error) {
            alert("Scanning failed: " + error);
        }
    );
}

function scanBackData() {

    scanurl;
    $.getJSON(scanurl, function(json) {
        $.each(json['posts'], function(key, value) {
            var etext = '<li style="background-color: #ffffff">' +
                '<div class="item-content">' +
                '<div class="item-inner">' +
                ' <div class="item-title label">' + value["recordName"] + '</div>' +
                '<div class="item-input">' +
                ' <input type="text" id=' + key + ' placeholder="" value="' + value["value"] + '" data-userid="' + value['id'] + '" data-date="' + value['date'] + '"data-cat="' + value['categoryname'] + '" data-name="' + value["recordName"] + '">' +
                '</div>' +
                ' </div>' +
                '</div>' +
                '</li>'
            $('#scan_values ul').append(etext);
            scancount = key;
        });
    });
}

function labresultsListInfo() {
    var idz
    var catids;
    catids = tipID;
    if (catids == 7) {
        idz = 70
    } else if (catids == 7) {
        idz = 21;
    } else if (catids == 3) {
        idz = 17;
    } else if (catids == 11) {
        idz = 59;
    } else if (catids == 12) {
        idz = 70;
    } else {
        idz = 16;
    }
    console.log("======== usefull tips =======");
    console.log(catids + " === " + idz);
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=" + idz;
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

//scanvalues.html


function inserttestvalues() {

    for (var i = 0; i < scancount; i++) {
        var id = "#" + i
        var recordname = $(id).attr('data-name');
        var tdate = $(id).attr('data-date');
        var value = $(id).val();
        var catogoryid = $(id).attr('data-cat');
        var storedData1 = myApp.formGetData('logged_userId');
        var url = "http://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=labsresults&columns=recordName,value,date,categoryid,userid&values='" + recordname + "'," + value + ",'" + tdate + "'," + catogoryid + "," + storedData1['userId'];
        $.getJSON(url, function(json) {

        });


    }
    getLabResults();
    mainView.router.loadPage('lab_results_main.html');
}
//labreports.html



function labReportsDataSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var categoryid = $('#cat_id').val();

    var labCatName = [];

    var urldeleteLabResults = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=labsresults&columns=&condition=categoryid=" + categoryid + " AND date='" + $('#date_LabResult').val() + "' AND userid=" + storedData1['userId'];
    $.getJSON(urldeleteLabResults, function(json2) {
        // console.log(urldeleteLabResults);
    });

    var url20 = "https://www.healthrecordspro.com/wsplus.php?type=getlabresults&format=json";
    $.getJSON(url20, function(json1) {
        $.each(json1['posts'], function(key, val) {
            labCatName.push(val['catname']);

            labCatName.push(json1['posts'][0]['catname']);
        });

        var urlGettingTests = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=labsRecords&columns=*&condition=Catid=" + categoryid;
        $.getJSON(urlGettingTests, function(json1) {
            arrayofid = new Array();
            var key, count = 0;
            for (key in json1['posts']) {
                if (json1['posts'].hasOwnProperty(key)) {
                    arrayofid[count] = json1['posts'][key]['lab_id'];
                    console.log(arrayofid[count]);
                    count++;
                }
            }
            if ($('#date_LabResult').val() == '') {
                myApp.alert('Please Enter Date', 'Labresults');
            } else {
                for (i = 0; i <= count; i++) {

                    var labCatName = json1['posts'][0]['catname'];
                    if ($('#value_' + arrayofid[i]).val() != undefined && $('#value_' + arrayofid[i]).val() != '') {
                        var urlInsertTests = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=labsresults&columns=recordId,recordName,value,normalvalue,date,userid,categoryid&values='" + arrayofid[i] + "','" + json1['posts'][i]['name'] + "','" + $('#value_' + arrayofid[i]).val() + "','" + json1['posts'][i]['normalvalue'] + "','" + $('#date_LabResult').val() + "','" + storedData1['userId'] + "','" + categoryid + "'";
                        $.getJSON(urlInsertTests, function(json) {
                            if (json['posts'][0]) {

                            } else {
                                myApp.alert("Your Details Not Created", 'Failure');
                            }
                        });
                    }
                }


            }
        });
        getLabRecordsByCatId(categoryid, labCatName);
        myApp.alert("Your Details has been Created", 'Success');
        mainView.router.loadPage('urinalysis_listing.html');
    });

    //debugger;
    if ($('#count123').val() != 1) {
        for (var j = 1; j <= $('#count123').val(); j++) {
            if ($('#lab_rec_text_val_' + j).val() != undefined && $('#lab_rec_text_val_' + j).val() != '' && $('#lab_rec_val_' + j).val() != undefined && $('#lab_rec_val_' + j).val() != '') {
                var urlInsertOthersField = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=labsresults&columns=recordId,recordName,value,date,userid,categoryid&values=" + j + ",'" + $('#lab_rec_text_val_' + j).val() + "','" + $('#lab_rec_val_' + j).val() + "','" + $('#date_LabResult').val() + "','" + storedData1['userId'] + "','" + categoryid + "'";
                $.getJSON(urlInsertOthersField, function(json1) {
                    console.log(json1);
                });
            }
        }
    }

}



//////////////////////////------------------------------ End lab_results_main ------------------------------------------------------------




//////////////////////////------------------------------ women_section_main ------------------------------------------------------------

function womensectioninfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=47";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

/////////////////
function getgynecologicData() {
    page_parameter = 21;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=womanGynecologic&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            var key, count = 0;

            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#gynecologic').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    var data = "<ul id='gynecologic_his_ul_" + i + "'><li><a href='gynecologic_history_form.html' class='item-link' onclick='gynecologicHisDataEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['ageOfFirstPeriod'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['dateOfLastPapSmear'] + "</div></div></div></a></li></ul>";

                    $('#gynecologic').append(data);
                    myApp.hidePreloader();

                }
            }

        });
    }, 2500);


}



function gynecologicHisDataEdit(id) {
    setTimeout(function() {

        getGynaCalender();
    }, 500);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=womanGynecologic&columns=*&condition=id=" + id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        $('#gyne_his_afp').val(json['posts'][0]['ageOfFirstPeriod']);
        $('#gyne_his_dolps').val(json['posts'][0]['dateOfLastPapSmear']);
        $('#gyne_his_result').val(json['posts'][0]['result']);

        if (json['posts'][0]['AbnolmalPapSmear'] == 1) {
            $('#gyne_his_have_abpap').attr('checked', 'checked');
            var dvPassport = document.getElementById("dvPassport");
            var dvPassport1 = document.getElementById("dvPassport1");
            dvPassport.style.display = gyne_his_have_abpap.checked ? "block" : "none";
            dvPassport1.style.display = gyne_his_have_abpap.checked ? "block" : "none";
        }
        $('#gyne_his_wyear').val(json['posts'][0]['ifyes']);
        $('#gyne_his_wk').val(json['posts'][0]['treatments']);
        if (json['posts'][0]['secuallyInfections'] == 1) {
            $('#gyne_his_have_sex_trinf').attr('checked', 'checked');
            var dvPassport3 = document.getElementById("dvPassport3");
            dvPassport3.style.display = gyne_his_have_sex_trinf.checked ? "block" : "none";
        }
        $('#gyne_his_wtypes').val(json['posts'][0]['ifyes2']);
        $('#gyne_his_update').val(json['posts'][0]['id']);
    });
}


function getGynaCalender() {
    var calendarDefault = myApp.calendar({
        input: '#gyne_his_dolps',
    });
}
//////////end///////////////////




////////////////////////////
function getGeneticHistory() {
    page_parameter = 21;
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=womangeneticTypes&columns=*&condition=1";

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }
        for (i = 0; i < count; i++) {

            var data1 = '<ul style="background: #ffffff;margin-bottom: 0px;"><li><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][i]['name'] + '</div><div class="item-input" style="margin-left: 74px;"><input type="checkbox" name="family_' + json['posts'][i]['id'] + '" id="family_' + json['posts'][i]['id'] + '" value="1"><input type="checkbox" name="partner_' + json['posts'][i]['id'] + '" id="partner_' + json['posts'][i]['id'] + '" value="1"></div></div></div></li></ul>';
            $('#genetichistory').append(data1);

        }

    });

    var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=WomanGeneticHistory&columns=*&condition=customerId=" + storedData1['userId'];

    $.getJSON(url1, function(json) {
        myApp.hidePreloader();
        var key1, count1 = 0;
        for (key1 in json['posts']) {
            if (json['posts'].hasOwnProperty(key1)) {
                count1++;
            }
        }

        for (j = 0; j < count1; j++) {
            if (json['posts'][j]['YourFamily'] == 1) {
                $('#family_' + json['posts'][j]['typeName']).attr('checked', 'checked');
            }
            if (json['posts'][j]['PartnerFamily'] == 1) {
                $('#partner_' + json['posts'][j]['typeName']).attr('checked', 'checked');
            }

        }
    });
}
//////////end///////////////////



////////////////////////////
function getwomenspregDatingData() {
    page_parameter = 21;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=womanPregnancyDating&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#womenpreg').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    var data = "<ul id='womens_preg_dating_ul_" + i + "'><li><a href='womens_preg_dating_form.html' class='item-link' onclick='womensPregDatingEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['menstrualPeriod'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['frequencyPeriodDays'] + "</div></div></div></a></li></ul>";

                    $('#womenpreg').append(data);
                }
            }

        });
    }, 500);
}



function womensPregDatingEdit(id) {
    setTimeout(function() {

        getwomenPregDat();
    }, 500);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=womanPregnancyDating&columns=*&condition=id=" + id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        $('#womens_preg_dating_fdlmp').val(json['posts'][0]['menstrualPeriod']);
        if (json['posts'][0]['certainApproximate'] == 0) {
            $('#womens_preg_dating_cer').attr('checked', 'checked');
        }
        if (json['posts'][0]['certainApproximate'] == 1) {
            $('#womens_preg_dating_app').attr('checked', 'checked');
        }
        $('#womens_preg_dating_fpstne').val(json['posts'][0]['frequencyPeriodDays']);
        $('#womens_preg_dating_duration').val(json['posts'][0]['dop']);

        if (json['posts'][0]['periodRegular'] == 0) {
            $('#womens_preg_dating_apr').attr('checked', 'checked');
        }
        if (json['posts'][0]['periodRegular'] == 1) {
            $('#womens_preg_dating_apr1').attr('checked', 'checked');
        }
        if (json['posts'][0]['birthControl'] == 0) {
            $('#womens_preg_dating_wbcp').attr('checked', 'checked');
        }
        if (json['posts'][0]['birthControl'] == 1) {
            $('#womens_preg_dating_wbcp1').attr('checked', 'checked');
        }
        $('#womens_preg_dating_methode').val(json['posts'][0]['method']);
        if (json['posts'][0]['pregrancyTest'] == 0) {
            $('#womens_preg_dating_hythpt').attr('checked', 'checked');
        }
        if (json['posts'][0]['pregrancyTest'] == 1) {
            $('#womens_preg_dating_hythpt1').attr('checked', 'checked');
        }
        $('#womens_preg_dating_ptd').val(json['posts'][0]['pregnancyTestDate']);
        $('#womens_preg_dating_update').val(json['posts'][0]['id']);

    });
}

function getwomenPregDat() {
    var calendarDefault = myApp.calendar({
        input: '#womens_preg_dating_ptd',
    });
}
//////////end///////////////////

////////////////////////////
function getsocialhistoryData() {
    page_parameter = 21;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=SocialHistory&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {


            var key, count = 0;
            for (key in json['posts']) {
                myApp.hidePreloader();
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records ";
                myApp.hidePreloader();
                $('#socialhistory').append(data);
            } else {
                myApp.hidePreloader();
                for (i = 0; i < count; i++) {

                    var data = "<ul id='social_history_ul_" + i + "'><li><a href='social_history_form.html' class='item-link' onclick='socialHistoryEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['smokeCigarettes'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['numberofPacks'] + "</div></div></div></a></li></ul>";

                    $('#socialhistory').append(data);

                }
            }

        });
    }, 1500);
    //myApp.hidePreloader();
}


function socialHistoryEdit(id) {
    setTimeout(function() {

        getSocialHCalendar();
    }, 500);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=SocialHistory&columns=*&condition=id=" + id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        if (json['posts'][0]['smokeCigarettes'] == 1) {
            $('#social_his_smo').attr('checked', 'checked');
        }
        if (json['posts'][0]['smokeCigarettes'] == 2) {
            $('#social_his_smo1').attr('checked', 'checked');
        }
        if (json['posts'][0]['smokeCigarettes'] == 3) {
            $('#social_his_smo2').attr('checked', 'checked');
        }
        if (json['posts'][0]['pastUse'] == 1) {
            $('#social_his_past').attr('checked', 'checked');
        } else {
            $('#social_his_past1').attr('checked', 'checked');
        }

        $('#social_his_qd').val(json['posts'][0]['quitDate']);
        $('#social_his_nopd').val(json['posts'][0]['numberofPacks']);
        $('#social_his_nop').val(json['posts'][0]['numberofYears']);

        if (json['posts'][0]['otherUse'] == 1) {
            $('#social_his_otu').attr('checked', 'checked');
        }
        if (json['posts'][0]['otherUse'] == 2) {
            $('#social_his_otu1').attr('checked', 'checked');
        }
        if (json['posts'][0]['otherUse'] == 3) {
            $('#social_his_otu2').attr('checked', 'checked');
        }
        if (json['posts'][0]['otherUse'] == 4) {
            $('#social_his_otu3').attr('checked', 'checked');
        }
        if (json['posts'][0]['otherUse'] == 5) {
            $('#social_his_otu4').attr('checked', 'checked');
        }
        if (json['posts'][0]['drinkAlcohol'] == 1) {
            $('#social_his_dudal').attr('checked', 'checked');
        } else {
            $('#social_his_dudal1').attr('checked', 'checked');
        }

        $('#social_his_nodpw').val(json['posts'][0]['NbrofDrinksPerWeek']);
        $('#social_his_qfp').val(json['posts'][0]['quitforpregancy']);
        $('#social_his_update').val(json['posts'][0]['id']);
    });
}

function getSocialHCalendar() {
    var calendarDefault = myApp.calendar({
        input: '#social_his_qd',
    });
}

//////////end///////////////////



////////////////////////////
function getsexcualActivityData(customerId) {
    page_parameter = 21;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=sexualactivity&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]['sexualactivity'] == 1) {
                $('#sexual_his_cur').attr('checked', 'checked');
            }
            if (json['posts'][0]['sexualactivity'] == 0) {
                $('#sexual_his_cur1').attr('checked', 'checked');
            }
            $('#sexual_his_partner').val(json['posts'][0]['partnername']);
            if (json['posts'][0]['sexualpartner'] == 0) {
                $('#sexual_his_havbeen').attr('checked', 'checked');
            }
            if (json['posts'][0]['sexualpartner'] == 1) {
                $('#sexual_his_havbeen1').attr('checked', 'checked');
            }
            if (json['posts'][0]['sexualpartner'] == 2) {
                $('#sexual_his_havbeen2').attr('checked', 'checked');
            }
            $('#sexual_his_bc').val(json['posts'][0]['controlmethod']);
            $('#sexual_his_update').val(json['posts'][0]['id']);

        });
    }, 500);
}

//////////end///////////////////

////////////////////////////

function getactivitydailyData(CustomerId) {
    page_parameter = 21;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=activitiesofdailyLiving&columns=*&condition=CustomerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]['military'] == 1) {
                $('#activity_daily_hyesim').attr('checked', 'checked');
            }
            if (json['posts'][0]['military'] == 2) {
                $('#activity_daily_hyesim1').attr('checked', 'checked');
            }
            if (json['posts'][0]['transfusion'] == 1) {
                $('#activity_daily_hyebt').attr('checked', 'checked');
            }
            if (json['posts'][0]['transfusion'] == 2) {
                $('#activity_daily_hyebt1').attr('checked', 'checked');
            }
            if (json['posts'][0]['caffeine'] == 1) {
                $('#activity_daily_dyhacac').attr('checked', 'checked');
            }
            if (json['posts'][0]['caffeine'] == 2) {
                $('#activity_daily_dyhacac1').attr('checked', 'checked');
            }
            if (json['posts'][0]['occupational'] == 1) {
                $('#activity_daily_dyhaoe').attr('checked', 'checked');
            }
            if (json['posts'][0]['occupational'] == 2) {
                $('#activity_daily_dyhaoe1').attr('checked', 'checked');
            }
            if (json['posts'][0]['hazardoushobbies'] == 1) {
                $('#activity_daily_dypiaehh').attr('checked', 'checked');
            }
            if (json['posts'][0]['hazardoushobbies'] == 2) {
                $('#activity_daily_dypiaehh1').attr('checked', 'checked');
            }
            if (json['posts'][0]['sleepconcerns'] == 1) {
                $('#activity_daily_dyhasc').attr('checked', 'checked');
            }
            if (json['posts'][0]['sleepconcerns'] == 2) {
                $('#activity_daily_dyhasc1').attr('checked', 'checked');
            }
            if (json['posts'][0]['unusualstressors'] == 1) {
                $('#activity_daily_ayceaus').attr('checked', 'checked');
            }
            if (json['posts'][0]['unusualstressors'] == 2) {
                $('#activity_daily_ayceaus1').attr('checked', 'checked');
            }
            if (json['posts'][0]['weight'] == 1) {
                $('#activity_daily_dyhawc').attr('checked', 'checked');
            }
            if (json['posts'][0]['weight'] == 2) {
                $('#activity_daily_dyhawc1').attr('checked', 'checked');
            }
            if (json['posts'][0]['vegetarian'] == 1) {
                $('#activity_daily_dyesdsa').attr('checked', 'checked');
            }
            if (json['posts'][0]['vegetarian'] == 2) {
                $('#activity_daily_dyesdsa1').attr('checked', 'checked');
            }
            if (json['posts'][0]['injuries'] == 1) {
                $('#activity_daily_dyhapbis').attr('checked', 'checked');
            }
            if (json['posts'][0]['injuries'] == 2) {
                $('#activity_daily_dyhapbis1').attr('checked', 'checked');
            }
            if (json['posts'][0]['exercise'] == 1) {
                $('#activity_daily_dye').attr('checked', 'checked');
            }
            if (json['posts'][0]['exercise'] == 2) {
                $('#activity_daily_dye1').attr('checked', 'checked');
            }
            $('#activity_daily_wtdoyfe').val(json['posts'][0]['doexercise']);
            if (json['posts'][0][' bicycle'] == 1) {
                $('#activity_daily_dywhrb').attr('checked', 'checked');
            }
            if (json['posts'][0][' bicycle'] == 2) {
                $('#activity_daily_dywhrb1').attr('checked', 'checked');
            }
            if (json['posts'][0][' seatbelt'] == 1) {
                $('#activity_daily_dywsc').attr('checked', 'checked');
            }
            if (json['posts'][0][' seatbelt'] == 2) {
                $('#activity_daily_dywsc1').attr('checked', 'checked');
            }
            if (json['posts'][0][' selfbreast'] == 1) {
                $('#activity_daily_dydsb').attr('checked', 'checked');
            }
            if (json['posts'][0][' selfbreast'] == 2) {
                $('#activity_daily_dydsb1').attr('checked', 'checked');
            }
            $('#activity_daily_update').val(json['posts'][0]['id']);

        });
    }, 500);

}
//////////end///////////////////



////////////////////////////

function getsocialsafetyData(customerId) {
    page_parameter = 21;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=socialsafety&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json['posts'][0]['name']);

            $('#social_safety_wdulw').val(json['posts'][0]['livewith']);
            if (json['posts'][0]['cats'] == 1) {
                $('#social_safety_duhacyh').attr('checked', 'checked');
            }
            if (json['posts'][0]['cats'] == 0) {
                $('#social_safety_duhacyh1').attr('checked', 'checked');
            }
            $('#social_safety_wctlb').val(json['posts'][0]['lifterbox']);
            if (json['posts'][0]['smokealarms'] == 1) {
                $('#social_safety_dyhwsal').attr('checked', 'checked');
            }
            if (json['posts'][0]['smokealarms'] == 0) {
                $('#social_safety_dyhwsal1').attr('checked', 'checked');
            }
            if (json['posts'][0]['gunsinhome'] == 1) {
                $('#social_safety_atagih').attr('checked', 'checked');
            }
            if (json['posts'][0]['gunsinhome'] == 0) {
                $('#social_safety_atagih1').attr('checked', 'checked');
            }
            $('#social_safety_atlups').val(json['posts'][0]['lockedup']);
            $('#social_safety_dyharp').val(json['posts'][0]['religiousPref']);
            $('#social_safety_wiyre').val(json['posts'][0]['ethnicity']);
            $('#social_safety_pl').val(json['posts'][0]['language']);
            $('#social_safety_htbhv').val(json['posts'][0]['history']);
            $('#social_safety_hmyoeyh').val(json['posts'][0]['yearsofeducation']);
            $('#social_safety_tod').val(json['posts'][0]['typeofDegree']);
            $('#social_safety_wiyo').val(json['posts'][0]['occupation']);
            $('#social_safety_poc').val(json['posts'][0]['partneroccupation']);
            $('#social_safety_update').val(json['posts'][0]['id']);

        });
    }, 500);
}

//////////end///////////////////




//gynecologic_history_listing.html

function gynecologyhistorylistingInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=49";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function gynacologicAdd() {
    setTimeout(function() {
        $("#gynacologies_inbtn").css('display', 'none');
        $("#gynacologies_upbtn").css('display', 'block');
        getGynaCalender();
    }, 500);
}



//gynecologic_history_form.html

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


function gynecologicformSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var ageOfFirstPeriod = $('#gyne_his_afp').val();
    var dateOfLastPapSmear = $('#gyne_his_dolps').val();
    var result = $('#gyne_his_result').val();

    if (document.getElementById('gyne_his_have_abpap').checked) {
        var AbnolmalPapSmear = document.getElementById('gyne_his_have_abpap').value;
    }
    var ifyes = $('#gyne_his_wyear').val();
    var treatments = $('#gyne_his_wk').val();
    if (document.getElementById('gyne_his_have_sex_trinf').checked) {
        var secuallyInfections = document.getElementById('gyne_his_have_sex_trinf').value;
    }
    var ifyes2 = $('#gyne_his_wtypes').val();
    var gyne_his_update = $('#gyne_his_update').val();

    if (gyne_his_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=womanGynecologic&columns=ageOfFirstPeriod,dateOfLastPapSmear,result,AbnolmalPapSmear,ifyes,treatments,secuallyInfections,ifyes2,customerId&values='" + ageOfFirstPeriod + "','" + dateOfLastPapSmear + "','" + result + "','" + AbnolmalPapSmear + "','" + ifyes + "','" + treatments + "','" + secuallyInfections + "','" + ifyes2 + "','" + storedData1['userId'] + "'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                getgynecologicData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('gynecologic_history_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {

        var val = "ageOfFirstPeriod = '" + ageOfFirstPeriod + "',dateOfLastPapSmear = '" + dateOfLastPapSmear + "',result = '" + result + "',AbnolmalPapSmear = '" + AbnolmalPapSmear + "',ifyes = '" + ifyes + "',treatments = '" + treatments + "',secuallyInfections = '" + secuallyInfections + "',ifyes2 = '" + ifyes2 + "'";

        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=womanGynecologic&columns=" + val + "&condition=id=" + gyne_his_update;

        $.getJSON(url, function(json) {

            if (json['posts'][0]) {
                getgynecologicData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('gynecologic_history_listing.html');
                myApp.hidePreloader();
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });
    }

}


function deletegynecologicHis() {
    tableidid = $('#gyne_his_update').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=womanGynecologic&columns=&condition=id=" + tableidid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            getgynecologicData();
            mainView.router.loadPage('gynecologic_history_listing.html');
            // $("#gynecologic_his_ul_"+id).remove();
        });
    });
}


//genetic_history.html

function genetichistoryInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=50";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });

}


function geneticHisDataSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url1 = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=WomanGeneticHistory&columns=&condition=customerId=" + storedData1['userId'];

    $.getJSON(url1, function(json) {

    });
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=womangeneticTypes&columns=*&condition=1";

    $.getJSON(url, function(json) {
        /* myApp.hidePreloader();*/
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }

        for (i = 1; i <= count; i++) {
            if ((document.getElementById('family_' + i).checked) && (document.getElementById('partner_' + i).checked)) {

                var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=WomanGeneticHistory&columns=customerId,typeName,YourFamily,PartnerFamily&values=" + storedData1['userId'] + "," + i + ",1,1";

                $.getJSON(url, function(json) {
                    // myApp.hidePreloader();
                });
            } else if ((document.getElementById('family_' + i).checked) || (document.getElementById('partner_' + i).checked)) {
                if (document.getElementById('family_' + i).checked) {

                    var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=WomanGeneticHistory&columns=customerId,typeName,YourFamily,PartnerFamily&values=" + storedData1['userId'] + "," + i + ",1,0";

                    $.getJSON(url, function(json) {
                        // myApp.hidePreloader();
                    });

                } else {

                    var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=WomanGeneticHistory&columns=customerId,typeName,YourFamily,PartnerFamily&values=" + storedData1['userId'] + "," + i + ",0,1";
                    // console.log( url );
                    $.getJSON(url, function(json) {
                        // myApp.hidePreloader();
                    });
                }
            }
        }
    });
    setTimeout(function() {
        myApp.hidePreloader();
        mainView.router.loadPage('women_section_main.html');
    }, 4000);
}


//womens_preg_dating_listing.html

function womenPregInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=51";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });

}


function womenpregDatAdd() {
    setTimeout(function() {
        $("#womenpregdat_inbtn").css('display', 'none');
        $("#womenpregdat_upbtn").css('display', 'block');
        getwomenPregDat();
    }, 500);
}

//womens_preg_dating_form.html

function womenspregDatingSubmit() {

    var storedData1 = myApp.formGetData('logged_userId');
    var menstrualPeriod = $('#womens_preg_dating_fdlmp').val();
    if (document.getElementById('womens_preg_dating_cer').checked) {
        var certainApproximate = document.getElementById('womens_preg_dating_cer').value;
    }
    if (document.getElementById('womens_preg_dating_app').checked) {
        var certainApproximate = document.getElementById('womens_preg_dating_app').value;
    }
    var frequencyPeriodDays = $('#womens_preg_dating_fpstne').val();
    var dop = $('#womens_preg_dating_duration').val();
    if (document.getElementById('womens_preg_dating_apr').checked) {
        var periodRegular = document.getElementById('womens_preg_dating_apr').value;
    }
    if (document.getElementById('womens_preg_dating_apr1').checked) {
        var periodRegular = document.getElementById('womens_preg_dating_apr1').value;
    }
    if (document.getElementById('womens_preg_dating_wbcp').checked) {
        var birthControl = document.getElementById('womens_preg_dating_wbcp').value;
    }
    if (document.getElementById('womens_preg_dating_wbcp1').checked) {
        var birthControl = document.getElementById('womens_preg_dating_wbcp1').value;
    }
    var method = $('#womens_preg_dating_methode').val();
    if (document.getElementById('womens_preg_dating_hythpt').checked) {
        var pregrancyTest = document.getElementById('womens_preg_dating_hythpt').value;
    }
    if (document.getElementById('womens_preg_dating_hythpt1').checked) {
        var pregrancyTest = document.getElementById('womens_preg_dating_hythpt1').value;
    }
    var pregnancyTestDate = $('#womens_preg_dating_ptd').val();
    var womens_preg_dating_update = $('#womens_preg_dating_update').val();

    if (womens_preg_dating_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=womanPregnancyDating&columns=menstrualPeriod,certainApproximate,frequencyPeriodDays,dop,periodRegular,birthControl,method,pregrancyTest,pregnancyTestDate,customerId&values='" + menstrualPeriod + "','" + certainApproximate + "','" + frequencyPeriodDays + "','" + dop + "','" + periodRegular + "','" + birthControl + "','" + method + "','" + pregrancyTest + "','" + pregnancyTestDate + "','" + storedData1['userId'] + "'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                getwomenspregDatingData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('womens_preg_dating_listing.html');
                myApp.hidePreloader();
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {

        var val = "menstrualPeriod = '" + menstrualPeriod + "',certainApproximate = '" + certainApproximate + "',frequencyPeriodDays = '" + frequencyPeriodDays + "',dop = '" + dop + "',periodRegular = '" + periodRegular + "',birthControl = '" + birthControl + "',method = '" + method + "',pregrancyTest = '" + pregrancyTest + "',pregnancyTestDate = '" + pregnancyTestDate + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=womanPregnancyDating&columns=" + val + "&condition=id=" + womens_preg_dating_update;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                getwomenspregDatingData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('womens_preg_dating_listing.html');
                myApp.hidePreloader();
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
                myApp.hidePreloader();
            }
            myApp.hidePreloader();
        });

    }

}


function deletewomensPreg() {
    tableidid = $('#womens_preg_dating_update').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=womanPregnancyDating&columns=&condition=id=" + tableidid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            getwomenspregDatingData();
            mainView.router.loadPage('womens_preg_dating_listing.html');
            // $("#womens_preg_dating_ul_"+id).remove();

        });
    });
}



//sexual_activity.html

function SexualActivityInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=53";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function sexualHisformSubmit() {
    var sexualactivity = 0;
    var storedData1 = myApp.formGetData('logged_userId');
    if (document.getElementById('sexual_his_cur').checked) {
        sexualactivity = 1;
    }
    if (document.getElementById('sexual_his_cur1').checked) {
        sexualactivity = 0;
    }
    var partnername = $('#sexual_his_partner').val();
    if (document.getElementById('sexual_his_havbeen').checked) {
        var sexualpartner = document.getElementById('sexual_his_havbeen').value;
    }
    if (document.getElementById('sexual_his_havbeen1').checked) {
        var sexualpartner = document.getElementById('sexual_his_havbeen1').value;
    }
    if (document.getElementById('sexual_his_havbeen2').checked) {
        var sexualpartner = document.getElementById('sexual_his_havbeen2').value;
    }
    var controlmethod = $('#sexual_his_bc').val();
    var sexual_his_update = $('#sexual_his_update').val();
    myApp.showPreloader();

    if (sexual_his_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=sexualactivity&columns=sexualactivity,partnername,sexualpartner,controlmethod,customerId&values='" + sexualactivity + "','" + partnername + "','" + sexualpartner + "','" + controlmethod + "','" + storedData1['userId'] + "'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('women_section_main.html');
                myApp.hidePreloader();
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {

        var val = "sexualactivity = '" + sexualactivity + "',partnername = '" + partnername + "',sexualpartner = '" + sexualpartner + "',controlmethod = '" + controlmethod + "'";
        myApp.showPreloader();
        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=sexualactivity&columns=" + val + "&condition=id=" + sexual_his_update;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                myApp.alert("Your Details has been updated", 'Success');
                myApp.hidePreloader();
                mainView.router.loadPage('women_section_main.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });
    }

}



//activity_daily_living.html

function activityDailyLivingInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=54";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

function activitydailyformSubmit() {

    var storedData1 = myApp.formGetData('logged_userId');

    if (document.getElementById('activity_daily_hyesim').checked) {
        var military = document.getElementById('activity_daily_hyesim').value;
    }
    if (document.getElementById('activity_daily_hyesim1').checked) {
        var military = document.getElementById('activity_daily_hyesim1').value;
    }
    if (document.getElementById('activity_daily_hyebt').checked) {
        var transfusion = document.getElementById('activity_daily_hyebt').value;
    }
    if (document.getElementById('activity_daily_hyebt1').checked) {
        var transfusion = document.getElementById('activity_daily_hyebt1').value;
    }
    if (document.getElementById('activity_daily_dyhacac').checked) {
        var caffeine = document.getElementById('activity_daily_dyhacac').value;
    }
    if (document.getElementById('activity_daily_dyhacac1').checked) {
        var caffeine = document.getElementById('activity_daily_dyhacac1').value;
    }
    if (document.getElementById('activity_daily_dyhaoe').checked) {
        var occupational = document.getElementById('activity_daily_dyhaoe').value;
    }
    if (document.getElementById('activity_daily_dyhaoe1').checked) {
        var occupational = document.getElementById('activity_daily_dyhaoe1').value;
    }
    if (document.getElementById('activity_daily_dypiaehh').checked) {
        var hazardoushobbies = document.getElementById('activity_daily_dypiaehh').value;
    }
    if (document.getElementById('activity_daily_dypiaehh1').checked) {
        var hazardoushobbies = document.getElementById('activity_daily_dypiaehh1').value;
    }
    if (document.getElementById('activity_daily_dyhasc').checked) {
        var sleepconcerns = document.getElementById('activity_daily_dyhasc').value;
    }
    if (document.getElementById('activity_daily_dyhasc1').checked) {
        var sleepconcerns = document.getElementById('activity_daily_dyhasc1').value;
    }
    if (document.getElementById('activity_daily_ayceaus').checked) {
        var unusualstressors = document.getElementById('activity_daily_ayceaus').value;
    }
    if (document.getElementById('activity_daily_ayceaus1').checked) {
        var unusualstressors = document.getElementById('activity_daily_ayceaus1').value;
    }
    if (document.getElementById('activity_daily_dyhawc').checked) {
        var weight = document.getElementById('activity_daily_dyhawc').value;
    }
    if (document.getElementById('activity_daily_dyhawc1').checked) {
        var weight = document.getElementById('activity_daily_dyhawc1').value;
    }
    if (document.getElementById('activity_daily_dyesdsa').checked) {
        var vegetarian = document.getElementById('activity_daily_dyesdsa').value;
    }
    if (document.getElementById('activity_daily_dyesdsa1').checked) {
        var vegetarian = document.getElementById('activity_daily_dyesdsa1').value;
    }
    if (document.getElementById('activity_daily_dyhapbis').checked) {
        var injuries = document.getElementById('activity_daily_dyhapbis').value;
    }
    if (document.getElementById('activity_daily_dyhapbis1').checked) {
        var injuries = document.getElementById('activity_daily_dyhapbis1').value;
    }
    if (document.getElementById('activity_daily_dye').checked) {
        var exercise = document.getElementById('activity_daily_dye').value;
    }
    if (document.getElementById('activity_daily_dye1').checked) {
        var exercise = document.getElementById('activity_daily_dye1').value;
    }
    var doexercise = $('#activity_daily_wtdoyfe').val();

    if (document.getElementById('activity_daily_dywhrb').checked) {
        var bicycle = document.getElementById('activity_daily_dywhrb').value;
    }
    if (document.getElementById('activity_daily_dywhrb1').checked) {
        var bicycle = document.getElementById('activity_daily_dywhrb1').value;
    }
    if (document.getElementById('activity_daily_dywsc').checked) {
        var seatbelt = document.getElementById('activity_daily_dywsc').value;
    }
    if (document.getElementById('activity_daily_dywsc1').checked) {
        var seatbelt = document.getElementById('activity_daily_dywsc1').value;
    }
    if (document.getElementById('activity_daily_dydsb').checked) {
        var selfbreast = document.getElementById('activity_daily_dydsb').value;
    }
    if (document.getElementById('activity_daily_dydsb1').checked) {
        var selfbreast = document.getElementById('activity_daily_dydsb1').value;
    }

    var activity_daily_update = $('#activity_daily_update').val();

    if (activity_daily_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=activitiesofdailyLiving&columns=military,transfusion,caffeine,occupational,hazardoushobbies,sleepconcerns,unusualstressors,weight,vegetarian,injuries,exercise,doexercise,bicycle,seatbelt,selfbreast,CustomerId&values='" + military + "','" + transfusion + "','" + caffeine + "','" + occupational + "','" + hazardoushobbies + "','" + sleepconcerns + "','" + unusualstressors + "','" + weight + "','" + vegetarian + "','" + injuries + "','" + exercise + "','" + doexercise + "','" + bicycle + "','" + seatbelt + "','" + selfbreast + "','" + storedData1['userId'] + "'";

        // console.log( url );
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json);

            if (json['posts'][0]) {
                //getsocialhistoryData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('women_section_main.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });

    } else {

        var val = "military = '" + military + "',transfusion = '" + transfusion + "',caffeine = '" + caffeine + "',occupational = '" + occupational + "',hazardoushobbies = '" + hazardoushobbies + "',sleepconcerns = '" + sleepconcerns + "',unusualstressors = '" + unusualstressors + "',weight = '" + weight + "',vegetarian = '" + vegetarian + "',injuries = '" + injuries + "',exercise = '" + exercise + "',doexercise = '" + doexercise + "',bicycle = '" + bicycle + "',seatbelt = '" + seatbelt + "',selfbreast = '" + selfbreast + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=activitiesofdailyLiving&columns=" + val + "&condition=id=" + activity_daily_update;

        // console.log( url );
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json);
            if (json['posts'][0]) {
                //getsocialhistoryData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('women_section_main.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });
    }
}



//social_safety_doc.html

function SocialsafetyDoc() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=55";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function socialsftydocformSubmit() {
    var smokealarms = 0;
    var storedData1 = myApp.formGetData('logged_userId');
    var livewith = $('#social_safety_wdulw').val();

    if (document.getElementById('social_safety_duhacyh').checked) {
        var cats = document.getElementById('social_safety_duhacyh').value;
    }
    if (document.getElementById('social_safety_duhacyh1').checked) {
        var cats = document.getElementById('social_safety_duhacyh1').value;
    }

    var lifterbox = $('#social_safety_wctlb').val();

    if (document.getElementById('social_safety_dyhwsal').checked) {
        smokealarms = document.getElementById('social_safety_dyhwsal').value;
    }
    if (document.getElementById('social_safety_dyhwsal1').checked) {
        smokealarms = document.getElementById('social_safety_dyhwsal1').value;
    }
    if (document.getElementById('social_safety_atagih').checked) {
        var gunsinhome = document.getElementById('social_safety_atagih').value;
    }
    if (document.getElementById('social_safety_atagih1').checked) {
        var gunsinhome = document.getElementById('social_safety_atagih1').value;
    }

    var lockedup = $('#social_safety_atlups').val();
    var religiousPref = $('#social_safety_dyharp').val();
    var ethnicity = $('#social_safety_wiyre').val();
    var language = $('#social_safety_pl').val();
    var history = $('#social_safety_htbhv').val();
    var yearsofeducation = $('#social_safety_hmyoeyh').val();
    var typeofDegree = $('#social_safety_tod').val();
    var occupation = $('#social_safety_wiyo').val();
    var partneroccupation = $('#social_safety_poc').val();
    var social_safety_update = $('#social_safety_update').val();

    if (social_safety_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=socialsafety&columns=livewith,cats,lifterbox,smokealarms,gunsinhome,lockedup,religiousPref,ethnicity,language,history,yearsofeducation,typeofDegree,occupation,partneroccupation,customerId&values='" + livewith + "','" + cats + "','" + lifterbox + "','" + smokealarms + "','" + gunsinhome + "','" + lockedup + "','" + religiousPref + "','" + ethnicity + "','" + language + "','" + history + "','" + yearsofeducation + "','" + typeofDegree + "','" + occupation + "','" + partneroccupation + "','" + storedData1['userId'] + "'";

        // console.log( url );

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json);
            if (json['posts'][0]) {
                //getsocialhistoryData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('women_section_main.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {

        var val = "livewith = '" + livewith + "',cats = '" + cats + "',lifterbox = '" + lifterbox + "',smokealarms = '" + smokealarms + "',gunsinhome = '" + gunsinhome + "',lockedup = '" + lockedup + "',religiousPref = '" + religiousPref + "',ethnicity = '" + ethnicity + "',language = '" + language + "',history = '" + history + "',yearsofeducation = '" + yearsofeducation + "',typeofDegree = '" + typeofDegree + "',occupation = '" + occupation + "',partneroccupation = '" + partneroccupation + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=socialsafety&columns=" + val + "&condition=id=" + social_safety_update;
        // console.log( url );
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json);
            if (json['posts'][0]) {
                //getsocialhistoryData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('women_section_main.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });
    }

}


//obestetric_history_listing.html

function obestriclistinginfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=48";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function obestrichisAdd() {
    setTimeout(function() {
        $("#obestric_inbtn").css('display', 'none');
        $("#obestric_upbtn").css('display', 'block');
        ObestricCalendar();
    }, 500);
}


function ObestricCalendar() {
    var calendarDefault = myApp.calendar({
        input: '#obe_his_date',
    });
}
//obestetric_history_form.html

function getObestetricData() {
    console.log("hi");
    $('#obestric').html("");
    // setTimeout(function() {
    var storedData1 = myApp.formGetData('logged_userId');
    // myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=obstetric_history&columns=*&condition=customerId=" + storedData1['userId'];

    $.getJSON(url, function(json) {
        // myApp.hidePreloader();
        if (json['posts'] == 0) {
            var data = "No Records ";
            $('#obestric').append(data);
        } else {
            $.each(json['posts'], function(key, value) {
                var data = "<ul id='obestetric_his_ul_" + key + "'><li><a href='obestetric_history_form.html' class='item-link' onclick='obestetricHisDataEdit(" + value['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + value['LivingName'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + value['badyWeight'] + "</div></div></div></a></li></ul>";
                $('#obestric').append(data);
            });
        }
    });
    // }, 500);

}

function obestetricHisDataEdit(id) {
    myApp.showPreloader();
    setTimeout(function() {

        ObestricCalendar();

        var storedData1 = myApp.formGetData('logged_userId');


        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=obstetric_history&columns=*&condition=id=" + id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]['never_pregnant'] == 1) {
                $('#obe_his_check').attr('checked', 'checked');
            }
            $('#obe_his_date').val(json['posts'][0]['dateOfDelivery']);
            $('#obe_his_now').val(json['posts'][0]['nbrOfWeeks']);
            $('#obe_his_lbln').val(json['posts'][0]['laborLength']);
            $('#obe_his_babw').val(json['posts'][0]['badyWeight']);
            $('#obe_his_sex').val(json['posts'][0]['sex']);
            if (json['posts'][0]['delveryType'] == 0) {
                $('#obe_his_dt').attr('checked', 'checked');
            }
            if (json['posts'][0]['delveryType'] == 1) {
                $('#obe_his_dt1').attr('checked', 'checked');
            }
            $('#obe_his_epi').val(json['posts'][0]['epidural']);
            $('#obe_his_name').val(json['posts'][0]['LivingName']);
            $('#obe_his_cmts').val(json['posts'][0]['comments']);
            $('#obe_his_update').val(json['posts'][0]['id']);
        });
    }, 2500);
}

function obestericformSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var never_pregnant = 0;
    if (document.getElementById('obe_his_check').checked) {
        never_pregnant = 1
    } else {
        never_pregnant = 1
    }
    var dateOfDelivery = $('#obe_his_date').val();
    var nbrOfWeeks = $('#obe_his_now').val();
    var laborLength = $('#obe_his_lbln').val();
    var badyWeight = $('#obe_his_babw').val();
    var sex = $('#obe_his_sex').val();
    if (document.getElementById('obe_his_dt').checked) {
        console.log(document.getElementById('obe_his_dt').checked);
        var delveryType = document.getElementById('obe_his_dt').value;
    }
    if (document.getElementById('obe_his_dt1').checked) {
        console.log(document.getElementById('obe_his_dt').checked);
        var delveryType = document.getElementById('obe_his_dt1').value;
    }
    var epidural = $('#obe_his_epi').val();
    var LivingName = $('#obe_his_name').val();
    var comments = $('#obe_his_cmts').val();
    var obe_his_update = $('#obe_his_update').val();

    if (obe_his_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=obstetric_history&columns=never_pregnant,dateOfDelivery,nbrOfWeeks,laborLength,badyWeight,sex,delveryType,epidural,LivingName,comments,customerId&values='" + never_pregnant + "','" + dateOfDelivery + "','" + nbrOfWeeks + "','" + laborLength + "','" + badyWeight + "','" + sex + "','" + delveryType + "','" + epidural + "','" + LivingName + "','" + comments + "','" + storedData1['userId'] + "'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getObestetricData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('obestetric_history_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });

    } else {

        var val = "never_pregnant = '" + never_pregnant + "',dateOfDelivery = '" + dateOfDelivery + "',nbrOfWeeks = '" + nbrOfWeeks + "',laborLength = '" + laborLength + "',badyWeight = '" + badyWeight + "',sex = '" + sex + "',delveryType = '" + delveryType + "',epidural = '" + epidural + "',LivingName = '" + LivingName + "',comments = '" + comments + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=obstetric_history&columns=" + val + "&condition=id=" + obe_his_update;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getObestetricData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('obestetric_history_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });
    }
}



function deleteobestetricHis() {
    tableidid = $('#obe_his_update').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=obstetric_history&columns=&condition=id=" + tableidid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            mainView.router.loadPage('obestetric_history_listing.html');
        });
    });
}


//////////////////////////------------------------------ End women_section_main ------------------------------------------------------------




//////////////////////////------------------------------ dental_history_listing ------------------------------------------------------------


function getdentalhistoryData() {
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=dental_history&columns=*&condition=  user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            // myApp.hidePreloader();

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            $('#dentalhistory').html('');
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#dentalhistory').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    var data = "<ul id='dental_his_ul_" + i + "'><li><a href='dental_history_form.html' class='item-link' onclick='dentalhistEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['dentist'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['phone'] + "</div></div></div></a></li></ul>";

                    $('#dentalhistory').append(data);

                }
            }
        });
    }, 500);

}

function dentalhistEdit(id) {
    page_parameter = 23;
    setTimeout(function() {


        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=dental_history&columns=*&condition=id=" + id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            $('#dental_his_howddenprob').val(json['posts'][0]['curent_dental_problem']);
            $('#dental_his_daofladeex').val(json['posts'][0]['Date_last_dental_exam']);
            $('#dental_his_lastdenxrays').val(json['posts'][0]['last_dental_xrays']);
            $('#dental_his_dentst').val(json['posts'][0]['dentist']);
            $('#dental_his_denphne').val(json['posts'][0]['phone']);

            if (json['posts'][0]['do_brush'] == 1) {
                $('#dental_his_dugblwyb').attr('checked', 'checked');
            }
            if (json['posts'][0]['do_brush'] == 0) {
                $('#dental_his_dugblwyb1').attr('checked', 'checked');
            }
            if (json['posts'][0]['teeth_sensitive'] == 1) {
                $('#dental_his_aytsen').attr('checked', 'checked');
            }
            if (json['posts'][0]['teeth_sensitive'] == 0) {
                $('#dental_his_aytsen1').attr('checked', 'checked');
            }
            if (json['posts'][0]['Shrinking_theeth'] == 1) {
                $('#dental_his_aygsafyt').attr('checked', 'checked');
            }
            if (json['posts'][0]['Shrinking_theeth'] == 0) {
                $('#dental_his_aygsafyt1').attr('checked', 'checked');
            }
            if (json['posts'][0]['appliances'] == 1) {
                $('#dental_his_dywrdap').attr('checked', 'checked');
            }
            if (json['posts'][0]['appliances'] == 0) {
                $('#dental_his_dywrdap1').attr('checked', 'checked');
            }
            if (json['posts'][0]['dental_treatment'] == 1) {
                $('#dental_his_hyhas').attr('checked', 'checked');
            }
            if (json['posts'][0]['dental_treatment'] == 0) {
                $('#dental_his_hyhas1').attr('checked', 'checked');
            }
            if (json['posts'][0]['Dental_injections'] == 1) {
                $('#dental_his_ayhseawdi').attr('checked', 'checked');
            }
            if (json['posts'][0]['Dental_injections'] == 0) {
                $('#dental_his_ayhseawdi1').attr('checked', 'checked');
            }
            if (json['posts'][0]['jaws_tired'] == 1) {
                $('#dental_his_ayjtateod').attr('checked', 'checked');
            }
            if (json['posts'][0]['jaws_tired'] == 0) {
                $('#dental_his_ayjtateod1').attr('checked', 'checked');
            }
            if (json['posts'][0]['clinch_teeth'] == 1) {
                $('#dental_his_dygyt').attr('checked', 'checked');
            }
            if (json['posts'][0]['clinch_teeth'] == 0) {
                $('#dental_his_dygyt1').attr('checked', 'checked');
            }
            if (json['posts'][0]['cold_sores'] == 1) {
                $('#dental_his_dygc').attr('checked', 'checked');
            }
            if (json['posts'][0]['cold_sores'] == 0) {
                $('#dental_his_dygc1').attr('checked', 'checked');
            }
            if (json['posts'][0]['priortodental_treatment'] == 1) {
                $('#dental_his_adrtyta').attr('checked', 'checked');
            }
            if (json['posts'][0]['priortodental_treatment'] == 0) {
                $('#dental_his_adrtyta1').attr('checked', 'checked');
            }
            $('#dental_his_antibdo').val(json['posts'][0]['ifyes']);
            if (json['posts'][0]['Orthodontics'] == 1) {
                $('#dental_his_ortho').attr('checked', 'checked');
            }
            if (json['posts'][0]['Orthodontics'] == 0) {
                $('#dental_his_ortho1').attr('checked', 'checked');
            }
            $('#dental_his_orthoy').val(json['posts'][0]['Orthodonticsifyes']);
            if (json['posts'][0]['Tmj_therapy'] == 1) {
                $('#dental_his_tmj').attr('checked', 'checked');
            }
            if (json['posts'][0]['Tmj_therapy'] == 0) {
                $('#dental_his_tmj1').attr('checked', 'checked');
            }
            $('#dental_his_tmjyes').val(json['posts'][0]['Tmj_therapyifyes']);
            if (json['posts'][0]['Extractions'] == 1) {
                $('#dental_his_extra').attr('checked', 'checked');
            }
            if (json['posts'][0]['Extractions'] == 0) {
                $('#dental_his_extra1').attr('checked', 'checked');
            }
            $('#dental_his_extra').val(json['posts'][0]['Extractionsifyes']);
            if (json['posts'][0]['Periodontal_therapy'] == 1) {
                $('#dental_his_periothe').attr('checked', 'checked');
            }
            if (json['posts'][0]['Periodontal_therapy'] == 0) {
                $('#dental_his_periothe1').attr('checked', 'checked');
            }
            $('#dental_his_periyes').val(json['posts'][0]['Periodontal_therapyifyes']);
            if (json['posts'][0]['Endodontics'] == 1) {
                $('#dental_his_endodonatics').attr('checked', 'checked');
            }
            if (json['posts'][0]['Endodontics'] == 0) {
                $('#dental_his_endodonatics1').attr('checked', 'checked');
            }
            $('#dental_his_endodoyes').val(json['posts'][0]['Endodonticsifyes']);
            if (json['posts'][0]['Oral_surgery'] == 1) {
                $('#dental_his_oralsur').attr('checked', 'checked');
            }
            if (json['posts'][0]['Oral_surgery'] == 0) {
                $('#dental_his_oralsur1').attr('checked', 'checked');
            }
            $('#dental_his_oralsuryes').val(json['posts'][0]['   Oral_surgeryifyes']);
            if (json['posts'][0]['Oral_cancer'] == 1) {
                $('#dental_his_oralcan').attr('checked', 'checked');
            }
            if (json['posts'][0]['Oral_cancer'] == 0) {
                $('#dental_his_oralcan1').attr('checked', 'checked');
            }
            $('#dental_his_oralcanyes').val(json['posts'][0]['Oral_cancerifyes']);
            if (json['posts'][0]['Dental_implants'] == 1) {
                $('#dental_his_denimp').attr('checked', 'checked');
            }
            if (json['posts'][0]['Dental_implants'] == 0) {
                $('#dental_his_denimp1').attr('checked', 'checked');
            }

            $('#dental_his_denimpyes').val(json['posts'][0]['Dental_implantsifyes']);

            $('#dental_his_update').val(json['posts'][0]['id']);
        });
    }, 2500);

}



function implantsAndMediDevicesEdit(id) {
    page_parameter = 26;
    setTimeout(function() {
        $("#implants_inbtn").css('display', 'block');
        $("#implants_upbtn").css('display', 'none');
        getimplantsCal();
    }, 500);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medicaldevices&columns=*&condition=id=" + id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        $('#implants_meddevices_physician').val(json['posts']['0']['physician']);
        $('#implants_meddevices_hospital').val(json['posts']['0']['hospital']);
        $('#implants_meddevices_date').val(json['posts']['0']['date']);
        $('#implants_meddevices_reason').val(json['posts']['0']['reason']);
        $('#implants_meddevices_type').val(json['posts']['0']['type']);
        $('#update_implants_id').val(json['posts']['0']['id']);

    });

}
function dentalAdd() {
    page_parameter = 23;
    setTimeout(function() {
        $("#dentalhis_inbtn").css('display', 'none');
        $("#dentalhis_upbtn").css('display', 'block');
        dentalCalander();
    }, 500);
}

//dental_history_form.html

function dentalHisformSubmit() {

    var storedData1 = myApp.formGetData('logged_userId');
    var curent_dental_problem = $('#dental_his_howddenprob').val();
    var Date_last_dental_exam = $('#dental_his_daofladeex').val();
    var last_dental_xrays = $('#dental_his_lastdenxrays').val();
    var dentist = $('#dental_his_dentst').val();
    var phone = $('#dental_his_denphne').val();

    if (document.getElementById('dental_his_dugblwyb').checked) {
        var do_brush = document.getElementById('dental_his_dugblwyb').value;
    }
    if (document.getElementById('dental_his_dugblwyb1').checked) {
        var do_brush = document.getElementById('dental_his_dugblwyb1').value;
    }
    if (document.getElementById('dental_his_aytsen').checked) {
        var teeth_sensitive = document.getElementById('dental_his_aytsen').value;
    }
    if (document.getElementById('dental_his_aytsen1').checked) {
        var teeth_sensitive = document.getElementById('dental_his_aytsen1').value;
    }
    if (document.getElementById('dental_his_aygsafyt').checked) {
        var Shrinking_theeth = document.getElementById('dental_his_aygsafyt').value;
    }
    if (document.getElementById('dental_his_aygsafyt1').checked) {
        var Shrinking_theeth = document.getElementById('dental_his_aygsafyt1').value;
    }
    if (document.getElementById('dental_his_dywrdap').checked) {
        var appliances = document.getElementById('dental_his_dywrdap').value;
    }
    if (document.getElementById('dental_his_dywrdap1').checked) {
        var appliances = document.getElementById('dental_his_dywrdap1').value;
    }
    if (document.getElementById('dental_his_hyhas').checked) {
        var dental_treatment = document.getElementById('dental_his_hyhas').value;
    }
    if (document.getElementById('dental_his_hyhas1').checked) {
        var dental_treatment = document.getElementById('dental_his_hyhas1').value;
    }
    if (document.getElementById('dental_his_ayhseawdi').checked) {
        var Dental_injections = document.getElementById('dental_his_ayhseawdi').value;
    }
    if (document.getElementById('dental_his_ayhseawdi1').checked) {
        var Dental_injections = document.getElementById('dental_his_ayhseawdi1').value;
    }
    if (document.getElementById('dental_his_ayjtateod').checked) {
        var jaws_tired = document.getElementById('dental_his_ayjtateod').value;
    }
    if (document.getElementById('dental_his_ayjtateod1').checked) {
        var jaws_tired = document.getElementById('dental_his_ayjtateod1').value;
    }
    if (document.getElementById('dental_his_dygyt').checked) {
        var clinch_teeth = document.getElementById('dental_his_dygyt').value;
    }
    if (document.getElementById('dental_his_dygyt1').checked) {
        var clinch_teeth = document.getElementById('dental_his_dygyt1').value;
    }
    if (document.getElementById('dental_his_dygc').checked) {
        var cold_sores = document.getElementById('dental_his_dygc').value;
    }
    if (document.getElementById('dental_his_dygc1').checked) {
        var cold_sores = document.getElementById('dental_his_dygc1').value;
    }
    if (document.getElementById('dental_his_adrtyta').checked) {
        var priortodental_treatment = document.getElementById('dental_his_adrtyta').value;
    }
    if (document.getElementById('dental_his_adrtyta1').checked) {
        var priortodental_treatment = document.getElementById('dental_his_adrtyta1').value;
    }

    var ifyes = $('#dental_his_antibdo').val();
    if (document.getElementById('dental_his_ortho').checked) {
        var Orthodontics = document.getElementById('dental_his_ortho').value;
    }
    if (document.getElementById('dental_his_ortho1').checked) {
        var Orthodontics = document.getElementById('dental_his_ortho1').value;
    }
    var Orthodonticsifyes = $('#dental_his_orthoy').val();

    if (document.getElementById('dental_his_tmj').checked) {
        var Tmj_therapy = document.getElementById('dental_his_tmj').value;
    }
    if (document.getElementById('dental_his_tmj1').checked) {
        var Tmj_therapy = document.getElementById('dental_his_tmj1').value;
    }

    var Tmj_therapyifyes = $('#dental_his_tmjyes').val();

    if (document.getElementById('dental_his_extra').checked) {
        var Extractions = document.getElementById('dental_his_extra').value;
    }
    if (document.getElementById('dental_his_extra1').checked) {
        var Extractions = document.getElementById('dental_his_extra1').value;
    }

    var Extractionsifyes = $('#dental_his_extra').val();

    if (document.getElementById('dental_his_periothe').checked) {
        var Periodontal_therapy = document.getElementById('dental_his_periothe').value;
    }
    if (document.getElementById('dental_his_periothe1').checked) {
        var Periodontal_therapy = document.getElementById('dental_his_periothe1').value;
    }

    var Periodontal_therapyifyes = $('#dental_his_periyes').val();

    if (document.getElementById('dental_his_endodonatics').checked) {
        var Endodontics = document.getElementById('dental_his_endodonatics').value;
    }
    if (document.getElementById('dental_his_endodonatics1').checked) {
        var Endodontics = document.getElementById('dental_his_endodonatics1').value;
    }

    var Endodonticsifyes = $('#dental_his_endodoyes').val();

    if (document.getElementById('dental_his_oralsur').checked) {
        var Oral_surgery = document.getElementById('dental_his_oralsur').value;
    }
    if (document.getElementById('dental_his_oralsur1').checked) {
        var Oral_surgery = document.getElementById('dental_his_oralsur1').value;
    }

    var Oral_surgeryifyes = $('#dental_his_oralsuryes').val();

    if (document.getElementById('dental_his_oralcan').checked) {
        var Oral_cancer = document.getElementById('dental_his_oralcan').value;
    }
    if (document.getElementById('dental_his_oralcan1').checked) {
        var Oral_cancer = document.getElementById('dental_his_oralcan1').value;
    }

    var Oral_cancerifyes = $('#dental_his_oralcanyes').val();

    if (document.getElementById('dental_his_denimp').checked) {
        var Dental_implants = document.getElementById('dental_his_denimp').value;
    }
    if (document.getElementById('dental_his_denimp1').checked) {
        var Dental_implants = document.getElementById('dental_his_denimp1').value;
    }

    var Dental_implantsifyes = $('#dental_his_denimpyes').val();
    var dental_his_update = $('#dental_his_update').val();

    if (dental_his_update == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=dental_history&columns=curent_dental_problem,   Date_last_dental_exam,last_dental_xrays,dentist,phone,do_brush,teeth_sensitive,Shrinking_theeth,appliances,dental_treatment,Dental_injections,jaws_tired,clinch_teeth,cold_sores,priortodental_treatment,ifyes,Orthodontics,Orthodonticsifyes,Tmj_therapy,Tmj_therapyifyes,Extractions,Extractionsifyes,Periodontal_therapy,Periodontal_therapyifyes,Endodontics,Endodonticsifyes,Oral_surgery,Oral_surgeryifyes,Oral_cancer,Oral_cancerifyes,Dental_implants,Dental_implantsifyes,user_id&values='" + curent_dental_problem + "','" + Date_last_dental_exam + "','" + last_dental_xrays + "','" + dentist + "','" + phone + "','" + do_brush + "','" + teeth_sensitive + "','" + Shrinking_theeth + "','" + appliances + "','" + dental_treatment + "','" + Dental_injections + "','" + jaws_tired + "','" + clinch_teeth + "','" + cold_sores + "','" + priortodental_treatment + "','" + ifyes + "','" + Orthodontics + "','" + Orthodonticsifyes + "','" + Tmj_therapy + "','" + Tmj_therapyifyes + "','" + Extractions + "','" + Extractionsifyes + "','" + Periodontal_therapy + "','" + Periodontal_therapyifyes + "','" + Endodontics + "','" + Endodonticsifyes + "','" + Oral_surgery + "','" + Oral_surgeryifyes + "','" + Oral_cancer + "','" + Oral_cancerifyes + "','" + Dental_implants + "','" + Dental_implantsifyes + "','" + storedData1['userId'] + "'";

        // console.log( url );
        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json);
            if (json['posts'][0]) {
                // getdentalhistoryData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('dental_history_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });

    } else {

        var val = "curent_dental_problem = '" + curent_dental_problem + "',Date_last_dental_exam = '" + Date_last_dental_exam + "',last_dental_xrays = '" + last_dental_xrays + "',dentist = '" + dentist + "',phone = '" + phone + "',do_brush = '" + do_brush + "',teeth_sensitive = '" + teeth_sensitive + "',Shrinking_theeth = '" + Shrinking_theeth + "',appliances = '" + appliances + "',dental_treatment = '" + dental_treatment + "',Dental_injections = '" + Dental_injections + "',jaws_tired = '" + jaws_tired + "',clinch_teeth = '" + clinch_teeth + "',cold_sores = '" + cold_sores + "',priortodental_treatment = '" + priortodental_treatment + "',ifyes = '" + ifyes + "',Orthodontics = '" + Orthodontics + "',Orthodonticsifyes = '" + Orthodonticsifyes + "',Tmj_therapy = '" + Tmj_therapy + "',Tmj_therapyifyes = '" + Tmj_therapyifyes + "',Extractions = '" + Extractions + "',Extractionsifyes = '" + Extractionsifyes + "',Periodontal_therapy = '" + Periodontal_therapy + "',Periodontal_therapyifyes = '" + Periodontal_therapyifyes + "',Endodontics = '" + Endodontics + "',Endodonticsifyes = '" + Endodonticsifyes + "',Oral_surgery = '" + Oral_surgery + "',Oral_surgeryifyes = '" + Oral_surgeryifyes + "',Oral_cancer = '" + Oral_cancer + "',Oral_cancerifyes = '" + Oral_cancerifyes + "',Dental_implants = '" + Dental_implants + "',Dental_implantsifyes = '" + Dental_implantsifyes + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=dental_history&columns=" + val + "&condition=id=" + dental_his_update;

        // console.log( url );

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // console.log(json);
            if (json['posts'][0]) {
                // getdentalhistoryData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('dental_history_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });
    }
}



function deletedentalHis() {
    tableidid = $('#dental_his_update').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=dental_history&columns=&condition=id=" + tableidid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // getdentalhistoryData();
            mainView.router.loadPage('dental_history_listing.html');
            // $("#dental_his_ul_"+id).remove();

        });
    });
}

//////////////////////////------------------------------ End dental_history_listing ------------------------------------------------------------




//////////////////////////------------------------------ nutrition_diet_practise ------------------------------------------------------------

function nutritionanddietInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=28";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });



}

//foodand_nutrition_history.html

function foodandDietInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=104";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function getFoodData(customerId) {

    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=foodandnutrition&columns=*&condition=customerId=" + storedData1['userId'];

    $.getJSON(url, function(json) {
        myApp.hidePreloader();
        $('#food_nut_his_cal').val(json['posts'][0]['energyintake']);
        $('#food_nut_his_ecin').val(json['posts'][0]['estimatedenergy']);
        $('#food_nut_his_cff').val(json['posts'][0]['caloriesfromfat']);
        $('#food_nut_his_calfcar').val(json['posts'][0]['fromcarbohydrate']);

        if (json['posts'][0]['dairyfoods'] == 1) {
            $('#food_con_yes').attr('checked', 'checked');
        }
        if (json['posts'][0]['dairyfoods'] == 0) {
            $('#food_con_no').attr('checked', 'checked');
        }
        $('#food_nut_his_servday').val(json['posts'][0]['servingsforday']);
        if (json['posts'][0]['dinesaway'] == 1) {
            $('#food_dines_yes').attr('checked', 'checked');
        }
        if (json['posts'][0]['dinesaway'] == 0) {
            $('#food_dines_no').attr('checked', 'checked');
        }
        $('#food_nut_his_tpw').val(json['posts'][0]['timesPerweek']);
        $('#food_nut_his_loc').val(json['posts'][0]['locations']);
        $('#food_nut_his_res').val(json['posts'][0]['restaurants']);
        $('#food_nut_his_ff').val(json['posts'][0]['fastfoot']);
        if (json['posts'][0]['readsfood'] == 1) {
            $('#food_reads_yes').attr('checked', 'checked');
        }
        if (json['posts'][0]['readsfood'] == 0) {
            $('#food_reads_no').attr('checked', 'checked');
        }
        if (json['posts'][0]['modifiesfood'] == 1) {
            $('#food_modifies_yes').attr('checked', 'checked');
        }
        if (json['posts'][0]['modifiesfood'] == 0) {
            $('#food_modifies_no').attr('checked', 'checked');
        }
        if (json['posts'][0]['portionsizes'] == 1) {
            $('#food_limitp_yes').attr('checked', 'checked');
        }
        if (json['posts'][0]['portionsizes'] == 0) {
            $('#food_limitp_no').attr('checked', 'checked');
        }
        if (json['posts'][0]['vitaminsandminerals'] == 1) {
            $('#food_maintain_yes').attr('checked', 'checked');
        }
        if (json['posts'][0]['vitaminsandminerals'] == 0) {
            $('#food_maintain_no').attr('checked', 'checked');
        }
        if (json['posts'][0]['activitylevel'] == 1) {
            $('#food_phya_sed').attr('checked', 'checked');
        }
        if (json['posts'][0]['activitylevel'] == 2) {
            $('#food_phya_low').attr('checked', 'checked');
        }
        if (json['posts'][0]['activitylevel'] == 3) {
            $('#food_phya_act').attr('checked', 'checked');
        }
        if (json['posts'][0]['activitylevel'] == 4) {
            $('#food_phya_vact').attr('checked', 'checked');
        }
        $('#food_nut_his_spe').val(json['posts'][0]['specify']);
        $('#food_nut_his_mod').val(json['posts'][0]['moderate']);
        $('#food_nut_his_vig').val(json['posts'][0]['vigorous']);
        $('#food_nut_his_set').val(json['posts'][0]['sedentarytime']);
        $('#update_food').val(json['posts'][0]['id']);

    });


}




function getbioData() {
    var storedData1 = myApp.formGetData('logged_userId');
    // myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=biochemicalandrisk&columns=*&condition=customerid=" + storedData1['userId'];

    $.getJSON(url, function(json) {
        // myApp.hidePreloader();
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }
        if (json['posts'] == 0) {
            var data = "No Records";
            $('#biochemical').append(data);
        } else {
            for (i = 0; i < count; i++) {
                // var data = "<ul id='bio_chemical_ul_"+i+"'> <li class='swipeout'><div class='swipeout-content item-content white' >"+json['posts'][i]['height']+ "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;"+json['posts'][i]['weight']+"</div><div class='swipeout-actions-left'><a href='bio_chemical_form.html' onclick='biochemicalDataEdit("+json['posts'][i]['id']+");' class='action1 bg-orange'>EDIT</a><a href='#' onclick='deleteBioChemical("+json['posts'][i]['id']+","+i+");' class='action1'>DELETE</a></div></li></ul>";
                var data = "<ul id='bio_chemical_ul_" + i + "'><li><a href='bio_chemical_form.html' class='item-link' onclick='biochemicalDataEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['height'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['weight'] + "</div></div></div></a></li></ul>";
                $('#biochemical').append(data);
            }
        }
    });
}



function getMonitoringEvoData() {
    page_parameter = 25;
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=NutritionIntakeOutcomes&columns=*&condition=1";

    $.getJSON(url, function(json) {
        myApp.hidePreloader();
        var parents = [];
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }

        var count1 = count;
        for (i = 0; i < count; i++) {
            if (json['posts'][i]['parent'] == 0) {
                if (localStorage.getItem("lang") == 'ar') {
                    parents.push({
                        "name": json['posts'][i]['name_arabic'],
                        "id": json['posts'][i]['id']
                    });
                } else if (localStorage.getItem("lang") == 'fr') {
                    parents.push({
                        "name": json['posts'][i]['name_french'],
                        "id": json['posts'][i]['id']
                    });
                } else if (localStorage.getItem("lang") == 'sp') {
                    parents.push({
                        "name": json['posts'][i]['name_spanish'],
                        "id": json['posts'][i]['id']
                    });
                } else if (localStorage.getItem("lang") == 'ru') {
                    parents.push({
                        "name": json['posts'][i]['name_russian'],
                        "id": json['posts'][i]['id']
                    });
                } else {
                    parents.push({
                        "name": json['posts'][i]['name'],
                        "id": json['posts'][i]['id']
                    });
                }
            }
        }
        for (i = 0; i < count; i++) {
            var data1 = "<h4>" + parents[i]['name'] + "</h4>";
            for (j = 0; j < count1; j++) {
                if (parents[i]['id'] == json['posts'][j]['parent']) {
                    if (localStorage.getItem("lang") == 'ar') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_arabic'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_arabic'] + '" ></div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'fr') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_french'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_french'] + '" ></div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'sp') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_spanish'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_spanish'] + '" ></div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'ru') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_russian'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_russian'] + '" ></div></div></div></li></ul>';
                    } else {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name'] + '" ></div></div></div></li></ul>';
                    }
                }
            }
            $('#monitoring').append(data1);
        }
    });

}

//foodand_nutrition_history.html

function foodAndNutSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var energyintake = $('#food_nut_his_cal').val();
    var estimatedenergy = $('#food_nut_his_ecin').val();
    var caloriesfromfat = $('#food_nut_his_cff').val();
    var fromcarbohydrate = $('#food_nut_his_calfcar').val();
    var update_food = $('#update_food').val();

    if (document.getElementById('food_con_yes').checked) {
        var dairyfoods = document.getElementById('food_con_yes').value;
    }
    if (document.getElementById('food_con_no').checked) {
        var dairyfoods = document.getElementById('food_con_no').value;
    }
    var servingsforday = $('#food_nut_his_servday').val();
    if (document.getElementById('food_dines_yes').checked) {
        var dinesaway = document.getElementById('food_dines_yes').value;
    }
    if (document.getElementById('food_dines_no').checked) {
        var dinesaway = document.getElementById('food_dines_no').value;
    }
    var timesPerweek = $('#food_nut_his_tpw').val();
    var locations = $('#food_nut_his_loc').val();
    var restaurants = $('#food_nut_his_res').val();
    var fastfoot = $('#food_nut_his_ff').val();
    if (document.getElementById('food_reads_yes').checked) {
        var readsfood = document.getElementById('food_reads_yes').value;
    }
    if (document.getElementById('food_reads_no').checked) {
        var readsfood = document.getElementById('food_reads_no').value;
    }
    if (document.getElementById('food_modifies_yes').checked) {
        var modifiesfood = document.getElementById('food_modifies_yes').value;
    }
    if (document.getElementById('food_modifies_no').checked) {
        var modifiesfood = document.getElementById('food_modifies_no').value;
    }
    if (document.getElementById('food_limitp_yes').checked) {
        var portionsizes = document.getElementById('food_limitp_yes').value;
    }
    if (document.getElementById('food_limitp_no').checked) {
        var portionsizes = document.getElementById('food_limitp_no').value;
    }
    if (document.getElementById('food_maintain_yes').checked) {
        var vitaminsandminerals = document.getElementById('food_maintain_yes').value;
    }
    if (document.getElementById('food_maintain_no').checked) {
        var vitaminsandminerals = document.getElementById('food_maintain_no').value;
    }
    if (document.getElementById('food_phya_sed').checked) {
        var activitylevel = document.getElementById('food_phya_sed').value;
    }
    if (document.getElementById('food_phya_low').checked) {
        var activitylevel = document.getElementById('food_phya_low').value;
    }
    if (document.getElementById('food_phya_act').checked) {
        var activitylevel = document.getElementById('food_phya_act').value;
    }
    if (document.getElementById('food_phya_vact').checked) {
        var activitylevel = document.getElementById('food_phya_vact').value;
    }
    var specify = $('#food_nut_his_spe').val();
    var moderate = $('#food_nut_his_mod').val();
    var vigorous = $('#food_nut_his_vig').val();
    var sedentarytime = $('#food_nut_his_set').val();

    if (update_food == '') {

            var columnName = "physicianname,name_other,specialty,specialty_other,dateofappointment,time,reminderdate,remindertime,reminderdate2,remindertime2,customerid,reminder";
        var columnValue = "'" + physicianname + "','" + name_other + "','" + specialty + "','" + specialty_other + "','" + dateofappointment + "','" + time + "','" + reminderdate + "','" + remindertime + "','" + reminderdate2 + "','" + remindertime2 + "','" + storedData1['userId'] + "','" + reminder + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=foodandnutrition&columns=" + columnName + "&values=" + coloumnValue + "";
        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
            console.log('json is --- > '+json['posts'][0])
                //getDocAppData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('nutrition_diet_practise.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });

    } else {

        var val = "energyintake = '" + energyintake + "',estimatedenergy = '" + estimatedenergy + "',caloriesfromfat = '" + caloriesfromfat + "',fromcarbohydrate = '" + fromcarbohydrate + "',dairyfoods = '" + dairyfoods + "',servingsforday = '" + servingsforday + "',dinesaway = '" + dinesaway + "',timesPerweek = '" + timesPerweek + "',locations = '" + locations + "',restaurants='" + restaurants + "',fastfoot='" + fastfoot + "',readsfood='" + readsfood + "',modifiesfood='" + modifiesfood + "',portionsizes='" + portionsizes + "',vitaminsandminerals='" + vitaminsandminerals + "',activitylevel='" + activitylevel + "',specify='" + specify + "',moderate='" + moderate + "',vigorous='" + vigorous + "',sedentarytime='" + sedentarytime + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=foodandnutrition&columns=" + val + "&condition=id=" + update_food;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                //getEmergencyContactData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('nutrition_diet_practise.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    }

}




//bio_chemical_listing.html

function biologicallistingInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=105";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function biochemicalAdd() {
    setTimeout(function() {
        $("#biochemical_inbtn").css('display', 'none');
        $("#biochemical_upbtn").css('display', 'block');
    }, 500);

    var storedData1 = myApp.formGetData('logged_userId');

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=metrics&condition=user_id=" + storedData1['userId'];

    var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=*&condition=user_id=" + storedData1['userId'];

    $.getJSON(url, function(json) {

        $.getJSON(url1, function(json1) {

            if (json1['posts'][0]['metrics'] == 0) {

                $("#showUr").css('display', 'block');
                $("#showEUROP12").css('display', 'none');
                $('#bio_che_height').val(json['posts'][0]['height']);
                // $('#bio_che_height_i').val( json['posts'][0]['inches'] );
                $('#bio_che_Weight_p').val(json['posts'][0]['weight']);

            } else if (json1['posts'][0]['metrics'] == 1) {

                $("#showUr").css('display', 'none');
                $("#showEUROP12").css('display', 'block');
                $('#bio_che_height_cm').val(json['posts'][0]['height']);
                $('#bio_che_Weight_kg').val(json['posts'][0]['weight']);

            }

        });

    });
}

function biochemicalDataEdit(id) {
    setTimeout(function() {

        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=biochemicalandrisk&columns=*&condition=id=" + id;
        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=*&condition=user_id=" + storedData1['userId'];

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            $.getJSON(url1, function(json1) {
                if (json1['posts'][0]['metrics'] == 0) {
                    $("#showUr").css('display', 'block');
                    $("#showEUROP12").css('display', 'none');
                    $('#bio_che_height').val(json['posts'][0]['height']);
                    $('#bio_che_Weight_p').val(json['posts'][0]['weight']);
                    // $('#bio_che_height_i').val( json['posts'][0]['inches'] );
                } else if (json1['posts'][0]['metrics'] == 1) {
                    $("#showUr").css('display', 'none');
                    $("#showEUROP12").css('display', 'block');
                    $('#bio_che_height_cm').val(json['posts'][0]['height']);
                    $('#bio_che_Weight_kg').val(json['posts'][0]['weight']);
                }
            });
            $('#bio_che_BMI').val(json['posts'][0]['bmi']);
            $('#bio_che_wc').val(json['posts'][0]['wc']);
            $('#bio_che_bp').val(json['posts'][0]['bp_s']);
            $('#bio_che_Pulse').val(json['posts'][0]['pulse']);
            $('#bio_che_rmr').val(json['posts'][0]['rmr']);
            $('#bio_che_bon').val(json['posts'][0]['bp_d']);
            $('#bio_che_cpe').val(json['posts'][0]['calorimetryprodictiveequ']);
            $('#bio_che_TEE').val(json['posts'][0]['tee']);
            $('#bio_update').val(json['posts'][0]['id']);
        });
    }, 2500);
}



//bio_chemical_form
function biochemicalFormInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=106";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function biochemicalDataSubmit() {

    var storedData1 = myApp.formGetData('logged_userId');
    var height = $('#bio_che_height').val();
    var weight = $('#bio_che_Weight_p').val();
    var bmi = $('#bio_che_BMI').val();
    var wc = $('#bio_che_wc').val();
    var bp_s = $('#bio_che_bp').val();
    var pulse = $('#bio_che_Pulse').val();
    var rmr = $('#bio_che_rmr').val();
    var bp_d = $('#bio_che_bon').val();
    var calorimetryprodictiveequ = $('#bio_che_cpe').val();
    var tee = $('#bio_che_TEE').val();
    var bio_update = $('#bio_update').val();

    if (bio_update == '') {

        var url2 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=metrics&condition=user_id=" + storedData1['userId'];
        $.getJSON(url2, function(json) {

            if (json['posts'][0]['metrics'] == 0) {
                // $("#showU").css('display','block');
                // $("#showEUROP").css('display','none');
                var height_feet = $('#bio_che_height').val();
                var height_inches = $('#bio_che_height_i').val();
                var height = height_feet + '.' + height_inches;
                var weight = $('#bio_che_Weight_p').val();

                var columnNames = "height,weight,bmi,wc,bp_s,pulse,rmr,bp_d,calorimetryprodictiveequ,tee,customerid";

                var columnValues = "'" + height_feet + "','" + weight + "','" + bmi + "','" + wc + "','" + bp_s + "','" + pulse + "','" + rmr + "','" + bp_d + "','" + calorimetryprodictiveequ + "','" + tee + "','" + storedData1['userId'] + "'";

            } else if (json['posts'][0]['metrics'] == 1) {
                var height = $('#bio_che_height_cm').val();
                var weight = $('#bio_che_Weight_kg').val();

                var columnNames = "height,weight,bmi,wc,bp_s,pulse,rmr,bp_d,calorimetryprodictiveequ,tee,customerid";

                var columnValues = "'" + height_feet + "','" + weight + "','" + bmi + "','" + wc + "','" + bp_s + "','" + pulse + "','" + rmr + "','" + bp_d + "','" + calorimetryprodictiveequ + "','" + tee + "','" + storedData1['userId'] + "'";
            }
            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=biochemicalandrisk&columns=" + columnNames + "&values=" + columnValues + "";


            $.getJSON(url, function(json) {
                myApp.hidePreloader();
                // console.log(json);

                if (json['posts'][0]) {
                    // getbioData();
                    myApp.alert("Your Details has been Created", 'Success');
                    mainView.router.loadPage('bio_chemical_listing.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }

            });
        });

    } else {

        var url1 = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=user_profile&columns=metrics&condition=user_id=" + storedData1['userId'];

        $.getJSON(url1, function(json) {
            if (json['posts'][0]['metrics'] == 0) {
                // $("#showU").css('display','block');
                // $("#showEUROP").css('display','none');
                var height_feet = $('#bio_che_height').val();
                var height_inches = $('#bio_che_height_i').val();
                var height = height_feet + '.' + height_inches;
                var weight = $('#bio_che_Weight_p').val();

                var val = "'height = '" + height_feet + "',weight = '" + weight + "',bmi = '" + bmi + "',wc = '" + wc + "',bp_s = '" + bp_s + "',pulse = '" + pulse + "',rmr = '" + rmr + "',bp_d = '" + bp_d + "',calorimetryprodictiveequ = '" + calorimetryprodictiveequ + "',tee = '" + tee + "'";

            } else if (json['posts'][0]['metrics'] == 1) {
                var height = $('#bio_che_height_cm').val();
                var weight = $('#bio_che_Weight_kg').val();

                var val = "height = '" + height_feet + "',weight = '" + weight + "',bmi = '" + bmi + "',wc = '" + wc + "',bp_s = '" + bp_s + "',pulse = '" + pulse + "',rmr = '" + rmr + "',bp_d = '" + bp_d + "',calorimetryprodictiveequ = '" + calorimetryprodictiveequ + "',tee = '" + tee + "'";

            }
            myApp.showPreloader();

            var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=biochemicalandrisk&columns=" + val + "&condition=id=" + bio_update;

            // console.log( url );

            $.getJSON(url, function(json) {
                myApp.hidePreloader();
                // console.log(json);
                if (json['posts'][0]) {
                    // getbioData();
                    myApp.alert("Your Details has been updated", 'Success');
                    mainView.router.loadPage('bio_chemical_listing.html');

                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }
            });

        });

    }

}


function deleteBioChemical() {
    tableidid = $('#bio_update').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=biochemicalandrisk&columns=&condition=id=" + tableidid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // getbioData();
            mainView.router.loadPage('bio_chemical_listing.html');
            // $("#bio_chemical_ul_"+id).remove();

        });
    });
}




//monitoringand_evolution.html

function moniteringandEvaluation() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=107";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}



function monitoringAndEvoDataSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url2 = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=monitoringevaluation&columns=&condition=customerid=" + storedData1['userId'];
    $.getJSON(url2, function(json) {});
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=NutritionIntakeOutcomes&columns=*&condition=1";
    myApp.showPreloader();

    $.getJSON(url, function(json) {
        myApp.hidePreloader();
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }

        for (i = 0; i < count; i++) {

            if ($('#value_' + i).val() != '' && $('#value_' + i).val() != undefined) {
                var url1 = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=monitoringevaluation&columns=customerid,intakeId,intakevalue&values='" + storedData1['userId'] + "','" + i + "','" + $('#value_' + i).val() + "'";

                $.getJSON(url1, function(json) {

                    if (json['posts'][0]) {
                        myApp.alert("Your Details has been Created", 'Success');
                        mainView.router.loadPage('nutrition_diet_practise.html');
                    } else {
                        myApp.alert("Your Details Not Created", 'Failure');
                    }
                });
            }

        }

    });
}

function getMonitoringEvoData() {
    page_parameter = 25;
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=NutritionIntakeOutcomes&columns=*&condition=1";

    $.getJSON(url, function(json) {
        myApp.hidePreloader();
        var parents = [];
        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }

        var count1 = count;
        for (i = 0; i < count; i++) {
            if (json['posts'][i]['parent'] == 0) {
                if (localStorage.getItem("lang") == 'ar') {
                    parents.push({
                        "name": json['posts'][i]['name_arabic'],
                        "id": json['posts'][i]['id']
                    });
                } else if (localStorage.getItem("lang") == 'fr') {
                    parents.push({
                        "name": json['posts'][i]['name_french'],
                        "id": json['posts'][i]['id']
                    });
                } else if (localStorage.getItem("lang") == 'sp') {
                    parents.push({
                        "name": json['posts'][i]['name_spanish'],
                        "id": json['posts'][i]['id']
                    });
                } else if (localStorage.getItem("lang") == 'ru') {
                    parents.push({
                        "name": json['posts'][i]['name_russian'],
                        "id": json['posts'][i]['id']
                    });
                } else {
                    parents.push({
                        "name": json['posts'][i]['name'],
                        "id": json['posts'][i]['id']
                    });
                }
            }
        }
        for (i = 0; i < count; i++) {
            var data1 = "<h4>" + parents[i]['name'] + "</h4>";
            for (j = 0; j < count1; j++) {
                if (parents[i]['id'] == json['posts'][j]['parent']) {
                    if (localStorage.getItem("lang") == 'ar') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_arabic'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_arabic'] + '" ></div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'fr') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_french'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_french'] + '" ></div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'sp') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_spanish'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_spanish'] + '" ></div></div></div></li></ul>';
                    } else if (localStorage.getItem("lang") == 'ru') {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;" class="arabic"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name_russian'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name_russian'] + '" ></div></div></div></li></ul>';
                    } else {
                        data1 += '<ul style="background: #ffffff;margin-bottom: 0px;"><li ><div class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title label">' + json['posts'][j]['name'] + '</div><div class="item-input"><input type="text" name="name_' + json['posts'][j]['id'] + '" id="value_' + json['posts'][j]['id'] + '" placeholder="' + json['posts'][j]['name'] + '" ></div></div></div></li></ul>';
                    }
                }
            }
            $('#monitoring').append(data1);
        }
    });

}

//////////////////////////------------------------------ End nutrition_diet_practise ------------------------------------------------------------




//////////////////////////------------------------------  implants_medicaldevices_listing ------------------------------------------------------------


function implantmedicaldevicesListInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=15";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

function implantsAdd() {
    page_parameter = 26;
    setTimeout(function() {
        $("#implants_inbtn").css('display', 'none');
        $("#implants_upbtn").css('display', 'block');
        getimplantsCal();
    }, 500);
}



function getImplantsAndMediData() {
    page_parameter = 1;
    tempPage = 26;
    setTimeout(function() {
        var storedData1 = myApp.formGetData('logged_userId');


        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medicaldevices&columns=*&condition=customerId=" + storedData1['userId'];

        $.getJSON(url, function(json) {

            var key, count = 0;
            for (key in json['posts']) {
                if (json['posts'].hasOwnProperty(key)) {
                    count++;
                }
            }
            if (json['posts'] == 0) {
                var data = "No Records";
                $('#implantsandmedicaldevices').append(data);
            } else {

                for (i = 0; i < count; i++) {

                    var data = "<ul id='implants_medi_ul_" + i + "'><li><a href='implants_medicaldevices.html' class='item-link' onclick='implantsAndMediDevicesEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['physician'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['type'] + "</div></div></div></a></li></ul>";

                    $('#implantsandmedicaldevices').append(data);
                }
            }

        });
    }, 500);
}


function getimplantsCal() {
    var calendarDefault = myApp.calendar({
        input: '#implants_meddevices_date',
    });
}



function implantsAndMediDevicesEdit(id) {
    page_parameter = 26;
    setTimeout(function() {

        getimplantsCal();
    }, 500);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medicaldevices&columns=*&condition=id=" + id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();

        $('#implants_meddevices_physician').val(json['posts'][0]['physician']);
        $('#implants_meddevices_hospital').val(json['posts'][0]['hospital']);
        $('#implants_meddevices_date').val(json['posts'][0]['date']);
        $('#implants_meddevices_reason').val(json['posts'][0]['reason']);
        $('#implants_meddevices_type').val(json['posts'][0]['type']);
        $('#update_implants_id').val(json['posts'][0]['id']);

    });

}

//implants_medicaldevices.html

function implantdeviceforminfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=109";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}




function implantsdataSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var physician = $('#implants_meddevices_physician').val();
    var hospital = $('#implants_meddevices_hospital').val();
    var date = $('#implants_meddevices_date').val();
    var reason = $('#implants_meddevices_reason').val();
    var type = $('#implants_meddevices_type').val();
    var update_implants_id = $('#update_implants_id').val();
    myApp.showPreloader();
    if (update_implants_id == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=medicaldevices&columns=physician,hospital,date,reason,type,customerId,active&values='" + physician + "','" + hospital + "','" + date + "','" + reason + "','" + type + "','" + storedData1['userId'] + "','1'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                getImplantsAndMediData();
                myApp.alert("Your Details has been Created", 'Success');
                mainView.router.loadPage('implants_medicaldevices_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    } else {

        var val = "physician = '" + physician + "',hospital = '" + hospital + "',date = '" + date + "',reason = '" + reason + "',type = '" + type + "'";


        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=medicaldevices&columns=" + val + "&condition=id=" + update_implants_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                getImplantsAndMediData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('implants_medicaldevices_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });
    }

}


function deleteImplantsAndMedicalDevices() {
    tableidid = $('#update_implants_id').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=medicaldevices&columns=&condition=id=" + tableidid;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            getImplantsAndMediData();
            mainView.router.loadPage('implants_medicaldevices_listing.html');
            // $("#implants_medi_ul_"+id).remove();

        });
    });
}
//////////////////////////------------------------------ End implants_medicaldevices_listing ------------------------------------------------------------




//////////////////////////------------------------------ medicalandlega_directives_listing ------------------------------------------------------------

function getMedicalDirectorsData() {
    var storedData1 = myApp.formGetData('logged_userId');
    // myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medical_legal_directors&columns=*&condition=user_id=" + storedData1['userId'];

    $.getJSON(url, function(json) {
        // myApp.hidePreloader();

        var key, count = 0;

        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }
        if (json['posts'] == 0) {
            var data = "No Records";
            $('#medicaldirectors').append(data);
        } else {

            for (i = 0; i < count; i++) {

                var data = "<ul id='medical_directors_ul_" + i + "'><li><a href='medicalandlegal_directives.html' class='item-link' onclick='medicallegalDirectorsEdit(" + json['posts'][i]['director_id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['attorney_power'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['email'] + "</div></div></div></a></li></ul>";

                $('#medicaldirectors').append(data);

            }
        }

    });

}


function medicallegalDirectorsEdit(director_id) {
    page_parameter = 27;
    setTimeout(function() {


        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=medical_legal_directors&columns=*&condition=director_id=" + director_id;

        $.getJSON(url, function(json) {

            $('#medical_legal_Proxy').val(json['posts'][0]['proxy']);
            $('#medical_legal_atto_power').val(json['posts'][0]['attorney_power']);
            $('#medical_legal_durable_apower').val(json['posts'][0]['durable_attorney_power']);
            $('#medical_legal_livingwill').val(json['posts'][0]['living_will']);
            $('#medical_legal_authority').val(json['posts'][0]['legal_authority_name']);
            $('#medical_legal_Address').val(json['posts'][0]['address']);
            $('#medical_legal_city').val(json['posts'][0]['city']);
            $('#medical_legal_state').val(json['posts'][0]['state']);
            $('#medical_legal_zip').val(json['posts'][0]['zip_code']);

            var url1 = "https://www.healthrecordspro.com/wsplus.php?type=getidname&format=json&table=country&condition=id=" + json['posts'][0]['country'];

            $.getJSON(url1, function(json) {
                myApp.hidePreloader();

                // $('#medical_legal_country').val( json['posts'][0]['name'] );

                $('#medical_legal_country_id').val(json['posts'][0]['id']);

            });
            document.getElementById("medical_legal_country").selectedIndex = json['posts'][0]['country'];
            $('#medical_legal_home_phno').val(json['posts'][0]['home_phone_number']);
            $('#medical_legal_mobile_phno').val(json['posts'][0]['mobile_phone_number']);
            $('#medical_legal_email').val(json['posts'][0]['email']);
            $('#medical_legal_remarks').val(json['posts'][0]['remarks']);
            $('#update_medicaldirec_id').val(json['posts'][0]['director_id']);

        });
    }, 1500);

}

function MedicallegalDirectiveinfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=24";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function mediDirAdd() {
    page_parameter = 27;
    setTimeout(function() {
        $("#medicaldirec_inbtn").css('display', 'none');
        $("#medicaldirec_upbtn").css('display', 'block');
    }, 500);
}

//medicalandlegal_directives.html


function MedicalandlegalDirectiveForm() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=111";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function medicaldirectivesSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var proxy = $('#medical_legal_Proxy').val();
    var attorney_power = $('#medical_legal_atto_power').val();
    var durable_attorney_power = $('#medical_legal_durable_apower').val();
    var living_will = $('#medical_legal_livingwill').val();
    var legal_authority_name = $('#medical_legal_authority').val();
    var address = $('#medical_legal_Address').val();
    var city = $('#medical_legal_city').val();
    var state = $('#medical_legal_state').val();
    var zip_code = $('#medical_legal_zip').val();
    var country = $('#medical_legal_country').val();
    var home_phone_number = $('#medical_legal_home_phno').val();
    var mobile_phone_number = $('#medical_legal_mobile_phno').val();
    var email = $('#medical_legal_email').val();
    var remarks = $('#medical_legal_remarks').val();
    var update_medicaldirec_id = $('#update_medicaldirec_id').val();

    if (update_medicaldirec_id == '') {

        var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=medical_legal_directors&columns=proxy,attorney_power,durable_attorney_power,living_will,legal_authority_name,address,city,state,zip_code,country,home_phone_number,mobile_phone_number,email,remarks,user_id,active&values='" + proxy + "','" + attorney_power + "','" + durable_attorney_power + "','" + living_will + "','" + legal_authority_name + "','" + address + "','" + city + "','" + state + "','" + zip_code + "','" + country + "','" + home_phone_number + "','" + mobile_phone_number + "','" + email + "','" + remarks + "','" + storedData1['userId'] + "','1'";

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getMedicalDirectorsData();
                myApp.alert("Your Details has been Created thanks", 'Success');
                mainView.router.loadPage('medicalandlega_directives_listing.html');
            } else {
                myApp.alert("Your Details Not Created please try again !", 'Failure');
            }

        });

    } else {
        if (isNaN($('#medical_legal_country').val())) {
            var mecountryid = $('#medical_legal_country_id').val();
        } else {
            var mecountryid = $('#medical_legal_country').val();
        }

        var val = "proxy = '" + proxy + "',attorney_power = '" + attorney_power + "',durable_attorney_power = '" + durable_attorney_power + "',living_will = '" + living_will + "',legal_authority_name = '" + legal_authority_name + "',address = '" + address + "',city = '" + city + "',state = '" + state + "',zip_code = '" + zip_code + "',country='" + mecountryid + "',home_phone_number='" + home_phone_number + "',mobile_phone_number='" + mobile_phone_number + "',email='" + email + "',remarks='" + remarks + "'";

        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=medical_legal_directors&columns=" + val + "&condition=director_id=" + update_medicaldirec_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getMedicalDirectorsData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('medicalandlega_directives_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }

        });

    }
}


function deletemedicaldirectors() {
    director_id = $('#update_medicaldirec_id').val();
    console.log('director_id -->  '+ director_id)
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=medical_legal_directors&columns=&condition=director_id=" + director_id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();
            // getMedicalDirectorsData();
            mainView.router.loadPage('medicalandlega_directives_listing.html');

            // $("#medical_directors_ul_"+id).remove();
        });
    });
}

//////////////////////////------------------------------ End medicalandlega_directives_listing ------------------------------------------------------------




//////////////////////////------------------------------  manage_media_albums ------------------------------------------------------------

function getMediaAlbums() {
    myApp.showIndicator();
    page_parameter = 45;
    var storedData1 = myApp.formGetData('logged_userId');
    var urlGetTitle = "https://www.healthrecordspro.com/wsplus.php?type=allmedia&format=json&customerid=" + storedData1['userId'];
    var albumsDetails = [];
    setTimeout(function() {
        $.getJSON(urlGetTitle, function(json) {
            // $.each(json['posts'], function(key, value) {
            //     albumsDetails.push(value);
            // });
            // myApp.showPreloader();
            jQuery.ajaxSetup({
                async: false
            });
            var p1 = json['posts'].slice(0, json['posts'].length / 2);
            var p2 = json['posts'].slice(json['posts'].length / 2);
            $.each(p1, function(key, value) {
                // console.log(JSON.stringify(value,null,4));
                // var url1 = "https://www.healthrecordspro.com/wsplus.php?type=managedalbums&format=json&customerid=" + storedData1['userId'] + "&catid=" + value['id'];
                // $.getJSON(url1, function(json1) {
                var posts2 = value['folders'];
                var json1 = {
                    'posts': posts2
                };
                if (json1[0] != 0) {
                    var CategotyName = value['name'];
                    if (localStorage.getItem("lang") == "fr") {
                        CategotyName = value['name_french'];
                    } else if (localStorage.getItem("lang") == "sp") {
                        CategotyName = value['name_spanish'];
                    } else if (localStorage.getItem("lang") == "ru") {
                        CategotyName = value['name_russian'];
                    } else if (localStorage.getItem("lang") == "ar") {
                        CategotyName = value['name_arabic'];
                    }
                    var data = "<ul style='list-style: outside none none;'><li id='titles_display'><div class='item-content'><div class='item-inner'><div class='item-title' style='color: #000000;font-weight: bold;text-align:center;'>" + CategotyName.toUpperCase() + "</div></div></div></li><div class='row' id='albums_dis_" + value['id'] + "' style='float: left;margin: 5px;text-align: center;width: 96%;'></ul>";
                    $('#albums_names').append(data);
                }
                $.each(json1.posts, function(key1, value1) {
                    // console.log(JSON.stringify(value1,null,4));
                    var countofImages = [];
                    if (value1 != 0) {
                        $('#albums_dis_' + value['id']).append('<div class="col-33 tablet-33" ><a href="manage_albums_images.html" class="item-link" onclick="view_album_images(' + value1['almbumid'] + ',\'' + value1['albumname'] + '\',\'' + CategotyName + '\',\'' + value1['categoryid'] + '\')" ><i class="fa fa-folder-o" style=" color: #4d7ab9;font-size: 50px;"></i><div style="color:#000;font-size:13px">' + value1['albumname'] + '(' + value1['count'] + ')</div></a></div>');
                    }
                });
                // });
            });
            $.each(p2, function(key, value) {
                var url1 = "https://www.healthrecordspro.com/wsplus.php?type=managedalbums&format=json&customerid=" + storedData1['userId'] + "&catid=" + value['id'];
                // $.getJSON(url1, function(json1) {
                var posts2 = value['folders'];
                var json1 = {
                    'posts': posts2
                };
                if (json1[0] != 0) {
                    var CategotyName = value['name'];
                    if (localStorage.getItem("lang") == "fr") {
                        CategotyName = value['name_french'];
                    } else if (localStorage.getItem("lang") == "sp") {
                        CategotyName = value['name_spanish'];
                    } else if (localStorage.getItem("lang") == "ru") {
                        CategotyName = value['name_russian'];
                    } else if (localStorage.getItem("lang") == "ar") {
                        CategotyName = value['name_arabic'];
                    }
                    var data = "<ul style='list-style: outside none none;'><li id='titles_display'><div class='item-content'><div class='item-inner'><div class='item-title' style='color: #000000;font-weight: bold;text-align:center;'>" + CategotyName.toUpperCase() + "</div></div></div></li><div class='row' id='albums_dis_" + value['id'] + "' style='float: left;margin: 5px;text-align: center;width: 96%;'></ul>";
                    $('#albums_names').append(data);
                    // myApp.hideIndicator();
                    // myApp.hidePreloader();
                }
                $.each(json1['posts'], function(key1, value1) {
                    var countofImages = [];
                    //                  var GettingCount = "https://www.healthrecordspro.com/wsplus.php?type=select_count&format=json&table=scanneditems&columns=*&condition=userid="+storedData1['userId']+" AND albumid="+value1['id'];
                    //                  $.getJSON (GettingCount, function (json2) {
                    //                      countofImages.push(json2['posts'][0]['count']);
                    //                  });
                    if (value1 != 0) {
                        $('#albums_dis_' + value['id']).append('<div class="col-33 tablet-33" ><a href="manage_albums_images.html" class="item-link" onclick="view_album_images(' + value1['almbumid'] + ',\'' + value1['albumname'] + '\',\'' + CategotyName + '\',\'' + value1['categoryid'] + '\')" ><i class="fa fa-folder-o" style=" color: #4d7ab9;font-size: 50px;"></i><div style="color:#000;font-size:13px">' + value1['albumname'] + '(' + value1['count'] + ')</div></a></div>');
                    }
                });
                // });
                if (key == p2.length - 1) {
                    myApp.hideIndicator();
                }
            });
            // myApp.hideIndicator();
        });
    }, 1000);

}



//////////////////////////------------------------------ End manage_media_albums ------------------------------------------------------------




//////////////////////////------------------------------ doctors_counsalting_main ------------------------------------------------------------

function doctorsconsultationInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=66";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });

}
//doctors_counsaltation_listing

function getdocCounsaltationData() {
    var storedData1 = myApp.formGetData('logged_userId');
    // myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=doctors_consultation&columns=*&condition=user_id=" + storedData1['userId'];

    $.getJSON(url, function(json) {
        // myApp.hidePreloader();

        var key, count = 0;
        for (key in json['posts']) {
            if (json['posts'].hasOwnProperty(key)) {
                count++;
            }
        }
        $('#doctors_cunsaltation').html('');
        if (json['posts'] == 0) {
            var data = "No Records";
            $('#doctors_cunsaltation').append(data);
        } else {

            for (i = 0; i < count; i++) {
                var data = "<ul id='emergency_contact_ul_" + i + "'><li><a href='doctors_counsaltation_form.html' class='item-link' onclick='docConEdit(" + json['posts'][i]['id'] + ");'><div class='item-content white'><div class='item-inner'><div class='item-title'>" + json['posts'][i]['physician_name'] + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + json['posts'][i]['date'] + "</div></div></div></a></li></ul>";

                $('#doctors_cunsaltation').append(data);
            }
        }

    });
}


function docConEdit(id) {
    setTimeout(function() {

        getCalenderDoc();
    }, 500);
    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();

    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=doctors_consultation&columns=*&condition=id=" + id;

    $.getJSON(url, function(json) {
        myApp.hidePreloader();
        $('#doc_cn1_np').val(json['posts'][0]['physician_name']);
        $('#doc_cn1_reason').val(json['posts'][0]['reason']);
        $('#doc_cn1_diag').val(json['posts'][0]['diagnosis']);
        $('#doc_cn1_trt').val(json['posts'][0]['treatment']);
        $('#doc_cn1_dt').val(json['posts'][0]['date']);
        $('#doc_cn1_update').val(json['posts'][0]['id']);

    });

}

function getCalenderDoc() {
    var calendarDefault = myApp.calendar({
        input: '#doc_cn1_dt',
    });
}


function doccounsaltationAdd() {
    setTimeout(function() {
        $("#doccounsaltation_inbtn").css('display', 'none');
        $("#doccounsaltation_upbtn").css('display', 'block');
        getCalenderDoc();
    }, 500);
}

//doctors_counsaltation_form

function doctorsconsultationformInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=117";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function doccounformSubmit() {
    var storedData1 = myApp.formGetData('logged_userId');
    var physician_name = $('#doc_cn1_np').val();
    var reason = $('#doc_cn1_reason').val();
    var diagnosis = $('#doc_cn1_diag').val();
    var treatment = $('#doc_cn1_trt').val();
    var date = $('#doc_cn1_dt').val();
    var doc_cn1_update = $('#doc_cn1_update').val();

    if (doc_cn1_update == '') {
        if (date == '') {
            myApp.alert("Please Enter Date", 'Doctors Consultation');
        } else {
            myApp.showPreloader();
            var url = "https://www.healthrecordspro.com/wsplus.php?type=insert&format=json&table=doctors_consultation&columns=physician_name,reason,diagnosis,treatment,date,user_id,active&values='" + physician_name + "','" + reason + "','" + diagnosis + "','" + treatment + "','" + date + "','" + storedData1['userId'] + "','1'";

            $.getJSON(url, function(json) {
                myApp.hidePreloader();
                if (json['posts'][0]) {
                    // getdocCounsaltationData();
                    myApp.alert("Your Details has been Created", 'Success');
                    mainView.router.loadPage('doctors_counsaltation_listing.html');
                } else {
                    myApp.alert("Your Details Not Created", 'Failure');
                }

            });
        }

    } else {

        var val = "physician_name = '" + physician_name + "',reason = '" + reason + "',diagnosis = '" + diagnosis + "',treatment = '" + treatment + "',date = '" + date + "'";
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=update&format=json&table=doctors_consultation&columns=" + val + "&condition=id=" + doc_cn1_update;

        // console.log( url );

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            if (json['posts'][0]) {
                // getdocCounsaltationData();
                myApp.alert("Your Details has been updated", 'Success');
                mainView.router.loadPage('doctors_counsaltation_listing.html');
            } else {
                myApp.alert("Your Details Not Created", 'Failure');
            }
        });

    }
}

function deleteDocCon() {
    id = $('#doc_cn1_update').val();
    myApp.confirm('Are you sure', 'Delete');

    $(".modal-button-bold").click(function() {
        var storedData1 = myApp.formGetData('logged_userId');
        myApp.showPreloader();

        var url = "https://www.healthrecordspro.com/wsplus.php?type=delete&format=json&table=doctors_consultation&columns=&condition=id=" + id;

        $.getJSON(url, function(json) {
            myApp.hidePreloader();

            // $("#doc_counsul_ul_"+id).remove();
            // getdocCounsaltationData();
            mainView.router.loadPage('doctors_counsaltation_listing.html');

        });
    });

}

//////////////////////////------------------------------ End doctors_counsalting_main ------------------------------------------------------------




//////////////////////////------------------------------ health_summary ------------------------------------------------------------

function healthsummaryInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=42";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}


function emergencyreport() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url = 'https://healthrecordspro.com/WS/wspdf.php?sectionid=emergencysummary_pdf&app_session=' + storedData1['userId']
    window.open(url, '_system', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
}


function BriefSummary() {

    var storedData1 = myApp.formGetData('logged_userId');
    console.log(storedData1['userId']); //or grab it by tagname etc
    var url = 'https://healthrecordspro.com/WS/wspdf.php?sectionid=printsummary_pdf&app_session=' + storedData1['userId'];
    // window.open(url,'_system');
    myApp.showPreloader();
    setTimeout(function() {
        myApp.hidePreloader();
    }, 2000);
    window.open(url, '_system', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
    myApp.alert("Your Brief Summary has been downloaded please check your downloads", 'Success');
    return false;
}


function DetailedSummary() {

    var storedData1 = myApp.formGetData('logged_userId');
    myApp.showPreloader();
    setTimeout(function() {
        myApp.hidePreloader();
    }, 2000);
    window.open('https://healthrecordspro.com/WS/wspdf.php?sectionid=detailedsummaryprint_pdf&app_session=' + storedData1['userId'], '_system', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
    myApp.alert("Your Detailed Summary has been downloaded please check your downloads", 'Success');
    return false;
}

//health_summary_custom.html

function Chealthsummary() {
    var storedData1 = myApp.formGetData('logged_userId');
    var url = "https://healthrecordspro.com/wsplus.php?type=sectionsummary&format=json&customerid=" + storedData1['userId'];

    $.getJSON(url, function(json) {

        $.each(json['posts'], function(key, val) {
            if (localStorage.getItem("lang") == 'ar') {
                $('#Chealthsections').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="checkboxcheckall" name="group[]"     id="' + val['id'] + '" sectionname="' + val['name_arabic'] + '" value= "' + val['id'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['name_arabic'] + '</div></div></label></li>');
            } else if (localStorage.getItem("lang") == 'fr') {
                $('#Chealthsections').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="checkboxcheckall" name="group[]" id="' + val['id'] + '" sectionname="' + val['name_french'] + '" value= "' + val['id'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['name_french'] + '</div></div></label></li>');
            } else if (localStorage.getItem("lang") == 'sp') {
                $('#Chealthsections').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="checkboxcheckall" name="group[]" id="' + val['id'] + '" sectionname="' + val['name_spanish'] + '" value= "' + val['id'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['name_spanish'] + '</div></div></label></li>');
            } else if (localStorage.getItem("lang") == 'ru') {
                $('#Chealthsections').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="checkboxcheckall" name="group[]" id="' + val['id'] + '" sectionname="' + val['name_russian'] + '" value= "' + val['id'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['name_russian'] + '</div></div></label></li>');
            } else {
                $('#Chealthsections').append('<li><label class="label-checkbox item-content"><input type="checkbox" class="checkboxcheckall" name="group[]"     id="' + val['id'] + '" sectionname="' + val['name'] + '" value= "' + val['id'] + '"><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="color: black;">&nbsp;&nbsp;&nbsp;' + val['name'] + '</div></div></label></li>');
            }
        });
    });

}


function customhealthsummaryInfo() {
    myApp.openPanel('left');
    $('#usefultips_mobile').html('');
    var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=modules&limit=250&columns=mobiletips&condition=id=119";
    $.getJSON(url, function(json) {
        $('#usefultips_mobile').html(json['posts'][0]['mobiletips']);
    });
}

function exporttoPDF() {

    var storedData1 = myApp.formGetData('logged_userId');
    var data = [];
    var dataid = [];
    $('input:checkbox[name="group[]"]:checked').each(function() {
        data.push($(this).attr('value'));
    });
    myApp.showPreloader();
    setTimeout(function() {
        myApp.hidePreloader();
    }, 2000);
    window.open('https://healthrecordspro.com/WS/wspdf.php?sectionid=customsummaryprint_pdf&app_session=' + storedData1['userId'] + '&dataid=' + data, '_system', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
    myApp.alert("Your Health Summary has been downloaded please check your downloads", 'Success');

    return false;
}
 


function getDetailedSUmmary() {
    var data = [];
    $('input:checkbox[id^="checkboxvalue_"]:checked').each(function() {
        data.push('&' + $(this).attr('name') + '=' + $(this).attr('name'));
    });
    data = data.toString();
    data = data.replace(/,/g, "");

    var storedData1 = myApp.formGetData('logged_userId');
    $.ajax({
        type: 'POST',
        url: 'https://healthrecordspro.com/mobileapp1/scriptfiles/customsummaryprint.php',
        data: '&uid=' + storedData1['userId'] + data,
        cache: false,
        success: function(res) {
            setTimeout(function() {
                // alert(res);
                document.getElementById("health_summary_details").innerHTML = res;
                // $('#health_summary_details').html(res);
            }, 500);
        }
    })
    return false;

} 



//////////////////////////------------------------------ End health_summary ------------------------------------------------------------
 



 



function GetNews() {
    tempPage = 11;
    page_parameter = 1;
    myApp.showPreloader();
    // setTimeout(function (){myApp.hidePreloader();},3000);
   
        tipID = 0;

        var storedData1 = myApp.formGetData('logged_userId');
       
        //    myApp.showPreloader();
     
        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/listNews" ,
          
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {

                console.log(json)
           

                var data
            if (json['response']['news'] == 0) {
                 data = "No Records ";
                $('#doctorsnews').append(data);
            } else {
                var stat
                 data ='<div class="list-block media-list" style="background:white"><ul style="background:white">'
                for (var i = 0; i < json['response']['news'].length; i++) {
                            if (json['response']['news'][i]['status'] == 1 ){
                                stat = if_langs('Approved' , 'تم الحجز ')
                            }
                        else   if (json['response']['news'][i]['status'] == 2 ){
                                stat = if_langs('pending' , 'لم يتم الرد')
                            }
                        else{
                            stat = if_langs('Decline' , 'تم الرفض')

                        }
                 
                    data =data+ '<li>'+
                    '<a href="" onclick="GetNewsAuther('+json['response']['news'][i]['id'] +')" class="item-link item-content">'+
                    ' <div class="item-inner">'+
                        ' <div class="item-title-row">'+
                            ' <div class="item-list-title">'+json['response']['news'][i]['title'] +'</div>'+
                        '  </div>'+
                        ' <div class="item-text">'+
                            ' <p class="p-gray" style="direction:ltr;"> <i class="fa  fa-clock" style="color:#1dbed0; font-size:17px;margin-right:2px;margin-left:2px;"></i>'+json['response']['news'][i]['insertdatetime'] +'</p>'+
                            '</div>'+
                    ' </div>'+
                ' </a>'+
                '</li>'
            
                            


                 

                }

                data = data +  '</ul></div>'
                $('#doctorsappointments').html(data);


            }

      
        } ,
        error: function(err) {
            console.log('in success')
            console.log(err)
        }
     });
        myApp.hidePreloader();
    


}


function GetNewsAuther(id) {
    mainView.router.loadPage("NewsAuther.html");

    tempPage = 11;
    page_parameter = 1;
    myApp.showPreloader();
    // setTimeout(function (){myApp.hidePreloader();},3000);
   
        tipID = 0;

        var storedData1 = myApp.formGetData('logged_userId');
       
        //    myApp.showPreloader();
     
        $.ajax({
            type: 'GET',
            url: "https://host.optimalsolutionslebanon.com/~bguh/api/getNewsDetails?id="+id ,
          
            headers: {
                "token": localStorage.BguhToken
            },
            success: function(json) {

                console.log(json)
           

                var data
            if (json['response']['piece_of_news'] == 0) {
                 data = "No Records ";
                $('.newsDescription-section').append(data);
            } else {
                var stat
                //  data ='<div class="list-block media-list" style="background:white"><ul style="background:white">'
             
                data=     ' <div class="border-bottom">'+
            
                   ' <h3 class="description-title">'+json['response']['piece_of_news']['title']+'</h3>'+
            
                    '<div>'+
                      '  <div class="row no-gap" style="margin-top: 4%;">'+
                       '     <div class="col auther_container"><i class="fa fa-pencil" style="color: #1dbed0;font-size: 17px;" aria-hidden="true"></i>'+
                                '<a class="author_name" style="color: black;">'+json['response']['piece_of_news']['publisher']+'</a></div>'+
                           ' <div style="text-align: center;" class="col">'+
                               ' <span class="">'+
                                    '<i class="fa  fa-clock" style="color:#1dbed0; font-size:17px;margin-right:2px;margin-left:2px;"></i> '    +
                              '      <span class="description-date">'+json['response']['piece_of_news']['insertdatetime']+'</span>'+
                               ' </span>'+
                            '</div>'+
            
                            '<div style="text-align: center;" class="col views_number"></div>'+
                       ' </div>'+
                  '  </div>'+
            
                   ' <div class="margin-top-10  description-content">'+
                       '<p>'+json['response']['piece_of_news']['content']+'.</p>'+
                   ' </div>'+
            
              '  </div>'
            
          

                $('.newsDescription-section').html(data);


            }

      
        } ,
        error: function(err) {
            console.log('in success')
            console.log(err)
        }
     });
        myApp.hidePreloader();
    


}

