const { Kafka } = require('kafkajs');
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:19092'],
  });
  const admin = kafka.admin();
  const run = async () => {
    
//await createTopic();
  await listTopics();
  };
  const createTopic = async () => {
    await admin.connect();
    const topic = 'user-topic'; // Replace with the name of your desired topic
    const numPartitions = 3; // Replace with the desired number of partitions
    const replicationFactor = 1; // Replace with the desired replication factor
    const topicConfig = {
        topics: [
          {
            topic,
            numPartitions,
            replicationFactor,
          },
        ],
      };
    try {
      await admin.createTopics(topicConfig);
      console.log(`Topic "${topic}" created successfully!`);
    } catch (error) {
      console.error(`Error creating topic "${topic}":`, error);
    } finally {
      await admin.disconnect();
    }
  };

  const listTopics = async () => {
    await admin.connect();
    try {
      const topics = await admin.listTopics();
      console.log('Topics:', topics);
    } catch (error) {
      console.error('Error listing topics:', error);
    } finally {
      await admin.disconnect();
    }
  };
  run().catch(console.error);
