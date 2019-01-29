document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', () => {
    uploadFile();
  });
});

function uploadFile() {
  let url = '/api/fileanalyse'
  ,file = document.getElementById('inputfield')
  ,formData = new FormData();
  //upfile is the name of the input element.
  formData.append('upfile', file.files[0]);
  fetch(url, {
    method: "POST",
    body: formData,
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById('serverResponse').innerHTML = `File Name: ${data.name}, Type: ${data.type}, Size: ${data.size}`;
  })
  .catch(error => console.error('Error:', error)); 
}
