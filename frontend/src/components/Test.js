import React, { useState } from "react";

const Tests = (props) => {
  const [alert, setAlert] = useState(false);

  const copy = (e) => {
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = "www.prakritimaddheshiya.com" + props.location.pathname;
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

  const response = {
    src: "<div align='center' id='liveworksheet1266323' style='width:100%'></div><script src='https://files.liveworksheets.com/embed/embed.js'></script><script language='javascript'>loadliveworksheet(1266323,'agpnncyh',2582,'www',1878796);</script>",
    title: "Swar Test for LKG-A",
  };

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
      <p className='mt-3 text-skyblue h5 mb-0'>{response.title}</p>
      <hr className='mt-1 w-25 bg-light' />
      <iframe
        srcDoc={response.src}
        frameBorder='0'
        style={{ width: "300px", height: "400px" }}
        title='test'
      />
    </div>
  );
};

export default Tests;
