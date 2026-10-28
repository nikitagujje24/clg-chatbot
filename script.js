function showInfo(topic) {
  const responses = {
    "Admissions": "Admissions open from June to August. Eligibility: 60%+ in qualifying exams.",
    "Courses": "We offer B.Tech, M.Tech, MBA, and PhD programs with multiple electives.",
    "Fees": "Tuition fees vary by program. Scholarships and installment options available.",
    "Scholarships": "Merit-based, need-based, and sports scholarships are offered.",
    "Attendance": "Minimum 75% attendance is required to sit for exams.",
    "Hostel": "Hostels have Wi-Fi, mess, and 24/7 security.",
    "Library": "Library open 8 AM - 8 PM. Digital resources available.",
    "Contact": "Email: info@college.edu | Phone: +91-9876543210"
  };
  document.getElementById("response").innerText = responses[topic];
}

function getResponse() {
  let input = document.getElementById("userInput").value.toLowerCase();
  if (input.includes("scholarship")) showInfo("Scholarships");
  else if (input.includes("attendance")) showInfo("Attendance");
  else if (input.includes("admission")) showInfo("Admissions");
  else if (input.includes("course")) showInfo("Courses");
  else if (input.includes("fee")) showInfo("Fees");
  else if (input.includes("hostel")) showInfo("Hostel");
  else if (input.includes("library")) showInfo("Library");
  else if (input.includes("contact")) showInfo("Contact");
  else document.getElementById("response").innerText =
    "Sorry, I only answer about Admissions, Courses, Fees, Scholarships, Attendance, Hostel, Library, and Contact Info.";
}

// Attendance Chart
const ctx1 = document.getElementById('attendanceChart').getContext('2d');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Attendance %',
      data: [85, 90, 78, 88, 92],
      backgroundColor: '#4facfe'
    }]
  }
});

// Scholarship Chart
const ctx2 = document.getElementById('scholarshipChart').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Merit', 'Need', 'Sports'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#00c6ff', '#4facfe', '#283e51']
    }]
  }
});
