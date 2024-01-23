<script lang="ts">
    import { blogs } from '../../blogarray';
    //import clientPromise from '../../lib/mongodb-client'
    let data = blogs;

    interface MyRequest {
      title: string;
      date: string;
      image: string;
      para: string;
      aut: string;
    }

    // export async function post (request: MyRequest) {
    //   //data.push(request);
    //   const dbConnection = await clientPromise;
    //   const db = dbConnection.db();
    //   const collection = db.collection('Blogs');
    //   const todo = JSON.parse(request.para);
    //   const newTodo = await collection.insertOne(todo);
    //   return {
    //       status: 200,
    //       body: {
    //           newTodo
    //       }
    //   }
    // }

    // item._id
</script>

<main>
    <h1> Mongo Data </h1>
    <ul>
        {#each data as item}
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
  