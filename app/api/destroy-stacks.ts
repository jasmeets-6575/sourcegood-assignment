// pages/api/destroy-stacks.ts
import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { stagingRegion, productionRegion } = req.query;

  // Execute the CDK destroy command for staging region
  const stagingCommand = `cdk destroy --all -f --region ${stagingRegion}`;
  exec(stagingCommand, (error, stdout, stderr) => {
    if (error) {
      console.error("Stack deletion failed for staging region:", error);
      res
        .status(500)
        .json({ error: "Stack deletion failed for staging region" });
    } else {
      console.log("Stacks deleted for staging region:", stdout);
      // Execute the CDK destroy command for production region if needed
      if (stagingRegion !== productionRegion) {
        const productionCommand = `cdk destroy --all -f --region ${productionRegion}`;
        exec(productionCommand, (prodError, prodStdout, prodStderr) => {
          if (prodError) {
            console.error(
              "Stack deletion failed for production region:",
              prodError
            );
            res
              .status(500)
              .json({ error: "Stack deletion failed for production region" });
          } else {
            console.log("Stacks deleted for production region:", prodStdout);
            res.status(200).json({ message: "Stacks deleted successfully" });
          }
        });
      } else {
        res.status(200).json({ message: "Stacks deleted successfully" });
      }
    }
  });
};
