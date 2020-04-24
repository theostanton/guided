import { Feature } from 'geojson'
import datasets from '@mapbox/mapbox-sdk/services/datasets'
import { logJson } from '@guided/logger'

export const datasetClient = datasets({
    accessToken: process.env.MAPBOX_WRITE_TOKEN!,
})

export async function uploadFeature(
    key: string,
    feature: Feature
): Promise<void> {
    const datasetResponse = await datasetClient
        .createDataset({
            name: key,
        })
        .send()

    logJson(datasetResponse.body, 'datasetResponse')

    const datasetId = datasetResponse.body.id

    const featureResponse = await datasetClient
        .putFeature({
            datasetId: datasetId,
            featureId: key,
            feature,
        })
        .send()

    logJson(featureResponse.body, 'featureResponse')
}
