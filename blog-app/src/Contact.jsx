function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    gender: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\n\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Student Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        {/* Name */}
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        {/* Course Dropdown */}
        <label>
          Course:
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="MCA">MCA</option>
          </select>
        </label>

        {/* Gender Radio */}
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        {/* Message */}
        <label>
          Message:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}