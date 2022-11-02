const getCurrentStudent = async (req, res, next) => {
    console.log('student authenticated')
    //check details of header
    //req.user  = {}
    next()
}

const getCurrentUni = async (req, res, next) => {
    console.log('University authenticated')
    //check details of header
    //req.user  = {}
    next()
}

const getCurrentFaculty = async (req, res, next) => {
    console.log('faculty authenticated')
    //check details of header
    //req.user  = {}
    next() 
}

module.exports = {
    getCurrentStudent,
    getCurrentUni,
    getCurrentFaculty
}