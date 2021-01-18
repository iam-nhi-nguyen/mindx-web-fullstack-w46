// Sử dụng các hàm đọc, ghi file đồng bộ để hoàn thiện các yêu cầu sau
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json').toString());

// lấy thông tin học sinh có _id là jubuq3lfmjjmp0wrdeupt
function getDetailStudent() {
  const _id = 'jubuq3lfmjjmp0wrdeupt';
  for(let student of data){
    if(student._id === _id) return student;
  }
  return null;
}

// Lấy số lượng học sinh có từ Nguyễn
function getCountStudentWithLastName() {
  const lastName = 'Nguyễn';
  let count = 0;
  for(let student of data){
    if(student.name.split(' ')[0] === lastName) count ++;
  }
  return count;
}

// Tính điểm trung bình của toàn bộ sinh viên (làm tròn đến một chữ số sau dấu phẩy)
function calAverageMark() {
  let total = count = 0;
  for(let student of data){
    total += student.mark;
    count ++;
  }
  return parseFloat((total / count).toFixed(1));
}

// Ghi ra số lượng học sinh đạt điểm 10 ra file output.txt (sử dụng hàm ghi đồng bộ);
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