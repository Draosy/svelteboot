<script lang="ts">
    import Navbar from './components/Navbar.svelte'
</script>

<head>
    <title> Andrea Dao - Svelteboot </title>
</head>
<body>
    <Navbar />
    <h2> Andrea's Svelteboot Project </h2>
    <img src = "hoodedgirlbehindcomputer.jpg" width = 20% height = 20% alt = "" class="center">
    <h1> Read some sample blogs using the Navigation Bar! (Andrea being upset at things) </h1>
</body>

<style>
    .center {
        display: block;
        margin-left:auto;
        margin-right:auto;
    }
    body {
        background-color: black;
        margin: 0;
        padding: 0;
        color: white;
    }
    h1 {
        font-family: kanit;
        font-size: 200%;
        text-align: center;
        display: block;
        margin-top: 3%;
        margin-bottom: 3%;
    }
    h2 {
        font-family:papyrus;
        font-size: 700%;
        color:lightblue;
        text-align: center;
        display: block;
        margin-top: 3%;
        margin-bottom: 3%;
    }
</style>