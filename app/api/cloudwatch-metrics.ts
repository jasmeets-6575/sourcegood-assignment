// pages/api/cloudwatch-metrics.ts
import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { bucketName, region } = req.query;

  // Ensure bucketName and region are strings
  if (typeof bucketName !== "string" || typeof region !== "string") {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  // Configure AWS SDK
  AWS.config.update({ region });

  const cloudwatch = new AWS.CloudWatch();

  const now = new Date();
  const startTime = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
  const endTime = now;

  const params: AWS.CloudWatch.GetMetricStatisticsInput = {
    Namespace: "AWS/S3",
    MetricName: "BucketSizeBytes",
    Dimensions: [
      { Name: "BucketName", Value: bucketName },
      { Name: "StorageType", Value: "StandardStorage" },
    ],
    StartTime: startTime,
    EndTime: endTime,
    Period: 86400, // 1 day
    Statistics: ["Average"],
  };

  try {
    const data = await cloudwatch.getMetricStatistics(params).promise();
    // Process and return the metric data
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching CloudWatch metrics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
