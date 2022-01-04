import registerAllListeners from'./listener.js'
import cleanup from'./cleanup.js'
import prepare from'./prepare.js'
import fileProcessor from'./fileProcessor.js'

registerAllListeners();
cleanup();
prepare();
fileProcessor.run();