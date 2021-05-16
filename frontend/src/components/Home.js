import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TEST_CREATE, TEST_LIST } from "../utils/urls";

const Home = () => {
  const [title, setTitle] = useState("");
  const [testLink, setTestLink] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [response, setResponse] = useState([]);

  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTestLinkChange = (e) => {
    setTestLink(e.target.value);
  };

  const handleTestSubmit = (e) => {
    e.preventDefault();
    axios
      .post(TEST_CREATE, {
        title,
        src: testLink,
      })
      .then((res) => {
        if (res.status === 200) {
          setResponse((original) => [...original, res.data]);
        }
        history.push(`/test/${res.data.id}`);
      });
  };

  const LoadTests = ({ data }) => {
    var result = data.map((x) => {
      return (
        <div className='card bg-black text-light text-center' key={x.id}>
          <iframe
            className='card-img-top'
            srcDoc={x.src}
            frameBorder='0'
            style={{ width: "270px", height: "400px", pointerEvents: "none" }}
            scrolling='no'
            title='test'
          />
          <div className='card-body'>
            <Link className='card-title h5' to={`/test/${x.id}`}>
              {x.title}
            </Link>
          </div>
        </div>
      );
    });

    return <div className='card-columns'>{result}</div>;
  };

  useEffect(() => {
    axios.get(TEST_LIST).then((res) => {
      setResponse(res.data);
      setLoaded(true);
    });
  }, []);

  return (
    <div className='container'>
      <button
        className='styledButton m-0 my-3'
        style={{ width: "225px" }}
        data-toggle='collapse'
        data-target='#testBox'
        aria-expanded='false'
        aria-controls='testBox'>
        New test
      </button>
      <div className='collapse mb-3 bg-black p-3 rounded' id='testBox'>
        <form onSubmit={handleTestSubmit}>
          <label className='d-block m-0 mb-2 p-0'>
            <span className='styledFont mr-2 d-xs-block d-md-inline-flex text-skyblue'>
              Title:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <input
              type='text'
              className='bg-transparent border border-secondary rounded ml-0 ml-md-4 col-sm-8 text-light p-2'
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label className='m-0 p-0 d-xs-block d-md-flex'>
            <span className='styledFont mr-1 d-xs-block d-md-inline-flex text-skyblue'>
              Test Link:
            </span>
            <textarea
              className='rounded bg-black text-light p-1 ml-0 ml-md-2 col-sm-8'
              style={{ height: "200px" }}
              value={testLink}
              onChange={handleTestLinkChange}
            />
          </label>
          <div className='mt-2 ml-0 ml-md-3'>
            <span className='d-none d-md-inline-block mr-5'>
              &nbsp;&nbsp;&nbsp;
            </span>
            <button className='btn btn-dark ml-0 ml-md-3'>Upload</button>
          </div>
        </form>
      </div>
      {loaded ? <LoadTests data={response} /> : "Loading..."}
    </div>
  );
};

export default Home;
