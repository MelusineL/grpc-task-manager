<script lang="ts">

    let name = 'test23';

    let list = ['a', 'b', 'c'];
    
</script>

<h1>Test page : {name}</h1>

<ul>
    {#each list as l}
    <li>
        <button on:click={() => name = l}>
            {l}
        </button>
    </li>
    {/each}
</ul>