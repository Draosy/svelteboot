import { start_mongo } from "./database/mn";
start_mongo().then((): void => {
    console.log('Mongo started');
}).catch(e => {console.error(e)})
