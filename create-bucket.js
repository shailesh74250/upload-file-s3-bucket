const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAI5NYSL7A5XRNTUFA';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'familysoft';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ap-south-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});