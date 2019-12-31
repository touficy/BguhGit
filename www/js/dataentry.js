function Documentaction() {


    var buttons = [{
            text: 'Photo Library',
            onClick: function() {
                cameraGetPicture()
            }
        },
        {
            text: 'Camera',
            onClick: function() {
                cameraTakePicture();
            }
        },
        {
            text: 'Cancel',
            color: 'red',
            onClick: function() {
                //myApp.alert('Cancel clicked');
            }
        },
    ];
    myApp.actions(buttons);
}


var uri = "";
var Nname = 0;

function cameraGetPicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });

    function onSuccess(imageData) {
        var d = new Date();
        var n = d.getTime();
        Nname = n;
        var image = document.getElementById('prv');
        image.src = imageData;
        uri = imageData
        //alert(imageData)

    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 75,
        destinationType: destinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 640,
        targetHeight: 480,
        popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY),
        saveToPhotoAlbum: true

    });

    function onSuccess(imageData) {
        var d = new Date();
        var n = d.getTime();
        Nname = n;
        var image = document.getElementById('prv');
        image.src = imageData;
        uri = imageData
        //alert(imageData)


    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function uploadimg() {
    myApp.closeModal();
    if (uri == "") {
        return;
    }
    $("#up").css("display", "block")
    myApp.showIndicator();
    var url = encodeURI("https://healthrecordspro.com/WS/wsuploads.php?sectionid=DataEntryUpload");
    var win = function(r) {
        console.log(JSON.stringify(r,null,4));
        myApp.hideIndicator();
        myApp.alert("Thank you for uploading document for data entry , our team will deal with the document and inform you when its done", "YHRO");
        movepic5(uri);

    };
    var fail = function(f) {};
    var options = new FileUploadOptions();
    options.fileName = Nname + ".jpg";
    options.fileKey = "myfile";
    //options.fileName = Nname +".jpg";
    //alert(Nname);
    var storedData1 = myApp.formGetData('logged_userId');

    options.mimeType = "image/jpeg";
    //alert(uri);
    //myApp.hidePreloader();
    var params = new Object();
    //alert(name)
    params.customerId = parseInt(storedData1['userId']);
    params.sectionname = "DataEntryUpload";
    params.option = "UploadBrowseImage";
    options.params = params;
    console.log(JSON.stringify(params,null,4));
    // options.params = {}; // if we need to send parameters to the server request
    var ft = new FileTransfer();
    ft.upload(uri, url, win, fail, options);

}

function movepic5(file) {
    window.resolveLocalFileSystemURL(file, resolveOnSuccess, resOnError);
}

function resolveOnSuccess(entry) {

    //new file name
    var newFileName = Nname + ".jpg";
    var myFolderApp = "HRP";


    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
            //The folder is created if doesn't exist
            fileSys.root.getDirectory(myFolderApp, { create: true, exclusive: false },
                function(directory) {
                    entry.moveTo(directory, newFileName, successMove, resOnError);
                },
                resOnError);
        },
        resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
    //Store imagepath in session for future use
    // like to store it in database
    sessionStorage.setItem('imagepath', entry.toURL());
    cordova.plugins.MediaScannerPlugin.scanFile(entry.toURL(), function(msg) {
            myApp.alert("Plz Check gallery", "HRP");
            // myApp.alert(entry.fullPath);
        },
        function(err) {
            // alert("Fail ScanMedia: " + err);
        })
}

function resOnError(error) {
    // myApp.alert(error.code);
}
