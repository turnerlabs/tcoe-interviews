import boto3

def lambda_handler(event, context):
    
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": "Success!"
    }