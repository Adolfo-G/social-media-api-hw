const names = [
    'Alex',
    'Robert',
  ];
  
  const emails = [
    'abc123@test.com',
    'def456@test.com',
  ];
  
  const getName = () =>{
        let selectName = names.pop()
        return `${selectName}`
  }
  
  const getEmail = () =>{
    let selectEmail = emails.pop()
    return `${selectEmail}`
}
  module.exports = { getName, getEmail };
  