<script lang="ts">
    import Blog from '../components/Blog.svelte';
    import {blogs} from '../../blogarray';
</script>

<main>
    <Blog {...blogs[1]}/>
</main>