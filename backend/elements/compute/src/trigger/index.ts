import { Packet } from '../prepare'
import { executeConcurrently } from '@guided/utils'
import action from '../action'

import SQS from './sqs'
import { log } from '@guided/logger'

export default async function trigger(packet: Packet): Promise<string[]> {
    switch (process.env.STAGE) {
        case 'development':
            executeConcurrently(
                packet.computationIds,
                async (computationId: string) => {
                    log(
                        computationId,
                        `executing and forgetting computationId=${computationId}`
                    )
                    await action({
                        computationId,
                    })
                }
            )
                .then()
                .catch((error) => {
                    console.error(error)
                })
            return []
        case 'testing':
            await executeConcurrently(
                packet.computationIds,
                async (computationId: string) => {
                    log(
                        computationId,
                        `executing immediately computationId=${computationId}`
                    )
                    await action({
                        computationId,
                    })
                }
            )
            return []
        default:
            const sqs = SQS()
            console.log(
                `Send ${
                    packet.computationIds.length
                } SQS events COMPUTE_QUEUE_NAME=${process.env
                    .COMPUTE_QUEUE_NAME!}`
            )
            log(sqs.config.region!, 'sqs.config.region')
            log(
                sqs.config.credentials
                    ? sqs.config.credentials.accessKeyId
                    : 'no accessKeyId',
                'sqs.config.credentials?.accessKeyId!'
            )
            const { QueueUrl } = await sqs
                .getQueueUrl({
                    QueueName: process.env.COMPUTE_QUEUE_NAME!,
                })
                .promise()

            return executeConcurrently(
                packet.computationIds,
                async (computationId: string) => {
                    const result = await sqs
                        .sendMessage({
                            QueueUrl: QueueUrl!,
                            MessageBody: computationId,
                        })
                        .promise()
                    return result.MessageId!
                }
            )
    }
}
