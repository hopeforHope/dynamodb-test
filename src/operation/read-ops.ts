// const AWS = require('aws-sdk')
// AWS.config.update({ region: 'ap-northeast-2' })
//
// const docClient = new AWS.DynamoDB.DocumentClient()

// docClient.get(
//   {
//     TableName: 'td_notes_sdk',
//     Key: {
//       user_id: 'ABC',
//       timestamp: 1,
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   },
// )
/*
{
  Item: {
    content: 'initial content',
    views: 3,
    user_id: 'ABC',
    title: 'Initial title',
    timestamp: 1
  }
}
 */

// // == TypeORM : find
// docClient.query(
//   {
//     // TableName: 'td_notes_sdk',
//     // KeyConditionExpression: 'user_id = :uid',
//     // ExpressionAttributeValues: {
//     //   ':uid': 'ABC',
//     // },
//     TableName: 'test-hope-3',
//     // KeyConditionExpression: 'email = :em',
//     KeyConditions: {
//       email: {
//         ComparisonOperator: 'EQ',
//         AttributeValueList: ['test1@gmail.com'],
//       },
//     },
//     // ExpressionAttributeValues: {
//     //   ':em': 'test1@gmail.com',
//     // },
//     ProjectionExpression: 'email, id',
//     // Select: 'COUNT',
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(JSON.stringify(data, null, 2))
//     }
//   },
// )
/*
{
  Items: [
    {
      content: 'initial content',
      views: 3,
      user_id: 'ABC',
      title: 'Initial title',
      timestamp: 1
    }
  ],
  Count: 1,
  ScannedCount: 1
}
 */

// // 최대한 자제해야하는 메서드
// docClient.scan(
//   {
//     TableName: 'test-hope-3',
//     FilterExpression: 'email = :em',
//     ExpressionAttributeValues: {
//       ':em': 'test1@gmail.com',
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(JSON.stringify(data, null, 2))
//     }
//   },
// )

// var params = {
//   RequestItems: {
//     td_notes_sdk: {
//       Keys: [
//         {
//           user_id: 'ABC',
//           timestamp: 1,
//         },
//       ],
//     },
//     'test-hope-3': {
//       Keys: [
//         {
//           email: 'test1@gmail.com',
//           id: 'de30894d-2d06-43ca-99f1-8e1a07744bbb',
//         },
//       ],
//     },
//   },
// }
//
// docClient.batchGet(params, function (err, data) {
//   if (err) console.log(err)
//   else console.log(JSON.stringify(data, null, 2))
// })
