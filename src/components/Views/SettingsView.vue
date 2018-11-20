<template>
<div class="main padding-limiter">
    <div class="double-column">
        <div class="panel-narrow">
            <UserInfoPanel />
        </div>
    </div>
    
</div>
</template>

<script>

import UserInfoPanel from '../Panels/UserInfoPanel.vue';
export default {
name: 'SettingsView',
components:{UserInfoPanel},
data () {
    return {};
}
}
</script>

<style scoped lang="less">

</style>
