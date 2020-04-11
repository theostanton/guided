import S3 from 'aws-sdk/clients/s3';

export default function() {
  return new S3({
    region: process.env.DEFAULT_REGION,
    credentials: process.env.NODE_ENV === "development" ? {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    } : undefined,
  })
}