const Kafka = require('no-kafka');
var DateDiff = require('date-diff');

var intervalo = [0, 0, 0, 0, 0, 0];
var inicio, agora;

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:29092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        
        var value = parseInt(m.message.value.toString('utf8'));
        // console.log('valor capturado: ' + value);
        intervalo[value-1] = intervalo[value-1] + 1; 
        console.log(intervalo);
        var total = intervalo.reduce((total, numero) => total + numero, 0);
        // console.log('Número de capturas: ' + total)
        
        // if (total == 1) {
        //     inicio = new Date();
        // }

        // if (total == 2000) {
        //     agora = new Date();
        //     var diff = new DateDiff(agora, inicio);
        //     console.log(diff.seconds() + ' segundos');
        // }
        
    });
};



// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('kafka-python-topic', 0, {time: Kafka.EARLIEST_OFFSET}, data);
});