<script lang="ts" setup>

const props = defineProps({
    title: {
        type: String,
        required: true  
    },
    // vignette: {
    //     type: String,
    //     required: true
    // },
    date: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
})
</script>

<template>
                <v-card class="mb-3 bg-grey-lighten-6">
                  <div class="card-grid">
                    <div>
                      <v-card-title class="text-wrap text-h6">
                        {{ title }}
                      </v-card-title>
                      <v-card-subtitle>{{ excerpt }}</v-card-subtitle>
                      <p>Le {{ date }}</p>
                      <v-card-actions>
                        <v-btn color="primary" class="ms-2" size="x-small" variant="tonal">Plus d'infos</v-btn>
                        <v-btn color="primary" class="ms-2" size="x-small" variant="outlined">On en discute</v-btn>
                      </v-card-actions>
                    </div>  
                    
                    <v-avatar
                      class="ma-3"
                      size="75"
                      rounded="0"
                    >
                      <!-- <img :src="vignette" cover /> -->
                    </v-avatar>
                  </div>  
                </v-card>
</template>