<script>
import DefaultAvatar from '@/assets/default-avatar.jpg';
</script>

<template>
  <nav class="w-full text-white px-36 py-4 flex flex-col">
    <div class="flex items-center justify-between shadow">

      <div class="flex items-center gap-2 font-semibold text-3xl">
        
        <img class="h-20" src="@/assets/PdiLogo.png" alt="">
      </div>
      
      <div class="flex items-center gap-6 text-gray-300">
        <button class="user-profile">
          <img class="h-8 w-8 rounded-full" src="@/assets/default-avatar.jpg" alt="Avatar padrão">
        </button>
        
        
        
      </div>
      
    </div>

    <div class="divider bg-[#1A2937] h-[1px] mt-2"></div>

    <div class="flex flax-row items-start gap-8 text-gray-300 font-semibold text-md mt-4">
      <button class="hover:text-white">Meus PDI's</button>
      <button class="hover:text-white">Novo PDI</button>
      <button class="hover:text-white">Sobre</button>
      
    </div>
    
  </nav>
</template>
