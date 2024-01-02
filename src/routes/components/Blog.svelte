<script lang="ts">
    import Navbar from './Navbar.svelte'
    export let title = 'Title'
    export let date = 'Date'
    export let image = ""
    export let para = 'Paragraph'
    export let aut = 'Author'
</script>

<head>
    <title>
        {title}
    </title>
</head>
<body>
    <Navbar />
    <h1 style = "font-family:serif; font-size: 500%;"> {title} </h1>
    <h2 style = "font-family:serif; font-size: 200%;"> by {aut} </h2>
    <h2 style = "font-family:serif; font-size: 200%;"> {date} </h2>
    <img src = {image} width = 20% height = 20% alt = "">
    <p> {para}</p>
</body>

<style>
    h1 {
        text-align: center;
        display:block;
        margin-bottom: 0%;
    }
    h2 {
        text-align: center;
        display:block;
        padding-top:0%;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
    }
    p {
        text-align: center;
        display:block;
        padding-top: 2%;
        font-size: 200%;
    }
</style>