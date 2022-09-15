import { DynamoDB } from 'aws-sdk'

const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-northeast-2' })

const dynamodb = new AWS.DynamoDB()

const params: DynamoDB.Types.CreateTableInput = {
  AttributeDefinitions: [],
  KeySchema: [],
  TableName: '',
}
dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// // Table list
// var params = {}
// dynamodb.listTables(params, function (err, data) {
//   if (err) console.log(err, err.stack) // an error occurred
//   else console.log(data) // successful response
// })
//   /*
//   data = {
//    TableNames: [
//       "Forum",
//       "ProductCatalog",
//       "Reply",
//       "Thread"
//    ]
//   }
//   */

// // Table Description
// dynamodb.describeTable(
//   {
//     TableName: 'test-hope-3',
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       // console.log(data)
//       console.log(JSON.stringify(data, null, 2))
//     }
//   },
// )
/*
{
  Table: {
    AttributeDefinitions: [ [Object], [Object], [Object], [Object] ],
    TableName: 'test-hope-3',
    KeySchema: [ [Object], [Object] ],
    TableStatus: 'ACTIVE',
    CreationDateTime: 2022-06-23T05:56:10.495Z,
    ProvisionedThroughput: {
      NumberOfDecreasesToday: 0,
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableSizeBytes: 548,
    ItemCount: 2,
    TableArn: 'arn:aws:dynamodb:ap-northeast-2:740016600163:table/test-hope-3',
    TableId: 'c8227f64-dc7c-4379-a5c2-13fb41be4d83',
    GlobalSecondaryIndexes: [ [Object], [Object] ],
    TableClassSummary: { TableClass: 'STANDARD' }
  }
}
 */

/*
{
  "Table": {
    "AttributeDefinitions": [
      {
        "AttributeName": "email",
        "AttributeType": "S"
      },
      {
        "AttributeName": "firstName",
        "AttributeType": "S"
      },
      {
        "AttributeName": "id",
        "AttributeType": "S"
      },
      {
        "AttributeName": "lastName",
        "AttributeType": "S"
      }
    ],
    "TableName": "test-hope-3",
    "KeySchema": [
      {
        "AttributeName": "email",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "id",
        "KeyType": "RANGE"
      }
    ],
    "TableStatus": "ACTIVE",
    "CreationDateTime": "2022-06-23T05:56:10.495Z",
    "ProvisionedThroughput": {
      "NumberOfDecreasesToday": 0,
      "ReadCapacityUnits": 1,
      "WriteCapacityUnits": 1
    },
    "TableSizeBytes": 548,
    "ItemCount": 2,
    "TableArn": "arn:aws:dynamodb:ap-northeast-2:740016600163:table/test-hope-3",
    "TableId": "c8227f64-dc7c-4379-a5c2-13fb41be4d83",
    "GlobalSecondaryIndexes": [
      {
        "IndexName": "lastName-id-index",
        "KeySchema": [
          {
            "AttributeName": "lastName",
            "KeyType": "HASH"
          },
          {
            "AttributeName": "id",
            "KeyType": "RANGE"
          }
        ],
        "Projection": {
          "ProjectionType": "ALL"
        },
        "IndexStatus": "ACTIVE",
        "ProvisionedThroughput": {
          "NumberOfDecreasesToday": 0,
          "ReadCapacityUnits": 1,
          "WriteCapacityUnits": 1
        },
        "IndexSizeBytes": 548,
        "ItemCount": 2,
        "IndexArn": "arn:aws:dynamodb:ap-northeast-2:740016600163:table/test-hope-3/index/lastName-id-index"
      },
      {
        "IndexName": "firstName-id-index",
        "KeySchema": [
          {
            "AttributeName": "firstName",
            "KeyType": "HASH"
          },
          {
            "AttributeName": "id",
            "KeyType": "RANGE"
          }
        ],
        "Projection": {
          "ProjectionType": "ALL"
        },
        "IndexStatus": "ACTIVE",
        "ProvisionedThroughput": {
          "NumberOfDecreasesToday": 0,
          "ReadCapacityUnits": 1,
          "WriteCapacityUnits": 1
        },
        "IndexSizeBytes": 548,
        "ItemCount": 2,
        "IndexArn": "arn:aws:dynamodb:ap-northeast-2:740016600163:table/test-hope-3/index/firstName-id-index"
      }
    ],
    "TableClassSummary": {
      "TableClass": "STANDARD"
    }
  }
}
 */

// // Create Table
// dynamodb.createTable(
//   {
//     TableName: 'td_notes_sdk',
//     AttributeDefinitions: [
//       {
//         AttributeName: 'user_id',
//         AttributeType: 'S',
//       },
//       {
//         AttributeName: 'timestamp',
//         AttributeType: 'N',
//       },
//     ],
//     KeySchema: [
//       {
//         AttributeName: 'user_id',
//         KeyType: 'HASH',
//       },
//       {
//         AttributeName: 'timestamp',
//         KeyType: 'RANGE',
//       },
//     ],
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 1,
//       WriteCapacityUnits: 1,
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
// {
//   TableDescription: {
//     AttributeDefinitions: [ [Object], [Object] ],
//     TableName: 'test_table_name',
//     KeySchema: [ [Object], [Object] ],
//     TableStatus: 'CREATING',
//     CreationDateTime: 2022-09-12T05:16:08.289Z,
//     ProvisionedThroughput: {
//       NumberOfDecreasesToday: 0,
//       ReadCapacityUnits: 1,
//       WriteCapacityUnits: 1
//     },
//     TableSizeBytes: 0,
//     ItemCount: 0,
//     TableArn: 'arn:aws:dynamodb:ap-northeast-2:740016600163:table/test_table_name',
//     TableId: 'e28008c6-5cbe-43c7-ae42-64597d8f798e'
//   }
// }
//  */

// // Update Table
// dynamodb.updateTable(
//   {
//     TableName: 'test_table_name',
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 2,
//       WriteCapacityUnits: 1,
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
// {
//   TableDescription: {
//     AttributeDefinitions: [ [Object], [Object] ],
//     TableName: 'test_table_name',
//     KeySchema: [ [Object], [Object] ],
//     TableStatus: 'UPDATING',
//     CreationDateTime: 2022-09-12T05:16:08.289Z,
//     ProvisionedThroughput: {
//       LastIncreaseDateTime: 2022-09-12T05:23:15.453Z,
//       NumberOfDecreasesToday: 0,
//       ReadCapacityUnits: 1,
//       WriteCapacityUnits: 1
//     },
//     TableSizeBytes: 0,
//     ItemCount: 0,
//     TableArn: 'arn:aws:dynamodb:ap-northeast-2:740016600163:table/test_table_name',
//     TableId: 'e28008c6-5cbe-43c7-ae42-64597d8f798e'
//   }
// }
//
//  */

// dynamodb.deleteTable(
//   {
//     TableName: 'test_table_name',
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   },
// )
