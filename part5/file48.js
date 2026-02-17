const students = [
    {id: 1, name: "anuj", s1: true, s2: true, s3: false},
    {id: 2, name: "rishi", s1: true, s2: true, s3: true},
    {id: 3, name: "akku", s1: false, s2: true, s3: false},
]

const getStudent = (studentsId) => {
    return new Promise( (resolve, reject) => {
        const data = students.find( (student)=> { return student.id === studentsId} )
        if(!data) return reject("Student not found")
        else resolve(data.name)
    } )
}

const sessionOne =  (studentsId) => {
    return new Promise( (resolve, reject) => {
        const data = students.find( (student)=> {return student.id === studentsId} )
        if(!data) return reject("Student not found")
        if(data.s1) resolve(true)
        else resolve(false)
    } )
}

const sessionTwo =  (studentsId) => {
    return new Promise( (resolve, reject) => {
        const data = students.find( (student)=> {return student.id === studentsId} )
        if(!data) return reject("Student not found")
        if(data.s2) resolve(true)
        else resolve(false)
    } )
}

const sessionThree =  (studentsId) => {
    return new Promise( (resolve, reject) => {
        const data = students.find( (student)=> {return student.id === studentsId} )
        if(!data) return reject("Student not found")
        if(data.s3) resolve(true)
        else resolve(false)
    } )
}

const outputDestructure = ([name,s1, s2, s3]) => {
    if(s1 && s2 && s3) console.log("Present")
    else console.log("Absent")
}


const info = async () => {
    const stdId = 4;
    try {
        const data = await Promise.all([
            getStudent(stdId),
            sessionOne(stdId),
            sessionTwo(stdId),
            sessionThree(stdId)
        ])

        // output(data)
        outputDestructure(data)
    } catch (error) {
        console.log("Error", error)
    }
}

info()