"use client";

import React, { useState } from "react";

export default function DockerPage() {
  const [dockerUsername, setDockerUsername] = useState<string>("");
  const [dockerPassword, setDockerPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the Docker credentials to your backend or handle them as needed.
    // You can use a serverless function, API route, or integrate with AWS services here.

    // For this example, we'll just display the submitted data.
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Docker Configuration</h1>
      {submitted ? (
        <div>
          <p>Submitted Docker Credentials:</p>
          <p>Username: {dockerUsername}</p>
          <p>Password: {dockerPassword}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Docker Username:
            <input
              type="text"
              value={dockerUsername}
              className="text-black"
              onChange={(e) => setDockerUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Docker Password:
            <input
              type="password"
              value={dockerPassword}
              className="text-black"
              onChange={(e) => setDockerPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
