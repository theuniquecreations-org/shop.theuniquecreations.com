import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, PutCommand, GetCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "ssn-qa";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "DELETE /items/{id}":
        await dynamo.send(
          new DeleteCommand({
            TableName: tableName,
            Key: {
              id: event.pathParameters.id,
            },
          })
        );
        body = `Deleted item ${event.pathParameters.id}`;
        break;
      case "GET /items/{id}":
        body = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              id: event.pathParameters.id,
            },
          })
        );
        body = body.Item;
        break;
      case "GET /items":
        body = await dynamo.send(new ScanCommand({ TableName: tableName, FilterExpression: "contains(#name, :value)", ExpressionAttributeNames: { "#name": "type" }, ExpressionAttributeValues: { ":value": "product" } }));
        body = body.Items;
        break;
      case "GET /timeline/{id}":
        body = await dynamo.send(new ScanCommand({ TableName: tableName, FilterExpression: "contains(#name, :value)", ExpressionAttributeNames: { "#name": "website" }, ExpressionAttributeValues: { ":value": event.pathParameters.id } }));
        body = body.Items;
        break;
      case "PUT /items":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: requestJSON,
          })
        );

        body = `Put item ${requestJSON.id}`;
        break;
      case "PUT /timeline":
        let requesttimelineJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: requesttimelineJSON,
          })
        );
        statusCode = 200;
        body = `Put item ${requesttimelineJSON.id}`;
        break;
      case "GET /blog":
        body = await dynamo.send(new ScanCommand({ TableName: tableName, FilterExpression: "contains(#type, :blog)", ExpressionAttributeNames: { "#type": "type" }, ExpressionAttributeValues: { ":blog": "blog" } }));
        body = body.Items;
        break;
      case "GET /blog/{id}":
        body = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              id: event.pathParameters.id,
            },
          })
        );
        body = body.Item;
        break;
      case "PUT /blog":
        let requestJSONblog = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: requestJSONblog,
            // Item: {
            //   id: requestJSON1.id,
            //   title: requestJSON1.title,
            //   slug: requestJSON1.slug,
            //   text1: requestJSON1.text1,
            //   text2: requestJSON1.text2,
            //   text3: requestJSON1.text3,
            //   text4: requestJSON1.text4,
            //   text5: requestJSON1.text5,
            //   category: requestJSON1.category,
            //   image: requestJSON1.image,
            //   date: requestJSON1.date,
            //   author: requestJSON1.author,
            //   isactive: requestJSON1.isactive,
            //   type: "blog",
            // },
          })
        );

        body = `Put blog ${requestJSON1.id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
