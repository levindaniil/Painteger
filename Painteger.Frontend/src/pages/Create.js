import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Cards from "../components/Cards";
import UploadArea from "../components/UploadArea";

function Create(props) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);
    const fileInputRef = React.createRef();
    let imageIsReady = false;
    let style = '';

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        return validTypes.indexOf(file.type) !== -1;
    }

    const handleFiles = (files) => {
        Array.from(files).forEach(file => {
            if (validateFile(file)) {
                setSelectedFiles([file]);
            } else {
                file['invalid'] = true;
                setSelectedFiles([file]);
                setErrorMessage('File type not permitted');
                setUnsupportedFiles([file]);
            }
        })
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const removeFile = () => {
        selectedFiles.splice(0, 1);
        setSelectedFiles([]);
        if (unsupportedFiles.length) {
            unsupportedFiles.splice(0, 1);
            setUnsupportedFiles([]);
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    const uploadFiles = () => {
        if (document.querySelector('.card_checked')) {
            const card = document.querySelector('.card_checked');
            style = card.children[0].style.backgroundImage.slice(4, -1).replace(/['"]/g, "");
        }
        const formData = new FormData();
        formData.append('image', selectedFiles[0]);
        formData.append('style', style);
        formData.append('user', 'hubot');
        const getUrlAsImg = () => fetch(`http://127.0.0.1:5000/loadWithStyle`, {
            method: 'POST',
                mode: 'no-cors',
                body: formData
        })
            .then( r => r.arrayBuffer() )
            .then( ab => URL.createObjectURL( new Blob( [ ab ], { type: 'image/jpeg' } ) ) )
            .then( src => { const img = document.createElement( 'img' ); img.src = src; return img; } )
            .catch( console.error );

        getUrlAsImg().then( img => document.querySelector('.area_result').append(img));
        document.querySelector('.button_disabled').classList.remove('button_disabled');
        const result = document.querySelector('.area_result');
        result.textContent = '';
        result.style.background = ``;
    }

    return (
        <div className='container'>
            <NavLink to='/' className='return-link'>
                <svg className='return-link__icon' version="1.1" x="0px" y="0px"
                     viewBox="0 0 31.494 31.494">
                    <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
	                    c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
	                    c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                </svg>
                <span className='return-link__text'>Back to home page</span>
            </NavLink>
            <h1 className='title'>Create an art</h1>
            <p className='comment'>Just a few steps to create a piece of art:</p>
            <section className='step step_create'>
                <div className="step__header step__header_create">
                    <div className="step__number">1.</div>
                    <h3 className='step__title step__title_create'>Upload image</h3>
                </div>
                <UploadArea
                    selectedFiles={selectedFiles} errorMessage={errorMessage}
                    dragOver={dragOver} dragEnter={dragEnter} dragLeave={dragLeave} fileDrop={fileDrop}
                    fileSize={fileSize} removeFile={removeFile}
                    fileInputRef={fileInputRef} fileInputClicked={fileInputClicked} filesSelected={filesSelected}
                />
            </section>
            <section className='step step_create'>
                <div className="step__header step__header_create">
                    <div className="step__number">2.</div>
                    <h3 className='step__title step__title_create'>Choose style</h3>
                </div>
                <Cards action={'Upload style'}/>
            </section>
            <section className='step step_create'>
                <div className='step__header step__header_create'>
                    <div className="step__number">3.</div>
                    <h3 className='step__title step__title_create'>Submit and wait</h3>
                </div>
                <div className='step__result'>
                    {unsupportedFiles.length === 0 && selectedFiles.length ?
                        <div className='step__buttons'>
                            <button className='button button_create' onClick={() => {
                                uploadFiles()
                            }}>Get a picture
                            </button>
                            <button className='button button_create button_disabled'>Download
                            </button>
                        </div> :
                        <div className='step__buttons'>
                            <button className='button button_create button_disabled'>Get a picture</button>
                            <button className='button button_create button_disabled'>Download</button>
                        </div>
                    }
                    <div className='area area_result'>Your art will be displayed here</div>
                </div>
            </section>
        </div>
    );
}

export default Create;
