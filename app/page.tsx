"use client";

import { Configuration } from "@/config/config";
import React, { useState } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [message, setMessage] = useState<string>("");

  const handleDeployClick = async () => {
    try {
      const response = await fetch("/api/deploy-stacks", {
        method: "POST", // or 'GET'
        headers: {
          "Content-Type": "application/json",
        },
        // Send any required data in the request body
        body: JSON.stringify({}),
      });

      const data: Configuration = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error deploying stacks:", error);
      setMessage("Deployment failed");
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleDeployClick}>Deploy Stacks</button>
      <p>{message}</p>
    </div>
  );
};

export default Home;
