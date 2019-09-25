<template>
    <section class="app-main">
        <div class="x-hidden" style="height: 100%;">
            <transition name="fade-transform" mode="out-in">
                <keep-alive :include="cachedViews">
                    <router-view :key="key"/>
                </keep-alive>
            </transition>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            cachedViews() {
                return this.$store.state.tagsView.cachedViews
            },
            key() {
                return this.$route.fullPath
            }
        }
    }
</script>

<style scoped>
    .app-main {
        /*84 = navbar + tags-view = 50 +34 */
        height: calc(100vh - 180px);
        overflow: auto;
        width: 100%;
        position: relative;
    }
</style>
