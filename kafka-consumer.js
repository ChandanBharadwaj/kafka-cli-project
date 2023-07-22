const { Kafka } = require('kafkajs');
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:19092'],
  });

const consumer = kafka.consumer({ groupId: 'my-group' });

const consumeMessages = async () => {
    await consumer.connect();
    const topic = 'user-topic'; // Replace with the name of your Kafka topic
    await consumer.subscribe({ topic });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const messageValue = message.value.toString();
        console.log(`Received message from topic ${topic} on partition ${partition}: ${messageValue}`);
      },
    });
  };
  
  consumeMessages().catch(console.error);