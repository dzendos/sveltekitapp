<script lang="ts">
    import { onMount } from 'svelte';
    import { formatDistanceToNow } from 'date-fns/esm'; 
  
    type Api = {
        image_title: string,
        image_alt: string,
        image_link: string,
        image_day: number,
        image_month: number,
        image_year: number,
  };
  
    let image_title: HTMLElement;
    let image: HTMLImageElement;
    let image_date: HTMLElement;
    let image_date_ago: HTMLElement;
  
    async function getID() {
      const res = await fetch('https://fwd.innopolis.university/api/hw2?email=e.gerasimov@innopolis.university');
      const json = await res.json();
      return json;
    }
  
    onMount(async () => {
      const id = await getID();
      const id_api = id;
  
      async function getData() {
        const res = await fetch('https://fwd.innopolis.university/api/comic?id=' + id_api);
        const json = await res.json();
        return json;
      }
  
      const data = await getData();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let api: Api = {
        image_title: data.safe_title,
        image_alt: data.alt,
        image_link: data.img,
        image_day: data.day,
        image_month: data.month,
        image_year: data.year,
      }
      const dateString = new Date(Date.UTC(api.image_year, api.image_month, api.image_day, 3, 0, 0));
      const timeAgo = formatDistanceToNow(dateString, { addSuffix: true });
      image.src = api.image_link;
      image.alt = api.image_alt;
      image_title.textContent = api.image_title;
      image_date.textContent = dateString.toLocaleDateString('en-en', options);
      image_date_ago.textContent = timeAgo;
    });
  </script>
  
  <main>
    <div class="content">
        <h1>Information</h1>
        <img class="image" id="img_id" src="" bind:this={image}>
        <p id="image_title" bind:this={image_title}></p>
        <p id="image_date" bind:this={image_date}></p>
        <p id="image_date_ago" bind:this={image_date_ago}></p>
    </div>
  </main>
  
  <style>
    .content {
        padding-top: 100px;
        text-align: center;
    }

    .image {
        width: 300px;
        height: 300px;
        border-radius: 20px;
    }
  </style>