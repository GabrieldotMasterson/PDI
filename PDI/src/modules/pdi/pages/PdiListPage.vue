<script setup>
import { ref } from 'vue'

// Mock de dados - substitua pela sua store futuramente
const pdis = ref([
  {
    id: 1,
    title: "Melhorar comunicação",
    subtitle: "ser capaz de lecionar aulas",
    description: "Aprimorar minhas habilidades de comunicação para transmitir conhecimento de forma eficaz.",
    status: "em_andamento",
    progress: 65,
    metrics: {
      metas: 3,
      tarefas: 20,
      projetos: 2,
      semanas: 4
    },
    rating: 5,
    lastUpdate: "2024-01-15",
    category: "Comunicação",
    priority: "alta"
  },
  {
    id: 2,
    title: "Git na Prática",
    subtitle: "Gerencie seu Código como um Profissional",
    description: "Controle de versão, branches, merge e workflows profissionais com Git.",
    status: "concluido",
    progress: 80,
    metrics: {
      metas: 12,
      tarefas: 15,
      projetos: 1,
      semanas: 1
    },
    rating: 5,
    lastUpdate: "2024-01-10",
    category: "Ferramentas",
    priority: "media"
  },
  {
    id: 3,
    title: "Testando Seu Código",
    subtitle: "Qualidade e Confiabilidade em Desenvolvimento",
    description: "Implemente testes unitários, integração e TDD em seus projetos.",
    status: "planejado",
    progress: 0,
    metrics: {
      metas: 20,
      tarefas: 25,
      projetos: 3,
      semanas: 3
    },
    rating: 4,
    lastUpdate: "2024-01-05",
    category: "Qualidade",
    priority: "baixa"
  }
])

function criarNovoPDI() {
  console.log('Criar novo PDI')
  // Implementar navegação para criação
}

function abrirPDI(id) {
  console.log('Abrir PDI:', id)
  // Implementar navegação para detalhes
}

function editarPDI(id) {
  console.log('Editar PDI:', id)
  // Implementar navegação para edição
}

function getStatusColor(status) {
  const colors = {
    em_andamento: 'border-l-green-500',
    concluido: 'border-l-blue-500',
    planejado: 'border-l-yellow-500'
  }
  return colors[status] || ''
}

function getStatusText(status) {
  const texts = {
    em_andamento: 'Em Andamento',
    concluido: 'Concluído',
    planejado: 'Planejado'
  }
  return texts[status] || ''
}

function getStatusBadgeColor(status) {
  const colors = {
    em_andamento: 'bg-green-100 text-green-800',
    concluido: 'bg-blue-100 text-blue-800',
    planejado: 'bg-yellow-100 text-yellow-800'
  }
  return colors[status] || ''
}
</script>

<template>
  <section class="w-full max-w-6xl h-auto mx-auto px-6 py-8 bg-[#272C2F] mt-6 rounded-2xl shadow-lg shadow-black/30">
    <!-- Cabeçalho -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white">
        📘 Meus Planos de Desenvolvimento (PDI)
      </h1>
      <p class="text-gray-300 mt-2">
        Acompanhe seu progresso e gerencie seus objetivos de desenvolvimento.
      </p>
      
      <!-- Botão Criar Novo -->
      <div class="flex justify-end mt-6">
        <button
          @click="criarNovoPDI"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Criar Novo PDI
        </button>
      </div>
    </div>

    <!-- Estatísticas -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-[#2F3437] p-4 rounded-lg border border-white/5">
        <p class="text-gray-400 text-sm">Planos Ativos</p>
        <p class="text-2xl font-bold text-white">
          {{ pdis.filter(p => p.status === 'em_andamento').length }}
        </p>
      </div>
      
      <div class="bg-[#2F3437] p-4 rounded-lg border border-white/5">
        <p class="text-gray-400 text-sm">Concluídos</p>
        <p class="text-2xl font-bold text-white">
          {{ pdis.filter(p => p.status === 'concluido').length }}
        </p>
      </div>
      
      <div class="bg-[#2F3437] p-4 rounded-lg border border-white/5">
        <p class="text-gray-400 text-sm">Progresso Médio</p>
        <p class="text-2xl font-bold text-white">
          {{ Math.round(pdis.reduce((acc, p) => acc + p.progress, 0) / pdis.length) }}%
        </p>
      </div>
    </div>

    <!-- Lista de PDIs -->
    <div class="space-y-6">
      <div
        v-for="pdi in pdis"
        :key="pdi.id"
        :class="['bg-[#2F3437] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300', getStatusColor(pdi.status)]"
        style="border-left-width: 4px;"
      >
        <!-- Header do Card -->
        <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div class="flex-1">
            <!-- Status e Categoria -->
            <div class="flex items-center gap-3 mb-3">
              <span 
                :class="['px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider', getStatusBadgeColor(pdi.status)]"
              >
                {{ getStatusText(pdi.status) }}
              </span>
              <span class="text-sm text-gray-400">•</span>
              <span class="text-sm text-gray-300">{{ pdi.category }}</span>
            </div>
            
            <!-- Título e Subtítulo -->
            <h2 class="text-xl font-bold text-white mb-2">{{ pdi.title }}</h2>
            <p class="text-lg text-gray-300 mb-1">{{ pdi.subtitle }}</p>
            <p class="text-gray-400 text-sm mb-4">{{ pdi.description }}</p>
          </div>
          
          <!-- Progresso Circular -->
          <div class="relative w-16 h-16 mb-4 md:mb-0 md:ml-4">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <!-- Fundo -->
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
                class="text-gray-600"
              />
              <!-- Progresso -->
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
                :stroke-dasharray="251.2"
                :stroke-dashoffset="251.2 * (1 - pdi.progress / 100)"
                class="text-blue-500 transition-all duration-1000"
                stroke-linecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-sm font-bold text-white">{{ pdi.progress }}%</span>
            </div>
          </div>
        </div>

        <!-- Métricas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div class="text-center p-3 bg-[#272C2F] rounded-lg">
            <p class="text-2xl font-bold text-blue-400">{{ pdi.metrics.metas }}</p>
            <p class="text-xs text-gray-400 mt-1">metas</p>
          </div>
          <div class="text-center p-3 bg-[#272C2F] rounded-lg">
            <p class="text-2xl font-bold text-green-400">{{ pdi.metrics.tarefas }}</p>
            <p class="text-xs text-gray-400 mt-1">tarefas</p>
          </div>
          <div class="text-center p-3 bg-[#272C2F] rounded-lg">
            <p class="text-2xl font-bold text-purple-400">{{ pdi.metrics.projetos }}</p>
            <p class="text-xs text-gray-400 mt-1">projetos</p>
          </div>
          <div class="text-center p-3 bg-[#272C2F] rounded-lg">
            <p class="text-2xl font-bold text-orange-400">{{ pdi.metrics.semanas }}</p>
            <p class="text-xs text-gray-400 mt-1">semanas</p>
          </div>
        </div>

        <!-- Rating e Última Atualização -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <div class="flex">
              <svg 
                v-for="star in 5" 
                :key="star"
                class="w-4 h-4"
                :class="star <= pdi.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-gray-300 text-sm">{{ pdi.rating }}.0</span>
          </div>
          
          <div class="flex items-center gap-2 text-gray-400 text-xs">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Atualizado em {{ pdi.lastUpdate }}</span>
          </div>
        </div>

        <!-- Barra de Progresso e Botões -->
        <div class="flex flex-col md:flex-row md:items-center gap-4 pt-4 border-t border-white/10">
          <!-- Barra de Progresso -->
          <div class="flex-1">
            <div class="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progresso Geral</span>
              <span>{{ pdi.progress }}%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                class="h-full bg-blue-500 transition-all duration-1000"
                :style="`width: ${pdi.progress}%`"
              ></div>
            </div>
          </div>
          
          <!-- Botões de Ação -->
          <div class="flex gap-2">
            <button
              @click="abrirPDI(pdi.id)"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Abrir
            </button>
            <button
              @click="editarPDI(pdi.id)"
              class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensagem quando não há PDIs -->
    <div v-if="pdis.length === 0" class="text-center py-8">
      <div class="bg-[#2F3437] rounded-xl p-8 border border-white/5">
        <svg class="w-12 h-12 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h3 class="text-lg font-bold text-gray-300 mb-2">Nenhum PDI encontrado</h3>
        <p class="text-gray-400 mb-6 text-sm">Comece criando seu primeiro Plano de Desenvolvimento Individual</p>
        <button
          @click="criarNovoPDI"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Criar Primeiro PDI
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Animações suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>