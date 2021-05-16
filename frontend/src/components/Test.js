import axios from "axios";
import React, { useEffect, useState } from "react";
import { TEST_DETAIL } from "../utils/urls";

const Tests = (props) => {
  const [alert, setAlert] = useState(false);
  const [response, setResponse] = useState({});
  const [loaded, setLoaded] = useState(false);

  const id = props.match.params.id;

  const copy = (e) => {
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = "www.prakritimaddheshiya.com/test/" + id;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    document.body.removeChild(inputElement);

    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  useEffect(() => {
    axios.get(TEST_DETAIL + id).then((res) => {
      setResponse(res.data);
      setLoaded(true);
    });
  }, [id]);

  return (
    <div className='text-center my-3'>
      <button className='btn btn-primary' onClick={copy}>
        Copy link
      </button>
      <br />
      {alert && (
        <div
          className='alert alert-primary w-50 mx-auto mt-3 mb-0'
          id='alert'
          role='alert'>
          Link copied!!!
        </div>
      )}
      {loaded && (
        <>
          <p className='mt-3 text-skyblue h5 mb-0'>{response.title}</p>
          <hr className='mt-1 w-25 bg-light' />
          <iframe
            srcDoc={response.src}
            frameBorder='0'
            style={{ width: "300px", height: "400px" }}
            title='test'
          />
        </>
      )}
    </div>
  );
};

export default Tests;
