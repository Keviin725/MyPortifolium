<template>
  <q-layout view="hHh lpr lff">
    <!-- Header -->
    <q-header>
      <q-bar class="header-bar">
        <q-icon>
          <q-img src="/vs-code.svg" />
        </q-icon>
        <div class="cursor-pointer non-selectable">
          Arquivo
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Open...</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New</q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable>
                <q-item-section>Preferences</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list>
                    <q-item v-for="n in 3" :key="n" dense clickable>
                      <q-item-section>Submenu Label</q-item-section>
                      <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list>
                          <q-item v-for="n in 3" :key="n" dense clickable>
                            <q-item-section>3rd level Label</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>

              <q-separator />

              <q-item clickable v-close-popup>
                <q-item-section>Quit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <!-- Editar -->
        <div class="q-ml-md cursor-pointer non-selectable">
          Editar
          <q-menu auto-close>
            <q-list dense style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Cut</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Copy</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <!-- Selecao -->
        <div class="q-ml-md cursor-pointer non-selectable">
          Selecao
          <q-menu auto-close>
            <q-list dense style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Cut</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Copy</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <!-- Ver -->
        <div class="q-ml-md cursor-pointer non-selectable">
          Ver
          <q-menu auto-close>
            <q-list dense style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Cut</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Copy</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <!-- Acessar -->
        <div class="q-ml-md cursor-pointer non-selectable">
          Acessar
          <q-menu auto-close>
            <q-list dense style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Cut</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Copy</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <!-- Campo de entrada no centro -->
        <div class="q-ml-md search-bar">
          <q-input dense outlined placeholder="Search..."></q-input>
        </div>

        <!-- Botões à direita -->
        <q-space />
        <q-btn dense flat icon="minimize" />
        <q-btn dense flat icon="crop_square" />
        <q-btn dense flat icon="close" />
      </q-bar>
    </q-header>

    <!-- Sidebar -->
    <div class="layout">
      <div class="sidebar full-height">
        <q-list padding>
          <q-item clickable v-ripple @click="handleItemClick(0)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/files.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(1)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/search.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(2)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/git-merge.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(3)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/debug-alt.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(4)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/extensions.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(5)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/account.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item class="item-with-margin" clickable v-ripple @click="handleItemClick(6)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon size="30px">
                <q-img src="/settings-gear.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- Main content -->
      <div :class="['main-content', {'drawer-open': additionalDrawers.some(isOpen => isOpen)}]">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>

      <!-- Container para os drawers adicionais -->
      <div class="item-drawer-container">
        <ItemDrawer
        v-for="(item, index) in items"
        :key="index"
        :value="additionalDrawers[index]"
        @update:drawer="value => additionalDrawers[index] = value"
        :title="item.title"
        :contentType="item.contentType"
        :content="item.content"
        @open-tab="handleOpenTab"
      />
      </div>
    </div>

    <q-footer class="status-bar">
  <q-bar>
    <!-- Grupo da esquerda -->
    <div class="flex items-center">
      <div class="cursor-pointer non-selectable q-mr-sm">
        <q-icon size="16px"><q-img src="/remote.svg" /></q-icon>
      </div>
      <div class="cursor-pointer non-selectable q-mr-sm">
        <q-icon size="16px"><q-img src="/git-merge.svg" /></q-icon>
      </div>
      <div class="cursor-pointer non-selectable q-mr-sm">
        <span style="font-size: 12px; font-weight: bold">main*</span>
      </div>
      <div class="cursor-pointer non-selectable q-mr-sm">
        <q-icon size="16px"><q-img src="/sync.svg" /></q-icon>
      </div>
      <div class="cursor-pointer non-selectable q-mr-sm">0</div>
    </div>

    <q-space />

    <!-- Grupo da direita -->
    <div class="flex items-center">
      <div class="cursor-pointer non-selectable q-mr-md">
        <span style="font-size: 12px; font-weight: bold">Ln 431, Col 122</span>
      </div>
      <div class="cursor-pointer non-selectable q-mr-sm">
        <span style="font-size: 12px; font-weight: bold">Spaces: 2</span>
      </div>
      <div class="cursor-pointer non-selectable q-mr-md">
        <span style="font-size: 12px; font-weight: bold">UTF-8</span>
      </div>
      <div class="cursor-pointer non-selectable q-mr-md">
        <span style="font-size: 12px; font-weight: bold">LF</span>
      </div>
      <div class="cursor-pointer non-selectable ">
        <span style="font-size: 12px; font-weight: bold">Vue</span>
      </div>
      <div class="cursor-pointer non-selectable">
        <q-icon size="16px"><q-img src="/notifications.svg" /></q-icon>
      </div>
    </div>
  </q-bar>
</q-footer>
  </q-layout>
</template>


<script>
import { ref } from 'vue'
import ItemDrawer from '../components/ItemDrawer.vue'

export default {
  components: {
    ItemDrawer
  },
  setup() {
    // Estado para controlar os drawers adicionais
    const additionalDrawers = ref([false, false, false, false])

    // Dados dos itens do drawer
    const items = ref([
      { title: 'Explorar', contentType: 'text', content: 'Inbox Content' },
      { title: 'Pesquisar', contentType: 'tree', content: [
        { label: 'Controle do Codigo-Fonete', icon: 'folder' },
        { label: 'Child 2', icon: 'folder' },
        // Adicione mais nós conforme necessário
      ] },
      // Adicione mais itens conforme necessário
    ]);

    function handleItemClick(index, node) {
      additionalDrawers.value = additionalDrawers.value.map((_, i) => i === index ? !additionalDrawers.value[i] : false);
      // Lógica adicional ao clicar em um item da árvore, se necessário
    }

    return {
      additionalDrawers,
      handleItemClick,
      items,
      activeTabs: []
    }
  },
  methods:{
    handleOpenTab(item) {
      // Adicionar lógica para abrir uma nova tab com base no item clicado
      console.log('Abrir tab para:', item);
      // Exemplo: adicionar o item a uma lista de tabs ativas
      this.activeTabs.push(item);
      console.log('Tabs ativas:', this.activeTabs);
      // Aqui você pode implementar a lógica específica para abrir uma nova tab no layout principal
    }
  }
}
</script>

<style scoped>
/* Estilos do layout */
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh; /* Ajuste com base na altura do cabeçalho */
  position: relative;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  position: fixed;
  left: 0;
  top: 20px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #0a0a14;
}

.main-content {
  padding: 0;
  flex: 1;
  margin-left: 50px; /* Ajuste para não sobrepor a barra lateral */
  transition: margin-left 0.3s; /* Transição suave ao abrir o drawer */
}

.drawer-open {
  margin-left: 350px; /* Ajuste conforme necessário para empurrar o conteúdo */
}

.item-with-margin {
  margin-top: 150px; /* Ajuste conforme necessário para garantir visibilidade */
}

.item-drawer-container {
  position: fixed;
  left: 50px;
  top: 20px;
  bottom: 0;
  width: 300px; /* Ajuste conforme necessário */
  /**background-color: #1e1e3f; */
  transition: transform 0.3s;
}

.q-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* Garante que o rodapé não sobreponha conteúdo importante */
}

.status-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2b213a;
  color: #b6b2b2;
}

.q-bar--standard {
  padding: 0;
  height: 24px;
}

.header-bar {
  background-color: #2b213a;
  color: #b6b2b2;
}

.q-menu .q-item {
  color: #b6b2b2;
  background-color: #2b213a;
}

q-menu{
  width: 250px;
}

/* Estilos do ItemDrawer */
.item-drawer {
  position: fixed;
  top: 20px;
  left: 50px;
  width: 300px;
  height: 100vh;
  background-color: #2b213a;
  color: #b6b2b2;
}

.item-drawer .q-scroll-area {
  background-color: #2a2139;
}

.cursor-pointer.non-selectable {
  font-size: 14px;
}
.main-content .q-page-container {
  padding: 0;
}
</style>
