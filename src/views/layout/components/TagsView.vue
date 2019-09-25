<template>
    <div class="tags-view-container">
        <scroll-pane ref="scrollPane" class="tags-view-wrapper">
            <router-link
                    v-for="tag in visitedViews"
                    ref="tag"
                    :class="isActive(tag)?'active':''"
                    :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                    :key="tag.path"
                    tag="span"
                    class="tags-view-item"
                    @click.middle.native="closeSelectedTag(tag)"
                    @contextmenu.prevent.native="openMenu(tag,$event)">
                {{ generateTitle(tag.title) }}
                <span v-if="visitedViews.length>1" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
                <span style="display: inline-block;background: inherit;width: 10px;height: 8px;" v-if="visitedViews.length==1"></span>
            </router-link>
        </scroll-pane>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>
            <li @click="closeSelectedTag(selectedTag)">{{ $t('tagsView.close') }}</li>
            <li @click="closeOthersTags">{{ $t('tagsView.closeOthers') }}</li>
            <li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>
        </ul>
    </div>
</template>

<script>
    import ScrollPane from '@/components/ScrollPane/index.vue'
    import {generateTitle} from '@/utils/i18n'
    export default {
        name: "TagsView",
        data() {
            return {
                visible: false,
                top: 0,
                left: 0,
                selectedTag: {},
                refsTag: [],
            }
        },
        components: {
            ScrollPane,
        },
        computed: {
            visitedViews() {
                return this.$store.state.tagsView.visitedViews;
            }
        },
        mounted() {
            // console.log(this.$refs);
            // console.log(this.$refs.tag);
            this.refsTag = this.$refs.tag;
        },
        methods: {
            generateTitle,
            isActive(route) {
                return route.path === this.$route.path
            },
            addViewTag() {
                const {name} = this.$route;
                if (name) {
                    this.$store.dispatch('addView', this.$route);
                }
                return false;
            },
            moveToCurrentTag() {
                //const tags = this.$refs.tag;
                setTimeout(()=>{
                    const tags = this.$refs.tag;
                    //console.log(this.$refs.tag);
                    this.$nextTick(() => {
                        for (const tag of tags) {
                            if (tag.to.path === this.$route.path) {
                                this.$refs.scrollPane.moveToTarget(tag);
                                // when query is different then update
                                if (tag.to.fullPath !== this.$route.fullPath) {
                                    this.$store.dispatch('updateVisitedView', this.$route)
                                }
                                break;
                            }
                        }
                    });
                },0)
                // this.$nextTick(() => {
                //     for (const tag of tags) {
                //         if (tag.to.path === this.$route.path) {
                //             this.$refs.scrollPane.moveToTarget(tag);
                //             // when query is different then update
                //             if (tag.to.fullPath !== this.$route.fullPath) {
                //                 this.$store.dispatch('updateVisitedView', this.$route)
                //             }
                //             break;
                //         }
                //     }
                // });
            },
            refreshSelectedTag(view) {
                this.$store.dispatch('delCachedView', view).then(() => {
                    const {fullPath} = view
                    this.$nextTick(() => {
                        this.$router.replace({
                            path: '/redirect' + fullPath
                        })
                    })
                })
            },
            closeSelectedTag(view) {
                this.$store.dispatch('delView', view).then(({ visitedViews }) => {
                    console.log(view);
                    console.log(visitedViews);
                    if (this.isActive(view)) {
                        const latestView = visitedViews.slice(-1)[0]
                        if (latestView) {
                            this.$router.push(latestView)
                        } else {
                            this.$router.push('/')
                        }
                    }
                })
            },
            closeOthersTags() {
                this.$router.push(this.selectedTag)
                this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
                    this.moveToCurrentTag()
                })
            },
            closeAllTags() {
                this.$store.dispatch('delAllViews')
                this.$router.push('/')
            },
            openMenu(tag, e) {
                const menuMinWidth = 105
                const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
                const offsetWidth = this.$el.offsetWidth // container width
                const maxLeft = offsetWidth - menuMinWidth // left boundary
                const left = e.clientX - offsetLeft + 15 // 15: margin right

                if (left > maxLeft) {
                    this.left = maxLeft
                } else {
                    this.left = left
                }
                this.top = e.clientY-80;
                if(this.visitedViews.length > 1){
                    this.visible = true
                    this.selectedTag = tag
                }

            },
            closeMenu() {
                this.visible = false
            }

        },
        watch: {
            $route() {
                this.addViewTag()
                this.moveToCurrentTag()
            },
            visible(value) {
                if (value) {
                    document.body.addEventListener('click', this.closeMenu)
                } else {
                    document.body.removeEventListener('click', this.closeMenu)
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../../style/variables';
</style>

