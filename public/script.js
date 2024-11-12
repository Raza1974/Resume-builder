document.addEventListener('DOMContentLoaded', function() {
    const addExperienceBtn = document.getElementById('add-experience');
    const addEducationBtn = document.getElementById('add-education');
    const generateResumeBtn = document.getElementById('generate-resume');
    const primaryColorPicker = document.getElementById('primary-color');
    const secondaryColorPicker = document.getElementById('secondary-color');
    const profilePictureInput = document.getElementById('profile-picture');
  
    addExperienceBtn.addEventListener('click', addExperienceField);
    addEducationBtn.addEventListener('click', addEducationField);
    generateResumeBtn.addEventListener('click', generateResume);
    primaryColorPicker.addEventListener('change', updateColors);
    secondaryColorPicker.addEventListener('change', updateColors);
  
    function addExperienceField() {
      const experienceFields = document.getElementById('experience-fields');
      const newExperience = document.createElement('div');
      newExperience.className = 'experience-entry';
      newExperience.innerHTML = `
        <input type="text" class="job-title" placeholder="Job Title">
        <input type="text" class="company" placeholder="Company">
        <input type="text" class="job-date" placeholder="Date Range">
        <textarea class="job-description" placeholder="Job Description"></textarea>
      `;
      experienceFields.appendChild(newExperience);
    }
  
    function addEducationField() {
      const educationFields = document.getElementById('education-fields');
      const newEducation = document.createElement('div');
      newEducation.className = 'education-entry';
      newEducation.innerHTML = `
        <input type="text" class="degree" placeholder="Degree">
        <input type="text" class="school" placeholder="School">
        <input type="text" class="edu-date" placeholder="Graduation Date">
      `;
      educationFields.appendChild(newEducation);
    }
  
    function updateColors() {
      const primaryColor = primaryColorPicker.value;
      const secondaryColor = secondaryColorPicker.value;
      document.documentElement.style.setProperty('--primary-color', primaryColor);
      document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    }
  
    function generateResume() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const location = document.getElementById('location').value;
      const summary = document.getElementById('summary').value;
      const skills = document.getElementById('skills').value;
      const primaryColor = primaryColorPicker.value;
      const secondaryColor = secondaryColorPicker.value;
  
      let experienceHTML = '';
      document.querySelectorAll('.experience-entry').forEach(entry => {
        experienceHTML += `
          <div class="experience-item">
            <h3>${entry.querySelector('.job-title').value} - ${entry.querySelector('.company').value}</h3>
            <p>${entry.querySelector('.job-date').value}</p>
            <p>${entry.querySelector('.job-description').value}</p>
          </div>
        `;
      });
  
      let educationHTML = '';
      document.querySelectorAll('.education-entry').forEach(entry => {
        educationHTML += `
          <div class="education-item">
            <h3>${entry.querySelector('.degree').value} - ${entry.querySelector('.school').value}</h3>
            <p>${entry.querySelector('.edu-date').value}</p>
          </div>
        `;
      });
  
      let profilePictureHTML = '';
      const profilePicture = profilePictureInput.files[0];
      if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function(e) {
          profilePictureHTML = `<img src="${e.target.result}" alt="Profile Picture" class="profile-picture-preview">`;
          completeResumeHTML();
        };
        reader.readAsDataURL(profilePicture);
      } else {
        completeResumeHTML();
      }
  
      function completeResumeHTML() {
        const resumeHTML = `
          <style>
            #preview-content {
              color: ${primaryColor};
            }
            #preview-content h2 {
              border-bottom-color: ${secondaryColor};
            }
          </style>
          <div class="resume-header">
            ${profilePictureHTML}
            <div class="resume-header-content">
              <h1>${name}</h1>
              <p>${email} | ${phone} | ${location}</p>
            </div>
          </div>
          <h2>Professional Summary</h2>
          <p>${summary}</p>
          <h2>Work Experience</h2>
          ${experienceHTML}
          <h2>Education</h2>
          ${educationHTML}
          <h2>Skills</h2>
          <p>${skills}</p>
        `;
  
        document.getElementById('preview-content').innerHTML = resumeHTML;
      }
    }
  
    // Initialize color variables
    updateColors();
  });