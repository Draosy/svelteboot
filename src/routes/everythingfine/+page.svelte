<script lang="ts">
    import {get} from '../../routes/api/data'
    let yap: string
    get().then(data => {
        console.log(data);
        let yap = data;
    });
//     export async function load() {
//     const response = await fetch('/api/data');
//     data = await response.json();
// }
</script>

<main>
    <p> {yap} </p>
    <!-- {#each data as document(document.id)}
    <article>
        <h1> {document.title} </h1>
        <h2> {document.date}</h2>
        <p> {document.para}</p>
    </article>
    {/each} -->
</main>