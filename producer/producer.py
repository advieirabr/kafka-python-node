from kafka import KafkaProducer
import random
from time import sleep
import datetime

# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:29092',
                         value_serializer=lambda v: str(v).encode('utf-8'))

# Call the producer.send method with a producer-record
print("Ctrl+c to Stop")
contador = 0
inicio = datetime.datetime.now()

while contador < 4900:
    contador += 1
    print('contador: {}'.format(contador))
    valor = random.randint(1, 6)
    print('sorteio: {}'.format(valor))
    producer.send('kafka-python-topic', valor)
    # if (valor > 3):
    sleep(0.0001)

agora = datetime.datetime.now()
print(agora)
print('{} segundos'.format((agora - inicio).total_seconds()))
