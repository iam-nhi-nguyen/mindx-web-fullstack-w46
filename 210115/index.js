// Sử dụng các hàm đọc, ghi file đồng bộ để hoàn thiện các yêu cầu sau
// Use readFileSync and writeFileSync to implement the following functions
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json').toString());

// Lấy thông tin học sinh có _id là jubuq3lfmjjmp0wrdeupt
// Get the information of the student whose _id is jubuq3lfmjjmp0wrdeupt
function getDetailStudent() {
  const _id = 'jubuq3lfmjjmp0wrdeupt';
  for(let student of data){
    if(student._id === _id) return student;
  }
  return null;
}

// Lấy số lượng học sinh có từ Nguyễn
// Get the number of students whose name includes Nguyễn
function getCountStudentWithLastName() {
  const lastName = 'Nguyễn';
  let count = 0;
  for(let student of data){
    if(student.name.includes(lastName)) count ++;
  }
  return count;
}

// Tính điểm trung bình của toàn bộ sinh viên (làm tròn đến một chữ số sau dấu phẩy)
// Calculate the average mark of all students (one digit after the decimal point)
function calAverageMark() {
  let total = count = 0;
  for(let student of data){
    total += student.mark;
    count ++;
  }
  return parseFloat((total / count).toFixed(1));
}

// Ghi ra số lượng học sinh đạt điểm 10 ra file output.txt (sử dụng hàm ghi đồng bộ)
// Write to output.txt the number of students with mark 10 (using writeFileSync)
function writeCountStudentGet10MarkToFile() {
  let count = 0
  for(let student of data){
    if(student.mark === 10){
      count += 1;
    }
  }
  fs.writeFileSync('./output.txt', `${count}`);
}

module.exports = {
  getDetailStudent,
  getCountStudentWithLastName,
  calAverageMark,
  writeCountStudentGet10MarkToFile
}
