1. to start  docker-compose up -d
2. To stop docker-compose down
3. TOPIC Name: user-topic
4. Upload a schema 
POST http://localhost:8081/subjects/user-topic-value/versions
Content-Type:application/vnd.schemaregistry.v1+json
{
  "schemaType": "JSON",
  "schema":"{\r\n  \"type\": \"object\",\r\n  \"properties\": {\r\n    \"name\": { \"type\": \"string\" },\r\n    \"age\": { \"type\": \"integer\" },\r\n    \"add\": {\r\n      \"type\": \"object\",\r\n      \"properties\": {\r\n        \"pin\": {\r\n          \"type\": \"string\"\r\n        }\r\n      },\r\n      \"required\": [\"pin\"]\r\n    }\r\n  },\r\n  \"required\": [\"name\", \"age\", \"add\"]\r\n}\r\n"
}

5. Verify the schema
GET: http://localhost:8081/subjects/user-topic-value/versions/latest

