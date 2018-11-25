<template>
<div class="main padding-limiter">
    <div class="double-column">
        <div class="panel-narrow">
            <UserInfoPanel />
        </div>
        <div class="panel-wide">
            <PersonalSettingsPanel />
        </div>
    </div>
    
</div>
</template>

<script>

import UserInfoPanel from '../Panels/Settings/UserInfoPanel.vue';
import PersonalSettingsPanel from '../Panels/Settings/PersonalSettingsPanel.vue';
export default {
name: 'SettingsView',
components:{UserInfoPanel,PersonalSettingsPanel},
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
