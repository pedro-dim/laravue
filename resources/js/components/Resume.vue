<template>
  <div class="resume">
    <div class="header">
      <h1>{{ fullName }}</h1>
      <p>{{ jobTitle }}</p>
    </div>
    <div class="contact">
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Phone:</strong> {{ phone }}</p>
      <p><strong>Address:</strong> {{ address }}</p>
    </div>
    <div class="education">
      <h2>Education</h2>
      <ul>
        <li>
          <strong>{{ educationDegree }}</strong>
          <p>{{ educationInstitution }}</p>
          <p>{{ educationDate }}</p>
        </li>
        <!-- Add more education entries as needed -->
      </ul>
    </div>
    <div class="work-experience">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>{{ jobTitle }}</strong>
          <p>{{ company }}</p>
          <p>{{ jobDate }}</p>
          <p>{{ jobDescription }}</p>
        </li>
        <!-- Add more work experience entries as needed -->
      </ul>
    </div>
    <div class="skills">
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "John Doe",
      jobTitle: "Web Developer",
      email: "john@example.com",
      phone: "+1 123-456-7890",
      address: "123 Main Street, City, Country",
      educationDegree: "Bachelor of Science in Computer Science",
      educationInstitution: "University of Example",
      educationDate: "Graduated: May 20XX",
      jobTitle: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      jobDate: "January 20XX - Present",
      jobDescription: "Responsible for developing web applications...",
      skills: [
        "JavaScript",
        "Vue.js",
        "HTML",
        "CSS",
        "Responsive Design",
        "Git",
      ],
    };
  },
};
</script>

<style scoped>
/* Add your CSS styles for the resume component here */
.resume {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.contact {
  margin-bottom: 20px;
}

.education,
.work-experience,
.skills {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
}
</style>
