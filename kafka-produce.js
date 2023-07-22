const { Kafka } = require('kafkajs');
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:19092'],
  });
  const producer = kafka.producer({
    allowAutoTopicCreation: false,
    transactionTimeout: 30000
});

const run = async () => {
    await produceMessage();
};
const produceMessage = async () => {
    await producer.connect();
    try {
      const topic = 'user-topic'; // Replace with the name of your Kafka topic
      const message = {
        key: '1', // Optional: Replace with your desired message key
        value: JSON.stringify({
            "name": "sai",
            "age": 22,
            "add": {
              "pin": "3423"
            }
          })
      };
  
      await producer.send({
        topic,
        messages: [message],
      });
  
      console.log('Message produced successfully!');
    } catch (error) {
      console.error('Error producing message:', error);
    } finally {
      await producer.disconnect();
    }
  };
run().catch(console.error);