// const AWS = require('aws-sdk')
// AWS.config.update({ region: 'ap-northeast-2' })
//
// const docClient = new AWS.DynamoDB.DocumentClient()

// docClient.put(
//   {
//     TableName: 'td_notes_sdk',
//     Item: {
//       user_id: 'bb',
//       timestamp: 1,
//       title: 'my title',
//       content: 'my content',
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

// docClient.update(
//   {
//     TableName: 'td_notes_sdk',
//     Key: {
//       user_id: 'bb',
//       timestamp: 1,
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//       '#t': 'title',
//     },
//     ExpressionAttributeValues: {
//       ':t': 'Updated title',
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
//
// docClient.delete(
//   {
//     TableName: 'td_notes_sdk',
//     Key: {
//       user_id: 'bb',
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

// docClient.batchWrite(
//   {
//     RequestItems: {
//       td_notes_sdk: [
//         {
//           DeleteRequest: {
//             Key: {
//               user_id: '22',
//               timestamp: 2,
//             },
//           },
//         },
//         {
//           PutRequest: {
//             Item: {
//               user_id: '33',
//               timestamp: 3,
//               title: 'title 33',
//               content: 'Content 33,',
//             },
//           },
//         },
//         {
//           PutRequest: {
//             Item: {
//               user_id: '44',
//               timestamp: 4,
//               title: 'title 44',
//               content: 'Content 44',
//             },
//           },
//         },
//       ],
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
