<template>
    <!-- <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer> -->

    <v-app-bar 
        dense
        elevation="4"
        color="blue"
        absolute
        elevate-on-scroll
    >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>Cwowd : le WiP</v-app-bar-title>
            <template v-slot:image>
                <v-img
                    src="https://images-pour-strapi.fra1.digitaloceanspaces.com/Lla_revue_des_meeples_3f64f4f69e.jpg"
                    gradient="to top right, rgba(19,84,122,.6), rgba(128,208,199,.6)"
                ></v-img>
            </template>
            <!-- <template v-slot:prepend> -->
            <!-- </template> -->
        <!-- <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
    </v-app-bar>
</template>