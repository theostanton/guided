import SQS from 'aws-sdk/clients/sqs'

export default function (): SQS {
    return new SQS({
        region: process.env.DEFAULT_REGION,
        credentials:
            process.env.NODE_ENV === 'development'
                ? {
                      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
                  }
                : undefined,
    })
}
