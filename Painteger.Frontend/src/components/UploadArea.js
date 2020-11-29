import React from 'react';
import remove from '../assets/icons/trash.svg';

function UploadArea(props) {
    return (
        <React.Fragment>
            <div className='area'
                 onDragOver={props.dragOver}
                 onDragEnter={props.dragEnter}
                 onDragLeave={props.dragLeave}
                 onDrop={props.fileDrop}
                 onClick={props.fileInputClicked}
            >
                <input className='area__upload hidden' ref={props.fileInputRef} type='file' onChange={props.filesSelected}/>
                <svg className='area__icon' version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                    <path
                        d="m256 362.667969c-8.832031 0-16-7.167969-16-16v-330.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v330.667969c0 8.832031-7.167969 16-16 16zm0 0"/>
                    <path
                        d="m256 362.667969c-4.097656 0-8.191406-1.558594-11.308594-4.695313l-85.332031-85.332031c-6.25-6.25-6.25-16.382813 0-22.636719 6.25-6.25 16.382813-6.25 22.636719 0l74.023437 74.027344 74.027344-74.027344c6.25-6.25 16.386719-6.25 22.636719 0 6.25 6.253906 6.25 16.386719 0 22.636719l-85.335938 85.332031c-3.15625 3.136719-7.25 4.695313-11.347656 4.695313zm0 0"/>
                    <path
                        d="m453.332031 512h-394.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v96c0 14.699219 11.96875 26.667969 26.667969 26.667969h394.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v96c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0"/>
                </svg>
                <p className='area__text'>Click here or drag the image to this box to upload it</p>
            </div>
            {
                props.selectedFiles.map((data, i) =>
                    <div className="file-status-bar" key={i}>
                        <div className="file-info">
                            <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                        <span className="file-size">({props.fileSize(data.size)})</span>
                        {data.invalid && <span className='file-error-message'>({props.errorMessage})</span>}
                        </div>
                        <div className="file-remove" onClick={() => props.removeFile(data.name)}>
                            <img className='file-remove-icon' src={remove} alt="remove icon"/>
                            Remove
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
}

export default UploadArea;
