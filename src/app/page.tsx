// src/app/page.tsx
"use client";

import { useState } from 'react';
import Script from 'next/script';

export default function ResumeBuilder() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState(['']);
  const [skills, setSkills] = useState(['']);
  const [jobExperiences, setJobExperiences] = useState([{ title: '', company: '', description: '' }]);
  const [projects, setProjects] = useState([{ name: '', url: '' }]);
  const [hobbies, setHobbies] = useState(['']);
  const [languages, setLanguages] = useState(['']);
  const [certifications, setCertifications] = useState(['']);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleGeneratePDF = () => {
    const element = document.getElementById('resume');
    if (element && typeof window !== 'undefined' && window.html2pdf) {
      window.html2pdf(element);
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js" />

      <header className="header">
        <h1>Professional Resume Builder</h1>
      </header>

      <section className="form-section">
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <label>Education:</label>
          {education.map((edu, index) => (
            <input
              key={index}
              type="text"
              value={edu}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = e.target.value;
                setEducation(newEducation);
              }}
              placeholder="Degree, Institution, Year"
            />
          ))}
          <button type="button" onClick={() => setEducation([...education, ''])}>Add More Education</button>

          <label>Skills:</label>
          {skills.map((skill, index) => (
            <input
              key={index}
              type="text"
              value={skill}
              onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = e.target.value;
                setSkills(newSkills);
              }}
              placeholder="Skill"
            />
          ))}
          <button type="button" onClick={() => setSkills([...skills, ''])}>Add More Skills</button>

          <label>Job Experience:</label>
          {jobExperiences.map((job, index) => (
            <div key={index} className="experience-field">
              <input
                type="text"
                value={job.title}
                onChange={(e) => {
                  const newJobs = [...jobExperiences];
                  newJobs[index].title = e.target.value;
                  setJobExperiences(newJobs);
                }}
                placeholder="Job Title"
              />
              <input
                type="text"
                value={job.company}
                onChange={(e) => {
                  const newJobs = [...jobExperiences];
                  newJobs[index].company = e.target.value;
                  setJobExperiences(newJobs);
                }}
                placeholder="Company"
              />
              <textarea
                value={job.description}
                onChange={(e) => {
                  const newJobs = [...jobExperiences];
                  newJobs[index].description = e.target.value;
                  setJobExperiences(newJobs);
                }}
                placeholder="Job Description"
              />
            </div>
          ))}
          <button type="button" onClick={() => setJobExperiences([...jobExperiences, { title: '', company: '', description: '' }])}>Add More Experience</button>

          <label>Projects:</label>
          {projects.map((project, index) => (
            <div key={index} className="project-field">
              <input
                type="text"
                value={project.name}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].name = e.target.value;
                  setProjects(newProjects);
                }}
                placeholder="Project Name"
              />
              <input
                type="url"
                value={project.url}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].url = e.target.value;
                  setProjects(newProjects);
                }}
                placeholder="Project URL"
              />
            </div>
          ))}
          <button type="button" onClick={() => setProjects([...projects, { name: '', url: '' }])}>Add More Projects</button>

          <label>Hobbies:</label>
          {hobbies.map((hobby, index) => (
            <input
              key={index}
              type="text"
              value={hobby}
              onChange={(e) => {
                const newHobbies = [...hobbies];
                newHobbies[index] = e.target.value;
                setHobbies(newHobbies);
              }}
              placeholder="Hobby"
            />
          ))}
          <button type="button" onClick={() => setHobbies([...hobbies, ''])}>Add More Hobbies</button>

          <label>Languages:</label>
          {languages.map((language, index) => (
            <input
              key={index}
              type="text"
              value={language}
              onChange={(e) => {
                const newLanguages = [...languages];
                newLanguages[index] = e.target.value;
                setLanguages(newLanguages);
              }}
              placeholder="Language"
            />
          ))}
          <button type="button" onClick={() => setLanguages([...languages, ''])}>Add More Languages</button>

          <label>Certifications:</label>
          {certifications.map((cert, index) => (
            <input
              key={index}
              type="text"
              value={cert}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index] = e.target.value;
                setCertifications(newCertifications);
              }}
              placeholder="Certification"
            />
          ))}
          <button type="button" onClick={() => setCertifications([...certifications, ''])}>Add More Certifications</button>

          <label htmlFor="profileImage">Profile Picture:</label>
          <input id="profileImage" type="file" accept="image/*" onChange={handleProfileImageUpload} />

          <button type="button" onClick={() => setShowPreview(true)}>Preview Resume</button>
          <button type="button" onClick={handleGeneratePDF}>Download as PDF</button>
        </form>
      </section>

      {showPreview && (
        <section className="resume-preview">
          <h2>Preview of Your Resume</h2>
          <div id="resume" className="resume">
            <div className="personal-info">
              {profileImage && <img src={profileImage} alt="Profile" className="profile-image" />}
              <h3>{name}</h3>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </div>

            <h4>Education</h4>
            <ul>
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>

            <h4>Skills</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h4>Job Experience</h4>
            <ul>
              {jobExperiences.map((job, index) => (
                <li key={index}>
                  <strong>{job.title}</strong> at {job.company}
                  <p>{job.description}</p>
                </li>
              ))}
            </ul>

            <h4>Projects</h4>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4>Hobbies</h4>
            <ul>
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>

            <h4>Languages</h4>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>

            <h4>Certifications</h4>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
