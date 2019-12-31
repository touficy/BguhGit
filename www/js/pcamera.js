var jurl = "js/jquery-1.10.2.js";
var curl = "js/fullcalendar.min.js"
var furl = "js/framework7.min.js"
var turl = "js/jquery.ui.touch.js"
var uurl = "js/jquery-ui.js"
var aurl = "js/autocomplete.js"
var murl = "js/my-app.js"
setTimeout(function () {
        var att = $(".page-on-center").attr("data-page")
        // console.log(att)
        if (att == "manage_albums") {
                manage_albumsz(MAcatId, MAselectId);
        }
}, 500);
$.getScript(jurl, function (data, textStatus, jqxhr) {
        // 200
        //console.log("Load was performed.");
})
$.getScript(curl, function (data, textStatus, jqxhr) {
        //alert("scriptloades");
        // console.log("Load was performed.");
});
//$.getScript( furl, function(data, textStatus, jqxhr ) {
//
//          console.log( "Load was performed." );
//          });
$.getScript(turl, function (data, textStatus, jqxhr) {

        // console.log("Load was performed.");
});
$.getScript(uurl, function (data, textStatus, jqxhr) {

        // console.log("Load was performed.");
});
//$.getScript( aurl, function(data, textStatus, jqxhr ) {
//
//          console.log( "Load was performed." );
//          });
//$.getScript( murl, function(data, textStatus, jqxhr ) {
//
//          console.log( "Load was performed." );
//          });
var pictureSource; // picture source
var destinationType; // sets the format of returned value
var Readybit = 0;
var LImageInfo = [];
var Nname = 0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
        console.log("Device ready");
        if (device.platform.toLowerCase() == "android") {
                var permissions = cordova.plugins.permissions;
                var list = [
                permissions.CAMERA,
                // permissions.GET_ACCOUNTS,
                permissions.ACCESS_COARSE_LOCATION,
                // permissions.GET_ACCOUNTS,
                permissions.CAPTURE_VIDEO_OUTPUT,
                // permissions.READ_CALENDAR,
                permissions.WRITE_EXTERNAL_STORAGE
                ];
                permissions.hasPermission(list, success, error);

                function error() {
                console.warn('Some needed permissions is not turned on');
                }

                function success(status) {
                if (!status.hasPermission) {

                        permissions.requestPermissions(
                        list,
                        function (status) {
                        if (!status.hasPermission) error();
                        },
                        error);
                }
                }
                }
        window.plugins.OneSignal
                .startInit("dab6ddd1-47c7-48a1-87df-81dbe24acb06", "29419365552")
                .handleNotificationOpened(function (jsonData) {
                        //console.log( JSON.stringify(jsonData, null, 4));
                        var articleid = jsonData.notification.payload.additionalData.articleid;
                        var directid = jsonData.notification.payload.additionalData.directid;
                        //console.log(articleid+" --- "+directid);
                        if (articleid != 0) {
                                if (directid == 1) {
                                        setTimeout(function () {
                                                mainView.router.loadPage(articleid);
                                        }, 4000);
                                }

                                if (directid == 2) {
                                        var AppointmentID = jsonData.notification.payload.additionalData.AppointmentID;
                                        //console.log(articleid+"---"+directid+"---"+AppointmentID)
                                        myApp.showIndicator();
                                        setTimeout(function () {
                                                mainView.router.loadPage("doctor_consultation.html");
                                                doctorsEdit(AppointmentID);
                                                myApp.hideIndicator()
                                        }, 4000);
                                        //view_album_images(103,'Infinity car','Manage Car',84) manage_albums(100,'Important ')
                                }

                                if (directid == 3) {
                                        var catId = jsonData.notification.payload.additionalData.catId;
                                        var sectiontitle = jsonData.notification.payload.additionalData.sectiontitle;
                                        myApp.showIndicator();
                                        setTimeout(function () {
                                                mainView.router.loadPage("manage_albums.html");
                                                manage_albums(catId, sectiontitle);
                                                myApp.hideIndicator()
                                        }, 4000);

                                }

                        }
                        if (articleid == 0) {
                                // var imgid = jsonData.notification.payload.additionalData.imgid;
                                // editdetailspic2(imgid)
                        }

                }).endInit();
        window.plugins.OneSignal.getIds(function (ids) {
                playerId = ids.userId;
                // console.log('getIds: ' + JSON.stringify(ids));
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
        //\alert(navigator.device.capture);
        var McameraCatid = "";
        //var jurl = "js/framework7.min.js";
        //$.getScript( jurl, function(data, textStatus, jqxhr ) {
        //   console.log( data ); // Data returned
        //  console.log( textStatus ); // Success
        //  console.log( jqxhr.status ); // 200
        //  console.log( "Load was performed." );
        //  });


        document.addEventListener("backbutton", onBackKeyDown, false);


        Readybit = 1;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
}

var Durl;

function convertImgToDataURLviaCanvas(url, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');
                var dataURL;
                canvas.height = this.height;
                canvas.width = this.width;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                callback(dataURL);
                canvas = null;
        };
        img.src = url;
}
var captureSuccesss = function (mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                //alert(path);

                var file = mediaFiles[0];
                var videoFileName = 'video-name-here'; // I suggest a uuid
                var d = new Date();
                var n = d.getTime();
                Nname = n;
                myApp.showPreloader('Compressing and Uploading video')
                VideoEditor.transcodeVideo(
                        videoTranscodeSuccess,
                        videoTranscodeError, {
                                fileUri: path,
                                outputFileName: Nname,
                                outputFileType: VideoEditorOptions.OutputFileType.MPEG4,
                                optimizeForNetworkUse: VideoEditorOptions.OptimizeForNetworkUse.YES,
                                //saveToLibrary: true,
                                maintainAspectRatio: true,
                                width: 400,
                                height: 300,
                                videoBitrate: 1000000, // 1 megabit
                                audioChannels: 2,
                                audioSampleRate: 44100,
                                audioBitrate: 128000, // 128 kilobits
                                progress: function (info) {
                                        // alert('transcodeVideo progress : ' + info);
                                }
                        }
                );
                // do something interesting with the file
        }
};

function videoTranscodeSuccess(result) {
        // result is the path to the transcoded video on the device

        var url = encodeURI("https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveUpload"); // alert('videoTranscodeSuccess, result: ' + result);
        if (folderbit == 2) {
                myApp.hidePreloader();
                fileur = "file:///" + result;
                //alert(fileur);
                Selectalbumtosave(fileur);
        } else {
                var win = function (r) {
                        console.log(JSON.stringify(r,null,4));
                        clearCache();
                        retries = 0;
                        // myApp.hidePreloader();
                        // myApp.alert("Uploaded", 'Success');
                        window.plugins.toast.showLongBottom('Uploade successfully', '2000', 'center', function (a) { console.log('toast success: ' + a) }, function (b) { alert('toast error: ' + b) });
                        if (folderbit === 0) {
                                manage_albums(MAcatId, MAselectId);
                        } else {
                                view_album_images(albumtempId, Albumtitle, secName, albumCatId)
                        }
                        myApp.hidePreloader();
                        myApp.alert("Uploaded", 'Success');
                }
                var fail = function (error) {
                        myApp.hidePreloader();
                        if (retries == 0) {
                                retries++
                                setTimeout(function () {
                                        //onCapturePhoto(fileURI)
                                }, 1000)
                        } else {
                                retries = 0;
                                clearCache();
                                myApp.alert('Upload Failed!', 'Failed' + error); //failed
                        }
                }
                // myApp.showPreloader();
                //$('#loadingmessage').show();
                var options = new FileUploadOptions();
                options.fileKey = "myfile";
                options.fileName = Nname + ".mp4";
                options.mimeType = "video/mpeg";
                options.chunkedMode = false;
                var params = new Object();
                if (folderbit === 0) {
                        params.catId = document.getElementById('camera_catId').value;
                        params.customerId = document.getElementById('camera_customerId').value;
                        params.sectionname = document.getElementById('camera_sectionname').value;
                        params.option = "UploadCameraImage";
                        options.params = params;

                        // options.params = {}; // if we need to send parameters to the server request
                        var ft = new FileTransfer();
                        ft.upload(result, url, win, fail, options);
                } else {
                        var url3 = encodeURI("https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveAlbumSingleImgUpload");
                        params.camera_albumid = document.getElementById('camera_albumid').value;
                        params.customerId = document.getElementById('camera_customerId').value;
                        //params.sectionname = document.getElementById('camera_sectionname').value;
                        params.option = "UploadCameraImage";
                        options.params = params;
                        // console.log(JSON.stringify(params,null,4));
                        var ft = new FileTransfer();
                        ft.upload(result, url3, win, fail, options);
                }
                // myApp.hidePreloader();
                movePic4(result)
        }
}

function videoTranscodeError(err) {
        alert('videoTranscodeError, err: ' + err);
}
// capture error callback
var capturesError = function (error) {
        if (error.code!=3)
                navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

function movePic4(file1) {
        //alert(file1+":2");
        window.resolveLocalFileSystemURL("file:///" + file1, resolveOnSuccess4, resOnError4);
}

function resolveOnSuccess4(entry) {
        //new file name
        //alert("hi");
        var newFileName = Nname + ".mp4";
        var myFolderApp = "HRPlus";


        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSys) {
                //The folder is created if doesn't exist
                fileSys.root.getDirectory(myFolderApp, { create: true, exclusive: false },
                        function (directory) {
                                entry.moveTo(directory, newFileName, successMove4, resOnError4);
                        },
                        resOnError4);
        },
                resOnError4);
}

function successMove4(entry) {
        //Store imagepath in session for future use
        // like to store it in database
        //alert(entry.toURL());
        sessionStorage.setItem('imagepath', entry.toURL());
        cordova.plugins.MediaScannerPlugin.scanFile(entry.toURL(), function (msg) {
                //myApp.alert("Plz Check gallery","HRP");
        },
                function (err) {
                        alert("Fail ScanMedia: " + err);
                })
}

function resOnError4(error) {
        myApp.alert(error.code);
}
// start video capture
var folderbit = 0;

function videocapt(folder) {
        folderbit = folder;
        //alert(folderbit);
        navigator.device.capture.captureVideo(captureSuccesss, capturesError, { duration: 300, quality: 1 });
}

var type = 0;
var stat;

function Icapture(I) {
        stat = $('#update_health_insu').val();
        type = I;
        //CategoryId = catId;
        if(device.platform.toLowerCase()=="ios"){
                navigator.camera.getPicture(onICapturePhoto, onFail, {
                quality: 50,
                destinationType: destinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 640,
                targetHeight: 480,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: true
                });
        }else{
                navigator.camera.getPicture(onICapturePhoto, onFail, {
                quality: 50,
                destinationType: destinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 640,
                targetHeight: 480,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: true
                });
        }
}

function onICapturePhoto(fileURI) {
        var base64 = "";
        var url = encodeURI("https://healthrecordspro.com/mobileapp1/scriptfiles/uploadInsuCards.php");
        convertImgToDataURLviaCanvas(fileURI, function (I) {
                var base64I = I

                var Dataobj = new Object;
                if (IuId == '') {
                        Dataobj.health_insu_coinsucard_id = stat
                } else {
                        Dataobj.health_insu_coinsucard_id = IuId;
                }
                Dataobj.health_insu_coinsucard = "";
                Dataobj.health_insu_coinsupolicy = ""

                // alert(base64I);
                if (type == 1) {
                        Dataobj.health_insu_coinsucard = base64I;
                } else {
                        Dataobj.health_insu_coinsupolicy = base64I;
                }
                $.ajax({
                        type: 'POST',
                        url: 'https://healthrecordspro.com/mobileapp1/scriptfiles/uploadInsuCards.php',
                        data: Dataobj,
                        contentType: false,
                        processData: false,
                        error: function (jqXHR, textStatus, errorThrown) {
                                // alert('Failed to upload file')
                        },
                        success: function (data) {
                                //  alert(data);
                                alert('File uploaded')
                        }
                })
        }, "image/jpeg");
}

function clearCache() {
        navigator.camera.cleanup();
}

var retries = 0;
//var CategoryId = "";
////////////////////////main page capture Start ////////////////
function McapturePhoto() {
        //CategoryId = catId;
        if(device.platform.toLowerCase()=="ios"){
                navigator.camera.getPicture(onMCapturePhoto, onFail, {
                        quality: 100,
                        destinationType: destinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 640,
                        targetHeight: 480,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: true
                });
        }else{
                navigator.camera.getPicture(onMCapturePhoto, onFail, {
                        quality: 100,
                        destinationType: destinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 640,
                        targetHeight: 480,
                        popoverOptions: CameraPopoverOptions,
                });
        }

}

function onMCapturePhoto(fileURI) {
        var storedData1 = myApp.formGetData('logged_userId');
        // myApp.showPreloader();
        var d = new Date();
        var n = d.getTime();
        Nname = n;
        //$('#loadingmessage').show();
        Selectalbumtosave(fileURI)
}


function Selectalbumtosave(fileURI) {
        //alert(fileURI);
        console.log(fileURI);
        TfileURI = fileURI;
        var popupHTML = '<div class="popup">' +
            '<div class="content-block">' +
            '<div class="content-block-title" style="font-size:16px;">Where you want to place it <br><hr></div><div id="display_albums_pop1" style=" padding-left: 10px;text-align: center;"> <div class="list-block" id="Lul"><ul style="" ></ul></div></div></div>' +
    
            '<p><a href="#" class="close-popup" style="color: black;"><i class="fa fa-times-circle" style="font-size: 23px;"></i></a></p>' +
            '</div>' +
            '</div>'
        myApp.popup(popupHTML);
        var storedData1 = myApp.formGetData('logged_userId');
        var url = "https://www.healthrecordspro.com/wsplus.php?type=select_one&format=json&table=scannedcategories&columns=*&condition=active=1%20order%20by%20name"
    
        $.getJSON(url, function(json) {
            $.each(json['posts'], function(key, value) {
                var data = "<li style='background-color:#ffffff ' id='titles_display1_" + value['id'] + "'  onclick = 'initiatecatid(\"" + value['id'] + "\",\"" + value['name'] + "\",\"" + fileURI + "\")'><div class='item-content'><div class='item-inner'><div class='item-title' style='color: #000000;font-weight: bold;' id ='namez'>" + value['name'].toUpperCase() + "</div></div></div></li><div class='row' id='allalbums_dis_" + value['id'] + "' style of ='float: left;margin: 5px;text-align: center;width: 96%;'></ul>"
                $('#Lul ul').append(data);
            });
        });
    }

    
function initiatecatid(id, name, uri) {
    //McameraCatid = id
    console.log(id);
    console.log(name);
    console.log(uri);
    myApp.showPreloader();
    var url = encodeURI("https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveUpload");
    Mid = id;
    Mname = name;
    console.log(folderbit);
    if (folderbit === 2) {
        var win = function(r) {
            // myApp.alert("Code = " + r.responseCode);
            console.log(r.response);
            // myApp.alert("Sent = " + r.bytesSent);
            clearCache();
            retries = 0;
            $('.popup').remove();
            $('.popup-overlay').remove();
            // myApp.showPreloader();
            setTimeout(function() {
                myApp.hidePreloader();
            }, 4000)
            //console.log(uri);
            movePic3(uri);
            myApp.alert("Uploaded", 'Success');
        };
        var fail = function(error) {

            if (retries === 0) {
                retries++;
                setTimeout(function() {
                    onCapturePhoto(fileURI);
                }, 1000);
            } else {
                retries = 0;
                clearCache();
                myApp.alert('Upload Failed!', 'Failed' + error); //failed
            }
        };
        var options = new FileUploadOptions();
        if (folderbit == 2) {
            options.fileName = Nname + ".mp4";
        } else {
            options.fileName = Nname + ".jpg";
        }
        options.fileKey = "file";
      
        var storedData1 = myApp.formGetData('logged_userId');

        options.mimeType = "image/jpeg";
        options.chunkedMode = false;
       
        var params = new Object();
        params.catId = id;
        params.customerId = storedData1['userId'];
        params.sectionname = name;
        params.option = "UploadCameraImage";
        options.params = params;
        var ft = new FileTransfer();
        ft.upload(uri, url, win, fail, options);
    } else {
        var win = function(r) {
            console.log(JSON.stringify(r, null, 4));
            clearCache();
            retries = 0;
            $('.popup').remove();
            $('.popup-overlay').remove();
            setTimeout(function() {
                myApp.hidePreloader();
            }, 4000)
            movePic3(uri);
         
            myApp.confirm('Press OK to capture new image or Cancel to start upload', 'Do want take another picture ?',
                function() {

                    setPathbit = 1;
                    camerarequest = 1;
                    McapturePhoto();
                },
                function() {
                    picturecount = 0;
                    camerarequest = 0;
                    setPathbit = 0;
                }
            );
        };
        var fail = function(error) {
            if (retries === 0) {
                retries++;
                setTimeout(function() {
                    onCapturePhoto(fileURI);
                }, 1000);
            } else {
                retries = 0;
                clearCache();
                myApp.alert('Upload Failed!', 'Failed' + error); //failed
            }
        };
        var options = new FileUploadOptions();
        options.fileName = Nname + ".jpg";
        options.fileKey = "file";
      
        var storedData1 = myApp.formGetData('logged_userId');
        options.mimeType = "image/jpeg";
        options.chunkedMode = false;
       
        var params = new Object();
        params.catId = id;
        params.customerId = storedData1['userId'];
        params.sectionname = name;
        params.option = "UploadCameraImage";
        options.params = params;
        console.log(JSON.stringify(options, null, 4));
        var ft = new FileTransfer();

        var extention = uri.substr(uri.lastIndexOf('/') + 1).split(".")[1];
        if (extention == 'jpg' || extention == 'jpeg' || extention == 'png') {
        
                    ft.upload(uri, url, win, fail, options);
             
        } else {
            ft.upload(uri, url, win, fail, options);
        }
    }
   
}


function movePic3(file1) {
        console.log("-------" + file1);
        window.resolveLocalFileSystemURL(file1, resolveOnSuccess3, resOnError3);
}

function resolveOnSuccess3(entry) {
        //new file name
        //console.log(JSON.stringify(entry, null, 4));
        //console.log('FolderBit = '+folderbit);
        if (folderbit == 2) {
                var newFileName = Nname + ".mp4";
        }
        else {
                var fileExten = entry.nativeURL.substr(entry.nativeURL.lastIndexOf('/') + 1).split(".")[1];
                var newFileName = Nname + "." + fileExten;
        }
        //console.log(newFileName);
        console.log(entry.nativeURL);
        var myFolderApp = "HRPlus";
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSys) {
                //The folder is created if doesn't exist
                fileSys.root.getDirectory(myFolderApp,
                        { create: true, exclusive: false },
                        function (directory) {
                                //console.log(JSON.stringify(directory, null, 4));
                                entry.moveTo(directory, newFileName, successMove3, resOnError3);
                        }, function (error) {
                                console.log(JSON.stringify(error, null, 4));
                        });
        }, function (error) {
                console.log(JSON.stringify(error, null, 4));
        });
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove3(entry) {
        //console.log("moved");
        //Store imagepath in session for future use
        // like to store it in database
        //console.log(JSON.stringify(entry, null, 4));
        //console.log(entry.toURL());
        sessionStorage.setItem('imagepath', entry.toURL());
        cordova.plugins.MediaScannerPlugin.scanFile(entry.toURL(), function (msg) {
                // console.log("Plz Check gallery", "HRP");
        },
                function (err) {
                        console.log(JSON.stringify(entry, null, 4));
                        //alert("Fail ScanMedia: " + err);
                })
}

function resOnError3(error) {
        console.log(JSON.stringify(error, null, 4));
}

/////////////////////main page capture end ////////////////////


function onCapturePhoto(fileURI) {

        var url = encodeURI("https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveUpload");
        myApp.showPreloader();
        var d = new Date();
        var n = d.getTime();
        Nname = n;
        //$('#loadingmessage').show();
        var win = function (r) {
                // myApp.alert("Code = " + r.responseCode);
                // myApp.alert("Response = " + r.response);
                // myApp.alert("Sent = " + r.bytesSent);

                clearCache();
                retries = 0;

                $('.popup').remove();
                $('.popup-overlay').remove();
                // myApp.alert('Uploaded!');
                //$('#loadingmessage').hide();
                myApp.alert("Uploaded", 'Success');
                manage_albums(MAcatId, MAselectId);
                //view_album_images(albumtempId,Albumtitle,secName,albumCatId)
                myApp.hidePreloader();
        }
        var fail = function (error) {
                if (retries == 0) {
                        retries++
                        setTimeout(function () {
                                onCapturePhoto(fileURI)
                        }, 1000)
                } else {
                        retries = 0;
                        clearCache();
                        myApp.alert('Upload Failed!', 'Failed' + error); //failed
                }
        }
        // myApp.showPreloader();
        $('#loadingmessage').show();
        var options = new FileUploadOptions();
        options.fileKey = "myfile";
        options.fileName = Nname + ".jpg";

        options.mimeType = "image/jpeg";

        var params = new Object();
        params.catId = document.getElementById('camera_catId').value;
        params.customerId = document.getElementById('camera_customerId').value;
        params.sectionname = document.getElementById('camera_sectionname').value;
        params.option = "UploadCameraImage";

        options.params = params;

        // options.params = {}; // if we need to send parameters to the server request
        var ft = new FileTransfer();
        ft.upload(fileURI, url, win, fail, options);
        // myApp.hidePreloader();
        $('#loadingmessage').hide();
        //myApp.alert(fileURI);
        movePic(fileURI);
}

function movePic(file) {
        window.resolveLocalFileSystemURL(file, resolveOnSuccess, resOnError);
}

function resolveOnSuccess(entry) {

        //new file name
        var newFileName = Nname + ".jpg";
        var myFolderApp = "HRPlus";


        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSys) {
                //The folder is created if doesn't exist
                fileSys.root.getDirectory(myFolderApp, { create: true, exclusive: false },
                        function (directory) {
                                entry.moveTo(directory, newFileName, successMove, resOnError);
                        },
                        resOnError);
        },
                resOnError);
}

function successMove(entry) {
        //Store imagepath in session for future use
        // like to store it in database
        sessionStorage.setItem('imagepath', entry.toURL());
        cordova.plugins.MediaScannerPlugin.scanFile(entry.toURL(), function (msg) {
                //myApp.alert("Plz Check gallery","HRP");
                //myApp.alert(entry.fullPath);
        },
                function (err) {
                        // alert("Fail ScanMedia: " + err);
                })
}

function resOnError(error) {
        //myApp.alert(error.code);
}

function capturePhoto() {
        //CategoryId = catId;
        if(device.platform.toLowerCase()=="ios"){
                navigator.camera.getPicture(onCapturePhoto, onFail, {
                        quality: 100,
                        destinationType: destinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 640,
                        targetHeight: 480,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: true
                });
        }else{
                navigator.camera.getPicture(onCapturePhoto, onFail, {
                        quality: 100,
                        destinationType: destinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 640,
                        targetHeight: 480,
                        popoverOptions: CameraPopoverOptions,
                });
        }

}

// new camera
var retries1 = 0;
var albumIdGlobal = "";
var Nname2 = 0;

// function onCapturePhoto1(fileURI1) {
//         console.log(fileURI1)
//         // myApp.alert("Code = " + fileURI1);
//         var d = new Date();
//         var n = d.getTime();
//         Nname2 = n;
//         var url3 = encodeURI("https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveAlbumSingleImgUpload");
//         var win1 = function (r) {
// 	        clearCache();
//                 retries1 = 0;
//                 myApp.alert("Uploaded", 'Success');
//                 view_album_images(albumtempId, Albumtitle, secName, albumCatId);
//                 $('.popup').remove();
//                 $('.popup-overlay').remove();
//                 $('#self_img').empty();
//                 myApp.hidePreloader();

//                 //view_album_images(albumIdGlobal);
//         }
//         var fail1 = function (error) {
// 			//console.log("An error has occurred: Code = " + error.code);
// 			//console.log("upload error source " + error.source);
//                         console.log("upload error target " + JSON.stringify(error));
// 			 //myApp.alert("Code = " + error);
//                 if (retries1 == 0) {
//                         retries1++
//                         setTimeout(function () {
//                                 onCapturePhoto1(fileURI1);
//                         }, 1000)
//                 } else {
//                         retries1 = 0;
//                         clearCache();
//                         myApp.alert('Upload Failed!', 'Failed');
//                 }
//         }
//         // myApp.showPreloader();
//         $('#loadingmessage1').show();
//         var options = new FileUploadOptions();
//         options.fileKey = "myfile";
//         //myApp.alert("fileURI1")
//         options.fileName = Nname2 + ".jpg";
//         options.mimeType = "image/jpeg";
//         var params = new Object();
//         params.camera_albumid = document.getElementById('camera_albumid').value;
//         params.customerId = document.getElementById('camera_customerId').value;
//         //params.sectionname = document.getElementById('camera_sectionname').value;
//         params.option = "UploadCameraImage";
//         options.params = params;
//         options.chunkedMode = false;
//         // options.params = {}; // if we need to send parameters to the server request
//         var ft = new FileTransfer();
// 	//myApp.alert(fileURI1);
//         ft.upload(fileURI1, url3, win1, fail1, options);
//         // myApp.hidePreloader();
//         $('#loadingmessage1').hide();
//         // myApp.alert(fileURI);
//         movePic1(fileURI1);

// }
function onCapturePhoto1(fileURI) {
        console.log(fileURI);
        //alert(fileURI);
        var storedData1 = myApp.formGetData('logged_userId');
        var url = encodeURI("https://healthrecordspro.com/WS/wsuploadsplus.php?sectionid=DriveAlbumSingleImgUpload");
        myApp.showPreloader();
        var d = new Date();
        var n = d.getTime();
        Nname = n;
        //$('#loadingmessage').show();
        var win = function (r) {
                console.log(JSON.stringify(r));
                clearCache();
                myApp.hidePreloader();
                myApp.alert("Uploaded Succfully");
                view_album_images(albumtempId, Albumtitle, secName, albumCatId);
                //view_album_images(albumIdGlobal);
        }
        var fail = function (error) {
                myApp.alert('Upload Failed!', 'Failed' + error); //failed
        }
        // myApp.showPreloader();
        //$('#loadingmessage').show();
        var options = new FileUploadOptions();
        options.fileKey = "myfile";
        options.fileName = Nname + ".jpg";
        options.mimeType = "image/jpeg";
        options.chunkedMode = false;
        var params = new Object();
        params.camera_albumid = albumtempId;
        params.customerId = document.getElementById('camera_customerId').value;
        //params.sectionname = document.getElementById('camera_sectionname').value;
        params.option = "UploadCameraImage";
        options.params = params;
        var ft = new FileTransfer();
		 var extention = fileURI.substr(fileURI.lastIndexOf('/') + 1).split(".")[1];
        if (extention == 'jpg' || extention == 'jpeg' || extention == 'png') {
                // var resize_options = {
                //         uri: String(fileURI),
                //         folderName: "HR Plus",
                //         quality: 90,
                //         width: 800,
                //         height: 800,
                //         base64: false
                // };

                // window.ImageResizer.resize(resize_options,
                //         function (image) {
                                //alert(image);
                                //movePic3(image);
                                ft.upload(fileURI, url, win, fail, options);
                        // }, function () {
                        //         alert("resize failed");// failed: grumpy cat likes this function
                        // });

        } else {
                ft.upload(fileURI, url, win, fail, options);
        }
        movePic(fileURI);
}

function movePic1(file1) {
        window.resolveLocalFileSystemURL(file1, resolveOnSuccess1, resOnError1);
}

function resolveOnSuccess1(entry) {
        //new file name
        var newFileName = Nname2 + ".jpg";
        var myFolderApp = "HRPlus";


        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSys) {
                //The folder is created if doesn't exist
                fileSys.root.getDirectory(myFolderApp, { create: true, exclusive: false },
                        function (directory) {
                                entry.moveTo(directory, newFileName, successMove1, resOnError1);
                        },
                        resOnError1);
        },
                resOnError1);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove1(entry) {
        //Store imagepath in session for future use
        // like to store it in database
        sessionStorage.setItem('imagepath', entry.toURL());
        cordova.plugins.MediaScannerPlugin.scanFile(entry.toURL(), function (msg) {
                //  myApp.alert("Plz Check gallery","HRP");
        },
                function (err) {
                        // alert("Fail ScanMedia: " + err);
                })
}

function resOnError1(error) {
        //myApp.alert(error.code);
}

function capturePhoto1(albumId) {
        albumIdGlobal = albumId;
        if(device.platform.toLowerCase()=="ios"){
                navigator.camera.getPicture(onCapturePhoto1, onFail, {
                        quality: 100,
                        destinationType: destinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 640,
                        targetHeight: 480,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: true
                });
        }else{
                navigator.camera.getPicture(onCapturePhoto1, onFail, {
                        quality: 100,
                        destinationType: destinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 640,
                        targetHeight: 480,
                        popoverOptions: CameraPopoverOptions,
                });
        }

        // navigator.camera.getPicture(onCapturePhoto1, onFail1, {
        //     quality: 20,
        //     destinationType: Camera.DestinationType.DATA_URL,
        //     sourceType: Camera.PictureSourceType.CAMERA,
        //     correctOrientation: true,
        //     saveToPhotoAlbum: true
        // });
        /* navigator.camera.getPicture(onCapturePhoto1, onFail1, {
                 quality: 100,
                 destinationType: Camera.DestinationType.DATA_URL,
                 //destinationType: destinationType.FILE_URI,
                 sourceType: Camera.PictureSourceType.CAMERA,
                 allowEdit: false,
                 encodingType: Camera.EncodingType.JPEG,
                 targetWidth: 600,
                 targetHeight: 600,
                 popoverOptions: CameraPopoverOptions,
                 saveToPhotoAlbum: true
         });*/
}

function onFail1(message) {
        myApp.alert(message,"HRP");
}

function onFail(message) {
        alert(message,"HRP");
}
var retries2 = 0;

function onCapturePhotoEmer(imageUri) {
        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
                c.width = this.width * 0.1;
                c.height = this.height * 0.1;
                ctx.drawImage(img, 0, 0, c.width, c.height);
        };
        img.src = imageUri;
        var dataURL = c.toDataURL("image/jpeg");
    }

function onFailEmer(error) {
        alert('Failed because: ' + error);
}

function capturePhotoemergency() {
        navigator.camera.getPicture(onCapturePhotoEmer, onFailEmer, {
                quality: 20,
                destinationType: destinationType.FILE_URI
        });
}



// Audio player
var my_media_song = null;
var mediaTimer_sec = null;
function playAudioSong(src) {
        //console.log(src);
        $("#start_audio").css('display', 'none');
        $("#stop_audio").css('display', 'block');
        my_media_song = new Media(src, onSuccess, onError);
        my_media_song.play();
        /*
        if (mediaTimer_sec == null) {
            my_media_song.play();

                mediaTimer_sec = setInterval(function() {
                                             // get my_media position
                                             my_media_song.play();
                                             my_media_song.getCurrentPosition(
                                                                              // success callback
                                                    function(position) {
                                                        if (position > -1) {
                                                            //setAudioPosition((position) + " sec");
                                                        }
                                                                              },
                                                                              // error callback
                                                    function(e) {
                                                                              console.log("Error getting pos=" + e);
                                                                              //setAudioPosition("Error: " + e);
                                                                              }
                                            );
                                             }, 1000);
          }
          */
        function onSuccess() {
                console.log("playAudio():Audio Success");
        }

        function onError(error) {
                // alert('code: '    + error.code    + '\n' +
                // 'message: ' + error.message + '\n');
        }
}

function stopAudioSong() {
        $("#start_audio").css('display', 'block');
        $("#stop_audio").css('display', 'none');

        if (my_media_song) {
                my_media_song.stop();
        }
        clearInterval(mediaTimer_sec);
        mediaTimer_sec = null;
}

//      var myPosition;
//      var myMedia;
//
//      function playVideo(src){
//        alert(src);
//        myMedia.play();
//        myPosition = setInterval(updatePosition, 100);
//      }
//      function pauseVideo(){
//        myMedia.pause();
//        clearInterval(myPosition);
//      }
//      function stopVideo(){
//        myMedia.pause();
//        myMedia.currentTime = 0;
//        clearInterval(myPosition);
//      }
//*****************Init meathod for page load for back button
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'loginnormal') {
//    getHomepageSections();
//  }
//  if (page.name === 'hrp_all_sections') {
//    getGridViewSections();
//  }
//
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'emergency_contact_listing') {
//    // return false;
//
//    getEmergencyContactData();//1
//
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'medications') {
//    // return false;
////var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
////var autocompleteDropdownSimple = myApp.autocomplete({
////    input: '#medi_medicine_name',
////    openIn: 'dropdown',
////    source: function (autocomplete, query, render) {
////        var results = [];
////        if (query.length === 0) {
////            render(results);
////            return;
////        }
////        // Find matched items
////        for (var i = 0; i < fruits.length; i++) {
////            if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
////        }
////        // Render items by passing array with result items
////        render(results);
////    }
////});
//    //1
//
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'Local_Images') {
//     window.requestFileSystem(LocalFileSystem.PERSISTENT,0, onFileSystemSuccess, fail);
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'privacypolicy') {
//    // return false;
//    privacy();
//  }
//});
//
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'health_provider_listing') {
//    // return false;
//    gethealthProviderData();//2
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'faq') {
//    // return false;
//    getfaq();
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'searchMedic') {
//    // return false;
//
//    var loading = false;
//
//// Last loaded index
////var lastIndex = $$('.list-block li').length;
//
//// Max items to load
//
//// Append items per load
//var itemsPerLoad = 50;
//var limit = 50
//
//// Attach 'infinite' event handler
//$$('.infinite-scroll').on('infinite', function () {
// limit =limit+50;
//  // Exit, if loading in progress
//  if (loading) return;
//
//  // Set loading flag
//  loading = true;
//
//  // Emulate 1s loading
//  setTimeout(function () {
//    // Reset loading flag
//    loading = false;
//
//    //if (lastIndex >= maxItems) {
//    //  // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
//    //  myApp.detachInfiniteScroll($$('.infinite-scroll'));
//    //  // Remove preloader
//    //  $$('.infinite-scroll-preloader').remove();
//    //  return;
//    //}
//
//    // Generate new items HTML
//  var url = "https://www.healthrecordspro.com/ws.php?type=medicationsearch&format=json&word="+searchstring+"&limit=50,"+limit;
//    var html  = "";
//    $.getJSON (url, function (json) {
//      if(json['posts'][0]){
//        $.each( json['posts'], function( key,value ) {
//
//     html += '<li class="item-content" id = '+value['id']+'><div class="item-inner"><div class="item-title">' + value['name'] + '</div></div></li>';});
//         $('#searchr').append(html);
//      }
//    });
//    // Append new items
//    //$$('.list-block ul').append(html);
//
//    // Update last loaded index
//    //lastIndex = limit
//  }, 1000);
//});
//
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'insurance') {
//    // return false;
//    getInsuranceData();//2
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'health_cal_Appointment') {
//    $.getScript( curl, function(data, textStatus, jqxhr ) {
//          });
//    // return false;
//    calendarA();//2
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'health_calender_new') {
//    // return false;
//    calendarM();//2
//  }
//});
//function calendarM()
//{
//    alert("hi");
//    page_parameter = 31;
//    setTimeout(function(){
//               var storedData1 = myApp.formGetData('logged_userId');
//               if ($("#CalendarPlace").length > 0) {
//               $('#CalendarPlace').fullCalendar({
//                                                header: {
//                                                left: 'prev',
//                                                center: 'title',
//                                                right: 'next'
//                                                },
//                                                editable: false,
//                                                events: 'https://healthrecordspro.com/WS/wpevents.php?sectionid=events&id='+storedData1['userId'],
//                                                eventClick: function(event, jsEvent, view)
//                                                {
//
//                                                //$('jsEvent').addTouch();
//                                                $.ajax({
//                                                       type: 'POST',
//                                                       url: 'https://healthrecordspro.com/WS/wpevents.php?sectionid=eventsdetails&iid='+event['id'],
//                                                       success:function (data) {
//                                                       var popupHTML = '<div class="popup" style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;">'+
//                                                       '<div class="list-block popup-self">'+
//                                                       '<div class="content-block-title" style="text-align:-webkit-center;"><h3 style="font-size: 5vw;margin: 10px 0;">Medication Calendar</h3></div>'+
//                                                       '<div class="item-media"></div>'+
//                                                       '<div class="item-inner item-inner1">'+
//                                                       '<div class="item-input">'+
//                                                       data+
//                                                       '</div>'+
//                                                       '</div>'+
//                                                       '<p align="right"><a href="medications.html" onclick="medicationEdit('+event['itemId']+');" style="width:20%;" class="button close-popup" id="button_search">Edit</a></p>'+
//                                                       '<p><a href="#" style="color:black;float:right;position:absolute;top:0;right:0;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>'+
//                                                       '</div>'+
//                                                       '</div>';
//
//                                                       myApp.popup(popupHTML);
//                                                       }
//                                                       });
//                                                return false;
//
//                                                }
//                                                });
//               }
//               else{
//               $('#CalendarPlace').fullCalendar({
//                                                header: {
//                                                left: 'prev',
//                                                center: 'title',
//                                                right: 'next'
//                                                },
//                                                editable: false,
//                                                events: {},
//                                                eventClick: function()
//                                                {
//                                                //$('jsEvent').addTouch();
//                                                }
//                                                });
//               }
//               },500);
//
//}
//
//
//function calendarA()
//{
//    var eventbit =0;
//    var Clength = 0;
//    var storedData1 = myApp.formGetData('logged_userId');
//    $.getJSON( 'https://healthrecordspro.com/WS/wpevents.php?sectionid=dc_events&id='+storedData1['userId'], function( data ) {
//              console.log( data.length );
//              Clength = data.length
//              }).done(function() {
//
//                      })
//    .fail(function() {
//          myApp.alert("please check the Network connection");
//          });
//
//    setTimeout(function(){
//               var storedData1 = myApp.formGetData('logged_userId');
//
//
//               //alert($("#CalendarPlace_Appoitment").length);
//
//               if (Clength>0) {
//               $('#CalendarPlace_Appoitment').fullCalendar({
//                                                           header: {
//                                                           left: 'prev',
//                                                           center: 'title',
//                                                           right: 'next'
//                                                           },
//                                                           editable: false,
//                                                           events: 'https://healthrecordspro.com/WS/wpevents.php?sectionid=dc_events&id='+storedData1['userId'],
//                                                           eventClick: function(event, jsEvent, view)
//                                                           {
//                                                           //alert("hi");
//                                                           //$('jsEvent').addTouch();
//
//                                                           $.ajax({
//                                                                  type: 'POST',
//                                                                  url: 'https://healthrecordspro.com/WS/wpevents.php?sectionid=dc_eventsdetails&iid='+event['id'],
//                                                                  success:function (data) {
//                                                                  var popupHTML = '<div class="popup" style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;">'+
//                                                                  '<div class="list-block popup-self">'+
//                                                                  '<div class="content-block-title" style="text-align:-webkit-center;"><h3 style="font-size: 5vw;margin: 10px 0;">Medication Calendar</h3></div>'+
//                                                                  '<div class="item-media"></div>'+
//                                                                  '<div class="item-inner item-inner1">'+
//                                                                  '<div class="item-input">'+
//                                                                  data+
//                                                                  '</div>'+
//                                                                  '</div>'+
//
//                                                                  '<p align="right"><a href="doctor_consultation.html" onclick="doctorsEdit('+event['id']+');" style="width:20%;" class="button close-popup" id="button_search">Edit</a></p>'+
//                                                                  '<p><a href="#" style="color:black;float:right; position:absolute;top:0;right:0;" class="close-popup"><i class="fa fa-times-circle fa-2x" ></i></a></p>'+
//                                                                  '</div>'+
//                                                                  '</div>'+
//                                                                  '</div>';
//
//                                                                  myApp.popup(popupHTML);
//                                                                  }
//                                                                  });
//                                                           return false;
//
//                                                           }
//                                                           });
//               }
//               else{
//               $('#CalendarPlace_Appoitment').fullCalendar({
//                                                           header: {
//                                                           left: 'prev',
//                                                           center: 'title',
//                                                           right: 'next'
//                                                           },
//                                                           editable: false,
//                                                           events:[] ,
//                                                           eventClick:  function(event, jsEvent, view)
//                                                           {
//                                                           //$('jsEvent').addTouch();
//                                                           alert("clicked");
//                                                           }
//                                                           });
//               }
//               },1000);
//
//}
//
//$$(document).on('pageInit', function (e) {
//                var page = e.detail.page;
//                // Code for About page
//                if (page.name === 'health_summary_custom') {
//                Chealthsummary();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'medical_history_condi_listing') {
//    // return false;
//    getmedihistoryData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'allergies_listing') {
//    // return false;
//    getAllergiesData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'surgeries_listing') {
//    // return false;
//    getSurgeriesData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'physical_exam') {
//    // return false;
//    getPhysicalExamData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'obestetric_history_listing') {
//    // return false;
//    getObestetricData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'past_medical_his_listing') {
//    // return false;
//    getpastmediHis();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'birth_ped_his_listing') {
//    // return false;
//    getBirthData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'development_his_listing') {
//    // return false;
//    getDevelopmentHisData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'family_ped_his_listing') {
//    // return false;
//    getFamilyPreData();
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'privacypolicy') {
//    // return false;
//    privacy();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'dental_history_listing') {
//    // return false;
//    getdentalhistoryData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'Prescription_eye_listing') {
//    // return false;
//    getPrescriptionData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'foodand_nutrition_history') {
//    // return false;
//    getFoodData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'bio_chemical_listing') {
//    // return false;
//    getbioData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'monitoringand_evolution') {
//    // return false;
//    getMonitoringEvoData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'medicalandlega_directives_listing') {
//    // return false;
//    getMedicalDirectorsData();
//  }
//});
//
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'doctors_counsaltation_listing') {
//    // return false;
//    getdocCounsaltationData();
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'contact') {
//    // return false;
//    contactus();
//
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'TermsConditionsPage') {
//    // return false;
//    terms();
//
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'health_calendar_new') {
//    // return false;
//
//    calendarM();//1
//
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'familyaccounts') {
//    // return false;
//    alert("h2");
//    getFamilyAccountData();
//
//  }
//});
//$$(document).on('pageInit', function (e) {
//  var page = e.detail.page;
//  // Code for About page
//  if (page.name === 'health_cal_Appointment') {
//    // return false;
//
//    calendarA();//1
//
//  }
//});
