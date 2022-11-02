const multer = require('multer');

var maxSize = 9000000; // 9MB

var storageForTranscript = multer.diskStorage({  
    destination: function (req, file, cb) {  // Destination to store uploaded files
        cb(null, './uploads/transcripts')
    },
    filename: function (req, file, cb) {  //name of uploaded file
        req.file = file.originalname + '-' + Date.now()
        console.log(req.file)
        cb(null, req.file)
    },
});

var storageForPosts = multer.diskStorage({  
    destination: function (req, file, cb) {  // Destination to store uploaded files
        cb(null, './uploads/posts')
    },
    filename: function (req, file, cb) {  //name of uploaded file
        req.file = file.originalname + '-' + Date.now()
        cb(null, req.file)
    },
});

var storageForEvents = multer.diskStorage({  
    destination: function (req, file, cb) {  // Destination to store uploaded files
        cb(null, './uploads/events')
    },
    filename: function (req, file, cb) {  //name of uploaded file
        req.file = file.originalname + '-' + Date.now()
        cb(null, req.file)
    },
});

const uploadTranscript = multer({ storage: storageForTranscript, limits: {fileSize: maxSize} });
const uploadPost = multer({ storage: storageForPosts, limits: {fileSize: maxSize} });
const uploadEvent = multer({ storage: storageForEvents, limits: {fileSize: maxSize} });

module.exports = {uploadTranscript, uploadPost, uploadEvent};