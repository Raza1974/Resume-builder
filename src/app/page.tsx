import Script from 'next/script'

export default function ResumePage() {
  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <div className="resume-form">
        <h2>Personal Information</h2>
        <input type="text" id="name" placeholder="Full Name" />
        <input type="email" id="email" placeholder="Email" />
        <input type="tel" id="phone" placeholder="Phone" />
        <input type="text" id="location" placeholder="Location" />
        <input type="file" id="profile-picture" accept="image/*" />

        <h2>Color Scheme</h2>
        <div className="color-picker">
          <label>
            Primary Color:
            <input type="color" id="primary-color" value="#007bff" />
          </label>
          <label>
            Secondary Color:
            <input type="color" id="secondary-color" value="#6c757d" />
          </label>
        </div>

        <h2>Professional Summary</h2>
        <textarea id="summary" placeholder="Brief professional summary"></textarea>

        <h2>Work Experience</h2>
        <div id="experience-fields">
          <div className="experience-entry">
            <input type="text" className="job-title" placeholder="Job Title" />
            <input type="text" className="company" placeholder="Company" />
            <input type="text" className="job-date" placeholder="Date Range" />
            <textarea className="job-description" placeholder="Job Description"></textarea>
          </div>
        </div>
        <button id="add-experience">Add More Experience</button>

        <h2>Education</h2>
        <div id="education-fields">
          <div className="education-entry">
            <input type="text" className="degree" placeholder="Degree" />
            <input type="text" className="school" placeholder="School" />
            <input type="text" className="edu-date" placeholder="Graduation Date" />
          </div>
        </div>
        <button id="add-education">Add More Education</button>

        <h2>Skills</h2>
        <textarea id="skills" placeholder="List your skills (comma-separated)"></textarea>

        <button id="generate-resume">Generate Resume</button>
      </div>

      <div id="resume-preview" className="resume-preview">
        <h2>Resume Preview</h2>
        <div id="preview-content"></div>
      </div>

      <Script src="/script.js" />
    </div>
  )
}