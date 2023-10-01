// pages/api/deploy-stacks.ts
import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { region, applicationStackName, mode, productionStatus } = req.query;

  // Execute the deployment command
  const command = `cdk deploy ${applicationStackName}-${region}-${mode}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Deployment failed:", error);
      res.status(500).json({ error: "Deployment failed" });
    } else {
      console.log("Deployment successful:", stdout);
      if (productionStatus !== "true") {
        // Execute deployment of non-production stacks
        // Implement this part based on your CDK setup
      }
      res.status(200).json({ message: "Deployment successful" });
    }
  });
};
