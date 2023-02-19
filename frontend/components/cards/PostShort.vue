<script lang="ts" setup>

const props = defineProps({
    title: {
        type: String,
        required: true  
    },
    image: {
        type: String,
        required: false,
        default: ''
    },
    date: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: true
    },
})

// const $img = useImage()
// $img('vignette.attributes.url')


// const smallImage = vignette.attributes.formats.small.url
</script>

<template>
    <v-card>
        <div class="card-grid">
            <div>
                <v-card-title>
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
                      size="75"
                      rounded="0"                      
            >
                <nuxt-img :src="image" 
                    fit="cover"
                    width="75"
                    height="75"
                    class="rounded-s"
                    
                />
            </v-avatar>
        </div>
        <!-- <v-img :src="require(`${image}`)" /> -->
    </v-card>
        <!-- <p>{{ vignette.attributes.url }}</p> -->
</template>