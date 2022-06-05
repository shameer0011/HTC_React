import React, { useRef } from 'react'

const FileUploader = ({ onFileSelect, id, multiple, className, accept }) => {
    const fileInput = useRef(null)
    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0])
    }

    return (
        <div className={className} >
            <input
                accept={true}
                type="file"
                onChange={handleFileInput}
                id={id}
                multiple={true}
            />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary" />
        </div>
    )
}
export default FileUploader;