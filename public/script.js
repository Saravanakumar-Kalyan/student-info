document.getElementById('studentForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const regNo = document.getElementById('regNo').value;
    const course = document.getElementById('course').value;
    const semester = document.getElementById('semester').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    const studentData = {
        name: name,
        rollNo: rollNo,
        regNo: regNo,
        course: course,
        semester: semester,
        phone: phone,
        email: email
    };

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            data.push(studentData);

            fetch('http://localhost:8000/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                alert('Student information added successfully!');
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error writing to JSON file:', error);
                alert('Error adding student information.');
            });
        })
        .catch(error => {
            console.error('Error fetching data from JSON file:', error);
            alert('Error adding student information.');
        });
});