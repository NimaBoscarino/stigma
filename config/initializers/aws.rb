require 'aws-sdk-s3'

AWS_CREDENTIALS = Aws::Credentials.new(
  ENV['AWS_ACCESS_KEY_ID'],
  ENV['AWS_SECRET_ACCESS_KEY']
)

S3_BUCKET = Aws::S3::Resource.new(
  region: ENV['AWS_REGION'],
  credentials: AWS_CREDENTIALS
).bucket(ENV['S3_BUCKET_NAME'].to_s)