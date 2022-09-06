<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, onIonViewWillEnter } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { useAuthenticationStore } from "@/store/auth/authentication.js";
import { useRouter } from "vue-router";

const store = useAuthenticationStore();
const router = useRouter();

onIonViewWillEnter(() => {
    store.checkAuthenticationStatus().then(() => {
        if (!store.isAuthenticated) {
            router.push("/login");
        }
    });
});
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tab 3</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tab 3</ion-title>
                </ion-toolbar>
            </ion-header>

            <ExploreContainer name="Tab 3 page" />
        </ion-content>
    </ion-page>
</template>
