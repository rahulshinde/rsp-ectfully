<template>
  <div class="flex flex-col items-center text-sans justify-between p-4 bg-bg bg-dirt bg-blend-darken bg-4 text-fg min-h-[100svh]">
    <main>
      <header class="font-semibold text-center mb-16 md:mb-0">
        <h1 class="uppercase text-md font-black">
          <span class="text-accent1">R</span>e<span class="text-accent2">S</span><span class="text-accent3">P</span>ectfully
        </h1>
        <h2>
          a project by <a class="underline hover:text-[red]" href="https://r-s-s.net" target="_blank">ākash</a>, <a class="underline hover:text-[red]" href="https://soundcloud.com/djjjjjjjjjj1" target="_blank">faith</a>, & yixiao
        </h2>
      </header>
      <NuxtPage />
    </main>

    <footer class="mt-16 text-xxs text-center flex flex-col items-center font-semibold">
      <section class="px-16 flex mb-2 flex-wrap justify-center items-center max-w-full">
        <LogoWeLoveTek class="h-8 m-2 w-auto"/>
        
        <LogoNoHindi class="h-12 m-2 w-auto"/>

        <LogoLingua class="h-8 m-2 w-auto"/>

        <LogoRanger class="h-16 m-2 w-auto"/>
        		
        <LogoFtps class="h-8 m-2 w-auto"/>
				
				<LogoGichter class="h-24 m-2 w-auto"/>

        <LogoFTL class="h-8 m-2 w-auto"/>
					
		  </section>

      <p class="flex font-serif font-bold italic text-[0.85rem] self-start max-w-[100svw] whitespace-nowrap overflow-hidden">
       <span class="animate-slide">* Rap Straight Pain * Rahul Spanish Potential * Real Spiritual Pressure * Reiki Surge Protector * Reishi Supplement Powder * Rental Spirit Pacemaker * Ren Shin Pai * Retard Super Power * Road Side Picnic </span>
       <span class="animate-slide">* Rap Straight Pain * Rahul Spanish Potential * Real Spiritual Pressure * Reiki Surge Protector * Reishi Supplement Powder * Rental Spirit Pacemaker * Ren Shin Pai * Retard Super Power * Road Side Picnic </span>
       <span class="animate-slide">* Rap Straight Pain * Rahul Spanish Potential * Real Spiritual Pressure * Reiki Surge Protector * Reishi Supplement Powder * Rental Spirit Pacemaker * Ren Shin Pai * Retard Super Power * Road Side Picnic </span>
      </p>
      <p class="mt-4">
        learn ur local linguá
        <br>
        b4 it's 2 late
      </p>			
      <p class="mt-4">
        <span id="year"></span>
        {{year}}
        <3
      </p>
    </footer>
  </div>
</template>


<script setup>

// get year today
  const year = computed(()=>{
    let date = new Date(Date.now());
    return date.getFullYear()
  }) 
</script>