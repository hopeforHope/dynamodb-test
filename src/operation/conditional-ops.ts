// const AWS = require('aws-sdk')
// AWS.config.update({ region: 'ap-northeast-2' })
//
// const docClient = new AWS.DynamoDB.DocumentClient()
//
// docClient.put(
//   {
//     TableName: 'td_notes_sdk',
//     Item: {
//       user_id: 'ABC',
//       timestamp: 1,
//       title: 'New title',
//       content: 'New content',
//     },
//     ConditionExpression: '#t <> :t',
//     ExpressionAttributeNames: {
//       '#t': 'timestamp',
//     },
//     ExpressionAttributeValues: {
//       ':t': 1,
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
// /*
// ConditionalCheckFailedException: The conditional request failed
//     at Request.extractError (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/protocol/json.js:52:27)
//     at Request.callListeners (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/sequential_executor.js:106:20)
//     at Request.emit (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/sequential_executor.js:78:10)
//     at Request.emit (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/request.js:686:14)
//     at Request.transition (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/request.js:22:10)
//     at AcceptorStateMachine.runTo (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/state_machine.js:14:12)
//     at /Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/state_machine.js:26:10
//     at Request.<anonymous> (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/request.js:38:9)
//     at Request.<anonymous> (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/request.js:688:12)
//     at Request.callListeners (/Users/hope/Documents/glo/test/dynamodb/node_modules/aws-sdk/lib/sequential_executor.js:116:18) {
//   code: 'ConditionalCheckFailedException',
//   time: 2022-09-12T06:55:49.225Z,
//   requestId: 'E9F9SMF83AFO8HHQ90RLLICH3BVV4KQNSO5AEMVJF66Q9ASUAAJG',
//   statusCode: 400,
//   retryable: false,
//   retryDelay: 30.678018329540468
// }
//
//  */
