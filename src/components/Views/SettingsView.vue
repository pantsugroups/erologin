<template>
<div class="main padding-limiter">
    <div class="double-column">
        <div class="panel-narrow">
            <UserInfoPanel />
        </div>
        <div class="panel-wide">
            <PersonalSettingsPanel v-if="this.$route.params.setpanel === 'personal'"/>
            <PushSettingsPanel v-if="this.$route.params.setpanel === 'push'"/>
        </div>
    </div>
    
</div>
</template>

<script>

import UserInfoPanel from '../Panels/Settings/UserInfoPanel.vue';
import PersonalSettingsPanel from '../Panels/Settings/PersonalSettingsPanel.vue';
import PushSettingsPanel from '../Panels/Settings/PushSettingsPanel.vue';
export default {
name: 'SettingsView',
components:{UserInfoPanel,PushSettingsPanel,PersonalSettingsPanel},
data () {
    return {};
}
}
</script>

<style scoped lang="less">
.double-column{
    align-items:flex-start;
}
</style>
