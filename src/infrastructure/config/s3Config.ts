// src/infrastructure/config/s3Config.ts
import AWS from 'aws-sdk';
import { env } from './env';

AWS.config.update({
    region: env.aws.region,
    accessKeyId: env.aws.accessKeyId,
    secretAccessKey: env.aws.secretAccessKey,
});

export const s3 = new AWS.S3();
