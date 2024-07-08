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
              <q-icon  size="30px" >
                <q-img src="/files.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(1)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon  size="30px" >
                <q-img src="/search.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(2)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon  size="30px" >
                <q-img src="/git-merge.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(3)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon  size="30px" >
                <q-img src="/debug-alt.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleItemClick(3)">
            <q-item-section avatar class="q-pa-sm item-section">
              <q-icon  size="30px" >
                <q-img src="/extensions.svg" />
              </q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- Main content -->
      <div class="main-content">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>

      <!-- Reusing ItemDrawer component for each item -->
      <div class="item-drawer-container">
        <ItemDrawer v-for="(item, index) in items"
                    :key="index"
                    :value="additionalDrawers[index]"
                    @update:drawer="value => additionalDrawers[index] = value"
                    :title="item.title">
          <p>{{ item.content }}</p>
        </ItemDrawer>
      </div>
    </div>

    <!-- Status Bar -->
    <q-footer class="status-bar">
      <q-bar>
        <div class="cursor-pointer non-selectable">
          <q-icon size="16px"><q-img src="/git-merge.svg"/></q-icon>
          main
          <q-icon size="16px"><q-img src="/refresh.svg"/></q-icon>
        </div>

        <div class="q-ml-md cursor-pointer non-selectable">
          Edit
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

        <q-space />

        <q-btn dense flat icon="crop_square" />
        <q-btn dense flat icon="close" />
        <q-icon size="16px"><q-img src="/bell-dot.svg"/></q-icon>
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
    const additionalDrawers = ref([false, false, false, false])

    const items = ref([
      { title: 'Inbox', content: 'Inbox Content' },
      { title: 'Star', content: 'Star Content' },
      { title: 'Send', content: 'Send Content' },
      { title: 'Drafts', content: 'Drafts Content' }
    ])

    function handleItemClick(index) {
      additionalDrawers.value = additionalDrawers.value.map((_, i) => i === index ? !additionalDrawers.value[i] : false)
    }

    return {
      additionalDrawers,
      handleItemClick,
      items
    }
  }
}
</script>

<style scoped>
/* Layout Styles */
.layout {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 30px); /* Ajustar baseado na altura do header */
  top: 30px;
  position: relative;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;

  left: 0;
  top: 30px;
  bottom: 0;

  background-color: #0a0a14;
}

.main-content {
  flex: 1;
  margin-left: 50px; /* Ajusta para não sobrepor a barra lateral */
  padding: 20px; /* Ajusta conforme necessário */
}

.item-drawer-container {
  position: fixed;
  top: 30px;
  right: 20px;
  width: 300px;
  background-color: #1e1e3f;
  z-index: 1000;
  color: #c3f9ff;
}

.status-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1e1e3f;
  color: #c3f9ff;
}

.header-bar {
  background-color: #1e1e3f;
  color: #c3f9ff;
}

.q-menu .q-item {
  color: #c3f9ff;
}

/* ItemDrawer Styles */
.item-drawer {
  position: fixed;
  top: 30px;
  left: 50px;
  width: 300px;
  height: 100vh;
  background-color: #1e1e3f;
  z-index: 1000;
  color: #c3f9ff;
}

.item-drawer .q-scroll-area {
  background-color: #2a2139;
}
</style>
