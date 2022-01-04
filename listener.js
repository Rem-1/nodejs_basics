import FileProcessor from './fileProcessor.js'

function listenerForPrepare(...msg) {
    console.log('"prepare" event has been handled');
    console.log(`Received messages: ${msg.join('.')}`)
}

function listenerForCleanup(...msg) {
    console.log('"cleanup" event has been handled');
    console.log(`Received messages: ${msg.join('.')}`)
}

function listenerForCleanupDel(...msg) {
    console.log(`${msg.join('.')}`)
}


function listenerForEnd(...msg) {
    console.log(`${msg.join('.')}`)
}

function listenerForStreamEvents(...msg) {
    console.log(`${msg.join('.')}`)
}

function listenerForStream(...msg) {
    console.log(`${msg.join('.')}`)
}


function registerAllListeners() {
    FileProcessor.on('prepare', listenerForPrepare);
    FileProcessor.on('cleanup', listenerForCleanup);
    FileProcessor.on('cleanupDel', listenerForCleanupDel);
    FileProcessor.on('end', listenerForEnd);
    FileProcessor.on('eventsInStreamsInFs', listenerForStreamEvents);
    FileProcessor.on('streamsInFs', listenerForStream);
}

export default registerAllListeners