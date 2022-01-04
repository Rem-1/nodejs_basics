'use strict'

import fs from 'fs'
import pkg from 'lodash'
import fileProcessor from './fileProcessor.js'
const { isEqual, difference } = pkg
const resources = JSON.parse(fs.readFileSync('./resources.json'))


export default function prepareWorkspace() {
    fileProcessor.emit('prepare', '-> Prepare')
    checkGitignore();
    checkDataFolder();
    checkOutputFolder();
    createOutputFolder();
}

function checkGitignore() {
    if (!fs.existsSync('./.gitignore')) {
        throw new Error("No '.gitignore' file");
    }
    console.log('  -> .gitignore folder exists');
}

function checkDataFolder() {
    if (!fs.existsSync('./data')) {
        throw new Error("No 'data' folder");
    }
    console.log('  -> ./data folder exists');

    const existFiles = fs.readdirSync('./data');
    if (!isEqual(existFiles, resources.requiredFiles)) {
        throw new Error(`Not enough files in './data' folder: missed '${difference(resources.requiredFiles, existFiles)}' file(s)`);
    }
    console.log('  -> files in ./data folder exists');
}

function checkOutputFolder() {
    if (fs.existsSync('./output')) {
        throw new Error("Output folder is here, but need to be removed (use cleanup script)")
    }
    console.log("  -> There is no 'output' folder, proceed ...")
}

function createOutputFolder() {
    fs.mkdirSync("./output")
    console.log("  -> Folder 'output' created!")
}