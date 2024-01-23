import db from '../../database/mn'
export async function GET() {  
    try {
        const plzblogs = await db.collection('Blogs').find().toArray()  
    return {    
        status: 200,    
        body: { plzblogs }  
    }
    } catch (error) {
        console.log(error);
    }
}