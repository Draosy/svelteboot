<script lang='ts'>
    import { onMount } from 'svelte';
    import { Collection, MongoClient } from 'mongodb';
  
    let db;
    let collection: Collection;
    let data: any[];
    let client : MongoClient;
  
    onMount(async () => {
      // MongoDB connection URI
      const uri = process.env['MONGO_URL'];
      const coln = process.env['COL_NAME'];
  
      // Create a new MongoClient
      if(uri!=undefined)
      {
        const client = new MongoClient(uri);
      }

      try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');
  
        // Specify the database and collection
        db = client.db(process.env['DB_NAME']);
        if(coln!=undefined)
        {
          collection = db.collection(coln);
        }
      } finally {
        // Close the client when done
        await client.close();
      }
    });
  
    // Example function to query the database
    async function queryDatabase() {
      const allBlogs = await collection.find().toArray();
      data = allBlogs;
      //const result = await collection.findOne({ /* your query here */ });
      //console.log('Query Result:', result);
    }

    queryDatabase();
  </script>
  
  <main>
    <h1> Mongo Data (MongoDB with Svelte) </h1>
    <!-- <button on:click={queryDatabase}>Query MongoDB</button> -->
    <ul>
        {#each data as item (item._id)}
          <li> {item.title} </li>
          <li> {item.date} </li>
          <li> {item.image} </li>
          <li> {item.para} </li>
          <li> {item.aut} </li>
        {/each}
    </ul>
</main>

<style>
    main {
      text-align: center;
      margin: 2rem;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      margin: 0.5rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  </style>
