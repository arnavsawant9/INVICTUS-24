import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import qs from 'querystring';

const LinkedInPosts = () => {
  const API_URL = 'https://api.linkedin.com/v2/ugcPosts?q=authors&authors=urn:li:person:MY_PAGE_ID&count=10&sort=CREATED_DESC';
  const [posts, setPosts] = useState([]);
  const history = useHistory(); // Create a history object

  // Function to get the authorization code
  const getAuthorizationCode = () => {
    // Mocking the authorization code for demonstration
    const mockCode = 'Your_Mock_Authorization_Code_Here';
    return mockCode;
  };

  // Function to get the access token
  const getAccessToken = async (CODE) => {
    const AUTH_URL = 'https://www.linkedin.com/oauth/v2/accessToken';
    const CLIENT_ID = '77cpy2g31cp5zt';
    const CLIENT_SECRET = 'Nz2VN7ALxWpWVoRo';
    const REDIRECT_URI = 'http://localhost:3000'; // here----------->

    const requestBody = {
      grant_type: 'authorization_code',
      code: CODE,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    try {
      const response = await axios.post(AUTH_URL, qs.stringify(requestBody), config);
      return response.data.access_token;
    } catch (error) {
      console.error('Error fetching access token', error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const CODE = getAuthorizationCode();
      const accessToken = await getAccessToken(CODE);
      axios.get(API_URL, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Corrected Authorization header interpolation
          'cache-control': 'no-cache',
          'X-Restli-Protocol-Version': '2.0.0',
        }
      })
      .then(response => {
        console.log("response=", response);
        setPosts(response.data.elements);
      })
      .catch(error => {
        console.log("error=", error);
      });
    };

    fetchPosts();
  }, []);

  // Function to simulate redirection to LinkedIn (use react-router-dom in a real app)
  const redirectToLinkedIn = () => {
    history.push('/'); // Redirect to the root URL
  };

  return (
    <div>
      <button onClick={redirectToLinkedIn}>Simulate LinkedIn Redirect</button>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LinkedInPosts;
