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
      case "GET /itemsbytype/{id}":
        body = await dynamo.send(new ScanCommand({ TableName: tableName, FilterExpression: "contains(#columnname, :value)", ExpressionAttributeNames: { "#columnname": "type" }, ExpressionAttributeValues: { ":value": event.pathParameters.id } }));
        body = body.Items;
        break;
      case "GET /items":
        body = await dynamo.send(new ScanCommand({ TableName: tableName, FilterExpression: "contains(#name, :value)", ExpressionAttributeNames: { "#name": "type" }, ExpressionAttributeValues: { ":value": "product" } }));
        body = body.Items;
        break;
      case "GET /timeline":
        body = await dynamo.send(new ScanCommand({ TableName: tableName, FilterExpression: "contains(#type, :timeline)", ExpressionAttributeNames: { "#type": "type" }, ExpressionAttributeValues: { ":timeline": "timeline" } }));
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
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    statusCode = 200;
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
