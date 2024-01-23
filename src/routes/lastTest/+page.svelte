<script context="module">
    import db from '../../database/mn'
    export async function load() {
        const plzblogs = await db.collection('Blogs').find().toArray()
        const parsedBlogs = plzblogs.forEach((element) => JSON.parse(element.body))
        return {props: { blogs: parsedBlogs}}
    }
</script>

<script lang="ts">
    import type { PageData } from './$types'
    export let blogs: PageData
    //import { onMount } from 'svelte';
    //import { GET } from './dastuff';

    // onMount(async () => {
    //     try {
    //         dataArray = await GET();
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // });

</script>

<main>
    <h1> I'm gonna end myself </h1>
    <ul>
        <li> WOMP WOMP </li>
        <!-- {#each blogs as item}
        <li> {item.title}</li>
        {/each} -->
    </ul>
</main>

