const students = [
    {id: 1, name: "anuj", attendence: 90, score: 80},
    {id: 2, name: "rishi", attendence: 68, score: 66},
    {id: 3, name: "akku", attendence: 87, score: 53}
]
function getStudentInfo(studentId) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const data = students.find( (stu) => {return stu.id === studentId} )
      if(data) resolve(data.name);
      else reject("student not found")
    }, 2000),
  );
}

function getAttendenceInfo(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const data = students.find( (stu) => {return stu.id === studentId} )
    if(data.attendence > 75) resolve("Present in most class")
    else reject ("Attendence is below 75 ")
    }, 2000);
  });
}

function getExamInfo(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = students.find( (stu) => {return stu.id === studentId} )
        if(data.score > 60) resolve("Passed in exams")
        else reject("Fail as score is less than 60")
    }, 2000);
  });
}

async function main() {
  try {
    const studentId = 3;
    const result = await Promise.all([
      getStudentInfo(studentId),
      getAttendenceInfo(studentId),
      getExamInfo(studentId),
    ]);
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}
main();
