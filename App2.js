import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor
import logo from './logo.png';
import navbarLogo from './nav_logo.png';
import './App.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function App() {
  const [editMode, setEditMode] = useState(false);
  const [texteditMode, settextEditMode] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSize, setImageSize] = useState('100%'); // Initial image size
  const [showNewsSection, setShowNewsSection] = useState(false);
  const [newsContent, setNewsContent] = useState('');
  const [newsImage, setNewsImage] = useState(null);
  const localizer = momentLocalizer(moment);
  const [newsImageSize, setNewsImageSize] = useState('100%'); // Initial news image size

  
  var modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['undo', 'redo', '|', "bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [
        { "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },
  
      ],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align",
  ];

  
  const handleEditClick_1 = () => {
    setEditMode(!editMode);
  };

  const handletextEditClick = () => {
    settextEditMode(!texteditMode);
  };
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  const handleNewsImageSizeChange = (e) => {
    setNewsImageSize(e.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
 
  const handleImageSizeChange = (e) => {
    setImageSize(e.target.value);
  };
  const handleEditClick_3 = () => {
    setEditMode(!editMode);
    setShowNewsSection(!showNewsSection);
  };
  
  const handleNewsContentChange = (content) => {
    setNewsContent(content);
  };

  const handleNewsImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewsImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleAddNewsClick = () => {
    setShowNewsSection(!showNewsSection);
  };


  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <img src={navbarLogo} className="navbar-logo" alt="nav_logo" /> {/* Navbar logo */}
        {/* Add your navigation links here */}
        <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Events Support</a></li>
        <li><a href="#">IT policies</a></li>
        <li><a href="#">Contact Us</a></li>

          {/* Add more navigation items as needed */}
        </ul>
      </nav>

      {/* Main content */}
      <div className="main-content">
        <header className="App-header">
          {/* Image */}
          <img
            src={selectedImage || logo}
            className="App-logo"
            alt="logo"
            style={{ width: imageSize }}
          />
          {/* Edit Image button */}
          <button onClick={handleEditClick_1}>Edit Image</button>
          {/* Image input for selecting a new image */}
          {editMode && (
            <div>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {/* Size input */}
              <label style={{ color: 'black', fontSize: '14px' }}>Size: </label>
              <input type="text" value={imageSize} onChange={handleImageSizeChange} />
              
            </div>
             
          )}
          {/* Text below image */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          {/* Edit option */}
          <button onClick={handletextEditClick}>Edit</button>

          {/* Text Editor */}
          {texteditMode && (
            <div className="text-editor">
              <ReactQuill
                value={editorContent}
                onChange={handleEditorChange}
                modules={modules}
                formats={formats}
                placeholder="Type your text here..."
              />
            </div>
          )}
        </header>

        {/* Display edited content */}
        <div className="ql-editor">
          <div className="edited-content">
            <div dangerouslySetInnerHTML={{ __html: editorContent }} />
          </div>
        </div>
        
        <div className="news-calendar-row">
          {/* News Section */}
          <div className="news-section">
            <h2>News Content</h2>
            <button onClick={handleAddNewsClick}>
              {showNewsSection ? 'Display' : 'Add News'}
            </button>

            {showNewsSection && (
              <div>
                {/* Add image input for selecting a news image */}
                <input type="file" accept="image/*" onChange={handleNewsImageChange} />
                {/* Size input for news image */}
                <label style={{ color: 'black', fontSize: '14px' }}>Image Size(100% - fits the left half of page): </label>
                <input type="text" value={newsImageSize} onChange={handleNewsImageSizeChange} />
                {/* Add Quill editor for news content */}
                <ReactQuill
                  value={newsContent}
                  onChange={handleNewsContentChange}
                  modules={modules}
                  formats={formats}
                  placeholder="Add news content here..."
                />
              </div>
            )}

            {newsImage && (
              <div className="edited-news">
                <img src={newsImage} alt="edited-news" style={{ width: newsImageSize }} />
                <div dangerouslySetInnerHTML={{ __html: newsContent }} />
              </div>
            )}
          </div>
        <div className="calendar">
          <h2>Calendar</h2>
            <Calendar
              localizer={localizer}
              events={[] /* Add your events here */}
              views={['month']}
              step={40}
              showMultiDayTimes={false}
              defaultDate={new Date()}
              toolbar={false} // Hide toolbar
            />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
