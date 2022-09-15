const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-northeast-2' })

const dynamodb = new AWS.DynamoDB()

dynamodb.listTables((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
