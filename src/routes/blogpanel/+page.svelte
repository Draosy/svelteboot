<script lang="ts">
    import Page from '../+page.svelte';
  import Blog from '../components/Blog.svelte';
  import {blogs} from '../../blogarray';
    let active = 'one'
</script>

<main>
  <body>
    <p> Basically Blog Panel has buttons to switch between the blog components on a singular page rather than rerouting to different pages every time. </p>
  </body>
  <h3>
    <button class = "button-3" on:click={() => (active = 'one')}> Blog 1 </button>
    <button class = "button-3" on:click={() => (active = 'two')}> Blog 2 </button>
    <button class = "button-3" on:click={() => (active = 'three')}> Blog 3 </button>
</h3>
    {#if active === 'one'}
    <Blog {...blogs[0]}/>
    {/if}
    {#if active === 'two'}
    <Blog {...blogs[1]}/>
    {/if}
    {#if active === 'three'}
    <Blog {...blogs[2]}/>
    {/if}

</main>

<style>

p {
  font-family: serif;
  font-size:large;
  color:rgba(152, 227, 250, 0.897);
  text-align: center;
  display:block;
}

h3 {
    padding-top: 5px;
    padding-left: 5px;
    display: flex;
    justify-content: center;
}

.button-3 {
  appearance: none;
  background-color: #6d6d6d;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  margin-right: 10px;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #8b8b8b;
}

.button-3:focus {
  box-shadow: rgba(155, 155, 155, 0.4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #cccccc;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #535353;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>