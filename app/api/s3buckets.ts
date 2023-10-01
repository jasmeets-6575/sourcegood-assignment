// pages/api/s3buckets.ts
import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let region: string | string[] = req.query.region || "ap-south-1";

  // Check if req.query.region is an array and get the first element
  if (Array.isArray(region)) {
    region = region[0];
  }

  // Configure AWS SDK
  AWS.config.update({ region });

  const s3 = new AWS.S3();

  try {
    const data = await s3.listBuckets().promise();
    const bucketNames: string[] = data.Buckets.map(
      (bucket: { Name: any }) => bucket.Name
    );
    res.status(200).json(bucketNames);
  } catch (error) {
    console.error("Error fetching S3 buckets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
