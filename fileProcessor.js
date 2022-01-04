'use strict'

import EventEmitter from 'events'
EventEmitter.captureRejections = true;
import fs from "fs"

class FileProcessor extends EventEmitter {
    constructor(props) {
        super(props);
    }

    run() {
        this.dealWithEventsInStreamsInFs()
        this.dealWithStreamsInFs()
    }

    dealWithEventsInStreamsInFs() {
        this.emit('eventsInStreamsInFs', "  -> dealWithEventsInStreamsInFs function")
        const readStream = fs.createReadStream('./data/txtData.txt', 'utf-8');
        const writeStream = fs.createWriteStream(`./output/toOutput.txt`)
        readStream.pipe(writeStream)
        
        let chunkCount = 0

        readStream.on("data", () => {
            chunkCount++
            this.emit('eventsInStreamsInFs', `  -> Chunk # ${chunkCount}`)
        })
        
        readStream.on("end", () => {
            this.emit('end', `  -> Number of chunks = ${chunkCount}`)
        })

        console.log("Main is finished, but streams are still working");
    }

    dealWithStreamsInFs() {
        this.emit('streamsInFs', "  -> dealWithStreamsInFs function")
        const readStream = fs.createReadStream('./data/pdfData.pdf', "utf-8");
        const writeStream = fs.createWriteStream('./output/toOutput.pdf');
        readStream.pipe(writeStream)
    }
}

export default new FileProcessor();