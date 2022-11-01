const authStudent = async (req, res, next) => {
    console.log('student authenticated')
    //check details of header
    //req.user  = {}
    next()
}

const authUni = async (req, res, next) => {
    console.log('University authenticated')
    //check details of header
    //req.user  = {}
    next()
}

const authFaculty = async (req, res, next) => {
    console.log('faculty authenticated')
    //check details of header
    //req.user  = {}
    next() 
}

module.exports = {
    authStudent,
    authUni,
    authFaculty
}