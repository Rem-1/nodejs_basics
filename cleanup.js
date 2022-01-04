import fs from 'fs'
import fileProcessor from'./fileProcessor.js'

export default function cleanup () {
    fileProcessor.emit('cleanup', '-> Cleanup')
    if (fs.existsSync('./output')) {
        fs.rmSync('./output', { recursive: true })
        fileProcessor.emit('cleanupDel', '  -> ./output deleted!')
    }
}