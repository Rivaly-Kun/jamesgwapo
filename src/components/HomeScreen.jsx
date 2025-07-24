import React, { useRef, useState } from 'react';

export default function RouteAdvisor() {
  const fileInputRef = useRef(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = () => {
    const fileInput = fileInputRef.current;

    if (!fileInput || !fileInput.files.length) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);
    setError('');
    setDescription('');

    const formdata = new FormData();
    formdata.append("file", fileInput.files[0]);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

 fetch("http://localhost:3000/proxy-upload", requestOptions)
  .then((response) => response.json()) // 👈 parse JSON
  .then((result) => setDescription(result.text)) // 👈 extract the 'text' field
  .catch((error) => {
    console.error("Upload error:", error);
    setError("Upload failed.");
  })
  .finally(() => {
    setLoading(false);
  });

  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.header}>AI Image Describer</div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
      />

      <button style={styles.button} onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload & Describe"}
      </button>

      {description && (
        <div style={styles.resultBox}>
          <strong>Description:</strong>
          <p>{description}</p>
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: '10px' }}>{error}</p>}
    </div>
  );
}

const styles = {
  mainContainer: {
    width: '600px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #ccc',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#0084FF',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0084FF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  resultBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
  },
};
