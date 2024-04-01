
const apiUrl = 'http://localhost:3000/api/getEmployees';

function fetchEmployees(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);     
    } else {
      const error = new Error(`Error fetching employees: ${xhr.statusText}`);
      callback(error, null);
    }
  };

  xhr.onerror = function () {
    const error = new Error('Network error while fetching employees');
    callback(error, null);
  };

  xhr.send();
}

export { fetchEmployees };
